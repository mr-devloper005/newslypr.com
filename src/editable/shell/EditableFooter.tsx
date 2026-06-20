'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-white text-black">
      <div className="bg-[#171717] py-12 text-white">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
          
          <div className="mt-8 h-28 bg-[linear-gradient(90deg,#242424,#111,#2f2f2f,#171717)]" />
        </div>
      </div>

      <div className="mx-auto max-w-[1260px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.75fr_.75fr]">
          <div>
            <Link href="/" className="editorial-brand inline-flex max-w-full items-center gap-3 whitespace-nowrap text-4xl font-black leading-none sm:text-6xl">
              <img src="/favicon.ico" alt="" className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12" />
              <span className="min-w-0 truncate">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-6 max-w-xl text-sm leading-7 text-black/62">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <form action="/signup" className="mt-8 flex max-w-xl border-[20px] border-[#ededed] bg-white">
              <input name="email" type="email" placeholder="Email for media distribution updates" className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-black/40" />
              <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em] text-black">Sign Up</button>
            </form>
          </div>

          <div>
            <h3 className="border-b border-black/20 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-black/55">Explore</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/updates" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em]">Media Distribution<ArrowRight className="h-4 w-4 text-[var(--slot4-accent)]" /></Link>
              <Link href="/search" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em]">Search<ArrowRight className="h-4 w-4 text-[var(--slot4-accent)]" /></Link>
              <Link href="/create" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em]">Create<ArrowRight className="h-4 w-4 text-[var(--slot4-accent)]" /></Link>
            </div>
          </div>

          <div>
            <h3 className="border-b border-black/20 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-black/55">Publication</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-black uppercase tracking-[.08em] hover:text-black">About</Link>
              <Link href="/contact" className="text-sm font-black uppercase tracking-[.08em] hover:text-black">Contact</Link>
              {session ? (
                <>
                  <Link href="/create" className="text-sm font-black uppercase tracking-[.08em] hover:text-black">{session.name}</Link>
                  <button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-black">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-black uppercase tracking-[.08em] hover:text-black">Log in</Link>
                  <Link href="/signup" className="text-sm font-black uppercase tracking-[.08em] hover:text-black">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-black/45">© {year} {SITE_CONFIG.name}. Independent media distribution and public information.</div>
    </footer>
  )
}
