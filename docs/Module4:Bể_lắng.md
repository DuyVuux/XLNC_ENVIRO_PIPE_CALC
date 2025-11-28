# Báo cáo chi tiết: Module 4 - Bể Lắng

## 1. Mục tiêu của Module 4:
Module 4 này thực hiện việc tính toán các thông số liên quan đến **quá trình lắng** trong hệ thống xử lý nước. Mục tiêu của module này là:
- **Tính toán thể tích bể lắng**, **kích thước bể lắng** và **các thông số liên quan đến quá trình lắng**.
- **Xác định hiệu quả lắng** và các yếu tố ảnh hưởng đến quá trình lắng như **mật độ hạt lắng** và **tốc độ lắng**.

## 2. Các thông số đầu vào (Input) từ Module 3:
Để Module 4 có thể thực hiện tính toán, **Module 3** sẽ cần bàn giao một số thông số đầu vào sau:

- **Lưu lượng nước (Q):**
  - Lưu lượng nước \( Q \) được tính toán từ **Module 3** và sẽ là đầu vào cho Module 4 để xác định **thể tích bể lắng** và **kích thước bể lắng**.

- **Thời gian trộn (t) và Cường độ trộn:**
  - Thời gian trộn và cường độ trộn từ **Module 3** sẽ giúp Module 4 xác định mức độ phân tán và phân lớp các chất trong bể lắng, ảnh hưởng đến quá trình lắng.

- **Kích thước ngăn trộn:**
  - Các thông số về kích thước ngăn trộn từ **Module 3** (chiều cao, chiều rộng và chiều dài của bể trộn) sẽ được sử dụng để tính toán **kích thước bể lắng** và **khối lượng bùn lắng**.

## 3. Các công thức tính toán chi tiết trong Module 4

### 3.1. Công suất nước vào bể lắng (Q₁)

Lưu lượng nước vào bể lắng được tính với hệ số an toàn:

$$
Q_1 = \alpha \times Q
$$

Trong đó:
- \( Q_1 \): Công suất nước vào bể lắng (m³/h)
- \( \alpha \): Hệ số an toàn (thường α = 1.05)
- \( Q \): Lưu lượng nước từ Module 3 (m³/h)

**Ví dụ:**
- Q = 58.3333333 m³/h
- α = 1.05
- Q₁ = 1.05 × 58.3333333 = 61.25 m³/h

### 3.2. Diện tích mặt bằng cần thiết của bể lắng (F)

Diện tích mặt bằng cần thiết cho bể lắng nghiêng:

$$
F = \frac{Q_1}{U_o \times H \times \cos(\alpha) + W \times \cos^2(\alpha)}
$$

Trong đó:
- \( F \): Diện tích mặt bằng cần thiết (m²)
- \( Q_1 \): Công suất nước vào bể lắng (m³/h)
- \( U_o \): Tốc độ lắng của hạt (m/s), thường U_o = 0.00025 m/s
- \( H \): Chiều cao khối trụ lắng nghiêng (m), thường H = 0.867 m (với góc 60°)
- \( \alpha \): Góc nghiêng của ống lắng (độ), thường α = 60°
- \( W \): Chiều rộng ống lắng hình trụ vuông (m), thường W = 0.05 m

**Công thức tính H theo góc nghiêng:**

$$
H = \frac{H_0}{\cos(\alpha)}
$$

Trong đó:
- \( H_0 \): Chiều cao thực tế (m), thường H₀ = 0.9 m
- Với α = 60°: H = 0.9 / cos(60°) = 0.9 / 0.5 = 1.8 m
- Hoặc có thể chọn H = 0.867 m (theo thiết kế cụ thể)

**Ví dụ:**
- Q₁ = 61.25 m³/h = 0.0170139 m³/s
- U_o = 0.00025 m/s
- H = 0.867 m
- W = 0.05 m
- α = 60°, cos(60°) = 0.5, cos²(60°) = 0.25

**Tính toán:**
- F = 0.0170139 / (0.00025 × 0.867 × 0.5 + 0.05 × 0.25)
- F = 0.0170139 / (0.000108375 + 0.0125)
- F = 0.0170139 / 0.012608375 = 7.3027 m²

### 3.3. Kích thước bể lắng

