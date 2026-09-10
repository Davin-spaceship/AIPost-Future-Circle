import type { ReactNode } from 'react'
import { AccordionProvider } from './AccordionContext'

interface FaqSectionProps {
  id: string
  title: string
  icon: string
  iconWeight?: 'bold' | 'fill'
  iconWrapClassName?: string
  iconClassName?: string
  notice?: ReactNode
  defaultOpenId?: string
  children: ReactNode
}

function FaqSection({
  id,
  title,
  icon,
  iconWeight = 'bold',
  iconWrapClassName,
  iconClassName,
  notice,
  defaultOpenId,
  children,
}: FaqSectionProps) {
  return (
    <AccordionProvider defaultOpenId={defaultOpenId}>
      <section id={id} className="scroll-mt-28">
        {/* 段落標題 */}
        <div className="flex items-center gap-3 mb-4 px-1">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-brand-lime/30 bg-brand-lime/10 ${
              iconWrapClassName ?? ''
            }`}
          >
            <i className={`ph-${iconWeight} ${icon} text-xl text-brand-lime ${iconClassName ?? ''}`} />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-softWhite tracking-tight">
            {title}
          </h2>
        </div>

        {/* 卡片主體 */}
        <div className="glass-card rounded-2xl overflow-hidden shadow-card">
          {notice}
          {notice ? <div className="border-t border-brand-lime/10">{children}</div> : children}
        </div>
      </section>
    </AccordionProvider>
  )
}

export default FaqSection
