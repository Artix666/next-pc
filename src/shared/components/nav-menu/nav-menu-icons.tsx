import { type FC, type ReactElement } from 'react';

import clsx from 'clsx';

import { BasketIcon, ProfileIcon, StatisticsIcon } from '@/shared/components/icons';

import styles from './nav-menu.module.scss';

interface NavMenuIconsProps {
  className?: string;
}

export const NavMenuIcons: FC<NavMenuIconsProps> = ({ className }): ReactElement => {
  return (
    <ul className={clsx(styles.navMenuIcons, className)}>
      <li>
        <StatisticsIcon className={clsx(styles.navMenuIcon)} />
      </li>
      <li>
        <BasketIcon className={clsx(styles.navMenuIcon)} />
      </li>
      <li>
        <ProfileIcon className={clsx(styles.navMenuIcon)} />
      </li>
    </ul>
  );
};
