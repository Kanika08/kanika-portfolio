import { HiMail } from "react-icons/hi";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20 md:mt-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-18">

        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Left side */}
          <div className="max-w-md">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight">
              Building thoughtful, scalable products.
            </h3>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">

            {/* Email */}
            <a
              href="mailto:kanika.vasudeva@gmail.com"
              className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
             <HiMail className="h-4 w-4 opacity-70" />

              Email
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kanikamudhar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <FaLinkedinIn className="h-4 w-4 opacity-70" />
              LinkedIn
            </a>

            {/* Medium */}
            <a
              href="https://medium.com/@kanikavasudeva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <FaMediumM className="h-4 w-4 opacity-70" />
              Medium
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-4 text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Kanika Mudhar
        </div>

      </div>
    </footer>
  );
}
