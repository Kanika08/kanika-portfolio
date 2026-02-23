import Image from "next/image";

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-24 pb-24 space-y-16">

      {/* Intro */}
      <section className="space-y-10">

        {/* Top Row: Small Headshot + Name */}
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/images/profile-image.png"
              alt="Kanika Mudhar"
              fill
              className="object-cover grayscale contrast-110 brightness-95"
              priority
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Hi, I’m Kanika.
          </h1>
        </div>

        {/* Personal Copy */}
        <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>
            I’ve spent the last 14+ years designing products used by millions —
            but what keeps me curious isn’t scale. It’s clarity.
          </p>

          <p>
            I’m drawn to systems — the invisible structure behind the interface.
            The decisions that quietly shape behavior. The details most people
            never notice, but always feel.
          </p>

          <p>
            I care about thoughtful collaboration, long-term thinking,
            and building products that age well.
          </p>

          <p>
            If you think I might be the right fit for your team,
            I’d love to connect.
          </p>

          <div className="flex gap-6 text-sm pt-2 text-neutral-500 dark:text-neutral-400">
          <a
  href="/Kanika_Mudhar_Product_Designer_Resume_2026.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:opacity-70 transition"
>
  Resume
</a>

            <a
              href="mailto:your@email.com"
              className="hover:opacity-70 transition"
            >
              Get in touch
            </a>
          </div>

        </div>

      </section>

    </article>
  );
}