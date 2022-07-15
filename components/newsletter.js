import Link from "next/link";

const newsletter = {
  title: {
    en: "Newsletter",
    fr: "Info-lettre"
  },
  description: {
    en: "Subscribe to our newsletter to get the latest news and updates.",
    fr: "Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et mises à jour."
  },
  privacyWarning: {
    en: "We care about the protection of your data. Read our ",
    fr: "Nous prenons soin de la protection de vos données. Lisez notre "
  },
  privacyPolicy: {
    en: "privacy policy",
    fr: "politique de confidentialité"
  },
  url: {
    en: "privacy-policy",
    fr: "politique-de-confidentialite"
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
      en: "Notify me",
      fr: "Notifier moi"
    }
  }
};

export default function Newsletter({ context }) {
  return (
    <div className="bg-gradient-to-b from-purple-500 to-teal-500 md:bg-gradient-to-r">
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
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-500 px-5 py-3 text-base font-medium text-white transition hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                {newsletter.form.submit[context.locale]}
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-zinc-100">
            <span>{newsletter.privacyWarning[context.locale]}</span>
            <Link href={newsletter.url[context.locale]}>
              <a className="font-medium text-white underline">{newsletter.privacyPolicy[context.locale]}</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
