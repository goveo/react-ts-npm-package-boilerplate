import './Button.css';

import React, { useRef } from 'react';

import { useHover } from '../../hooks/useHover';

export interface ButtonProps {
  text: string;
  type?: 'success' | 'warning' | 'error';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  // For testing purpose
  const { isHovered } = useHover(ref);

  return (
    <button
      ref={ref}
      className={[
        'button',
        type ? `button-${type}` : '',
        isHovered ? 'button--hovered' : '',
      ]
        .join(' ')
        .trim()}
      style={{
        opacity: isHovered ? 0.7 : 1,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