Sau khi tính được diện tích F, chọn kích thước bể lắng phù hợp:

**3.3.1. Diện tích mặt bể lắng:**

$$
S = R \times D
$$

Trong đó:
- \( S \): Diện tích mặt bể lắng (m²)
- \( R \): Chiều rộng bể lắng (m)
- \( D \): Chiều dài bể lắng (m)

**3.3.2. Tỷ lệ kích thước khuyến nghị:**
- Tỷ lệ D:R thường là 2:1 đến 4:1
- Chiều cao H thường từ 2.5 - 4 m
- Diện tích chọn phải lớn hơn hoặc bằng F tính toán

**Ví dụ:**
- F tính toán = 7.3027 m²
- Chọn: H = 3 m, R = 2.3 m, D = 6.5 m
- S = 2.3 × 6.5 = 14.95 m² > 7.3027 m² ✓

### 3.4. Thể tích bể lắng (V)

Thể tích bể lắng được tính từ kích thước đã chọn:

$$
V = S \times H = R \times D \times H
$$

Trong đó:
- \( V \): Thể tích bể lắng (m³)
- \( S \): Diện tích mặt bể lắng (m²)
- \( H \): Chiều cao bể lắng (m)
- \( R \): Chiều rộng bể lắng (m)
- \( D \): Chiều dài bể lắng (m)

**Ví dụ:**
- R = 2.3 m, D = 6.5 m, H = 3 m
- V = 2.3 × 6.5 × 3 = 44.85 m³

### 3.5. Tốc độ lắng bề mặt (v)

Tốc độ lắng bề mặt hay tốc độ dòng chảy trên bề mặt:

$$
v = \frac{Q_1}{S}
$$

Trong đó:
- \( v \): Tốc độ lắng bề mặt (m/h)
- \( Q_1 \): Công suất nước vào bể lắng (m³/h)
- \( S \): Diện tích mặt bể lắng (m²)

**Chuyển đổi đơn vị:**
- Nếu Q₁ (m³/h) và S (m²): v (m/h) = Q₁ / S
- Nếu Q₁ (m³/s) và S (m²): v (m/s) = Q₁ / S, hoặc v (m/h) = (Q₁ × 3600) / S

**Ví dụ:**
- Q₁ = 61.25 m³/h
- S = 14.95 m²
- v = 61.25 / 14.95 = 4.097 m/h

### 3.6. Thời gian lắng (t_lắng)

Thời gian lắng là thời gian nước lưu lại trong bể lắng:

$$
t_{\text{lắng}} = \frac{V}{Q_1}
$$

Trong đó:
- \( t_{\text{lắng}} \): Thời gian lắng (h)
- \( V \): Thể tích bể lắng (m³)
- \( Q_1 \): Công suất nước vào bể lắng (m³/h)

**Chuyển đổi đơn vị:**
- Nếu V (m³) và Q₁ (m³/h): t_lắng (h) = V / Q₁
- Chuyển đổi: t_lắng (phút) = t_lắng (h) × 60

**Ví dụ:**
- V = 44.85 m³
- Q₁ = 61.25 m³/h
- t_lắng = 44.85 / 61.25 = 0.732 h = 43.9 phút

**Thời gian lắng khuyến nghị:**
- Bể lắng ngang: t = 1.5 - 3 h
- Bể lắng đứng: t = 1 - 2 h
- Bể lắng nghiêng: t = 0.5 - 1.5 h

### 3.7. Hiệu suất lắng

Hiệu suất lắng phụ thuộc vào tốc độ lắng của hạt và tốc độ dòng chảy:

$$
\eta = \frac{U_o}{v} \times 100\%
$$

Trong đó:
- \( \eta \): Hiệu suất lắng (%)
- \( U_o \): Tốc độ lắng của hạt (m/s)
- \( v \): Tốc độ lắng bề mặt (m/s)

**Điều kiện để hạt lắng được:**
- U_o ≥ v: Hạt sẽ lắng được
- U_o < v: Hạt không lắng được, cần tăng diện tích hoặc giảm lưu lượng

**Ví dụ:**
- U_o = 0.00025 m/s = 0.9 m/h
- v = 4.097 m/h
- η = (0.9 / 4.097) × 100% = 21.9%

## 4. Các thông số tính toán trong Module 4 (Output):

