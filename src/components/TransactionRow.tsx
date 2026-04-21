import { CategoryIcon } from './CategoryIcon';
import { CATEGORIES } from '../lib/categories';
import { fmtVND } from '../lib/format';
import { FF_INK, FF_FG3 } from '../lib/constants';
import type { Transaction } from '../lib/mockData';

interface Props {
  tx: Transaction;
  onClick?: () => void;
}

export function TransactionRow({ tx, onClick }: Props) {
  const c = CATEGORIES[tx.cat];
  const positive = tx.amount > 0;
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0',
      background: 'transparent', border: 0, width: '100%', cursor: 'pointer', textAlign: 'left',
    }}>
      <CategoryIcon cat={tx.cat} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: FF_INK,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tx.name}</div>
        <div style={{ fontSize: 12, color: FF_FG3, marginTop: 2 }}>{c?.name ?? ''} · {tx.time}</div>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
        color: positive ? '#16A34A' : FF_INK, fontVariantNumeric: 'tabular-nums' }}>
        {positive ? '+' : '-'}{fmtVND(Math.abs(tx.amount))} ₫
      </div>
    </button>
  );
}
