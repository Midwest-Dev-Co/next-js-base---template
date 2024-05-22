import Main from '@/components/Containers/Main';
import ContactForm from './ContactForm';
import BusinessInfo from './BusinessInfo';

export default function ContactPage() {
  return (
    <Main>
      <ContactForm />

      <BusinessInfo />
    </Main>
  );
}
