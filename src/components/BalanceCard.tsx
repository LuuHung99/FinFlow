import { useEffect, useState } from 'react';
import { IconArrowDown, IconArrowUp } from './Icons';
import { fmtVND } from '../lib/format';

interface Props {
  balance?: number;
  income?: number;
  expense?: number;
}

export function BalanceCard({ balance = 12450000, income = 8200000, expense = 3450000 }: Props) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    let raf: number;
    let t0: number;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min(1, (ts - t0) / 900);
      setShown(Math.round(balance * ease(p)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [balance]);

  return (
    <div style={{
      borderRadius: 24, padding: 22, color: '#fff', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg,#7C3AED 0%,#B68BFF 50%,#FF6B9D 100%)',
      boxShadow: '0 16px 40px rgba(60,40,160,.22)',
    }}>
      <div style={{ position: 'absolute', top: -60, right: -40, width: 200, height: 200,
        background: 'rgba(255,255,255,.18)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -40, width: 160, height: 160,
        background: 'rgba(255,201,60,.25)', borderRadius: '50%' }} />
      <div style={{ position: 'relative' }}>
        <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase',
          fontWeight: 700, opacity: .9 }}>Tổng số dư</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34,
          marginTop: 6, letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums' }}>
          {fmtVND(shown)} <span style={{ fontSize: 22, opacity: .85 }}>₫</span>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <div style={{
            flex: 1, background: 'rgba(255,255,255,.18)', backdropFilter: 'blur(8px)',
            borderRadius: 14, padding: '10px 12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11,
              opacity: .9, fontWeight: 600 }}>
              <IconArrowDown width={12} height={12} /> Thu nhập
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginTop: 2 }}>
              +{fmtVND(income)} ₫
            </div>
          </div>
          <div style={{
            flex: 1, background: 'rgba(255,255,255,.18)', backdropFilter: 'blur(8px)',
            borderRadius: 14, padding: '10px 12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11,
              opacity: .9, fontWeight: 600 }}>
              <IconArrowUp width={12} height={12} /> Chi tiêu
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginTop: 2 }}>
              -{fmtVND(expense)} ₫
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
