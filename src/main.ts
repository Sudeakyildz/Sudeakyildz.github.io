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

function renderNav(): string {
  return navItems
    .map(
      (item) =>
        `<a href="#${item.id}" class="nav-link text-sm font-medium">${item.label}</a>`
    )
    .join('')
}

function renderSkills(): string {
  return skills
    .map(
      (group) => `
    <div class="card rounded-2xl p-6">
      <h3 class="font-display text-lg font-semibold text-white mb-4">${group.category}</h3>
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
    <div class="relative pl-8 pb-12 last:pb-0">
      ${i < experience.length - 1 ? '<div class="timeline-line absolute left-[7px] top-3 w-0.5 h-full"></div>' : ''}
      <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-teal-400 border-2 border-[var(--color-surface)]"></div>
      <div class="card rounded-2xl p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 class="font-display text-xl font-semibold text-white">${job.role}</h3>
            <p class="text-violet-300 font-medium">${job.company}</p>
          </div>
          <span class="text-sm text-[var(--color-muted)] whitespace-nowrap">${job.period}</span>
        </div>
        <ul class="space-y-2 mb-5">
          ${job.highlights.map((h) => `<li class="text-sm text-[var(--color-muted)] leading-relaxed flex gap-2"><span class="text-teal-400 mt-1 shrink-0">▸</span><span>${h}</span></li>`).join('')}
        </ul>
        <div class="flex flex-wrap gap-2">
          ${job.tech.map((t) => `<span class="text-xs px-2.5 py-1 rounded-md bg-white/5 text-[var(--color-muted)] border border-[var(--color-border)]">${t}</span>`).join('')}
        </div>
      </div>
    </div>`
    )
    .join('')
}

