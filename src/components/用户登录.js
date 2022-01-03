import React, {useState, useEffect} from "react";
import axios from '../axios_intance'
import {Button} from "@mui/material";


const 用户登录 = () => {
    const [user, setUser] = useState({
        username: '李道明123',
        password: 'abc123123'
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isOnline, setIsOnline] = useState(false)


    const changeHandler = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const login = e => {
        e.preventDefault()

        const getOne = async () => {
            setIsLoading(true)
            const result = await axios.post('/login', user)
            if (result.data.length == 0) {
                console.log('登录失败')
            } else {
                setUser(result.data)
                setIsLoading(false)
                setIsOnline(true)
                console.log('登录成功')
            }
        }

        getOne()
    }


    const logout = e => {
        e.preventDefault()

        setUser({...user, username: '访客'})
        setIsOnline(false)
        console.log('退出')
    }


    return (
        <div>
            {
                isOnline
                    ?
                    (
                        <form onSubmit={logout}>
                            <label>{user.username}</label>
                            <button>退出</button>
                        </form>
                    )
                    :
                    (
                        <form onSubmit={login}>
                            <div>
                                <label>
                                    账号:
                                    <input type="text" name="username" maxLength="10" autoComplete="off" value={user.username} onChange={changeHandler}/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    密码:
                                    <input type="password" name="password" value={user.password} onChange={changeHandler}/>
                                </label>
                            </div>
                            <Button variant="contained">你好，世界</Button>
                        </form>
                    )
            }

        </div>
    )
}





export default 用户登录