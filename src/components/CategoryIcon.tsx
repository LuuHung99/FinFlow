import { CATEGORIES } from '../lib/categories';

interface Props {
  cat: string;
  size?: number;
}

export function CategoryIcon({ cat, size = 44 }: Props) {
  const c = CATEGORIES[cat] || CATEGORIES.home;
  const IconCmp = c.icon;
  return (
    <div style={{
      width: size, height: size, borderRadius: size,
      background: c.bg, color: c.color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <IconCmp width={size * 0.5} height={size * 0.5} />
    </div>
  );
}
