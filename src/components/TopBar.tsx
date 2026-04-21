import type { ReactNode } from 'react';
import { IconBack, IconBell } from './Icons';
import { FF_INK, FF_CORAL } from '../lib/constants';

interface Props {
  title: string | { eyebrow?: string; main: string };
  avatar?: string;
  onRight?: () => void;
  right?: ReactNode;
  onBack?: () => void;
}

export function TopBar({ title, avatar, onRight, right, onBack }: Props) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '52px 20px 12px',
    }}>
      {onBack && (
        <button onClick={onBack} style={{
          width: 40, height: 40, borderRadius: 20, border: '1px solid rgba(22,16,50,.08)',
          background: '#fff', color: FF_INK, display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
        }}>
          <IconBack width={18} height={18} />
        </button>
      )}
      {avatar && !onBack && (
        <div style={{
          width: 40, height: 40, borderRadius: 20,
          background: 'linear-gradient(135deg,#FFC93C,#FF6B6B)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
        }}>{avatar}</div>
      )}
      <div style={{ flex: 1 }}>
        {typeof title === 'object' && title.eyebrow && (
          <div style={{ fontSize: 12, color: '#8A85A3' }}>{title.eyebrow}</div>
        )}
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: FF_INK }}>
          {typeof title === 'object' ? title.main : title}
        </div>
      </div>
      {right ?? (
        <button onClick={onRight} style={{
          width: 40, height: 40, borderRadius: 20, border: '1px solid rgba(22,16,50,.08)',
          background: '#fff', color: FF_INK, display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', position: 'relative',
        }}>
          <IconBell width={18} height={18} />
          <span style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8,
            background: FF_CORAL, borderRadius: 4, border: '2px solid #fff' }} />
        </button>
      )}
    </div>
  );
}
