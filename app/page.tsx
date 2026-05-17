export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Cost Optimization
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find expensive prompt inefficiencies{" "}
          <span className="text-[#58a6ff]">costing you money</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your OpenAI or Anthropic usage logs and instantly see which prompts waste tokens, why, and exactly how to fix them.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Saving — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for free analysis. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["40%", "avg token reduction"],
            ["$180", "avg monthly savings"],
            ["2 min", "to first insight"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-sm text-[#8b949e] mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited log uploads (OpenAI & Anthropic)",
              "Real-time API key monitoring",
              "Per-prompt waste breakdown & score",
              "Actionable rewrite suggestions",
              "Monthly cost savings report",
              "Email alerts for cost spikes"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does it detect token waste?",
              "We parse your usage logs and apply heuristics: repeated system prompt boilerplate, verbose few-shot examples that could be compressed, redundant context re-injection, and more. Each prompt gets a waste score with a line-by-line breakdown."
            ],
            [
              "Is my API data safe?",
              "Uploaded logs are processed in-memory and never stored permanently. If you connect via API key, we only read usage metadata — never your actual prompt content unless you explicitly share it for analysis."
            ],
            [
              "Which providers are supported?",
              "OpenAI (GPT-3.5, GPT-4, GPT-4o) and Anthropic (Claude 2, Claude 3 family) are fully supported. Azure OpenAI and AWS Bedrock exports are on the roadmap."
            ]
          ].map(([q, a]) => (
            <details key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Prompt Token Waste Detector. All rights reserved.
      </footer>
    </main>
  );
}
