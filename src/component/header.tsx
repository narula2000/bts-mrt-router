import Head from "next/head";
type HeaderCardProps = {
  name: string;
};

const HeaderCard = ({ name }: HeaderCardProps) => {
  return (
    <Head>
      <title>{name}</title>
      <meta name="description" content={name} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeaderCard;
