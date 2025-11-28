# Hướng dẫn điền form Deploy trên Netlify

## Cấu hình Build Settings

### 1. Team
- **Giữ nguyên**: "Demo" (hoặc chọn team của bạn)

### 2. Project name
- **Để trống** hoặc đặt tên: `xlfrontend` hoặc `enviro-pipe-calc-frontend`
- Netlify sẽ tự tạo URL: `xlfrontend.netlify.app` hoặc tên random

### 3. Branch to deploy
- **Chọn**: `main`
- Đây là branch chứa code frontend

### 4. Base directory ⚠️ QUAN TRỌNG
- **Điền**: `frontend`
- Đây là thư mục chứa code Next.js (vì backend và frontend cùng 1 repo)

### 5. Build command ⚠️ QUAN TRỌNG
- **Điền**: `npm run build`
- Hoặc: `cd frontend && npm install && npm run build` (nếu Netlify không tự detect base directory)
- Script này đã có trong `frontend/package.json`

### 6. Publish directory ⚠️ QUAN TRỌNG
- **Điền**: `.next`
- Đây là thư mục output của Next.js build

### 7. Functions directory
- **Giữ nguyên**: `netlify/functions` hoặc để trống
- Không cần thiết cho Next.js app này

### 8. Environment variables ⚠️ QUAN TRỌNG
Click "Add environment variables" và thêm:

- **Key**: `NEXT_PUBLIC_API_URL`
- **Value**: `https://xlbackend.onrender.com`

## Sau khi điền xong

Click nút **"Deploy XLNC_ENVIRO_PIPE_CALC"** (màu xanh ở cuối trang)

## Lưu ý

- **Base directory** phải là `frontend` vì code Next.js nằm trong folder `frontend/`
- **Build command** sử dụng script `build` đã có trong `package.json`
- **Publish directory** là `.next` - output của Next.js
- **Environment variables** cần được set để frontend biết URL backend

## Kiểm tra sau khi deploy

1. Xem logs build để đảm bảo không có lỗi
2. Kiểm tra Environment variables đã được set đúng chưa
3. Test API connection từ frontend đến backend






