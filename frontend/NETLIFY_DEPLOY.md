# Hướng dẫn Deploy Frontend lên Netlify

## 1. File đã được cấu hình

- `.env.production` - Chứa biến môi trường `NEXT_PUBLIC_API_URL=https://xlbackend.onrender.com`
- `netlify.toml` - Cấu hình build và deploy cho Netlify
- `package.json` - Đã có đầy đủ build scripts:
  ```json
  {
    "scripts": {
      "build": "next build",
      "start": "next start"
    }
  }
  ```

## 2. Các bước deploy trên Netlify

### Bước 1: Đăng nhập Netlify
1. Truy cập https://app.netlify.com
2. Đăng nhập bằng GitHub account

### Bước 2: Tạo site mới
1. Click "Add new site" → "Import an existing project"
2. Chọn "Deploy with GitHub"
3. Chọn repository: `DuyVuux/XLNC_ENVIRO_PIPE_CALC`
4. Cấu hình build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

### Bước 3: Cấu hình Environment Variables
Trong Netlify Dashboard → Site settings → Environment variables:
- Thêm biến: `NEXT_PUBLIC_API_URL` = `https://xlbackend.onrender.com`

### Bước 4: Deploy
1. Click "Deploy site"
2. Netlify sẽ tự động build và deploy

## 3. Lưu ý

- File `.env.production` đã được tạo nhưng **không được commit lên git** (theo `.gitignore`)
- Biến môi trường `NEXT_PUBLIC_API_URL` cần được set trong Netlify Dashboard
- Netlify sẽ tự động detect Next.js và sử dụng runtime phù hợp
- Sau khi deploy, kiểm tra biến môi trường trong Production build settings

## 4. Cấu trúc file quan trọng

```
frontend/
├── .env.production          # Biến môi trường production (local)
├── netlify.toml            # Cấu hình Netlify
├── next.config.ts          # Cấu hình Next.js
└── package.json            # Dependencies
```

## 5. Troubleshooting

- Nếu build fail: Kiểm tra Node version (cần Node 20+)
- Nếu API không kết nối được: Kiểm tra `NEXT_PUBLIC_API_URL` trong Netlify Dashboard
- Nếu lỗi CORS: Đảm bảo backend đã cấu hình CORS cho domain Netlify