Module 4 sẽ tính toán các thông số quan trọng sau:

- **Công suất nước vào bể lắng (Q₁):** Tính với hệ số an toàn
- **Diện tích mặt bằng cần thiết (F):** Tính theo công thức bể lắng nghiêng
- **Kích thước bể lắng:** Chiều dài (D), chiều rộng (R), chiều cao (H)
- **Thể tích bể lắng (V):** Tính từ kích thước đã chọn
- **Tốc độ lắng bề mặt (v):** Tốc độ dòng chảy trên bề mặt
- **Thời gian lắng (t_lắng):** Thời gian nước lưu lại trong bể
- **Hiệu suất lắng (η):** Phần trăm hạt có thể lắng được

## 5. Quy trình tính toán từng bước trong Module 4

### Bước 1: Nhận dữ liệu từ Module 3

- Lưu lượng nước Q (m³/h)
- Thời gian trộn t (h)
- Kích thước ngăn trộn (L × W × H)

### Bước 2: Nhận dữ liệu đầu vào từ người dùng

- Hệ số an toàn α (thường 1.05)
- Tốc độ lắng của hạt U_o (m/s), thường 0.00025 m/s
- Chiều cao khối trụ lắng nghiêng H (m), thường 0.867 m
- Chiều rộng ống lắng W (m), thường 0.05 m
- Góc nghiêng α (độ), thường 60°
- Tỷ lệ kích thước (D:R)

### Bước 3: Tính công suất nước vào bể lắng

$$
Q_1 = \alpha \times Q
$$

**Lưu ý:** Đảm bảo Q và Q₁ cùng đơn vị (m³/h)

### Bước 4: Tính diện tích mặt bằng cần thiết

$$
F = \frac{Q_1}{U_o \times H \times \cos(\alpha) + W \times \cos^2(\alpha)}
$$

**Lưu ý:**
- Chuyển đổi Q₁ về m³/s nếu U_o có đơn vị m/s
- Tính cos(α) và cos²(α) theo góc nghiêng

### Bước 5: Chọn kích thước bể lắng

1. Chọn chiều cao H (thường 2.5 - 4 m)
2. Chọn chiều rộng R dựa trên tỷ lệ (thường 2 - 4 m)
3. Tính chiều dài:

$$
D = \frac{F}{R}
$$

4. Điều chỉnh để S = R × D ≥ F

### Bước 6: Tính thể tích bể lắng

$$
V = R \times D \times H
$$

### Bước 7: Tính tốc độ lắng bề mặt

$$
v = \frac{Q_1}{S}
$$

Với S = R × D

### Bước 8: Tính thời gian lắng

$$
t_{\text{lắng}} = \frac{V}{Q_1}
$$

### Bước 9: Tính hiệu suất lắng

$$
\eta = \frac{U_o}{v} \times 100\%
$$

**Lưu ý:** Đảm bảo U_o và v cùng đơn vị (m/s hoặc m/h)

### Bước 10: Kiểm tra và đánh giá

- Kiểm tra S ≥ F
- Kiểm tra t_lắng có đủ không (thường ≥ 0.5 h)
- Kiểm tra hiệu suất lắng có đạt yêu cầu không
- Nếu không đạt: Điều chỉnh kích thước hoặc tăng diện tích

### Bước 11: Xuất kết quả

1. Công suất nước vào bể lắng Q₁ (m³/h)
2. Diện tích mặt bằng cần thiết F (m²)
3. Kích thước: D × R × H (m)
4. Diện tích mặt bể lắng S (m²)
5. Thể tích bể lắng V (m³)
6. Tốc độ lắng bề mặt v (m/h)
7. Thời gian lắng t_lắng (phút)
8. Hiệu suất lắng η (%)

### Ví dụ tính toán đầy đủ

**Đầu vào:**
- Q = 58.3333333 m³/h (từ Module 3)
- α = 1.05
- U_o = 0.00025 m/s
- H = 0.867 m
- W = 0.05 m
- Góc nghiêng = 60°
- Tỷ lệ: D:R = 2.8:1

**Tính toán:**

1. **Tính công suất nước vào:**
   - Q₁ = 1.05 × 58.3333333 = 61.25 m³/h = 0.0170139 m³/s

