type FeatureCardProps = {
  emoji: string;
  title: string;
  description: string;
};

const FeatureCard = ({ emoji, title, description }: FeatureCardProps) => {
  return (
    <div className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="text-4xl">{emoji}</div>

      <h3 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;