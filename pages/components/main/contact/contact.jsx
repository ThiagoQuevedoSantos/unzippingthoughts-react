import style from '&/home/main/contact/contact.module.css';
import ContactData from './elements/contact-data';
import Form from './elements/form';

function Contact() {
    return (
        <section id={style.section_contact} className="flex_r">
            <Form />
            <ContactData />
        </section>
    );
}

export default Contact;