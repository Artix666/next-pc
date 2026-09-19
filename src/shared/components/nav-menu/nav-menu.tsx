import clsx from "clsx";
import { type FC, type ReactElement } from "react";
import styles from "./nav-menu.module.scss";
import Link from "next/link";

interface NavMenuProps {
  className?: string;
}

const NAV_MENU = [
  { label: "home", value: "Главная" },
  { label: "catalog", value: "Каталог" },
  { label: "service", value: "Услуги" },
  { label: "company", value: "Компания" },
];

export const NavMenu: FC<NavMenuProps> = ({ className }): ReactElement => {
  return (
    <ul className={clsx(styles.navMenu, className)}>
      {NAV_MENU.map((item) => (
        <li className={clsx(styles.navMenuItem)} key={item.label}>
          <Link href={item.label}>{item.value}</Link>
        </li>
      ))}
    </ul>
  );
};
