import { BASE_API_URL } from '@/api/const.js';

/* APPLICATIONS */

export async function fetchInvestments({
  project,
}: {
  project: number | null;
}) {
  const params: Record<string, string> = {};

  if (project) {
    params.project = project.toString();
  }

  const response = await fetch(
    `${BASE_API_URL}/investments?${new URLSearchParams(params).toString()}`,
  );
  return await response.json();
}

export async function fetchApplicationsTotalInvested() {
  const response = await fetch(`${BASE_API_URL}/applications/invested`);
  const data = await response.json();
  return data;
}

export async function fetchProjectOptions() {
  const response = await fetch(`${BASE_API_URL}/projects/options`);
  return await response.json();
}
