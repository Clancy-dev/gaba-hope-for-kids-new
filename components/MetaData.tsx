import Head from 'next/head';

interface MetadataProps {
  title: string;
  description: string;
}

const Metadata: React.FC<MetadataProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
    </Head>
  );
};

export default Metadata;
