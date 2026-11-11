import Wordmark from '@/components/layout/Wordmark'
import Logo from '@/components/ui/Logo'
import cx from '@/lib/cx'
import siteConfig from '@/site.config'

/** Logo and short brand name for the header bars: two lines below 1024px. */
export default function Brand({ logoClassName }) {
  return (
    <>
      <Logo className={cx('size-9', logoClassName)} />
      <Wordmark
        name={siteConfig.shortName}
        breakClassName="lg:hidden"
        className="font-display text-[14px] leading-[1.05] font-bold text-navy lg:text-[18px] lg:leading-normal"
      />
    </>
  )
}
