import Link from "next/link";
import Image from "next/image";
import Avatar from "../../public/img/avatar.png";

export default function Hero({ context, hero }) {
  return (
    <section className="section-container relative mt-4 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center font-black text-white drop-shadow-lg">
        <div className="flex items-center justify-center gap-4 rounded-full border-2 border-teal-400">
          <Image
            className="to-white-400 overflow-hidden rounded-full bg-gradient-to-br from-teal-400 to-purple-400"
            src={Avatar}
            width={250}
            height={250}
            alt="Dominik Giroux"
            layout="fixed"
            priority
          />
        </div>
        <p className="mt-4 text-xl">Dominik Giroux</p>
        <h1 className="text-5xl">{hero.title[context.locale]}</h1>
        <p className="mx-auto mt-2 text-xl font-semibold italic">{hero.description[context.locale]}</p>
        <Link href={hero.cta.url[context.locale]}>
          <a className="z-10 mt-6 animate-bounce rounded-full border-2 border-zinc-200 bg-white px-8 py-4 shadow drop-shadow-lg transition duration-1000 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-2xl">
            <span className="bg-gradient-to-tr from-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow">
              {hero.cta.text[context.locale]}
            </span>
          </a>
        </Link>
        <Link href="#services">
          <span className="mt-8 h-12 w-12 transition duration-500 hover:cursor-pointer hover:opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
      <div className="absolute inset-0 -z-10 mx-auto h-auto w-full max-w-7xl animate-tilt rounded-full bg-gradient-to-r from-teal-500 to-purple-500 py-12 blur-2xl"></div>
    </section>
  );
}
