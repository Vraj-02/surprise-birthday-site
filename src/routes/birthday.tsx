import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import pic1 from "@/assets/pic1.jpeg";
import pic2 from "@/assets/pic2.jpeg";
import pic3 from "@/assets/pic3.jpeg";
import pic4 from "@/assets/pic4.jpeg";
import pic5 from "@/assets/pic5.jpeg";
import pic6 from "@/assets/pic6.jpeg";

export const Route = createFileRoute("/birthday")({
  component: Birthday,
  head: () => ({
    meta: [
      { title: "Happy Birthday, Drashti! 🎉" },
      { name: "description", content: "Identity confirmed. Cake incoming." },
    ],
  }),
});

const compliments = [
  "Officially older. Still won't admit it. 👵✨",
  "Aging like fine wine 🍷… that someone left in the sun.",
  "Another year, another excuse to eat cake for breakfast 🎂",
  "You're not old, you're a limited edition collectible 💅",
  "Plot twist: you're the main character today 🌟",
  "Warning: birthday girl may spontaneously start dancing 💃",
  "Studies show: people born today are 100% iconic 📊",
];

const roastFacts = [
  { emoji: "🧃", title: "Ages with style", text: "Still chooses juice boxes over wine. We respect it." },
  { emoji: "📱", title: "Notification queen", text: "Has 47 unread messages right now. We can feel it." },
  { emoji: "🛌", title: "Professional napper", text: "Could win Olympic gold for 'rolling over for 5 more minutes'." },
  { emoji: "🍕", title: "Food critic (unpaid)", text: "Will rate every restaurant on Earth, asked or not." },
  { emoji: "🎤", title: "Shower concert artist", text: "Album drops every morning. Acoustics: questionable." },
  { emoji: "📸", title: "Took 248 selfies", text: "To post the one that looked 'natural'. We saw the camera roll." },
];

function Birthday() {
  const [count, setCount] = useState(0);
  const [compliment, setCompliment] = useState(compliments[0]);
  const [confetti, setConfetti] = useState<{ id: number; left: number; bg: string; delay: number }[]>([]);

  const blowCandle = () => {
    const next = count + 1;
    setCount(next);
    setCompliment(compliments[next % compliments.length]);
    const colors = ["var(--confetti-1)", "var(--confetti-2)", "var(--confetti-3)", "var(--primary)", "var(--accent)"];
    const burst = Array.from({ length: 24 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      bg: colors[i % colors.length],
      delay: Math.random() * 0.3,
    }));
    setConfetti((c) => [...c, ...burst]);
    setTimeout(() => {
      setConfetti((c) => c.filter((p) => !burst.find((b) => b.id === p.id)));
    }, 2500);
  };

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-50">
        {confetti.map((p) => (
          <span
            key={p.id}
            className="absolute top-0 h-3 w-2 rounded-sm"
            style={{
              left: `${p.left}%`,
              background: p.bg,
              animation: `float 2.4s ${p.delay}s ease-in forwards`,
              transform: "translateY(-20px)",
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {["🎈", "🎂", "🎉", "✨", "🦄", "🍰", "💖", "🎁"].map((e, i) => (
          <span
            key={i}
            className="absolute text-4xl opacity-70"
            style={{
              left: `${(i * 13 + 5) % 95}%`,
              top: `${(i * 17 + 10) % 90}%`,
              animation: `float ${3 + (i % 4)}s ${i * 0.3}s ease-in-out infinite`,
            }}
          >
            {e}
          </span>
        ))}
      </div>

      <section className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-24 text-center">
        <p className="font-[var(--font-fun)] text-3xl text-primary rotate-[-4deg] animate-wiggle">
          identity confirmed ✅
        </p>
        <h1 className="mt-4 text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight">
          It's <span className="text-primary">Drashti's</span> birthday 🎂
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
          You passed the vibe check. Now accept your scientifically approved birthday tribute.
        </p>

        <img
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80"
          alt="Birthday cake with candles"
          className="mt-10 w-full max-w-md rounded-3xl border-4 border-primary shadow-[8px_8px_0_0_var(--accent)] animate-float"
        />

        <div className="mt-12 w-full rounded-3xl border-4 border-foreground/10 bg-card p-8 shadow-[8px_8px_0_0_var(--secondary)]">
          <h2 className="text-2xl md:text-3xl font-bold">Blow the candle 🕯️</h2>
          <p className="mt-2 text-muted-foreground">(Tap it. We can't actually detect your breath. Yet.)</p>
          <button
            onClick={blowCandle}
            className="mt-6 text-7xl md:text-8xl hover:scale-110 active:scale-95 transition-transform"
            aria-label="Blow candle"
          >
            🎂
          </button>
          <p className="mt-6 font-[var(--font-fun)] text-2xl md:text-3xl text-primary animate-pop" key={count}>
            {compliment}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Candles blown: {count}</p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-center text-4xl md:text-5xl font-bold">The official gallery 📸</h2>
        <p className="mt-2 text-center text-muted-foreground">
          (Certified iconic moments 😈)
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[pic1, pic2, pic3, pic4, pic5, pic6].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Birthday memory ${i + 1}`}
              className="aspect-square w-full rounded-2xl object-cover border-4 border-card shadow-[4px_4px_0_0_var(--primary)] hover:rotate-2 transition-transform"
              style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 2}deg)` }}
            />
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 text-center">
        <div className="rounded-3xl border-4 border-primary bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/30 p-10 shadow-[10px_10px_0_0_var(--foreground)]">
          <p className="font-[var(--font-fun)] text-3xl md:text-4xl">
            Wishing you cake that doesn't end, drama that does, and a year as iconic as you think you are. 💖
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            (You're right. You ARE that iconic.)
          </p>
          <div className="mt-6 text-5xl">🎈🎉🥳🎂🎁</div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Built with love, sarcasm, and zero parental supervision.
        </p>
      </section>
    </main>
  );
}
