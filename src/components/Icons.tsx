import type { SVGProps } from 'react';

const s: SVGProps<SVGSVGElement> = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconHome(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}

export function IconList(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
}

export function IconChart(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 5-5"/></svg>;
}

export function IconUser(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
}

export function IconPlus(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
}

export function IconArrowUp(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>;
}

export function IconArrowDown(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>;
}

export function IconSend(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
}

export function IconZap(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
}

export function IconSearch(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
}

export function IconFilter(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
}

export function IconBell(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>;
}

export function IconSparkle(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></svg>;
}

export function IconGift(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 010-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 010 5"/></svg>;
}

export function IconTarget(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
}

export function IconUtensils(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>;
}

export function IconCar(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 002 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>;
}

export function IconBag(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>;
}

export function IconFilm(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M7 3h10"/><path d="M7 21h10"/></svg>;
}

export function IconHeart(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>;
}

export function IconClose(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
}

export function IconCheck(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><polyline points="20 6 9 17 4 12"/></svg>;
}

export function IconBack(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><polyline points="15 18 9 12 15 6"/></svg>;
}

export function IconSettings(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>;
}

export function IconTransfer(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>;
}

export function IconPay(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><rect x="2" y="5" width="20" height="14" rx="3"/><line x1="2" y1="10" x2="22" y2="10"/></svg>;
}

export function IconLock(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>;
}

export function IconFaceId(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M9 7H7a2 2 0 00-2 2v2"/><path d="M15 7h2a2 2 0 012 2v2"/><path d="M9 17H7a2 2 0 01-2-2v-2"/><path d="M15 17h2a2 2 0 002-2v-2"/><circle cx="9" cy="11" r=".5" fill="currentColor"/><circle cx="15" cy="11" r=".5" fill="currentColor"/><path d="M9 14s1 2 3 2 3-2 3-2"/></svg>;
}

export function IconChevronRight(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><polyline points="9 18 15 12 9 6"/></svg>;
}

export function IconChevronDown(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><polyline points="6 9 12 15 18 9"/></svg>;
}

export function IconTrending(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
}

export function IconWallet(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>;
}

export function IconCalendar(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
}

export function IconEdit(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4Z"/></svg>;
}

export function IconTrash(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>;
}

export function IconFlame(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
}

export function IconLogout(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
}

export function IconHelp(p: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
}
