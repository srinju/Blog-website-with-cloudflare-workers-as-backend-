import { SingnupInput } from "@srinju/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth = ({type} : {type : "signup" | "signin"}) => {

    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SingnupInput>({ //from here we can know what fields does the backend want from the signupINput
        name : "",
        email : "",
        password : ""
    });

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ? "signup" : "signin"}`,postInputs);
            const jwt = response.data.token;
            if(typeof jwt === 'string'){
                localStorage.setItem("token",jwt);
                navigate('/blogs');
            }else {
                throw new Error("Invalid token format");
            } 
        } catch(e) {
            console.log("Authentication Error:",e);
            alert("error while authentication!!");
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center ">
            <div>
                <div>
                    <div className="text-3xl font-extrabold">
                        {type==="signup" ? "Create an account" : "Login"}
                    </div>
                    <div className="mt-2 text-slate-400">
                        {type === "signup" ? "Already have an account ? " : "Dont have an account ? "}
                        <Link className=" pl-2 underline" to={type==="signup" ? "/signin" : "/signup"}>
                            {type==="signup" ? "Login" : "Sign up"}
                        </Link>
                    </div>
                </div>
                
                <div className="mt-2">
                    {type==="signup" ? <LabelledInput label="Name" placeholder="John Doe" onchange={(e) => {
                        setPostInputs({ //important in handling forms (***remember***)
                            ...postInputs, //what it means is that it lets you retain the old state and override that state also whcih is below line 
                            name: e.target.value  //override the old state
                            /*
                                Maintains other fields: If you are working with a form with multiple fields (like a signup form), you want to update each field individually without resetting the others.
                                Prevents overwriting: If you don't spread the existing object, you'll end up overwriting the entire state with just the updated field, which can break the functionality.
                            */
                        });
                    }} /> : null}

                    <LabelledInput label="email" placeholder="asdasd@gmail.com" onchange={(e) => {
                        setPostInputs({ //important in handling forms (***remember***)
                            ...postInputs, //what it means is that it lets you retain the old state and override that state also whcih is below line 
                            email: e.target.value  //override the old state
                        });
                    }} />

                    <LabelledInput label="password" type={"password"} placeholder="password" onchange={(e) => {
                        setPostInputs({ //important in handling forms (***remember***)
                            ...postInputs, //what it means is that it lets you retain the old state and override that state also whcih is below line 
                            password: e.target.value  //override the old state
                        });
                    }} />

                    <button onClick={sendRequest} type="button" className="w-full mt-6 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{type === "signup" ? "Sign Up" : "Sign in"}</button>

                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label : string,
    placeholder : string,
    onchange : (e:ChangeEvent<HTMLInputElement>) => void
    type? : string //this thing will ensure that stars will be shown when you type your password  and this sould be optional coz you dont want your email and name to be starred
}

function LabelledInput({label,placeholder,onchange,type}:LabelledInputType)  {
    return <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black pt-2">{label}</label>
        <input onChange={onchange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
    </div>
}