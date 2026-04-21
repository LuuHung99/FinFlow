import { useState } from 'react';
import { createPortal } from 'react-dom';
import { BalanceCard } from '../components/BalanceCard';
import { QuickActions } from '../components/QuickActions';
import { TransactionRow } from '../components/TransactionRow';
import { TopBar } from '../components/TopBar';
import { ProgressBar } from '../components/ProgressBar';
import { CategoryIcon } from '../components/CategoryIcon';
import { Chip } from '../components/Chip';
import {
  IconSparkle, IconFlame, IconTrending, IconPlus, IconFilter, IconSearch,
  IconBack, IconEdit, IconTrash, IconUser, IconWallet, IconTarget, IconBell,
  IconLock, IconGift, IconHelp, IconSettings, IconChevronRight, IconLogout,
  IconArrowDown,
} from '../components/Icons';
import { CATEGORIES } from '../lib/categories';
import { MOCK_TX, MOCK_GOALS, MOCK_BUDGETS, MOCK_NOTIFS } from '../lib/mockData';
import type { Transaction } from '../lib/mockData';
import { fmtVND, fmtShort } from '../lib/format';
import { FF_VIOLET, FF_CORAL, FF_INK, FF_FG2, FF_FG3, FF_BG, FF_WELL } from '../lib/constants';

/* ───────────────────────── HomeScreen ───────────────────────── */

