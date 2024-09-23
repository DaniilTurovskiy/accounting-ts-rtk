import ProfileData from "./ProfileData"
import UpdateUser from "./UpdateUser"

const Profile = () => {

    const handleClickLogout = () => {
        // TODO Logout function
        alert('Logout')
    }
   
    return (
        <div>
            <ProfileData />
            <button onClick={handleClickLogout}>Logout</button>
            <UpdateUser />
        </div>
    )
}

export default Profile