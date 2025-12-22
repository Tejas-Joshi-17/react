import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    
  return (
    <div>
      <div className="container text-center mt-5 w-50">
        <div className="row mb-2 text-center">
          <div className="col-12">
            <h3>Login</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <input type="text" className="form-control" value={username} placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-5">
            <input type='password' className="form-control" value={password} placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button onClick={handleSubmit} className="btn btn-primary">Submit</button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;