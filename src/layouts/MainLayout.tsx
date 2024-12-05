import { Outlet, useLocation } from 'react-router-dom'
import { FiPackage } from 'react-icons/fi'
import SideNav from './SideNav'
import TopNav from './TopNav'
import { ReactNode } from 'react'

export type TabLinkProps = {
    name: string
    link: string
    icon: ReactNode
}

const TABLINKS: TabLinkProps[] = [
    {
        name: 'Inventory',
        link: '/',
        icon: <FiPackage className='my-3' />,
    },
    {
        name: 'Products',
        link: '/products',
        icon: <FiPackage className='my-3' />,
    },
    {
        name: 'In / Out',
        link: '/in-out',
        icon: <FiPackage className='my-3' />,
    },
]

type TopNavTitleProps = {
    path: string
    title: string
}

const TOP_NAV_TITLES: TopNavTitleProps[] = [
    { path: '/', title: 'INVENTORY' },
    { path: '/products', title: 'PRODUCTS' },
    { path: '/in-out', title: 'INVENTORY' },
    { path: '/profile', title: 'PROFILE' },
]

const MainLayout = () => {
    const location = useLocation()
    const isActive: (path: string) => boolean = (path) =>
        location.pathname === path

    const headerTitle =
        TOP_NAV_TITLES.find((page) => location.pathname == page.path)?.title ??
        'INVENTORY'

    return (
        <div className='flex'>
            <SideNav tabLinks={TABLINKS} isActive={isActive} />
            <div className='mx-4 my-8 flex w-full flex-col gap-4 md:mx-8'>
                <TopNav headerTitle={headerTitle} />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
