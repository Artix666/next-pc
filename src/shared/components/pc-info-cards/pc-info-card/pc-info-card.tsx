import Image from 'next/image';
import Link from 'next/link';
import { type FC, type ReactElement } from 'react';

import clsx from 'clsx';

import { Button } from '@/shared/components';
import { type PcInfoCardsItem } from '@/shared/components/pc-info-cards';

import styles from './pc-info-card.module.scss';

type PcInfoCardProps = Omit<PcInfoCardsItem, 'id'> & {
  className?: string;
};

export const PcInfoCard: FC<PcInfoCardProps> = ({
  className,
  status,
  imgUrl,
  title,
  desc,
  subtitle,
  price,
  btnText,
  href,
}): ReactElement => {
  return (
    <div className={clsx(styles.pcInfoCard, className)}>
      <span
        className={clsx(
          styles.pcInfoCardStatus,
          status === 'на заказ' ? styles.pcInfoCardStatusAccent : null
        )}
      >
        {status}
      </span>
      <Image
        src={imgUrl}
        alt={`Изображение ${subtitle}`}
        width={453}
        height={423}
        className={clsx(styles.pcInfoCardImage)}
      />

      <div className={clsx(styles.pcInfoCardInfoWrap)}>
        <span className={clsx(styles.pcInfoCardTitle)}>{title}</span>
        <span className={clsx(styles.pcInfoCardDesc)}>{desc}</span>
        <span className={clsx(styles.pcInfoCardSubTitle)}>{subtitle}</span>
        <span className={clsx(styles.pcInfoCardPrice)}>{price}</span>
      </div>
      <div className={clsx(styles.pcInfoCardBtnWrap)}>
        <Link href={href}>
          <Button text={btnText} />
        </Link>
      </div>
    </div>
  );
};
