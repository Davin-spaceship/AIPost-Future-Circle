import { useEffect, useState } from 'react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="回到頁面最上方"
      className={`fixed z-40 flex items-center justify-center bg-brand-lime text-brand-dark rounded-2xl shadow-glow-lime transition-all duration-300 hover:shadow-glow-lime-lg hover:-translate-y-1 active:translate-y-0 focus:outline-none cursor-pointer border border-brand-lime/50
        bottom-5 right-4 w-11 h-11 text-xl
        sm:bottom-6 sm:right-6 sm:w-12 sm:h-12 sm:text-2xl
        lg:bottom-8 lg:right-8 lg:w-14 lg:h-14 lg:text-3xl
        ${isVisible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'}
      `}
    >
      <i className="ph-bold ph-arrow-up" />
    </button>
  )
}

export default BackToTop
