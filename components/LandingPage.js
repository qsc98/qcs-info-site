import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/assets/Logo-Transparent.png';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <Head>
        <title>Quality Senior Care</title>
        <meta name="description" content="Our website is under construction. Stay tuned!" />
      </Head>
      
      <Image src={logo} alt="Quality Senior Care Logo" width={200} height={200} className="mb-6" />
      
      <h1 className="text-3xl font-bold text-gray-800">Coming Soon!</h1>
      <p className="mt-4 text-lg text-gray-600">Our website is currently under construction. Stay tuned for updates.</p>
    </div>
  );
}