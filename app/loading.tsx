export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <article className="animate-fade-in w-full max-w-md text-center">
        <section
          className="space-y-6"
          role="status"
          aria-live="polite"
          aria-label="Page is loading"
        >
          {/* Loading Spinner */}
          <div className="animate-slide-down flex justify-center">
            <div className="relative h-16 w-16">
              <div
                className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"
                aria-hidden="true"
              />
              {/* Outer ring animation */}
              <div
                className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-t-blue-400 border-r-blue-400"
                style={{
                  animationDirection: 'reverse',
                  animationDuration: '1.5s',
                }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Content */}
          <header className="animate-slide-up animation-delay-200">
            <h1 className="mb-2 text-2xl font-bold text-gray-800">Loading</h1>
            <p className="text-gray-600">
              Please wait while we fetch your content
            </p>
          </header>

          {/* Loading Progress Indicator */}
          <section
            aria-label="Loading progress"
            className="animate-slide-up animation-delay-300"
          >
            <div className="space-y-2">
              <div className="h-1 overflow-hidden rounded-full bg-gray-300">
                <div
                  className="h-full w-1/3 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                  aria-hidden="true"
                  style={{
                    animation: 'shimmer 2s infinite',
                  }}
                />
              </div>
              <p className="text-xs text-gray-500">
                This may take a few moments...
              </p>
            </div>
          </section>

          {/* Dots animation */}
          <div className="animate-slide-up animation-delay-400 flex justify-center gap-1">
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-blue-600"
              style={{ animationDelay: '0s' }}
              aria-hidden="true"
            />
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-blue-600"
              style={{ animationDelay: '0.2s' }}
              aria-hidden="true"
            />
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-blue-600"
              style={{ animationDelay: '0.4s' }}
              aria-hidden="true"
            />
          </div>
        </section>
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
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
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
