import React from 'react'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [cname, setCname] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const pubkey = "X3kfhXretl4Bh1NBk";
    const serkey = "service_nlwmmsz";
    const temkey = "template_qpuqbz8";

    emailjs.init(pubkey);

    const submit = () => {
        if (name && email && message && phone && cname) {

            const inputfields = {
                name: name,
                cname: cname,
                ctname: "Company:",
                email: email,
                phone: phone,
                message: message,
                toem: "sales@unitedpackaging.biz",
                newo: "United Packaging"
            }

            emailjs.send(serkey, temkey, inputfields)
                .then(response => console.log(response))
                .then(error => console.log(error));

            swal("Submitted!", "Your application reached us, soon our team will get back to you", "success");

            setName('');
            setCname('');
            setEmail('');
            setMessage('');
            setPhone('');
            setEmailSent(true);
        } else {
        }
    }

    return (

        <form class="w-full max-w-lg p-12  ml-12 lg:ml-3">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        Name
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2" type="text"
                        value={name} onChange={e => setName(e.target.value)} required
                    />
                </div>
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        Company
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        type="text" value={cname} onChange={e => setCname(e.target.value)} required
                    />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        E-mail
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        phone
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
                </div>
            </div>

            <div class="w-full mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                    How can we help ?
                </label>
                <textarea class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                    rows="3" type="text" value={message} onChange={e => setMessage(e.target.value)} />
            </div>
            <div class="mt-9 flex items-center justify-end ">

                <button onClick={submit} type="submit" class="rounded-md bg-primaryDark px-4 py-3 text-base
     text-primarylight shadow-sm hover:bg-primaryDark hover:shadow-lg">Submit</button>
                <span className={emailSent ? 'visible' : null}></span>
            </div>
        </form>
    );
};

export default Contact