                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                # Hướng dẫn Chạy Backend Server

## Bước 1: Kiểm tra Virtual Environment

```bash
cd backend
```

Nếu đã có virtual environment (`.venv`), bỏ qua Bước 2.

## Bước 2: Tạo Virtual Environment (nếu chưa có)

```bash
python3 -m venv .venv
source .venv/bin/activate  # Trên Linux/Mac
```

## Bước 3: Cài đặt Dependencies

```bash
# Kích hoạt virtual environment (nếu chưa kích hoạt)
source .venv/bin/activate

# Cài đặt các package cần thiết
pip install -r requirements.txt
```

## Bước 4: Kiểm tra File .env

File `.env` đã có sẵn trong thư mục `backend/`. Các giá trị mặc định:

- Backend sẽ chạy tại: `http://localhost:8000`
- CORS đã được cấu hình cho frontend tại: `http://localhost:3000`

**Lưu ý**: Các module calculation **KHÔNG CẦN** database để chạy. Chúng chỉ tính toán và trả về kết quả.

## Bước 5: Chạy Server

```bash
# Đảm bảo đã kích hoạt virtual environment
source .venv/bin/activate

# Chạy server
uvicorn app.main:app --reload --port 8000
```

## Kiểm tra Server đã chạy

1. **Health Check**: http://localhost:8000/health
   - Kết quả: `{"status": "healthy"}`

2. **API Documentation**: http://localhost:8000/api/docs
   - Swagger UI để test các endpoints

3. **ReDoc**: http://localhost:8000/api/redoc
   - Alternative documentation

## Test nhanh với cURL

```bash
# Test Module 1 - Pipe Sizing
curl -X POST "http://localhost:8000/api/v1/modules/pipe-sizing/calculate" \
  -H "Content-Type: application/json" \
  -d '{
    "Q": 0.00579,
    "Q_unit": "m3/s",
    "L": 120,
    "t": 25,
    "Hc": 5,
    "epsilon": 0.0001,
    "beta": 2.5,
    "material": "PVC"
  }'
```

## Các Module Endpoints

Tất cả các endpoints đều có format: `POST /api/v1/modules/{module-name}/calculate`

- `/api/v1/modules/pipe-sizing/calculate`
- `/api/v1/modules/spray-aeration/calculate`
- `/api/v1/modules/mixing-reaction/calculate`
- `/api/v1/modules/settling-tank/calculate`
- `/api/v1/modules/filtration/calculate`

## Troubleshooting

### Lỗi: Port 8000 đã được sử dụng
```bash
# Thay đổi port
uvicorn app.main:app --reload --port 8001
```
Sau đó cập nhật frontend: `NEXT_PUBLIC_API_URL=http://localhost:8001`

### Lỗi: Module không tìm thấy
```bash
# Đảm bảo đã cài đặt đầy đủ dependencies
pip install -r requirements.txt
```

### Lỗi: Virtual environment không tìm thấy
```bash
# Tạo lại virtual environment
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Chạy Frontend và Backend cùng lúc

**Terminal 1 - Backend:**
```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend sẽ chạy tại: http://localhost:3000
Backend sẽ chạy tại: http://localhost:8000

