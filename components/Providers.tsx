'use client'
//Провайдер, в который мы оборачиваем наше приложение для отслеживания авторизации
import { SessionProvider } from "next-auth/react";

export const Provider = ({children}: {children: React.ReactNode}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}