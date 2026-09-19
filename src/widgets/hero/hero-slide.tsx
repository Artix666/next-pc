import Image from 'next/image';
import Link from 'next/link';
import { type FC, type ReactElement } from 'react';

import clsx from 'clsx';

import { Button } from '@/shared/components';

import { type Banner } from './hero.data';
import styles from './hero.module.scss';

interface HeroSlideProps {
  banner: Banner;
  index: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const renderTitle = (title: string, accent?: string) => {
  if (!accent || !title.includes(accent)) {
    return title;
  }

  const [before, after] = title.split(accent);

  return (
    <>
      {before}
      <span className={styles.heroAccent}>{accent}</span>
      {after}
    </>
  );
};

export const HeroSlide: FC<HeroSlideProps> = ({
  banner,
  index,
  onMouseEnter,
  onMouseLeave,
}): ReactElement => (
  <div
    className={clsx(styles.heroSlide, {
      [styles.heroSlideStrong]: banner.strongVignette,
    })}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Image fill src={banner.src} alt={`Баннер ${index + 1}`} priority={index === 0} />
    {banner.title || banner.subtitle ? (
      <div
        className={styles.heroCaption}
        style={{
          bottom: index === 0 ? '90px' : '65px',
        }}
      >
        {banner.title ? (
          <p className={styles.heroCaptionTitle}>{renderTitle(banner.title, banner.accent)}</p>
        ) : null}
        {banner.subtitle ? <p className={styles.heroCaptionSubtitle}>{banner.subtitle}</p> : null}
        {banner.btnText && banner.href && (
          <Link href={banner.href}>
            <Button className={clsx(styles.heroCaptionBtn)} text={banner.btnText} />
          </Link>
        )}
      </div>
    ) : null}
  </div>
);
