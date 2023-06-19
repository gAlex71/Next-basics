'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
    label: string;
    href: string;
}

type PropsNavigate = {
    navlinks: NavLink [];
}

const Navigation = ({navlinks}: PropsNavigate) => {
    const pathname = usePathname();

    return (
        <>
            {navlinks.map(({label, href}) => {
                const isActive = pathname === href;

                return (
                    <Link
                        key={label}
                        href={href}
                        className={isActive ? 'active' : ''}
                    >
                        {label}
                    </Link>
                )
            })}
        </>
    )
}

export default Navigation;