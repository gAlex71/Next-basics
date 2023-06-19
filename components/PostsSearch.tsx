'use client';

import useSWR from 'swr';
import { getPostBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";

const PostsSearch = () => {
    //Мутирование данных по тегу
    const { mutate } = useSWR('posts');
    const [ search, setSearch ] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const posts = await getPostBySearch(search);

        mutate(posts);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default PostsSearch;