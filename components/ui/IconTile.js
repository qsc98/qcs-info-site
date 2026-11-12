import Icon from '@/components/ui/Icon'

const sizes = {
  sm: { box: 'size-9 rounded-[10px]', icon: 18 },
  md: { box: 'size-11 rounded-icon-tile', icon: 22 },
}

/** A line icon in a mint tile, as used on light cards. */
export default function IconTile({ name, size = 'sm' }) {
  const s = sizes[size]
  return (
    <span className={`flex flex-none items-center justify-center bg-mint text-teal ${s.box}`}>
      <Icon name={name} size={s.icon} />
    </span>
  )
}
