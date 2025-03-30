import { Calendar1, CircleCheck, CalendarDays, Inbox } from 'lucide-react';

export const SOCIAL_LINKS = [
  {
    href: 'https://github.com/incrediblesaizan1',
    label: 'GitHub',
  },
  {
    href: 'https://instagram.com/incrediblesaizan1',
    label: 'Instagram',
  },
] as const;

export const SIDEBAR_LINKS = [
  {
    href: '/user/inbox',
    label: 'Inbox',
    icon: Inbox,
  },
  {
    href: '/user/today',
    label: 'Today',
    icon: Calendar1,
  },
  {
    href: '/user/upcoming',
    label: 'Upcoming',
    icon: CalendarDays,
  },
  {
    href: '/user/completed',
    label: 'Completed',
    icon: CircleCheck,
  },
] as const;

export const PROJECT_COLORS = [
  {
    name: 'Slate',
    hex: '#64748b',
  },
  {
    name: 'Red',
    hex: '#ef4444',
  },
  {
    name: 'Orange',
    hex: '#f97316',
  },
  {
    name: 'Amber',
    hex: '#f59e0b',
  },
  {
    name: 'Yellow',
    hex: '#eab308',
  },
  {
    name: 'Lime',
    hex: '#84cc16',
  },
  {
    name: 'Green',
    hex: '#22c55e',
  },
  {
    name: 'Emerald',
    hex: '#10b981',
  },
  {
    name: 'Teal',
    hex: '#06b6d4',
  },
  {
    name: 'Cyan',
    hex: '#06b6d4',
  },
  {
    name: 'Sky',
    hex: '#0ea5e9',
  },
  {
    name: 'Blue',
    hex: '#06b6d4',
  },
  {
    name: 'Indigo',
    hex: '#6366f1',
  },
  {
    name: 'Violet',
    hex: '#8b5cf6',
  },
  {
    name: 'Purple',
    hex: '#a855f7',
  },
  {
    name: 'Fuchsia',
    hex: '#d946ef',
  },
  {
    name: 'Pink',
    hex: '#ec4899',
  },
  {
    name: 'Rose',
    hex: '#f43f5e',
  },
] as const;