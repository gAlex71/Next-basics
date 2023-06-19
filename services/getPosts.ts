export const getAllPosts = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  
    if (!responce.ok) throw new Error('Unable to fetch posts');
  
    return responce.json();
};

export const getPostBySearch = async (search: string) => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);

    if (!responce.ok) throw new Error('Unable to fetch posts');

    return responce.json();
}