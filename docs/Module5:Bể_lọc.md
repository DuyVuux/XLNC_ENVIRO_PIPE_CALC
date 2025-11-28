# Báo cáo chi tiết: Module 5 - Bể Lọc Nhanh

## 1. Mục tiêu của Module 5

Module 5 thực hiện việc tính toán các thông số quan trọng liên quan đến **quá trình lọc nước** trong hệ thống lọc nhanh trọng lực. Mục tiêu chính của module này là:

- **Tính toán kích thước bể lọc**, **diện tích lọc**, và **tốc độ lọc** phù hợp với lưu lượng thiết kế
- **Xác định cường độ rửa lọc** và **lưu lượng nước rửa lọc** để đảm bảo hiệu quả lọc và duy trì chất lượng nước
- **Tính toán tổn thất áp lực** trong quá trình lọc để xác định chiều cao cột nước cần thiết
- **Thiết kế hệ thống phân phối nước và thu nước** đảm bảo phân bố đều trong bể lọc

## 2. Các thông số đầu vào (Input) từ Module 4

Để Module 5 có thể thực hiện các tính toán chính xác, **Module 4** sẽ cung cấp một số thông số đầu vào quan trọng:

- **Lưu lượng nước (Q):**
  - Lưu lượng nước \( Q \) tính từ **Module 4** (sau bể lắng) sẽ được cung cấp cho Module 5 để tính toán **diện tích lọc** và **tốc độ lọc**

- **Kích thước bể lắng:**
  - Các kích thước bể lắng (chiều dài D, chiều rộng R, chiều cao H) sẽ được sử dụng để tham khảo khi thiết kế bể lọc

- **Chất lượng nước sau lắng:**
  - Độ đục, hàm lượng cặn lơ lửng sau bể lắng ảnh hưởng đến chu kỳ lọc và tần suất rửa lọc

## 3. Các công thức tính toán chi tiết trong Module 5

### 3.1. Diện tích bể lọc (f₁)

Diện tích bể lọc được tính dựa trên lưu lượng nước và vận tốc lọc:

$$
f_1 = \frac{Q}{v}
$$

Trong đó:
- \( f_1 \): Diện tích bể lọc (m²)
- \( Q \): Lưu lượng thiết kế (m³/h)
- \( v \): Vận tốc lọc (m/h)

**Vận tốc lọc khuyến nghị:**
- Bể lọc nhanh trọng lực: v = 6 - 10 m/h
- Bể lọc chậm: v = 0.1 - 0.3 m/h
- Bể lọc áp lực: v = 8 - 12 m/h

**Ví dụ:**
- Q = 50.00 m³/h
- v = 8.00 m/h
- f₁ = 50.00 / 8.00 = 6.25 m²

### 3.2. Ống thông lưu trong bể (d)

Đường kính ống thông lưu trong bể:

- \( d \): Đường kính ống thông lưu (m), thường d = 0.08 m

**Ví dụ:**
- d = 0.08 m

### 3.3. Diện tích ống thông lưu (f₂)

Diện tích tiết diện một ống thông lưu:

$$
f_2 = \frac{\pi \times d^2}{4}
$$

Trong đó:
- \( f_2 \): Diện tích ống thông lưu (m²)
- \( d \): Đường kính ống thông lưu (m)

**Ví dụ:**
- d = 0.08 m
- f₂ = π × 0.08² / 4 = 0.005 m² ≈ 0.01 m²

### 3.4. Số ống thông lưu trong bể (n)

Số lượng ống thông lưu trong bể:

- \( n \): Số ống thông lưu (cái), thường n = 4 cái

**Ví dụ:**
- n = 4.00 cái

### 3.5. Tổng diện tích ngăn bể (f₁')

Tổng diện tích ngăn bể bao gồm cả diện tích ống thông lưu:

$$
f_1' = f_1 + f_2 \times n
$$

