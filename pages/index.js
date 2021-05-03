import Head from "next/head";
import Avatar from "../components/Avatar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <p className='link'>GMail</p>
          <p className='link'>Images</p>
          {/* Icon */}
          <Avatar url='https://media-exp1.licdn.com/dms/image/C5603AQF_ETUBUqItmA/profile-displayphoto-shrink_200_200/0/1555336290907?e=1624492800&v=beta&t=RA2GW98oBSqkX8nU66XT88H7GLGv4zyOh4Z1WUpruzQ' />
        </div>
      </header>
      {/* Body */}
      {/* Footer */}
    </div>
  );
}

// 44:00
