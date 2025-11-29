#!/bin/bash

# Script để chạy Backend Server

echo "🚀 Starting XLNC Backend Server..."
echo ""

# Kiểm tra virtual environment
if [ ! -d ".venv" ]; then
    echo "❌ Virtual environment không tìm thấy!"
    echo "📦 Đang tạo virtual environment..."
    python3 -m venv .venv
    echo "✅ Virtual environment đã được tạo"
fi

# Kích hoạt virtual environment
echo "🔌 Kích hoạt virtual environment..."
source .venv/bin/activate

# Kiểm tra packages
if ! python -c "import fastapi" 2>/dev/null; then
    echo "📦 Đang cài đặt dependencies..."
    pip install -r requirements.txt
    echo "✅ Dependencies đã được cài đặt"
fi

# Chạy server
echo ""
echo "🌐 Starting server tại http://localhost:8000"
echo "📖 API Docs: http://localhost:8000/api/docs"
echo "❤️  Health Check: http://localhost:8000/health"
echo ""
echo "Nhấn Ctrl+C để dừng server"
echo ""

uvicorn app.main:app --reload --port 8000

