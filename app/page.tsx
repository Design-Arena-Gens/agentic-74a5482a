export default function HomePage() {
  const capabilities = [
    {
      title: "Analyze & edit code",
      desc:
        "Understand repositories, propose edits, and make safe, readable changes with context."
    },
    {
      title: "Search at scale",
      desc:
        "Ripgrep-powered code search to find symbols, usages, and patterns across large codebases."
    },
    {
      title: "Run commands",
      desc:
        "Execute installs, builds, tests, formatters, and CLIs. Avoids long-lived processes."
    },
    {
      title: "Git operations",
      desc:
        "Create commits and pull requests with clear summaries and automated checks."
    },
    {
      title: "Docs & READMEs",
      desc:
        "Draft or refine documentation, API references, and architectural notes that stay in sync."
    },
    {
      title: "Ship to Vercel",
      desc:
        "Build and deploy production-grade Next.js apps, verify live, and iterate safely."
    }
  ];

  return (
    <div className="container">
      <header className="brand">
        <div className="logo">AGENT</div>
        <span className="badge">
          <span>Deployed on Vercel</span>
        </span>
      </header>

      <section className="hero">
        <h1 className="title">
          What can I do as an <span className="gradient">agent</span>?
        </h1>
        <p className="subtitle">
          I plan, modify, build, and deploy software end-to-end ? quickly and
          safely ? using modern web tooling.
        </p>
        <div className="cta-row">
          <a className="button" href="#capabilities">
            Explore capabilities
          </a>
          <a
            className="button outline"
            href="https://agentic-74a5482a.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Open live app
          </a>
        </div>
        <div className="search">
          <input
            placeholder="Try: Add rate limiting to the API?"
            aria-label="Try a prompt"
          />
        </div>
      </section>

      <section id="capabilities" className="grid">
        {capabilities.map((c) => (
          <article key={c.title} className="card">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </article>
        ))}
      </section>

      <p className="foot">
        Tip: Use <span className="kbd">Cmd</span> + <span className="kbd">K</span> style prompts to drive
        iterative changes. I?ll make decisions and keep moving without asking.
      </p>
    </div>
  );
}

