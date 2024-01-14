import Image from 'next/image';
import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{
        backgroundImage:"url('/Next14 portfolio assets/bg-3.jpg')" , // Outer background image
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
      }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <div
        style={{
          backgroundImage: "url('/Next14 portfolio assets/atombg-comp.webp')", // Inner background image
          backgroundSize: 'cover', // Adjust as needed
          backgroundPosition: 'center', // Adjust as needed
        }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;

