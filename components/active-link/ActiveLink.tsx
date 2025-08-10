'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from './ActiveLink.module.css'

interface Props {
    path:string;
    text:string;
}

const ActiveLink = ({ path, text }: Props) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link className={`${style.link} ${pathname === path ? style['active-link'] : ''}`} href={path}>
      {text}
    </Link>
  )
}

export default ActiveLink