export function HomeScreen({ onNav, onOpenTx, userName, greeting }: {
  onNav: (key: string) => void;
  onOpenTx: (tx: Transaction) => void;
  userName: string;
  greeting: string;
}) {
  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <TopBar title={{ eyebrow: greeting, main: userName }} avatar={userName?.[0] || 'A'} onRight={() => onNav('notifications')} />
      <div style={{ padding: '0 20px' }}>
        <BalanceCard />

        <div style={{ marginTop: 20 }}>
          <QuickActions onAction={(k) => {
            if (k === 'add') onNav('add');
            else if (k === 'more') onNav('invest');
            else if (k === 'transfer') onNav('tx');
            else if (k === 'pay') onNav('budget');
          }} />
        </div>

        {/* Goal highlight */}
        <div onClick={() => onNav('goals')} style={{
          background: '#fff', borderRadius: 20, padding: 18, marginTop: 20,
          border: '1px solid rgba(22,16,50,.06)',
          boxShadow: '0 6px 16px rgba(60,40,160,.06)', cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 14,
              background: 'linear-gradient(135deg,#FFC93C,#FF9A3C)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
            }}>🖥️</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: FF_INK }}>Mua MacBook</div>
              <div style={{ fontSize: 12, color: FF_FG3 }}>Còn 5,6tr · hạn 12/2026</div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: FF_VIOLET, fontSize: 18 }}>68%</div>
          </div>
          <div style={{ marginTop: 12 }}>
            <ProgressBar pct={68} />
          </div>
        </div>

        {/* AI insight */}
        <div onClick={() => onNav('analytics')} style={{
          background: 'linear-gradient(135deg,#F6F2FF 0%,#FFE4E4 100%)',
          borderRadius: 20, padding: 16, marginTop: 16, cursor: 'pointer',
          display: 'flex', gap: 12, alignItems: 'flex-start',
          border: '1px solid rgba(124,58,237,.1)',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 12, flexShrink: 0,
            background: '#fff', color: FF_VIOLET,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(124,58,237,.15)',
          }}><IconSparkle width={18} height={18} /></div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: FF_INK }}>Gợi ý từ FinFlow</div>
            <div style={{ fontSize: 13, color: FF_FG2, marginTop: 3, lineHeight: 1.45 }}>
              Bạn chi nhiều hơn <b style={{ color: FF_CORAL }}>23%</b> cho ăn uống tuần này. Cuối tuần tự nấu thử nha?
            </div>
          </div>
        </div>

        {/* Streak + Invest teaser */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
          <div style={{ background: '#fff', borderRadius: 18, padding: 14, border: '1px solid rgba(22,16,50,.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ color: '#F59E0B' }}><IconFlame width={18} height={18} /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: FF_INK }}>Streak</div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: FF_INK, marginTop: 2 }}>12 ngày</div>
            <div style={{ fontSize: 11, color: FF_FG3 }}>Tracking đều tay 🔥</div>
          </div>
          <div onClick={() => onNav('invest')} style={{ background: 'linear-gradient(135deg,#3DD9B3,#7FE8C9)', borderRadius: 18, padding: 14, color: '#fff', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <IconTrending width={18} height={18} />
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13 }}>Đầu tư</div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, marginTop: 2 }}>+8,2%</div>
            <div style={{ fontSize: 11, opacity: .9 }}>Danh mục tháng này</div>
          </div>
        </div>

        {/* Recent tx */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24, marginBottom: 4 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: FF_INK }}>Giao dịch gần đây</div>
          <button onClick={() => onNav('tx')} style={{
            background: 'transparent', border: 0, color: FF_VIOLET,
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
          }}>Xem hết</button>
        </div>
        <div style={{ background: '#fff', borderRadius: 20, padding: '4px 16px', border: '1px solid rgba(22,16,50,.06)' }}>
          {MOCK_TX.slice(0, 4).map((tx, i) => (
            <div key={tx.id} style={{ borderTop: i ? '1px dashed rgba(22,16,50,.06)' : 'none' }}>
              <TransactionRow tx={tx} onClick={() => onOpenTx(tx)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── TransactionsScreen ───────────────────────── */

export function TransactionsScreen({ onOpenTx, extraTx = [] }: {
  onOpenTx: (tx: Transaction) => void;
  extraTx?: Transaction[];
}) {
  const [filter, setFilter] = useState('all');
  const [range, setRange] = useState('Tháng này');
  const [query, setQuery] = useState('');
  const all = [...extraTx, ...MOCK_TX];
  let filtered = filter === 'all' ? all : all.filter(t => t.cat === filter);
  if (query) filtered = filtered.filter(t => t.name.toLowerCase().includes(query.toLowerCase()));

  const income = filtered.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0);
  const expense = filtered.filter(t => t.amount < 0).reduce((s, t) => s + t.amount, 0);
  const total = income + expense;

  const groups: Record<string, Transaction[]> = {};
  filtered.forEach(t => { const k = t.time.split(' · ')[0]; (groups[k] = groups[k] || []).push(t); });

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <TopBar title="Giao dịch" right={
        <button style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', border: '1px solid rgba(22,16,50,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: FF_INK }}>
          <IconFilter width={18} height={18} />
        </button>
      } />
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid rgba(22,16,50,.08)', borderRadius: 14, padding: '10px 14px', marginBottom: 12 }}>
          <IconSearch width={16} height={16} stroke={FF_FG3} />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Tìm giao dịch..." style={{
            border: 0, outline: 0, flex: 1, fontFamily: 'var(--font-body)', fontSize: 14, background: 'transparent',
          }} />
        </div>

        <div style={{ display: 'flex', gap: 6, background: FF_WELL, padding: 4, borderRadius: 14, marginBottom: 14 }}>
          {['Tuần', 'Tháng này', 'Năm'].map(r => (
            <button key={r} onClick={() => setRange(r)} style={{
              flex: 1, padding: '9px 0', borderRadius: 10, border: 0,
              background: range === r ? '#fff' : 'transparent',
              color: range === r ? FF_INK : FF_FG2,
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
              boxShadow: range === r ? '0 2px 6px rgba(60,40,160,.08)' : 'none',
            }}>{r}</button>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: 20, padding: 16, border: '1px solid rgba(22,16,50,.06)', marginBottom: 14 }}>
          <div style={{ fontSize: 12, color: FF_FG3, textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 700 }}>Dư {range.toLowerCase()}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, color: total < 0 ? FF_CORAL : FF_INK, fontVariantNumeric: 'tabular-nums', marginTop: 2 }}>
            {total < 0 ? '-' : '+'}{fmtVND(Math.abs(total))} ₫
          </div>
          <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
            <div style={{ fontSize: 12 }}>
              <span style={{ color: FF_FG3 }}>Thu: </span>
              <b style={{ color: '#16A34A', fontFamily: 'var(--font-display)' }}>+{fmtVND(income)} ₫</b>
            </div>
            <div style={{ fontSize: 12 }}>
              <span style={{ color: FF_FG3 }}>Chi: </span>
              <b style={{ color: FF_CORAL, fontFamily: 'var(--font-display)' }}>{fmtVND(expense)} ₫</b>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 10, marginBottom: 4 }}>
          <Chip active={filter === 'all'} onClick={() => setFilter('all')}>Tất cả</Chip>
          <Chip active={filter === 'food'} onClick={() => setFilter('food')}>🍜 Ăn uống</Chip>
          <Chip active={filter === 'transport'} onClick={() => setFilter('transport')}>🚕 Di chuyển</Chip>
          <Chip active={filter === 'shopping'} onClick={() => setFilter('shopping')}>🛍️ Mua sắm</Chip>
          <Chip active={filter === 'fun'} onClick={() => setFilter('fun')}>🎬 Giải trí</Chip>
          <Chip active={filter === 'home'} onClick={() => setFilter('home')}>🏠 Nhà ở</Chip>
          <Chip active={filter === 'income'} onClick={() => setFilter('income')}>💰 Thu nhập</Chip>
        </div>

        {Object.entries(groups).map(([day, txs]) => (
          <div key={day} style={{ marginBottom: 14 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: FF_FG3, textTransform: 'uppercase', letterSpacing: '.08em', padding: '4px 4px 8px' }}>{day}</div>
            <div style={{ background: '#fff', borderRadius: 20, padding: '4px 16px', border: '1px solid rgba(22,16,50,.06)' }}>
              {txs.map((tx, i) => (
                <div key={tx.id} style={{ borderTop: i ? '1px dashed rgba(22,16,50,.06)' : 'none' }}>
                  <TransactionRow tx={tx} onClick={() => onOpenTx(tx)} />
                </div>
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ padding: 40, textAlign: 'center', color: FF_FG3, fontSize: 13 }}>
            Chưa có giao dịch nào — bắt đầu tracking để mình hỗ trợ bạn nhé ✨
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── AnalyticsScreen ───────────────────────── */

export function AnalyticsScreen({ onBack }: { onBack: () => void }) {
  const cats = [
    { cat: 'food', amount: 2340000, pct: 40 },
    { cat: 'home', amount: 1500000, pct: 26 },
    { cat: 'shopping', amount: 890000, pct: 15 },
    { cat: 'transport', amount: 620000, pct: 11 },
    { cat: 'fun', amount: 495000, pct: 8 },
  ];
  const R = 60, C = 2 * Math.PI * R;
  let offset = 0;
  const colors = ['#FF6B6B', '#7C3AED', '#FFC93C', '#56CCF2', '#3DD9B3'];

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <TopBar title="Phân tích" onBack={onBack} right={<div style={{ width: 40 }} />} />
      <div style={{ padding: '0 20px' }}>
        <div style={{
          background: 'linear-gradient(135deg,#7C3AED,#FF6B9D)', borderRadius: 20,
          padding: 18, color: '#fff', marginBottom: 16, position: 'relative',
          overflow: 'hidden', boxShadow: '0 12px 28px rgba(124,58,237,.3)',
        }}>
          <div style={{ position: 'absolute', top: -40, right: -30, width: 140, height: 140, background: 'rgba(255,255,255,.15)', borderRadius: '50%' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', opacity: .9 }}>
              <IconSparkle width={14} height={14} /> Insight tuần này
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, marginTop: 6, lineHeight: 1.35 }}>
              Bạn chi nhiều hơn 23% cho ăn uống so với tuần trước 🍜
            </div>
            <div style={{ fontSize: 13, opacity: .9, marginTop: 6 }}>
              Thử đặt giới hạn 500k/tuần cho danh mục này?
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 20, padding: 20, border: '1px solid rgba(22,16,50,.06)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: FF_INK }}>
            Chi tiêu theo danh mục
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16 }}>
            <svg width="150" height="150" viewBox="0 0 150 150" style={{ flexShrink: 0 }}>
              <g transform="translate(75,75) rotate(-90)">
                {cats.map((c, i) => {
                  const len = (c.pct / 100) * C;
                  const dash = `${len} ${C}`;
                  const el = <circle key={i} r={R} cx="0" cy="0" fill="none" stroke={colors[i]} strokeWidth="22" strokeDasharray={dash} strokeDashoffset={-offset} />;
                  offset += len + 2;
                  return el;
                })}
              </g>
              <text x="75" y="72" textAnchor="middle" style={{ font: "700 22px 'Space Grotesk'", fill: FF_INK }}>5,8tr</text>
              <text x="75" y="90" textAnchor="middle" style={{ font: "600 11px 'Be Vietnam Pro'", fill: FF_FG3 }}>tổng chi</text>
            </svg>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {cats.map((c, i) => (
                <div key={c.cat} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: colors[i] }} />
                  <div style={{ flex: 1, fontSize: 12, color: FF_FG2 }}>{CATEGORIES[c.cat].name}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: FF_INK, fontVariantNumeric: 'tabular-nums' }}>{c.pct}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 20, padding: 20, marginTop: 14, border: '1px solid rgba(22,16,50,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: FF_INK }}>Xu hướng 7 ngày</div>
            <div style={{ fontSize: 12, color: FF_FG3 }}>Chi mỗi ngày</div>
          </div>
          <svg width="100%" height="120" viewBox="0 0 300 120" style={{ marginTop: 12 }}>
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#7C3AED" stopOpacity=".25" />
                <stop offset="1" stopColor="#7C3AED" stopOpacity="0" />
              </linearGradient>
            </defs>
            {(() => {
              const vals = [180, 220, 90, 310, 140, 260, 120];
              const max = 320;
              const W = 300, H = 100;
              const pts = vals.map((v, i) => [(i / 6) * W, H - (v / max) * H + 10]);
              const d = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
              const area = `${d} L${W},${H + 10} L0,${H + 10} Z`;
              return (
                <>
                  <path d={area} fill="url(#area)" />
                  <path d={d} fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill="#fff" stroke="#7C3AED" strokeWidth="2" />)}
                </>
              );
            })()}
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: FF_FG3, marginTop: 4 }}>
            {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(d => <span key={d}>{d}</span>)}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 20, padding: 20, marginTop: 14, border: '1px solid rgba(22,16,50,.06)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: FF_INK }}>So với tháng trước</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, justifyContent: 'space-around', marginTop: 16, height: 120 }}>
            {[
              { m: 'T1', v: 40, on: false },
              { m: 'T2', v: 56, on: false },
              { m: 'T3', v: 74, on: false },
              { m: 'T4', v: 58, on: true },
            ].map(b => (
              <div key={b.m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: '100%', maxWidth: 36, height: b.v, borderRadius: 10, background: b.on ? 'linear-gradient(180deg,#7C3AED,#FF6B9D)' : '#EDE4FF' }} />
                <div style={{ fontSize: 11, fontFamily: 'var(--font-display)', fontWeight: 600, color: b.on ? FF_VIOLET : FF_FG3 }}>{b.m}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── BudgetScreen ───────────────────────── */

export function BudgetScreen() {
  const totalSpent = MOCK_BUDGETS.reduce((s, b) => s + b.spent, 0);
  const totalLimit = MOCK_BUDGETS.reduce((s, b) => s + b.limit, 0);
  const pct = Math.round((totalSpent / totalLimit) * 100);

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <TopBar title="Ngân sách" right={
        <button style={{ width: 40, height: 40, borderRadius: 20, background: FF_VIOLET, color: '#fff', border: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 6px 14px rgba(124,58,237,.3)' }}>
          <IconPlus width={18} height={18} strokeWidth={2.5} />
        </button>
      } />
      <div style={{ padding: '0 20px' }}>
        <div style={{
          background: 'linear-gradient(135deg,#7C3AED,#FF6B9D)', borderRadius: 24, padding: 22, color: '#fff', position: 'relative', overflow: 'hidden',
          boxShadow: '0 12px 28px rgba(124,58,237,.28)',
        }}>
          <div style={{ position: 'absolute', top: -50, right: -40, width: 180, height: 180, background: 'rgba(255,255,255,.14)', borderRadius: '50%' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', opacity: .9 }}>Tháng 4 · Đã dùng</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, marginTop: 6, letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums' }}>
              {fmtVND(totalSpent)} <span style={{ fontSize: 18, opacity: .85 }}>/ {fmtVND(totalLimit)} ₫</span>
            </div>
            <div style={{ height: 10, background: 'rgba(255,255,255,.25)', borderRadius: 999, marginTop: 12, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${pct}%`, background: '#FFC93C', borderRadius: 999, transition: 'width 600ms cubic-bezier(.22,1,.36,1)' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginTop: 8, opacity: .9 }}>
              <span>{pct}% đã dùng</span>
              <span>Còn {fmtVND(totalLimit - totalSpent)} ₫</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: FF_INK }}>Theo danh mục</div>
          <div style={{ fontSize: 12, color: FF_FG3 }}>{MOCK_BUDGETS.length} ngân sách</div>
        </div>
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {MOCK_BUDGETS.map(b => {
            const cat = CATEGORIES[b.cat];
            const p = Math.round((b.spent / b.limit) * 100);
            const danger = p >= 90;
            const warn = p >= 75 && p < 90;
            const color = danger ? '#EF4444' : warn ? '#F59E0B' : cat.color;
            return (
              <div key={b.cat} style={{ background: '#fff', borderRadius: 18, padding: 14, border: '1px solid rgba(22,16,50,.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CategoryIcon cat={b.cat} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: FF_INK }}>{cat.name}</div>
                    <div style={{ fontSize: 12, color: FF_FG3, fontVariantNumeric: 'tabular-nums' }}>
                      {fmtVND(b.spent)} ₫ / {fmtVND(b.limit)} ₫
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color, fontVariantNumeric: 'tabular-nums' }}>{p}%</div>
                </div>
                <div style={{ height: 6, background: '#F3F1FA', borderRadius: 999, marginTop: 10, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${Math.min(p, 100)}%`, background: color, borderRadius: 999, transition: 'width 600ms cubic-bezier(.22,1,.36,1)' }} />
                </div>
                {danger && (
                  <div style={{ fontSize: 12, color: '#EF4444', marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                    ⚠️ Hơi quá tay rồi nha
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── GoalsScreen ───────────────────────── */

export function GoalsScreen({ onBack }: { onBack: () => void }) {
  const gradients: Record<string, string> = {
    violet: 'linear-gradient(135deg,#7C3AED,#B68BFF)',
    mint: 'linear-gradient(135deg,#3DD9B3,#7FE8C9)',
    yellow: 'linear-gradient(135deg,#FFC93C,#FF9A3C)',
  };
  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <TopBar title="Mục tiêu" onBack={onBack} right={
        <button style={{ width: 40, height: 40, borderRadius: 20, background: FF_VIOLET, color: '#fff', border: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 6px 14px rgba(124,58,237,.3)' }}>
          <IconPlus width={18} height={18} strokeWidth={2.5} />
        </button>
      } />
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {MOCK_GOALS.map(g => {
            const p = Math.round((g.saved / g.target) * 100);
            return (
              <div key={g.id} style={{ background: '#fff', borderRadius: 22, padding: 18, border: '1px solid rgba(22,16,50,.06)', boxShadow: '0 6px 16px rgba(60,40,160,.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: gradients[g.color], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>{g.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: FF_INK }}>{g.name}</div>
                    <div style={{ fontSize: 12, color: FF_FG3, marginTop: 2 }}>Hạn {g.deadline}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: FF_VIOLET }}>{p}%</div>
                  </div>
                </div>
                <div style={{ marginTop: 14 }}>
                  <ProgressBar pct={p} gradient={gradients[g.color]} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                  <div>
                    <div style={{ fontSize: 11, color: FF_FG3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em' }}>Đã tiết kiệm</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: FF_INK, fontVariantNumeric: 'tabular-nums' }}>{fmtVND(g.saved)} ₫</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: FF_FG3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em' }}>Mục tiêu</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: FF_INK, fontVariantNumeric: 'tabular-nums' }}>{fmtVND(g.target)} ₫</div>
                  </div>
                </div>
                <button style={{
                  marginTop: 14, width: '100%', padding: '11px 14px', borderRadius: 14, border: 0,
                  background: '#F3F1FA', color: FF_VIOLET, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
                }}>+ Nạp thêm vào mục tiêu</button>
              </div>
            );
          })}
        </div>

        <div style={{ background: 'linear-gradient(135deg,#FFC93C,#FF9A3C)', borderRadius: 20, padding: 18, color: '#fff', marginTop: 16, boxShadow: '0 10px 24px rgba(255,154,60,.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', opacity: .95 }}>
            <IconSparkle width={14} height={14} /> Mẹo nhỏ
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, marginTop: 6, lineHeight: 1.35 }}>
            Bật tự động nạp 500k/tuần vào mục tiêu MacBook để về đích sớm 2 tháng 🚀
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── InvestScreen ───────────────────────── */

interface Holding {
  name: string;
  code: string;
  value: number;
  change: number;
  color: string;
}

const FUND_SOURCES = [
  { id: 'techcom', name: 'Techcombank', detail: '***3456 · Số dư 14.200.000 ₫', emoji: '🏦', color: '#E70014' },
  { id: 'vietcom', name: 'Vietcombank', detail: '***8821 · Số dư 3.100.000 ₫', emoji: '🏦', color: '#007B47' },
  { id: 'momo', name: 'MoMo', detail: '0912***678 · Số dư 850.000 ₫', emoji: '💜', color: '#A50064' },
];

const QUICK_AMOUNTS = [100000, 500000, 1000000, 5000000];

function InvestFundModal({
  mode, holdings, onClose, onConfirm,
}: {
  mode: 'deposit' | 'withdraw';
  holdings: Holding[];
  onClose: () => void;
  onConfirm: (data: { amount: number; targetCode: string; sourceId: string }) => void;
}) {
  const isDeposit = mode === 'deposit';
  const [amount, setAmount] = useState('');
  const [targetCode, setTargetCode] = useState(holdings[0]?.code || '');
  const [sourceId, setSourceId] = useState(FUND_SOURCES[0].id);
  const [err, setErr] = useState('');

  const parsed = parseInt(amount.replace(/\./g, '')) || 0;
  const targetHolding = holdings.find(h => h.code === targetCode);
  const maxWithdraw = targetHolding?.value || 0;

  const onAmountChange = (v: string) => {
    const digits = v.replace(/[^\d]/g, '');
    if (!digits) { setAmount(''); return; }
    const n = parseInt(digits, 10);
    setAmount(n.toLocaleString('vi-VN').replace(/,/g, '.'));
  };

  const submit = () => {
    setErr('');
    if (parsed < 10000) { setErr('Số tiền tối thiểu 10.000 ₫'); return; }
    if (!isDeposit && parsed > maxWithdraw) {
      setErr(`Không đủ số dư. Tối đa ${fmtVND(maxWithdraw)} ₫`);
      return;
    }
    onConfirm({ amount: parsed, targetCode, sourceId });
  };

  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, background: 'rgba(14,11,26,.55)',
      zIndex: 100, display: 'flex', alignItems: 'flex-end',
      animation: 'ff-fade 220ms cubic-bezier(.22,1,.36,1)', backdropFilter: 'blur(6px)',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', background: '#fff', borderRadius: '28px 28px 0 0',
        padding: '12px 20px 28px', maxHeight: '88%', overflowY: 'auto',
        animation: 'ff-up 320ms cubic-bezier(.22,1,.36,1)',
      }}>
        <div style={{ width: 40, height: 4, background: '#D6D4E0', borderRadius: 2, margin: '0 auto 14px' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: FF_INK }}>
            {isDeposit ? 'Nạp tiền đầu tư' : 'Rút tiền đầu tư'}
          </div>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 16, background: FF_WELL, border: 0, color: FF_FG2,
            cursor: 'pointer', fontSize: 18, fontWeight: 600,
          }}>×</button>
        </div>

        {/* Amount */}
        <div style={{
          background: isDeposit
            ? 'linear-gradient(135deg,#7C3AED,#B68BFF)'
            : 'linear-gradient(135deg,#FF6B6B,#FF9A8B)',
          borderRadius: 20, padding: 22, textAlign: 'center', marginBottom: 14, color: '#fff',
          position: 'relative', overflow: 'hidden',
          boxShadow: isDeposit ? '0 10px 24px rgba(124,58,237,.3)' : '0 10px 24px rgba(255,107,107,.3)',
        }}>
          <div style={{ position: 'absolute', top: -40, right: -30, width: 120, height: 120, background: 'rgba(255,255,255,.16)', borderRadius: '50%' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .9 }}>Số tiền</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6, marginTop: 6 }}>
              <input
                value={amount}
                onChange={e => onAmountChange(e.target.value)}
                placeholder="0"
                inputMode="numeric"
                style={{
                  border: 0, outline: 0, background: 'transparent', textAlign: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: '#fff',
                  width: '70%', fontVariantNumeric: 'tabular-nums', letterSpacing: '-.02em',
                }}
              />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, opacity: .85 }}>₫</span>
            </div>
            {!isDeposit && targetHolding && (
              <div style={{ fontSize: 11, opacity: .9, marginTop: 4 }}>
                Tối đa có thể rút: <b>{fmtVND(maxWithdraw)} ₫</b>
              </div>
            )}
          </div>
        </div>

        {/* Quick amounts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 16 }}>
          {QUICK_AMOUNTS.map(q => (
            <button key={q} onClick={() => setAmount(q.toLocaleString('vi-VN').replace(/,/g, '.'))} style={{
              padding: '9px 4px', borderRadius: 12, border: '1px solid rgba(22,16,50,.08)',
              background: '#fff', color: FF_INK, cursor: 'pointer',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12,
            }}>
              +{fmtShort(q)}
            </button>
          ))}
        </div>

        {/* Target holding */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FF_FG3, marginBottom: 8 }}>
            {isDeposit ? 'Đầu tư vào' : 'Rút từ'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {holdings.map(h => {
              const on = targetCode === h.code;
              return (
                <button key={h.code} onClick={() => setTargetCode(h.code)} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 14px', borderRadius: 14,
                  border: `1.5px solid ${on ? FF_VIOLET : 'rgba(22,16,50,.08)'}`,
                  background: on ? '#F6F2FF' : '#fff',
                  cursor: 'pointer', textAlign: 'left',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 12, background: h.color + '22', color: h.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12,
                  }}>{h.code.split('-')[0].slice(0, 2)}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: FF_INK }}>{h.name}</div>
                    <div style={{ fontSize: 11, color: FF_FG3, marginTop: 2 }}>
                      Số dư {fmtVND(h.value)} ₫ · {h.change >= 0 ? '+' : ''}{h.change}%
                    </div>
                  </div>
                  <div style={{
                    width: 18, height: 18, borderRadius: 9,
                    border: `2px solid ${on ? FF_VIOLET : '#D6D4E0'}`,
                    background: on ? FF_VIOLET : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {on && <div style={{ width: 6, height: 6, borderRadius: 3, background: '#fff' }} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Source / destination bank */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FF_FG3, marginBottom: 8 }}>
            {isDeposit ? 'Từ tài khoản' : 'Về tài khoản'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {FUND_SOURCES.map(s => {
              const on = sourceId === s.id;
              return (
                <button key={s.id} onClick={() => setSourceId(s.id)} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 14px', borderRadius: 14,
                  border: `1.5px solid ${on ? FF_VIOLET : 'rgba(22,16,50,.08)'}`,
                  background: on ? '#F6F2FF' : '#fff',
                  cursor: 'pointer', textAlign: 'left',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 12,
                    background: s.color + '22', color: s.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                  }}>{s.emoji}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: FF_INK }}>{s.name}</div>
                    <div style={{ fontSize: 11, color: FF_FG3, marginTop: 2 }}>{s.detail}</div>
                  </div>
                  <div style={{
                    width: 18, height: 18, borderRadius: 9,
                    border: `2px solid ${on ? FF_VIOLET : '#D6D4E0'}`,
                    background: on ? FF_VIOLET : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {on && <div style={{ width: 6, height: 6, borderRadius: 3, background: '#fff' }} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Security / info */}
        <div style={{
          padding: 12, borderRadius: 12,
          background: isDeposit ? '#EEF9F4' : '#FFF4D0',
          display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 16,
        }}>
          <div style={{ fontSize: 18 }}>{isDeposit ? '🔒' : '💡'}</div>
          <div style={{ fontSize: 12, color: FF_INK, lineHeight: 1.5 }}>
            {isDeposit
              ? <>Giao dịch được bảo mật bởi <b>AES-256</b>. Tiền sẽ được phân bổ vào danh mục trong ~1 phút.</>
              : <>Rút tiền có thể mất <b>1-3 ngày làm việc</b> để về tài khoản. Miễn phí rút lần đầu trong tháng.</>}
          </div>
        </div>

        {err && (
          <div style={{
            padding: '10px 14px', borderRadius: 12,
            background: '#FFE4E4', color: '#B91C1C',
            fontSize: 12, fontWeight: 600, marginBottom: 12,
          }}>⚠️ {err}</div>
        )}

        <button disabled={parsed <= 0} onClick={submit} style={{
          width: '100%', padding: '15px', borderRadius: 16, border: 0,
          background: parsed > 0
            ? (isDeposit ? FF_VIOLET : FF_CORAL)
            : '#D6D4E0',
          color: '#fff',
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
          cursor: parsed > 0 ? 'pointer' : 'not-allowed',
          boxShadow: parsed > 0
            ? (isDeposit ? '0 10px 24px rgba(124,58,237,.3)' : '0 10px 24px rgba(255,107,107,.3)')
            : 'none',
        }}>
          {isDeposit ? 'Xác nhận nạp' : 'Xác nhận rút'} {parsed > 0 && `${fmtVND(parsed)} ₫`}
        </button>
      </div>
    </div>
  );
}

export function InvestScreen({ onBack }: { onBack: () => void }) {
  const [holdings, setHoldings] = useState<Holding[]>([
    { name: 'Quỹ cổ phiếu VN', code: 'VN-FUND', value: 5200000, change: 8.2, color: '#7C3AED' },
    { name: 'Quỹ trái phiếu', code: 'BOND-F', value: 3800000, change: 3.1, color: '#3DD9B3' },
    { name: 'Vàng SJC', code: 'GOLD', value: 2100000, change: -1.4, color: '#FFC93C' },
    { name: 'Tiền gửi 12 tháng', code: 'TD-12', value: 5000000, change: 5.5, color: '#56CCF2' },
  ]);
  const [modal, setModal] = useState<'deposit' | 'withdraw' | null>(null);
  const [flash, setFlash] = useState<string | null>(null);
  const total = holdings.reduce((s, h) => s + h.value, 0);

  const handleConfirm = (data: { amount: number; targetCode: string; sourceId: string }) => {
    const delta = modal === 'deposit' ? data.amount : -data.amount;
    setHoldings(prev => prev.map(h =>
      h.code === data.targetCode ? { ...h, value: Math.max(0, h.value + delta) } : h,
    ));
    const sourceName = FUND_SOURCES.find(s => s.id === data.sourceId)?.name || '';
    setFlash(
      modal === 'deposit'
        ? `Đã nạp ${fmtVND(data.amount)} ₫ vào danh mục từ ${sourceName} ✨`
        : `Đã rút ${fmtVND(data.amount)} ₫ về ${sourceName} 💸`,
    );
    setModal(null);
    setTimeout(() => setFlash(null), 3000);
  };

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <TopBar title="Đầu tư" onBack={onBack} right={<div style={{ width: 40 }} />} />
      <div style={{ padding: '0 20px' }}>
        <div style={{
          background: 'linear-gradient(135deg,#0E0B1A 0%,#2E1A5C 100%)', borderRadius: 24, padding: 22, color: '#fff', position: 'relative', overflow: 'hidden',
          boxShadow: '0 14px 32px rgba(14,11,26,.3)',
        }}>
          <div style={{ position: 'absolute', top: -60, right: -40, width: 200, height: 200, background: 'rgba(124,58,237,.35)', borderRadius: '50%', filter: 'blur(20px)' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', opacity: .7 }}>Tổng danh mục</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, marginTop: 6, letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums' }}>
              {fmtVND(total)} <span style={{ fontSize: 22, opacity: .7 }}>₫</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 8, padding: '4px 10px', borderRadius: 999, background: 'rgba(61,217,179,.2)', color: '#6EE7B7', fontSize: 13, fontWeight: 700 }}>
              <IconArrowDown width={12} height={12} style={{ transform: 'rotate(180deg)' }} /> +5,8% tháng này
            </div>
          </div>
        </div>

        {flash && (
          <div style={{
            marginTop: 12, padding: '12px 14px', borderRadius: 14,
            background: '#DCFCE7', color: '#166534',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13,
            display: 'flex', alignItems: 'center', gap: 8,
            animation: 'ff-fade 220ms cubic-bezier(.22,1,.36,1)',
          }}>
            <span style={{ color: '#16A34A' }}>✓</span> {flash}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
          <button onClick={() => setModal('deposit')} style={{
            background: FF_VIOLET, color: '#fff', border: 0, borderRadius: 16, padding: '14px 16px',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(124,58,237,.28)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <IconArrowDown width={16} height={16} /> Nạp tiền
          </button>
          <button onClick={() => setModal('withdraw')} style={{
            background: '#fff', color: FF_INK, border: '1.5px solid rgba(22,16,50,.1)',
            borderRadius: 16, padding: '14px 16px',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <IconArrowDown width={16} height={16} style={{ transform: 'rotate(180deg)' }} /> Rút tiền
          </button>
        </div>

        <div style={{ marginTop: 20, marginBottom: 12, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: FF_INK }}>Danh mục của bạn</div>
        <div style={{ background: '#fff', borderRadius: 20, padding: '4px 16px', border: '1px solid rgba(22,16,50,.06)' }}>
          {holdings.map((h, i) => (
            <div key={h.code} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', borderTop: i ? '1px dashed rgba(22,16,50,.06)' : 'none' }}>
              <div style={{ width: 42, height: 42, borderRadius: 14, background: h.color + '22', color: h.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13 }}>
                {h.code.split('-')[0].slice(0, 2)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: FF_INK }}>{h.name}</div>
                <div style={{ fontSize: 12, color: FF_FG3 }}>{h.code}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: FF_INK, fontVariantNumeric: 'tabular-nums' }}>{fmtVND(h.value)} ₫</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: h.change >= 0 ? '#16A34A' : '#EF4444' }}>
                  {h.change >= 0 ? '+' : ''}{h.change}%
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 20, marginBottom: 12, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: FF_INK }}>Khám phá</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { t: 'Quỹ ETF VN30', d: 'Rủi ro trung bình', roi: '9,4%/năm', g: 'linear-gradient(135deg,#7C3AED,#FF6B9D)' },
            { t: 'Vàng 24K', d: 'Giữ giá trị lâu dài', roi: '4,2%/năm', g: 'linear-gradient(135deg,#FFC93C,#FF9A3C)' },
            { t: 'Tiền gửi 6 tháng', d: 'An toàn, lãi cố định', roi: '5,1%/năm', g: 'linear-gradient(135deg,#3DD9B3,#7FE8C9)' },
            { t: 'Chứng chỉ quỹ', d: 'Đa dạng hoá', roi: '7,8%/năm', g: 'linear-gradient(135deg,#56CCF2,#A0E4FF)' },
          ].map((x, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, padding: 14, border: '1px solid rgba(22,16,50,.06)' }}>
              <div style={{ height: 48, borderRadius: 12, background: x.g, marginBottom: 10 }} />
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: FF_INK }}>{x.t}</div>
              <div style={{ fontSize: 11, color: FF_FG3, marginTop: 2 }}>{x.d}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#16A34A', marginTop: 6 }}>{x.roi}</div>
            </div>
          ))}
        </div>
      </div>

      {modal && <PortalModal>
        <InvestFundModal
          mode={modal}
          holdings={holdings}
          onClose={() => setModal(null)}
          onConfirm={handleConfirm}
        />
      </PortalModal>}
    </div>
  );
}

