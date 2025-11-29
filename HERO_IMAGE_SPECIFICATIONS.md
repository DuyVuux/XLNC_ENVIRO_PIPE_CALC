# Thông số Kích thước Hình ảnh Hero Carousel

## Kích thước Hero Section hiện tại

- **Height**: 600px (cố định)
- **Width**: 100% viewport (responsive)
- **Padding top**: 112px (cho header)

## Kích thước Viewport phổ biến

### Desktop
- **Full HD**: 1920px × 1080px
- **HD**: 1366px × 768px
- **4K**: 3840px × 2160px

### Tablet
- **iPad Pro**: 1024px × 1366px
- **iPad**: 768px × 1024px

### Mobile
- **iPhone 14 Pro Max**: 430px × 932px
- **Standard Mobile**: 375px × 667px

## Khuyến nghị Kích thước Hình ảnh

### Option 1: Theo tỷ lệ 16:9 (Khuyến nghị)
Tỷ lệ này phổ biến và tương thích tốt với nhiều thiết bị:

- **Desktop (Full HD)**: **1920px × 1080px**
  - Tỷ lệ: 16:9
  - File size: ~200-500KB (JPG) hoặc ~100-300KB (WebP)
  - Format: JPG (cho photos) hoặc WebP (tối ưu hơn)

- **Tablet**: **1024px × 576px**
  - Tỷ lệ: 16:9
  - File size: ~80-200KB

- **Mobile**: **768px × 432px**
  - Tỷ lệ: 16:9
  - File size: ~50-150KB

### Option 2: Theo design hiện tại (600px height)
Theo đúng height của hero section:

- **Desktop**: **1920px × 600px**
  - Tỷ lệ: 16:5 (3.2:1)
  - File size: ~150-400KB

- **Tablet**: **1024px × 600px**
  - Tỷ lệ: ~1.7:1
  - File size: ~80-200KB

- **Mobile**: **768px × 600px**
  - Tỷ lệ: 1.28:1
  - File size: ~60-150KB

## Khuyến nghị cuối cùng

### ✅ Kích thước Tối ưu (Recommended)

**Desktop/Full Size:**
- **1920px × 1080px** (16:9)
- Format: **WebP** (tốt nhất) hoặc **JPG** (tương thích tốt)
- Quality: 80-85% (JPG) hoặc 75-80% (WebP)
- File size: 200-500KB

**Lý do chọn 16:9:**
- Tỷ lệ phổ biến, tương thích tốt
- Dễ crop/resize cho các breakpoints
- `object-cover` sẽ crop tự động để fit 600px height
- Trông đẹp trên mọi thiết bị

### 📐 Cách Crop/Resize

Nếu bạn có hình ảnh gốc lớn hơn:
1. **Crop center**: Giữ phần giữa của hình ảnh
2. **Resize**: Scale xuống 1920px width, giữ tỷ lệ
3. **Optimize**: Compress với quality 80-85%

### 🛠️ Tools để Resize

**Online:**
- [Squoosh.app](https://squoosh.app/) - Google's image optimizer
- [TinyPNG](https://tinypng.com/) - Compress images
- [ImageOptim](https://imageoptim.com/) - Desktop app

**Command line:**
```bash
# Sử dụng ImageMagick
convert input.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 output.jpg

# Sử dụng ffmpeg
ffmpeg -i input.jpg -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080" output.jpg
```

## Responsive Images (Nâng cao)

Nếu muốn tối ưu hơn, có thể tạo nhiều kích thước:

```html
<picture>
  <source media="(min-width: 1920px)" srcset="/images/hero-1920.webp">
  <source media="(min-width: 1024px)" srcset="/images/hero-1024.webp">
  <source media="(min-width: 768px)" srcset="/images/hero-768.webp">
  <img src="/images/hero-768.webp" alt="Hero">
</picture>
```

## Tóm tắt

**Kích thước khuyến nghị cho Hero Images:**
- **Width**: 1920px
- **Height**: 1080px (16:9) hoặc 600px (theo design)
- **Format**: WebP (tốt nhất) hoặc JPG
- **File size**: 200-500KB
- **Quality**: 80-85%

Với kích thước này, hình ảnh sẽ:
- ✅ Sắc nét trên mọi thiết bị
- ✅ Load nhanh
- ✅ Tự động crop để fit 600px height với `object-cover`
- ✅ Tương thích với responsive design


