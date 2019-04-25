import React from 'react'
import Post from "./post"

export default function Timeline({ posts }) {
    return posts.map(post => (
        <Post key={post.postId.toString()} post={post} />
    ))
}
