# 💎 TrustBiz (formerly ItchFix) - Industry-Grade B2B Escrow & Marketplace

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)

**TrustBiz** is a high-performance B2B fintech platform designed to solve the "Trust Gap" in Indian MSME transactions. It combines a secure **RBI-regulated Escrow system** with a transparent **B2B Marketplace**, AI-powered **Payment Reconciliation**, and real-time **Business Analytics**.

---

## 🚀 Key Industry-Ready Features

### 🛡️ Secure B2B Escrow & Mediation
- **Milestone-based Payments**: Funds are securely held and released only upon milestone approvals (Advance, Quality Check, Final Delivery).
- **Resolution Center**: Integrated dispute management with legal mediation policies for verified MSMEs.
- **Node Account Integration**: Prepared structure for RBI-regulated fund handling.

### 🛒 Intelligent B2B Marketplace
- **Verified Supplier Network**: Instant trust scores and GSTIN verification for every partner.
- **Bulk Sourcing**: Specialized inquiry flows for industrial-scale raw materials.
- **Interactive Listings**: Real-time stock status and dynamic pricing.

### 📊 Advanced Business Intelligence
- **Growth Analytics**: Financial performance tracking with responsive Recharts (Revenue Trends, Escrow Volume).
- **Auto-Reconciliation**: AI-ready matching of bank statements with sales invoices.
- **Inventory Monitoring**: Smart stock alerts and automated reorder triggers.

### ⚡ Technical Excellence (Placement Ready)
- **State Management**: Redux Toolkit for centralized auth, UI, and data flow.
- **Dynamic SEO**: Integrated `react-helmet-async` for page-specific meta tags and better indexing.
- **Adaptive UI**: High-fidelity Dark/Light mode with persistent `localStorage` support.
- **Optimized Performance**: Lazy loading, responsive layouts (Mobile-first), and framer-motion animations.

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19, Vite, Tailwind CSS (v4 CSS-first config) |
| **State** | Redux Toolkit (Slices, Store) |
| **Routing** | React Router 7 |
| **UI Icons** | Lucide React |
| **Charts** | Recharts |
| **SEO** | React Helmet Async |
| **Animations** | Framer Motion |

---

## 📂 Project Architecture

```bash
src/
├── components/
│   ├── common/      # Reusable SEO, ErrorBoundaries, Loaders
│   ├── layout/      # Sidebar, Navbar, Footer
│   ├── ui/          # Atomic components (Buttons, Cards, Tables)
│   └── forms/       # Complex multi-step forms (KYC, Auth)
├── pages/
│   ├── Dashboard/   # Overview & Insights
│   ├── Marketplace/ # B2B Shop & Checkout flow
│   ├── Wallet/      # Funds & Bank management
│   ├── Disputes/    # Mediation & Case management
│   └── ...          # 15+ specialized screens
├── store/           # Redux slices and configuration
└── utils/           # Constants, Helpers, Validators
```

---

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/hetsakariya0111-gi/itchfix.git
   ```
2. **Install dependencies**
   ```bash
   cd itchfix/frontend
   npm install
   ```
3. **Run Development Server**
   ```bash
   npm run dev
   ```

---

## 📈 Development Checklist (Sem 2 Standards)

- [x] **Project Setup**: Vite + Tailwind + Feature-based architecture.
- [x] **Routing**: Clean public/protected route structure.
- [x] **State Management**: Redux Toolkit setup for global state.
- [x] **SEO**: Dynamic titles and meta descriptions for all pages.
- [x] **Theme**: Dark/Light mode with local persistence.
- [x] **UX**: Skeleton loaders, Empty states, and Toast notifications.
- [x] **Code Quality**: ESLint ready, consistent naming, and component isolation.

---

## 🎨 Design Reference

Interactive Figma Prototype: [TrustBiz Figma](https://www.figma.com/proto/fLOpIySbuJA4Kd8L8Cq7vu/my-1st-asgn?page-id=51%3A7&node-id=430-5333&viewport=406%2C-611%2C0.02&t=4RSWAKbZTIIDakwX-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=430%3A5333&show-proto-sidebar=1)

---

## 👨‍💻 Author
**Het Sakariya**  
[GitHub](https://github.com/hetsakariya0111-gi) | [LinkedIn](your-linkedin-link)

---
*Note: This project is part of the Semester 2 Full Stack Assignment at CodingGita.*
