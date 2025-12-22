import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return (
        <div className="container text-center mt-3 w-50">
            <div className="row mb-2 text-center">
                <div className="col-12">
                    <p>Please Login</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="container text-center mt-3 w-50">
          <div className="row mb-2 text-center">
            <div className="col-12">
              <p>Welcome {user.username}</p>
            </div>
          </div>
        </div>
    )
}

export default Profile;