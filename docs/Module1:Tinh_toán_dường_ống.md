# Báo cáo chi tiết: Module 1 - Các công thức Tính toán đường ống - XLNC

## Mục tiêu
Module 1 tập trung vào việc tính toán các thông số liên quan đến hệ thống đường ống, bao gồm lưu lượng, vận tốc dòng chảy, độ nhám của ống, hệ số Reynolds, và các yếu tố khác ảnh hưởng đến lưu lượng và áp suất trong ống. Mục tiêu là xây dựng hệ thống tính toán tự động cho các công thức đã có sẵn để giúp công ty dễ dàng thực hiện các phép tính.

## Các công thức sử dụng trong Module 1

### 1. **Lưu lượng nước (Q)**

#### 1.1. Lưu lượng nước (Q) là gì?

Lưu lượng nước (Q) là đại lượng dùng để mô tả lượng nước (hoặc bất kỳ chất lỏng nào) chảy qua một mặt cắt ngang của ống trong một khoảng thời gian nhất định. Lưu lượng thường được biểu diễn theo các đơn vị như m³/s (mét khối trên giây), m³/h (mét khối trên giờ), m³/phút (mét khối trên phút), hoặc m³/ngđ (mét khối trên ngày).

Tùy vào mục đích sử dụng và loại công trình mà chúng ta cần dùng các đơn vị khác nhau. Cụ thể, mỗi đơn vị sẽ phù hợp với một khung thời gian và phạm vi lưu lượng khác nhau.

**Ví dụ chuyển đổi đơn vị:**
- Lưu lượng nước \( Q \) = 1000 m³/ngđ (m³/ngày)
- Lưu lượng nước \( Q \) = 41.66666667 m³/h (m³/giờ)
- Lưu lượng nước \( Q \) = 0.6944444444 m³/phút (m³/phút)
- Lưu lượng nước \( Q \) = 0.01666666667 m³/s (m³/giây)

#### 1.2. Tại sao có nhiều giá trị lưu lượng (Q)?

Cùng một hệ thống có thể có nhiều cách đo và tính lưu lượng nước, tùy theo yêu cầu kỹ thuật và đơn vị sử dụng. Dưới đây là lý do tại sao có nhiều giá trị lưu lượng với đơn vị khác nhau:

##### 1.2.1. Đơn vị m³/ngđ (m³/ngày)

Đây là đơn vị thường dùng trong các tính toán cho hệ thống cấp thoát nước lớn, như trong các công trình cấp nước, xử lý nước thải, nơi cần tính toán lưu lượng lớn trong khoảng thời gian dài, ví dụ theo ngày.

Ví dụ, một nhà máy xử lý nước thải có thể xử lý hàng nghìn mét khối nước mỗi ngày, vì vậy người ta dùng đơn vị m³/ngày để đo lưu lượng trong ngày.

##### 1.2.2. Đơn vị m³/h (m³/giờ)

Đơn vị m³/giờ được sử dụng cho các ứng dụng có lưu lượng nước lớn nhưng cần tính toán ở mức thời gian ngắn hơn, như các nhà máy, hệ thống bơm, hoặc các hệ thống xử lý nước ở cấp độ công nghiệp.

Nó thường được dùng trong các công trình như hệ thống bơm cấp nước cho các khu công nghiệp, công trình dân dụng hoặc các hệ thống lớn khác, nơi lưu lượng cần được kiểm soát theo giờ.

##### 1.2.3. Đơn vị m³/phút (m³/phút)

Đơn vị m³/phút là đơn vị dùng để đo lưu lượng trong các hệ thống có yêu cầu tính toán chi tiết và nhanh chóng hơn. Thường sử dụng trong các hệ thống có lưu lượng vừa và nhỏ, hoặc trong các ứng dụng cần phải có sự thay đổi tức thời, ví dụ trong các hệ thống cấp nước vào các bể xử lý hoặc bể lọc.

Ví dụ, trong các hệ thống cấp nước trong các nhà máy xử lý nước hoặc hệ thống thủy lợi, người ta sẽ cần biết lưu lượng nước chuyển qua mỗi phút để kiểm soát và điều chỉnh hoạt động của hệ thống.

##### 1.2.4. Đơn vị m³/s (m³/giây)

Đây là đơn vị thường dùng cho các tính toán có lưu lượng rất lớn, ví dụ như trong các hệ thống thuỷ lợi, các công trình xử lý nước lớn, hoặc trong các tính toán liên quan đến lưu lượng dòng chảy của sông, suối hoặc dòng chảy tự nhiên.

Các công trình như đập thủy điện, các hệ thống cấp nước lớn cho thành phố, thường cần đến các tính toán lưu lượng nước theo giây.

#### 1.3. Sự khác biệt trong các đơn vị lưu lượng

Lý do có sự tồn tại của các đơn vị khác nhau chủ yếu nằm ở phạm vi và yêu cầu tính toán:

- **Đơn vị m³/ngđ** thích hợp cho tính toán ở mức tổng thể, đặc biệt trong các hệ thống lớn.

- **Đơn vị m³/h và m³/phút** thích hợp hơn khi cần theo dõi và điều khiển hệ thống trong thời gian ngắn (như hệ thống bơm hoặc giàn phun mưa).

- **Đơn vị m³/s** thường được dùng trong các tình huống yêu cầu tính toán chính xác và tức thời cho những dòng chảy rất lớn, hoặc khi đang tính toán hiệu suất của các hệ thống quy mô lớn.

#### 1.4. Ứng dụng thực tế

Ví dụ, trong một dự án thiết kế đường ống cấp nước cho một khu công nghiệp, bạn có thể sẽ phải tính toán lưu lượng nước hàng ngày (m³/ngđ) để biết tổng lượng nước cần cấp cho cả khu vực. Nhưng trong quá trình thiết kế ống dẫn hoặc tính toán hiệu suất của các bơm, bạn sẽ cần biết lưu lượng theo giờ (m³/h) hoặc theo phút (m³/phút) để điều chỉnh các thông số kỹ thuật như đường kính ống, công suất bơm.

