export function fmtVND(n: number): string {
  const abs = Math.abs(Math.round(n));
  const s = abs.toLocaleString('vi-VN').replace(/,/g, '.');
  return (n < 0 ? '-' : '') + s;
}

export function fmtShort(n: number): string {
  const abs = Math.abs(n);
  if (abs >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0', '') + 'tr';
  if (abs >= 1_000) return (n / 1_000).toFixed(0) + 'k';
  return String(n);
}
