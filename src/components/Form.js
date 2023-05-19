import React from 'react'

const Form = () => {
    return (
        // border border-primaryDark rounded-xl bg-light/25 shadow-md drop-shadow
        <form class="w-full max-w-lg p-12  ml-12 lg:ml-3  ">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        Name
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        id="name" type="text" />
                </div>
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        Company
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        id="company" type="text" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                       E-mail
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        id="e-mail" type="email" />
                </div>
                <div class="w-1/2 xs:w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                        phone
                    </label>
                    <input class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                        id="phone" type="tel" />
                </div>
            </div>
            
            <div class="w-full mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-dark/75 text-sm font-bold" for="grid-first-name">
                       How can we help ?
                    </label>
                    <textarea class="appearance-none block w-full bg-transparent  border-primaryDark/60 border-b 
                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-b-2 hover:border-b-2"
                    rows="3"  id="phone" type="tel" />
                </div>
                <div class="mt-9 flex items-center justify-end ">
    
    <button type="submit" class="rounded-md bg-primaryDark px-4 py-3 text-base
     text-primarylight shadow-sm hover:bg-primaryDark hover:shadow-lg  ">Submit</button>
  </div>
        </form>

    )
}

export default Form