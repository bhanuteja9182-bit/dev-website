/**
 * Project Case Study Modal Logic - TEJA PORTFOLIO
 */

function openCaseStudyModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById('caseStudyModalBackdrop');
  if (!modalBackdrop) return;

  const cs = project.caseStudy;

  // Populate Modal Fields
  document.getElementById('modalProjectCategory').textContent = project.category;
  document.getElementById('modalProjectTitle').textContent = project.title;
  document.getElementById('modalProblemText').textContent = cs.problem;
  document.getElementById('modalSolutionText').textContent = cs.solution;
  document.getElementById('modalResultText').textContent = cs.result;

  // Tech Stack Badges
  const stackContainer = document.getElementById('modalTechStackContainer');
  if (stackContainer) {
    stackContainer.innerHTML = project.tech.map(t => `<span class="badge badge-accent">${t}</span>`).join('');
  }

  // Architecture Flow
  const archContainer = document.getElementById('modalArchitectureContainer');
  if (archContainer) {
    archContainer.innerHTML = cs.architecture.map((step, idx) => `
      <div class="architecture-step">
        <span style="color: var(--accent-primary); font-weight: 700;">[Step ${idx + 1}]</span>
        <span>${step}</span>
      </div>
    `).join('');
  }

  // Key Features
  const featuresContainer = document.getElementById('modalFeaturesContainer');
  if (featuresContainer) {
    featuresContainer.innerHTML = cs.keyFeatures.map(feat => `
      <li style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.95rem;">
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--accent-primary); flex-shrink: 0; margin-top: 2px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        <span>${feat}</span>
      </li>
    `).join('');
  }

  // Challenges
  const challengesContainer = document.getElementById('modalChallengesContainer');
  if (challengesContainer) {
    challengesContainer.innerHTML = cs.challenges.map(chal => `
      <li style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.95rem; color: var(--text-secondary);">
        <span style="color: var(--color-warning);">⚠️</span>
        <span>${chal}</span>
      </li>
    `).join('');
  }

  // Links
  const githubBtn = document.getElementById('modalGithubBtn');
  const demoBtn = document.getElementById('modalDemoBtn');
  if (githubBtn) githubBtn.href = project.githubUrl;
  if (demoBtn) demoBtn.href = project.demoUrl;

  // Show Modal & trap focus / disable scroll
  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal() {
  const modalBackdrop = document.getElementById('caseStudyModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Close modal when clicking outside content area or pressing Escape
document.addEventListener('DOMContentLoaded', () => {
  const modalBackdrop = document.getElementById('caseStudyModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeCaseStudyModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudyModal();
    }
  });
});
