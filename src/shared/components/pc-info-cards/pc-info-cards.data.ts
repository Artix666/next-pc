export interface PcInfoCardsItem {
  id: number;
  status: Status;
  imgUrl: string;
  title: string;
  desc: string;
  subtitle: string;
  price: string;
  btnText: 'Конфигурации и цены' | 'Конфигуратор';
  href: `/catalog/lumen` | '/catalog/play' | '/not-found';
}
type Status = 'на заказ' | 'в наличии';

export const PC_INFO_CARDS: PcInfoCardsItem[] = [
  {
    id: 1,
    status: 'в наличии',
    imgUrl: '/play-card.jpg',
    title: 'PLAY',
    desc: 'Видеокарты GeForce RTX 5060, RTX 5070',
    subtitle: 'Идеальный игровой компьютер',
    price: 'от 171 900 ₽ до 409 900 ₽',
    btnText: 'Конфигурации и цены',
    href: '/catalog/play',
  },
  {
    id: 2,
    status: 'в наличии',
    imgUrl: '/lumen-card.jpg',
    title: 'LUMEN',
    desc: 'Видеокарты GeForce RTX 5070, RTX 5080',
    subtitle: 'Эталон идеального компьютера',
    price: 'от 357 100 ₽ до 1 208 100 ₽',
    btnText: 'Конфигурации и цены',
    href: '/catalog/lumen',
  },
  {
    id: 3,
    status: 'на заказ',
    imgUrl: '/build-card.jpg',
    title: 'СОЗДАТЬ СВОЙ',
    desc: 'Любая конфигурация по вашим параметрам',
    subtitle: 'Игровой компьютер на заказ',
    price: 'от 171 900 ₽',
    btnText: 'Конфигуратор',
    href: '/not-found',
  },
];
