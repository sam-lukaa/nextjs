import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <div className="bg-gray-600">
      <Head>
        <title className="capitalize">{title}</title>
      </Head>

      <div>{children}</div>
    </div>
  );
}
