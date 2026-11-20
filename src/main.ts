import './style.css'
import {
  profile,
  skills,
  experience,
  projects,
  education,
  languages,
} from './data'

const navItems = [
  { id: 'about', label: 'Hakkımda' },
  { id: 'skills', label: 'Yetenekler' },
  { id: 'experience', label: 'Deneyim' },
  { id: 'projects', label: 'Projeler' },
  { id: 'contact', label: 'İletişim' },
]

const roles = [
  'Bilgisayar Mühendisi',
  'Yapay Zeka Geliştirici',
  'Full-Stack Developer',
  'Bilgisayarlı Görü Meraklısı',
]

const icon = {
  pin: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  mail: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  phone:
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
  github:
    '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
  linkedin:
    '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  arrow:
    '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6-6l6 6-6 6"/></svg>',
  cap: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 7v-7.5l4-2.222"/></svg>',
}

const firstName = profile.name.split(' ').slice(0, 2).join(' ')
const lastName = profile.name.split(' ').slice(2).join(' ')
const initials = profile.name
  .split(' ')
  .map((n) => n[0])
  .join('')

const allTech = Array.from(new Set(skills.flatMap((s) => s.items)))
const stats = [
  { value: experience.length, suffix: '', label: 'Staj Deneyimi' },
  { value: projects.length, suffix: '', label: 'Proje' },
  { value: allTech.length, suffix: '+', label: 'Teknoloji' },
  { value: 100, suffix: '%', label: 'Tehdit Recall (AI Projesi)' },
]

function sectionHeader(eyebrow: string, title: string, desc = ''): string {
  return `
    <div class="mb-14 reveal">
      <p class="eyebrow mb-3">// ${eyebrow}</p>
      <h2 class="section-title">${title}</h2>
      ${desc ? `<p class="text-[var(--color-muted)] mt-4 max-w-xl">${desc}</p>` : ''}
    </div>`
}

function renderNav(): string {
  return navItems
    .map(
      (item) =>
        `<a href="#${item.id}" class="nav-link text-sm font-medium">${item.label}</a>`
    )
    .join('')
}

function renderMobileNav(): string {
  return navItems
    .map(
      (item) =>
        `<a href="#${item.id}" class="mobile-link block py-3 text-[var(--color-muted)] hover:text-white border-b border-[var(--color-border)]">${item.label}</a>`
    )
    .join('')
}

function renderMarquee(): string {
  const row = allTech
    .map(
      (t) =>
        `<span class="flex items-center gap-2.5 text-[var(--color-muted)] font-display text-lg whitespace-nowrap"><span class="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-400 to-teal-300"></span>${t}</span>`
    )
    .join('')
  return row + row
}

function renderSkills(): string {
  const spans = [
    'lg:col-span-2',
    '',
    '',
    '',
    'lg:col-span-2',
    '',
  ]
  return skills
    .map(
      (group, i) => `
    <div class="card reveal rounded-3xl p-7 ${spans[i] ?? ''}" style="--d:${i * 70}ms">
      <div class="flex items-center justify-between mb-5">
        <h3 class="font-display text-lg font-semibold text-white">${group.category}</h3>
        <span class="font-mono text-xs text-[var(--color-muted)]">${String(group.items.length).padStart(2, '0')}</span>
      </div>
      <div class="flex flex-wrap gap-2">
        ${group.items.map((item) => `<span class="skill-tag text-xs px-3 py-1.5 rounded-full">${item}</span>`).join('')}
      </div>
    </div>`
    )
    .join('')
}

