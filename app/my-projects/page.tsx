import ProjectCard from '@/components/ProjectCard';
import { Projects } from '@/constants';
import React from 'react';

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/Next14 portfolio assets/bg-2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      className='w-screen h-screen relative'
    >
      {/* Content */}
      <div className='w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
        <div className='grid grid-cols-2 gap-5 max-w-[90%]'>
          {Projects.map((project, index) => (
            project.visibility && (
              <ProjectCard
                key={index}
                title={project.title}
                text={project.text}
                image={project.image}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;


