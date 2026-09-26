/**
 * Contact Form Logic - TEJA PORTFOLIO
 * Integrated with FormSubmit API
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('portfolioContactForm');
  if (form) {
    form.addEventListener('submit', handleContactSubmit);
  }
});

function getFormData() {
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const projectTypeSelect = document.getElementById('contactProjectType');
  const budgetSelect = document.getElementById('contactBudget');
  const messageInput = document.getElementById('contactMessage');

  return {
    name: nameInput ? nameInput.value.trim() : '',
    email: emailInput ? emailInput.value.trim() : '',
    projectType: projectTypeSelect ? projectTypeSelect.value : '',
    budget: budgetSelect ? budgetSelect.value : '',
    message: messageInput ? messageInput.value.trim() : ''
  };
}

function handleContactSubmit(e) {
  e.preventDefault();

  const { name, email, projectType, budget, message } = getFormData();
  const alertBox = document.getElementById('contactFormAlert');
  const submitBtn = e.target.querySelector('button[type="submit"]');

  if (!name || !email || !message) {
    if (alertBox) {
      alertBox.className = 'form-status-alert';
      alertBox.style.display = 'block';
      alertBox.style.background = 'rgba(239, 68, 68, 0.12)';
      alertBox.style.color = '#EF4444';
      alertBox.style.border = '1px solid rgba(239, 68, 68, 0.3)';
      alertBox.textContent = 'Please fill out your name, email, and message.';
    }
    return;
  }

  const recipientEmail = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.personal && PORTFOLIO_DATA.personal.email)
    ? PORTFOLIO_DATA.personal.email
    : 'bhanutejanelapudi@gmail.com';

  const originalBtnContent = submitBtn ? submitBtn.innerHTML : 'Send Message';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending Message...</span>';
  }

  const cleanBudget = budget ? budget.replace(/\$/g, 'USD ') : 'Not Specified';

  fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "Name": name,
      "Email": email,
      "_subject": `[Portfolio Inquiry] ${projectType || 'Client Request'} - ${name}`,
      "_captcha": 'false',
      "_template": 'table',
      "Project Type": projectType || 'General Inquiry',
      "Budget Range": cleanBudget,
      "Message": message
    })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(`Server returned HTTP ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    const isSuccess = data && (data.success === 'true' || data.success === true);
    if (isSuccess) {
      if (alertBox) {
        alertBox.className = 'form-status-alert success';
        alertBox.style.display = 'block';
        alertBox.style.background = 'rgba(16, 185, 129, 0.12)';
        alertBox.style.color = '#10B981';
        alertBox.style.border = '1px solid rgba(16, 185, 129, 0.3)';
        alertBox.innerHTML = `✓ <strong>Message Sent!</strong> Thank you, ${name}. Your message has been routed to <em>${recipientEmail}</em>.`;
      }
      const form = document.getElementById('portfolioContactForm');
      if (form) form.reset();
    } else {
      console.warn('FormSubmit returned error:', data);
      throw new Error(data.message || 'Form submission failed');
    }
  })
  .catch(err => {
    console.error('FormSubmit AJAX request error:', err);
    if (alertBox) {
      alertBox.className = 'form-status-alert';
      alertBox.style.display = 'block';
      alertBox.style.background = 'rgba(239, 68, 68, 0.12)';
      alertBox.style.color = '#EF4444';
      alertBox.style.border = '1px solid rgba(239, 68, 68, 0.3)';
      alertBox.innerHTML = `⚠️ Could not transmit message automatically (${err.message}). Please ensure you are serving the site over HTTP (http://tejaai.dev) or email <a href="mailto:${recipientEmail}" style="color: inherit; text-decoration: underline;">${recipientEmail}</a> directly.`;
    }
  })
  .finally(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
    }
  });
}
