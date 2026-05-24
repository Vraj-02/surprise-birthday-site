import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

interface QuizPageProps {
  step: number;
  totalSteps: number;
  question: string;
  subtitle?: string;
  emoji: string;
  liePunchline: string;
  nextRoute: string;
  floatingEmojis?: string[];
}

export function QuizPage({
  step,
  totalSteps,
  question,
  subtitle,
  emoji,
  liePunchline,
  nextRoute,
  floatingEmojis = ["✨", "🎈", "🎂", "💖", "🦄", "🍰", "🎉", "🎁"],
}: QuizPageProps) {
  const navigate = useNavigate();
  const [lied, setLied] = useState(false);
  const [shake, setShake] = useState(false);

  const handleNo = () => {
    setLied(true);
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {floatingEmojis.map((e, i) => (
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

      <div
        className={`relative z-10 w-full max-w-xl rounded-3xl border-4 border-foreground/10 bg-card p-10 shadow-[10px_10px_0_0_var(--accent)] text-center transition-transform ${shake ? "animate-wiggle" : ""}`}
      >
        <p className="font-[var(--font-fun)] text-2xl text-primary">question {step}</p>
        <div className="mt-2 text-6xl">{emoji}</div>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">{question}</h1>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}

        {lied && (
          <div className="mt-6 rounded-2xl border-2 border-dashed border-primary bg-primary/10 p-4 animate-pop">
            <p className="font-[var(--font-fun)] text-2xl text-primary">
              don't lie 🙄
            </p>
            <p className="text-sm text-muted-foreground mt-1">{liePunchline}</p>
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate({ to: nextRoute })}
            className="px-8 py-4 text-xl font-bold rounded-2xl bg-primary text-primary-foreground shadow-[6px_6px_0_0_var(--foreground)] hover:translate-y-[-3px] active:translate-y-0 transition-transform"
          >
            Yes 💁‍♀️
          </button>
          <button
            onClick={handleNo}
            className="px-8 py-4 text-xl font-bold rounded-2xl bg-secondary text-secondary-foreground shadow-[6px_6px_0_0_var(--foreground)] hover:translate-y-[-3px] active:translate-y-0 transition-transform"
          >
            {noButtonText}
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-8 rounded-full ${i < step ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Step {step + 1} of {totalSteps + 1}
        </p>
      </div>
    </main>
  );
}
