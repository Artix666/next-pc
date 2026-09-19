"use client";

import { type FC, type ReactElement, useEffect, useRef, useState } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import clsx from "clsx";

import { AUTOPLAY_DELAY, BANNERS, TRANSITION_SPEED } from "./hero.data";
import { HeroSlide } from "./hero-slide";
import { useHeroPause } from "./use-hero-pause";
import styles from "./hero.module.scss";

interface HeroProps {
  className?: string;
}

export const Hero: FC<HeroProps> = ({ className }): ReactElement => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const { paused, sectionRef, handleMouseEnter, handleMouseLeave } =
    useHeroPause();

  const elapsedRef = useRef(0);
  const pausedRef = useRef(paused);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    if (!swiper) {
      return;
    }

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(now - last, 100);
      last = now;

      if (!pausedRef.current) {
        elapsedRef.current += delta;

        const progress = Math.min(elapsedRef.current / AUTOPLAY_DELAY, 1);
        const bullet = swiper.pagination.bullets[swiper.activeIndex];

        bullet?.style.setProperty("--hero-progress", `${progress * 100}%`);

        if (progress >= 1) {
          elapsedRef.current = 0;

          if (swiper.activeIndex >= swiper.slides.length - 1) {
            swiper.slideTo(0);
          } else {
            swiper.slideNext();
          }
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [swiper]);

  const handleSlideChange = (instance: SwiperClass) => {
    elapsedRef.current = 0;
    instance.pagination.bullets[instance.activeIndex]?.style.setProperty(
      "--hero-progress",
      "0%",
    );
  };

  return (
    <section ref={sectionRef} className={clsx(styles.hero, className)}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.05}
        centeredSlides
        spaceBetween={24}
        speed={TRANSITION_SPEED}
        pagination={{ clickable: true }}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        className={clsx(styles.heroSlider, { [styles.heroPaused]: paused })}
      >
        {BANNERS.map((banner, index) => (
          <SwiperSlide key={banner.src}>
            <HeroSlide
              banner={banner}
              index={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
