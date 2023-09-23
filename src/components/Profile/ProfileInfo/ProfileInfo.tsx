import React from 'react';
import s from "../Profile.module.css";

type ProfileInfoType = {
    profileDescription: string
}
const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div className={`content ${s.content}`}>
            <img className={s.mainImage}
                 src={'https://vsegda-pomnim.com/uploads/posts/2022-02/1645922108_2-vsegda-pomnim-com-p-polyarnoe-siyanie-foto-2.jpg'}/>
            <div className={s.descriptionAndPosts}>
                <img className={s.avatar} width={'300px'}
                     src={'https://mobile-comp.com/images/user.png'}/>
                <p>{props.profileDescription}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;