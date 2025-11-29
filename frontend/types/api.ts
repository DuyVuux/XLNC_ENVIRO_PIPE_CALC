export interface PipeSizingInput {
  Q: number;
  Q_unit: "m3/s" | "m3/h" | "m3/day";
  L: number;
  t: number;
  Hc: number;
  epsilon: number;
  beta: number;
  material: string;
}

export interface PipeSizingOutput {
  calculation_id: string;
  timestamp: string;
  prompt_version: string;
  module: string;
  module_version: string;
  formula_set_version: string;
  inputs: Record<string, any>;
  outputs: {
    D_h?: { value: number; unit: string; selected_standard?: string; note?: string };
    D_d?: { value: number; unit: string; selected_standard?: string; note?: string };
    v_h?: { value: number; unit: string; note?: string };
    v_d?: { value: number; unit: string; note?: string };
    Re_hut?: { value: number; flow_type: string; note?: string };
    Re_day?: { value: number; flow_type: string; note?: string };
    Htt?: { value: number; unit: string; note?: string };
    Hcb?: { value: number; unit: string; note?: string };
    H1?: { value: number; unit: string; note?: string };
    Hyc?: { value: number; unit: string; note?: string };
  };
  intermediates?: Record<string, any>;
  safety_checks?: Record<string, any>;
  confidence: number;
  warnings?: string[];
  technical_report?: {
    summary?: { en?: string; vi?: string };
    assumptions?: string[];
    safety_flags?: string[];
    next_steps?: string[];
    references?: string[];
  };
}




