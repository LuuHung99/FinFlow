import type { ReactNode } from 'react';
import { FF_VIOLET, FF_FG2 } from '../lib/constants';

interface Props {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function Chip({ children, active, onClick }: Props) {
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '8px 14px', borderRadius: 999,
      border: `1.5px solid ${active ? FF_VIOLET : 'rgba(22,16,50,.1)'}`,
      background: active ? FF_VIOLET : '#fff',
      color: active ? '#fff' : FF_FG2,
      fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
      cursor: 'pointer', whiteSpace: 'nowrap',
      transition: 'all 150ms cubic-bezier(.22,1,.36,1)',
    }}>{children}</button>
  );
}
