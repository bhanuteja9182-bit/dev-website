/**
 * Main Application Logic - TEJA PORTFOLIO
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  renderHero();
  renderCapabilityStrip();
  renderAbout();
  renderServices();
  renderProjects();
  renderSkills();
  renderWorkflow();
  renderContact();
  renderFooter();
});

/* --------------------------------------------------------------------------
   THEME TOGGLE SYSTEM (DARK / LIGHT MODE)
   -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('teja_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('teja_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const iconContainer = document.getElementById('themeIcon');
  if (!iconContainer) return;
  if (theme === 'dark') {
    // Sun Icon
    iconContainer.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-10h-1M4.34 12h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
  } else {
    // Moon Icon
    iconContainer.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
  }
}

/* --------------------------------------------------------------------------
   NAVBAR & MOBILE DRAWER LOGIC
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const p = PORTFOLIO_DATA.personal;

  const navBrandBadge = document.getElementById('navBrandBadge');
  const navBrandName = document.getElementById('navBrandName');
  const navCtaBtn = document.getElementById('navCtaBtn');

  if (navBrandBadge && p.avatarPlaceholder) navBrandBadge.textContent = p.avatarPlaceholder;
  if (navBrandName && p.name) navBrandName.textContent = p.name;
  if (navCtaBtn) navCtaBtn.textContent = p.ctaText || "Hire Me";

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   HERO RENDERER
   -------------------------------------------------------------------------- */
function renderHero() {
  const p = PORTFOLIO_DATA.personal;
  
  const nameEl = document.getElementById('heroName');
  const headlineEl = document.getElementById('heroHeadline');
  const subheadlineEl = document.getElementById('heroSubheadline');
  const statusEl = document.getElementById('heroStatusText');
  const heroCtaText = document.getElementById('heroCtaText');

  if (nameEl) nameEl.textContent = p.fullName || p.name;
  if (headlineEl && p.headline) {
    headlineEl.innerHTML = p.headline.replace('practical AI-powered', '<span class="text-gradient">practical AI-powered</span>');
  }
  if (subheadlineEl) subheadlineEl.textContent = p.subheadline;
  if (statusEl) statusEl.textContent = p.status;
  if (heroCtaText) heroCtaText.textContent = p.ctaText || "Hire Me";

  // Social Links
  const githubLink = document.getElementById('heroGithub');
  const linkedinLink = document.getElementById('heroLinkedin');
  const resumeLink = document.getElementById('heroResume');

  if (githubLink) githubLink.href = p.githubUrl;
  if (linkedinLink) linkedinLink.href = p.linkedinUrl;
  if (resumeLink) resumeLink.href = p.resumeUrl;
}

/* --------------------------------------------------------------------------
   CAPABILITY STRIP RENDERER
   -------------------------------------------------------------------------- */
function renderCapabilityStrip() {
  const track = document.getElementById('capabilityTrack');
  if (!track) return;

  const itemsHtml = PORTFOLIO_DATA.capabilityStrip.map(tech => `
    <div class="strip-item">
      <span class="strip-bullet">⚡</span>
      <span>${tech}</span>
    </div>
  `).join('');

  // Duplicate items twice to create seamless infinite loop animation
  track.innerHTML = itemsHtml + itemsHtml + itemsHtml;
}