function PortalModal({ children }: { children: React.ReactNode }) {
  const el = typeof document !== 'undefined' ? document.getElementById('ff-portal-root') : null;
  const wrapped = (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'auto', zIndex: 100 }}>
      {children}
    </div>
  );
  if (!el) return wrapped; // fallback: render inline if portal root missing
  return createPortal(wrapped, el);
}

/* ───────────────────────── ProfileScreen ───────────────────────── */

export function ProfileScreen({ onToggleDark, dark, onLogout, onNav }: {
  onToggleDark: () => void;
  dark: boolean;
  onLogout: () => void;
  onNav: (key: string) => void;
}) {
  const items: Array<{
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    detail?: string;
    toggle?: boolean;
    onClick?: () => void;
  }> = [
    { icon: IconUser, label: 'Thông tin cá nhân', detail: 'An Nguyễn', onClick: () => onNav('edit-profile') },
    { icon: IconWallet, label: 'Tài khoản liên kết', detail: '4 ngân hàng', onClick: () => onNav('linked-accounts') },
    { icon: IconTarget, label: 'Mục tiêu tiết kiệm', detail: `${MOCK_GOALS.length} mục tiêu`, onClick: () => onNav('goals') },
    { icon: IconBell, label: 'Thông báo', detail: 'Bật', onClick: () => onNav('notifications') },
    { icon: IconLock, label: 'Bảo mật & Face ID', onClick: () => onNav('security') },
    { icon: IconSparkle, label: 'Chế độ tối', toggle: true },
    { icon: IconGift, label: 'Mời bạn bè · nhận 50k', onClick: () => onNav('invite') },
    { icon: IconHelp, label: 'Trợ giúp', onClick: () => onNav('help') },
    { icon: IconSettings, label: 'Cài đặt', onClick: () => onNav('settings') },
  ];

  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <div style={{ paddingTop: 62 }} />
      <div style={{ padding: '0 20px', textAlign: 'center' }}>
        <div style={{
          width: 88, height: 88, borderRadius: 44, margin: '0 auto',
          background: 'linear-gradient(135deg,#FFC93C,#FF6B6B)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36,
          boxShadow: '0 12px 28px rgba(255,107,107,.3)',
        }}>A</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: FF_INK, marginTop: 12 }}>An Nguyễn</div>
        <div style={{ fontSize: 13, color: FF_FG3, marginTop: 2 }}>an@finflow.vn</div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 8, padding: '4px 10px', borderRadius: 999, background: 'linear-gradient(135deg,#7C3AED,#FF6B9D)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '.08em' }}>
          ✨ PRO
        </div>
      </div>

      <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
        {[
          { v: '4', l: 'Tài khoản' },
          { v: '3', l: 'Mục tiêu' },
          { v: '142', l: 'Giao dịch' },
        ].map(s => (
          <div key={s.l} style={{ background: '#fff', borderRadius: 16, padding: 14, textAlign: 'center', border: '1px solid rgba(22,16,50,.06)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: FF_INK, fontVariantNumeric: 'tabular-nums' }}>{s.v}</div>
            <div style={{ fontSize: 11, color: FF_FG3, marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px' }}>
        <div style={{ background: '#fff', borderRadius: 18, border: '1px solid rgba(22,16,50,.06)', overflow: 'hidden' }}>
          {items.map((it, i) => {
            const IC = it.icon;
            return (
              <div key={i} onClick={it.onClick} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
                borderTop: i ? '1px solid rgba(22,16,50,.06)' : 'none', cursor: it.onClick ? 'pointer' : 'default',
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: FF_WELL, color: FF_VIOLET, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IC width={18} height={18} />
                </div>
                <div style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: FF_INK }}>
                  {it.label}
                </div>
                {it.toggle ? (
                  <button onClick={(e) => { e.stopPropagation(); onToggleDark(); }} style={{
                    width: 44, height: 26, borderRadius: 999, border: 0,
                    background: dark ? FF_VIOLET : '#D6D4E0', position: 'relative', cursor: 'pointer',
                    transition: 'all 220ms cubic-bezier(.22,1,.36,1)',
                  }}>
                    <span style={{ position: 'absolute', top: 3, ...(dark ? { right: 3 } : { left: 3 }), width: 20, height: 20, borderRadius: 10, background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,.2)' }} />
                  </button>
                ) : (
                  <>
                    {it.detail && <span style={{ fontSize: 12, color: FF_FG3 }}>{it.detail}</span>}
                    <IconChevronRight width={14} height={14} stroke={FF_FG3} />
                  </>
                )}
              </div>
            );
          })}
        </div>

        <button onClick={onLogout} style={{
          width: '100%', padding: '14px', borderRadius: 16, border: '1.5px solid #FFE4E4',
          background: '#FFF5F5', color: FF_CORAL, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, cursor: 'pointer',
          marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <IconLogout width={16} height={16} /> Đăng xuất
        </button>
        <div style={{ textAlign: 'center', fontSize: 11, color: FF_FG3, marginTop: 14 }}>FinFlow v2.4.0 · Made in Vietnam 🇻🇳</div>
      </div>
    </div>
  );
}

/* ───────────────────────── NotificationsScreen ───────────────────────── */

export function NotificationsScreen({ onBack }: { onBack: () => void }) {
  const typeStyle: Record<string, { bg: string; color: string; icon: string }> = {
    warn: { bg: '#FFF4D0', color: '#B45309', icon: '⚠️' },
    success: { bg: '#DCFCE7', color: '#16A34A', icon: '✅' },
    info: { bg: '#EDE4FF', color: FF_VIOLET, icon: '✨' },
    goal: { bg: '#FFE4E4', color: FF_CORAL, icon: '🎯' },
  };
  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '52px 20px 12px' }}>
        <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: 20, border: '1px solid rgba(22,16,50,.08)', background: '#fff', color: FF_INK, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <IconBack width={18} height={18} />
        </button>
        <div style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: FF_INK }}>Thông báo</div>
        <button style={{ background: 'transparent', border: 0, color: FF_VIOLET, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Đánh dấu đã đọc</button>
      </div>
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {MOCK_NOTIFS.map(n => {
          const s = typeStyle[n.type];
          return (
            <div key={n.id} style={{
              background: n.unread ? '#fff' : '#FAFAFA',
              borderRadius: 18, padding: 14, border: '1px solid rgba(22,16,50,.06)',
              display: 'flex', gap: 12, position: 'relative',
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{s.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: FF_INK }}>{n.title}</div>
                <div style={{ fontSize: 13, color: FF_FG2, marginTop: 2, lineHeight: 1.4 }}>{n.body}</div>
                <div style={{ fontSize: 11, color: FF_FG3, marginTop: 6 }}>{n.time}</div>
              </div>
              {n.unread && <div style={{ position: 'absolute', top: 14, right: 14, width: 8, height: 8, borderRadius: 4, background: FF_VIOLET }} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ───────────────────────── TxDetailScreen ───────────────────────── */

export function TxDetailScreen({ tx, onBack, onDelete }: {
  tx: Transaction;
  onBack: () => void;
  onDelete: () => void;
}) {
  if (!tx) return null;
  const cat = CATEGORIES[tx.cat];
  const positive = tx.amount > 0;
  const CatIcon = cat.icon;
  return (
    <div style={{ paddingBottom: 120, background: FF_BG, minHeight: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '52px 20px 12px' }}>
        <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: 20, border: '1px solid rgba(22,16,50,.08)', background: '#fff', color: FF_INK, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <IconBack width={18} height={18} />
        </button>
        <div style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: FF_INK }}>Chi tiết</div>
        <button style={{ width: 40, height: 40, borderRadius: 20, border: '1px solid rgba(22,16,50,.08)', background: '#fff', color: FF_INK, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <IconEdit width={16} height={16} />
        </button>
      </div>
      <div style={{ padding: '0 20px', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: 36, background: cat.bg, color: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '8px auto 12px' }}>
          <CatIcon width={34} height={34} />
        </div>
        <div style={{ fontSize: 13, color: FF_FG3 }}>{cat.name}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, color: positive ? '#16A34A' : FF_INK, marginTop: 4, fontVariantNumeric: 'tabular-nums', letterSpacing: '-.02em' }}>
          {positive ? '+' : '-'}{fmtVND(Math.abs(tx.amount))} <span style={{ fontSize: 22, opacity: .7 }}>₫</span>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: FF_INK, marginTop: 6 }}>{tx.name}</div>
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{ background: '#fff', borderRadius: 18, border: '1px solid rgba(22,16,50,.06)', overflow: 'hidden' }}>
          {[
            ['Thời gian', tx.time],
            ['Phương thức', tx.method || '—'],
            ['Ghi chú', tx.note || '—'],
            ['Danh mục', cat.name],
          ].map(([k, v], i) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 16px', borderTop: i ? '1px dashed rgba(22,16,50,.06)' : 'none' }}>
              <div style={{ fontSize: 13, color: FF_FG3 }}>{k}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: FF_INK, textAlign: 'right', maxWidth: '60%' }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, padding: 16, borderRadius: 18, background: 'linear-gradient(135deg,#F6F2FF,#FFE4E4)', border: '1px solid rgba(124,58,237,.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: FF_VIOLET }}>
            <IconSparkle width={12} height={12} /> FinFlow phát hiện
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: FF_INK, marginTop: 6, lineHeight: 1.4 }}>
            Tháng này bạn đã chi <b>{fmtVND(MOCK_TX.filter(t => t.cat === tx.cat && t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0))} ₫</b> cho {cat.name.toLowerCase()} rồi đó.
          </div>
        </div>

        <button onClick={() => { onDelete(); onBack(); }} style={{
          marginTop: 16, width: '100%', padding: '14px', borderRadius: 16, border: '1.5px solid #FFE4E4',
          background: '#FFF5F5', color: FF_CORAL, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <IconTrash width={16} height={16} /> Xoá giao dịch
        </button>
      </div>
    </div>
  );
}

/* ───────────────────────── OnboardingScreen ───────────────────────── */

export function OnboardingScreen({ onStart }: { onStart: () => void }) {
  const [step, setStep] = useState(0);
  const slides = [
    {
      bg: 'linear-gradient(135deg,#7C3AED 0%,#B68BFF 50%,#FF6B9D 100%)',
      emoji: '💸',
      title: 'Chào mừng đến FinFlow',
      desc: 'Ví tiền số 1 cho Gen Z Việt — theo dõi chi tiêu nhẹ tênh, không lằng nhằng.',
    },
    {
      bg: 'linear-gradient(135deg,#3DD9B3,#7FE8C9)',
      emoji: '📊',
      title: 'Hiểu tiền của bạn',
      desc: 'Biểu đồ đẹp, insight thông minh. FinFlow sẽ nhắc bạn khi hơi quá tay.',
    },
    {
      bg: 'linear-gradient(135deg,#FFC93C,#FF9A3C)',
      emoji: '🎯',
      title: 'Cán đích mục tiêu',
      desc: 'Tiết kiệm mua MacBook, đi Đà Lạt, hay gì cũng được — mình giúp!',
    },
  ];
  const s = slides[step];
  return (
    <div style={{
      position: 'absolute', inset: 0, background: s.bg, color: '#fff',
      display: 'flex', flexDirection: 'column', padding: '72px 28px 32px',
      transition: 'background 600ms cubic-bezier(.22,1,.36,1)',
    }}>
      <div style={{ position: 'absolute', top: 60, right: 28 }}>
        <button onClick={onStart} style={{ background: 'rgba(255,255,255,.25)', border: 0, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, padding: '8px 14px', borderRadius: 999, cursor: 'pointer' }}>Bỏ qua</button>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ width: 140, height: 140, borderRadius: 48, background: 'rgba(255,255,255,.2)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, marginBottom: 36 }}>
          {s.emoji}
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, letterSpacing: '-.02em', lineHeight: 1.2 }}>{s.title}</div>
        <div style={{ fontSize: 15, lineHeight: 1.5, opacity: .95, marginTop: 14, maxWidth: 280 }}>{s.desc}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 22 }}>
        {slides.map((_, i) => (
          <div key={i} style={{ width: i === step ? 24 : 6, height: 6, borderRadius: 3, background: i === step ? '#fff' : 'rgba(255,255,255,.4)', transition: 'all 220ms cubic-bezier(.22,1,.36,1)' }} />
        ))}
      </div>
      <button onClick={() => step < slides.length - 1 ? setStep(step + 1) : onStart()} style={{
        width: '100%', padding: '16px', borderRadius: 18, border: 0,
        background: '#fff', color: FF_INK, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, cursor: 'pointer',
        boxShadow: '0 12px 28px rgba(0,0,0,.15)',
      }}>
        {step < slides.length - 1 ? 'Tiếp theo →' : 'Bắt đầu nào! 🚀'}
      </button>
    </div>
  );
}
