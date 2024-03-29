import { CSSProperties, ReactNode, useState } from 'react';

interface ToggleProps {
  onChange: (checked: boolean) => void;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Toggle(props: ToggleProps) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    props.onChange(!checked);
  };

  const className = [props.className, 'toggle-container']
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...props.style,
      }}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}
