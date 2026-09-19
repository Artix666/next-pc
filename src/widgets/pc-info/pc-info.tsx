import clsx from "clsx";
import { type FC, type ReactElement } from "react";
import styles from "./pc-info.module.scss";
import { Container, PcInfoCards, SectionTitle } from "@/shared/components";

interface PcInfoProps {
  className?: string;
}

export const PcInfo: FC<PcInfoProps> = ({ className }): ReactElement => {
  return (
    <section className={clsx(styles.pcInfo, className)}>
      <Container>
        <SectionTitle
          title="Игровые компьютеры."
          subtitle="Серия PLAY и LUMEN"
        />
        <PcInfoCards />
      </Container>
    </section>
  );
};
