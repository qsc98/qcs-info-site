/** Joins class names, skipping falsy values: cx('a', isOn && 'b'). */
export default function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}
