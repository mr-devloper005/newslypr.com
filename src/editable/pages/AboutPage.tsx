import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="editable-page-enter bg-white text-[#111]">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute left-[17%] top-0 h-80 w-80 bg-[var(--slot4-accent)] editable-angle" />
          <div className="relative mx-auto grid max-w-[1180px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-24">
            <div className="pt-16">
              <p className="text-xs font-black uppercase tracking-[0.28em]">{pagesContent.about.badge}</p>
              <h1 className="mt-3 text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-8xl">Media Distribution</h1>
            </div>
            <div className="editable-stagger grid gap-8 md:grid-cols-2">
              <article className="self-start">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">Mission</p>
                <h2 className="mt-3 text-3xl font-black uppercase leading-none">Make every release easier to find.</h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-black/68">{pagesContent.about.description}</p>
              </article>
              <article className="self-start pt-20">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">Story</p>
                <h2 className="mt-3 text-3xl font-black uppercase leading-none">A public desk for fast-moving updates.</h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-black/68">{pagesContent.about.paragraphs[0]}</p>
              </article>
              <article className="md:col-span-2">
                <div className="h-64 bg-[#171717]" />
                <div className="bg-[var(--slot4-accent)] px-6 py-3 text-xs font-black uppercase tracking-[.16em]">Structured releases + searchable archives + public context</div>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-20">
          <div className="editable-stagger">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="border-t border-black/20 py-7">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">0{index + 1}</p>
                <h2 className="mt-3 text-3xl font-black uppercase leading-none">{value.title}</h2>
                <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-black/65">{value.description}</p>
              </div>
            ))}
          </div>
          <aside className="self-start bg-[#171717] p-7 text-white sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">Approach</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none">Distribution + clarity = results</h2>
            <div className="mt-7 grid gap-4">
              {['Press releases that scan quickly', 'Archive pages that show real posts', 'Detail pages with working action buttons', 'Navigation that keeps visitors moving'].map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm font-bold text-white/75"><Check className="h-4 w-4 text-[var(--slot4-accent)]" /> {item}</p>
              ))}
            </div>
            <Link href="/updates" className="mt-9 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[.16em]"><ArrowRight className="h-7 w-7 text-[var(--slot4-accent)]" /> More media updates</Link>
          </aside>
        </section>

        <section className="bg-[var(--slot4-accent)] px-4 py-16 text-center">
          <h2 className="mx-auto max-w-3xl text-5xl font-black uppercase leading-[.9] tracking-[-.04em] sm:text-7xl">Together we distribute better.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-bold leading-7">Use {SITE_CONFIG.name} as the public face for announcements, campaign updates, coverage, and media-ready releases.</p>
        </section>
      </main>
    </EditableSiteShell>
  )
}
