export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 mt-20 md:mt-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-18">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          
          {/* Left side */}
          <div className="max-w-md space-y-3">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight">
              Building thoughtful, scalable products.
            </h3>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-start gap-4 text-sm text-neutral-600">
            <div className="flex gap-5">
              <a
                href="mailto:kanika.vasudeva@gmail.com"
                className="hover:text-neutral-900 transition-colors"
              >
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/kanikamudhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="https://medium.com/@kanikavasudeva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors"
              >
                Medium
              </a>
            </div>
          </div>

        </div>

        {/* Bottom section */}
        <div className="mt-10 pt-6 border-t border-neutral-200 text-xs md:text-sm text-neutral-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Kanika Mudhar</span>
          <span className="text-neutral-400">
            Built with Next.js &amp; Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
}
