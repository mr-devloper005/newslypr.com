'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Media Distribution', href: '/updates' },
    { label: 'Search', href: '/search' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 text-black shadow-[0_1px_0_rgba(0,0,0,.12)] backdrop-blur transition-all duration-300">
      <div className="mx-auto grid min-h-[76px] max-w-[1260px] grid-cols-[auto_1fr_auto] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/25 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="editorial-brand inline-flex min-w-0 max-w-[46vw] items-center gap-2 whitespace-nowrap text-xl font-black leading-none sm:max-w-none sm:text-4xl">
            <img src="/favicon.ico" alt="" className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10" />
            <span className="min-w-0 truncate">{SITE_CONFIG.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="group relative text-sm font-black">
              {item.label}
              <span className="absolute -bottom-2 left-0 h-1 w-0 bg-[var(--slot4-accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          {session ? (
            <>
              <span className="hidden max-w-[150px] truncate text-xs font-black uppercase tracking-[.12em] sm:block">{session.name}</span>
              <button type="button" onClick={logout} className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Logout</button>
            </>
          ) : (
            <Link href="/login" className="hidden items-center gap-2 text-xs font-black uppercase tracking-[.12em] sm:inline-flex">
              <ArrowRight className="h-5 w-5 text-[var(--slot4-accent)]" /> Log in
            </Link>
          )}
          <Link href={session ? '/create' : '/signup'} className="bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-black sm:px-6">
            {session ? 'Create' : 'Sign up'}
          </Link>
        </div>
      </div>

      <div className="bg-[#171717] text-white">
        <div className="mx-auto flex min-h-[46px] max-w-[1260px] items-center px-4 sm:px-6 lg:px-8">
          <p className="hidden text-[10px] font-black uppercase tracking-[.22em] text-white/55 sm:block">Media distribution desk</p>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center border-l border-white/20 sm:max-w-[340px] sm:flex-none">
            <Search className="ml-4 h-4 w-4 text-white/65" />
            <input name="q" type="search" placeholder="Search media releases" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs font-bold outline-none placeholder:text-white/45" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/15 bg-[var(--slot4-surface-bg)] px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-black/15">
            {links.map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
            {session ? (
              <>
                <Link href="/create" onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{session.name}</Link>
                <button type="button" onClick={() => { logout(); setOpen(false) }} className="bg-white px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em]">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">Login</Link>
                <Link href="/signup" onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">Sign up</Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}
