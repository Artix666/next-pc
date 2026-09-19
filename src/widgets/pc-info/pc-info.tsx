"use client";
import clsx from "clsx";
import { type FC, type ReactElement } from "react";
import styles from "./pc-info.module.scss";
import { Container, PcInfoCards, SectionTitle } from "@/shared/components";
import { useInView } from "@/shared/hooks";

interface PcInfoProps {
  className?: string;
}

export const PcInfo: FC<PcInfoProps> = ({ className }): ReactElement => {
  const { isVisible, ref: sectionRef } = useInView("default");

  return (
    <section ref={sectionRef} className={clsx(styles.pcInfo, className)}>
      <Container>
        <SectionTitle
          className={clsx(styles.pcInfoTitle)}
          title="Игровые компьютеры."
          subtitle="Серия PLAY и LUMEN"
        />
        <PcInfoCards isVisible={isVisible} />
      </Container>
    </section>
  );
};
