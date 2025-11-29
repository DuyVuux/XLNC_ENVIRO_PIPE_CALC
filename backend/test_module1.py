#!/usr/bin/env python3
"""
Test script for Module 1 - Pipeline Hydraulics
Tests the API endpoint with test data from FAKE_DATA_5_MODULE.json
"""

import requests
import json
from typing import Dict, Any

API_BASE_URL = "http://localhost:8000/api/v1"

def test_module1_calculation():
    """Test Module 1 calculation with test data"""
    
    # Test data from FAKE_DATA_5_MODULE.json
    test_input = {
        "Q": 0.00579,
        "Q_unit": "m3/s",
        "L": 120,
        "t": 25,
        "Hc": 5,
        "epsilon": 0.0001,
        "beta": 2.5,
        "material": "PVC"
    }
    
    print("=" * 60)
    print("Testing Module 1 - Pipeline Hydraulics")
    print("=" * 60)
    print(f"\nInput Data:")
    print(json.dumps(test_input, indent=2))
    
    try:
        # Test API endpoint
        response = requests.post(
            f"{API_BASE_URL}/modules/pipe-sizing/calculate",
            json=test_input,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"\nStatus Code: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            print("\n✅ Calculation successful!")
            print("\n" + "=" * 60)
            print("Output Results:")
            print("=" * 60)
            
            # Display key outputs
            outputs = result.get("outputs", {})
            print(f"\n📊 Key Results:")
            if "D_d" in outputs:
                d_d = outputs["D_d"]
                print(f"  - Đường kính ống đẩy: {d_d.get('value', 'N/A')} {d_d.get('unit', '')} ({d_d.get('selected_standard', 'N/A')})")
            if "D_h" in outputs:
                d_h = outputs["D_h"]
                print(f"  - Đường kính ống hút: {d_h.get('value', 'N/A')} {d_h.get('unit', '')} ({d_h.get('selected_standard', 'N/A')})")
            if "v_d" in outputs:
                v_d = outputs["v_d"]
                print(f"  - Vận tốc ống đẩy: {v_d.get('value', 'N/A')} {v_d.get('unit', '')}")
            if "v_h" in outputs:
                v_h = outputs["v_h"]
                print(f"  - Vận tốc ống hút: {v_h.get('value', 'N/A')} {v_h.get('unit', '')}")
            if "Hyc" in outputs:
                hyc = outputs["Hyc"]
                print(f"  - Cột áp yêu cầu: {hyc.get('value', 'N/A')} {hyc.get('unit', '')}")
            if "H1" in outputs:
                h1 = outputs["H1"]
                print(f"  - Tổng tổn thất: {h1.get('value', 'N/A')} {h1.get('unit', '')}")
            
            # Display safety checks
            safety_checks = result.get("safety_checks", {})
            if safety_checks:
                print(f"\n🔍 Safety Checks:")
                for key, check in safety_checks.items():
                    status = check.get("status", "UNKNOWN")
                    status_icon = "✅" if status == "PASS" else "⚠️"
                    print(f"  {status_icon} {key}: {status}")
                    if "note" in check:
                        print(f"     {check['note']}")
            
            # Display warnings
            warnings = result.get("warnings", [])
            if warnings:
                print(f"\n⚠️ Warnings:")
                for warning in warnings:
                    print(f"  - {warning}")
            
            # Display technical report summary
            tech_report = result.get("technical_report", {})
            if tech_report and "summary" in tech_report:
                summary = tech_report["summary"]
                print(f"\n📝 Technical Report Summary:")
                if "vi" in summary:
                    print(f"  VI: {summary['vi']}")
                if "en" in summary:
                    print(f"  EN: {summary['en']}")
            
            # Display confidence
            confidence = result.get("confidence", 0)
            print(f"\n🎯 Confidence: {confidence * 100:.1f}%")
            
            print("\n" + "=" * 60)
            print("Full JSON Response:")
            print("=" * 60)
            print(json.dumps(result, indent=2, default=str))
            
            return True
        else:
            print(f"\n❌ Error: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.ConnectionError:
        print("\n❌ Error: Cannot connect to backend server")
        print("Please make sure backend is running:")
        print("  cd backend && source .venv/bin/activate && uvicorn app.main:app --reload --port 8000")
        return False
    except Exception as e:
        print(f"\n❌ Error: {str(e)}")
        return False

def test_health_endpoint():
    """Test health endpoint"""
    try:
        response = requests.get("http://localhost:8000/health", timeout=5)
        if response.status_code == 200:
            print("✅ Health check passed")
            return True
        else:
            print(f"❌ Health check failed: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Health check error: {str(e)}")
        return False

if __name__ == "__main__":
    print("\n🧪 Module 1 Test Suite")
    print("=" * 60)
    
    # Test health endpoint first
    print("\n1. Testing health endpoint...")
    health_ok = test_health_endpoint()
    
    if health_ok:
        # Test calculation
        print("\n2. Testing Module 1 calculation...")
        test_module1_calculation()
    else:
        print("\n⚠️ Backend server is not running. Please start it first.")
        print("\nTo start backend:")
        print("  cd backend")
        print("  source .venv/bin/activate")
        print("  uvicorn app.main:app --reload --port 8000")




