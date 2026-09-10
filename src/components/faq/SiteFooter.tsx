function SiteFooter() {
  return (
    <footer className="max-w-5xl mx-auto px-4 sm:px-6 mt-20 mb-12 text-center">
      <div className="glass-card shadow-card p-6 md:p-10 rounded-2xl relative">
        <p className="text-brand-softWhite/90 mb-6 font-bold leading-relaxed text-base md:text-lg">
          FAQ 會依 Cohort 01 的實際使用情況持續更新。
          <br className="hidden sm:block" />
          社群公告與互動可詢問{' '}
          <strong className="inline-block bg-brand-lime text-brand-dark px-2 py-0.5 rounded mx-1 whitespace-nowrap font-black text-sm">
            Community Ambassador
          </strong>
          ；Weekly Lab 與 Circle Lab Notes 可詢問{' '}
          <strong className="inline-block bg-brand-lime text-brand-dark px-2 py-0.5 rounded mx-1 whitespace-nowrap font-black text-sm">
            Learning Ambassador
          </strong>
          ；<br className="hidden sm:block" />
          參與狀態、卡點與重新投入可聯絡{' '}
          <strong className="inline-block bg-brand-lime text-brand-dark px-2 py-0.5 rounded mx-1 whitespace-nowrap font-black text-sm">
            Member Success Ambassador
          </strong>
          。
        </p>

        <div className="inline-flex items-center text-left gap-2 text-xs sm:text-sm text-brand-softWhite/80 bg-brand-lime/5 px-4 py-3 rounded-xl border border-brand-lime/20">
          <i className="ph-bold ph-info text-brand-lime text-lg shrink-0" />
          <span className="font-bold">
            小提醒：Member Success Ambassador 可能會為了必要聯繫加入你的個人 LINE；除參與關懷與協助處理卡點外，不會頻繁打擾{' '}
            <i className="ph ph-smiley inline-block align-middle text-brand-lime text-xl" />
          </span>
        </div>
      </div>

      {/* 底部品牌標記 */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-lime/40 to-transparent" />
        <span className="text-xs font-semibold text-brand-slate tracking-widest uppercase">
          AIPost Future Circle · Cohort 01
        </span>
      </div>
    </footer>
  )
}

export default SiteFooter