Trong đó:
- \( f_1' \): Tổng diện tích ngăn bể (m²)
- \( f_1 \): Diện tích bể lọc (m²)
- \( f_2 \): Diện tích một ống thông lưu (m²)
- \( n \): Số ống thông lưu (cái)

**Ví dụ:**
- f₁ = 6.25 m²
- f₂ = 0.01 m²
- n = 4 cái
- f₁' = 6.25 + 0.01 × 4 = 6.29 m² ≈ 6.27 m²

### 3.6. Đường kính bể được tính (D)

Đường kính bể được tính từ tổng diện tích ngăn bể:

$$
D = \sqrt{\frac{4 \times f_1'}{\pi}}
$$

Trong đó:
- \( D \): Đường kính bể được tính (m)
- \( f_1' \): Tổng diện tích ngăn bể (m²)

**Sau khi tính toán, chọn đường kính tiêu chuẩn gần nhất lớn hơn**

**Ví dụ:**
- f₁' = 6.27 m²
- D tính toán = √(4 × 6.27 / π) = √7.99 = 2.83 m
- Chọn D = 3.00 m (đường kính tiêu chuẩn)

### 3.7. Diện tích lọc thực tế (F₁)

Diện tích lọc thực tế bằng diện tích bể lọc trừ đi diện tích ống thông lưu:

$$
F_1 = f_1 - f_2
$$

Trong đó:
- \( F_1 \): Diện tích lọc thực tế (m²)
- \( f_1 \): Diện tích bể lọc (m²)
- \( f_2 \): Diện tích một ống thông lưu (m²)

**Ví dụ:**
- f₁ = 6.25 m²
- f₂ = 0.01 m²
- F₁ = 6.25 - 0.01 = 6.24 m² ≈ 6.23 m²

### 3.8. Vận tốc lọc thực tế (v)

Vận tốc lọc thực tế sau khi tính diện tích lọc thực tế:

$$
v = \frac{Q}{F_1}
$$

Trong đó:
- \( v \): Vận tốc lọc thực tế (m/h)
- \( Q \): Lưu lượng thiết kế (m³/h)
- \( F_1 \): Diện tích lọc thực tế (m²)

**Kiểm tra:** v phải nằm trong khoảng 6 - 10 m/h

**Ví dụ:**
- Q = 50.00 m³/h
- F₁ = 6.23 m²
- v = 50.00 / 6.23 = 8.03 m/h ✓ (nằm trong khoảng cho phép)

### 3.5. Các chiều cao trong bể lọc

Dựa trên sơ đồ kỹ thuật, bể lọc có các chiều cao được đánh dấu từ dưới lên trên:

**3.5.1. Các lớp trong bể lọc (từ dưới lên):**

- **h₁:** Chiều cao bộ phận thu đáy (m), thường 0.40 m
- **h₂:** Chiều cao bản lọc (m), thường 0.20 m
- **h₃:** Chiều cao lớp đệm (m), thường 0.10 m
- **h₄:** Chiều cao lớp vật liệu lọc (m), thường 0.80 m
- **h₅:** Chiều cao lớp nước trong (m), thường 0.50 m
- **h₆:** Chiều cao bản đỉnh (m), thường 0.20 m

**3.5.2. Chiều cao két rửa (h₇):**

Chiều cao két rửa (chiều cao nước rửa trong bể) được tính theo công thức:

$$
h_7 = \frac{60 \times f_1' \times q \times t}{f_1' \times n \times 100}
$$

Hoặc đơn giản hóa:

$$
h_7 = \frac{60 \times q \times t}{n \times 100}
$$

Trong đó:
- \( h_7 \): Chiều cao két rửa (m)
- \( q \): Cường độ rửa lọc (l/m²·s)
- \( t \): Thời gian rửa lọc (phút)
- \( n \): Số bể (cái)
- \( f_1' \): Diện tích lọc tính toán (m²)

**Ví dụ:**
- q = 10.00 l/m²·s
- t = 3.00 phút
- n = 1.00 cái
- f₁' = 6.27 m²
- h₇ = (60 × 6.27 × 10.00 × 3.00) / (6.27 × 1.00 × 100) = 1.80 m ≈ 1.79 m

**3.5.3. Chiều cao bảo vệ (h₈):**

- **h₈:** Chiều cao bảo vệ (m), thường 0.80 m

**3.5.4. Các chiều cao hệ thống cấp nước:**

- **h₇ (cấp nước):** Chiều cao từ ống vào bể lọc đến đáy bể cấp nước (bể cao bên trái)
- **h₈ (cấp nước):** Chiều cao từ đỉnh bể lọc đến mức nước trong bể cấp nước

**Lưu ý:** h₇ có hai ý nghĩa khác nhau:
- h₇ (két rửa): Chiều cao nước rửa trong bể
- h₇ (cấp nước): Chiều cao từ ống vào đến đáy bể cấp nước

**3.5.5. Các chiều cao hệ thống thu nước:**

- **h₉:** Chiều cao mức nước trong bể thu nước (bể thấp bên phải) (m)

**3.5.6. Các chiều cao hệ thống xi phông:**

- **h₁₁:** Chiều cao từ đỉnh bể lọc đến điểm cao nhất của ống xi phông
- **h₁₂:** Chiều cao bổ sung của ống xi phông

**3.5.7. Các chiều cao tổng:**

- **H:** Tổng chiều cao bể lọc (m)
- **H₁:** Tổng chiều cao từ đáy bể lọc đến mức nước trong bể thu nước (m)
- **H₂:** Tổng chiều cao từ đáy bể lọc đến đỉnh bể lọc (m)
- **H₃:** Tổng chiều cao từ đáy bể lọc đến điểm cao nhất của ống xi phông (m)

**Công thức tính tổng chiều cao bể lọc:**

$$
H = h_1 + h_2 + h_3 + h_4 + h_5 + h_6 + h_7 + h_8
$$

Trong đó:
- \( H \): Tổng chiều cao bể lọc (m)
- \( h_1 \): Chiều cao bộ phận thu đáy (m)
- \( h_2 \): Chiều cao bản lọc (m)
- \( h_3 \): Chiều cao lớp đệm (m)
- \( h_4 \): Chiều cao lớp vật liệu lọc (m)
- \( h_5 \): Chiều cao lớp nước trong (m)
- \( h_6 \): Chiều cao bản đỉnh (m)
- \( h_7 \): Chiều cao két rửa (m)
- \( h_8 \): Chiều cao bảo vệ (m)

**Ví dụ:**
- h₁ = 0.40 m
- h₂ = 0.20 m
- h₃ = 0.10 m
- h₄ = 0.80 m
- h₅ = 0.50 m
- h₆ = 0.20 m
- h₇ = 1.79 m
- h₈ = 0.80 m
- H = 0.40 + 0.20 + 0.10 + 0.80 + 0.50 + 0.20 + 1.79 + 0.80 = 4.79 m
- Chọn H = 5.00 m (chiều cao tiêu chuẩn)

**Công thức tính các chiều cao tổng khác:**

$$
H_2 = h_1 + h_2 + h_3 + h_4 + h_5 + h_6
$$

$$
H_1 = H_2 + h_9
$$

$$
H_3 = H_2 + h_{11} + h_{12}
$$

### 3.6. Tổn thất áp lực trong bể lọc (H)

Tổn thất áp lực tổng cộng trong bể lọc là tổng của các thành phần:

$$
H = h_1 + h_2 + h_3 + h_4 + h_5 + h_6 + h_7 + h_8
$$

Trong đó:
- \( H \): Tổng tổn thất áp lực (m)
- \( h_1 \): Tổn thất ở đầu vào (m)
- \( h_2 \): Tổn thất qua bộ phận phân phối đáy (m)
- \( h_3 \): Tổn thất qua lớp sỏi đỡ (m)
- \( h_4 \): Tổn thất qua lớp vật liệu lọc (m)
- \( h_5 \): Tổn thất cục bộ khi nước ra khỏi bể (m)
- \( h_6 \): Tổn thất trên ống dẫn nước lọc (m)
- \( h_7 \): Tổn thất do kết rửa (m)
- \( h_8 \): Chiều cao bảo vệ (m)

**3.5.1. Tổn thất ở đầu vào (h₁):**

$$
h_1 = \xi_1 \times \frac{V_1^2}{2g}
$$

Trong đó:
- \( \xi_1 \): Hệ số tổn thất cục bộ (thường 0.5 - 1.0)
- \( V_1 \): Vận tốc nước vào (m/s)
- \( g \): Gia tốc trọng trường = 9.81 m/s²

**Giá trị tham khảo:** h₁ = 0.5 - 1.0 m

**3.5.2. Tổn thất qua bộ phận phân phối đáy (h₂):**

$$
h_2 = \xi_2 \times \frac{V_2^2}{2g}
$$

Trong đó:
- \( \xi_2 \): Hệ số tổn thất (thường 0.3 - 0.5)
- \( V_2 \): Vận tốc qua lỗ phân phối (m/s)

**Giá trị tham khảo:** h₂ = 0.3 - 0.5 m

**3.5.3. Tổn thất qua lớp sỏi đỡ (h₃):**

$$
h_3 = \lambda_3 \times \frac{L_3 \times V_3^2}{d_3 \times 2g}
$$

Trong đó:
- \( \lambda_3 \): Hệ số ma sát
- \( L_3 \): Chiều dày lớp sỏi đỡ (m), thường 0.3 - 0.5 m
- \( V_3 \): Vận tốc trong lớp sỏi (m/s)
- \( d_3 \): Đường kính tương đương của sỏi (m)

**Giá trị tham khảo:** h₃ = 0.4 - 0.6 m

**3.5.4. Tổn thất qua lớp vật liệu lọc (h₄):**

Đây là thành phần tổn thất lớn nhất:

$$
h_4 = \lambda_4 \times \frac{L_4 \times V_4^2}{d_{10} \times 2g} \times \left(1 - \varepsilon\right)^2
$$

Trong đó:
- \( \lambda_4 \): Hệ số ma sát
- \( L_4 \): Chiều dày lớp vật liệu lọc (m), thường 0.7 - 1.2 m
- \( V_4 \): Vận tốc lọc (m/s)
- \( d_{10} \): Đường kính hạt hiệu quả (m)
- \( \varepsilon \): Độ rỗng của lớp vật liệu lọc (thường 0.4 - 0.5)

**Công thức đơn giản hóa:**

$$
h_4 = k \times L_4 \times V
$$

Trong đó:
- \( k \): Hệ số tổn thất (m⁻¹), thường 0.5 - 1.5 m⁻¹
- \( V \): Vận tốc lọc (m/h)

**Giá trị tham khảo:** h₄ = 0.6 - 1.2 m (khi mới lọc), tăng dần khi bẩn

**3.5.5. Tổn thất cục bộ khi nước ra (h₅):**

$$
h_5 = \xi_5 \times \frac{V_5^2}{2g}
$$

**Giá trị tham khảo:** h₅ = 0.3 - 0.6 m

**3.5.6. Tổn thất trên ống dẫn nước lọc (h₆):**

$$
h_6 = \lambda_6 \times \frac{L_6 \times V_6^2}{D_6 \times 2g}
$$

**Giá trị tham khảo:** h₆ = 0.3 - 0.7 m

**3.5.7. Tổn thất do kết rửa (h₇):**

Tổn thất khi bắt đầu lọc lại sau rửa:

**Giá trị tham khảo:** h₇ = 0 - 0.2 m

**3.6.8. Chiều cao bảo vệ (h₈):**

Chiều cao dự trữ để chống tràn và đảm bảo an toàn:

**Giá trị tham khảo:** h₈ = 0.5 - 0.7 m

### 3.7. Hệ thống cấp nước từ bể cao

**3.7.1. Chiều cao cột nước cấp (h₇, h₈):**

Hệ thống cấp nước từ bể cao đảm bảo áp lực đủ để nước chảy vào bể lọc:

$$
h_7 = H_2 - h_6
$$

$$
h_8 = H_2 + \Delta h
$$

Trong đó:
- \( h_7 \): Chiều cao từ ống vào bể lọc đến đáy bể cấp nước (m)
- \( h_8 \): Chiều cao từ đỉnh bể lọc đến mức nước trong bể cấp (m)
- \( H_2 \): Tổng chiều cao bể lọc (m)
- \( h_6 \): Chiều cao đến ống vào (m)
- \( \Delta h \): Chênh lệch mức nước để tạo áp lực (m), thường 0.2 - 0.5 m

**3.7.2. Áp lực cấp nước:**

Áp lực cần thiết để nước chảy vào bể lọc:

$$
P_{\text{cấp}} = \rho \times g \times h_8
$$

Trong đó:
- \( P_{\text{cấp}} \): Áp lực cấp nước (Pa)
- \( \rho \): Mật độ nước = 1000 kg/m³
- \( g \): Gia tốc trọng trường = 9.81 m/s²
- \( h_8 \): Chiều cao cột nước (m)

### 3.8. Hệ thống thu nước vào bể thấp

**3.8.1. Chiều cao bể thu nước (h₉):**

Chiều cao từ đáy bể thu nước đến ống xả:

$$
h_9 = H_1 - H_2
$$

Trong đó:
- \( h_9 \): Chiều cao từ đáy bể thu đến ống xả (m)
- \( H_1 \): Tổng chiều cao từ đáy bể lọc đến đáy bể thu (m)
- \( H_2 \): Tổng chiều cao bể lọc (m)

**Giá trị tham khảo:** h₉ = 0.3 - 0.5 m

**3.8.2. Thể tích bể thu nước:**

Thể tích bể thu nước cần đủ để chứa nước lọc:

$$
V_{\text{thu}} = Q \times t_{\text{dự trữ}}
$$

Trong đó:
- \( V_{\text{thu}} \): Thể tích bể thu nước (m³)
- \( Q \): Lưu lượng nước (m³/h)
- \( t_{\text{dự trữ}} \): Thời gian dự trữ (h), thường 0.5 - 1.0 h

### 3.9. Hệ thống xi phông

**3.9.1. Chiều cao xi phông (h₁₁, h₁₂):**

Hệ thống xi phông dùng để điều khiển mức nước và tự động xả:

$$
h_{11} = H_3 - H_2 - h_{12}
$$

$$
h_{12} = \Delta h_{\text{xi phông}}
$$

Trong đó:
- \( h_{11} \): Chiều cao từ đỉnh bể lọc đến điểm cao nhất ống xi phông (m)
- \( h_{12} \): Chiều cao bổ sung của ống xi phông (m)
- \( H_3 \): Tổng chiều cao đến điểm cao nhất xi phông (m)
- \( H_2 \): Tổng chiều cao bể lọc (m)
- \( \Delta h_{\text{xi phông}} \): Chênh lệch để tạo áp lực xi phông (m), thường 0.1 - 0.3 m

**3.9.2. Nguyên lý hoạt động xi phông:**

- Khi mức nước trong bể lọc vượt quá h₁₁, nước tự động chảy qua xi phông
- Áp lực chân không trong xi phông tạo lực hút
- Nước được xả tự động khi mức nước đạt ngưỡng

**3.9.3. Điều kiện để xi phông hoạt động:**

$$
h_{11} + h_{12} \geq H_2 + h_8
$$

Trong đó:
- Điều kiện này đảm bảo xi phông có thể xả nước khi cần

**Ví dụ tính tổng tổn thất:**
- h₁ = 0.8 m
- h₂ = 0.4 m
- h₃ = 0.55 m
- h₄ = 0.8 m
- h₅ = 0.5 m
- h₆ = 0.5 m
- h₇ = 0.0 m
- h₈ = 0.6 m
- **H = 0.8 + 0.4 + 0.55 + 0.8 + 0.5 + 0.5 + 0.0 + 0.6 = 4.15 m**

### 3.10. Cường độ rửa lọc (q)

Cường độ rửa lọc là lưu lượng nước rửa trên một đơn vị diện tích:

$$
    q = \frac{Q_{\text{rửa}}}{F_1}
$$

Trong đó:
- \( q \): Cường độ rửa lọc (l/s·m² hoặc m³/h·m²)
- \( Q_{\text{rửa}} \): Lưu lượng nước rửa lọc (l/s hoặc m³/h)
- \( F_1 \): Diện tích lọc (m²)

**Cường độ rửa khuyến nghị:**
- Rửa nước đơn thuần: q = 12 - 15 l/s·m²
- Rửa khí + nước: q = 8 - 12 l/s·m²
- Rửa nước tốc độ cao: q = 10 - 15 l/s·m²

**Chuyển đổi đơn vị:**
- 1 l/s·m² = 3.6 m³/h·m²

**Ví dụ:**
- q = 10 l/s·m² = 36 m³/h·m²

### 3.11. Lưu lượng nước rửa lọc (Q_rửa)

Lưu lượng nước rửa lọc tổng cộng:

$$
    Q_{\text{rửa}} = q \times F_1
$$

Trong đó:
- \( Q_{\text{rửa}} \): Lưu lượng nước rửa lọc (l/s hoặc m³/h)
- \( q \): Cường độ rửa lọc (l/s·m² hoặc m³/h·m²)
- \( F_1 \): Diện tích lọc (m²)

**Ví dụ:**
- q = 10 l/s·m² = 36 m³/h·m²
- F₁ = 7.07 m²
- Q_rửa = 36 × 7.07 = 254.52 m³/h = 70.7 l/s

### 3.12. Thể tích nước rửa lọc (V_rửa)

Thể tích nước cần thiết cho một lần rửa:

$$
V_{\text{rửa}} = Q_{\text{rửa}} \times t_{\text{rửa}}
$$

Trong đó:
- \( V_{\text{rửa}} \): Thể tích nước rửa (m³)
- \( Q_{\text{rửa}} \): Lưu lượng nước rửa (m³/h)
- \( t_{\text{rửa}} \): Thời gian rửa lọc (h)

**Thời gian rửa khuyến nghị:**
- Rửa khí: 2 - 3 phút
- Rửa nước tốc độ thấp: 2 - 3 phút
- Rửa nước tốc độ cao: 3 - 5 phút
- **Tổng thời gian:** 5 - 10 phút

**Ví dụ:**
- Q_rửa = 254.52 m³/h
- t_rửa = 5 phút = 0.0833 h
- V_rửa = 254.52 × 0.0833 = 21.21 m³

### 3.13. Hệ thống phân phối nước đáy

**3.9.1. Diện tích ống phân phối (f₂):**

$$
f_2 = \frac{\pi \times d^2}{4}
$$

Trong đó:
- \( f_2 \): Diện tích tiết diện một ống (m²)
- \( d \): Đường kính ống phân phối (m)

**3.9.2. Số lượng ống phân phối (n):**

Số lượng ống được xác định dựa trên:
- Diện tích lọc
- Khoảng cách giữa các ống (thường 0.2 - 0.3 m)
- Yêu cầu phân phối đều

**Công thức gần đúng:**

$$
n = \frac{F_1}{a^2}
$$

Trong đó:
- \( a \): Khoảng cách giữa các ống (m)

**3.9.3. Tổng diện tích ống (F_r):**

$$
F_r = f_2 \times n
$$

**Yêu cầu:** F_r phải đủ lớn để đảm bảo phân phối đều, thường F_r ≥ 0.3% F₁

### 3.14. Chu kỳ lọc (T_lọc)

Chu kỳ lọc là thời gian giữa hai lần rửa lọc:

$$
T_{\text{lọc}} = \frac{V_{\text{bùn}} \times F_1}{Q \times C}
$$

Trong đó:
- \( T_{\text{lọc}} \): Chu kỳ lọc (h)
- \( V_{\text{bùn}} \): Dung tích chứa bùn của vật liệu lọc (m³/m²)
- \( F_1 \): Diện tích lọc (m²)
- \( Q \): Lưu lượng nước (m³/h)
- \( C \): Hàm lượng cặn trong nước vào (mg/l)

**Chu kỳ lọc khuyến nghị:**
- T_lọc = 12 - 48 h (tùy chất lượng nước vào)
- Khi tổn thất áp lực đạt 2.5 - 3.0 m cần rửa lọc

## 4. Cấu tạo bể lọc nhanh

### 4.1. Các thành phần chính

**4.1.1. Bộ phận thu đáy (h₁):**
- **Vị trí:** Đáy bể lọc
- **Chiều cao:** 0.40 m
- **Chức năng:** Thu nước đã lọc và phân phối nước/khí rửa

**4.1.2. Bản lọc (h₂):**
- **Vị trí:** Trên bộ phận thu đáy
- **Chiều cao:** 0.20 m
- **Chức năng:** Tấm lọc hoặc hệ thống phân phối đáy
- **Cấu tạo:** Ống có lỗ, tấm lọc, hoặc hệ thống ống nhánh

**4.1.3. Lớp đệm (h₃):**
- **Vật liệu:** Sỏi, đá dăm
- **Chiều dày:** 0.10 m
- **Cấp hạt:** 2 - 4 mm
- **Chức năng:** Đỡ lớp vật liệu lọc và phân phối nước

**4.1.4. Lớp vật liệu lọc (h₄):**
- **Vật liệu:** Cát thạch anh, độ hạt 0.5 - 1.2 mm
- **Chiều dày:** 0.80 m
- **Độ rỗng:** 0.4 - 0.5
- **Hệ số đồng nhất:** K₆₀/K₁₀ ≤ 1.5
- **Chức năng:** Lọc cặn bẩn từ nước

**4.1.5. Lớp nước trong (h₅):**
- **Chiều cao:** 0.50 m
- **Chức năng:** Lớp nước trên vật liệu lọc, tạo áp lực cho quá trình lọc

**4.1.6. Bản đỉnh (h₆):**
- **Chiều cao:** 0.20 m
- **Chức năng:** Cấu trúc đỉnh bể, chứa máng thu nước rửa và ống vào

**4.1.7. Chiều cao két rửa (h₇):**
- **Chiều cao:** 1.79 m (tính toán)
- **Chức năng:** Chiều cao nước rửa trong bể khi rửa lọc
- **Công thức:** h₇ = (60 × f₁' × q × t) / (f₁' × n × 100)

**4.1.8. Chiều cao bảo vệ (h₈):**
- **Chiều cao:** 0.80 m
- **Chức năng:** Chiều cao dự trữ để chống tràn và đảm bảo an toàn

**4.1.9. Máng thu nước rửa lọc:**
- **Vị trí:** Trong bản đỉnh (h₆)
- **Chức năng:** Thu nước bẩn khi rửa lọc

**4.1.8. Hệ thống xi phông (h₁₁, h₁₂):**
- **Vị trí:** Nối từ đỉnh bể lọc đến bể thu nước
- **Chiều cao h₁₁:** Từ đỉnh bể đến điểm cao nhất ống xi phông
- **Chiều cao h₁₂:** Phần bổ sung của ống xi phông
- **Chức năng:** Điều khiển mức nước và tự động xả khi cần
- **Nguyên lý:** Tự động xả khi mức nước vượt ngưỡng

**4.1.9. Bể cấp nước (bể cao bên trái):**
- **Vị trí:** Bên trái bể lọc, ở độ cao h₇ + h₈
- **Chức năng:** Cấp nước vào bể lọc với áp lực đủ
- **Kết nối:** Qua ống U (có thể là xi phông) vào bể lọc

**4.1.10. Bể thu nước (bể thấp bên phải):**
- **Vị trí:** Bên phải bể lọc, ở độ cao thấp hơn
- **Chức năng:** Thu nước đã lọc từ bể lọc
- **Kết nối:** Qua ống xi phông từ đỉnh bể lọc

### 4.2. Nguyên lý hoạt động

**4.2.1. Chế độ lọc:**
1. Nước từ bể cấp nước (bể cao bên trái) chảy qua ống U vào bể lọc
2. Nước đi vào bể lọc ở mức h₆ (phía trên lớp vật liệu lọc)
3. Nước chảy qua lớp nước (h₅) và lớp vật liệu lọc (h₄) từ trên xuống
4. Cặn bẩn bị giữ lại trên bề mặt và trong lớp vật liệu lọc
5. Nước sạch chảy qua lớp sỏi đỡ (h₃) và hệ thống phân phối đáy (h₂)
6. Nước sạch được thu ở đáy qua hệ thống phân phối (h₁)
7. Nước sạch chảy lên đỉnh bể lọc qua ống dẫn
8. Nước sạch chảy qua xi phông (h₁₁, h₁₂) vào bể thu nước (bể thấp bên phải)
9. Mức nước trong bể được duy trì bằng hệ thống xi phông tự động

**4.2.2. Chế độ rửa lọc:**
1. **Xả nước:** Hạ mức nước đến ngay trên máng thu
2. **Rửa khí (nếu có):** Đưa khí nén từ đáy, tạo xáo trộn mạnh
3. **Rửa nước tốc độ thấp:** Kết hợp khí và nước
4. **Rửa nước tốc độ cao:** Tắt khí, tăng lưu lượng nước
5. **Lọc trở lại:** Đóng van rửa, ổn định vật liệu lọc

## 5. Quy trình tính toán từng bước trong Module 5

### Bước 1: Nhận dữ liệu từ Module 4

- Lưu lượng nước Q (m³/h)
- Kích thước bể lắng (D × R × H)
- Chất lượng nước sau lắng (độ đục, hàm lượng cặn)

### Bước 2: Nhận dữ liệu đầu vào từ người dùng

- Vận tốc lọc V (m/h), thường 8 m/h
- Cường độ rửa lọc q (l/s·m²), thường 10 l/s·m²
- Thời gian rửa lọc t_rửa (phút), thường 5 phút
- Chiều dày lớp vật liệu lọc L₄ (m)
- Chiều dày lớp sỏi đỡ L₃ (m)
- Loại bể: Tròn hay chữ nhật

### Bước 3: Tính diện tích bể lọc

$$
f_1 = \frac{Q}{v}
$$

### Bước 4: Tính diện tích ống thông lưu

$$
f_2 = \frac{\pi \times d^2}{4}
$$

### Bước 5: Tính tổng diện tích ngăn bể

$$
f_1' = f_1 + f_2 \times n
$$

### Bước 6: Tính và chọn đường kính bể lọc

$$
D = \sqrt{\frac{4 \times f_1'}{\pi}}
$$

Chọn D tiêu chuẩn gần nhất lớn hơn

### Bước 7: Tính diện tích lọc thực tế

$$
F_1 = f_1 - f_2
$$

### Bước 8: Tính vận tốc lọc thực tế

$$
v = \frac{Q}{F_1}
$$

Kiểm tra: v phải nằm trong khoảng 6 - 10 m/h

### Bước 9: Tính các chiều cao trong bể lọc

**9.1. Chọn chiều cao các lớp:**
- h₁: 0.40 m (bộ phận thu đáy)
- h₂: 0.20 m (bản lọc)
- h₃: 0.10 m (lớp đệm)
- h₄: 0.80 m (lớp vật liệu lọc)
- h₅: 0.50 m (lớp nước trong)
- h₆: 0.20 m (bản đỉnh)
- h₈: 0.80 m (chiều cao bảo vệ)

**9.2. Tính chiều cao két rửa:**

$$
h_7 = \frac{60 \times q \times t}{n \times 100}
$$

**9.3. Tính tổng chiều cao bể lọc:**

$$
H = h_1 + h_2 + h_3 + h_4 + h_5 + h_6 + h_7 + h_8
$$

Chọn H tiêu chuẩn gần nhất lớn hơn

**9.4. Tính chiều cao tổng H₂:**

$$
H_2 = h_1 + h_2 + h_3 + h_4 + h_5 + h_6
$$

**9.5. Tính chiều cao hệ thống cấp nước:**

$$
h_7\text{(cấp)} = H_2 - h_6
$$

$$
h_8\text{(cấp)} = H_2 + \Delta h
$$

Với Δh = 0.2 - 0.5 m

**9.6. Tính chiều cao hệ thống thu nước:**

$$
h_9 = 0.3 - 0.5 \text{ m}
$$

$$
H_1 = H_2 + h_9
$$

**9.7. Tính chiều cao xi phông:**

$$
h_{11} = H_2 + 0.1 - 0.3 \text{ m}
$$

$$
h_{12} = 0.1 - 0.3 \text{ m}
$$

$$
H_3 = H_2 + h_{11} + h_{12}
$$

### Bước 8: Tính tổn thất áp lực

$$
H = h_1 + h_2 + h_3 + h_4 + h_5 + h_6 + h_7 + h_8
$$

Tính từng thành phần hoặc sử dụng giá trị tham khảo

**Lưu ý:** h₁ đến h₈ ở đây là tổn thất áp lực, khác với h₁ đến h₈ là chiều cao các lớp

### Bước 9: Tính hệ thống cấp nước và thu nước

**9.1. Tính áp lực cấp nước:**

$$
P_{\text{cấp}} = \rho \times g \times h_8
$$

**9.2. Tính thể tích bể thu nước:**

$$
V_{\text{thu}} = Q \times t_{\text{dự trữ}}
$$

### Bước 10: Tính hệ thống xi phông

**10.1. Kiểm tra điều kiện xi phông:**

$$
h_{11} + h_{12} \geq H_2 + h_8
$$

**10.2. Tính chiều cao xi phông:**

$$
H_3 = H_2 + h_{11} + h_{12}
$$

### Bước 12: Tính cường độ rửa lọc

Chọn q theo loại rửa (nước đơn thuần hoặc khí + nước)

### Bước 13: Tính lưu lượng nước rửa lọc

$$
    Q_{\text{rửa}} = q \times F_1
$$

### Bước 14: Tính thể tích nước rửa lọc

$$
V_{\text{rửa}} = Q_{\text{rửa}} \times t_{\text{rửa}}
$$

### Bước 15: Kiểm tra và đánh giá

- Tính số lượng ống phân phối
- Tính đường kính ống
- Kiểm tra tổng diện tích ống

- Kiểm tra vận tốc lọc có nằm trong khoảng cho phép không
- Kiểm tra tổng chiều cao bể lọc có hợp lý không
- Kiểm tra công suất bơm rửa có đủ không
- Kiểm tra dung tích bể chứa nước rửa
- Kiểm tra điều kiện xi phông

### Bước 16: Xuất kết quả

1. Diện tích bể lọc f₁ (m²)
2. Diện tích ống thông lưu f₂ (m²)
3. Số ống thông lưu n (cái)
4. Tổng diện tích ngăn bể f₁' (m²)
5. Đường kính bể lọc D (m)
6. Diện tích lọc thực tế F₁ (m²)
7. Vận tốc lọc thực tế v (m/h)
8. Các chiều cao trong bể: h₁, h₂, h₃, h₄, h₅, h₆, h₇ (két rửa), h₈ (bảo vệ) (m)
9. Tổng chiều cao bể lọc H (m)
10. Chiều cao tổng H₁, H₂, H₃ (m)
11. Chiều cao hệ thống cấp nước h₇ (cấp), h₈ (cấp) (m)
12. Chiều cao hệ thống thu nước h₉ (m)
13. Chiều cao xi phông h₁₁, h₁₂ (m)
14. Áp lực cấp nước P_cấp (Pa)
15. Thể tích bể thu nước V_thu (m³)
16. Cường độ rửa lọc q (l/m²·s)
17. Lưu lượng nước rửa lọc Q_rửa (m³/h)
18. Thể tích nước rửa lọc V_rửa (m³)
19. Chu kỳ lọc dự kiến T_lọc (h)

### Ví dụ tính toán đầy đủ

**Đầu vào:**
- Q = 50 m³/h (từ Module 4)
- V = 8 m/h
- q = 10 l/s·m²
- t_rửa = 5 phút
- Loại bể: Tròn

**Tính toán:**

1. **Tính diện tích bể lọc:**
   - f₁ = 50.00 / 8.00 = 6.25 m²

2. **Tính diện tích ống thông lưu:**
   - d = 0.08 m
   - f₂ = π × 0.08² / 4 = 0.005 m² ≈ 0.01 m²

3. **Tính tổng diện tích ngăn bể:**
   - n = 4 cái
   - f₁' = 6.25 + 0.01 × 4 = 6.29 m² ≈ 6.27 m²

4. **Tính đường kính:**
   - D = √(4 × 6.27 / π) = 2.83 m
   - Chọn D = 3.00 m

5. **Tính diện tích lọc thực tế:**
   - F₁ = 6.25 - 0.01 = 6.24 m² ≈ 6.23 m²

6. **Tính vận tốc thực tế:**
   - v = 50.00 / 6.23 = 8.03 m/h ✓

7. **Tính các chiều cao trong bể:**
   - h₁ = 0.40 m, h₂ = 0.20 m, h₃ = 0.10 m, h₄ = 0.80 m, h₅ = 0.50 m, h₆ = 0.20 m, h₈ = 0.80 m
   - h₇ (két rửa) = (60 × 10.00 × 3.00) / (1.00 × 100) = 1.80 m ≈ 1.79 m
   - H = 0.40 + 0.20 + 0.10 + 0.80 + 0.50 + 0.20 + 1.79 + 0.80 = 4.79 m
   - Chọn H = 5.00 m
   - H₂ = 0.40 + 0.20 + 0.10 + 0.80 + 0.50 + 0.20 = 2.20 m
   - h₇ (cấp) = 2.20 - 0.20 = 2.00 m
   - h₈ (cấp) = 2.20 + 0.3 = 2.50 m
   - h₉ = 0.4 m
   - H₁ = 2.20 + 0.4 = 2.60 m
   - h₁₁ = 2.20 + 0.2 = 2.40 m
   - h₁₂ = 0.2 m
   - H₃ = 2.20 + 2.40 + 0.2 = 4.80 m

8. **Tính hệ thống cấp và thu nước:**
   - P_cấp = 1000 × 9.81 × 2.50 = 24525 Pa = 24.53 kPa
   - V_thu = 50 × 0.5 = 25 m³

9. **Tính lưu lượng rửa:**
   - q = 10 l/m²·s = 36 m³/h·m²
   - Q_rửa = 36 × 6.23 = 224.28 m³/h

10. **Tính thể tích rửa:**
   - t_rửa = 3 phút = 0.05 h
   - V_rửa = 224.28 × 0.05 = 11.21 m³

**Kết quả:** Bể lọc tròn D = 3.00 m, diện tích lọc thực tế F₁ = 6.23 m², vận tốc lọc v = 8.03 m/h, tổng chiều cao H = 5.00 m, chiều cao két rửa h₇ = 1.79 m, lưu lượng rửa 224.28 m³/h

## 6. Liên kết giữa Module 4 và Module 5

Khi xây dựng một hệ thống web cho dự án này, việc **bàn giao dữ liệu từ Module 4 sang Module 5** là rất quan trọng. Dưới đây là các thông số cần được bàn giao giữa hai module này:

### Module 4 cần bàn giao cho Module 5:

1. **Lưu lượng nước (Q):** Lưu lượng nước tính từ **Module 4** (sau bể lắng) sẽ được cung cấp cho **Module 5** để tính toán **diện tích lọc** và **tốc độ lọc**

2. **Kích thước bể lắng:** Các kích thước bể lắng từ **Module 4** sẽ được sử dụng để tham khảo khi thiết kế bể lọc

3. **Chất lượng nước sau lắng:** Độ đục, hàm lượng cặn lơ lửng ảnh hưởng đến chu kỳ lọc

### Module 5 sẽ sử dụng những thông số này để tính toán các kết quả đầu ra, bao gồm:

- **Diện tích lọc (F₁)**
- **Đường kính/kích thước bể lọc (D)**
- **Vận tốc lọc thực tế (V_thực)**
- **Tổn thất áp lực (H)**
- **Cường độ rửa lọc (q)**
- **Lưu lượng nước rửa lọc (Q_rửa)**
- **Thể tích nước rửa lọc (V_rửa)**
- **Hệ thống phân phối nước đáy**

## 7. Xây dựng giao diện web cho hệ thống tính toán tự động

Khi xây dựng một **giao diện web** cho hệ thống tính toán tự động, cần đảm bảo rằng các **dữ liệu đầu vào từ người dùng** sẽ được nhập vào và tính toán tự động theo các công thức đã mô tả. Giao diện web sẽ nhận các thông số sau từ người dùng:

1. **Lưu lượng nước (Q)** - từ Module 4
2. **Vận tốc lọc (V)** - chọn từ danh sách hoặc nhập tùy chỉnh
3. **Cường độ rửa lọc (q)** - chọn theo loại rửa
4. **Thời gian rửa lọc (t_rửa)** - nhập hoặc chọn mặc định
5. **Loại bể lọc** - Tròn hay chữ nhật
6. **Chiều dày lớp vật liệu lọc** - nhập hoặc chọn mặc định

Sau đó, hệ thống sẽ tính toán **diện tích lọc**, **đường kính bể lọc**, **tổn thất áp lực**, **cường độ rửa lọc**, và **lưu lượng nước rửa lọc**.

## Kết luận

Module 5 đóng vai trò quan trọng trong việc tính toán các thông số liên quan đến **quá trình lọc nhanh** trong các công trình xử lý nước. Module này nhận các thông số từ **Module 4** và sử dụng chúng để tính toán **diện tích lọc**, **đường kính bể lọc**, **tổn thất áp lực**, **cường độ rửa lọc**, và **lưu lượng nước rửa lọc**. 

Để đảm bảo tính chính xác, **Module 4** cần bàn giao các thông số như **lưu lượng nước**, **kích thước bể lắng**, và **chất lượng nước sau lắng** cho **Module 5**.

Bằng cách này, hệ thống web sẽ hoạt động hiệu quả, giúp các kỹ sư dễ dàng tính toán và tối ưu hóa các thông số trong công trình xử lý nước, đảm bảo chất lượng nước sau xử lý đạt tiêu chuẩn.
