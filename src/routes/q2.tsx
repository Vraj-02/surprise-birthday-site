import { createFileRoute } from "@tanstack/react-router";
import { QuizPage } from "@/components/QuizPage";

export const Route = createFileRoute("/q2")({
  component: () => (
    <QuizPage
      step={2}
      totalSteps={4}
      emoji="📱"
      question="You have 47+ unread WhatsApp messages right now?"
      subtitle="(We'll wait while you check 👀)"
      liePunchline="Open your phone. We DARE you to show the notification bar."
      nextRoute="/q3"
    />
  ),
});
