import styles from '../../page.module.css';
import ContactForm from '../forms/ContactForm';
import HeroSection from '../hero/HeroSection';
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
