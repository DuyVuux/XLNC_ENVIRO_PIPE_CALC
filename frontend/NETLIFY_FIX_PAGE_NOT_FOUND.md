# Hướng dẫn Sửa lỗi "Page not found" trên Netlify

## Nguyên nhân
Lỗi "Page not found" xảy ra vì Netlify chưa cấu hình đúng để xử lý Next.js App Router routing.

## Đã sửa trong code
- ✅ Thêm plugin `@netlify/plugin-nextjs` vào `netlify.toml`
- ✅ Xóa `publish` directory (plugin sẽ tự động xử lý)

## Cần làm trên Netlify Dashboard

### Bước 1: Kiểm tra Build Settings
1. Vào Netlify Dashboard → Site settings → Build & deploy → Build settings
2. Kiểm tra:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: **XÓA TRỐNG** hoặc để Netlify tự detect
   - **Functions directory**: `netlify/functions` (nếu có) hoặc để trống

### Bước 2: Cài đặt Plugin (Nếu chưa tự động)
1. Vào Site settings → Plugins
2. Kiểm tra xem có plugin `@netlify/plugin-nextjs` chưa
3. Nếu chưa có, click "Install plugin" và tìm `@netlify/plugin-nextjs`

### Bước 3: Trigger Deploy lại
1. Vào Deploys
2. Click "Trigger deploy" → "Deploy site"
3. Hoặc push code mới lên GitHub để trigger auto-deploy

### Bước 4: Kiểm tra Logs
1. Vào Deploys → Xem log của deploy mới nhất
2. Kiểm tra xem plugin có được cài đặt không:
   ```
   Installing @netlify/plugin-nextjs
   ```
3. Kiểm tra build có thành công không

## Kiểm tra sau khi deploy

### Test các routes:
- `/` - Trang chủ
- `/modules/pipe-sizing` - Module 1
- `/modules/spray-aeration` - Module 2
- `/modules/mixing-reaction` - Module 3
- `/modules/settling-tank` - Module 4
- `/modules/filtration` - Module 5

## Nếu vẫn lỗi

### Kiểm tra lại:
1. **Publish directory** trên Netlify Dashboard phải **TRỐNG** hoặc để Netlify tự detect
2. Plugin `@netlify/plugin-nextjs` đã được cài đặt
3. Environment variable `NEXT_PUBLIC_API_URL` đã được set đúng

### Fallback: Thử cấu hình tĩnh
Nếu vẫn không được, có thể thử export static (nhưng sẽ mất SSR):

1. Sửa `next.config.ts`:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
   };
   ```

2. Sửa `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = "out"
   ```

3. Deploy lại

## Lưu ý
- Plugin `@netlify/plugin-nextjs` sẽ tự động handle routing cho Next.js App Router
- Không cần `publish` directory khi dùng plugin
- Plugin sẽ tự động detect và cài đặt khi detect `netlify.toml` có plugin config






