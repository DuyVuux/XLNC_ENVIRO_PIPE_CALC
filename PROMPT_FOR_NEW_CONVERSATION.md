# PROMPT FOR NEW CONVERSATION - Continue Phần IV Chunking

**Copy và paste prompt này vào conversation mới để tiếp tục công việc:**

---

## PROMPT START

Bạn đang tiếp tục công việc semantic chunking cho dự án EnviroPipeCalc Master Prompt. Tôi đã hoàn thành Phần I, II, III và đang làm Phần IV (Domain Knowledge Base).

**Tình trạng hiện tại:**
- ✅ Phần I (Introduction): 7 chunks + canonical summary - HOÀN THÀNH
- ✅ Phần II (Roles & Behaviors): 7 chunks + canonical summary - HOÀN THÀNH  
- ✅ Phần III (Architecture Rules): 7 chunks + canonical summary - HOÀN THÀNH
- ⏳ Phần IV (Domain Knowledge Base): 5/8 chunks đã tạo, còn thiếu 3 chunks + canonical summary

**Nhiệm vụ của bạn:**

1. **Đọc các file để hiểu context:**
   - `/home/duykhongngu28/massive/EnviroPipeCalc/PROGRESS_SUMMARY.md` - Tóm tắt chi tiết tiến độ
   - `/home/duykhongngu28/massive/EnviroPipeCalc/CONTINUATION_GUIDE.md` - Hướng dẫn tiếp tục
   - `/home/duykhongngu28/massive/EnviroPipeCalc/MASTER_PROMPT/04_DOMAIN_KNOWLEDGE_BASE/raw.md` - File nguồn cần chunk
   - Xem các chunks đã tạo trong `/MASTER_PROMPT/04_DOMAIN_KNOWLEDGE_BASE/chunks/` để hiểu format

2. **Tạo 3 chunks còn lại cho Phần IV:**

   **Chunk 06:** `chunk_06_glossary_reference_tables.md`
   - Section: IV.3 Domain Glossary + IV.4 Reference Tables
   - Nội dung: Bảng thuật ngữ EN-VI (Q, v, D, H, C_ox, C_phun, etc.) + Các bảng tra cứu (độ nhám ống, độ nhớt nước, oxy bão hòa, hệ số tổn thất cục bộ, thời gian trộn/lắng/lọc)
   - Phải bảo toàn TẤT CẢ bảng và nội dung từ raw.md

   **Chunk 07:** `chunk_07_reference_ranges_workflow.md`
   - Section: IV.5 Reference Ranges + IV.6 Real-world Construction Workflow
   - Nội dung: Bảng khoảng giá trị tham chiếu (v, V_h, V_d, C_ox, t_mixing, U_o, v_filter, q_backwash, etc.) + Quy trình xây lắp thực tế
   - Phải bảo toàn TẤT CẢ bảng và ví dụ cảnh báo

   **Chunk 08:** `chunk_08_ai_reasoning_limitations.md`
   - Section: IV.7 AI Reasoning Instructions (Domain-aware) + IV.8 Explicit Limitations
   - Nội dung: Hướng dẫn lý luận domain-aware (7 bước) + Giới hạn rõ ràng (khi nào cần kiểm duyệt người)
   - Phải bảo toàn TẤT CẢ hướng dẫn và constraints

3. **Tạo canonical summary:**
   - File: `/MASTER_PROMPT/04_DOMAIN_KNOWLEDGE_BASE/summaries/canonical_summary.md`
   - Phải tóm tắt đầy đủ 8 sections (IV.1 đến IV.8)
   - Format giống các canonical summary đã tạo (xem Phần I, II, III)
   - Bao gồm: chunk list, detailed summaries, cross-references, critical rules

**Yêu cầu quan trọng:**

1. **KHÔNG được bỏ sót nội dung** - Phải đọc kỹ raw.md và đảm bảo TẤT CẢ nội dung được bao gồm
2. **Bảo toàn formulas** - Giữ nguyên LaTeX syntax ($$...$$)
3. **Bảo toàn tables** - Giữ nguyên format bảng
4. **Bảo toàn TCVN/QCVN references** - Không được bỏ sót tiêu chuẩn
5. **Maintain bilingual format** - EN+VI + Hóa phàm
6. **Chunk metadata đầy đủ** - Chunk ID, Section, Word Count, Keywords, Related Chunks, Canonical Summary Reference
7. **Cross-references đúng** - Tham chiếu đúng section (IV.1, IV.2.1, etc.) và chunk IDs

**Format chunk template:**
```markdown
# Chunk XX: [Title] / [Vietnamese Title]

**Chunk ID:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_XX`
**Section:** IV.X [Section Name]
**Word Count:** ~XXX words
**Retrieval Keywords:** [keywords]
**Related Chunks:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_XX-1`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_XX+1`
**Canonical Summary Reference:** `04_DOMAIN_KNOWLEDGE_BASE_summary_section_X`

---
[Content from raw.md]
---
**Previous Chunk:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_XX-1`
**Next Chunk:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_XX+1`
```

**Sau khi hoàn thành:**
- Kiểm tra lại xem có bỏ sót nội dung nào không
- Verify chunk metadata đầy đủ
- Verify canonical summary bao phủ tất cả 8 sections
- Cập nhật PROGRESS_SUMMARY.md nếu cần

**Bắt đầu bằng cách đọc PROGRESS_SUMMARY.md và raw.md để hiểu context, sau đó tạo 3 chunks còn lại và canonical summary.**

---

## PROMPT END






