import Heading from "../components/sections/Heading";
import { getMenu } from "../libs/menus";
import { getSection } from "../libs/sections";
import { useRef, useState } from "react";

const submitBtn = {
  en: "Submit",
  fr: "Envoyer"
};

const success = {
  en: "Your message has been sent successfully.",
  fr: "Votre message a été envoyé avec succès."
};

export default function Home({ context, title, description, sections }) {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const messageRef = useRef(null);
  const [response, setResponse] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const body = JSON.stringify({
      email: emailRef.current.value,
      name: nameRef.current.value,
      company: companyRef.current.value,
      message: messageRef.current.value
    });

    const res = await fetch("/api/contact", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body
    });

    const { error } = await res.json();

    if (error) {
      setResponse(error[context.locale] ? error[context.locale] : error);
      return;
    }

    // Reset Form
    emailRef.current.value = "";
    nameRef.current.value = "";
    companyRef.current.value = "";
    messageRef.current.value = "";
    setResponse(success[context.locale]);
  };

  return (
    <>
      <main className="py-8 text-center">
        <section className="relative mx-auto my-8 flex  flex-col items-center justify-center gap-4 bg-gradient-to-r from-teal-500  to-purple-500 py-16 pb-[200px] text-center xl:pb-[250px]">
          <div className="absolute top-0 z-10 h-24 w-full">
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
          <h1 className="max-w-2x mx-auto text-5xl font-black text-white drop-shadow-lg">{title}</h1>
          <p className="mx-auto max-w-xl text-xl font-semibold text-white drop-shadow-lg">{description}</p>
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-xs flex w-full flex-col gap-4 rounded bg-zinc-100 bg-opacity-40 p-4 shadow md:w-auto md:p-8 lg:min-w-[600px] ">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-grow flex-col gap-2">
                <label className="label" htmlFor="name">
                  Your name <span className="text-red-500">*</span>
                </label>
                <input ref={nameRef} className="input" name="name" id="name" type="text" required />
              </div>
              <div className="flex flex-grow flex-col gap-2">
                <label className="label" htmlFor="company">
                  Company
                </label>
                <input ref={companyRef} className="input" name="company" id="company" type="text" />
              </div>
            </div>
            <div className="flex flex-grow flex-col gap-2">
              <label className="label" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input ref={emailRef} className="input" name="email" id="email" type="email" required />
            </div>
            <div className="flex flex-grow flex-col gap-2">
              <label className="label" htmlFor="email">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea ref={messageRef} className="input" name="message" id="message" required />
            </div>
            <button
              className="rounded-xl border bg-gradient-to-br from-purple-500 to-pink-400 py-2 font-black text-white shadow-lg"
              type="submit">
              {submitBtn[context.locale]}
            </button>
            <div className="mt-2 text-zinc-900">{response ? response : ``}</div>
          </form>
          <div className="h-150 absolute bottom-0 z-10 w-full">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="white">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
          </div>
        </section>
        <Heading context={context} heading={sections.heading} />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const meta = {
    title: {
      en: "Contact",
      fr: "Contact"
    },
    description: {
      en: "Tell me more about your project and it'll be my pleasure to discuss it further with you.",
      fr: "Dites-m'en plus sur votre projet et il me fera plaisir d'en discuter davantage avec vous."
    }
  };
  const menu = await getMenu("main");
  const heading = await getSection("contactHeading");
  const sections = {
    heading
  };
  return {
    props: {
      context,
      meta,
      menu,
      sections
    }
  };
}
