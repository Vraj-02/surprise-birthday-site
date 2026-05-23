import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Identity Check 🔍" },
      { name: "description", content: "Are you Drashti?" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Caveat:wght@600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {["🔍", "🤔", "👀", "🕵️‍♀️", "❓", "✨", "🎈", "🎂"].map((e, i) => (
          <span
            key={i}
            className="absolute text-4xl opacity-60"
            style={{
              left: `${(i * 13 + 5) % 95}%`,
              top: `${(i * 17 + 8) % 90}%`,
              animation: `float ${3 + (i % 4)}s ${i * 0.3}s ease-in-out infinite`,
            }}
          >
            {e}
          </span>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-xl rounded-3xl border-4 border-foreground/10 bg-card p-10 shadow-[10px_10px_0_0_var(--primary)] text-center">
        <p className="font-[var(--font-fun)] text-2xl text-primary rotate-[-3deg] animate-wiggle">
          official identity check
        </p>
        <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-[0.95]">
          Are you <span className="text-primary">Drashti</span>? 🤨
        </h1>
        <p className="mt-4 text-muted-foreground">
          (Answer honestly. The cake is watching. 🎂👀)
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate({ to: "/q1" })}
            className="px-8 py-4 text-xl font-bold rounded-2xl bg-primary text-primary-foreground shadow-[6px_6px_0_0_var(--foreground)] hover:translate-y-[-3px] active:translate-y-0 transition-transform"
          >
            Yes, that's me ✨
          </button>
          <button
            onClick={() => alert("Then what are you doing here?? Shoo. 🚪")}
            className="px-8 py-4 text-xl font-bold rounded-2xl bg-secondary text-secondary-foreground shadow-[6px_6px_0_0_var(--foreground)] hover:translate-y-[-3px] active:translate-y-0 transition-transform"
          >
            No 🙅‍♀️
          </button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Step 1 of 3 — buckle up bestie
        </p>
      </div>
    </main>
  );
}
