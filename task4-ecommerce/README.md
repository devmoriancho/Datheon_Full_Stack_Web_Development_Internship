# Datheon Full Stack Web Development Internship - Task 4

A fast, modern e-commerce storefront built using Next.js, TypeScript, and Tailwind CSS. The application connects to a live external API to render products dynamically and features a fully functional shopping cart state engine.

## 🛠️ Environment Architecture & Installation

The project workspace was bootstrapped under a clean monorepo structure using **WSL2 (Windows Subsystem for Linux)**. The codebase was initialized using standard configuration frameworks to enforce strict project health:

- **Framework:** Next.js (Latest App Router layout system)
- **Language:** TypeScript (Strict type safety definitions)
- **Styling:** Tailwind CSS (Modern CSS-only variables inside the `@theme` directive layer)
- **Syntax Check:** ESLint (Automated syntax and linting checks)

## ✨ Core Project Features

The application fulfills 100% of the technical milestone specifications requested by the Technical Directorate:

- **Live Data Fetching:** Fetches a catalog of 20 products directly from the FakeStoreAPI (`/products?limit=20`) using an asynchronous fetch architecture.
- **Responsive Layout:** Displays products inside an optimized, multi-column grid system built using custom CSS Grid utilities that scale gracefully from mobile viewports to desktop monitors.
- **Smart Filtering and Search:** Features a live input text search box and matching category toggle buttons (Electronics, Jewelry, Clothing). The clothing logic automatically groups both `men's clothing` and `women's clothing` API strings into a single user filter.
- **Global Cart State Engine:** Uses a centralized React Context Provider to handle core application events: `addToCart()`, `removeFromCart()`, `updateQuantity()`, and real-time total pricing math.
- **Automated Math Engine:** Computes real-time basket values including an accurate subtotal, an estimated 10% sales tax, and a dynamic shipping tier fee (\$15 for orders under \$100, free shipping for orders over \$100).
- **Persistent Slide-out Drawer:** Houses a custom cart layout component that stays anchored to the side of the browser workspace when opened, featuring a live badge counter fixed directly over the top navigation header icon.
- **Simulated Checkout Flow:** Clicking the payment button launches a focused overlay modal confirming the order success and automatically clears the state array tree back to zero.

## 📁 Core Directory Structure

```text
src/
├── app/
│   ├── globals.css      # Core styles and custom modern CSS theme variables
│   ├── layout.tsx       # Root layout configuration injected with the Global Cart Provider
│   └── page.tsx         # Main entry hub coordinating API orchestration and drawer tracking
├── components/
│   ├── CartDrawer.tsx   # Side basket row list and math calculation panel
│   ├── Logo.tsx         # Lightweight inline SVG brand icon
│   ├── Navbar.tsx       # Fixed top header housing logo and cart count badge
│   ├── ProductCard.tsx  # Layout container handling cropped images and individual actions
│   └── ProductGrid.tsx  # Central controller managing search bars and layout columns
├── context/
│   └── CartContext.tsx  # Global state engine processing actions and math rules
├── services/
│   └── api.ts           # Safe background internet fetch calls targeting the API data endpoint
├── utils/
│   └── filter.ts        # Pure text formatting rules processing multi-category sorting
└── types.ts             # Strict TypeScript object templates mapping product schemas
```

## 🚀 Local Development Setup

To review the production codebase or boot up the development server locally, follow these technical steps inside your WSL2 environment terminal:

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Run Linter Checks:**

   ```bash
   npm run lint
   ```

3. **Start the Local Development Server:**
   ```bash
   npm run dev
   ```

Open `http://localhost:3000` inside your web browser to interact with the completed storefront application.
