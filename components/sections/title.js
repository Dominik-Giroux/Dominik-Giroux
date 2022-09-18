export default function Title({ context, title }) {
  return (
    <section id="title" className="animate-fadeIn pb-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-left sm:px-6">
        <p className="text-lg font-medium text-zinc-900">{title.subheading[context.locale]}</p>
        <h2 className="bg-gradient-to-l from-teal-500 to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent">
          {title.heading[context.locale]}
        </h2>
        <p className="text-base font-thin text-zinc-600">{title.description[context.locale]}</p>
      </div>
    </section>
  );
}