function renderExperience(): string {
  return experience
    .map(
      (job, i) => `
    <div class="relative pl-10 pb-12 last:pb-0 reveal">
      ${i < experience.length - 1 ? '<div class="timeline-line absolute left-[9px] top-4 bottom-0 w-0.5"></div>' : ''}
      <div class="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[var(--color-surface)] border-2 border-violet-400 flex items-center justify-center">
        <span class="w-1.5 h-1.5 rounded-full bg-teal-300 ${i === 0 ? 'pulse-dot' : ''}"></span>
      </div>
      <div class="card rounded-3xl p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
          <div>
            <h3 class="font-display text-xl font-semibold text-white">${job.role}</h3>
            <p class="text-violet-300 font-medium">${job.company}</p>
          </div>
          <span class="font-mono text-xs px-3 py-1.5 rounded-full tech-chip w-fit whitespace-nowrap">${job.period}</span>
        </div>
        <ul class="space-y-2.5 mb-6">
          ${job.highlights.map((h) => `<li class="text-sm text-[var(--color-muted)] leading-relaxed flex gap-3"><span class="text-teal-300 mt-0.5 shrink-0">▹</span><span>${h}</span></li>`).join('')}
        </ul>
        <div class="flex flex-wrap gap-2">
          ${job.tech.map((t) => `<span class="tech-chip text-xs px-2.5 py-1 rounded-md">${t}</span>`).join('')}
        </div>
      </div>
    </div>`
    )
    .join('')
}

