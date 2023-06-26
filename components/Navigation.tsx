'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

type NavLink = {
    label: string;
    href: string;
}

type PropsNavigate = {
    navlinks: NavLink [];
}

const Navigation = ({navlinks}: PropsNavigate) => {
    const pathname = usePathname();
    const session = useSession();

    //Получаем информацию о текущей сессии
    console.log(session);

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

            {/* Можем добавлять поля в зависимости от аутентификации */}
            {session?.data && (
                <Link href="/profile">Profile</Link>
            )}
            {/* При выходе перенаправляем пользователя на главную страницу */}
            {session?.data 
                ? <Link href="#" onClick={() => signOut({
                    callbackUrl: "/"
                })}>Sign out</Link>
                : <Link href="/api/auth/signin">Login</Link>
            }
        </>
    )
}

export default Navigation;