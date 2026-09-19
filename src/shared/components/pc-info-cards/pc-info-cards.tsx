import clsx from "clsx";
import { type FC, type ReactElement } from "react";
import styles from "./pc-info-cards.module.scss";
import { PC_INFO_CARDS } from "./pc-info-cards.data";
import { PcInfoCard } from "./pc-info-card/pc-info-card";

interface PcInfoCardsProps {
  className?: string;
  isVisible?: boolean;
}

export const PcInfoCards: FC<PcInfoCardsProps> = ({
  className,
  isVisible,
}): ReactElement => {
  console.log(isVisible);

  return (
    <ul className={clsx(styles.pcInfoCards, className)}>
      {PC_INFO_CARDS.map((card, i) => (
        <li
          className={clsx(
            styles.pcInfoCardsItem,
            isVisible && styles.pcInfoCardsItemActive,
          )}
          key={card.id}
          style={{
            transitionDelay: `${i * 150}ms`,
          }}
        >
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
