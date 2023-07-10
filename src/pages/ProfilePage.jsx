import { useContext, useState } from "react";
import { useAppContext } from "../contenxt/context";
import {Link, Navigate, useParams} from "react-router-dom";
import PlacesPage from "./PlacesPage";
import AccountNav from "../components/AccountNav ";


const ProfilePage = () => {

    const {name  , email , LogoutUser} = useAppContext()

    let {subpage} = useParams()
    if(subpage === undefined) {
        subpage = 'profile'
    }

    const logout = () =>{

    }

    return (
        <div>
        <AccountNav/>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {name} ({email}) <br/>
                    <button onClick={LogoutUser} className="primary max-w-sm mt-2">Logout</button>
                </div>
        )}
        {
            subpage === 'places' && (
                <PlacesPage/>
            )
        }
        </div>
    )

}

export default ProfilePage