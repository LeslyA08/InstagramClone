import ProfileCard from "../ProfileCard/ProfileCard.jsx";
import "./ProfileContainer.scss";

const ProfileContainer = (props) => {

    return (
        <div>
            {props.profiles.map((profile)=>{
                return <ProfileCard
                profile_name={profile.profile_name}
                profile_photo={profile.profile_photo}
                num_posts={profile.num_posts}
                followers={profile.followers}
                following={profile.following}
                summary_title={profile.summary_title}
                summary={profile.summary}
                post_one={profile.post_one}
                post_two={profile.post_two}
                post_three={profile.post_three}
                post_four={profile.post_four}
                post_five={profile.post_five}
                post_six={profile.post_six}
                post_seven={profile.post_seven}
                post_eight={profile.post_eight}
                post_nine={profile.post_nine}
                />
            })}
        </div>
    )
}

export default ProfileContainer;