#### 1.5. Tóm tắt

Việc sử dụng nhiều đơn vị lưu lượng khác nhau là để phù hợp với các tình huống và yêu cầu cụ thể của dự án. Mỗi đơn vị (m³/ngđ, m³/h, m³/phút, m³/s) phục vụ cho các mục đích và phạm vi thời gian khác nhau, từ các tính toán tổng thể đến các tính toán chi tiết, giúp dễ dàng kiểm soát và điều chỉnh các hệ thống trong các môi trường khác nhau.

### 2. **Vận tốc dòng chảy (v)**

#### 2.1. Công thức tính vận tốc dòng chảy

Công thức tính vận tốc dòng chảy:
$$
V = \frac{Q}{A}
$$

Trong đó:
- \( V \): Vận tốc dòng chảy (m/s)
- \( Q \): Lưu lượng nước (m³/s)
- \( A \): Diện tích mặt cắt ngang của ống (m²)

Để tính toán vận tốc dòng chảy, bạn cần xác định diện tích mặt cắt ngang của ống, thường tính bằng công thức diện tích hình tròn:
$$
A = \pi \cdot \left(\frac{D}{2}\right)^2 = \frac{\pi \cdot D^2}{4}
$$

Trong đó:
- \( D \): Đường kính trong của ống (m)

#### 2.2. Vận tốc tiêu chuẩn theo TCVN 33-2006

Theo tiêu chuẩn TCVN 33-2006, vận tốc dòng chảy được khuyến nghị như sau:

- **Vận tốc ống hút (Vh)**: 1.2 m/s
  - Đây là vận tốc tối ưu cho ống hút của bơm, giúp tránh hiện tượng xâm thực và đảm bảo hiệu suất bơm.

- **Vận tốc ống đẩy (Vd)**: 2.4 m/s
  - Vận tốc này phù hợp cho ống đẩy, cho phép vận chuyển nước hiệu quả mà không gây tổn thất áp lực quá lớn.

Việc chọn vận tốc phù hợp giúp:
- Giảm tổn thất áp lực trong hệ thống
- Tối ưu hóa kích thước đường ống
- Đảm bảo tuổi thọ và hiệu suất của thiết bị

### 3. **Tính toán đường kính ống (D)**

#### 3.1. Công thức tính đường kính ống

Đường kính ống được tính dựa trên lưu lượng và vận tốc dòng chảy:

$$
D = \sqrt{\frac{4Q}{\pi V}}
$$

Trong đó:
- \( D \): Đường kính ống (m)
- \( Q \): Lưu lượng nước (m³/s)
- \( V \): Vận tốc dòng chảy (m/s)

#### 3.2. Tính toán đường kính ống hút và ống đẩy

**3.2.1. Đường kính ống hút (Dh)**

$$
D_h = \sqrt{\frac{4Q}{\pi V_h}}
$$

Trong đó:
- \( V_h \): Vận tốc ống hút = 1.2 m/s (theo TCVN 33-2006)
- Sau khi tính toán, chọn đường kính tiêu chuẩn gần nhất lớn hơn giá trị tính được

**3.2.2. Đường kính ống đẩy (Dd)**

$$
D_d = \sqrt{\frac{4Q}{\pi V_d}}
$$

Trong đó:
- \( V_d \): Vận tốc ống đẩy = 2.4 m/s (theo TCVN 33-2006)
- Sau khi tính toán, chọn đường kính tiêu chuẩn gần nhất lớn hơn giá trị tính được

**Ví dụ:**
- Đường kính tính toán ống hút: \( D_h = 133.0144807 \) mm → Chọn \( D_h = 140 \) mm
- Đường kính tính toán ống đẩy: \( D_d = 94.05544133 \) mm → Chọn \( D_d = 100 \) mm

### 4. **Độ nhám của nước (ε)**

#### 4.1. Khái niệm

Độ nhám (ε) là giá trị đặc trưng cho độ nhám bề mặt bên trong của ống, phụ thuộc vào vật liệu chế tạo ống. Giá trị này được tra từ bảng tra cứu dựa trên loại vật liệu ống.

**Ví dụ:** ε = 0.08 (tra bảng)

#### 4.2. Giá trị độ nhám theo vật liệu

Một số giá trị độ nhám phổ biến:
- Ống thép mới: ε = 0.05 - 0.1 mm
- Ống thép cũ: ε = 0.1 - 0.5 mm
- Ống gang: ε = 0.25 - 1.0 mm
- Ống bê tông: ε = 0.3 - 3.0 mm
- Ống nhựa (PVC, HDPE): ε = 0.0015 - 0.007 mm

**Lưu ý:** Giá trị cụ thể cần tra bảng theo tiêu chuẩn và điều kiện thực tế của ống.

### 5. **Nhiệt độ nước (t)**

#### 5.1. Khái niệm

Nhiệt độ nước (t) là thông số quan trọng ảnh hưởng đến các tính chất vật lý của nước, đặc biệt là độ nhớt động học. Nhiệt độ càng cao, độ nhớt càng giảm, làm thay đổi tính chất dòng chảy trong ống.

#### 5.2. Giá trị tham khảo

- Nhiệt độ nước thường được chọn theo điều kiện thực tế của hệ thống
- Nhiệt độ tiêu chuẩn: t = 20°C (thường dùng trong tính toán)
- Nhiệt độ ảnh hưởng trực tiếp đến độ nhớt (Vn) của nước

### 6. **Độ nhớt (Vn)**

#### 6.1. Khái niệm

