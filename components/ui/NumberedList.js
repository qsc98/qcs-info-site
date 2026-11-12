/**
 * Numbered rows divided by hairlines (01, 02…), as in the home page's
 * "Why families choose us". Items are `{ title, text }`.
 */
export default function NumberedList({ items }) {
  return (
    <ol className="flex flex-col">
      {items.map((item, i) => (
        <li key={item.title} className="flex items-start gap-3.5 border-t border-line py-3.5">
          <span
            aria-hidden="true"
            className="w-[30px] flex-none pt-[3px] font-display text-[16px] font-semibold text-teal"
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="flex flex-col gap-[3px]">
            <span className="type-title-sm text-navy">{item.title}</span>
            <span className="text-[15px] leading-normal text-text-muted">{item.text}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}
