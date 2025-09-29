import react from "react";
import{User} from "lucide-react";
import { Link } from "react-router-dom";
import UserData from "../data/userData";
import "../styles/Home.css";
const Home = () => {
   
  return (
    <div>
      <h1>User Directory </h1>
      <ul>
       {
        UserData.map(user =>(
            <li key={user.id}>
                <User size={20} color="#333"/>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
