export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-10 flex flex-col items-center justify-center space-y-4">
        <div className="h-12 w-3/4 max-w-md animate-pulse rounded-lg bg-muted"></div>
        <div className="h-6 w-1/2 max-w-sm animate-pulse rounded-lg bg-muted"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col justify-between overflow-hidden rounded-xl border bg-card p-0 shadow"
          >
            <div className="h-64 w-full animate-pulse bg-muted"></div>
            <div className="flex flex-col gap-3 p-5">
              <div className="h-4 w-24 animate-pulse rounded bg-muted"></div>
              <div className="h-6 w-full animate-pulse rounded bg-muted"></div>
              <div className="h-6 w-3/4 animate-pulse rounded bg-muted"></div>
              <div className="mt-4 flex items-center justify-between pt-4">
                <div className="h-8 w-20 animate-pulse rounded bg-muted"></div>
                <div className="h-10 w-10 animate-pulse rounded-full bg-muted"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
