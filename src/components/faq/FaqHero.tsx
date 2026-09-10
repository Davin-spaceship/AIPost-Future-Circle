function FaqHero() {
  return (
    <header className="relative min-h-[340px] sm:min-h-[380px] flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
      {/* 中央光暈效果 */}
      <div className="absolute inset-0 hero-glow animate-pulse-glow" aria-hidden="true" />

      {/* 頂部裝飾線 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-lime/30 to-transparent" aria-hidden="true" />

      {/* 主要內容 */}
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        {/* Cohort 徽章 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/5 mb-6 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse-glow" />
          <span className="text-xs sm:text-sm font-bold text-brand-lime tracking-widest uppercase">
            AIPost Future Circle
          </span>
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse-glow" />
          <span className="text-xs sm:text-sm font-bold text-brand-lime tracking-widest uppercase">
            Cohort 01
          </span>
        </div>

        {/* 主標題 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight tracking-tight text-brand-softWhite">
          社群互動{' '}
          <span className="text-brand-softWhite">FAQ</span>
        </h1>

        {/* 導言 */}
        <p className="text-brand-slate text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-lg">
          遇到參與、出席或社群互動問題時，先從這裡快速找到答案{' '}
          <i className="ph ph-rocket inline-block align-middle text-brand-lime text-xl md:text-2xl ml-1" />
        </p>
      </div>

      {/* 底部裝飾線 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-lime/20 to-transparent" aria-hidden="true" />
    </header>
  )
}

export default FaqHero
