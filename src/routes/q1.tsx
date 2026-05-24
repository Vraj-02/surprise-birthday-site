import { createFileRoute } from "@tanstack/react-router";
import { QuizPage } from "@/components/QuizPage";

export const Route = createFileRoute("/q1")({
  component: () => (
    <QuizPage
      step={1}
      totalSteps={3}
      emoji="🍔"
      question="You get hungry every 3 hours?"
      subtitle="(Be honest. Your snack drawer is the witness 🍫)"
      liePunchline="We have seen you get hungry every 3 hours. Don't lie."
      nextRoute="/q2"
    />
  ),
});
