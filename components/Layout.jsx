import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <div className="bg-gray-600 text-white">
      <Head>
        <title className="capitalize">{title}</title>
      </Head>

      <main className="container mx-auto max-w-xl pt-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}
