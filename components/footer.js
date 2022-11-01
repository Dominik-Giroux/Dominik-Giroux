import { useRouter } from "next/router";
import Link from "next/link";

const navigation = {
  main: [
    {
      name: {
        en: "Home",
        fr: "Accueil"
      },
      url: "/"
    },
    {
      name: {
        en: "Blog",
        fr: "Blog"
      },
      url: "/blog"
    },
    {
      name: {
        en: "Services",
        fr: "Services"
      },
      url: "/services"
    },
    {
      name: {
        en: "Case studies",
        fr: "Études de cas"
      },
      url: "/case-studies"
    },
    {
      name: {
        en: "Contact",
        fr: "Contact"
      },
      url: "/contact"
    }
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dominikgiroux/",
      icon: props => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,17H6.5v-7H9V17z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2s0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2S8.6,8.7,7.7,8.7z M18,17h-2.4v-3.8c0-1.1-0.7-1.3-0.9-1.3 s-1.1,0.2-1.1,1.3c0,0.2,0,3.8,0,3.8h-2.5v-7h2.5v1c0.3-0.6,1-1,2.2-1s2.2,1,2.2,3.2V17z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/Dominik-Giroux",
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ]
};

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-zinc-900">
      <div className="px-main mx-auto max-w-7xl overflow-hidden py-12">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map(item => (
            <div key={item.name[router.locale]} className="px-5 py-2">
              <Link
                href={item.url ? item.url : "/"}
                className={`nav-link ${
                  `/${item.url}` == router.asPath ? "underline" : ""
                } text-base text-white hover:text-zinc-100`}>
                {item.name[router.locale]}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map(item => (
            <a key={item.name} href={item.href} className="text-white hover:text-zinc-100">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center">
          {router.locale == "en" && (
            <Link
              href={router.route}
              locale="fr"
              className="flex items-center justify-center gap-2 font-black text-white decoration-teal-500 decoration-4 underline-offset-2 transition hover:underline">
              Français{" "}
              <span>
                <svg viewBox="0 0 64 64" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32,7.448C18.461,7.448,7.449,18.462,7.449,32c0,13.538,11.013,24.552,24.551,24.552   c13.538,0,24.551-11.014,24.551-24.552C56.551,18.462,45.538,7.448,32,7.448z M39.68,45.697v-5.55h1.261v5.55H39.68z M53.235,32   c0,0.351-0.036,0.694-0.053,1.041l-0.41-0.41l-3.152,3.152l-3.082-3.082h-2.601l-0.963,0.961l-4.557-4.556v-2.153h-4.438   l-2.544-2.544l-3.129,3.13h3.349l1.306,1.306H36.6l5.904,5.904v1.87l-3.528,3.528v5.746l-4.292,4.292h-1.794l-2.765-2.764v-7.469   l-1.939-1.941h-3.104l-3.201-3.199v-3.491l4.509-3.782v-4.123l7.275-7.273l2.182,2.182h5.044l3.525-3.525   C49.751,18.657,53.235,24.914,53.235,32z M18.312,15.778c0.73-0.616,1.506-1.176,2.316-1.69h9.044l-4.511,4.51h-2.989l-2.12,2.12   h-1.74V15.778z M15.335,18.865v4.212l-3.965,3.965C12.097,24.011,13.465,21.235,15.335,18.865z M10.865,33.997l9.417,7.119v3.492   l-2.803,2.859C13.811,44.021,11.36,39.299,10.865,33.997z"></path>
                </svg>
              </span>
            </Link>
          )}
          {router.locale == "fr" && (
            <Link
              href={router.route}
              locale="en"
              className="flex items-center justify-center gap-2 font-black text-white decoration-teal-500 decoration-4 underline-offset-2 transition hover:underline">
              English{" "}
              <span>
                <svg viewBox="0 0 64 64" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32,7.448C18.461,7.448,7.449,18.462,7.449,32c0,13.538,11.013,24.552,24.551,24.552   c13.538,0,24.551-11.014,24.551-24.552C56.551,18.462,45.538,7.448,32,7.448z M39.68,45.697v-5.55h1.261v5.55H39.68z M53.235,32   c0,0.351-0.036,0.694-0.053,1.041l-0.41-0.41l-3.152,3.152l-3.082-3.082h-2.601l-0.963,0.961l-4.557-4.556v-2.153h-4.438   l-2.544-2.544l-3.129,3.13h3.349l1.306,1.306H36.6l5.904,5.904v1.87l-3.528,3.528v5.746l-4.292,4.292h-1.794l-2.765-2.764v-7.469   l-1.939-1.941h-3.104l-3.201-3.199v-3.491l4.509-3.782v-4.123l7.275-7.273l2.182,2.182h5.044l3.525-3.525   C49.751,18.657,53.235,24.914,53.235,32z M18.312,15.778c0.73-0.616,1.506-1.176,2.316-1.69h9.044l-4.511,4.51h-2.989l-2.12,2.12   h-1.74V15.778z M15.335,18.865v4.212l-3.965,3.965C12.097,24.011,13.465,21.235,15.335,18.865z M10.865,33.997l9.417,7.119v3.492   l-2.803,2.859C13.811,44.021,11.36,39.299,10.865,33.997z"></path>
                </svg>
              </span>
            </Link>
          )}
        </p>
        <p className="mt-8 text-center text-base text-white">
          Dominik Giroux {new Date().getFullYear()} ©{" "}
          {router.locale == "fr" ? "Tous droits réservés." : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
