import Navbar from "./components/Navbar";
import FeatureCard from "./components/FeatureCard";

function App() {
  const features = [
    {
      emoji: "📋",
      title: "Smart Planner",
      description: "Prioritize tasks using Amazon Bedrock AI.",
    },
    {
      emoji: "📄",
      title: "Resume Analyzer",
      description: "Compare your resume with any job description.",
    },
    {
      emoji: "🤝",
      title: "Meeting Assistant",
      description: "Generate summaries and action items instantly.",
    },
    {
      emoji: "🧠",
      title: "Productivity Coach",
      description: "Receive personalized productivity suggestions.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-8 py-10">
        <h2 className="mb-8 text-3xl font-bold text-white">
          AI Productivity Tools
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              emoji={feature.emoji}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;