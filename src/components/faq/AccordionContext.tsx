import { createContext, useContext, useState, type ReactNode } from 'react'

interface AccordionContextValue {
  openId: string | null
  toggle: (id: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

interface AccordionProviderProps {
  defaultOpenId?: string
  children: ReactNode
}

export function AccordionProvider({ defaultOpenId, children }: AccordionProviderProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <AccordionContext.Provider value={{ openId, toggle }}>{children}</AccordionContext.Provider>
  )
}

export function useAccordion() {
  const ctx = useContext(AccordionContext)
  if (!ctx) {
    throw new Error('useAccordion must be used within an AccordionProvider')
  }
  return ctx
}
