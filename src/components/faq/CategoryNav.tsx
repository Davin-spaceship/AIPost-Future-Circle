import { useEffect, useRef, useState } from 'react'

interface Category {
  href: string
  icon: string
  label: string
}

const CATEGORIES: Category[] = [
  { href: '#section-announcement', icon: 'ph-megaphone', label: '社群公告' },
  { href: '#section-lab', icon: 'ph-books', label: '未來共研所' },
  { href: '#section-interaction', icon: 'ph-chats-circle', label: '分享與互動' },
  { href: '#section-maintenance', icon: 'ph-users-three', label: '參與與支持' },
  { href: '#section-exit', icon: 'ph-sign-out', label: '調整與轉換' },
]

function CategoryNav() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav aria-label="FAQ 分類導覽" className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 mb-12 sticky top-4">
      {/* ── 桌面版 ── */}
      <div className="hidden md:flex justify-center glass-card rounded-2xl p-1.5 overflow-x-auto hide-scrollbar gap-1">
        {CATEGORIES.map((category) => (
          <a
            key={category.href}
            href={category.href}
            className="shrink-0 px-4 py-2.5 rounded-xl text-brand-softWhite/80 font-bold text-sm flex items-center gap-2 border border-transparent hover:border-brand-lime/30 hover:text-brand-lime hover:bg-brand-lime/5 transition-all duration-200"
          >
            <i className={`ph-bold ${category.icon} text-base`} />
            {category.label}
          </a>
        ))}
      </div>

      {/* ── 手機版 ── */}
      <div className="md:hidden" ref={menuRef}>
        <div className="glass-card rounded-2xl p-2.5 flex items-center justify-between">
          <span className="font-bold text-brand-softWhite/80 px-3 text-sm">快速前往分類</span>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 rounded-xl hover:bg-brand-lime/10 text-brand-lime transition-colors border border-transparent hover:border-brand-lime/30"
            aria-label={isOpen ? '關閉選單' : '開啟選單'}
          >
            <i className={`ph-bold ${isOpen ? 'ph-x' : 'ph-list'} text-xl`} />
          </button>
        </div>

        {isOpen && (
          <div className="mt-2 glass-card rounded-2xl overflow-hidden animate-slide-up">
            {CATEGORIES.map((category) => (
              <a
                key={category.href}
                href={category.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 hover:bg-brand-lime/10 text-brand-softWhite/80 hover:text-brand-lime transition-colors font-bold text-sm border-b border-brand-lime/10 last:border-b-0"
              >
                <i className={`ph-bold ${category.icon} text-lg`} />
                {category.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default CategoryNav
