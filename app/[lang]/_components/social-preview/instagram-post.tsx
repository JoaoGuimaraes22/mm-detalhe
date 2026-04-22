import CarouselSwiper, { type CarouselLabels } from "./carousel-swiper";

export default function InstagramPost({
  handle,
  images,
  caption,
  carouselLabels,
}: {
  handle: string;
  images: string[];
  caption: string;
  carouselLabels: CarouselLabels;
}) {
  const initial = handle.slice(0, 1).toUpperCase();

  return (
    <article className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <header className="flex items-center gap-3 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-sm font-semibold text-white">
          {initial}
        </div>
        <span className="text-sm font-semibold text-zinc-900">{handle}</span>
      </header>
      <div className="bg-black">
        {images.length > 0 ? (
          <CarouselSwiper images={images} alt={handle} labels={carouselLabels} />
        ) : (
          <div className="aspect-[4/5] w-full bg-zinc-200" />
        )}
      </div>
      <div className="px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap text-zinc-700">
        <span className="mr-1 font-semibold text-zinc-900">{handle}</span>
        {caption}
      </div>
    </article>
  );
}
