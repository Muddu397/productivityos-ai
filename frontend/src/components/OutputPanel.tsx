type OutputPanelProps = {
  output: string;
};

const OutputPanel = ({ output }: OutputPanelProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">
        AI Response
      </h2>

      <div className="min-h-[250px] whitespace-pre-wrap rounded-xl border border-slate-700 bg-slate-950 p-4 text-slate-300">
        {output || "AI response will appear here..."}
      </div>
    </div>
  );
};

export default OutputPanel;