import './pdf.css'
import {
  pdfProfile,
  pdfHighlights,
  pdfSkillLevels,
  pdfTools,
  pdfCoreStrengths,
  pdfCurrentlyLearning,
  pdfExperience,
  pdfFeaturedProject,
  pdfSoftwareProjects,
  pdfAiProjects,
  pdfEducation,
  pdfLanguages,
  pdfCertificates,
  type PdfProject,
} from './pdf-data'

// ASCII-only uppercase labels — avoids Turkish locale I/i issues in PDF
const L = {
  contact: 'CONTACT',
  education: 'EDUCATION',
  languages: 'LANGUAGES',
  learning: 'CURRENTLY LEARNING',
  profile: 'PROFILE',
  work: 'WORK EXPERIENCE',
  featured: 'FEATURED PROJECT',
  highlights: 'HIGHLIGHTS',
  software: 'SOFTWARE PROJECTS',
  ai: 'AI PROJECTS',
  skills: 'TECHNICAL SKILLS',
  strengths: 'CORE STRENGTHS',
  tools: 'TOOLS & PLATFORMS',
  portfolio: 'PORTFOLIO',
} as const

function bullets(items: string[]): string {
  return items
    .map((b) => `<tr><td class="b-dot">•</td><td class="b-text">${b}</td></tr>`)
    .join('')
}

