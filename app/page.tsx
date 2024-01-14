import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full relative'>
        <Image
          src="/Next14 portfolio assets/000000_307211251_kdpmpp2m15_PS7.5_Red_scary_maintain_,_dark_theme_,_clouds_on_mountain_4k_._digital_art_concept_art_[upscaled].jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className='pl-8 md:pl-16 pb-8 md:pb-16 flex flex-col gap-4 z-[10] max-w-[750px]'>
        <h1 className='text-4xl md:text-5xl text-white font-semibold'>
  Make Anything Possible <br />
  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500'>
    With Web Development
  </span>
</h1>

      
          <p className='text-4x1 text-gray-200 hidden md:block'>Let's Rock Guys</p>
          <div className='flex-col md:flex-row hidden md:flex gap-4'>
            <Link href='/my-skills' passHref>
              <span className='rounded-full group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                Learn more
              </span>
            </Link>
            <Link href='/my-projects' passHref>
              <span className='rounded-full group relative bg-purple-500 hover:bg-purple-400 px-5 border border-white py-3 text-lg text-white max-w-[200px]'>
                My Projects
              </span>
            </Link>
            <Link href='/contact-me' passHref>
              <span className='rounded-full group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                Contact Me
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Section for small screens */}
      <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-4'>
        <Link href='/my-skills' passHref>
          <span className='rounded-full group bg-blue-500  px-5 py-3 text-lg text-white max-w-[200px]'>
            Learn more
          </span>
        </Link>
        <Link href='/my-projects' passHref>
          <span className='rounded-full group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
            My Projects
          </span>
        </Link>
        <Link href='/contact-me' passHref>
          <span className='rounded-full group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
            Contact Me
          </span>
        </Link>
      </div>

      {/* Additional images */}
      <div className='absolute bottom-0 right-0 z-[10]'>
        <Image
          src="/Next14 portfolio assets/horse.png"
          alt='Horse'
          height={300}
          width={300}
          className='absolute right-10 bottom-60'
        />
        <Image src="/Next14 portfolio assets/cliff.webp" alt='Cliff' width={400} height={400} />
      </div>
      <div className='absolute bottom-0 z-[5] w-full h-auto'>
        <Image
          src="/Next14 portfolio assets/trees.webp"
          alt='Trees'
          width={2000}
          height={2000}
          className='w-full h-full'
        />
      </div>
      <Image
        src="/Next14 portfolio assets/stars.png"
        alt='Stars'
        height={300}
        width={300}
        className='absolute top-10 left-0 z-[10]'
      />
    </main>
  );
}




