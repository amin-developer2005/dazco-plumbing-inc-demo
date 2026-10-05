export function ReviewsPlaceholder() {
  return (
    <section className="page-wrap pb-8">
      <div className="surface-card p-6 md:p-10">
        <p className="kicker">Customer reviews</p>
        <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
          Reviews are not shown on this demo.
        </h2>
        <p className="mt-5 max-w-3xl text-muted">
          Public listings checked for this concept did not provide reliably
          attributable customer reviews. The Better Business Bureau profile
          currently shows Dazco Plumbing, Inc. as not BBB accredited and “Not
          Rated.” This page does not invent Google reviews, star ratings, or
          customer names. When the owner supplies a public profile they want
          quoted, reviews can be added with source attribution.
        </p>
      </div>
    </section>
  );
}
