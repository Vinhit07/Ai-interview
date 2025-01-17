"use client"
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react'


function Header() {
  const path = usePathname();
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md '>
      <Image src={'/aiinterview/public/logo.svg'} width={160} height={100} alt='logo'/>
      <ul className='flex gap-6'>
        <li className ={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard'&&'text-primary font-bold'}
        `}>Dashboard</li>
        <li className ={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path=='/dashboard/questions'&&'text-primary font-bold'}
       `}>Questions</li>
        <li className ={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard/upgrade'&&'text-primary font-bold'}
        `}>Upgrade</li>
        <li className ={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/das'&&'text-primary font-bold'}
        `}>how it works?</li>
      </ul>
      <UserButton/> 
    </div>
  );
}

export default Header;
