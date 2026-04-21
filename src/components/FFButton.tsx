import type { ReactNode, CSSProperties } from 'react';
import { FF_VIOLET, FF_INK, FF_YELLOW } from '../lib/constants';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'yellow';
  disabled?: boolean;
  style?: CSSProperties;
  leftIcon?: ReactNode;
}

const variants = {
  primary: { bg: FF_VIOLET, fg: '#fff', shadow: '0 8px 20px rgba(124,58,237,.28)' },
  secondary: { bg: '#EDE4FF', fg: '#6D28D9', shadow: 'none' },
  ghost: { bg: 'transparent', fg: FF_VIOLET, shadow: 'none', border: '1.5px solid #D6C6FF' },
  dark: { bg: FF_INK, fg: '#fff', shadow: '0 8px 20px rgba(22,16,50,.25)' },
  yellow: { bg: FF_YELLOW, fg: '#3B2300', shadow: '0 8px 20px rgba(255,201,60,.35)' },
};

export function FFButton({ children, onClick, variant = 'primary', disabled, style = {}, leftIcon }: Props) {
  const v = variants[variant];
  return (
    <button onClick={onClick} disabled={disabled} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      padding: '15px 22px', borderRadius: 16,
      border: ('border' in v) ? (v as { border: string }).border : 'none',
      background: v.bg, color: v.fg, boxShadow: v.shadow,
      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: '100%',
      transition: 'transform 150ms cubic-bezier(.22,1,.36,1)',
      ...style,
    }}
    onMouseDown={(e) => { if (!disabled) (e.currentTarget.style.transform = 'scale(.97)'); }}
    onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {leftIcon}{children}
    </button>
  );
}
