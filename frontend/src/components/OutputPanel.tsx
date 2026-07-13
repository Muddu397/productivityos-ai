import ReactMarkdown from "react-markdown";

type OutputPanelProps = {
  output: string;
};

const OutputPanel = ({ output }: OutputPanelProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">
        AI Response
      </h2>

      <div className="h-72 overflow-y-auto rounded-xl border border-slate-700 bg-slate-950 p-4">
        <div className="prose prose-invert max-w-none text-white">
          <ReactMarkdown>{output}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default OutputPanel;