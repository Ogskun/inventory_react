import { Outlet, useLocation } from 'react-router-dom'
import { MdInventory } from 'react-icons/md'
import SideNav from './SideNav'
import TopNav from './TopNav'
import { ReactNode } from 'react'

export type TabLinkProps = {
    name: string
    link: string
    icon: ReactNode
    title: string
}

const TABLINKS: TabLinkProps[] = [
    {
        name: 'Inventory',
        link: '/',
        icon: <MdInventory className='my-3' />,
        title: 'INVENTORY',
    },
    {
        name: 'Products',
        link: '/products',
        icon: <MdInventory className='my-3' />,
        title: 'PRODUCTS',
    },
    {
        name: 'In/Out',
        link: '/in-out',
        icon: <MdInventory className='my-3' />,
        title: 'IN/OUT',
    },
]

const MainLayout = () => {
    const location = useLocation()
    const isActive: (path: string) => boolean = (path) =>
        location.pathname === path

    const activeTab = TABLINKS.find((tab) => location.pathname == tab.link)
    const headerTitle = activeTab ? activeTab.title : 'INVENTORY'

    return (
        <div className='flex'>
            <SideNav tabLinks={TABLINKS} isActive={isActive} />
            <div className='mx-10 my-8 flex w-full flex-col gap-4'>
                <TopNav headerTitle={headerTitle} />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
