import { createFileRoute } from "@tanstack/react-router";
import { QuizPage } from "@/components/QuizPage";

export const Route = createFileRoute("/q3")({
  component: () => (
    <QuizPage
      step={3}
      totalSteps={4}
      emoji="🛌"
      question="You said 'just 5 more minutes' and slept 2 more hours?"
      subtitle="(This morning. Don't act new.)"
      liePunchline="Your alarm has been snoozed 14 times this week. We counted."
      nextRoute="/q4"
    />
  ),
});
