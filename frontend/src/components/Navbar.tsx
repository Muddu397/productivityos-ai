const Navbar = () => {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div>
          <h1 className="text-3xl font-bold text-white">
            ProductivityOS
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Think Less. Do More.
          </p>
        </div>

        <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2">
          <p className="text-sm font-medium text-blue-300">
            Powered by Amazon Bedrock
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;