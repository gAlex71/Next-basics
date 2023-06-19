'use client';

const ErrorPosts = ({error}: {error: Error}) => {
    return (
        <h1>{error.message}</h1>
    )
}

export default ErrorPosts;