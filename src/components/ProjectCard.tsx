type ProjectCardProps = {
  label: string
  title: string
  description: string
  url: string
  feedbackUrl?: string
}

export function ProjectCard({
  label,
  title,
  description,
  url,
  feedbackUrl,
}: ProjectCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-800 bg-slate-900/30 p-8 transition hover:border-cyan-500">
      <p className="text-xs tracking-[0.25em] text-cyan-400">
        {label}
      </p>

      <h3 className="mt-4 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-5 text-sm leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-8 flex gap-3">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-2xl bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
        >
          Open
        </a>

        {feedbackUrl && (
          <a
            href={feedbackUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-2xl border border-slate-700 bg-slate-900 px-5 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
          >
            Feedback
          </a>
        )}
      </div>
    </div>
  )
}