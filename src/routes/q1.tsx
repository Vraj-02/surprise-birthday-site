import { createFileRoute } from "@tanstack/react-router";
import { QuizPage } from "@/components/QuizPage";

export const Route = createFileRoute("/q1")({
  component: () => (
    <QuizPage
      step={1}
      totalSteps={4}
      emoji="🍔"
      question="You get hungry every 3 hours?"
      subtitle="(Be honest. Your snack drawer is the witness 🍫)"
      liePunchline="We've literally seen you eat dinner at 5pm AND 9pm. Try again."
      nextRoute="/q2"
    />
  ),
});
