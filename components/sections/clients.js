import Image from "next/image";

export default function Clients({ context, clients }) {
  const title = {
    en: "Blockchains - Cloud Solutions - eCommerces - Progressive Web Apps - Blogs - Websites",
    fr: "Blockchains - Solutions Cloud - Commerce en ligne - PWA - Blogues - Sites Web"
  };

  const intro = {
    en: "From startups to well established corporations",
    fr: "Des startups jusqu'aux grandes corporations "
  };

  const outtro = {
    en: "Many satisfied clients all around the world",
    fr: "Plusieurs clients satisfaits à travers le monde"
  };

  return (
    <section className="px-main mx-auto max-w-7xl pb-16 text-center">
      <h2 className="bg-gradient-to-l from-teal-500 to-purple-500 bg-clip-text py-16 text-3xl font-extrabold text-transparent md:text-6xl">
        {title[context.locale]}
      </h2>
      <p className="text-lg font-black text-zinc-600">{intro[context.locale]}</p>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {clients.map((client, i) => (
          <Image key={`client-img-${i}`} src={client.src} alt={client.alt} width={300} height={300} />
        ))}
      </div>
      <p className="text-base font-thin text-zinc-600">{outtro[context.locale]}</p>
    </section>
  );
}
