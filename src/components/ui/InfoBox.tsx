interface InfoBoxProps {
  variant?: 'default' | 'warning' | 'danger' | 'success';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const variantClass: Record<NonNullable<InfoBoxProps['variant']>, string> = {
  default: '',
  warning: 'w',
  danger:  'd',
  success: 's',
};

export default function InfoBox({ variant = 'default', children, style }: InfoBoxProps) {
  const extra = variantClass[variant];
  return (
    <div className={`ib${extra ? ` ${extra}` : ''}`} style={style}>
      {children}
    </div>
  );
}
