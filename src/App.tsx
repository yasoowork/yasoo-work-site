import './App.css'

function App() {
  const links = [
    ['GitHub', 'https://github.com/yasoowork'],
    ['note', 'https://note.com/yasoo_fire'],
    ['X', 'https://x.com/yasoo_fire'],
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-24">
          <div>
            <h1 className="text-2xl font-semibold tracking-wide">
              yasoo.work
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Personal Projects / Notes
            </p>
          </div>
        </header>

        <section className="mb-28">
          <SectionTitle title="About" />

          <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-8">
            <p className="text-sm leading-9 text-slate-400">
              yasoo.work は、サイドFIREを軸に、IT・格闘技・投資まわりの活動をまとめるハブサイトです。
              <br />
              公開したサービスや記事、進行中のプロジェクトをここから辿れるようにしています。
            </p>
          </div>
        </section>

        <section className="mb-28">
          <SectionTitle title="Projects" />

          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="https://schedule.yasoo.work"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-slate-800 bg-slate-900/30 p-8 transition hover:border-cyan-500"
            >
              <p className="text-xs tracking-[0.25em] text-cyan-400">
                TOOL
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                Schedule to ICS
              </h3>
              <p className="mt-5 text-sm leading-8 text-slate-400">
                スケジュールテキストをカレンダー用のICSファイルに変換するサービス。
              </p>
              <p className="mt-8 text-sm text-slate-500 transition group-hover:text-cyan-400">
                Open →
              </p>
            </a>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/20 p-8">
              <p className="text-xs tracking-[0.25em] text-slate-500">
                COMING SOON
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                SideFIRE Assist
              </h3>
              <p className="mt-5 text-sm leading-8 text-slate-500">
                サイドFIRE運用を支援するOSSツール。準備中。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-28">
          <SectionTitle title="Links" />

          <div className="grid gap-4 md:grid-cols-3">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <footer className="border-t border-slate-800 pt-8 text-sm text-slate-600">
          © 2026 yasoo.work
        </footer>
      </div>
    </main>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-8 flex items-center gap-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="h-px flex-1 bg-slate-800" />
    </div>
  )
}

export default App