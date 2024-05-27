import ContactForm from './ContactForm';
import BusinessInfo from './BusinessInfo';
import Main from '@/components/containers/Main';

export default function ContactPage() {
    return (
        <Main>
            <ContactForm />

            <BusinessInfo />
        </Main>
    );
}
