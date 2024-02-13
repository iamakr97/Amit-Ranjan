import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacts.css';
import { SiMinutemailer } from "react-icons/si";
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';

function Contacts() {
    const [isLoading, setIsLoading] = useState(false);

    const [mailData, setMailData] = useState(
        {
            email: "",
            name: "",
            subject: "",
            message: ""
        }
    )
    function changeHandler(e) {
        e.preventDefault();
        setMailData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    }
    function submitHandler(e) {
        e.preventDefault();
        setIsLoading(true);
        // console.log(mailData);
        const load = toast.loading("Please Wait");
        const templateParams = {
            from_name: mailData.name,
            from_email: mailData.email,
            to_name: "Amit Kumar Ranjan",
            message: mailData.message,
            subject: mailData.subject
        }
        const template_id = "template_rgg5bt1";
        const service_id = "service_h5988em";
        const public_key = "tMCfJ3g1uC5_9MUOC";
        emailjs.send(service_id, template_id, templateParams, public_key)
            .then((res) => {
                setIsLoading(false);
                // console.log("Mail sent");
                setMailData({
                    email: "",
                    name: "",
                    subject: "",
                    message: ""
                });
            })
            .catch(error => {
                toast.error("Something Went Wrong, try again")
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
                toast.dismiss(load);
                toast.success("Mail Sent Successfully")
            })

    }

    return (
        <div>
            <h1 className='contact-heading'>Contact</h1>
            <p className='contact-desc'>Feel free to reach out to me for any questions or opportunities!</p>
            <form onSubmit={(e) => submitHandler(e)} className='form-container'>
                <h2>Email Me <SiMinutemailer /> </h2>
                <input
                    type="email"
                    required
                    onChange={(e) => changeHandler(e)}
                    value={mailData.email}
                    name='email'
                    id='email'
                    placeholder='Your Email'
                />
                <input
                    type="text"
                    required
                    onChange={(e) => changeHandler(e)}
                    value={mailData.name}
                    name='name'
                    id='name'
                    placeholder='Your Name'
                />
                <input
                    type="text"
                    required
                    onChange={(e) => changeHandler(e)}
                    value={mailData.subject}
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                />
                <textarea
                    type="text"
                    required
                    onChange={(e) => changeHandler(e)}
                    value={mailData.message}
                    id='message'
                    name='message'
                    placeholder='message'
                    className='message-box'
                />
                <button type='submit' className='contact-send-btn'>
                    {isLoading
                        ?
                        (<Loader />)
                        :
                        <p>Send</p>
                    }
                </button>
            </form>
        </div>
    );
}

export default Contacts;