function renderProjects(): string {
  return projects
    .map((project) => {
      const isAI = project.category.includes('AI')
      const categoryClass = isAI
        ? 'project-category-ai'
        : 'project-category-fullstack'
      return `
    <article class="card rounded-2xl p-6 md:p-8 flex flex-col h-full">
      <span class="text-xs font-medium px-3 py-1 rounded-full w-fit mb-4 ${categoryClass}">${project.category}</span>
      <h3 class="font-display text-lg font-semibold text-white mb-3">${project.title}</h3>
      <p class="text-sm text-[var(--color-muted)] leading-relaxed mb-4 flex-grow">${project.description}</p>
      <ul class="space-y-1.5 mb-5">
        ${project.highlights.map((h) => `<li class="text-xs text-[var(--color-muted)] flex gap-2"><span class="text-violet-400">•</span>${h}</li>`).join('')}
      </ul>
      <div class="flex flex-wrap gap-1.5 mt-auto">
        ${project.tech.map((t) => `<span class="skill-tag text-xs px-2.5 py-1 rounded-full">${t}</span>`).join('')}
      </div>
    </article>`
    })
    .join('')
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Background -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="glow-orb w-96 h-96 bg-violet-600 top-[-10%] left-[-5%]"></div>
    <div class="glow-orb w-80 h-80 bg-teal-500 bottom-[20%] right-[-5%]"></div>
    <div class="glow-orb w-64 h-64 bg-purple-700 top-[40%] left-[30%]"></div>
  </div>

  <!-- Navbar -->
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[var(--color-surface)]/80 border-b border-[var(--color-border)]">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" class="font-display font-bold text-lg gradient-text">${profile.name.split(' ').map(n => n[0]).join('')}</a>
      <div class="hidden md:flex items-center gap-8">
        ${renderNav()}
      </div>
      <a href="#contact" class="btn-primary text-sm font-medium px-5 py-2 rounded-full">İletişim</a>
    </nav>
  </header>

  <main>
    <!-- Hero -->
    <section class="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-teal-400 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">${profile.title}</p>
        <h1 class="font-display text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up animate-delay-1 leading-tight">
          ${profile.name.split(' ').slice(0, 2).join(' ')}<br/>
          <span class="gradient-text">${profile.name.split(' ').slice(2).join(' ')}</span>
        </h1>
        <p class="text-lg md:text-xl text-[var(--color-muted)] mb-8 animate-fade-up animate-delay-2 max-w-2xl mx-auto">
          ${profile.subtitle}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 animate-fade-up animate-delay-3">
          <a href="#projects" class="btn-primary px-8 py-3 rounded-full font-medium text-sm">Projelerimi Gör</a>
          <a href="${profile.github}" target="_blank" rel="noopener" class="btn-outline px-8 py-3 rounded-full font-medium text-sm">GitHub</a>
          <a href="${profile.linkedin}" target="_blank" rel="noopener" class="btn-outline px-8 py-3 rounded-full font-medium text-sm">LinkedIn</a>
        </div>
        <div class="mt-16 flex items-center justify-center gap-6 text-sm text-[var(--color-muted)] animate-fade-up animate-delay-4">
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            ${profile.location}
          </span>
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            ${profile.email}
          </span>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-[var(--color-muted)] hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
        </a>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="relative py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">Hakkımda</h2>
          <div class="w-16 h-1 bg-gradient-to-r from-violet-500 to-teal-400 mx-auto rounded-full"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="card rounded-2xl p-8 md:p-10">
            <p class="text-[var(--color-muted)] leading-relaxed text-base md:text-lg">${profile.summary}</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="card rounded-2xl p-6 text-center">
              <div class="text-3xl font-display font-bold gradient-text mb-1">3+</div>
              <div class="text-sm text-[var(--color-muted)]">Staj Deneyimi</div>
            </div>
            <div class="card rounded-2xl p-6 text-center">
              <div class="text-3xl font-display font-bold gradient-text mb-1">6+</div>
              <div class="text-sm text-[var(--color-muted)]">Proje</div>
            </div>
            <div class="card rounded-2xl p-6 text-center">
              <div class="text-3xl font-display font-bold gradient-text mb-1">AI</div>
              <div class="text-sm text-[var(--color-muted)]">Computer Vision</div>
            </div>
            <div class="card rounded-2xl p-6 text-center">
              <div class="text-3xl font-display font-bold gradient-text mb-1">Full</div>
              <div class="text-sm text-[var(--color-muted)]">Stack Dev</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="relative py-24 px-6 bg-[var(--color-surface-elevated)]/50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">Yetenekler</h2>
          <div class="w-16 h-1 bg-gradient-to-r from-violet-500 to-teal-400 mx-auto rounded-full"></div>
          <p class="text-[var(--color-muted)] mt-4 max-w-xl mx-auto">Yazılım geliştirmeden yapay zekaya, full-stack web uygulamalarından bilgisayarlı görü projelerine kadar geniş bir teknoloji yelpazesi.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${renderSkills()}
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="relative py-24 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">İş Deneyimi</h2>
          <div class="w-16 h-1 bg-gradient-to-r from-violet-500 to-teal-400 mx-auto rounded-full"></div>
        </div>
        <div class="relative">
          ${renderExperience()}
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="relative py-24 px-6 bg-[var(--color-surface-elevated)]/50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">Projeler</h2>
          <div class="w-16 h-1 bg-gradient-to-r from-violet-500 to-teal-400 mx-auto rounded-full"></div>
          <p class="text-[var(--color-muted)] mt-4 max-w-xl mx-auto">Yapay zeka, bilgisayarlı görü ve full-stack web geliştirme alanlarındaki projelerim.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${renderProjects()}
        </div>
      </div>
    </section>

    <!-- Education & Languages -->
    <section class="relative py-24 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div class="card rounded-2xl p-8">
          <h2 class="font-display text-2xl font-bold text-white mb-6">Eğitim</h2>
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-teal-400 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824 2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824 2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
            </div>
            <div>
              <h3 class="font-semibold text-white text-lg">${education.school}</h3>
              <p class="text-violet-300 text-sm mb-1">${education.degree}</p>
              <p class="text-sm text-[var(--color-muted)]">${education.period} · ${education.location}</p>
            </div>
          </div>
        </div>
        <div class="card rounded-2xl p-8">
          <h2 class="font-display text-2xl font-bold text-white mb-6">Diller</h2>
          <div class="space-y-4">
            ${languages.map((lang) => `
              <div class="flex items-center justify-between">
                <span class="text-white font-medium">${lang.name}</span>
                <span class="text-sm px-3 py-1 rounded-full bg-white/5 text-[var(--color-muted)] border border-[var(--color-border)]">${lang.level}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="relative py-24 px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">İletişime Geçin</h2>
        <p class="text-[var(--color-muted)] mb-10 max-w-lg mx-auto">Yeni projeler, iş fırsatları veya iş birliği için benimle iletişime geçebilirsiniz.</p>
        <div class="card rounded-2xl p-8 md:p-12">
          <div class="grid sm:grid-cols-2 gap-6 mb-8">
            <a href="mailto:${profile.email}" class="btn-outline rounded-xl p-4 flex items-center gap-3 justify-center hover:scale-[1.02] transition-transform">
              <svg class="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span class="text-sm">${profile.email}</span>
            </a>
            <a href="tel:${profile.phone.replace(/\s/g, '')}" class="btn-outline rounded-xl p-4 flex items-center gap-3 justify-center hover:scale-[1.02] transition-transform">
              <svg class="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span class="text-sm">${profile.phone}</span>
            </a>
          </div>
          <div class="flex items-center justify-center gap-4">
            <a href="${profile.github}" target="_blank" rel="noopener" class="w-12 h-12 rounded-full btn-outline flex items-center justify-center hover:scale-110 transition-transform" aria-label="GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="${profile.linkedin}" target="_blank" rel="noopener" class="w-12 h-12 rounded-full btn-outline flex items-center justify-center hover:scale-110 transition-transform" aria-label="LinkedIn">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="border-t border-[var(--color-border)] py-8 px-6 text-center text-sm text-[var(--color-muted)]">
    <p>© ${new Date().getFullYear()} ${profile.name}. Tüm hakları saklıdır.</p>
  </footer>
`

// Active nav link on scroll
const sections = navItems.map((item) => document.getElementById(item.id)!)
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link')

function updateActiveNav() {
  const scrollY = window.scrollY + 120
  let current = ''
  sections.forEach((section) => {
    if (section && section.offsetTop <= scrollY) {
      current = section.id
    }
  })
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`)
  })
}

window.addEventListener('scroll', updateActiveNav)
updateActiveNav()
