export interface FM { data: Record<string, string>; content: string; }
export function parseFrontMatter(raw: string): FM {
  const start = raw.indexOf('---'); if (start !== 0) return { data: {}, content: raw };
  const end = raw.indexOf('\n---', 3); if (end === -1) return { data: {}, content: raw };
  const fmBlock = raw.slice(3, end).trim(); const body = raw.slice(end + 4).trim();
  const data: Record<string, string> = {};
  fmBlock.split(/\r?\n/).forEach(line => {
    const m = line.match(/^([A-Za-z0-9_\-]+):\s*(.*)$/);
    if (m) { let val = m[2].trim(); if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1); data[m[1]] = val; }
  });
  return { data, content: body };
}
