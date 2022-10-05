import "./ProfileCard.scss";

const ProfileCard = (props) => {
    
    return (
        <div>
            <div className="profile_container">
             <img src= {props.profile_photo} alt={props.profile_name} className="profile_photo" />
            <div className="profile_information">
                <h2>{props.profile_name}</h2>
                <button className="follow_button">Follow</button>
                <button className="follow_button_2">v</button>
            </div>
            </div>
            <div className="follow_count">
                <p className="follow_numbers">{props.num_posts} posts</p>
                <p>{props.followers} followers</p>
                <p>{props.following} following</p>
            </div>
            <div className="summary">
                <p>{props.summary_title}</p>
                <p>{props.summary}</p>
            </div>
            <div className="post">
                <img src={props.post_one} alt={props.profile_name} className="post_image"/>
                <img src={props.post_two} alt={props.profile_name} className="post_image"/>
                <img src={props.post_three} alt={props.profile_name} className="post_image"/>
                <img src={props.post_four} alt={props.profile_name} className="post_image"/>
                <img src={props.post_five} alt={props.profile_name} className="post_image"/>
                <img src={props.post_six} alt={props.profile_name} className="post_image"/>
                <img src={props.post_seven} alt={props.profile_name} className="post_image"/>
                <img src={props.post_eight} alt={props.profile_name} className="post_image"/>
                <img src={props.post_nine} alt={props.profile_name} className="post_image"/>
            </div>
        </div>
    )
}

export default ProfileCard;