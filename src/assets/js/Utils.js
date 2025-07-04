export function generateId(key) {
  return localStorage.getItem(key).count + 1;
}
export function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
