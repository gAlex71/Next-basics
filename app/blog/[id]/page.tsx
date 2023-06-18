type PropsPost = {
    params: {
        id: string
    }
}

const Post = ({ params: { id } }: PropsPost) => {
    return (
        <div>Post {id}</div>
    )
}

export default Post;