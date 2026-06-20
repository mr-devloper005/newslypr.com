'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ImageIcon, Lock, PlusCircle, Send, Sparkles } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const taskIcon: Record<string, typeof FileText> = {
  article: FileText,
  listing: Sparkles,
  classified: PlusCircle,
  image: ImageIcon,
  profile: Sparkles,
  pdf: FileText,
  sbm: ArrowRight,
  mediaDistribution: FileText,
}

const fieldClass = 'border border-black bg-white px-4 py-3 text-sm font-bold text-black outline-none transition placeholder:text-current/35 focus:border-[var(--slot4-accent)]'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const enabledTasks = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled), [])
  const preferred = enabledTasks.find((item) => item.key === 'mediaDistribution') || enabledTasks[0]
  const [task, setTask] = useState<TaskKey>((preferred?.key || 'mediaDistribution') as TaskKey)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const activeTask = enabledTasks.find((item) => item.key === task) || preferred

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'media-update',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="editable-page-enter min-h-screen bg-white px-4 py-16 text-black sm:px-6 lg:px-8">
          <section className="mx-auto grid max-w-[1180px] border border-black bg-white md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-[#171717] text-white">
              <div className="absolute h-56 w-56 bg-[var(--slot4-accent)] editable-angle" />
              <Lock className="relative h-20 w-20 text-black" />
            </div>
            <div className="self-center p-7 sm:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.28em] opacity-55">{pagesContent.create.locked.badge}</p>
              <h1 className="mt-5 text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-7xl">{pagesContent.create.locked.title}</h1>
              <p className="mt-6 max-w-xl text-base font-semibold leading-8 opacity-70">{pagesContent.create.locked.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-black text-white">Login <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/signup" className="inline-flex items-center gap-2 border border-black bg-[var(--slot4-accent)] px-6 py-3 text-sm font-black text-black">Sign up</Link>
              </div>
            </div>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
    <EditableSiteShell>
      <main className="editable-page-enter min-h-screen bg-white text-black">
        <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid border border-black bg-[#f1f1ed] lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="relative overflow-hidden bg-[#171717] p-7 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-16 top-14 h-64 w-64 bg-[var(--slot4-accent)] editable-angle" />
              <p className="relative text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.create.hero.badge}</p>
              <h1 className="relative mt-5 text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-7xl">{pagesContent.create.hero.title}</h1>
              <p className="relative mt-6 max-w-xl text-base font-semibold leading-8 text-white/70">{pagesContent.create.hero.description}</p>
              <div className="relative mt-8 grid gap-px bg-white/15 sm:grid-cols-2">
                {enabledTasks.map((item) => {
                  const Icon = taskIcon[item.key] || FileText
                  const active = item.key === task
                  return (
                    <button key={item.key} type="button" onClick={() => setTask(item.key)} className={`p-4 text-left transition ${active ? 'bg-[var(--slot4-accent)] text-black' : 'bg-[#202020] hover:bg-white hover:text-black'}`}>
                      <Icon className="h-5 w-5" />
                      <span className="mt-3 block text-sm font-black uppercase">{item.label}</span>
                      <span className="mt-1 block text-xs font-semibold opacity-65">{item.description}</span>
                    </button>
                  )
                })}
              </div>
            </aside>

            <form onSubmit={submit} className="bg-[#f7f7f2] p-5 sm:p-7 lg:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-black pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] opacity-50">Create {activeTask?.label || 'post'}</p>
                  <h2 className="mt-1 text-3xl font-black uppercase tracking-[-0.04em]">{pagesContent.create.formTitle}</h2>
                </div>
                <span className="bg-[var(--slot4-accent)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em]">{session.name}</span>
              </div>

              <div className="mt-6 grid gap-4">
                <input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Media update title" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
                  <input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Source, campaign, or website URL" />
                </div>
                <input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="Featured image URL" />
                <textarea className={`${fieldClass} min-h-24`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Release summary for archive cards" required />
                <textarea className={`${fieldClass} min-h-48`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Full release, context, source notes, or public update details" required />
              </div>

              {created ? (
                <div className="mt-5 border border-emerald-800 bg-emerald-50 p-4 text-emerald-900">
                  <p className="flex items-center gap-2 text-sm font-black"><CheckCircle2 className="h-5 w-5" /> {pagesContent.create.successTitle}</p>
                  <p className="mt-1 text-sm font-semibold opacity-80">{created.title}</p>
                </div>
              ) : null}

              <button type="submit" className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 bg-black px-6 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-[var(--slot4-accent)] hover:text-black">
                <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