Độ nhớt (Vn) hay độ nhớt động học là đại lượng đặc trưng cho tính chất nhớt của chất lỏng, phụ thuộc vào nhiệt độ. Độ nhớt được tra từ bảng tra cứu dựa trên nhiệt độ của nước.

**Ví dụ:** Vn = 0.00000101 m²/s (tra bảng)

#### 6.2. Công thức và đơn vị

$$
Vn = \frac{\mu}{\rho}
$$

Trong đó:
- \( Vn \): Độ nhớt động học (m²/s)
- \( \mu \): Độ nhớt tuyệt đối (Pa·s)
- \( \rho \): Mật độ chất lỏng (kg/m³)

#### 6.3. Giá trị độ nhớt của nước

Giá trị độ nhớt của nước phụ thuộc vào nhiệt độ, được tra từ bảng tra cứu:

- Ở 20°C: Vn = 0.00000101 m²/s
- Ở 10°C: Vn = 0.00000131 m²/s
- Ở 30°C: Vn = 0.00000080 m²/s

**Lưu ý:** Giá trị cụ thể cần tra bảng theo nhiệt độ thực tế của nước trong hệ thống.

### 7. **Độ nhám tương đối (α)**

#### 7.1. Khái niệm

Độ nhám tương đối (α) là tỷ số giữa độ nhám tuyệt đối và đường kính ống, đây là thông số quan trọng để xác định hệ số ma sát trong ống.

#### 7.2. Công thức tính

$$
\alpha = \frac{\epsilon}{D}
$$

Trong đó:
- \( \alpha \): Độ nhám tương đối (không thứ nguyên)
- \( \epsilon \): Độ nhám tuyệt đối (m)
- \( D \): Đường kính trong của ống (m)

**Ví dụ:**
- Với \( \epsilon = 0.08 \) mm = 0.00008 m và \( D = 100 \) mm = 0.1 m
- \( \alpha = \frac{0.00008}{0.1} = 0.0008 \)

### 8. **Hệ số Reynolds (Re)**

#### 8.1. Khái niệm

Hệ số Reynolds là đại lượng không thứ nguyên dùng để xác định tính chất dòng chảy trong ống (dòng chảy laminar, turbulent hay chuyển tiếp).

#### 8.2. Công thức tính

Công thức tính hệ số Reynolds sử dụng độ nhớt động học:

$$
Re = \frac{V \cdot D}{Vn}
$$

Trong đó:
- \( Re \): Hệ số Reynolds (không thứ nguyên)
- \( V \): Vận tốc dòng chảy (m/s)
- \( D \): Đường kính ống (m)
- \( Vn \): Độ nhớt động học (m²/s)

**Ví dụ:**
- Với V = 2.4 m/s, D = 0.1 m, Vn = 0.00000101 m²/s
- Re = (2.4 × 0.1) / 0.00000101 = 237623.8

**Công thức thay thế** (sử dụng mật độ và độ nhớt tuyệt đối):

$$
  Re = \frac{v \cdot D \cdot \rho}{\mu}
$$

Trong đó:
- \( \rho \): Mật độ chất lỏng (kg/m³)
- \( \mu \): Độ nhớt tuyệt đối (Pa·s)

#### 8.3. Phân loại dòng chảy
  
  Hệ số Reynolds là chỉ số quan trọng để xác định tính chất dòng chảy:

- \( Re < 2000 \): Dòng chảy laminar (chảy tầng)
  - Dòng chảy ổn định, các lớp chất lỏng trượt song song với nhau
  - Tổn thất áp lực nhỏ

- \( 2000 < Re < 4000 \): Dòng chảy chuyển tiếp
  - Dòng chảy không ổn định, có thể chuyển từ laminar sang turbulent

- \( Re > 4000 \): Dòng chảy turbulent (chảy rối)
  - Dòng chảy hỗn loạn, có xoáy và rối
  - Tổn thất áp lực lớn hơn so với dòng chảy laminar

### 9. **Hệ số tổn thất (λ)**

#### 9.1. Khái niệm

Hệ số tổn thất (λ) hay hệ số ma sát là hệ số đặc trưng cho tổn thất ma sát trong ống, phụ thuộc vào hệ số Reynolds và độ nhám tương đối của ống.

#### 9.2. Xác định hệ số tổn thất

Hệ số tổn thất được xác định bằng cách tra bảng hoặc sử dụng công thức dựa trên:
- Hệ số Reynolds (Re)
- Độ nhám tương đối (α)

#### 9.3. Phương pháp tra bảng

Hệ số tổn thất được tra từ bảng Moody hoặc các bảng tra cứu tương tự dựa trên:
- Giá trị Re
- Giá trị α

**Ví dụ:**
- Với Re = 237623.8 và α = 0.0008
- Tra bảng theo Re và α được: λ = 0.015

#### 9.4. Công thức tính gần đúng

Đối với dòng chảy turbulent hoàn toàn, có thể sử dụng công thức Colebrook-White hoặc công thức Swamee-Jain để tính hệ số tổn thất.

### 10. **Tổn thất áp lực do ma sát (Htt)**

#### 10.1. Khái niệm

Tổn thất áp lực do ma sát (Htt) là tổn thất năng lượng do ma sát giữa chất lỏng và thành ống khi chất lỏng chảy qua ống.

#### 10.2. Công thức Darcy-Weisbach

$$
H_{tt} = \lambda \cdot \frac{L \cdot V^2}{D \cdot 2G}
$$

Trong đó:
- \( H_{tt} \): Tổn thất áp lực (m)
- \( \lambda \): Hệ số tổn thất (không thứ nguyên)
- \( L \): Chiều dài đoạn ống (m)
- \( V \): Vận tốc dòng chảy (m/s)
- \( D \): Đường kính trong của ống (m)
- \( G \): Gia tốc trọng trường = 9.81 m/s²

