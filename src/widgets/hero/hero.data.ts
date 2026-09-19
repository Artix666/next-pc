export interface Banner {
  src: string;
  title?: string;
  accent?: string;
  subtitle?: string;
  strongVignette?: boolean;
  btnText?: string;
  href?: '/catalog' | '/service'
}

export const AUTOPLAY_DELAY = 5000;
export const TRANSITION_SPEED = 1200;
export const BANNERS: Banner[] = [
  {
    src: "/banner-1.png",
    title: "Мощь без компромиссов",
    accent: "Мощь",
    subtitle: "Игровые и рабочие станции для любых задач",
  },
  {
    src: "/banner-2.png",
    title: "16 лет создаем мощные компьютеры премиум-класса",
    strongVignette: true,
    btnText: "Выбрать компьютер",
    href: '/catalog'
  },
  {
    src: "/banner-3.png",
    title: "Апгрейд центр",
    subtitle: "Безупречный сервис для вашего компьютера",
    btnText: "Подробнее",
    href: '/service'
  },
];
