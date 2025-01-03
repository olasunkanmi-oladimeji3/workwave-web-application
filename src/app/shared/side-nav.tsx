import Link from 'next/link'
import { BarChart, DollarSign, Users, Briefcase, Settings, LayoutDashboard, FileText, Calendar, MessageSquare } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

type UserRole = 'admin' | 'hr' | 'accountant' | 'team_member' | 'project_manager'

const menuItems = {
  admin: [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: BarChart, label: 'Analytics', href: '/analytics' },
    { icon: Users, label: 'HR', href: '/hr' },
    { icon: DollarSign, label: 'Accounting', href: '/accounting' },
    { icon: Briefcase, label: 'Projects', href: '/projects' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ],
  hr: [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Users, label: 'Employees', href: '/employees' },
    { icon: FileText, label: 'Payroll', href: '/payroll' },
    { icon: Calendar, label: 'Time Off', href: '/time-off' },
  ],
  accountant: [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: DollarSign, label: 'Finances', href: '/finances' },
    { icon: FileText, label: 'Invoices', href: '/invoices' },
    { icon: BarChart, label: 'Reports', href: '/reports' },
  ],
  team_member: [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Briefcase, label: 'My Projects', href: '/my-projects' },
    { icon: Calendar, label: 'Time Tracking', href: '/time-tracking' },
    { icon: MessageSquare, label: 'Messages', href: '/messages' },
  ],
  project_manager: [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Briefcase, label: 'Projects', href: '/projects' },
    { icon: Users, label: 'Team', href: '/team' },
    { icon: BarChart, label: 'Reports', href: '/reports' },
    { icon: Calendar, label: 'Schedule', href: '/schedule' },
  ],
}

export default function SideNav({ userRole }: { userRole: UserRole }) {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center space-x-2 px-6 py-4">
          <BarChart className="h-6 w-6" />
          <span className="text-lg font-bold">BusinessPro</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems[userRole].map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href} className="flex items-center space-x-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}