function renderProjects(): string {
  return projects
    .map((project, i) => {
      const isAI = project.category.includes('AI')
      const categoryClass = isAI
        ? 'project-category-ai'
        : 'project-category-fullstack'
      return `
    <article class="card project-card reveal rounded-3xl p-7 flex flex-col h-full" data-type="${isAI ? 'ai' : 'fullstack'}" style="--d:${(i % 3) * 80}ms">
      <div class="flex items-center justify-between mb-5">
        <span class="text-xs font-medium px-3 py-1 rounded-full ${categoryClass}">${project.category}</span>
        <span class="font-mono text-sm text-white/20">${String(i + 1).padStart(2, '0')}</span>
      </div>
      <h3 class="font-display text-xl font-semibold text-white mb-3 leading-snug">${project.title}</h3>
      <p class="text-sm text-[var(--color-muted)] leading-relaxed mb-5">${project.description}</p>
      <ul class="space-y-2 mb-6 flex-grow">
        ${project.highlights.map((h) => `<li class="text-xs text-[var(--color-muted)] flex gap-2"><span class="text-teal-300">✦</span>${h}</li>`).join('')}
      </ul>
      <div class="flex flex-wrap gap-1.5 pt-5 border-t border-[var(--color-border)]">
        ${project.tech.map((t) => `<span class="tech-chip text-[11px] px-2 py-1 rounded-md">${t}</span>`).join('')}
      </div>
    </article>`
    })
    .join('')
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="progress"></div>

  <!-- Background -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="aurora aurora-1"></div>
    <div class="aurora aurora-2"></div>
    <div class="aurora aurora-3"></div>
  </div>
  <div class="bg-grid"></div>
  <div class="cursor-glow" id="cursor-glow"></div>

  <!-- Navbar -->
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[var(--color-surface)]/70 border-b border-[var(--color-border)]">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2.5 font-display font-bold text-lg">
        <span class="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-teal-400 flex items-center justify-center text-sm text-white">${initials}</span>
        <span class="hidden sm:inline text-white">${firstName}</span>
      </a>
      <div class="hidden md:flex items-center gap-8">${renderNav()}</div>
      <div class="flex items-center gap-3">
        <a href="#contact" class="btn-primary hidden sm:inline-block text-sm font-medium px-5 py-2 rounded-full">Hadi Konuşalım</a>
        <button id="menu-btn" aria-label="Menü" class="md:hidden w-10 h-10 rounded-xl btn-outline flex items-center justify-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </nav>
    <div id="mobile-menu" class="md:hidden px-6"><div class="pb-3">${renderMobileNav()}</div></div>
  </header>

  <main class="relative z-10">
    <!-- Hero -->
    <section class="relative min-h-screen flex items-center px-6 pt-28 pb-16">
      <div class="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <div>
          <div class="animate-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full tech-chip text-xs mb-7" style="--d:0ms">
            <span class="w-2 h-2 rounded-full bg-emerald-400 pulse-dot"></span>
            Yeni fırsatlara açığım
          </div>
          <h1 class="animate-fade-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6" style="--d:100ms">
            Merhaba, ben<br/>${firstName}
            <span class="gradient-text"> ${lastName}</span>
          </h1>
          <p class="animate-fade-up text-xl md:text-2xl text-[var(--color-muted)] mb-3 h-9 font-display" style="--d:200ms">
            <span id="typed" class="caret text-white"></span>
          </p>
          <p class="animate-fade-up text-[var(--color-muted)] max-w-xl leading-relaxed mb-9" style="--d:300ms">
            ${profile.summary}
          </p>
          <div class="animate-fade-up flex flex-wrap items-center gap-3" style="--d:400ms">
            <a href="#projects" class="btn-primary px-7 py-3.5 rounded-full font-medium text-sm inline-flex items-center gap-2">Projelerimi Gör ${icon.arrow}</a>
            <a href="/pdf.html" target="_blank" rel="noopener" class="btn-outline px-7 py-3.5 rounded-full font-medium text-sm">CV Görüntüle</a>
            <a href="${profile.github}" target="_blank" rel="noopener" class="btn-outline w-12 h-12 rounded-full flex items-center justify-center" aria-label="GitHub">${icon.github}</a>
            <a href="${profile.linkedin}" target="_blank" rel="noopener" class="btn-outline w-12 h-12 rounded-full flex items-center justify-center" aria-label="LinkedIn">${icon.linkedin}</a>
          </div>
          <p class="animate-fade-up mt-9 flex items-center gap-2 text-sm text-[var(--color-muted)]" style="--d:500ms">
            <span class="text-violet-300">${icon.pin}</span>${profile.location}
          </p>
        </div>

        <!-- Terminal card -->
        <div class="relative animate-fade-up hidden lg:block" style="--d:300ms">
          <div class="terminal rounded-2xl p-5 float-a">
            <div class="flex items-center gap-2 mb-5">
              <span class="w-3 h-3 rounded-full bg-red-400/80"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-400/80"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-400/80"></span>
              <span class="ml-3 text-xs text-white/30">sude.ts</span>
            </div>
            <pre class="text-[13px] leading-7 overflow-hidden"><code><span class="text-violet-400">const</span> <span class="text-teal-300">sude</span> = {
  <span class="text-sky-300">rol</span>: <span class="text-amber-200">"${profile.title}"</span>,
  <span class="text-sky-300">odak</span>: [<span class="text-amber-200">"AI"</span>, <span class="text-amber-200">"Vision"</span>, <span class="text-amber-200">"Full-Stack"</span>],
  <span class="text-sky-300">stack</span>: [<span class="text-amber-200">"Python"</span>, <span class="text-amber-200">"C#"</span>, <span class="text-amber-200">"React"</span>],
  <span class="text-sky-300">staj</span>: <span class="text-pink-300">${experience.length}</span>,
  <span class="text-sky-300">proje</span>: <span class="text-pink-300">${projects.length}</span>,
  <span class="text-sky-300">kahveSever</span>: <span class="text-pink-300">true</span>,
  <span class="text-sky-300">buildEder</span>() {
    <span class="text-violet-400">return</span> <span class="text-amber-200">"harika şeyler ✨"</span>
  }
}</code></pre>
          </div>
          <div class="float-b absolute -bottom-8 -left-8 card rounded-2xl px-5 py-4 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-teal-400/15 text-teal-300 flex items-center justify-center font-display font-bold">AI</div>
            <div>
              <p class="text-white text-sm font-semibold leading-tight">%100 Recall</p>
              <p class="text-xs text-[var(--color-muted)]">Tehlikeli madde tespiti</p>
            </div>
          </div>
          <div class="float-a absolute -top-6 -right-4 card rounded-2xl px-5 py-4 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-violet-400/15 text-violet-300 flex items-center justify-center font-display font-bold">30</div>
            <div>
              <p class="text-white text-sm font-semibold leading-tight">FPS Gerçek Zamanlı</p>
              <p class="text-xs text-[var(--color-muted)]">OpenCV pipeline</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Marquee -->
    <div class="marquee overflow-hidden py-8 border-y border-[var(--color-border)] bg-white/[0.015]">
      <div class="marquee-track">${renderMarquee()}</div>
    </div>

    <!-- About -->
    <section id="about" class="py-28 px-6">
      <div class="max-w-6xl mx-auto">
        ${sectionHeader('hakkımda', 'Gerçek problemlere <span class="gradient-text">akıllı çözümler</span>')}
        <div class="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
          <div class="card reveal rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-8">
            <p class="text-[var(--color-muted)] leading-relaxed text-base md:text-lg">${profile.summary}</p>
            <div class="grid sm:grid-cols-2 gap-4 pt-6 border-t border-[var(--color-border)]">
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-teal-400 flex items-center justify-center shrink-0 text-white">${icon.cap}</div>
                <div>
                  <p class="text-white font-semibold text-sm leading-snug">${education.school}</p>
                  <p class="text-violet-300 text-xs mt-0.5">${education.degree}</p>
                  <p class="text-xs text-[var(--color-muted)] mt-0.5">${education.period}</p>
                </div>
              </div>
              <div class="space-y-2.5">
                ${languages.map((l) => `<div class="flex items-center justify-between text-sm"><span class="text-white">${l.name}</span><span class="tech-chip text-xs px-2.5 py-1 rounded-full">${l.level}</span></div>`).join('')}
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            ${stats
              .map(
                (s, i) => `
              <div class="card reveal rounded-3xl p-6 flex flex-col justify-center" style="--d:${i * 80}ms">
                <div class="text-4xl md:text-5xl font-display font-bold gradient-text mb-2"><span data-count="${s.value}">0</span>${s.suffix}</div>
                <div class="text-sm text-[var(--color-muted)]">${s.label}</div>
              </div>`
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="py-28 px-6 bg-[var(--color-surface-elevated)]/60">
      <div class="max-w-6xl mx-auto">
        ${sectionHeader('yetenekler', 'Araç çantam', 'Yazılım geliştirmeden yapay zekaya, full-stack uygulamalardan bilgisayarlı görüye geniş bir teknoloji yelpazesi.')}
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          ${renderSkills()}
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        ${sectionHeader('deneyim', 'Staj ve <span class="gradient-text">iş deneyimi</span>')}
        <div class="relative">${renderExperience()}</div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-28 px-6 bg-[var(--color-surface-elevated)]/60">
      <div class="max-w-6xl mx-auto">
        ${sectionHeader('projeler', 'Seçili <span class="gradient-text">projeler</span>', 'Yapay zeka, bilgisayarlı görü ve full-stack web geliştirme alanlarından işler.')}
        <div class="flex flex-wrap gap-2 mb-10 reveal" id="filters">
          <button class="filter-btn active text-sm px-5 py-2 rounded-full" data-filter="all">Tümü</button>
          <button class="filter-btn text-sm px-5 py-2 rounded-full" data-filter="ai">AI / Görü</button>
          <button class="filter-btn text-sm px-5 py-2 rounded-full" data-filter="fullstack">Full-Stack</button>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="project-grid">
          ${renderProjects()}
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-28 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="card reveal rounded-[2rem] p-8 md:p-14 text-center">
          <p class="eyebrow mb-4">// iletişim</p>
          <h2 class="section-title mb-5">Birlikte bir şeyler <span class="gradient-text">inşa edelim</span></h2>
          <p class="text-[var(--color-muted)] mb-10 max-w-lg mx-auto">Yeni projeler, iş fırsatları veya iş birliği için bana ulaşabilirsiniz.</p>
          <div class="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            <a href="mailto:${profile.email}" class="btn-outline rounded-2xl p-4 flex items-center gap-3 justify-center">
              <span class="text-violet-300">${icon.mail}</span><span class="text-sm">${profile.email}</span>
            </a>
            <a href="tel:${profile.phone.replace(/\s/g, '')}" class="btn-outline rounded-2xl p-4 flex items-center gap-3 justify-center">
              <span class="text-teal-300">${icon.phone}</span><span class="text-sm">${profile.phone}</span>
            </a>
          </div>
          <div class="flex items-center justify-center gap-3">
            <a href="${profile.github}" target="_blank" rel="noopener" class="w-12 h-12 rounded-full btn-outline flex items-center justify-center" aria-label="GitHub">${icon.github}</a>
            <a href="${profile.linkedin}" target="_blank" rel="noopener" class="w-12 h-12 rounded-full btn-outline flex items-center justify-center" aria-label="LinkedIn">${icon.linkedin}</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="relative z-10 border-t border-[var(--color-border)] py-8 px-6 text-center text-sm text-[var(--color-muted)]">
    <p>© ${new Date().getFullYear()} ${profile.name} · TypeScript, Vite ve Tailwind ile yapıldı</p>
  </footer>

  <button id="to-top" aria-label="Yukarı çık" class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full btn-primary flex items-center justify-center">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
  </button>
`

// ---------- Typewriter ----------
const typedEl = document.getElementById('typed')!
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (reduceMotion) {
  typedEl.textContent = roles[0]
} else {
  let ri = 0
  let ci = 0
  let deleting = false
  const tick = () => {
    const word = roles[ri]
    ci += deleting ? -1 : 1
    typedEl.textContent = word.slice(0, ci)
    let delay = deleting ? 35 : 80
    if (!deleting && ci === word.length) {
      deleting = true
      delay = 1600
    } else if (deleting && ci === 0) {
      deleting = false
      ri = (ri + 1) % roles.length
      delay = 350
    }
    setTimeout(tick, delay)
  }
  tick()
}

// ---------- Reveal on scroll + counters ----------
function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count)
  const start = performance.now()
  const dur = 1400
  const step = (now: number) => {
    const p = Math.min((now - start) / dur, 1)
    el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))))
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const el = entry.target as HTMLElement
      el.classList.add('in')
      el.querySelectorAll<HTMLElement>('[data-count]').forEach(animateCount)
      revealObserver.unobserve(el)
    })
  },
  { threshold: 0.12 }
)
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

// ---------- Card spotlight + cursor glow ----------
const glow = document.getElementById('cursor-glow')!
window.addEventListener('pointermove', (e) => {
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  const card = (e.target as HTMLElement).closest<HTMLElement>('.card')
  if (card) {
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - r.left}px`)
    card.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
})

