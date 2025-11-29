# Chunk 04: Backend Rules / Quy tắc Backend

**Chunk ID:** `03_ARCHITECTURE_RULES_chunk_04`  
**Section:** III.4 Backend Rules  
**Word Count:** ~450 words  
**Retrieval Keywords:** backend rules, FastAPI, calculation engine, module chain orchestration, Pydantic, Pythonic code  
**Related Chunks:** `03_ARCHITECTURE_RULES_chunk_03`, `03_ARCHITECTURE_RULES_chunk_05`  
**Canonical Summary Reference:** `03_ARCHITECTURE_RULES_summary_section_4`

---

### III.4. Backend rules / Quy tắc backend

**III.4.1. FastAPI Calculation Engine Structure / Cấu trúc FastAPI Calculation Engine:**

**Vietnamese (chi tiết):**

- Pythonic, clean, maximum readability
- Use Pydantic v2 models for all I/O
- Each module has:
  - `schemas.py` (input/output models)
  - `logic.py` (core formulas)
  - `service.py` (orchestrator)
  - `router.py` (API endpoint)
- No business logic inside router
- Short functions, no hidden side effects
- Each calculation returns:
```json
{
  "inputs": {},
  "outputs": {},
  "intermediates": {},
  "formula_refs": [],
  "timestamp": "...",
  "version": "..."
}
```

**VI:** Code Python phải ngắn, rõ, chia module đúng chuẩn. Không được để logic trong router. Hàm tính toán phải dễ đọc, dễ kiểm tra.

**English (concise):**

Backend uses FastAPI only (no NestJS mentioned). Pythonic code structure: schemas.py (Pydantic models), logic.py (formulas), service.py (orchestrator), router.py (endpoints). Returns structured JSON per II.3.

**Hóa phàm:**

Backend chỉ dùng FastAPI, không có NestJS. Code Python chia module rõ ràng, kết quả trả về theo cấu trúc chuẩn.

---

**III.4.2. Module Chain Orchestration / Điều phối chuỗi module:**

**Vietnamese (chi tiết):**

Hệ thống phải hỗ trợ điều phối chuỗi module (theo I.5, III.3.3):

**Service layer cho module chains:**
```python
# services/module_chain_service.py
class ModuleChainService:
    """
    Điều phối chuỗi module: 1→2→3→4→5, 1→3→4, 1→2→5, ...
    """
    
    def calculate_chain(
        self, 
        chain_config: List[str],  # ['module_1', 'module_2', 'module_3', ...]
        user_inputs: Dict[str, Dict],  # {module_1: {...}, module_2: {...}}
        previous_outputs: Dict[str, Dict] = None  # Output từ module trước
    ) -> Dict[str, Any]:
        """
        Tính toán chuỗi module theo thứ tự chain_config
        
        Args:
            chain_config: Danh sách module theo thứ tự ['module_1', 'module_3', 'module_4']
            user_inputs: Input từ người dùng cho từng module
            previous_outputs: Output từ module trước (tự động truyền)
        
        Returns:
            Kết quả tổng hợp từ tất cả module trong chuỗi
        """
        results = {}
        accumulated_outputs = previous_outputs or {}
        
        for module_name in chain_config:
            # Merge user input với output từ module trước
            module_input = {
                **user_inputs.get(module_name, {}),
                **accumulated_outputs  # Output từ module trước
            }
            
            # Gọi module
            result = self._call_module(module_name, module_input)
            results[module_name] = result
            
            # Cập nhật accumulated_outputs cho module tiếp theo
            accumulated_outputs = result['outputs']
        
        return {
            "chain": chain_config,
            "module_results": results,
            "final_outputs": accumulated_outputs,
            "calculation_id": generate_calculation_id(),
            "timestamp": get_timestamp()
        }
```

**English (concise):**

Module chain orchestration service supports sequential module chains (1→2→3→4→5, 1→3→4, etc.). Automatically passes Output → Input between modules. Each module can also receive direct user input.

**Hóa phàm:**

Service điều phối chuỗi module tự động truyền dữ liệu từ module trước sang module sau, nhưng vẫn cho phép người dùng nhập trực tiếp vào bất kỳ module nào.

---

**Previous Chunk:** `03_ARCHITECTURE_RULES_chunk_03`  
**Next Chunk:** `03_ARCHITECTURE_RULES_chunk_05` (Frontend Rules)








