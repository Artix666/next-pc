import clsx from "clsx";
import { type FC, type ReactElement } from "react";
import styles from "./pc-info-cards.module.scss";
import { PC_INFO_CARDS } from "./pc-info-cards.data";
import { PcInfoCard } from "./pc-info-card/pc-info-card";

interface PcInfoCardsProps {
  className?: string;
}

export const PcInfoCards: FC<PcInfoCardsProps> = ({
  className,
}): ReactElement => {
  return (
    <ul className={clsx(styles.pcInfoCards, className)}>
      {PC_INFO_CARDS.map((card) => (
        <li key={card.id}>
          <PcInfoCard
            href={card.href}
            btnText={card.btnText}
            imgUrl={card.imgUrl}
            status={card.status}
            title={card.title}
            desc={card.desc}
            subtitle={card.subtitle}
            price={card.price}
          />
        </li>
      ))}
    </ul>
  );
};
