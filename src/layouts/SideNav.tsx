import Logo from '../assets/logo-python.png'
import { Link } from 'react-router-dom'
import { TabLinkProps } from './MainLayout'

type SideNavProps = {
    tabLinks: TabLinkProps[]
    isActive: (path: string) => boolean
}

const SideNav = ({ tabLinks, isActive }: SideNavProps) => {
    return (
        <div className='hidden h-screen w-52 flex-col bg-white px-7 pt-8 shadow-xl md:block'>
            <img src={Logo} width={50} className='mx-auto mb-11' alt='Logo' />

            <div className='font-xs flex flex-col items-start gap-1 text-[#7a7a7a]'>
                {tabLinks.map((tab) => (
                    <Link
                        key={tab.name}
                        to={tab.link}
                        className={`flex items-center justify-center hover:text-[#BF2323] ${
                            isActive(tab.link) && 'text-[#BF2323]'
                        }`}
                    >
                        {tab.icon}
                        <span className='ml-2 font-pops text-sm font-medium'>
                            {tab.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav
