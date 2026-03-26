"use client";

import Image from "next/image";

export default function GalleryStrip({
  dict,
}: {
  dict: {
    images: { src: string; alt: string }[];
  };
}) {
  const images = [...dict.images, ...dict.images];

  return (
    <section className="overflow-hidden bg-[#0a0a0a] py-4">
      <div className="gallery-track flex" style={{ width: "max-content" }}>
        {images.map((img, i) => (
          <div
            key={i}
            className="relative mx-1.5 h-48 w-72 shrink-0 overflow-hidden rounded-lg sm:h-56 sm:w-80"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 640px) 320px, 288px"
              className="object-cover"
              loading="lazy"
            />
            {/* Subtle gold border on hover */}
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5 transition-all duration-300 hover:ring-[#d4a853]/30" />
          </div>
        ))}
      </div>
    </section>
  );
}
