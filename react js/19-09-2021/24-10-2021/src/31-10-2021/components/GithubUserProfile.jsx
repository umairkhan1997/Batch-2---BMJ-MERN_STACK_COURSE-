import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const GetUser = ({username}) => {
    useEffect(() => {

    }, [username])

    return (
        <div></div>
    )
}

const GithubUserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const searchUser = () => {
        setLoading(true);
        const url = 'https://api.github.com/users/MohammadArsalan';

        fetch(url)
        .then((res) => res.json())
        .then((res) => setUser(res))
        .catch((e) => console.log(e))
        .finally(() => setLoading(false))

    }

    return (
        <div>
            <h1>Search Any Github user</h1>
            {loading ? <h1>Loading....</h1>: null}
            {user && <div>
                <h1>{user.name}</h1>
                <h1>{user.location}</h1>
            </div>}
            <button onClick={searchUser}>Search</button>
        </div>
    )

}

export default GithubUserProfile;