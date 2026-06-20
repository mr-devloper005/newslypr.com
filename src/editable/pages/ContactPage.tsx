'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release intake', body: 'Send press releases, official statements, launch notes, corrections, and source material.' },
  { icon: Megaphone, title: 'Distribution strategy', body: 'Discuss campaign timing, syndication, category placement, and public announcement flow.' },
  { icon: Mail, title: 'Account support', body: 'Reach the team for login, publishing, archive, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="editable-page-enter bg-white text-[#111]">
        <section className="relative overflow-hidden">
          <div className="absolute right-[12%] top-8 h-72 w-72 bg-[var(--slot4-accent)] editable-angle" />
          <div className="relative mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-8xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-black/65">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:pb-24">
          <aside className="bg-[#171717] text-white editable-stagger">
            {desks.map((desk, index) => (
              <div key={desk.title} className="border-b border-white/15 p-7 last:border-b-0 sm:p-9">
                <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-white/45">0{index + 1}</span></div>
                <h2 className="mt-6 text-3xl font-black uppercase leading-none">{desk.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/65">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="bg-[#f1f1ed] p-6 sm:p-10 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black/50">Send a message</p>
            <h2 className="mt-3 text-4xl font-black uppercase">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
