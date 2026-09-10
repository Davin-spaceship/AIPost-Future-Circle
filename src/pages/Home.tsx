import BackToTop from '../components/faq/BackToTop'
import CategoryNav from '../components/faq/CategoryNav'
import FaqHero from '../components/faq/FaqHero'
import FaqItem from '../components/faq/FaqItem'
import FaqSection from '../components/faq/FaqSection'
import SiteFooter from '../components/faq/SiteFooter'
import { faqSections } from '../data/faq'

function Home() {
  return (
    <>
      <FaqHero />
      <CategoryNav />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 space-y-14">
        {faqSections.map((section) => (
          <FaqSection
            key={section.id}
            id={section.id}
            title={section.title}
            icon={section.icon}
            iconWeight={section.iconWeight}
            iconWrapClassName={section.iconWrapClassName}
            iconClassName={section.iconClassName}
            notice={section.notice}
            defaultOpenId={section.defaultOpenId}
          >
            {section.items.map((item) => (
              <FaqItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                tag={item.tag}
              />
            ))}
          </FaqSection>
        ))}
      </main>

      <SiteFooter />
      <BackToTop />
    </>
  )
}

export default Home
