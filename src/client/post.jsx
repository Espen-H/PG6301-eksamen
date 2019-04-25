import React from 'react'

export default function Post({ post }) {
    return (
        <div className="userPost">
            <div className="container">
                <h2>{post.author}</h2>
                <p>{post.post}</p>
                <p>{post.time}</p>
            </div>
        </div>
    )
}
