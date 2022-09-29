export default function Heading({ context, heading }) {
  return (
    <section className=" pb-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-left sm:px-6">
        <p className="text-lg font-medium text-zinc-900">{heading.subheading[context.locale]}</p>
        <h2 className="bg-gradient-to-l from-teal-500 to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent">
          {heading.heading[context.locale]}
        </h2>
        <p className="text-base font-thin text-zinc-600">{heading.description[context.locale]}</p>
      </div>
    </section>
  );
}
