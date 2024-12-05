import { TabLinkProps, TopNavTitleProps } from './types'
import { FiPackage } from 'react-icons/fi'

export const TAB_LINKS: TabLinkProps[] = [
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

export const TOP_NAV_TITLES: TopNavTitleProps[] = [
    { path: '/', title: 'INVENTORY' },
    { path: '/products', title: 'PRODUCTS' },
    { path: '/in-out', title: 'INVENTORY' },
    { path: '/profile', title: 'PROFILE' },
]
