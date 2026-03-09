import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export default function ServiceCard({ title, description, imageSrc, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group relative h-[400px] w-full block rounded-2xl overflow-hidden shadow-sm">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-brand-light p-8 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <p className="text-white text-base md:text-lg font-body leading-relaxed">
          {description}
        </p>
      </div>
      <h3 className="absolute bottom-6 left-6 text-white text-3xl md:text-4xl  z-10">
        {title}
      </h3>
      
    </Link>
  );
}