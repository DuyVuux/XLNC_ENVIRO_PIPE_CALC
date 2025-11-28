# XLNC Automated Water Treatment Calculation System

Hệ thống tính toán tự động xử lý nước với 5 modules: Pipeline Hydraulics, Rainfall Aeration, Rapid Mixing, Sedimentation, và Filtration.

## Technology Stack

- **Frontend:** Next.js 14+ (App Router), React 18+, TypeScript, Tailwind CSS
- **Backend:** FastAPI (Python 3.11+), Pydantic, SQLAlchemy
- **Database:** PostgreSQL 15+
- **Authentication:** JWT (access + refresh tokens)

## Project Structure

```
EnviroPipeCalc/
├── frontend/          # Next.js frontend application
├── backend/           # FastAPI backend application
├── database/          # Database migrations
├── data/              # Test data and fake data
├── docs/              # Documentation
└── MASTER_PROMPT/     # Master prompt specifications
```

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.11+
- PostgreSQL 15+
- Docker (optional, for database)

### Setup Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Copy .env.example to .env and configure
cp .env.example .env

# Run database migrations (when ready)
alembic upgrade head

# Start backend server
uvicorn app.main:app --reload --port 8000
```

### Setup Frontend

```bash
cd frontend
npm install

# Start development server
npm run dev
```

### Setup Database with Docker

```bash
docker-compose up -d postgres
```

## Development

### Backend API

- API Documentation: http://localhost:8000/api/docs
- ReDoc: http://localhost:8000/api/redoc

### Frontend

- Development Server: http://localhost:3000

## Modules

1. **Module 1 - Pipeline Hydraulics:** Darcy-Weisbach, Colebrook-White, Reynolds number
2. **Module 2 - Rainfall Aeration:** Oxygen saturation, Fe²⁺/H₂S oxidation
3. **Module 3 - Rapid Mixing/Reaction:** Mixing tank volume, reaction rates
4. **Module 4 - Sedimentation Tank:** Surface loading rate, settling area
5. **Module 5 - Filtration:** Filter area, backwash flowrate, head loss

## Standards Compliance

- TCVN 33-2006: Water Supply Systems
- TCVN 7222:2002: Water Treatment
- QCVN 01:2009/BYT: Drinking Water Quality
- NĐ 13/2023: Data Protection

## License

Proprietary



