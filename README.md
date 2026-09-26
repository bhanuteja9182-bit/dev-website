# TEJA — AI/ML Developer Portfolio

A production-grade, highly-responsive personal portfolio website for **Teja (AI/ML Developer)** engineered for client acquisition, showcasing technical capabilities, 5 featured project case studies, client-facing services, and an interactive flagship **AI Customer Support Assistant** demo.

---

## 🚀 Local Setup & Testing Commands

### Option A: Using Python (Recommended)
Run the bundled development server from the project directory:
```bash
python server.py
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Option B: Direct Browser Access
Simply open `index.html` directly in any web browser.

---

## ⚙️ Centralized Data Configuration & Asset Replacement Guide

All personal information, social profile links, project case studies, services, skills, and contact parameters are managed inside **`js/data.js`**. You do **not** need to edit `index.html` to update your content!

### 1. Where to Replace Personal Links & Details
Open `js/data.js` and locate the `personal` object at the top:

```javascript
personal: {
  name: "TEJA",
  role: "AI/ML Developer",
  
  // OFFICIAL CONTACT DETAILS
  email: "bhanutejanelapudi@gmail.com",
  phone: "7794843966",
  
  // REPLACE THESE WITH YOUR REAL SOCIAL & RESUME URLS
  githubUrl: "https://github.com/your-username", 
  linkedinUrl: "https://linkedin.com/in/your-username",
  resumeUrl: "https://your-domain.com/resume.pdf", 
  portfolioDomain: "https://teja-ai.dev",
}
```

### 2. Where to Add Project GitHub & Live Demo URLs
In `js/data.js`, under the `projects` array, update each project's `githubUrl` and `demoUrl` properties:

```javascript
{
  id: "rag-assistant",
  title: "AI Knowledge / RAG Assistant",
  githubUrl: "https://github.com/yourusername/rag-knowledge-assistant",
  demoUrl: "https://rag-demo.yourdomain.com",
  // ...
}
```

### 3. Adding Your Profile Photo / Avatar
Place your profile image in `assets/profile.jpg` and update the visual container in `index.html` or reference it in `js/data.js`.

---

## 📋 Verified Contact Details & Remaining Placeholders

- [x] **Email Address**: `bhanutejanelapudi@gmail.com` (Configured & Active)
- [x] **Phone / WhatsApp**: `7794843966` (Configured & Active)
- [ ] **GitHub Profile URL**: `https://github.com/yourusername` → Update in `js/data.js`
- [ ] **LinkedIn Profile URL**: `https://linkedin.com/in/yourusername` → Update in `js/data.js`
- [ ] **Resume PDF Link**: `#` → Update in `js/data.js`
- [ ] **Project Source Code Links**: 5 project repository links in `js/data.js`
- [ ] **Live Demo URLs**: 5 project live demo links in `js/data.js`
- [ ] **Custom Domain**: Update `portfolioDomain` in `js/data.js`

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/teja-portfolio.git
   git push -u origin main
   ```
2. Go to Repository **Settings** → **Pages** → Branch: `main` / Folder: `/(root)` → Click **Save**.

### Deploy to Vercel or Netlify
Simply drag and drop the `teja-portfolio` folder or import the Git repository into Vercel / Netlify. No build step is required!

---

## 📁 Directory Architecture

```
teja-portfolio/
├── index.html           # Main HTML structure & SEO tags
├── favicon.svg          # Custom SVG favicon
├── server.py            # Development server script
├── README.md            # Documentation & setup guide
├── css/
│   ├── variables.css    # Color tokens, fonts, dark/light theme definitions
│   ├── main.css         # Reset, typography, buttons, keyframe animations
│   ├── components.css   # Component styling (hero, cards, modal, flagship demo)
│   └── responsive.css   # Mobile drawer & breakpoint queries
└── js/
    ├── data.js          # CENTRALIZED CONFIGURATION (Edit all content here)
    ├── main.js          # Theme toggle, sticky header, dynamic section rendering
    ├── modal.js         # Interactive project case study modal
    ├── flagshipDemo.js  # Interactive AI Customer Support Assistant simulator
    └── contact.js       # Validated contact form handling
```
