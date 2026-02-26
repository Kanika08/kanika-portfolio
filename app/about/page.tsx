import { HiMail } from "react-icons/hi";
import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pb-24 space-y-14">

      <section className="space-y-10">

        {/* Top Row */}
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
            <Image
              src="/images/profile-image.png"
              alt="Kanika Mudhar"
              fill
              className="object-cover grayscale contrast-110 brightness-95"
              priority
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Hi, I’m Kanika.
          </h1>
        </div>

        {/* Body Copy */}
        <div className="space-y-6 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">

          <p>
            I’m a product designer with over 14 years of experience building digital products across food tech and education. I’ve worked at{" "}
            <a
              href="https://www.zomato.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500 transition"
            >
              Zomato
            </a>{" "}
            and{" "}
            <a
              href="https://www.prodigygame.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500 transition"
            >
              Prodigy
            </a>
            , designing experiences that serve millions of users.
          </p>

          <p>
            I’m drawn to thoughtful systems — the structure behind the screens,
            and the decisions that shape how something feels and functions over time.
            I care about clarity, collaboration, and building products that hold up as they grow.
          </p>

          <p>
            Outside of work, I’m a mother of two. I love DIY projects and crafts,
            and cooking has become my favorite way to slow down and reset.
          </p>

          <p>
            If you think we’d work well together, I’d love to connect.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-10 pt-4">

            {/* Resume */}
            <a
              href="/Kanika_Mudhar_Product_Designer_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:opacity-70 transition"
            >
              Resume
              <HiExternalLink className="w-4 h-4 opacity-80" />
</a>

            {/* Email */}
            <a
              href="mailto:kanika.vasudeva@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:opacity-70 transition"
            >
  Get in touch
  <HiMail className="w-4 h-4 opacity-80" />
</a>

          </div>

        </div>

      </section>

    </article>
  );
}