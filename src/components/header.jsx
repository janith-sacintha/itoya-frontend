import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="h-[70px] w-full bg-gray-700 flex items-center justify-center text-xl font-bold text-white"> 
            <Link className="ml-2" to="/">Home</Link>
            <Link className="ml-2" to="/login">Login</Link>
        </div>
    )
}