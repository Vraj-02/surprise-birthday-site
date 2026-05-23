import { createFileRoute } from "@tanstack/react-router";
import { QuizPage } from "@/components/QuizPage";

export const Route = createFileRoute("/q2")({
  component: () => (
    <QuizPage
      step={2}
      totalSteps={3}
      emoji="🧠"
      question="You cannot make a single decision by yourself?"
      subtitle="(Even picking what to eat is a 30-minute meeting 😵‍💫)"
      liePunchline="We've seen you use your full brain on food and STILL not decide what to eat. Try again."
      nextRoute="/q3"
    />
  ),
});
