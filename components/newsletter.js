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
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              {newsletter.form.email.label[context.locale]}
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
              placeholder={newsletter.form.email.placeholder[context.locale]}
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                {newsletter.form.submit[context.locale]}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
