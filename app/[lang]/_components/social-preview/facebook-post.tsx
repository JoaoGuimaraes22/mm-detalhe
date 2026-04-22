import CarouselSwiper, { type CarouselLabels } from "./carousel-swiper";

export default function FacebookPost({
  name,
  subtitle,
  images,
  caption,
  carouselLabels,
}: {
  name: string;
  subtitle: string;
  images: string[];
  caption: string;
  carouselLabels: CarouselLabels;
}) {
  const initial = name.slice(0, 1).toUpperCase();

  return (
    <article className="mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
      <header className="flex items-center gap-3 px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          {initial}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-zinc-900">{name}</span>
          <span className="text-xs text-zinc-500">{subtitle}</span>
        </div>
      </header>
      <div className="px-4 pb-3 text-sm leading-relaxed whitespace-pre-wrap text-zinc-800">
        {caption}
      </div>
      <div className="bg-black">
        {images.length > 0 ? (
          <CarouselSwiper images={images} alt={name} labels={carouselLabels} />
        ) : (
          <div className="aspect-[4/5] w-full bg-zinc-200" />
        )}
      </div>
    </article>
  );
}
