type InputPanelProps = {
  input: string;
  setInput: (value: string) => void;
  onAnalyze: () => void;
};

const InputPanel = ({
  input,
  setInput,
  onAnalyze,
}: InputPanelProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Input
      </h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your tasks, resume, meeting notes, or any text..."
        className="h-56 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-blue-500"
      />

      <button
        onClick={onAnalyze}
        className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Analyze with AI
      </button>
    </div>
  );
};

export default InputPanel;