**Trong đó:**
- **L là chiều dài đoạn ống:** L = 25 m
- **G là gia tốc trọng trường:** G = 9.81 m/s²

**Ví dụ:**
- Với λ = 0.015, L = 25 m, V = 2.4 m/s, D = 0.1 m, G = 9.81 m/s²
- Htt = 0.015 × (25 × 2.4²) / (0.1 × 2 × 9.81) = 1.10092 m

### 11. **Tổn thất cục bộ (Hcb)**

#### 11.1. Khái niệm

Tổn thất cục bộ (Hcb) là tổn thất năng lượng xảy ra tại các vị trí đặc biệt trong hệ thống như van, cút, co, tê, thu hẹp, mở rộng đột ngột, v.v.

#### 11.2. Công thức tính

$$
H_{cb} = \beta \cdot \frac{V^2}{2G}
$$

Trong đó:
- \( H_{cb} \): Tổn thất cục bộ (m)
- \( \beta \): Hệ số tổn thất cục bộ (không thứ nguyên)
- \( V \): Vận tốc dòng chảy (m/s)
- \( G \): Gia tốc trọng trường = 9.81 m/s²

**Trong đó:**
- **β là hệ số tổn thất cục bộ:** β = 5 (tra bảng theo loại phụ kiện)

#### 11.3. Hệ số tổn thất cục bộ (β)

Hệ số β phụ thuộc vào loại phụ kiện và được tra từ bảng tra cứu:

- Van cổng mở hoàn toàn: β = 0.1 - 0.2
- Van cầu: β = 3 - 10
- Cút 90°: β = 0.9 - 1.2
- Cút 45°: β = 0.4 - 0.5
- Co thu: β = 0.1 - 0.5
- Co mở: β = 0.3 - 1.0
- Tê thẳng: β = 0.1 - 0.3
- Tê nhánh: β = 1.0 - 2.0

**Lưu ý:** Giá trị β cụ thể cần tra bảng theo loại phụ kiện và điều kiện thực tế.

**Ví dụ:**
- Với β = 5, V = 2.4 m/s, G = 9.81 m/s²
- Hcb = 5 × (2.4² / (2 × 9.81)) = 1.467889908 m

### 12. **Tổng tổn thất áp lực (H1)**

#### 12.1. Khái niệm

Tổng tổn thất áp lực (H1) là tổng của tổn thất do ma sát và tổn thất cục bộ trong hệ thống ống.

#### 12.2. Công thức tính

$$
H_1 = H_{tt} + H_{cb}
$$

Trong đó:
- \( H_1 \): Tổng tổn thất áp lực (m)
- \( H_{tt} \): Tổn thất áp lực do ma sát (m)
- \( H_{cb} \): Tổn thất cục bộ (m)

**Ví dụ:**
- Với Htt = 1.10092 m và Hcb = 1.467889908 m
- H1 = 1.10092 + 1.467889908 = 2.56881 m

### 13. **Chênh chiều cao bơm (Hc)**

#### 13.1. Khái niệm

Chênh chiều cao bơm (Hc) hay cột áp tĩnh là chênh lệch chiều cao giữa mực nước đầu vào và đầu ra của hệ thống bơm, không bao gồm tổn thất áp lực.

#### 13.2. Xác định chênh chiều cao

Chênh chiều cao bơm được xác định dựa trên:
- Chiều cao mực nước đầu vào (mực nước hút)
- Chiều cao mực nước đầu ra (mực nước đẩy)

$$
H_c = H_{ra} - H_{vao}
$$

Trong đó:
- \( H_c \): Chênh chiều cao bơm (m)
- \( H_{ra} \): Chiều cao mực nước đầu ra (m)
- \( H_{vao} \): Chiều cao mực nước đầu vào (m)

**Lưu ý:** Giá trị này phụ thuộc vào thiết kế cụ thể của hệ thống và cần được xác định theo điều kiện thực tế.

### 14. **Cột áp yêu cầu (Hyc)**

#### 14.1. Khái niệm

Cột áp yêu cầu (Hyc) là tổng cột áp mà bơm cần tạo ra để đảm bảo nước có thể chảy từ điểm đầu vào đến điểm đầu ra của hệ thống, bao gồm cả tổn thất và chênh chiều cao.

#### 14.2. Công thức tính

$$
H_{yc} = H_1 + H_c
$$

Trong đó:
- \( H_{yc} \): Cột áp yêu cầu (m)
- \( H_1 \): Tổng tổn thất áp lực (m)
- \( H_c \): Chênh chiều cao bơm (m)

#### 14.3. Ý nghĩa

Cột áp yêu cầu là thông số quan trọng để:
- Lựa chọn bơm phù hợp với hệ thống
- Đảm bảo bơm có đủ công suất để vận chuyển nước
- Thiết kế hệ thống ống tối ưu

**Ví dụ:**
- Với \( H_1 = 2.56881 \) m và \( H_c = 5 \) m (ví dụ)
- \( H_{yc} = 2.56881 + 5 = 7.56881 \) m

Bơm cần được chọn sao cho cột áp của bơm lớn hơn hoặc bằng cột áp yêu cầu để đảm bảo hệ thống hoạt động hiệu quả.
  
---

## Hướng dẫn triển khai hệ thống tính toán tự động cho Module 1

### 1. **Tiếp nhận dữ liệu đầu vào**

Dữ liệu đầu vào bao gồm các thông số sau:

#### 1.1. Thông số cơ bản
- Lưu lượng nước \( Q \) (m³/s hoặc các đơn vị khác)
- Nhiệt độ nước \( t \) (°C)
- Chiều dài đoạn ống \( L \) (m)
- Chênh chiều cao bơm \( H_c \) (m)

