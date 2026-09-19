import { type FC, type ReactElement, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }): ReactElement => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
