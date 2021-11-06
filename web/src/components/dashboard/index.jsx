import axios from 'axios';
import { useState, useEffect, useRef } from "react"
import { baseUrl } from "./../../core"
import { GlobalContext } from './../../context/Context';
import { useContext } from "react";
import Button from '@mui/material/Button';
function Home() {

    let { state, dispatch } = useContext(GlobalContext);

    const [profile, setProfile] = useState({})

    useEffect(() => {

        axios.get(`${baseUrl}/api/v1/profile`, {
            withCredentials: true
        })
            .then((res) => {
                console.log("res +++: ", res.data);
                setProfile(res.data)
            })
    }, [])


    return (
        <>
            <h1> Profile Page </h1>
            <p>{JSON.stringify(profile)}</p>

            <Button fullWidth variant="contained" color="primary"  onClick={() => {
                axios.get(`${baseUrl}/api/v1/profile`, {
                    withCredentials: true
                })
                    .then((res) => {
                        console.log("res +++: ", res.data);
                        setProfile(res.data)
                    })
            }} >get profile</Button>

            <Button fullWidth variant="contained" color="primary" onClick={() => {
                axios.post(`${baseUrl}/api/v1/logout`,{}, {
                    withCredentials: true
                })
                    .then((res) => {
                        console.log("res +++: ", res.data);

                        dispatch({
                            type: "USER_LOGOUT"
                        })
                    })
            }} >Logout</Button>
        </>
    );
}

export default Home;