import { useHistory, useParams } from "react-router-dom";
import { getUserById } from "../helper"
const UserDetails = () => {
    const params = useParams();
    const user = getUserById(params.id);
    
    return (
        <div>
            <h1>User Details</h1>
        </div>
    )
}

export default UserDetails;