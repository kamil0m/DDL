import ContactForm from '../components/ContactForm';
import homebackground from "../styles/images/homebackground.png";

export default function Contact() {
    return (
        <div className="relative flex flex-col min-h-screen">
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover before:content-[''] before:absolute before:inset-0 before:bg-white/50"
                style={{ backgroundImage: `url(${homebackground})` }}
            ></div>
            <div >
                <ContactForm />
            </div>
        </div>
    )
}