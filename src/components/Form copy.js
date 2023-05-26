import React from 'react'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { useState } from 'react';

const Form = () => {

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        const inputfields = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
            toem: 'impelexportscontactus@gmail.com',
            site: 'UPC',
        };

        emailjs.sendForm('service_nlwmmsz', 'template_qpuqbz8', e.target, 'X3kfhXretl4Bh1NBk')
            .then(() => {
                swal('Submitted!', 'Your application reached us, soon our team will get back to you', 'success')
                    .then(() => {
                        window.location.reload();
                    });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        // border border-primaryDark rounded-xl bg-light/25 shadow-md drop-shadow
        <form onSubmit={handleSubmit} class="w-full max-w-lg p-12  ml-12 lg:ml-3">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        Name
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        id="name" type="text" name='name' />
                </div>
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        Company
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        id="company" type="text" name='company' />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        E-mail
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        id="e-mail" type="email" name='email' />
                </div>
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        phone
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        id="phone" type="tel" name='phone' />
                </div>
            </div>

            <div class="w-full mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                    How can we help ?
                </label>
                <textarea class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                    rows="3" id="note" type="text" name='message' />
            </div>
            <div class="mt-9 flex items-center justify-end ">

                <button type="submit" class="rounded-md bg-primaryDark px-4 py-3 text-base
     text-primarylight shadow-sm hover:bg-primaryDark hover:shadow-lg  "disabled={submitting}>
                    {submitting ? 'Just a moment...' : 'Submit'}</button>
            </div>
        </form>

    )
}

export default Form