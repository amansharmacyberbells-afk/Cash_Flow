# Business Analysis Web Application

A full-stack financial analysis platform inspired by the Excel-based **Business Analysis & Cash Flow Help** workflow.

## Stack
- **Frontend:** React 18 + Vite + React Router + Recharts
- **Backend:** Node.js + Express + Mongoose
- **Calculations Engine:** Python FastAPI
- **Database:** MongoDB

## Monorepo Structure
- `client/` React UI (dashboard, forms, charts)
- `server/` REST API, persistence, orchestration
- `python-api/` Financial calculation endpoints
- `docker-compose.yml` Local multi-service runtime

## Implemented Starter Scope
This repository currently includes:
1. Project structure following your blueprint.
2. Backend API route scaffolding for settings, P&L, balance sheet, breakeven, cash drivers, scenarios, report, clear-all.
3. Python calculation service with endpoints and placeholder formulas.
4. React application skeleton with pages and navigation.
5. Data models for the major MongoDB collections.

## Quick Start
### 1) Start MongoDB (Docker)
```bash
docker compose up -d mongodb
```

### 2) Python API
```bash
cd python-api
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### 3) Node API
```bash
cd server
npm install
npm run dev
```

### 4) React Client
```bash
cd client
npm install
npm run dev
```

## Roadmap (from your project plan)
- Phase 1: Foundation and navigation
- Phase 2: Settings + P&L calculations
- Phase 3: Balance sheet + operations cash flow
- Phase 4: Breakeven module
- Phase 5: Cash drivers + graphs
- Phase 6: Summary + comparison ratios + scenario tester
- Phase 7: PDF reporting + glossary + polish
- Phase 8: QA + deployment
