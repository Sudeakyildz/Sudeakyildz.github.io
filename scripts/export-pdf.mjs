import puppeteer from 'puppeteer'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const outputDir = path.resolve(rootDir, '..')
const outputPath = path.join(outputDir, 'SUDE NUR AKYILDIZ PORTFOLYO.pdf')
const previewPort = 4173
const previewUrl = `http://localhost:${previewPort}/pdf.html`

function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      shell: true,
      stdio: 'inherit',
    })

    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Komut başarısız: ${command} ${args.join(' ')}`))
    })
  })
}

function startPreview() {
  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['vite', 'preview', '--port', String(previewPort)], {
      cwd: rootDir,
      shell: true,
      stdio: ['ignore', 'pipe', 'pipe'],
    })

    let resolved = false

    const onData = (chunk) => {
      const text = chunk.toString()
      if (!resolved && text.includes('Local:')) {
        resolved = true
        resolve(child)
      }
    }

    child.stdout.on('data', onData)
    child.stderr.on('data', onData)
    child.on('error', reject)

    setTimeout(() => {
      if (!resolved) {
        resolved = true
        resolve(child)
      }
    }, 5000)
  })
}

async function waitForServer(url, retries = 30) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url)
      if (response.ok) return
    } catch {
      await new Promise((r) => setTimeout(r, 500))
    }
  }
  throw new Error('Önizleme sunucusu başlatılamadı.')
}

async function exportPdf() {
  console.log('📦 Proje derleniyor...')
  await runCommand('npm', ['run', 'build'], rootDir)

  console.log('🚀 Önizleme sunucusu başlatılıyor...')
  const previewProcess = await startPreview()

  try {
    await waitForServer(previewUrl)

    console.log('🖨️  PDF oluşturuluyor...')
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 })
    await page.goto(previewUrl, { waitUntil: 'networkidle0', timeout: 60000 })
    await page.evaluate(() => document.fonts.ready)
    await new Promise((r) => setTimeout(r, 1200))

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      displayHeaderFooter: false,
    })

    await browser.close()

    const stats = fs.statSync(outputPath)
    const sizeKb = (stats.size / 1024).toFixed(1)
    console.log(`✅ PDF hazır: ${outputPath}`)
    console.log(`   Boyut: ${sizeKb} KB`)
  } finally {
    previewProcess.kill('SIGTERM')
  }
}

exportPdf().catch((error) => {
  console.error('❌ PDF oluşturulamadı:', error.message)
  process.exit(1)
})
