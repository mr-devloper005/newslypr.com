import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="editable-page-enter bg-white text-[#111]">
        <section className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1180px] gap-0 px-4 py-12 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center bg-[#f1f1ed] p-7 sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black/50">Create access</p>
            <h1 className="mt-3 text-4xl font-black uppercase">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-black pt-5 text-sm font-semibold text-black/65">Already have an account? <Link href="/login" className="font-black underline decoration-[var(--slot4-accent)] decoration-4 underline-offset-4">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="relative overflow-hidden bg-[#171717] p-8 text-white sm:p-12 lg:p-16">
            <div className="absolute -right-8 bottom-8 h-72 w-72 bg-[var(--slot4-accent)] editable-angle" />
            <p className="relative text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.auth.signup.badge}</p>
            <h2 className="relative mt-5 max-w-xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-8xl">{pagesContent.auth.signup.title}</h2>
            <p className="relative mt-6 max-w-lg text-sm font-bold leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
            <div className="relative mt-10 grid gap-4 text-sm font-bold text-white/75">
              {['Save your local publishing session', 'Open the create workspace', 'Submit media distribution drafts'].map((item) => (
                <p key={item} className="flex items-center gap-3"><Check className="h-4 w-4 text-[var(--slot4-accent)]" /> {item}</p>
              ))}
            </div>
            <Link href="/updates" className="relative mt-9 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.16em]">See archive <ArrowRight className="h-4 w-4 text-[var(--slot4-accent)]" /></Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
