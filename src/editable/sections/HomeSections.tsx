import Link from 'next/link'
import { ArrowRight, Megaphone, Search, Send } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableCategory, getEditableExcerpt, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const side = posts.slice(1, 4)
  const heroTitle = pagesContent.home.hero.title.join(' ')

  return (
    <section className="editable-page-enter bg-white">
      <div className="relative mx-auto max-w-[1260px] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="absolute right-6 top-10 hidden h-64 w-64 bg-[var(--slot4-accent)] lg:block editable-angle" />
        <div className="relative grid min-h-[560px] overflow-hidden bg-[#171717] text-white lg:grid-cols-[1.08fr_.92fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="editable-fade-up text-xs font-black uppercase tracking-[.26em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
            <h1 className="editable-fade-up mt-5 max-w-4xl text-5xl font-black leading-[.9] tracking-[-.04em] sm:text-7xl lg:text-[6.5rem]">
              {lead?.title || heroTitle}
            </h1>
            <p className="editable-fade-up mt-6 max-w-2xl text-base font-semibold leading-8 text-white/72">
              {lead ? getEditableExcerpt(lead, 210) : pagesContent.home.hero.description}
            </p>
            <div className="editable-fade-up mt-9 flex flex-wrap gap-3">
              <Link href={lead ? postHref(primaryTask, lead, primaryRoute) : primaryRoute} className={dc.button.accent}>Open lead update <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/create" className="inline-flex items-center justify-center gap-2 border border-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black">Submit release <Send className="h-4 w-4" /></Link>
            </div>
          </div>
          <aside className="relative border-t border-white/15 p-7 sm:p-10 lg:border-l lg:border-t-0">
            <div className="absolute -right-10 bottom-8 h-52 w-52 bg-[var(--slot4-accent)] editable-angle" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[.24em] text-white/55">Distribution queue</p>
              <div className="mt-7 grid gap-px bg-white/20 editable-stagger">
                {(side.length ? side : posts.slice(0, 3)).map((post, index) => (
                  <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="editable-card-hover block bg-[#171717] p-5 hover:bg-[var(--slot4-accent)] hover:text-black">
                    <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[.18em] opacity-70">
                      <span>{getEditableCategory(post)}</span>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="mt-3 text-2xl font-black leading-[1] tracking-[-.03em]">{post.title}</h2>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 opacity-70">{getEditableExcerpt(post, 120)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 8)
  if (!railPosts.length) return null
  return (
    <section className="bg-[#171717] text-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[.24em] text-white/55">Releases designed for fast scanning</p>
          <h2 className="mt-2 text-5xl font-black leading-none tracking-[-.04em] sm:text-6xl">For Media Teams</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 editable-stagger">
          {railPosts.map((post, index) => <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[8] || posts[0]
  const briefs = posts.slice(9, 15).length ? posts.slice(9, 15) : posts.slice(1, 7)
  if (!feature) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} grid gap-10 py-14 sm:py-20 lg:grid-cols-[.72fr_1.28fr]`}>
        <div className="relative flex min-h-80 items-center">
          <div className="absolute inset-y-4 left-0 w-72 bg-[var(--slot4-accent)] editable-angle" />
          <div className="relative">
            <p className="text-3xl font-black uppercase leading-none">Distribution</p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-[-.04em] sm:text-7xl">Briefing</h2>
          </div>
        </div>
        <div>
          <Link href={postHref(primaryTask, feature, primaryRoute)} className="editable-card-hover block border-b-4 border-black pb-8">
            <p className="text-[10px] font-black uppercase tracking-[.22em] text-black/50">Featured update</p>
            <h3 className="mt-4 max-w-3xl text-4xl font-black leading-[.98] tracking-[-.04em] sm:text-6xl">{feature.title}</h3>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-black/64">{getEditableExcerpt(feature, 220)}</p>
          </Link>
          <div className="mt-6 grid gap-px bg-black/15 sm:grid-cols-2 editable-stagger">
            {briefs.slice(0, 6).map((post, index) => (
              <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 7)
  if (!source.length) return null
  return (
    <section className="bg-[#f1f1ed]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_.85fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.23em] text-black/50">Latest {taskLabel(primaryTask)}</p>
            <h2 className="mt-2 text-5xl font-black leading-none tracking-[-.04em]">Public release flow</h2>
            <div className="mt-8 grid gap-px bg-black/15 editable-stagger">
              {source.slice(0, 4).map((post, index) => (
                <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="editable-card-hover grid gap-4 bg-white p-5 hover:bg-[#171717] hover:text-white sm:grid-cols-[68px_1fr_auto] sm:items-center">
                  <span className="text-3xl font-black text-[var(--slot4-accent)]">{String(index + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="block text-[10px] font-black uppercase tracking-[.2em] opacity-55">{getEditableCategory(post)}</span>
                    <strong className="mt-2 block text-2xl font-black leading-tight tracking-[-.03em]">{post.title}</strong>
                    <span className="mt-2 line-clamp-2 block text-sm leading-6 opacity-70">{getEditableExcerpt(post, 150)}</span>
                  </span>
                  <ArrowRight className="hidden h-6 w-6 sm:block" />
                </Link>
              ))}
            </div>
          </div>
          <form action="/search" className="self-start bg-[var(--slot4-accent)] p-7 sm:p-9">
            <Megaphone className="h-10 w-10" />
            <h3 className="mt-6 text-4xl font-black leading-none tracking-[-.04em]">Search the media archive</h3>
            <p className="mt-4 text-sm font-semibold leading-7">Find releases, campaign updates, announcements, and public statements from {SITE_CONFIG.name}.</p>
            <label className="mt-8 flex border border-black bg-white">
              <Search className="ml-4 mt-4 h-4 w-4" />
              <input name="q" placeholder="Search releases" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
              <button className="bg-black px-5 text-xs font-black uppercase tracking-[.14em] text-white">Search</button>
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[var(--slot4-accent)] text-black editable-slant-bottom">
      <div className={`${dc.shell.section} py-16 text-center sm:py-24`}>
        <p className="text-xs font-black uppercase tracking-[.24em]">Create a stronger release path</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-[.9] tracking-[-.04em] sm:text-7xl">Publish, distribute, and archive media updates without the noise.</h2>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/create" className={dc.button.primary}>Create update</Link>
          <Link href="/contact" className="border border-black px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] hover:bg-black hover:text-white">Talk distribution</Link>
        </div>
      </div>
    </section>
  )
}
