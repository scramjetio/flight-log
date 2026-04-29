<div align="center">
  <h1>FlightLog</h1>
  <p><strong>A breathtaking, automated Changelog engine for modern SaaS.</strong></p>
  <p>Linear-style aesthetics. 100% open-source. Powered by Astro and Tailwind CSS.</p>

  <!-- Social Proof Badges -->
  <a href="https://flightlog.scramjet.io" target="_blank"><img src="https://img.shields.io/badge/Live-Demo-2ecc71?style=flat-square&logo=cloudflarepages&logoColor=white" alt="Live Demo"></a>
  <a href="https://github.com/scramjetio/flight-log/actions"><img src="https://img.shields.io/github/actions/workflow/status/scramjetio/flight-log/ci.yml?style=flat-square" alt="CI Status"></a>
  <a href="https://github.com/scramjetio/flight-log/blob/main/LICENSE"><img src="https://img.shields.io/github/license/scramjetio/flight-log?style=flat-square" alt="License"></a>
</div>

---

## ⚡️ Why FlightLog?

Most changelog tools fall into two flawed categories:
1. **The Widget SaaS**: Expensive ($50+/mo), disconnected from your git workflow, and visually incongruent with your app.
2. **The "Raw Output"**: A list of GitHub commit hashes that are unreadable to your actual customers.

**FlightLog** is different. It provides the breathtaking, dark-mode timeline UI made famous by design-forward companies like Linear and Raycast, but you own the code. 

### Features
- 🎨 **Linear-style Aesthetics:** Deep dark mode, vertical timeline view, beautiful typography, and embedded media support.
- 📝 **Markdown Native:** Write your release notes in standard `.mdx`.
- ⚡️ **Astro Powered:** Blazing fast, zero-JS by default, deployable anywhere (Vercel, Cloudflare, Netlify).

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/scramjetio/flight-log.git my-changelog

# 2. Install dependencies
cd my-changelog
npm install

# 3. Start the dev server
npm run dev
```

## 🤖 The Scramjet Integration

Writing changelogs manually is tedious. FlightLog is designed to be the "Publishing Surface" for **Scramjet**, our automated event-driven content pipeline.

If you don't want to copy-paste from Jira to Markdown, you can use Scramjet to:
1. Listen to your GitHub Pull Requests or Linear tickets.
2. Automatically translate developer jargon (`fix(auth): race condition`) into customer-friendly feature announcements.
3. Commit the formatted `.mdx` directly into this FlightLog repository.

*Learn more about automating your changelog with Scramjet [here](https://scramjet.io).*

## 📄 License
MIT © The Scramjet Team
