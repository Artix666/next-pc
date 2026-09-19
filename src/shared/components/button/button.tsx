import { type FC, type ReactElement } from 'react';

import clsx from 'clsx';

import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: FC<ButtonProps> = ({ className, variant = 'primary', text }): ReactElement => {
  return (
    <button className={clsx(styles.button, styles[`button--${variant}`], className)}>{text}</button>
  );
};
