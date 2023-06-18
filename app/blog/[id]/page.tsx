import { Metadata } from "next"

type PropsPost = {
    params: {
        id: string
    }
}

//Динамические метаданные
export async function generateMetadata({params: {id}}: PropsPost): Promise<Metadata> {
    return {
        title: id
    }
}

const Post = ({ params: { id } }: PropsPost) => {
    return (
        <div>Post {id}</div>
    )
}

export default Post;