import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="editable-page-enter bg-white text-[#111]">
        <section className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1180px] gap-0 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
          <div className="relative overflow-hidden bg-[var(--slot4-accent)] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-16 -top-8 h-64 w-64 bg-white/35 editable-angle" />
            <p className="relative text-xs font-black uppercase tracking-[0.28em]">{pagesContent.auth.login.badge}</p>
            <h1 className="relative mt-5 max-w-xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-8xl">{pagesContent.auth.login.title}</h1>
            <p className="relative mt-6 max-w-lg text-sm font-bold leading-8 text-black/72">{pagesContent.auth.login.description}</p>
            <div className="relative mt-10 grid gap-4 text-sm font-bold">
              {['Access the publishing workspace', 'Create release-ready media posts', 'Return to the archive after login'].map((item) => (
                <p key={item} className="flex items-center gap-3"><Check className="h-4 w-4" /> {item}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#f1f1ed] p-7 sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black/50">Distribution access</p>
            <h2 className="mt-3 text-4xl font-black uppercase">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-black pt-5 text-sm font-semibold text-black/65">New here? <Link href="/signup" className="font-black underline decoration-[var(--slot4-accent)] decoration-4 underline-offset-4">{pagesContent.auth.login.createCta}</Link></p>
            <Link href="/updates" className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.16em]">Browse first <ArrowRight className="h-4 w-4 text-[var(--slot4-accent)]" /></Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
