
import { Link } from "react-router-dom"
import {useState} from "react";
import { useAppContext } from "../contenxt/context";


const Register = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password , setPassword] = useState('')
    const {RegisterUser} = useAppContext()
    const handleSubmit = (e) => {
        e.preventDefault()
        let userObj = {
            name,email,password
        }
        RegisterUser(userObj)
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    <input type="text"
                            placeholder="Mohamed Elsayed"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="email"
                        placeholder="your@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="primary mt-1">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register