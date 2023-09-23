import React from 'react';


export type ProfilePostItemType = {
    message: string,
    likesCount: number
}
export const ProfilePostItem = (props: ProfilePostItemType) => {
    return (
        <div>
            {props.message}
            <span>like</span> {props.likesCount}
        </div>
    );
};

