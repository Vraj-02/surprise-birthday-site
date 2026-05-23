import { createFileRoute } from "@tanstack/react-router";
import { QuizPage } from "@/components/QuizPage";

export const Route = createFileRoute("/q3")({
  component: () => (
    <QuizPage
      step={3}
      totalSteps={3}
      emoji="📸"
      question="You harass your friends until you get the photo you want?"
      subtitle="(And after 50+ pics, you're still not satisfied 💅)"
      liePunchline="Your friends have developed a full photographer portfolio just for you. Don't lie."
      nextRoute="/birthday"
    />
  ),
});
