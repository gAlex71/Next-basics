import { Metadata } from "next";

type PropsPost = {
    params: {
        id: string
    }
}

const getData = async (id: string) => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        //Возможность кеширования данных на 60 секундр, и повторный запрос
        revalidate: 60
      }
    });
  
    return responce.json();
  };

//Динамические метаданные
export async function generateMetadata({params: {id}}: PropsPost): Promise<Metadata> {
    const post = await getData(id);

    return {
        //Динамическое название страницы
        title: post.title,
    }
}

const Post = async({ params: { id } }: PropsPost) => {
    const post = await getData(id);

    return (
        <div>
            {post.title}

            <div>
                {post.body}
            </div>
        </div>
    )
}

export default Post;