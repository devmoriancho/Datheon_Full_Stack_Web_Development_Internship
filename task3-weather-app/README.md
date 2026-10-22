# ClimateTelemetry – Real-Time Weather Forecast & Climate Telemetry App

A production-grade, asynchronous climate telemetry dashboard built as part of the **Datheon Engineering Cohort (2026 Batch 01)** industrial curriculum. This application demonstrates asynchronous data mapping routines, strict type safety boundaries, and custom optimized asset architecture inside a modular Next.js runtime environment.

## Engineering Architecture Profile

The application architecture isolates presentation markup from the downstream telemetry engine to optimize bundle footprints and maintain crisp rendering loops.

- **Asynchronous Processing:** Built around native Fetch API pipelines utilizing secure async-await flows and validation interceptors to capture runtime latency or downstream data failures safely.
- **Asset Footprint Optimization:** Employs micro-engineered custom inline SVG vectors inside dedicated component vaults, bypassing heavy third-party asset libraries to maintain a lightweight core payload.
- **Dynamic Theme Layering:** Uses custom CSS variable configuration tokens integrated natively with modern design directives. Gradients smoothly transform contextually to reflect city weather trends (Sunny, Rainy, Cloudy, or Nighttime).
- **Predictable Array Projections:** Filters dense 40-point raw forecast segments down to exactly 5 distinct mid-day telemetry nodes, streaming them into a mobile-responsive horizontal layout with native tracking control.

---

## Technological Selection Matrix

| Architectural Node | Technical Choice                              | Engineering Rule Fulfilling                                           |
| :----------------- | :-------------------------------------------- | :-------------------------------------------------------------------- |
| **Core Framework** | Next.js (Modern App Router Architecture)      | Clean component tree decoupling and file-system directory paths       |
| **Type Integrity** | TypeScript (Strict Workspace Controls)        | Explicit data payloads and interface contracts across data boundaries |
| **Optimization**   | React Compiler Core Runtime                   | Automated layout rendering optimization and trace performance         |
| **Utility Engine** | Tailwind CSS Engine (Direct Import Synthesis) | Component layout badges and responsive viewport scaling states        |
| **Data Source**    | OpenWeatherMap Rest API Service               | Real-time global metric ingestion and condition tracking metrics      |

---

## Source Code Component Vault

```text
task3-weather-app/src/
├── app/
│   ├── globals.css        <-- Custom theme variable tokens and global animation canvas
│   ├── layout.tsx         <-- Typography, strict viewport styling, and metadata definitions
│   └── page.tsx           <-- Central control container, async management, and layout router
├── components/
│   ├── icons/             <-- Custom SVG vectors (SunIcon, RainIcon, CloudIcon, SnowIcon)
│   ├── CurrentWeather.tsx <-- High-visibility telemetry blocks and weather metrics display
│   ├── ErrorAlert.tsx     <-- Semi-transparent validation failure and alert banner
│   ├── ForecastCard.tsx   <-- Array loop horizontal flex row mapping out 5-day trends
│   └── SearchBar.tsx      <-- Form layout handling input states and submission filters
└── utils/
    └── weatherApi.ts      <-- Pure asynchronous fetch loop engine and data contract types
```

---

## Project Bootstrap and Installation Steps

Follow these sequence blocks inside your WSL2 environment terminal to mount, secure, and activate the industrial climate dashboard.

### 1. Secure API Token Configuration

Create an environment storage credential file at the root configuration node of your weather folder:

```bash
touch .env.local
```

Open the file and append your 32-character OpenWeatherMap credential using the strict project prefix token:

```text
NEXT_PUBLIC_WEATHER_API_KEY=your_secure_32_character_api_key_goes_here
```

### 2. Dependency Ingestion

Pull framework requirements securely into your local node modules cache layer:

```bash
npm install
```

### 3. Execution of the Local Development Server

Boot up the runtime server inside your WSL environment interface:

```bash
npm run dev
```

Open your browser canvas and navigate to the local network port address to inspect the interface layouts:

```text
http://localhost:3000
```

### 4. Codebase Sanity Verification

Verify type parameters and strict linting definitions to confirm zero compilation warnings or code errors:

```bash
npm run lint
```

---

## Developer Profile Baseline

- **Candidate:** Vincent Moriancho Parkolwa
- **Credential:** B.Sc in Information Technology (Mount Kenya University)
- **Assignment Location:** Thika, Kenya
- **Internship Track:** Full Stack Web Development Internship (Engineering Cohort 2026)
- **Evaluation Objective:** Portfolio review submission for formal Letter of Recommendation validation.