// ---------- Project filter ----------
const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn')
const projectCards = document.querySelectorAll<HTMLElement>('.project-card')
filterBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter
    filterBtns.forEach((b) => b.classList.toggle('active', b === btn))
    projectCards.forEach((card) => {
      const show = f === 'all' || card.dataset.type === f
      card.classList.toggle('hidden-card', !show)
      if (show) card.classList.add('in')
    })
  })
)

// ---------- Mobile menu ----------
const menu = document.getElementById('mobile-menu')!
document.getElementById('menu-btn')!.addEventListener('click', () => menu.classList.toggle('open'))
document.querySelectorAll('.mobile-link').forEach((l) =>
  l.addEventListener('click', () => menu.classList.remove('open'))
)

// ---------- Scroll: progress, active nav, to-top ----------
const sections = navItems.map((item) => document.getElementById(item.id)!)
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link')
const progress = document.getElementById('progress')!
const toTop = document.getElementById('to-top')!
toTop.addEventListener('click', () => window.scrollTo({ top: 0 }))

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
  toTop.classList.toggle('show', window.scrollY > 600)

  const y = window.scrollY + 140
  let current = ''
  sections.forEach((s) => {
    if (s && s.offsetTop <= y) current = s.id
  })
  navLinks.forEach((link) =>
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`)
  )
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()
