interface Props {
  msg: string | null;
  show: boolean;
}

export function Toast({ msg, show }: Props) {
  if (!show) return null;
  return (
    <div style={{
      position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)',
      zIndex: 50, background: '#16102F', color: '#fff', padding: '12px 18px',
      borderRadius: 16, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13,
      boxShadow: '0 12px 28px rgba(22,16,50,.35)', display: 'flex', alignItems: 'center', gap: 8,
      animation: 'ff-fade 220ms cubic-bezier(.22,1,.36,1)',
    }}>
      <span style={{ color: '#3DD9B3' }}>✓</span> {msg}
    </div>
  );
}
