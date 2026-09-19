import Link from 'next/link';

import { Container } from '@/shared/components';

export default function NotFound() {
  return (
    <main>
      <Container>
        <h1
          style={{
            paddingTop: '100px',
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          Данная страница находится на этапе разработки
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link href="/home">Вернуться на главную</Link>
        </div>
      </Container>
    </main>
  );
}
