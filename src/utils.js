export function toTitle(str) {
  return str.replace(/-/g, ' ').replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
