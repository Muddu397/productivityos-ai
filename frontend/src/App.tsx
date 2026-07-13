import { useState } from "react";
import Navbar from "./components/Navbar";
import FeatureCard from "./components/FeatureCard";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";

const features = [
  {
    emoji: "📋",
    title: "Smart Planner",
    description: "Prioritize your tasks using AI.",
    key: "planner",
  },
  {
    emoji: "📄",
    title: "Resume Analyzer",
    description: "Compare your resume with a job description.",
    key: "resume",
  },
  {
    emoji: "🤝",
    title: "Meeting Assistant",
    description: "Summarize meetings and extract action items.",
    key: "meeting",
  },
  {
    emoji: "🧠",
    title: "Productivity Coach",
    description: "Get personalized productivity advice.",
    key: "coach",
  },
];

function App() {
  const [selectedFeature, setSelectedFeature] = useState("planner");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleAnalyze = () => {
    setOutput(
`🚀 Demo Response

Feature Selected:
${selectedFeature}

Input Received:

${input}

This is a placeholder response.

In the next milestone, this response will come from Amazon Bedrock through AWS Lambda.`
    );
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-8 py-10">

        <h2 className="mb-8 text-3xl font-bold text-white">
          AI Productivity Workspace
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (

            <div
              key={feature.key}
              onClick={() => setSelectedFeature(feature.key)}
              className={`cursor-pointer rounded-2xl transition-all
              ${
                selectedFeature === feature.key
                  ? "ring-2 ring-blue-500"
                  : ""
              }`}
            >
              <FeatureCard
                emoji={feature.emoji}
                title={feature.title}
                description={feature.description}
              />
            </div>

          ))}

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <InputPanel
            input={input}
            setInput={setInput}
            onAnalyze={handleAnalyze}
          />

          <OutputPanel output={output} />

        </div>

      </main>
    </div>
  );
}

export default App;