import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
      <div className='flex flex-row gap-3 items-center'>
        <div className='relative'>

      <Image
  src="/Next14 portfolio assets/wallpapersden.com_monkey-luffy-hd-cool-dark_2184x1224.jpg"
  alt='logo'
  width={80}
  height={80}
  className='h-full object-contain rounded-full'
/>
</div>


        <h1 className='text-white text-2xl font-semibold'>
          Webchain Developer
        </h1>
      </div>
      <div className='flex flex-row gap-5 mb-2'>
        {[
          { name: 'Facebook', src: '/Next14 portfolio assets/facebook.svg' },
          { name: 'Instagram', src: '/Next14 portfolio assets/instagram.svg' },
          { name: 'Discord', src: '/Next14 portfolio assets/discord.svg' },
          // Add more social icons as needed
        ].map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
            className='cursor-pointer'
          />
        ))}
      </div>
    </div>
  );
}

