import { Container, NavMenu, NavMenuIcons } from "@/shared/components";
import { LogoIcon } from "@/shared/components/icons";
import clsx from "clsx";
import styles from "./header.module.scss";
import { type FC, type ReactElement } from "react";

export const Header: FC = (): ReactElement => {
  return (
    <header className={clsx(styles.header)}>
      <Container className={clsx(styles.headerContainer)}>
        <nav className={clsx(styles.headerNav)}>
          <ul className={clsx(styles.headerNavList)}>
            <li>
              <LogoIcon className={clsx(styles.headerNavLogo)} />
            </li>
            <li>
              <NavMenu />
            </li>
            <li>
              <NavMenuIcons />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
