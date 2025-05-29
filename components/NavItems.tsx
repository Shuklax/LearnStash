'use client';

import Link from 'next/link';

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Companions', href: '/companions'},
    {label: 'Learning-Path', href: '/learnerPath'}
]

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({label, href}) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(pathname === href && 'text-primary font-semibold')}
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}
export default NavItems
