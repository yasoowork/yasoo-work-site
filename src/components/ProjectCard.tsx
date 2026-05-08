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

      <div className="mt-8 flex items-center gap-4">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-slate-500 transition hover:text-cyan-400"
        >
          Open →
        </a>

        {feedbackUrl && (
          <a
            href={feedbackUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-600 transition hover:text-cyan-400"
          >
            Feedback
          </a>
        )}
      </div>
    </div>
  )
}