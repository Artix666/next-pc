import { type FC, type ReactElement } from 'react';

import { Hero, PcInfo } from '@/widgets';

export const Home: FC = (): ReactElement => {
  return (
    <>
      <Hero />
      <PcInfo />
    </>
  );
};