#### 1.2. Thông số vật liệu ống
- Độ nhám tuyệt đối \( \epsilon \) (m) - tra bảng theo vật liệu ống
- Đường kính ống \( D \) (m) - có thể tính từ lưu lượng và vận tốc

#### 1.3. Thông số chất lỏng
- Độ nhớt \( Vn \) (m²/s) - tra bảng theo nhiệt độ
- Mật độ chất lỏng \( \rho \) (kg/m³) - thường là 1000 kg/m³ cho nước

#### 1.4. Thông số hệ thống
- Hệ số tổn thất cục bộ \( \beta \) - tra bảng theo loại phụ kiện
- Vận tốc ống hút \( V_h \) (m/s) - thường chọn 1.2 m/s theo TCVN 33-2006
- Vận tốc ống đẩy \( V_d \) (m/s) - thường chọn 2.4 m/s theo TCVN 33-2006

### 2. **Tính toán các giá trị cần thiết**

#### 2.1. Tính toán đường kính ống
- **Đường kính ống hút (Dh):** \( D_h = \sqrt{\frac{4Q}{\pi V_h}} \)
- **Đường kính ống đẩy (Dd):** \( D_d = \sqrt{\frac{4Q}{\pi V_d}} \)
- Chọn đường kính tiêu chuẩn gần nhất lớn hơn giá trị tính được

#### 2.2. Tính toán vận tốc dòng chảy
- **Vận tốc dòng chảy (V):** \( V = \frac{Q}{A} = \frac{4Q}{\pi D^2} \)

#### 2.3. Tính toán độ nhám tương đối
- **Độ nhám tương đối (α):** \( \alpha = \frac{\epsilon}{D} \)

#### 2.4. Tính toán hệ số Reynolds
- **Hệ số Reynolds (Re):** \( Re = \frac{V \cdot D}{Vn} \)

#### 2.5. Xác định hệ số tổn thất
- **Hệ số tổn thất (λ):** Tra bảng theo Re và α

#### 2.6. Tính toán tổn thất áp lực
- **Tổn thất do ma sát (Htt):** \( H_{tt} = \lambda \cdot \frac{L \cdot V^2}{D \cdot 2G} \)
- **Tổn thất cục bộ (Hcb):** \( H_{cb} = \beta \cdot \frac{V^2}{2G} \)
- **Tổng tổn thất (H1):** \( H_1 = H_{tt} + H_{cb} \)

#### 2.7. Tính toán cột áp yêu cầu
- **Cột áp yêu cầu (Hyc):** \( H_{yc} = H_1 + H_c \)
  
### 3. **Kết quả đầu ra**

Sau khi tính toán các thông số, hệ thống sẽ đưa ra kết quả về:

#### 3.1. Thông số ống
- Đường kính ống hút và ống đẩy (đã chọn tiêu chuẩn)
- Vận tốc dòng chảy trong ống

#### 3.2. Thông số dòng chảy
- Hệ số Reynolds và loại dòng chảy (laminar/turbulent/chuyển tiếp)
- Độ nhám tương đối
- Hệ số ma sát

#### 3.3. Thông số tổn thất
- Tổn thất áp lực do ma sát
- Tổn thất cục bộ
- Tổng tổn thất áp lực

#### 3.4. Thông số bơm
- Cột áp yêu cầu của bơm
- Khuyến nghị lựa chọn bơm phù hợp

Các kết quả này giúp cho việc thiết kế hệ thống ống được tối ưu hóa và lựa chọn thiết bị phù hợp.

---

## Quy trình tính toán tự động từng bước

Phần này mô tả chi tiết quy trình tính toán từng bước để AI hoặc hệ thống tự động có thể thực hiện tính toán chính xác.

### Bước 1: Chuẩn bị dữ liệu đầu vào

**1.1. Chuyển đổi đơn vị lưu lượng về m³/s:**
- Nếu Q có đơn vị m³/ngđ: Q (m³/s) = Q (m³/ngđ) / 86400
- Nếu Q có đơn vị m³/h: Q (m³/s) = Q (m³/h) / 3600
- Nếu Q có đơn vị m³/phút: Q (m³/s) = Q (m³/phút) / 60
- Nếu Q có đơn vị m³/s: giữ nguyên

**1.2. Tra bảng các giá trị:**
- Tra độ nhớt Vn (m²/s) theo nhiệt độ t (°C)
  - t = 20°C → Vn = 0.00000101 m²/s
  - t = 10°C → Vn = 0.00000131 m²/s
  - t = 30°C → Vn = 0.00000080 m²/s
- Tra độ nhám ε (m) theo vật liệu ống
  - Ống thép mới: ε = 0.00005 - 0.0001 m
  - Ống thép cũ: ε = 0.0001 - 0.0005 m
  - Ống gang: ε = 0.00025 - 0.001 m
  - Ống bê tông: ε = 0.0003 - 0.003 m
  - Ống nhựa: ε = 0.0000015 - 0.000007 m

**1.3. Chọn vận tốc tiêu chuẩn:**
- Vận tốc ống hút: Vh = 1.2 m/s (theo TCVN 33-2006)
- Vận tốc ống đẩy: Vd = 2.4 m/s (theo TCVN 33-2006)

### Bước 2: Tính toán đường kính ống

**2.1. Tính đường kính ống hút (Dh):**

$$
D_h = \sqrt{\frac{4Q}{\pi V_h}}
$$

- Đơn vị: D_h (m), Q (m³/s), V_h (m/s)
- Chuyển đổi: D_h (mm) = D_h (m) × 1000
- Chọn đường kính tiêu chuẩn: Chọn giá trị tiêu chuẩn gần nhất lớn hơn D_h tính được

**2.2. Tính đường kính ống đẩy (Dd):**

$$
D_d = \sqrt{\frac{4Q}{\pi V_d}}
$$

