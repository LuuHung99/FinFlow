interface Props {
  pct: number;
  height?: number;
  gradient?: string;
}

export function ProgressBar({ pct, height = 8, gradient = 'linear-gradient(90deg,#7C3AED,#FF6B9D)' }: Props) {
  const p = Math.max(0, Math.min(100, pct));
  return (
    <div style={{ height, background: '#EDE4FF', borderRadius: 999, overflow: 'hidden' }}>
      <div style={{
        height: '100%', width: `${p}%`, background: gradient, borderRadius: 999,
        transition: 'width 600ms cubic-bezier(.22,1,.36,1)',
      }} />
    </div>
  );
}
