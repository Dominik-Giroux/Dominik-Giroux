import React, { useRef, useState } from "react";

const newsletter = {
  title: {
    en: "Newsletter",
    fr: "Info-lettre"
  },
  description: {
    en: "Subscribe to get the latest digital marketing trends.",
    fr: "Abonnez-vous pour recevoir les plus récentes stratégies de marketing numérique."
  },
  form: {
    email: {
      label: {
        en: "Email address",
        fr: "Courriel"
      },
      placeholder: {
        en: "Enter your email",
        fr: "Entrez votre courriel"
      }
    },
    submit: {
      en: "Subscribe",
      fr: "M'abonner"
    }
  }
};

export default function Newsletter({ context }) {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const emailRef = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async e => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: emailRef.current.value
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    emailRef.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-400 md:bg-gradient-to-r">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
            {newsletter.title[context.locale]}
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-zinc-100">{newsletter.description[context.locale]}</p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form onSubmit={subscribe} className="sm:flex">
            <label htmlFor="email-input" className="sr-only">
              {newsletter.form.email.label[context.locale]}
            </label>
            <input
              ref={emailRef}
              id="email-input"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
              placeholder={newsletter.form.email.placeholder[context.locale]}
              required
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                {newsletter.form.submit[context.locale]}
              </button>
            </div>
          </form>
          <div className="mt-2 text-white">{message ? message : ``}</div>
        </div>
      </div>
    </div>
  );
}
