import ContactForm from './ContactForm';
import { FiDownload } from 'react-icons/fi';
import { BiLogoFacebookCircle } from "react-icons/bi";

export default function ContactSection() {
    return (
        <section className="flex flex-row justify-center items-between mt-40 gap-6">
            <div className="flex flex-col justify-center w-1/2 gap-6">
                <h2>Contact Us</h2>
                <h3>Get In Touch With Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id fugit pariatur dicta inventore, consequuntur error sequi deleniti earum, eveniet quidem maxime distinctio.</p>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-zinc-200 p-5 rounded-lg">
                            <BiLogoFacebookCircle className="text-blue-600 text-4xl" />
                        </div>
                        <div>
                            <p className="font-semibold underline text-black text-xl">Facebook Group</p>
                            <p className="text-xl">Join us on Facebook !</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-zinc-200 p-5 rounded-lg">
                            <BiLogoFacebookCircle className="text-blue-600 text-4xl" />
                        </div>
                        <div>
                            <p className="font-semibold underline text-black text-xl">Facebook Page</p>
                            <p className="text-xl">Stay informed of our latest event and next meet ups !</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-zinc-200 p-5 rounded-lg">
                            <FiDownload className="text-blue-600 text-3xl" />
                        </div>
                        <div>
                            <p className="font-semibold text-black text-xl">Download your Lille Guide below</p>
                            <a href="#" className="underline text-xl text-darkgrey font-light">Click here to get your guide</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center w-1/2 gap-8">
                < ContactForm />
            </div>

        </section >
    )

}