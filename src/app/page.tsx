import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>
          Get started by editing{' '}
          <code className={styles.code}>src/app/page.tsx</code>.
        </p>
      </main>
    </div>
  );
}
