import Link from "next/link";
import { getMenu } from "../libs/menus";

export default function Error() {
  return (
    <div
      className="min-h-full bg-cover bg-top sm:bg-top"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")'
      }}>
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold uppercase tracking-wide text-black text-opacity-50">Error 500</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Uh oh! There was an error with the server
        </h1>
        <div className="mt-6">
          <Link href="/">
            <a className="inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
              Go back home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const menu = await getMenu("main");
  return {
    props: {
      error: true,
      menu
    }
  };
}
