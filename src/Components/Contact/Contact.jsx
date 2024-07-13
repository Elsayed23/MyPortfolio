import React, { useRef } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import SEO from '../Reuseable/SEO';
import SecTitle from '../Reuseable/SecTitle';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const [initialData, setInitialData] = React.useState({
        name: '',
        email: '',
        message: ''
    })


    const handleChange = ({ target }) => {
        const { value, name } = target

        setInitialData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const form = useRef()

    const sendMessage = (e) => {
        e.preventDefault()

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then(() => {
                toast.success('The message was send', {
                    className: 'text-[#198754]',
                    duration: '300'
                })
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <SEO title='Contact Me' desc='please feel free to send me an email using this page' />
            <div className="contact container mx-auto py-36 min-h-[calc(100vh-129px)] md:px-6">
                <Toaster position="top-center" />
                <SecTitle title='get in touch' someClasses='font-semibold capitalize' />
                <section>
                    <div className="container px-4 md:px-12">
                        <div
                            className="block rounded-lg bg-transparent px-6 py-12 md:py-16 md:px-12">
                            <div className="mb-24 grid gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-4 text-white">
                                <div className="mx-auto mb-12 text-center lg:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                        stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                    </svg>
                                    <h6 className="font-medium">Egypt</h6>
                                </div>
                                <div className="mx-auto mb-12 text-center lg:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                        stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <h6 className="font-medium">Al-Sharqia</h6>
                                </div>
                                <div className="mx-auto mb-12 text-center md:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                        stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <h6 className="font-medium">+20 1152989114</h6>
                                </div>
                                <div className="mx-auto text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-6 h-8 w-8 text-primary" fill='#ffffff' height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                                    <h6 className="font-medium">elsayedkewan123@gmail.com</h6>
                                </div>
                            </div>
                            <div className="form mx-auto max-w-[700px]">
                                <h1 className="text-white text-4xl font-semibold text-center mb-6 capitalize">send message</h1>
                                <form ref={form} onSubmit={sendMessage}>
                                    <div className="mb-8 flex flex-col gap-10">
                                        <Input size="lg" value={initialData.name} autoComplete="off" onChange={handleChange} label="Name" variant="standard" color="teal" name="name" className="text-white" />
                                        <Input size="lg" value={initialData.email} autoComplete="off" onChange={handleChange} label="Email" variant="standard" color="teal" name="email" className="text-white" />
                                        <Textarea size="lg" value={initialData.message} onChange={handleChange} label="Message" variant="standard" color="teal" name="message" className="text-white" />
                                    </div>
                                    <Button color='teal' type='submit' disabled={!initialData.name || !initialData.email || !initialData.message} size='md' variant='outlined' className="focus:ring-0">Send</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Contact;