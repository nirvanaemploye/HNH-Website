'use client'
import Image from 'next/image';

interface ServiceCardProps {
    service: {
        name: string;
        description: string;
        image: string;
        services: string[];
        toolImages: { name: string; image: string }[];
    };
}

const ServiceCard = ({service}:ServiceCardProps) => {
  return (
    <div className="sm:py-10 sm:px-12 px-6 py-5 relative border border-primary bg-[#8B68FF10] text-[white] grid md:grid-cols-2 grid-cols-1 gap-9 items-center justify-items-center rounded-3xl">
      <div>
        <Image
          src={service.image}
          width={415}
          height={480}
          alt="designing services"
        />
      </div>
      <div>
        <h5 className="font-bold text-2xl dark:text-white text-[#7049EE]">
          {service.name}
        </h5>
        <p className="mt-2 text-[#717070] dark:text-[#B7B0B0]">
          {service.description}
        </p>
        <div className="flex flex-wrap mt-6 gap-3">
          {service.services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="border sm:text-base text-sm border-primary bg-[#171616] rounded-full font-semibold px-4 py-2 [box-shadow:0px_0px_7px_#8260F4]"
              >
                {service}
              </div>
            );
          })}
        </div>
        <button className="mt-10 bg-primary px-12 py-3 font-semibold text-lg rounded-xl">
          Hire Us
        </button>
        <div className="flex flex-wrap items-center justify-start gap-8 mt-14">
          {service.toolImages.map((tool, idx) => {
            return (
              <Image
                key={idx}
                src={tool.image}
                height={60}
                width={60}
                alt={tool.name}
                className="sm:size-[60px] size-[40px]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard