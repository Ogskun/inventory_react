import { ReactNode } from 'react'

export type TabLinkProps = {
    name: string
    link: string
    icon: ReactNode
}

export type TopNavTitleProps = {
    path: string
    title: string
}

export type SideNavProps = {
    tabLinks: TabLinkProps[]
    isActive: (path: string) => boolean
}

export type TopNavProps = {
    headerTitle: string
}