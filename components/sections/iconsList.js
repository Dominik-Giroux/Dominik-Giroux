export default function IconsList({ context, list }) {
  return (
    <section className="pb-16">
      <div className="mx-auto grid min-w-0 max-w-7xl grid-cols-1 flex-row gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.items.map((item, i) => (
          <div key={`icon-${i}`} className="p-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="mx-auto h-20 w-20 rounded-full bg-gradient-to-l from-teal-500 to-purple-500 p-4"
              dangerouslySetInnerHTML={{ __html: item.iconPath }}></svg>
            <h3 className="mt-4 text-2xl font-bold text-zinc-600">{item.title[context.locale]}</h3>
            <p className="mt-2 text-base font-light text-zinc-400">{item.description[context.locale]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
