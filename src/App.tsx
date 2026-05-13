import './App.css'
import { ProjectCard } from "./components/ProjectCard"

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
        <header className="site-header">
          <a href="/" className="brand">
            <img
              src="/hearth-mark.svg"
              alt="Hearth Mark"
              className="brand-mark"
            />
            <div className="brand-text">
              <h1 className="text-2xl font-semibold tracking-wide">
                yasoo.work
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Personal Projects / Notes
              </p>
            </div>
          </a>
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
            <ProjectCard
              label="TOOL"
              title="JP Schedule to ICS"
              description="スケジュールテキストをカレンダー用のICSファイルに変換するサービス。"
              url="https://schedule.yasoo.work"
              feedbackUrl="https://feedback.yasoo.work/submit?service=JP%20Schedule%20to%20ICS"
            />

            <ProjectCard
              label="TOOL"
              title="MieruLens"
              description="スマホのカメラ映像をリアルタイムで補正し、輪郭や色の見やすさを補助するWebアプリ。"
              url="https://mierulens.yasoo.work"
              feedbackUrl="https://feedback.yasoo.work/submit?service=MieruLens"
            />

            <ProjectCard
              label="TOOL"
              title="YW Feedback"
              description="yasoo.work 系サービス向けのフィードバック・不具合報告基盤。"
              url="https://feedback.yasoo.work"
              feedbackUrl="https://feedback.yasoo.work/submit?service=YW%20Feedback"
            />
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
              また、Amazonアソシエイト等の広告サービスを利用しています。
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