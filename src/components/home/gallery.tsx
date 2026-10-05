import { gallery } from "@/lib/site";

export function ProjectGallery() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="page-wrap">
        <p className="kicker">Project photography</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold md:text-5xl">
          Placeholder gallery until job photos are provided.
        </h2>
        <p className="mt-5 max-w-2xl text-muted">
          These images are high-quality stand-ins for a finished site. They are
          not photographs of Dazco Plumbing Inc. jobs. The owner can replace
          them with real project photos, van branding, and completed work.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-[var(--radius-lg)] bg-elevated"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-3/2 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm text-muted">
                {item.caption} — placeholder image
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
