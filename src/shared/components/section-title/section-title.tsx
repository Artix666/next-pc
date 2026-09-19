import clsx from "clsx";
import styles from "./section-title.module.scss";
import { type FC, type ReactElement } from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({
  subtitle,
  title,
}): ReactElement => {
  return (
    <h2 className={clsx(styles.sectionTitleWrap)}>
      <span className={clsx(styles.sectionTitle)}>{title}</span>
      <span className={clsx(styles.sectionTitleAccent)}>{subtitle}</span>
    </h2>
  );
};
