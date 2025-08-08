import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'

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

      <div className='flex flex-1'></div>

      {
        navItems.map(navItem => (
          <Link key={navItem.name} className='mr-2' href={navItem.href}>
            {navItem.name}
          </Link>
        ))
      }

  
    </nav>
  )
}

export default Navbar