- Đơn vị: D_d (m), Q (m³/s), V_d (m/s)
- Chuyển đổi: D_d (mm) = D_d (m) × 1000
- Chọn đường kính tiêu chuẩn: Chọn giá trị tiêu chuẩn gần nhất lớn hơn D_d tính được

**2.3. Tính lại vận tốc thực tế sau khi chọn đường kính:**

$$
V_{thực} = \frac{4Q}{\pi D_{chọn}^2}
$$

- D_chọn là đường kính đã chọn (m)

### Bước 3: Tính toán độ nhám tương đối

$$
\alpha = \frac{\epsilon}{D}
$$

- Đơn vị: α (không thứ nguyên), ε (m), D (m)
- D là đường kính đã chọn (m)

**Ví dụ:**
- ε = 0.08 mm = 0.00008 m
- D = 100 mm = 0.1 m
- α = 0.00008 / 0.1 = 0.0008

### Bước 4: Tính toán hệ số Reynolds

$$
Re = \frac{V \cdot D}{Vn}
$$

- Đơn vị: Re (không thứ nguyên), V (m/s), D (m), Vn (m²/s)
- V là vận tốc thực tế sau khi chọn đường kính (m/s)
- D là đường kính đã chọn (m)

**Ví dụ:**
- V = 2.4 m/s, D = 0.1 m, Vn = 0.00000101 m²/s
- Re = (2.4 × 0.1) / 0.00000101 = 237623.8

### Bước 5: Xác định hệ số tổn thất (λ)

**5.1. Phương pháp tra bảng:**
- Tra bảng Moody hoặc bảng tra cứu dựa trên:
  - Giá trị Re
  - Giá trị α
- Kết quả: λ (không thứ nguyên)

**5.2. Phương pháp tính gần đúng (nếu không có bảng):**
- Nếu Re < 2000 (dòng chảy laminar): λ = 64 / Re
- Nếu Re > 4000 (dòng chảy turbulent): Sử dụng công thức Colebrook-White hoặc Swamee-Jain

**Ví dụ:**
- Re = 237623.8, α = 0.0008
- Tra bảng được: λ = 0.015

### Bước 6: Tính toán tổn thất áp lực do ma sát

$$
H_{tt} = \lambda \cdot \frac{L \cdot V^2}{D \cdot 2G}
$$

- Đơn vị: H_tt (m), λ (không thứ nguyên), L (m), V (m/s), D (m), G = 9.81 m/s²

**Các thông số:**
- L: Chiều dài đoạn ống (m) - nhập từ người dùng
- G: Gia tốc trọng trường = 9.81 m/s² (hằng số)

**Ví dụ:**
- λ = 0.015, L = 25 m, V = 2.4 m/s, D = 0.1 m, G = 9.81 m/s²
- H_tt = 0.015 × (25 × 2.4²) / (0.1 × 2 × 9.81) = 1.10092 m

### Bước 7: Tính toán tổn thất cục bộ

$$
H_{cb} = \beta \cdot \frac{V^2}{2G}
$$

- Đơn vị: H_cb (m), β (không thứ nguyên), V (m/s), G = 9.81 m/s²

**Hệ số tổn thất cục bộ (β):**
- Tra bảng theo loại phụ kiện:
  - Van cổng mở hoàn toàn: β = 0.1 - 0.2
  - Van cầu: β = 3 - 10
  - Cút 90°: β = 0.9 - 1.2
  - Cút 45°: β = 0.4 - 0.5
  - Co thu: β = 0.1 - 0.5
  - Co mở: β = 0.3 - 1.0
  - Tê thẳng: β = 0.1 - 0.3
  - Tê nhánh: β = 1.0 - 2.0
- Nếu có nhiều phụ kiện: β_tổng = β1 + β2 + ... + βn

**Ví dụ:**
- β = 5, V = 2.4 m/s, G = 9.81 m/s²
- H_cb = 5 × (2.4² / (2 × 9.81)) = 1.467889908 m

### Bước 8: Tính tổng tổn thất áp lực

$$
H_1 = H_{tt} + H_{cb}
$$

- Đơn vị: H_1 (m), H_tt (m), H_cb (m)

**Ví dụ:**
- H_tt = 1.10092 m, H_cb = 1.467889908 m
- H_1 = 1.10092 + 1.467889908 = 2.56881 m

### Bước 9: Xác định chênh chiều cao bơm

$$
H_c = H_{ra} - H_{vao}
$$

- Đơn vị: H_c (m), H_ra (m), H_vao (m)
- H_ra: Chiều cao mực nước đầu ra (m) - nhập từ người dùng
- H_vao: Chiều cao mực nước đầu vào (m) - nhập từ người dùng

**Lưu ý:** Nếu H_c < 0, nghĩa là đầu ra thấp hơn đầu vào, hệ thống có thể tự chảy.

### Bước 10: Tính cột áp yêu cầu

$$
H_{yc} = H_1 + H_c
$$

- Đơn vị: H_yc (m), H_1 (m), H_c (m)

**Ví dụ:**
- H_1 = 2.56881 m, H_c = 5 m
- H_yc = 2.56881 + 5 = 7.56881 m

### Bước 11: Kiểm tra và đánh giá kết quả

**11.1. Kiểm tra tính hợp lệ:**
- Đường kính đã chọn phải lớn hơn đường kính tính toán
- Vận tốc thực tế phải nằm trong khoảng cho phép (0.5 - 3.0 m/s)
- Hệ số Reynolds phải > 4000 để đảm bảo dòng chảy turbulent
- Cột áp yêu cầu phải > 0

**11.2. Đánh giá kết quả:**
- Nếu H_yc quá lớn (> 50 m): Cần xem xét lại thiết kế, có thể giảm chiều dài ống hoặc tăng đường kính
- Nếu vận tốc quá cao (> 3 m/s): Cần tăng đường kính ống
- Nếu vận tốc quá thấp (< 0.5 m/s): Có thể giảm đường kính để tiết kiệm chi phí

