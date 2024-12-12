import { B as BASE_API_URL } from "./const-VN1vlzxL.js";
async function fetchInvestments({
  project
}) {
  const params = {};
  if (project) {
    params.project = project.toString();
  }
  const response = await fetch(
    `${BASE_API_URL}/investments?${new URLSearchParams(params).toString()}`
  );
  return await response.json();
}
async function fetchApplicationsTotalInvested() {
  const response = await fetch(`${BASE_API_URL}/applications/invested`);
  const data = await response.json();
  return data;
}
async function fetchProjectOptions() {
  const response = await fetch(`${BASE_API_URL}/projects/options`);
  return await response.json();
}
export {
  fetchProjectOptions as a,
  fetchInvestments as b,
  fetchApplicationsTotalInvested as f
};
