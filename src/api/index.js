import React from "react"
import axios from "axios";

const url = "https://codeforces.com/api/user.status?handle=srikar777";

export const fetchData = async () =>{
    try {
        const response = await axios.get(url)
        return response;
        
    } catch (error) {
        
    }
}


