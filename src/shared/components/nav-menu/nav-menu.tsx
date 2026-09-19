'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type FC, type ReactElement } from 'react';

import clsx from 'clsx';

import styles from './nav-menu.module.scss';

interface NavMenuProps {
  className?: string;
}

const NAV_MENU = [
  { label: '/home', value: 'Главная' },
  { label: '/catalog', value: 'Каталог' },
  { label: '/service', value: 'Услуги' },
  { label: '/company', value: 'Компания' },
];

export const NavMenu: FC<NavMenuProps> = ({ className }): ReactElement => {
  const pathname = usePathname();

  return (
    <ul className={clsx(styles.navMenu, className)}>
      {NAV_MENU.map((item) => (
        <li className={clsx(styles.navMenuItem)} key={item.label}>
          <Link
            className={clsx(pathname.includes(item.label) && styles.navMenuLinkActive)}
            href={item.label}
          >
            {item.value}
          </Link>
        </li>
      ))}
    </ul>
  );
};
