/**
 * Route group for the pages that have not been redesigned yet. `.legacy`
 * scopes their old base styles (app/legacy.css) so they cannot leak into the
 * design system. Move a page out of this group when it is redesigned.
 */
export default function LegacyLayout({ children }) {
  return <div className="legacy flex flex-col gap-y-16 sm:gap-y-20 lg:gap-y-28">{children}</div>
}
