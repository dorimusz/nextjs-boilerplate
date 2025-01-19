import styles from './page.module.css';
import ContactForm from './components/form/ContactForm';
import HeroSection from './components/hero/HeroSection';
export default function Home() {
  return (
    <>
      <HeroSection />
      <ContactForm />
      <p>
        Get started by editing{' '}
        <code className={styles.code}>src/app/page.tsx</code>.
      </p>
    </>
  );
}
