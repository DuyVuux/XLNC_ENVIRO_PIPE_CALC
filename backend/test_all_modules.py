#!/usr/bin/env python3
"""
Test script for all 5 modules
Tests all API endpoints with test data
"""

import requests
import json

API_BASE_URL = "http://localhost:8000/api/v1"

def test_module(module_name, endpoint, test_data):
    """Test a module endpoint"""
    print(f"\n{'='*60}")
    print(f"Testing {module_name}")
    print(f"{'='*60}")
    
    try:
        response = requests.post(
            f"{API_BASE_URL}{endpoint}",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            result = response.json()
            print(f"✅ {module_name} - SUCCESS")
            print(f"   Calculation ID: {result.get('calculation_id', 'N/A')}")
            print(f"   Confidence: {result.get('confidence', 0) * 100:.1f}%")
            
            outputs = result.get("outputs", {})
            if outputs:
                key_outputs = list(outputs.keys())[:3]
                for key in key_outputs:
                    output = outputs[key]
                    if isinstance(output, dict) and "value" in output:
                        unit = output.get("unit", "")
                        print(f"   {key}: {output['value']} {unit}")
            
            return True
        else:
            print(f"❌ {module_name} - FAILED")
            print(f"   Status: {response.status_code}")
            print(f"   Response: {response.text[:200]}")
            return False
            
    except Exception as e:
        print(f"❌ {module_name} - ERROR: {str(e)}")
        return False

def main():
    print("\n🧪 Testing All 5 Modules")
    print("="*60)
    
    results = {}
    
    # Module 1
    results["Module 1"] = test_module(
        "Module 1 - Pipeline Hydraulics",
        "/modules/pipe-sizing/calculate",
        {
            "Q": 0.00579,
            "Q_unit": "m3/s",
            "L": 120,
            "t": 25,
            "Hc": 5,
            "epsilon": 0.0001,
            "beta": 2.5,
            "material": "PVC"
        }
    )
    
    # Module 2
    results["Module 2"] = test_module(
        "Module 2 - Spray Aeration",
        "/modules/spray-aeration/calculate",
        {
            "Q": 0.00579,
            "Q_unit": "m3/s",
            "t": 25,
            "C_Fe2_plus": 8.5,
            "C_H2S": 2.3,
            "A": 15,
            "eta": 0.8
        }
    )
    
    # Module 3
    results["Module 3"] = test_module(
        "Module 3 - Mixing Reaction",
        "/modules/mixing-reaction/calculate",
        {
            "Q": 0.00579,
            "Q_unit": "m3/s",
            "t": 2,
            "t_unit": "minute",
            "Fe2_plus_0": 8.5,
            "H2S_0": 2.3,
            "k_Fe": 0.18,
            "k_H2S": 0.25,
            "O2": 6.59,
            "ty_le_kich_thuoc": "L:W:H = 2:1:1"
        }
    )
    
    # Module 4
    results["Module 4"] = test_module(
        "Module 4 - Settling Tank",
        "/modules/settling-tank/calculate",
        {
            "Q": 0.00579,
            "Q_unit": "m3/s"
        }
    )
    
    # Module 5
    results["Module 5"] = test_module(
        "Module 5 - Filtration",
        "/modules/filtration/calculate",
        {
            "Q": 0.00579,
            "Q_unit": "m3/s"
        }
    )
    
    # Summary
    print(f"\n{'='*60}")
    print("Test Summary")
    print(f"{'='*60}")
    
    passed = sum(1 for v in results.values() if v)
    total = len(results)
    
    for module, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{module}: {status}")
    
    print(f"\nTotal: {passed}/{total} modules passed")
    
    if passed == total:
        print("✅ All modules working correctly!")
    else:
        print("⚠️ Some modules need attention")

if __name__ == "__main__":
    try:
        response = requests.get("http://localhost:8000/health", timeout=5)
        if response.status_code == 200:
            main()
        else:
            print("❌ Backend server is not running")
            print("Please start: cd backend && source .venv/bin/activate && uvicorn app.main:app --reload --port 8000")
    except Exception as e:
        print(f"❌ Cannot connect to backend: {str(e)}")
        print("Please start: cd backend && source .venv/bin/activate && uvicorn app.main:app --reload --port 8000")