function shortGithub(url: string): string {
  return url.replace(/^https?:\/\//, '')
}

function renderProject(p: PdfProject, featured = false): string {
  const cls = featured ? 'entry entry-featured' : 'entry'
  const tag =
    p.category === 'QA' ? 'tag-qa' : p.category === 'AI' ? 'tag-ai' : 'tag-web'
  const tagLabel =
    p.category === 'QA' ? 'QA Automation' : p.category === 'AI' ? 'AI / CV' : 'Full-Stack'

  const metricsRow = p.metrics
    ? `<tr><td class="meta-label">Metrics</td><td class="meta-value metrics">${p.metrics}</td></tr>`
    : ''

  return `
    <div class="${cls}">
      <table class="entry-head"><tr>
        <td>
          <span class="entry-title">${p.title}</span>
          <span class="tag ${tag}">${tagLabel}</span>
        </td>
      </tr></table>
      <table class="proj-meta">
        <tr><td class="meta-label">Problem</td><td class="meta-value">${p.problem}</td></tr>
        <tr><td class="meta-label">Solution</td><td class="meta-value">${p.solution}</td></tr>
        ${metricsRow}
        <tr><td class="meta-label">Technologies</td><td class="meta-value tech-line">${p.technologies}</td></tr>
        <tr><td class="meta-label">GitHub</td><td class="meta-value"><a href="${p.github}" class="gh-link">${shortGithub(p.github)}</a></td></tr>
        <tr><td class="meta-label">Role</td><td class="meta-value">${p.role}</td></tr>
        <tr><td class="meta-label">Duration</td><td class="meta-value">${p.period}</td></tr>
      </table>
    </div>`
}

function experienceBlocks(): string {
  return pdfExperience
    .map(
      (job) => `
      <div class="entry">
        <table class="entry-head"><tr>
          <td><span class="entry-title">${job.role}</span><span class="entry-co"> — ${job.company}</span></td>
          <td class="entry-date">${job.period}</td>
        </tr></table>
        <table class="bullets">${bullets(job.bullets)}</table>
        <p class="tech-line">${job.tech}</p>
      </div>`
    )
    .join('')
}

function skillLevels(): string {
  return pdfSkillLevels
    .map(
      (s) => `
      <div class="skill-level">
        <p class="skill-level-label">${s.level}</p>
        <p class="skill-level-items">${s.items.join(' · ')}</p>
      </div>`
    )
    .join('')
}

function highlightsBlock(): string {
  const half = Math.ceil(pdfHighlights.length / 2)
  const left = pdfHighlights.slice(0, half)
  const right = pdfHighlights.slice(half)
  const item = (h: string) => `<p class="highlight-item">✔ ${h}</p>`
  return `<table class="highlights-cols"><tr>
    <td>${left.map(item).join('')}</td>
    <td>${right.map(item).join('')}</td>
  </tr></table>`
}

function strengthsList(): string {
  const half = Math.ceil(pdfCoreStrengths.length / 2)
  const left = pdfCoreStrengths.slice(0, half)
  const right = pdfCoreStrengths.slice(half)
  const item = (s: string) => `<p class="strength-item">✔ ${s}</p>`
  return `<table class="strengths-cols"><tr>
    <td>${left.map(item).join('')}</td>
    <td>${right.map(item).join('')}</td>
  </tr></table>`
}

function sidebarBlock(label: string, content: string): string {
  return `<div class="side-block"><p class="side-label">${label}</p>${content}</div>`
}

function sidebarContact(full = true): string {
  if (!full) {
    return `
      <p class="side-value"><a href="mailto:${pdfProfile.email}">${pdfProfile.email}</a></p>
      <p class="side-value">${pdfProfile.phone}</p>
      <p class="side-value"><a href="${pdfProfile.linkedin}">${pdfProfile.linkedinLabel}</a></p>
      <p class="side-value"><a href="${pdfProfile.github}">${pdfProfile.githubLabel}</a></p>`
  }
  return `
    <p class="side-value">${pdfProfile.location}</p>
    <p class="side-value">${pdfProfile.phone}</p>
    <p class="side-value"><a href="mailto:${pdfProfile.email}">${pdfProfile.email}</a></p>
    <p class="side-value"><a href="${pdfProfile.linkedin}">${pdfProfile.linkedinLabel}</a></p>
    <p class="side-value"><a href="${pdfProfile.github}">${pdfProfile.githubLabel}</a></p>
    <p class="side-value">${pdfProfile.website}</p>`
}

document.querySelector<HTMLDivElement>('#pdf-root')!.innerHTML = `
  <table class="sheet">
    <tr>
      <td class="sidebar">
        <p class="side-name">${pdfProfile.name}</p>
        <p class="side-role">${pdfProfile.title}</p>
        <p class="side-focus">${pdfProfile.focus}</p>
        <div class="side-divider"></div>
        ${sidebarBlock(L.contact, sidebarContact())}
        <div class="side-divider"></div>
        ${sidebarBlock(L.education, `
          <p class="side-value bold">${pdfEducation.degree}</p>
          <p class="side-value">${pdfEducation.school}</p>
          <p class="side-value">${pdfEducation.period}</p>
          <p class="side-value">${pdfEducation.location}</p>
        `)}
        <div class="side-divider"></div>
        ${sidebarBlock(L.languages, pdfLanguages.map((l) => `<p class="side-value">${l.name} <span class="side-muted">— ${l.level}</span></p>`).join(''))}
        <div class="side-divider"></div>
        ${sidebarBlock(L.learning, pdfCurrentlyLearning.map((item) => `<p class="side-value">• ${item}</p>`).join(''))}
      </td>
      <td class="main">
        <div class="main-section">
          <h2 class="main-heading">${L.profile}</h2>
          <p class="summary">${pdfProfile.summary}</p>
          <p class="summary goal">${pdfProfile.goal}</p>
        </div>
        <div class="main-section">
          <h2 class="main-heading">${L.work}</h2>
          ${experienceBlocks()}
        </div>
        <div class="main-section">
          <h2 class="main-heading">${L.featured}</h2>
          ${renderProject(pdfFeaturedProject, true)}
        </div>
        <div class="main-section highlight-box">
          <h2 class="main-heading">${L.highlights}</h2>
          ${highlightsBlock()}
        </div>
      </td>
    </tr>
  </table>

  <table class="sheet page-break">
    <tr>
      <td class="sidebar sidebar-mini">
        <p class="side-name-sm">${pdfProfile.name}</p>
        <p class="side-role-sm">${L.portfolio}</p>
        <div class="side-divider"></div>
        ${sidebarBlock(L.contact, sidebarContact(false))}
      </td>
      <td class="main">
        <div class="main-section">
          <h2 class="main-heading">${L.software}</h2>
          ${pdfSoftwareProjects.map((p) => renderProject(p)).join('')}
        </div>
      </td>
    </tr>
  </table>

  <table class="sheet page-break">
    <tr>
      <td class="sidebar sidebar-mini">
        <p class="side-name-sm">${pdfProfile.name}</p>
        <p class="side-role-sm">${L.portfolio}</p>
        <div class="side-divider"></div>
        ${sidebarBlock(L.contact, sidebarContact(false))}
        ${pdfCertificates.length > 0 ? `<div class="side-divider"></div>${sidebarBlock('CERTIFICATES', pdfCertificates.map((c) => `<p class="side-value">• ${c}</p>`).join(''))}` : ''}
      </td>
      <td class="main">
        <div class="main-section">
          <h2 class="main-heading">${L.ai}</h2>
          ${pdfAiProjects.map((p) => renderProject(p)).join('')}
        </div>
        <div class="main-section">
          <h2 class="main-heading">${L.skills}</h2>
          ${skillLevels()}
          <div class="tools-block">
            <p class="skill-level-label">${L.tools}</p>
            <p class="skill-level-items">${pdfTools.join(' · ')}</p>
          </div>
        </div>
        <div class="main-section highlight-box">
          <h2 class="main-heading">${L.strengths}</h2>
          ${strengthsList()}
        </div>
      </td>
    </tr>
  </table>
`
