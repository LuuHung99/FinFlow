import { IconHome, IconList, IconPlus, IconTarget, IconUser } from './Icons';
import { FF_VIOLET, FF_FG3 } from '../lib/constants';

interface Props {
  active: string;
  onChange: (key: string) => void;
}

const items = [
  { key: 'home', icon: IconHome, label: 'Trang chủ' },
  { key: 'tx', icon: IconList, label: 'Giao dịch' },
  { key: '__fab' },
  { key: 'budget', icon: IconTarget, label: 'Ngân sách' },
  { key: 'profile', icon: IconUser, label: 'Tôi' },
];

export function BottomNav({ active, onChange }: Props) {
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '0 16px 16px', pointerEvents: 'none', zIndex: 30 }}>
      <div style={{
        position: 'relative', height: 68, pointerEvents: 'auto',
        background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(20px)',
        borderRadius: 24, border: '1px solid rgba(22,16,50,.06)',
        boxShadow: '0 12px 30px rgba(60,40,160,.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        padding: '0 8px',
      }}>
        {items.map(it => it.key === '__fab' ? (
          <button key="fab" onClick={() => onChange('add')} style={{
            position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)',
            width: 58, height: 58, borderRadius: 20, border: '4px solid #FAFAFA',
            background: 'linear-gradient(135deg,#7C3AED,#FF6B9D)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 12px 28px rgba(124,58,237,.45)',
          }}><IconPlus width={26} height={26} strokeWidth={3} /></button>
        ) : (
          <button key={it.key} onClick={() => onChange(it.key)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            background: 'transparent', border: 0, padding: '8px 4px', cursor: 'pointer',
            color: active === it.key ? FF_VIOLET : FF_FG3,
          }}>
            {it.icon && <it.icon width={22} height={22} strokeWidth={active === it.key ? 2.3 : 2} />}
            <span style={{ fontSize: 10.5, fontWeight: 600, fontFamily: 'var(--font-display)' }}>
              {it.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
