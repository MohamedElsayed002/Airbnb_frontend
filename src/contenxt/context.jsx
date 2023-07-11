
import { reducer } from "./reducer";
import React , {useState,useEffect,useContext , useReducer} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const name = localStorage.getItem('name')
const email = localStorage.getItem('email')
const role = localStorage.getItem('role')
const id = localStorage.getItem('id')
const token = localStorage.getItem('token')

const initialState = {
    token : token || '' ,
    name :  name || '',
    email :  email || '',
    id : id || '',
    role : role || ''
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState)
    const authFetch = axios.create({
        baseURL : 'https://airbnb-node-js.vercel.app',
        headers : {
            Authorization : `${state.token}`
        }
    })

    const navigate = useNavigate()
    const RegisterUser = async (info) => {
        try {
            const {data} = await axios.post('/api/v1/auth/register',info)
            localStorage.setItem('email' , data.newUser.email)
            localStorage.setItem('name' , data.newUser.name)
            localStorage.setItem('role', data.newUser.role)
            localStorage.setItem('id' , data.newUser._id)
            toast.success(data.message)
            setTimeout(() => {
                navigate('/')
            }, 2000)
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

    const LoginUser = async (info) => {
        try {
            const {data} = await axios.post('/api/v1/auth/login' , info)
            localStorage.setItem('token' , data.token)
            localStorage.setItem('email', data.user.email)
            localStorage.setItem('name', data.user.name)
            localStorage.setItem('role', data.user.role)
            localStorage.setItem('id', data.user._id)
            toast.success(data.message)
            setTimeout(() => {
                navigate('/')
            },2000)
        }catch(error) {
            toast.error(error.response.data.msg)
        }
    }


    const LogoutUser = () => {
        localStorage.removeItem('token')
                localStorage.removeItem('email')
                localStorage.removeItem('name')
                localStorage.removeItem('role')
                localStorage.removeItem('id')
                setTimeout(() => {
                    navigate('/')
                })
    }


    const getSinglePlace = async (id) => {
        const {data} = await axios.get('/api/v1/places/'+id)
        console.log(data)
    }


    const createPlace = async (info) => {
        const {data} = await authFetch.post('/api/v1/places' , info)
        console.log(data)
    }




    return (
        <AppContext.Provider value={{
            ...state,
            RegisterUser,
            LoginUser,
            LogoutUser,
            getSinglePlace,
            createPlace
        }}>
                    {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}


export {useAppContext , AppProvider}