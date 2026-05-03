interface BadgeProps {
  variant?: 'date' | 'drive' | 'ok' | 'warning' | 'red';
  children: React.ReactNode;
}

const variantClass: Record<NonNullable<BadgeProps['variant']>, string> = {
  date:    'b-d',
  drive:   'b-dr',
  ok:      'b-ok',
  warning: 'b-w',
  red:     'b-r',
};

export default function Badge({ variant = 'date', children }: BadgeProps) {
  return (
    <span className={`b ${variantClass[variant]}`}>{children}</span>
  );
}
