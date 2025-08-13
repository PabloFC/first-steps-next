import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import ActiveLink from '../active-link/ActiveLink'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

      <Link href={'/'} className='flex items-center '>
        <HomeIcon className='mr-2'/>
        <span>Home</span>
      </Link>

      <div className='ml-auto flex gap-3'>
      {
        navItems.map(navItem => (
          <ActiveLink key={navItem.name} path={navItem.href} text={navItem.name} />
        ))
      }

      </div>


  
    </nav>
  )
}

export default Navbar
