'use client'

import { useEffect, useState } from 'react'

interface ApiResponse {
  message: string
}

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/hello')
        if (!res.ok) throw new Error('Failed to fetch')
        const json = (await res.json()) as ApiResponse
        setData(json)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="bg-background text-foreground flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Title */}
        <div className="animate-fade-in mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold">Next.js + FastAPI</h1>
          <p className="text-secondary">Powered by Bun</p>
        </div>

        {/* Main Card */}
        <div className="animate-slide-up duration-500">
          <div
            className="bg-card text-card-foreground animate-slide-up border-border mb-8 rounded-[var(--radius)] border p-8 shadow-lg"
            style={{ borderRadius: 'var(--radius)' }}
          >
            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="relative mb-4 h-16 w-16">
                  <div className="border-muted absolute inset-0 animate-spin rounded-full border-4" />
                  <div className="border-t-primary absolute inset-0 animate-spin rounded-full border-4 border-transparent" />
                </div>
                <p className="text-muted-foreground animate-pulse-soft">
                  Loading...
                </p>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div
                className="bg-destructive/10 border-destructive animate-bounce-in rounded-[var(--radius)] border-2 p-6"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <p className="text-destructive mb-2 font-semibold">⚠️ Error</p>
                <p className="text-destructive/80">{error}</p>
              </div>
            )}

            {/* Success State */}
            {data && !loading && !error && (
              <div className="animate-bounce-in space-y-6">
                <div className="text-center">
                  <div
                    className="bg-primary text-primary-foreground animate-pulse-glow inline-block rounded-full px-6 py-3 font-semibold"
                    style={{
                      borderRadius: '9999px',
                      animationTimingFunction: 'var(--ease-smooth)',
                    }}
                  >
                    ✓ Connected
                  </div>
                </div>
                <p className="text-center text-2xl font-bold">{data.message}</p>
                <div className="flex justify-center gap-2 text-sm">
                  <span
                    className="bg-accent/10 text-accent animate-slide-right rounded-full px-3 py-1 delay-100 duration-300"
                    style={{ borderRadius: 'var(--radius)' }}
                  >
                    Frontend ✓
                  </span>
                  <span
                    className="bg-accent/10 text-accent animate-slide-left rounded-full px-3 py-1 delay-200 duration-300"
                    style={{ borderRadius: 'var(--radius)' }}
                  >
                    Backend ✓
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Next.js Card */}
          <div
            className="bg-card text-card-foreground border-border animate-slide-up animate-delay-200 rounded-[var(--radius)] border p-6 shadow-lg transition-shadow hover:shadow-xl"
            style={{ borderRadius: 'var(--radius)' }}
          >
            <h3 className="mb-2 text-lg font-bold">Next.js</h3>
            <p className="text-muted-foreground text-sm">
              Frontend served on port 3000
            </p>
            <p className="text-primary mt-4 font-mono text-xs">
              localhost:3000
            </p>
          </div>

          {/* FastAPI Card */}
          <div
            className="bg-card text-card-foreground border-border animate-slide-up animate-delay-300 rounded-[var(--radius)] border p-6 shadow-lg transition-shadow hover:shadow-xl"
            style={{ borderRadius: 'var(--radius)' }}
          >
            <h3 className="mb-2 text-lg font-bold">FastAPI</h3>
            <p className="text-muted-foreground text-sm">
              Backend served on port 5328
            </p>
            <p className="text-primary mt-4 font-mono text-xs">
              localhost:5328
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="animate-fade-in animate-delay-300 mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Developed with ⚡ using Next.js, FastAPI & Bun
          </p>
        </div>
      </div>
    </main>
  )
}
