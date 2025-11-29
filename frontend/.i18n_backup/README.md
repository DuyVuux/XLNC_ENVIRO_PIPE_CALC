# I18n Backup

Các file i18n đã được backup ở đây để dễ dàng khôi phục sau này.

## Nội dung:
- `i18n/` - Cấu hình i18n
- `messages/` - File dịch (vi.json, en.json)

## Để khôi phục i18n:
1. Di chuyển các file về lại:
   ```bash
   mv .i18n_backup/i18n .
   mv .i18n_backup/messages .
   ```

2. Khôi phục middleware:
   - Copy middleware từ git history hoặc tạo lại

3. Update các components để sử dụng translations

## Lưu ý:
- File này chỉ là backup tạm thời
- Có thể xóa sau khi đã tích hợp i18n thành công

