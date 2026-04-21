import { useState, useEffect } from 'react';
import { IconClose } from './Icons';
import { FFButton } from './FFButton';
import { CATEGORIES } from '../lib/categories';
import { FF_INK, FF_FG2, FF_FG3, FF_WELL, FF_VIOLET } from '../lib/constants';

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; cat: string; amount: number; type: string }) => void;
}

export function AddSheet({ open, onClose, onSubmit }: Props) {
  const [amount, setAmount] = useState('');
  const [cat, setCat] = useState('food');
  const [name, setName] = useState('');
  const [type, setType] = useState('expense');

  useEffect(() => {
    if (open) { setAmount(''); setName(''); setCat('food'); setType('expense'); }
  }, [open]);

  if (!open) return null;

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 40,
      background: 'rgba(14,11,26,.5)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'flex-end',
      animation: 'ff-fade 220ms cubic-bezier(.22,1,.36,1)',
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', background: '#fff',
        borderRadius: '28px 28px 0 0', padding: '10px 20px 28px',
        animation: 'ff-up 320ms cubic-bezier(.22,1,.36,1)',
      }}>
        <div style={{ width: 40, height: 4, background: '#D6D4E0', borderRadius: 2, margin: '0 auto 14px' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: FF_INK }}>
            {type === 'expense' ? 'Thêm khoản chi' : 'Thêm khoản thu'}
          </div>
          <button onClick={onClose} style={{ width: 32, height: 32, borderRadius: 16, background: FF_WELL, border: 0, color: FF_FG2, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconClose width={16} height={16} />
          </button>
        </div>

        {/* Type toggle */}
        <div style={{ display: 'flex', gap: 6, background: FF_WELL, padding: 4, borderRadius: 14, marginBottom: 14 }}>
          {[['expense', 'Chi tiêu'], ['income', 'Thu nhập']].map(([k, l]) => (
            <button key={k} onClick={() => { setType(k); if (k === 'income') setCat('income'); else setCat('food'); }} style={{
              flex: 1, padding: '10px 0', borderRadius: 10, border: 0,
              background: type === k ? '#fff' : 'transparent',
              color: type === k ? FF_INK : FF_FG2,
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
              boxShadow: type === k ? '0 2px 6px rgba(60,40,160,.08)' : 'none',
            }}>{l}</button>
          ))}
        </div>

        {/* Amount */}
        <div style={{ background: FF_WELL, borderRadius: 20, padding: 20, textAlign: 'center', marginBottom: 14 }}>
          <div style={{ fontSize: 12, color: FF_FG3, textTransform: 'uppercase', fontWeight: 700, letterSpacing: '.1em' }}>Số tiền</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6, marginTop: 6 }}>
            <input value={amount} onChange={e => setAmount(e.target.value.replace(/[^\d.]/g, ''))} placeholder="0" style={{
              border: 0, outline: 0, background: 'transparent', textAlign: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 38, color: FF_INK,
              width: '60%', fontVariantNumeric: 'tabular-nums', letterSpacing: '-.02em',
            }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: FF_FG3 }}>₫</span>
          </div>
        </div>

        {/* Name */}
        <div style={{ marginBottom: 14 }}>
          <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: FF_FG2, display: 'block', marginBottom: 6 }}>Tên</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder={type === 'expense' ? 'VD: Cơm trưa' : 'VD: Lương tháng'} style={{
            width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: 14,
            border: '1.5px solid rgba(22,16,50,.12)', fontSize: 15, outline: 0,
            fontFamily: 'var(--font-body)',
          }} />
        </div>

        {/* Category */}
        {type === 'expense' && (
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: FF_FG2, display: 'block', marginBottom: 8 }}>Danh mục</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
              {['food', 'transport', 'shopping', 'home', 'fun', 'health', 'gift'].map(k => {
                const c = CATEGORIES[k];
                const on = cat === k;
                const IC = c.icon;
                return (
                  <button key={k} onClick={() => setCat(k)} style={{
                    padding: '10px 4px', borderRadius: 14,
                    border: on ? `1.5px solid ${FF_VIOLET}` : '1.5px solid rgba(22,16,50,.08)',
                    background: on ? '#F6F2FF' : '#fff', cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  }}>
                    <div style={{ width: 32, height: 32, borderRadius: 16, background: c.bg, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IC width={16} height={16} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 11, color: FF_INK }}>{c.name}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <FFButton
          disabled={!amount || !name}
          onClick={() => onSubmit({ name, cat, amount: (type === 'expense' ? -1 : 1) * (parseInt(amount.replace(/\./g, '')) || 0), type })}
        >
          Lưu giao dịch
        </FFButton>
      </div>
    </div>
  );
}
