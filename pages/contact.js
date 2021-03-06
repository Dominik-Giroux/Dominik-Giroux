import Head from "next/head";
import { getMenu } from "../libs/menus";
import { getPage } from "../libs/pages";
import { useState } from "react";

export default function Home({ context, menu, page }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mesasge, setMessage] = useState("");

  return (
    <>
      <Head>
        <title>Dominik Giroux</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="animate-slideIn py-8 text-center">
        <section className="section-container relative my-8 flex  flex-col items-center justify-center gap-4 py-16 text-center">
          <h1 className="max-w-2x mx-auto text-5xl font-black text-white drop-shadow-lg">
            {page.title[context.locale]}
          </h1>
          <p className="mx-auto max-w-xl text-xl font-semibold text-white drop-shadow-lg">
            {page.description[context.locale]}
          </p>
          <form
            onSubmit={async event => await handleSubmit(event)}
            className="backdrop-blur-xs flex w-auto flex-col gap-4 rounded bg-zinc-100 bg-opacity-40 p-8 shadow lg:min-w-[600px] ">
            <div className="flex flex-row gap-4">
              <div className="flex flex-grow flex-col gap-2">
                <label className="label" htmlFor="name">
                  Your name <span className="text-red-500">*</span>
                </label>
                <input
                  className="input"
                  name="name"
                  id="name"
                  type="text"
                  value={name}
                  onChange={event => setFirstname(event.target.value)}
                  required
                />
              </div>
              <div className="flex flex-grow flex-col gap-2">
                <label className="label" htmlFor="company">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  className="input"
                  name="company"
                  id="company"
                  type="text"
                  value={company}
                  onChange={event => setLastname(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-grow flex-col gap-2">
              <label className="label" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="input"
                name="email"
                id="email"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-grow flex-col gap-2">
              <label className="label" htmlFor="email">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="input"
                name="message"
                id="message"
                value={email}
                onChange={event => setMessage(event.target.value)}
                required
              />
            </div>
            <button
              className="rounded-xl border bg-gradient-to-br from-purple-500 to-pink-400 py-2 font-black text-white shadow-lg"
              type="submit">
              Send
            </button>
          </form>
          <div className="absolute inset-0 -z-10 mx-auto h-auto w-full max-w-4xl animate-tilt rounded-full bg-gradient-to-r from-teal-500 to-purple-500 py-12 blur-2xl"></div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const menu = await getMenu("main");
  const page = await getPage("contact");
  return {
    props: {
      context,
      menu,
      page
    }
  };
}
