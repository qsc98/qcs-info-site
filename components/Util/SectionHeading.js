export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-3 py-1 text-xs font-medium text-yellow-900 shadow-md ring-1 ring-yellow-500/50">
            {eyebrow}
          </span>
        </div>
      ) : null}
  <h2 className="mt-3 text-3xl font-jakarta font-bold text-navy leading-[1.2]">{title}</h2>
  {description ? <p className="mx-auto mt-2 max-w-3xl font-inter font-normal text-neutraltext leading-[1.6] mt-2 max-w-3xl">{description}</p> : null}
    </div>
  )
}
