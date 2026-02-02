<div align="center">
  <img src="./public/images/ingestiqLogoWithTextDark.png" alt="IngestIQ Logo" width="300" height="300" />
  <p>
    <b>Agentic RAG as a Service Platform for Enterprises and Developers!</b>
  </p>
  <p>
    Document Parsing • Vector Storage • Multi-Tenant • Scalable Pipelines
  </p>
  <br />

  <a href="https://opensource.org/licenses/Apache-2.0">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge" alt="License">
  </a>
  <a href="https://github.com/avesta-hq/ingestiq-backend/actions/workflows/ci.yml">
    <img src="https://img.shields.io/badge/CI-Passing-success?style=for-the-badge&logo=github" alt="CI Status">
  </a>
  <a href="CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge" alt="PRs Welcome">
  </a>
   <a href="https://ingestiq.ai/">
    <img src="https://img.shields.io/badge/Website-Visit%20Now-blueviolet?style=for-the-badge" alt="Website">
  </a>

  <br />
  <br />

  <a href="https://x.com/avestalabs">
    <img src="https://img.shields.io/twitter/follow/avestalabs?style=social" alt="Follow on Twitter">
  </a>
  <a href="https://www.linkedin.com/company/avestalabs/">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=social&logo=linkedin" alt="LinkedIn">
  </a>
  <a href="https://www.youtube.com/channel/UCHCxoLxwAy1FCXkdch7Ex0Q">
    <img src="https://img.shields.io/badge/YouTube-Subscribe-red?style=social&logo=youtube" alt="YouTube">
  </a>

</div>

<br />

<div align="center">
  <img src="https://raw.githubusercontent.com/dharmik-at/landing-page/main/public/ingestiqPlatfromOverview.gif" alt="IngestIQ Platform Overview" width="100%" />
</div>

<br />

## 🚀 Overview

**IngestIQ** is a comprehensive **RAG (Retrieval-Augmented Generation) platform** designed to help AI application developers easily integrate enterprise data sources into their applications without building RAG infrastructure from scratch.

> **Hosted Platform**: Check out our hosted solution at [IngestIQ Landing Page ↗](https://ingestiq-landing-page.vercel.app/)

## ✨ Features

IngestIQ provides a robust set of tools for your data pipelines:

| Core Capabilities | Data Connectors | Platform Features |
| :--- | :--- | :--- |
| **📄 Multi-format Processing**<br>PDF, CSV, Excel, and Video | **📂 File Upload**<br>Direct file ingestion | **🗂️ Knowledge Bases**<br>Organized searchable collections |
| **🧩 Smart Chunking**<br>Semantic chunking with LLMs | **🕸️ Web Scraping**<br>Advanced crawling with Crawl4AI | **⚡ Pipelines**<br>Configurable workflows & scheduling |
| **🧠 Vector Database**<br>Supported PGVector, Pinecone, Qdrant, Milvus, MongoDB Atlas | **📹 Video Processing**<br>YouTube & URL transcription | **🔌 MCP Server**<br>Model Context Protocol integration |
| **🔍 Metadata Filtering**<br>Precise retrieval options | **☁️ Google Drive**<br>OAuth2 dynamic ingestion | **🛡️ Multi-tenant**<br>Organization support |



## Tech Stack

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-10.18.0-000000?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=flat-square&logo=greensock" alt="GSAP" />
  <img src="https://img.shields.io/badge/MDX-2.3.0-000000?style=flat-square&logo=markdown" alt="MDX" />
  <img src="https://img.shields.io/badge/next--themes-0.3.0-000000?style=flat-square" alt="next-themes" />
  <img src="https://img.shields.io/badge/Lucide_React-0.378.0-000000?style=flat-square" alt="Lucide React" />
</div>

## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── docs/              # Documentation pages
│   ├── features/          # Feature pages
│   ├── solutions/         # Solution pages
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── ui/                # Reusable UI components
│   └── providers/         # Context providers
├── ingestIqDocs/          # MDX documentation content
├── public/                # Static assets
└── lib/                   # Utility functions
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Email (Resend)
RESEND_API_KEY=your_resend_api_key
```

## Documentation

Documentation is written in MDX and located in `ingestIqDocs/`. The docs use Mintlify-style components like `<Card>`, `<CardGroup>`, and `<Accordion>`.


## 🤝 Community & Support

We'd love to hear from you!

- 🐦 [**Twitter/X**](https://x.com/avestalabs) - Follow for updates
- 💼 [**LinkedIn**](https://www.linkedin.com/company/avestalabs/) - Connect with us
- 📺 [**YouTube**](https://www.youtube.com/channel/UCHCxoLxwAy1FCXkdch7Ex0Q) - Watch tutorials
- 📧 [**Email**](mailto:admin@avestalabs.ai) - Contact support

