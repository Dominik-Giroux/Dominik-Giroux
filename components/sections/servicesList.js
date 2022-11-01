import Link from "next/link";

export default function ServicesList({ context, servicesList }) {
  return (
    <section id="services" className="mx-auto max-w-7xl  pb-16">
      <h1 className="max-w-2x mx-auto text-4xl font-black text-zinc-600">{servicesList.title[context.locale]}</h1>
      <div className="mt-12 grid grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-8">
        {servicesList.services.map((service, i) => (
          <Link
            key={`service-${i}`}
            href={service.url[context.locale]}
            className="relative transition duration-500 hover:scale-110">
            <div className="backdrop-blur-xs rounded-2xl bg-zinc-200 bg-opacity-40 p-8">
              <div
                className="my-2 mx-auto h-12 w-12 text-teal-500"
                dangerouslySetInnerHTML={{ __html: service.icon }}
              />
              <h2 className="max-w-2x mx-auto bg-gradient-to-tr from-purple-500 to-pink-400 bg-clip-text text-2xl font-black text-transparent">
                {service.title[context.locale]}
              </h2>
              <p className="font-black text-zinc-600">{service.description[context.locale]}</p>
            </div>
            <div className="absolute inset-0 -z-10 mx-auto h-auto w-full rounded-full bg-gradient-to-tr from-pink-500 to-teal-500 py-12 blur-2xl"></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
