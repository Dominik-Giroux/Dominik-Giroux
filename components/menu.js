import Link from "next/link";
import Image from "next/image";
import Avatar from "../public/img/avatar.png";
import { useRouter } from "next/router";

export default function Menu({ menu }) {
  const router = useRouter();
  return (
    <header className="bg-transparent text-xl font-black">
      <nav className="px-main mx-auto flex max-w-7xl flex-col justify-between gap-4 py-4 lg:flex-row xl:gap-6">
        <Link
          href="/"
          className="relative mx-auto ml-auto overflow-hidden rounded-full border-2 border-teal-400 lg:mx-0">
          <div className="h-16 w-16">
            <Image
              className="to-white-400 overflow-hidden rounded-full bg-gradient-to-br from-teal-400 to-purple-400 hover:cursor-pointer"
              src={Avatar}
              alt="Dominik Giroux"
              width={80}
              height={80}
              priority
            />
          </div>
        </Link>
        <ul className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {menu.links.map((link, i) => (
            <li key={`link-${i}`}>
              <Link href={link.url} className={`nav-link ${`/${link.url}` == router.asPath ? "underline" : ""}`}>
                {link.name[router.locale]}
              </Link>
            </li>
          ))}
        </ul>
        {router.locale == "en" && (
          <Link
            href={router.asPath}
            locale="fr"
            className="nav-link flex items-center justify-center gap-2 hover:underline">
            Français{" "}
            <span className="text-purple-400">
              <svg viewBox="0 0 64 64" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M32,7.448C18.461,7.448,7.449,18.462,7.449,32c0,13.538,11.013,24.552,24.551,24.552   c13.538,0,24.551-11.014,24.551-24.552C56.551,18.462,45.538,7.448,32,7.448z M39.68,45.697v-5.55h1.261v5.55H39.68z M53.235,32   c0,0.351-0.036,0.694-0.053,1.041l-0.41-0.41l-3.152,3.152l-3.082-3.082h-2.601l-0.963,0.961l-4.557-4.556v-2.153h-4.438   l-2.544-2.544l-3.129,3.13h3.349l1.306,1.306H36.6l5.904,5.904v1.87l-3.528,3.528v5.746l-4.292,4.292h-1.794l-2.765-2.764v-7.469   l-1.939-1.941h-3.104l-3.201-3.199v-3.491l4.509-3.782v-4.123l7.275-7.273l2.182,2.182h5.044l3.525-3.525   C49.751,18.657,53.235,24.914,53.235,32z M18.312,15.778c0.73-0.616,1.506-1.176,2.316-1.69h9.044l-4.511,4.51h-2.989l-2.12,2.12   h-1.74V15.778z M15.335,18.865v4.212l-3.965,3.965C12.097,24.011,13.465,21.235,15.335,18.865z M10.865,33.997l9.417,7.119v3.492   l-2.803,2.859C13.811,44.021,11.36,39.299,10.865,33.997z"></path>
              </svg>
            </span>
          </Link>
        )}
        {router.locale == "fr" && (
          <Link
            href={router.asPath}
            locale="en"
            className="nav-link flex items-center justify-center gap-2 hover:underline">
            English{" "}
            <span className="text-purple-400">
              <svg viewBox="0 0 64 64" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M32,7.448C18.461,7.448,7.449,18.462,7.449,32c0,13.538,11.013,24.552,24.551,24.552   c13.538,0,24.551-11.014,24.551-24.552C56.551,18.462,45.538,7.448,32,7.448z M39.68,45.697v-5.55h1.261v5.55H39.68z M53.235,32   c0,0.351-0.036,0.694-0.053,1.041l-0.41-0.41l-3.152,3.152l-3.082-3.082h-2.601l-0.963,0.961l-4.557-4.556v-2.153h-4.438   l-2.544-2.544l-3.129,3.13h3.349l1.306,1.306H36.6l5.904,5.904v1.87l-3.528,3.528v5.746l-4.292,4.292h-1.794l-2.765-2.764v-7.469   l-1.939-1.941h-3.104l-3.201-3.199v-3.491l4.509-3.782v-4.123l7.275-7.273l2.182,2.182h5.044l3.525-3.525   C49.751,18.657,53.235,24.914,53.235,32z M18.312,15.778c0.73-0.616,1.506-1.176,2.316-1.69h9.044l-4.511,4.51h-2.989l-2.12,2.12   h-1.74V15.778z M15.335,18.865v4.212l-3.965,3.965C12.097,24.011,13.465,21.235,15.335,18.865z M10.865,33.997l9.417,7.119v3.492   l-2.803,2.859C13.811,44.021,11.36,39.299,10.865,33.997z"></path>
              </svg>
            </span>
          </Link>
        )}
      </nav>
    </header>
  );
}
