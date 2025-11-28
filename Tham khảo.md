🧭 1. Mục tiêu

Thiết lập chuẩn coding thống nhất giữa developer và AI assistant trong môi trường NestJS / NodeJS / TypeScript.
Code sinh ra phải:

Tuân theo Clean Architecture

Dễ đọc, dễ test, dễ mở rộng

Không sinh file dư, không code thừa

Không cần mở BETA Running Preview

Có typing rõ ràng và comment hợp lý

🧱 2. Cấu trúc dự án chuẩn
src/
├── main.ts
├── app.module.ts
├── auth/
│   ├── auth.module.ts
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── jwt.strategy.ts
├── users/
│   ├── users.module.ts
│   ├── users.service.ts
│   └── users.entity.ts
└── common/
    ├── decorators/
    ├── guards/
    ├── interceptors/
    └── utils/


Rule:

Mỗi feature là một module riêng.

Không import vòng (A → B → A).

Mỗi file chỉ đảm nhận một trách nhiệm duy nhất.

🔤 3. Quy tắc đặt tên (Naming Convention)
Loại	Quy tắc	Ví dụ
Biến	camelCase	userEmail, accessToken
Class / DTO / Entity	PascalCase	UserService, LoginDto
Thư mục / Module	kebab-case	auth/, user-profile/
Hằng số	UPPER_SNAKE_CASE	MAX_LOGIN_ATTEMPTS
Route	kebab-case	/user-profile, /auth/login

Đặt tên theo hành vi, không phải loại dữ liệu.
Ví dụ: getUserProfile() tốt hơn getData().

🧩 4. Quy tắc function & class

Function Rule:

≤ 20 dòng.

Làm 1 việc duy nhất.

Có try/catch nếu async hoặc I/O.

Trả về kiểu dữ liệu cụ thể, không dùng any.

Class Rule:

Một class ≤ 300 dòng.

Không chứa logic lặp hoặc hardcode.

Dùng dependency injection thay vì import trực tiếp.

🔐 5. Quy tắc Authentication (NestJS)

Phải có các thành phần sau:

AuthModule, AuthService, AuthController

JwtStrategy (hoặc PassportStrategy)

UsersService để truy xuất user từ DB

bcrypt để hash mật khẩu

JWT_SECRET và JWT_EXPIRES_IN lấy từ .env

🧠 6. Quy tắc Prompt khi tương tác AI

Khi tạo code mới:

“Viết code TypeScript chuẩn NestJS, theo Clean Architecture, có type đầy đủ, comment rõ, không sinh file dư.”

Khi refactor:

“Refactor đoạn code này theo SOLID, giảm lặp code, thêm typing rõ ràng, giữ nguyên logic.”

Khi test:

“Tạo test đơn vị cho service này bằng Jest, mock dependency và chỉ test logic chính.”

💬 7. Comment & Documentation

Comment tại sao làm, không phải làm gì.

Với function phức tạp:

/**
 * Validate user credentials and return JWT if success.
 * Throws UnauthorizedException if invalid.
 */


Dùng README.md trong mỗi module nếu module phức tạp.

🧰 8. Tooling bắt buộc
Tool	Mục đích
ESLint + Prettier	Format & lint code tự động
Husky + lint-staged	Kiểm tra trước khi commit
.editorconfig	Giữ format thống nhất
strict mode trong tsconfig.json	Tránh lỗi type ẩn
🧾 9. Quy tắc Commit & Review

Commit message format:

feat(auth): add JWT validation middleware
fix(user): correct password hash
refactor(api): split admin and user routes


Rule:

Không commit code chưa chạy.

Không push nếu test fail.

Review code AI sinh ra như code của đồng nghiệp.

🌱 10. Triết lý "AI + Dev"

💡 AI là cộng sự, bạn là kiến trúc sư.
Mọi code AI sinh ra phải có:

Mục đích rõ ràng

Type đầy đủ

Cấu trúc sạch

Không để lại dead code

Đầu ra hãy trả lời tôi bằng tiếng việt
luôn ghi nhớ:
Luôn xem pattern hiện có trong dự án trước khi code tính năng mới

Đọc code của các trang tương tự để hiểu cách họ handle authentication/authorization

Không tự sáng tạo khi đã có pattern chuẩn trong dự án

Nghe kỹ feedback của developer thay vì cố gắng giải thích

