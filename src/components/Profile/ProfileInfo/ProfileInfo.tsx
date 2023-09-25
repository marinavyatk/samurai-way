import React from 'react';
import s from "../Profile.module.css";
import {PostsStateType} from "../ProfilePosts/ProfilePosts";
import defaultUserPhoto from '../../../img/defaultUserPhoto.jpg'

type ProfileInfoType = {
    profileDescription: string,
    profile: PostsStateType
}
const ProfileInfo = (props: ProfileInfoType) => {
    debugger;
    console.log('ProfileInfo:' + props);
    return (
        <div className={`content ${s.content}`}>
            <img className={s.mainImage}
                 src={'https://vsegda-pomnim.com/uploads/posts/2022-02/1645922108_2-vsegda-pomnim-com-p-polyarnoe-siyanie-foto-2.jpg'}/>
            <div className={s.descriptionAndPosts}>
                <img className={s.avatar} width={'300px'}
                    src={(props.profile.profile ? props.profile.profile.photos.small : undefined) || defaultUserPhoto} alt={'user photo'}/>
                     {/*src={(props.profile ? props.profile.profile ? props.profile.profile.photos.small : undefined : undefined) || defaultUserPhoto}/>*/}
                <p>{props.profile.profile?props.profile.profile.fullName:'Anonymous User'}</p>
                <p>Follow in Instagram: {props.profile.profile?props.profile.profile.contacts.instagram? props.profile.profile.contacts.instagram:'contact not specified':'Contact not specified'}</p>
                <p>{props.profileDescription}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;