### Bước 12: Xuất kết quả

**Các kết quả cần xuất:**
1. Đường kính ống hút tính toán và đã chọn (mm)
2. Đường kính ống đẩy tính toán và đã chọn (mm)
3. Vận tốc thực tế trong ống hút và ống đẩy (m/s)
4. Hệ số Reynolds
5. Hệ số tổn thất (λ)
6. Tổn thất áp lực do ma sát (m)
7. Tổn thất cục bộ (m)
8. Tổng tổn thất áp lực (m)
9. Chênh chiều cao bơm (m)
10. Cột áp yêu cầu (m)

### Ví dụ tính toán đầy đủ

**Đầu vào:**
- Q = 0.01666667 m³/s (1000 m³/ngđ)
- t = 20°C
- L = 25 m
- H_ra = 5 m
- H_vao = 0 m
- Vật liệu ống: Thép mới (ε = 0.00008 m)
- Phụ kiện: β = 5

**Tính toán:**

1. **Tra bảng:**
   - Vn = 0.00000101 m²/s (t = 20°C)
   - ε = 0.00008 m (thép mới)

2. **Tính đường kính:**
   - D_h = √(4 × 0.01666667 / (π × 1.2)) = 0.133 m = 133 mm → Chọn 140 mm
   - D_d = √(4 × 0.01666667 / (π × 2.4)) = 0.094 m = 94 mm → Chọn 100 mm

3. **Tính vận tốc thực tế:**
   - V_h = 4 × 0.01666667 / (π × 0.14²) = 1.083 m/s
   - V_d = 4 × 0.01666667 / (π × 0.1²) = 2.122 m/s

4. **Tính độ nhám tương đối:**
   - α = 0.00008 / 0.1 = 0.0008

5. **Tính hệ số Reynolds:**
   - Re = (2.122 × 0.1) / 0.00000101 = 210099

6. **Tra hệ số tổn thất:**
   - λ = 0.015 (tra bảng với Re = 210099, α = 0.0008)

7. **Tính tổn thất ma sát:**
   - H_tt = 0.015 × (25 × 2.122²) / (0.1 × 2 × 9.81) = 0.860 m

8. **Tính tổn thất cục bộ:**
   - H_cb = 5 × (2.122² / (2 × 9.81)) = 1.147 m

9. **Tính tổng tổn thất:**
   - H_1 = 0.860 + 1.147 = 2.007 m

10. **Tính chênh chiều cao:**
    - H_c = 5 - 0 = 5 m

11. **Tính cột áp yêu cầu:**
    - H_yc = 2.007 + 5 = 7.007 m

**Kết quả:** Bơm cần có cột áp ≥ 7.007 m

---

## Các bước triển khai hệ thống tính toán tự động:

1. **Xây dựng giao diện người dùng:** 
   - Thiết kế một giao diện đơn giản nơi người dùng có thể nhập các thông số như:
     - Lưu lượng nước (Q)
     - Nhiệt độ nước (t)
     - Chiều dài ống (L)
     - Chênh chiều cao bơm (Hc)
     - Vật liệu ống (để tra độ nhám)
     - Loại phụ kiện (để tra hệ số tổn thất cục bộ)
     - Hoặc nhập trực tiếp các giá trị độ nhám, độ nhớt động học

2. **Xử lý dữ liệu nhập vào:** 
   - Kiểm tra tính hợp lệ của dữ liệu (ví dụ, đường kính không thể bằng 0, lưu lượng phải là số dương).

3. **Tính toán tự động:** 
   - Sử dụng các công thức trên để tính toán các giá trị cần thiết khi người dùng nhập dữ liệu.

4. **Hiển thị kết quả:** 
   - Kết quả sẽ được hiển thị ngay lập tức trên giao diện web hoặc xuất ra file CSV để người dùng tải về.

5. **Kiểm thử và tối ưu:** 
   - Kiểm tra các trường hợp thử nghiệm với dữ liệu thực tế để đảm bảo tính chính xác của hệ thống.

---

## Kết quả tính toán

Phần này trình bày các kết quả tính toán cụ thể cho các hệ thống khác nhau trong dự án, áp dụng các công thức đã trình bày ở trên.

### I. Giàn mưa (Rain Shower/Sprinkler System)

Giàn mưa là hệ thống phun nước dùng để xử lý nước hoặc làm mát, yêu cầu tính toán đường kính ống phù hợp với lưu lượng.

**Thông số đầu vào:**
- Lưu lượng: Q = 0.0166666 m³/s

**Kết quả tính toán:**
1. Đường kính tính toán: D = 94.05 mm
2. Đường kính chọn: D = 100 mm (chọn đường kính tiêu chuẩn gần nhất lớn hơn)

**Giải thích:**
- Đường kính được tính dựa trên công thức \( D = \sqrt{\frac{4Q}{\pi V}} \) với vận tốc phù hợp cho hệ thống giàn mưa
- Chọn đường kính 100 mm để đảm bảo vận tốc dòng chảy phù hợp và giảm tổn thất áp lực

### II. Trạm bơm cấp 1 (Pump Station Level 1)

Trạm bơm cấp 1 là hệ thống bơm chính trong dự án, cần tính toán chi tiết cho cả ống hút và ống đẩy.

**Thông số đầu vào:**
- Lưu lượng: Q = 0.025 m³/s

#### II.1. Ống hút (Suction Pipe)

**Kết quả tính toán:**
1. Đường kính ống hút: Dh = 170 mm
2. Chiều dài ống hút: L = 8 m
3. Tổng tổn thất ống hút: H1 = 0.42 m
4. Chênh cao hút yêu cầu: Hc = 2 m
5. Cột áp hút yêu cầu: Hyc = 2.42 m

