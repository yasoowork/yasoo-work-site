import './App.css'

function App() {
  const links = [
    ['GitHub', 'https://github.com/yasoowork'],
    ['GitHub Sponsors', 'https://github.com/sponsors/yasoowork'],
    ['note', 'https://note.com/yasoo_fire'],
    ['X', 'https://x.com/yasoo_fire'],
  ]

  const relatedLinks = [
    ['Martial Arts', 'https://amzn.to/4ujjP6S'],
    ['Supplements', 'https://amzn.to/4ubZgJI'],
    ['PC & Accessories', 'https://amzn.to/42FIAhO'],
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-24">
          <h1 className="text-2xl font-semibold tracking-wide">
            yasoo.work
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Personal Projects / Notes
          </p>
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
                JP Schedule to ICS
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-400">
                スケジュールテキストをカレンダー用のICSファイルに変換するサービス。
              </p>

              <div className="mt-8 flex items-center gap-4">
                <p className="text-sm text-slate-500 transition group-hover:text-cyan-400">
                  Open →
                </p>

                <span
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href="https://feedback.yasoo.work/submit?service=JP%20Schedule%20to%20ICS"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-500 transition hover:text-cyan-400"
                  >
                    Feedback →
                  </a>
                </span>
              </div>
            </a>

            <a
              href="https://mierulens.yasoo.work"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-slate-800 bg-slate-900/30 p-8 transition hover:border-cyan-500"
            >
              <p className="text-xs tracking-[0.25em] text-cyan-400">
                TOOL
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                MieruLens
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-400">
                スマホのカメラ映像をリアルタイムで補正し、輪郭や色の見やすさを補助するWebアプリ。
              </p>

              <div className="mt-8 flex items-center gap-4">
                <p className="text-sm text-slate-500 transition group-hover:text-cyan-400">
                  Open →
                </p>

                <span
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href="https://feedback.yasoo.work/submit?service=MieruLens"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-500 transition hover:text-cyan-400"
                  >
                    Feedback →
                  </a>
                </span>
              </div>
            </a>

            <a
              href="https://feedback.yasoo.work"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-slate-800 bg-slate-900/30 p-8 transition hover:border-cyan-500"
            >
              <p className="text-xs tracking-[0.25em] text-cyan-400">
                TOOL
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                YW Feedback
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-400">
                yasoo.work 系サービス向けの
                フィードバック・不具合報告基盤。
              </p>

              <div className="mt-8 flex items-center gap-4">
                <p className="text-sm text-slate-500 transition group-hover:text-cyan-400">
                  Open →
                </p>

                <span
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href="https://feedback.yasoo.work/submit?service=YW%20Feedback"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-500 transition hover:text-cyan-400"
                  >
                    Feedback →
                  </a>
                </span>
              </div>
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

          <div className="grid gap-4 md:grid-cols-4">
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


        <section className="mb-28">
          <SectionTitle title="Related" />

          <div className="grid gap-4 md:grid-cols-3">
            {relatedLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer sponsored"
                className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 text-sm text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <section id="privacy-policy" className="mb-28">
          <SectionTitle title="Privacy Policy" />

          <div className="rounded-3xl border border-slate-800 bg-slate-900/20 p-8">
            <p className="text-sm leading-9 text-slate-400">
              当サイトでは、アクセス解析のために Google Analytics を利用しています。
              <br />
              また、Google AdSense・Amazonアソシエイト等の広告サービスを利用しています。
              <br />
              Cookie により取得された情報は、サイト改善やアクセス解析の目的で利用されます。
              <br />
              個人情報を第三者へ不適切に提供することはありません。
            </p>
          </div>
        </section>

        <footer className="border-t border-slate-800 pt-8 text-sm text-slate-600">
          <p>© 2026 yasoo.work</p>
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