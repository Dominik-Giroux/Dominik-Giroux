import Image from "next/image";
import Peertracks from "../../public/img/clients/peertracks.png";
import SounDAC from "../../public/img/clients/soundac.png";
import IndustrieLassonde from "../../public/img/clients/industrie-lassonde.png";
import WoltersKluwer from "../../public/img/clients/wolters-kluwer.png";

export default function Clients({ context }) {
  const title = {
    en: "Blockchains - Cloud Solutions - eCommerces - Progressive Web Apps - Blogs - Websites",
    fr: "Blockchains - Solutions Cloud - Commerce en ligne - PWA - Blogues - Sites Web"
  };

  const intro = {
    en: "From startups to well established corporations all around the world",
    fr: "Des startups jusqu'aux grandes corporations à travers le monde"
  };

  const outtro = {
    en: "Over 10 billions worth of market value from satisfied clients",
    fr: "Plus de 10 milliards de valeur marchandes en clients satisfaits"
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl pb-16">
        <h1 className="bg-gradient-to-l from-teal-500 to-purple-500 bg-clip-text py-16 text-6xl font-extrabold text-transparent">
          {title[context.locale]}
        </h1>
        <p className="text-lg font-black text-zinc-600">{intro[context.locale]}</p>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          <Image src={Peertracks} alt="Peertracks" width={300} height={300} layout="responsive" />
          <Image src={SounDAC} alt="SounDAC" width={300} height={300} layout="responsive" />
          <Image src={IndustrieLassonde} alt="Industrie Lassonde" width={300} height={300} layout="responsive" />
          <Image src={WoltersKluwer} alt="Wolters Kluwer" width={300} height={300} layout="responsive" />
        </div>
        <p className="text-base font-thin text-zinc-600">{outtro[context.locale]}</p>
      </div>
    </section>
  );
}
