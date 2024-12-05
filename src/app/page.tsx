import styles from './page.module.css';
import ContactForm from './components/form/ContactForm';
export default function Home() {
  return (
    <>
      <ContactForm />
      <p>
        Get started by editing{' '}
        <code className={styles.code}>src/app/page.tsx</code>.
      </p>
    </>
  );
}
