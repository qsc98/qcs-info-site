import SectionEyebrow from './SectionEyebrow'

const SectionHeading = ({ eyebrow, title, description, eyebrowTone = 'navy' }) => (
  <div className="text-center">
    {eyebrow ? (
      <div className="flex justify-center">
        <SectionEyebrow tone={eyebrowTone}>{eyebrow}</SectionEyebrow>
      </div>
    ) : null}
    <h2 className="mt-3 font-jakarta text-3xl font-semibold sm:text-4xl">{title}</h2>
    {description ? (
      <p className="mx-auto mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-black-500">
        {description}
      </p>
    ) : null}
  </div>
)

export default SectionHeading
