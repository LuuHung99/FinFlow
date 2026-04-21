import { IconPlus, IconTransfer, IconPay, IconZap } from './Icons';
import { FF_VIOLET, FF_MINT, FF_CORAL, FF_INK } from '../lib/constants';

interface Props {
  onAction?: (key: string) => void;
}

const actions = [
  { key: 'add', icon: IconPlus, label: 'Thêm', color: FF_VIOLET, bg: '#EDE4FF' },
  { key: 'transfer', icon: IconTransfer, label: 'Chuyển', color: FF_MINT, bg: '#DDF7EE' },
  { key: 'pay', icon: IconPay, label: 'Thanh toán', color: FF_CORAL, bg: '#FFE4E4' },
  { key: 'more', icon: IconZap, label: 'Đầu tư', color: '#E59B0B', bg: '#FFF4D0' },
];

export function QuickActions({ onAction }: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
      {actions.map(a => (
        <button key={a.key} onClick={() => onAction?.(a.key)} style={{
          background: '#fff', border: '1px solid rgba(22,16,50,.06)', borderRadius: 18,
          padding: '14px 6px', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 6, cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(60,40,160,.04)',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 14, background: a.bg, color: a.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <a.icon width={20} height={20} />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12, color: FF_INK }}>
            {a.label}
          </div>
        </button>
      ))}
    </div>
  );
}
