import { type FC, type ReactElement } from 'react';

import clsx from 'clsx';

import styles from './section-title.module.scss';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({
  subtitle,
  title,
  className,
}): ReactElement => {
  return (
    <h2 className={clsx(styles.sectionTitleWrap, className)}>
      <span className={clsx(styles.sectionTitle)}>{title}</span>
      <span className={clsx(styles.sectionTitleAccent)}>{subtitle}</span>
    </h2>
  );
};