**Giải thích:**
- Đường kính ống hút được tính với vận tốc Vh = 1.2 m/s theo TCVN 33-2006
- Tổng tổn thất bao gồm tổn thất do ma sát và tổn thất cục bộ
- Cột áp hút yêu cầu = Tổng tổn thất + Chênh cao hút

#### II.2. Ống đẩy (Discharge Pipe)

**Kết quả tính toán:**
1. Đường kính ống đẩy: Dd = 120 mm
2. Chiều dài ống đẩy: L = 25 m
3. Tổng tổn thất ống đẩy: H1 = 2.4 m
4. Chênh cao đẩy yêu cầu: Hc = 5 m
5. Cột áp đẩy yêu cầu: Hyc = 7.4 m

**Giải thích:**
- Đường kính ống đẩy được tính với vận tốc Vd = 2.4 m/s theo TCVN 33-2006
- Chiều dài ống đẩy dài hơn ống hút nên tổn thất áp lực lớn hơn
- Cột áp đẩy yêu cầu cao hơn do cần đẩy nước lên độ cao lớn hơn

**Tổng kết trạm bơm cấp 1:**
- Cột áp tổng yêu cầu của bơm = Cột áp hút + Cột áp đẩy = 2.42 + 7.4 = 9.82 m
- Bơm cần được chọn với cột áp lớn hơn hoặc bằng 9.82 m

### III. Bơm lọc tinh (Fine Filter Pump)

Bơm lọc tinh là hệ thống bơm dùng để vận chuyển nước qua bộ lọc tinh, yêu cầu tính toán đường kính ống phù hợp.

**Thông số đầu vào:**
- Lưu lượng: Q = 0.0166666 m³/s

**Kết quả tính toán:**
1. Đường kính ống hút: Dh = 140 mm
2. Đường kính ống đẩy: Dd = 100 mm

**Giải thích:**
- Đường kính ống hút và ống đẩy được tính dựa trên lưu lượng và vận tốc tiêu chuẩn
- Ống hút có đường kính lớn hơn để giảm tổn thất và đảm bảo hiệu suất bơm
- Ống đẩy có đường kính nhỏ hơn phù hợp với vận tốc cao hơn

### IV. Bơm lọc NANO (NANO Filter Pump)

Bơm lọc NANO là hệ thống bơm dùng để vận chuyển nước qua bộ lọc NANO, có yêu cầu tương tự bơm lọc tinh.

**Thông số đầu vào:**
- Lưu lượng: Q = 0.0166666 m³/s

**Kết quả tính toán:**
1. Đường kính ống hút: Dh = 140 mm
2. Đường kính ống đẩy: Dd = 100 mm

**Giải thích:**
- Bơm lọc NANO có cùng lưu lượng với bơm lọc tinh nên đường kính ống tương tự
- Thiết kế đồng nhất giúp dễ dàng bảo trì và thay thế thiết bị

### Tổng kết kết quả tính toán

Các kết quả tính toán trên cho thấy:

1. **Đường kính ống:**
   - Được tính dựa trên lưu lượng và vận tốc tiêu chuẩn
   - Luôn chọn đường kính tiêu chuẩn lớn hơn giá trị tính toán
   - Ống hút thường có đường kính lớn hơn ống đẩy để giảm tổn thất

2. **Tổn thất áp lực:**
   - Phụ thuộc vào chiều dài ống, đường kính, vận tốc và hệ số ma sát
   - Tổn thất tăng khi chiều dài ống tăng hoặc đường kính giảm

3. **Cột áp yêu cầu:**
   - Là tổng của tổn thất áp lực và chênh chiều cao
   - Là thông số quan trọng để lựa chọn bơm phù hợp

4. **Ứng dụng thực tế:**
   - Các kết quả này được sử dụng để thiết kế hệ thống ống dẫn
   - Giúp lựa chọn bơm và thiết bị phù hợp với yêu cầu kỹ thuật
   - Đảm bảo hệ thống hoạt động hiệu quả và tiết kiệm năng lượng

---

## Kết luận

Module 1 là bước đầu tiên trong quá trình xây dựng hệ thống tính toán tự động cho công ty. Module này bao gồm đầy đủ các công thức tính toán về:

1. **Lưu lượng nước (Q)** - với các đơn vị khác nhau phù hợp với từng loại công trình
2. **Vận tốc dòng chảy (v)** - theo tiêu chuẩn TCVN 33-2006 cho ống hút và ống đẩy
3. **Tính toán đường kính ống** - cho cả ống hút và ống đẩy
4. **Độ nhám tuyệt đối và tương đối** - ảnh hưởng đến hệ số ma sát
5. **Nhiệt độ nước và độ nhớt động học** - các thông số vật lý quan trọng
6. **Hệ số Reynolds** - xác định tính chất dòng chảy
7. **Hệ số ma sát** - tra bảng dựa trên Re và độ nhám
8. **Tổn thất áp lực** - bao gồm tổn thất do ma sát và tổn thất cục bộ
9. **Cột áp yêu cầu** - thông số quan trọng để lựa chọn bơm

Các công thức và phương pháp tính toán này sẽ giúp công ty:
- Tính toán và tối ưu hóa thiết kế hệ thống ống dẫn trong các dự án môi trường
- Lựa chọn thiết bị (bơm, ống, phụ kiện) phù hợp với yêu cầu kỹ thuật
- Đảm bảo hiệu quả vận hành và tiết kiệm năng lượng
- Giảm thiểu sai sót trong tính toán thủ công
- Tiết kiệm thời gian cho nhân viên kỹ thuật

Hệ thống tự động hóa này sẽ là công cụ hỗ trợ đắc lực cho các kỹ sư trong việc thiết kế và vận hành hệ thống cấp thoát nước.

