import { Outlet, useLocation } from 'react-router-dom'
import SideNav from './SideNav'
import TopNav from './TopNav'
import { TAB_LINKS, TOP_NAV_TITLES } from './constants'

const MainLayout = () => {
    const location = useLocation()
    const isActive: (path: string) => boolean = (path) =>
        location.pathname === path

    const headerTitle =
        TOP_NAV_TITLES.find((page) => location.pathname == page.path)?.title ??
        'INVENTORY'

    return (
        <div className='flex'>
            <SideNav tabLinks={TAB_LINKS} isActive={isActive} />
            <div className='mx-4 my-8 flex w-full flex-col gap-4 md:mx-8'>
                <TopNav headerTitle={headerTitle} />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