/* --------------------------------------------------------------------------
   ABOUT SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderAbout() {
  const about = PORTFOLIO_DATA.about;
  const bioContainer = document.getElementById('aboutBioContainer');
  const highlightsContainer = document.getElementById('aboutHighlightsContainer');

  if (bioContainer) {
    bioContainer.innerHTML = about.bio.map(paragraph => `<p>${paragraph}</p>`).join('');
  }

  if (highlightsContainer) {
    highlightsContainer.innerHTML = about.highlights.map(h => `
      <div class="highlight-card">
        <div class="highlight-num">${h.number}</div>
        <div>
          <h4 style="margin-bottom: 0.25rem;">${h.label}</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">${h.desc}</p>
        </div>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   SERVICES SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderServices() {
  const container = document.getElementById('servicesContainer');
  if (!container) return;

  const svgIcons = {
    "message-square-text": `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`,
    "database-zap": `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21 3.582 4 8 4s8-1.79 8-4"/></svg>`,
    "workflow": `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
    "brain-circuit": `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    "layout-grid": `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`,
    "rocket": `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 0112.728 0M12 15v5m0 0l-2-2m2 2l2-2"/></svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.services.map(s => `
    <div class="service-card">
      <div>
        <div class="service-header">
          <div class="service-icon-box">${svgIcons[s.icon] || svgIcons["brain-circuit"]}</div>
          <span class="badge badge-accent">${s.tag}</span>
        </div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.description}</p>
        <div class="service-deliverables">
          ${s.deliverables.map(item => `
            <div class="deliverable-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>${item}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <button onclick="selectServiceForContact('${s.title}')" class="btn btn-secondary btn-sm" style="width: 100%;">
        Request This Service
      </button>
    </div>
  `).join('');
}

function selectServiceForContact(serviceTitle) {
  const contactSection = document.getElementById('contact');
  const projectTypeSelect = document.getElementById('contactProjectType');
  if (projectTypeSelect) {
    for (let option of projectTypeSelect.options) {
      if (option.text.includes(serviceTitle) || serviceTitle.includes(option.text)) {
        option.selected = true;
        break;
      }
    }
  }
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* --------------------------------------------------------------------------
   PROJECTS SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map(p => `
    <div class="project-card">
      <div class="project-body">
        <div class="project-meta">
          <span class="project-category">${p.category}</span>
          <span class="badge">Featured</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-stack">
          ${p.tech.map(t => `<span class="badge badge-accent">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <button onclick="openCaseStudyModal('${p.id}')" class="btn btn-primary btn-sm">
            <span>View Case Study</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
          <div style="display: flex; gap: 0.5rem;">
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon" title="View Source Code (Placeholder Link)">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   SKILLS SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  if (!container) return;

  const s = PORTFOLIO_DATA.skills;
  const categories = [
    { title: "Programming Languages", key: "programming", icon: "💻" },
    { title: "AI / Machine Learning", key: "aiMl", icon: "🤖" },
    { title: "Libraries & Frameworks", key: "libraries", icon: "📚" },
    { title: "LLM & Generative AI", key: "llmAi", icon: "✨" },
    { title: "Web & Backend", key: "webBackend", icon: "🌐" },
    { title: "Databases & Vector Search", key: "dataSearch", icon: "🗄️" },
    { title: "Tools & Environment", key: "tools", icon: "🛠️" }
  ];

  container.innerHTML = categories.map(cat => `
    <div class="skill-category-card">
      <h3 class="category-title">
        <span>${cat.icon}</span>
        <span>${cat.title}</span>
      </h3>
      <div class="skill-tags-wrapper">
        ${s[cat.key].map(item => `<span class="badge badge-accent">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   WORKFLOW SECTION RENDERER
   -------------------------------------------------------------------------- */
function renderWorkflow() {
  const container = document.getElementById('workflowContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.workflow.map(w => `
    <div class="workflow-card">
      <div class="step-number">${w.step}</div>
      <h4 class="step-name">${w.name}</h4>
      <p class="step-desc">${w.desc}</p>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   CONTACT & FOOTER RENDERERS
   -------------------------------------------------------------------------- */
function renderContact() {
  const p = PORTFOLIO_DATA.personal;
  const emailEl = document.getElementById('contactEmailText');
  const phoneEl = document.getElementById('contactPhoneText');
  const emailLink = document.getElementById('contactEmailLink');
  const phoneLink = document.getElementById('contactPhoneLink');

  if (emailEl) emailEl.textContent = p.email;
  if (phoneEl) phoneEl.textContent = p.phone;
  if (emailLink) emailLink.href = `mailto:${p.email}`;
  if (phoneLink) phoneLink.href = `tel:${p.phone}`;

  // Populate project types
  const projectTypeSelect = document.getElementById('contactProjectType');
  if (projectTypeSelect) {
    projectTypeSelect.innerHTML = PORTFOLIO_DATA.contactConfig.projectTypes.map(t => `<option value="${t}">${t}</option>`).join('');
  }

  // Populate budget ranges
  const budgetSelect = document.getElementById('contactBudget');
  if (budgetSelect) {
    budgetSelect.innerHTML = PORTFOLIO_DATA.contactConfig.budgetRanges.map(b => `<option value="${b}">${b}</option>`).join('');
  }
}

function renderFooter() {
  const p = PORTFOLIO_DATA.personal;
  const copyrightYear = new Date().getFullYear();
  
  const footerCopyright = document.getElementById('footerCopyright');
  if (footerCopyright) {
    footerCopyright.textContent = `© ${copyrightYear} ${p.name} — ${p.role}. All rights reserved.`;
  }
}
