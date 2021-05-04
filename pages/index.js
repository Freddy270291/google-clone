import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/image";

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

          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
          <Avatar url='https://media-exp1.licdn.com/dms/image/C5603AQF_ETUBUqItmA/profile-displayphoto-shrink_200_200/0/1555336290907?e=1624492800&v=beta&t=RA2GW98oBSqkX8nU66XT88H7GLGv4zyOh4Z1WUpruzQ' />
        </div>
      </header>
      {/* Body */}
      <form>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          height={100}
          width={300}
        />
      </form>
      {/* Footer */}
    </div>
  );
}

//52:00
