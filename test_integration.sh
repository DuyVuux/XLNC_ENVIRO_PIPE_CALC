#!/bin/bash

echo "🧪 Frontend-Backend Integration Test"
echo "===================================="
echo ""

# Check backend
echo "1. Checking backend..."
BACKEND_STATUS=$(curl -s http://localhost:8000/health 2>&1)
if [[ $BACKEND_STATUS == *"healthy"* ]]; then
    echo "   ✅ Backend is running"
else
    echo "   ❌ Backend is not running"
    echo "   Please start: cd backend && source .venv/bin/activate && uvicorn app.main:app --reload --port 8000"
    exit 1
fi

# Check frontend
echo ""
echo "2. Checking frontend..."
FRONTEND_STATUS=$(curl -s http://localhost:3000 2>&1 | head -1)
if [[ $FRONTEND_STATUS == *"html"* ]] || [[ $FRONTEND_STATUS == *"<!DOCTYPE"* ]] || [[ -n $FRONTEND_STATUS ]]; then
    echo "   ✅ Frontend is running"
else
    echo "   ⚠️  Frontend might not be running (or still starting)"
    echo "   Please start: cd frontend && npm run dev"
fi

# Test API endpoint
echo ""
echo "3. Testing API endpoint..."
API_RESPONSE=$(curl -s -X POST http://localhost:8000/api/v1/modules/pipe-sizing/calculate \
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
  }')

if [[ $API_RESPONSE == *"calculation_id"* ]]; then
    echo "   ✅ API endpoint working"
    echo "   Response preview:"
    echo "$API_RESPONSE" | head -10
else
    echo "   ❌ API endpoint error"
    echo "   Response: $API_RESPONSE"
fi

echo ""
echo "===================================="
echo "✅ Integration test complete!"
echo ""
echo "Next steps:"
echo "1. Open http://localhost:3000/modules/pipe-sizing"
echo "2. Fill form and click 'Tính toán'"
echo "3. Verify results display correctly"




