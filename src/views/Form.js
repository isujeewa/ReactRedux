import React, { useState, useEffect } from 'react'


export const Form = ({ addPost, updatePost, post, isALoading, isELoading }) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)

    }, [post]);

    return (
        <div>
            <input type="text" placeholder="Title" value={title ? title : ''} onChange={(event) => setTitle(event.target.value)}></input>
            <input type="text" placeholder="Body" value={body ? body : ''} onChange={(event) => setBody(event.target.value)}></input>
            <button type="button" onClick={() => addPost({ title, body, userId: 1 })} disabled={isALoading}>{isALoading ? "Loading..." : "Submit"}</button>
            <button type="button" onClick={() => updatePost({ title, body, userId: 1, id: post.id })} disabled={isELoading} >{isELoading ? "Loading..." : "Update"}</button>
        </div>
    )
}


export default Form;