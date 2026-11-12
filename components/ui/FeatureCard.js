import CheckList from '@/components/ui/CheckList'
import IconTile from '@/components/ui/IconTile'

/**
 * A white card with an icon tile and a title, then a sentence (`text`), a
 * check list (`items`) and/or any `children`.
 */
export default function FeatureCard({ icon, title, text, items, children }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-card border border-line bg-white p-5 md:p-6">
      <div className="flex items-center gap-3">
        {icon ? <IconTile name={icon} /> : null}
        <h3 className="type-title-sm text-navy">{title}</h3>
      </div>
      {text ? <p className="type-card-line text-text-muted">{text}</p> : null}
      {items ? <CheckList items={items} /> : null}
      {children}
    </div>
  )
}
