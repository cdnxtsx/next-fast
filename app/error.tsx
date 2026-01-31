'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const errorTime = new Date().toLocaleString()

  useEffect(() => {
    console.error(error)
  }, [error])

  const handleCopyErrorId = async () => {
    try {
      await navigator.clipboard.writeText(error.digest || '')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-8">
      <article className="animate-fade-in w-full max-w-2xl">
        {/* Error Card */}
        <section
          className="hover:shadow-3xl rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/10 to-red-800/5 shadow-2xl backdrop-blur-xl transition-all duration-500"
          role="alert"
          aria-live="assertive"
        >
          {/* Header */}
          <header className="border-b border-red-500/20 px-8 py-12">
            <div className="mb-6 inline-flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-pink-600 shadow-lg">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4v2m0 4v2M12 3a9 9 0 100 18 9 9 0 000-18z"
                />
              </svg>
            </div>

            <h1 className="animate-slide-down mb-2 text-4xl font-bold text-white">
              Something went wrong
            </h1>
            <p className="animate-slide-down animation-delay-100 text-lg text-gray-400">
              We encountered an unexpected error while processing your request.
            </p>
          </header>

          {/* Content */}
          <div className="space-y-6 px-8 py-8">
            {/* Error Message Section */}
            {error.message && (
              <section className="animate-slide-up animation-delay-200">
                <h2 className="sr-only">Error Information</h2>
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 transition-all hover:border-red-500/50 hover:bg-red-500/20">
                  <h3 className="mb-2 font-semibold text-red-200">
                    Error Details
                  </h3>
                  <p className="font-mono text-sm text-red-100">
                    {error.message}
                  </p>
                </div>
              </section>
            )}

            {/* Error ID Section */}
            {error.digest && (
              <section className="animate-slide-up animation-delay-300">
                <h2 className="sr-only">Error Identifier</h2>
                <div className="rounded-lg bg-gray-700/50 p-4 transition-all hover:bg-gray-700/70">
                  <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-300">
                        Error ID
                      </h3>
                      <code className="font-mono text-xs break-all text-gray-400">
                        {error.digest}
                      </code>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyErrorId}
                      className={`relative rounded px-4 py-2 text-xs font-medium whitespace-nowrap transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none ${
                        copied
                          ? 'bg-green-600 text-white ring-2 ring-green-500/50'
                          : 'bg-gray-600 text-gray-100 ring-2 ring-transparent hover:bg-gray-500 hover:ring-gray-400/50'
                      }`}
                      aria-label="Copy error ID to clipboard"
                    >
                      <span className="flex items-center gap-2">
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            copied ? 'scale-110' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {copied ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          )}
                        </svg>
                        {copied ? 'Copied!' : 'Copy'}
                      </span>
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* Stack Trace (Development Only) */}
            {process.env.NODE_ENV === 'development' && (
              <section className="animate-slide-up animation-delay-400">
                <h2 className="sr-only">Technical Details</h2>
                <details
                  open={isOpen}
                  onToggle={(e) => setIsOpen(e.currentTarget.open)}
                  className="group"
                >
                  <summary className="mb-3 flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-sm text-gray-400 transition-colors hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                    <svg
                      className="h-4 w-4 transform transition-transform group-open:rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span>Show stack trace (Development only)</span>
                  </summary>
                  <pre
                    className="animate-slide-down overflow-x-auto rounded-lg bg-black/30 p-4 text-xs text-red-300"
                    role="region"
                    aria-label="Error stack trace"
                  >
                    {error.stack}
                  </pre>
                </details>
              </section>
            )}

            {/* Helpful Information */}
            <section className="animate-slide-up animation-delay-500 mb-8 rounded-lg bg-blue-500/10 p-4 transition-all hover:bg-blue-500/20">
              <h2 className="mb-3 font-semibold text-blue-200">
                What you can do:
              </h2>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400"
                    aria-hidden="true"
                  />
                  Try refreshing the page
                </li>
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400"
                    aria-hidden="true"
                  />
                  Clear your browser cache
                </li>
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400"
                    aria-hidden="true"
                  />
                  Try again in a few moments
                </li>
              </ul>
            </section>
          </div>

          {/* Actions */}
          <footer className="border-t border-red-500/20 px-8 py-6">
            <nav
              className="flex flex-col gap-3 sm:flex-row"
              aria-label="Error recovery actions"
            >
              <button
                type="button"
                onClick={() => reset()}
                className="animate-slide-up animation-delay-600 flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none active:scale-95"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="animate-slide-up animation-delay-700 flex-1 rounded-lg border border-gray-600 px-6 py-3 text-center font-semibold text-gray-300 transition-all duration-300 hover:bg-gray-700/50 hover:text-gray-100 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
              >
                Go Home
              </Link>
            </nav>
          </footer>
        </section>

        {/* Footer */}
        <footer className="animate-fade-in animation-delay-800 mt-8 text-center text-sm text-gray-500">
          <time dateTime={new Date().toISOString()}>
            Error occurred at {errorTime}
          </time>
        </footer>
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

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
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

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </main>
  )
}
