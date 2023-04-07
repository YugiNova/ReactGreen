import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PublicRoute = ({page}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem(`token`)

    useEffect(()=>{
        if(token){
            navigate("/ReactGreen/users");
        }
    },[])

    return(
        <div>{page}</div>
    )
}

export default PublicRoute;