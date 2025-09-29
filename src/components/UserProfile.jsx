import React from 'react'
import UserData from "../data/userData";
import { User, Mail, Calendar, MapPin, Briefcase, Globe, ArrowLeft, CalendarCheck } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/UserProfile.css";
function UserProfileWithParams() {
    const { id } = useParams();
    const navigate = useNavigate();
    return <UserProfile id={id} navigate={navigate} />;
}
class UserProfile extends React.Component {
    state = {
        loading: true,
        user: null
    };
    componentDidMount() {
        setTimeout(() => {
            const user = UserData.find(u => u.id === parseInt(this.props.id));
            this.setState({ user, loading: false });
        }, 1000);
    }
    render() {
        const { loading, user } = this.state;
        if (loading) return <p>Loading Profile...</p>

        if (!user) return <p>User not Found.</p>

        return (
            <div className="profileCard">
                <p className="userLogo"><User size={70} /> </p>
                <h2 className="name">{user.name}</h2>
                <p className="skills"> {user.skills}</p>
                {/* Other details */}
                <div className="profileDetail"><Mail size={18} /> <span>{user.mail}</span></div>
                <div className="profileDetail"><Calendar size={18} /> <span>{user.age}</span></div>
                <div className="profileDetail"><MapPin size={18} /> <span>{user.location}</span></div>
                <div className="profileDetail"><Briefcase size={18} /> <span>{user.profession}</span></div>
                <div className="profileDetail"><Globe size={18} /> <span>{user.wesite}</span></div>
                <div className="profileDetail"><CalendarCheck size={18} /> <span>{user.joined}</span></div>

                <button onClick={() => this.props.navigate("/")}><ArrowLeft size={18} /> Back</button>
            </div>
        )
    }
}

export default UserProfileWithParams