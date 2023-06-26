import { authConfig } from "@/configs/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authConfig);

//Возвращаем хендлер в двух вариантах
export { handler as POST, handler as GET }