2. **Tính diện tích cần thiết:**
   - cos(60°) = 0.5, cos²(60°) = 0.25
   - F = 0.0170139 / (0.00025 × 0.867 × 0.5 + 0.05 × 0.25)
   - F = 0.0170139 / (0.000108375 + 0.0125)
   - F = 0.0170139 / 0.012608375 = 7.3027 m²

3. **Chọn kích thước:**
   - Chọn H = 3 m
   - Chọn R = 2.3 m
   - D = 7.3027 / 2.3 = 3.17 m
   - Điều chỉnh: D = 6.5 m (để đảm bảo S ≥ F)
   - S = 2.3 × 6.5 = 14.95 m² > 7.3027 m² ✓

4. **Tính thể tích:**
   - V = 2.3 × 6.5 × 3 = 44.85 m³

5. **Tính tốc độ lắng bề mặt:**
   - v = 61.25 / 14.95 = 4.097 m/h = 0.001137 m/s

6. **Tính thời gian lắng:**
   - t_lắng = 44.85 / 61.25 = 0.732 h = 43.9 phút

7. **Tính hiệu suất lắng:**
   - U_o = 0.00025 m/s = 0.9 m/h
   - v = 4.097 m/h
   - η = (0.9 / 4.097) × 100% = 21.9%

**Kết quả:** Bể lắng có kích thước 6.5 m × 2.3 m × 3 m, thời gian lắng 43.9 phút, hiệu suất lắng 21.9%

## 6. Liên kết giữa Module 3 và Module 4:
Khi xây dựng một hệ thống web cho dự án này, việc **bàn giao dữ liệu từ Module 3 sang Module 4** là rất quan trọng. Dưới đây là các thông số cần được bàn giao giữa hai module này:

### Module 3 cần bàn giao cho Module 4:
1. **Lưu lượng nước (Q):** Module 3 tính toán lưu lượng nước sẽ được bàn giao cho Module 4 để tính toán **thể tích bể lắng** và **kích thước bể lắng**.

2. **Thời gian trộn (t):** Thời gian trộn từ Module 3 giúp Module 4 tính toán **thời gian lắng** và **hiệu quả lắng**.

3. **Kích thước ngăn trộn:** Các kích thước ngăn trộn từ Module 3 sẽ giúp Module 4 xác định diện tích và thể tích bể lắng, từ đó tính toán các thông số liên quan.

### Module 4 sẽ sử dụng những thông số này để tính toán các kết quả đầu ra, bao gồm:
- **Thể tích bể lắng (V)**.
- **Kích thước bể lắng** (chiều dài, chiều rộng, chiều cao).
- **Tốc độ lắng** và **thời gian lắng**.

## 7. Xây dựng giao diện web cho hệ thống tính toán tự động:
Khi xây dựng một **giao diện web** cho hệ thống tính toán tự động, cần đảm bảo rằng các **dữ liệu đầu vào từ người dùng** sẽ được nhập vào và tính toán tự động theo các công thức đã mô tả. Giao diện web sẽ nhận các thông số sau từ người dùng:

1. **Lưu lượng nước (Q)**.
2. **Thời gian lắng (t)**.
3. **Các kích thước của bể lắng** (chiều dài, chiều rộng, chiều cao).
4. **Các yếu tố ảnh hưởng đến quá trình lắng** (như mật độ hạt lắng, tốc độ lắng).

Sau đó, hệ thống sẽ tính toán **thể tích bể lắng**, **kích thước bể lắng**, và **tốc độ lắng**.

## Kết luận:
Module 4 đóng vai trò quan trọng trong việc tính toán các thông số liên quan đến **quá trình lắng** trong các công trình xử lý nước. Module này nhận các thông số từ **Module 3** và sử dụng chúng để tính toán **thể tích bể lắng**, **kích thước bể lắng**, **tốc độ lắng**, và **thời gian lắng**. Để đảm bảo tính chính xác, **Module 3** cần bàn giao các thông số như **lưu lượng nước**, **thời gian trộn**, và **kích thước ngăn trộn** cho **Module 4**.

Bằng cách này, hệ thống web sẽ hoạt động hiệu quả, giúp các kỹ sư dễ dàng tính toán và tối ưu hóa các thông số trong công trình xử lý nước.
