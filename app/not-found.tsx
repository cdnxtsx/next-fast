import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-blue-100 px-4 py-8">
      <article className="animate-fade-in w-full max-w-md">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="animate-slide-down mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-9xl font-bold text-transparent">
            404
          </h1>
          <h2 className="animate-slide-down animation-delay-100 mb-2 text-3xl font-bold text-gray-900">
            Page not found
          </h2>
          <p className="animate-slide-down animation-delay-200 text-gray-600">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </header>

        {/* Content */}
        <section className="animate-slide-up animation-delay-300 mb-8 space-y-4 rounded-lg bg-white/60 p-6 shadow-sm backdrop-blur transition-all hover:bg-white/70 hover:shadow-md">
          <h3 className="font-semibold text-gray-900">
            What might have happened:
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="group flex items-start gap-3">
              <span
                className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 transition-transform group-hover:scale-125"
                aria-hidden="true"
              />
              <span className="transition-transform group-hover:translate-x-1">
                The page may have been removed or renamed
              </span>
            </li>
            <li className="group flex items-start gap-3">
              <span
                className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 transition-transform group-hover:scale-125"
                aria-hidden="true"
              />
              <span className="transition-transform group-hover:translate-x-1">
                You may have mistyped the URL
              </span>
            </li>
            <li className="group flex items-start gap-3">
              <span
                className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 transition-transform group-hover:scale-125"
                aria-hidden="true"
              />
              <span className="transition-transform group-hover:translate-x-1">
                The link you followed may be outdated
              </span>
            </li>
          </ul>
        </section>

        {/* Actions */}
        <nav
          className="animate-slide-up animation-delay-400 flex justify-center"
          aria-label="Navigation options"
        >
          <Link
            href="/"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-95"
          >
            {/* Shine effect */}
            <span className="relative flex items-center justify-center">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:animate-pulse group-hover:opacity-20" />
              Go Home
            </span>
          </Link>
        </nav>

        {/* Floating elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="animate-float absolute top-10 right-10 h-20 w-20 rounded-full bg-blue-200 opacity-20"
            aria-hidden="true"
          />
          <div
            className="animate-float absolute bottom-20 left-10 h-32 w-32 rounded-full bg-purple-200 opacity-10"
            style={{ animationDelay: '2s' }}
            aria-hidden="true"
          />
        </div>
      </article>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </main>
  )
}
