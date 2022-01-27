import Head from "next/head";

interface Meta {
  meta: { name: string; description: string };
}

export default function Meta({ meta }: Meta) {
  const { name, description } = meta;

  return (
    <Head key={name}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <title>{name}</title>
    </Head>
  );
}
