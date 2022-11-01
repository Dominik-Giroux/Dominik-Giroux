import Link from "next/link";
import Image from "next/image";
import Avatar from "../../public/img/avatar.png";

export default function Hero({ context, hero }) {
  return (
    <section className="relative bg-gradient-to-r from-teal-500 to-purple-500 py-16 pb-[200px] xl:pb-[250px]">
      <div className="absolute top-0 z-10 h-24 w-full">
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <div className="px-main mx-auto flex max-w-4xl flex-col items-center justify-center text-center font-black text-white drop-shadow-lg">
        <div className="flex items-center justify-center gap-4 rounded-full border-2 border-teal-400">
          <Image
            className="to-white-400 overflow-hidden rounded-full bg-gradient-to-br from-teal-400 to-purple-400"
            src={Avatar}
            alt="Dominik Giroux"
            width={250}
            height={250}
            priority
          />
        </div>
        <p className="mt-4 text-xl">Dominik Giroux</p>
        <h1 className="text-5xl">{hero.title[context.locale]}</h1>
        <p className="mx-auto mt-2 text-xl font-semibold italic">{hero.description[context.locale]}</p>
        <Link
          href={hero.cta.url[context.locale]}
          className="z-10 mt-6 animate-bounce rounded-full border-2 border-zinc-200 bg-white px-8 py-4 shadow drop-shadow-lg transition duration-1000 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-2xl">
          <span className="bg-gradient-to-tr from-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow">
            {hero.cta.text[context.locale]}
          </span>
        </Link>
        <span className="mt-8 h-12 w-12 transition duration-500 hover:cursor-pointer hover:opacity-75">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
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
  );
}
