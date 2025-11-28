# Hướng dẫn Chạy Backend Server

## Cài đặt Dependencies

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate  # Trên Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Tạo File .env

File `.env` đã được tạo tự động với các giá trị mặc định:

```env
DATABASE_URL=postgresql://enviropipecalc:enviropipecalc_dev@localhost:5432/enviropipecalc
SECRET_KEY=dev-secret-key-change-in-production-please-use-strong-key-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=15
REFRESH_TOKEN_EXPIRE_DAYS=7
ENVIRONMENT=development
API_V1_PREFIX=/api/v1
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

## Chạy Server

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --port 8000
```

Server sẽ chạy tại: http://localhost:8000

## API Endpoints

- API Documentation: http://localhost:8000/api/docs
- ReDoc: http://localhost:8000/api/redoc
- Health Check: http://localhost:8000/health
- Root: http://localhost:8000/

## Module 1 - Pipe Sizing

Endpoint: `POST /api/v1/modules/pipe-sizing/calculate`

Example request:
```json
{
  "Q": 0.00579,
  "Q_unit": "m3/s",
  "L": 120,
  "t": 25,
  "Hc": 5,
  "epsilon": 0.0001,
  "beta": 2.5,
  "material": "PVC"
}
```

## Lưu ý

- Nếu chưa có PostgreSQL database, chạy: `docker-compose up -d postgres`
- Database sẽ được tạo tự động khi chạy migrations (chưa có migrations hiện tại)
- Có thể test API mà không cần database (Module 1 không cần database)



