export default function LinkedInPost({
  name,
  subtitle,
  images,
  caption,
}: {
  name: string;
  subtitle: string;
  images: string[];
  caption: string;
}) {
  const initial = name.slice(0, 1).toUpperCase();

  return (
    <article className="mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
      <header className="flex items-center gap-3 px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-sm font-semibold text-white">
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
      {images.length > 0 && (
        <img
          src={images[0]}
          alt={name}
          className="aspect-[4/5] w-full object-cover"
        />
      )}
    </article>
  );
}
