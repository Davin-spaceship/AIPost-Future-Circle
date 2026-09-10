import type { ReactNode } from 'react'
import { useAccordion } from './AccordionContext'

interface FaqItemProps {
  id: string
  question: string
  answer: ReactNode
  tag?: string
}

function FaqItem({ id, question, answer, tag }: FaqItemProps) {
  const { openId, toggle } = useAccordion()
  const isOpen = openId === id

  return (
    <div className="faq-item group">
      <button
        type="button"
        onClick={() => toggle(id)}
        className={`faq-btn w-full px-5 md:px-8 py-5 text-left flex justify-between items-center focus:outline-none transition-all duration-200 ${
          isOpen ? 'is-open-btn' : ''
        }`}
        aria-expanded={isOpen}
      >
        <span className="font-black text-brand-softWhite pr-4 text-base md:text-lg leading-snug">
          {question}
        </span>
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
            isOpen
              ? 'bg-brand-lime text-brand-dark rotate-180'
              : 'bg-brand-lime/10 text-brand-lime border border-brand-lime/30 group-hover:bg-brand-lime/20'
          }`}
        >
          <i className="ph-bold ph-caret-down text-sm" />
        </div>
      </button>
      <div className={`accordion-content ${isOpen ? 'is-open' : ''}`}>
        <div className="accordion-inner px-5 md:px-8 py-5 leading-relaxed font-medium bg-brand-lime/[0.03]">
          <div className="flex items-start gap-3">
            <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded bg-brand-lime text-brand-dark text-xs font-black mt-0.5">
              A
            </span>
            <div className="flex-1 text-sm md:text-base text-brand-softWhite/90 font-medium leading-relaxed">
              {answer}
            </div>
          </div>
          {tag && (
            <div className="mt-3 pl-9">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime text-xs font-bold">
                {tag}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FaqItem
