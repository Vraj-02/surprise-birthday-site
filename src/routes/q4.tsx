import { createFileRoute } from "@tanstack/react-router";
import { QuizPage } from "@/components/QuizPage";

export const Route = createFileRoute("/q4")({
  component: () => (
    <QuizPage
      step={4}
      totalSteps={4}
      emoji="📸"
      question="You took 248 selfies to post the 'natural' one?"
      subtitle="(Camera roll never lies bestie)"
      liePunchline="We saw the 'delete 247, keep 1' montage. Iconic behavior tbh."
      nextRoute="/birthday"
    />
  ),
});
