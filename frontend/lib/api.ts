const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL 
  ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1`
  : "http://localhost:8000/api/v1";

export async function calculatePipeSizing(data: {
  Q: number;
  Q_unit: string;
  L: number;
  t: number;
  Hc: number;
  epsilon: number;
  beta: number;
  material: string;
}) {
  const response = await fetch(`${API_BASE_URL}/modules/pipe-sizing/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

export async function calculateSprayAeration(data: {
  Q: number;
  Q_unit: string;
  t: number;
  C_Fe2_plus: number;
  C_H2S: number;
  A: number;
  eta: number;
}) {
  const response = await fetch(`${API_BASE_URL}/modules/spray-aeration/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

export async function calculateMixingReaction(data: {
  Q: number;
  Q_unit: string;
  t: number;
  t_unit: string;
  Fe2_plus_0: number;
  H2S_0: number;
  k_Fe: number;
  k_H2S: number;
  O2: number;
  ty_le_kich_thuoc: string;
}) {
  const response = await fetch(`${API_BASE_URL}/modules/mixing-reaction/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

export async function calculateSettlingTank(data: {
  Q: number;
  Q_unit: string;
  U_o?: number;
  alpha?: number;
  H_0?: number;
  W?: number;
  alpha_safety?: number;
}) {
  const response = await fetch(`${API_BASE_URL}/modules/settling-tank/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

export async function calculateFiltration(data: {
  Q: number;
  Q_unit: string;
  v?: number;
  q?: number;
  t_rua?: number;
  n?: number;
  h1?: number;
  h2?: number;
  h3?: number;
  h4?: number;
  h5?: number;
  h6?: number;
  h8?: number;
}) {
  const response = await fetch(`${API_BASE_URL}/modules/filtration/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

