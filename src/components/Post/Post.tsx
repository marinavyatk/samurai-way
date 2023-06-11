import React from 'react';

type PostType = {
    postText: string
}

export const Post = (props: PostType) => {
    return (
        <div>
            <p>{props.postText}</p>
            <button>like</button>
        </div>
    );
};

