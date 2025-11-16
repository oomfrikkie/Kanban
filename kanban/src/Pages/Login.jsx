import { useState, useEffect } from "react"
import { Button, Dialog } from "@mui/material";

export default function Login()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [formFilled, setFormFilled] = useState(false);

    useEffect (() => {
        if (password && email)
        {
            setFormFilled(true);
        }
    },[email, password])

    return (
        <>
        <div className="mt-2">
        <h1 className="text-2xl">Login</h1>
      </div>
            <div>
                <h2>Enter your login details:</h2>
                <form className="flex flex-col gap-4">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
                    <div>
                        <Button disabled={!formFilled} className={formFilled ? "!bg-gray-200 !text-black" : "!bg-gray-100 !text-black"}>Login</Button>
                        </div>
                </form>
            </div>   
        </>
    )
}