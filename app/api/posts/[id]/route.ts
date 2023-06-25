import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(req: Request, {params}: {params: {id: string}}) {
    const id = params.id;

    //Получение типов запроса
    const headerList = headers();
    const type = headerList.get('Content-type');

    //Получение cookies
    const cookiesList = cookies();
    const cook = cookiesList.get('NameCookie')?.value;

    //В случае если мы удалили пост по id, можно перейти на другую страницу
    // redirect('/posts');

    return NextResponse.json({id, type, cook});
}