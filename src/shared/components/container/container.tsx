import clsx from "clsx";
import { ReactNode, type FC, type ReactElement } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
}): ReactElement => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
