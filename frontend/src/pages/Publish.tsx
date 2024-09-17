import axios from "axios";
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Publish = () => {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const navigate = useNavigate();

    return <div className="">
        <AppBar />
        <div className="flex justify-center pt-10 text-5xl">
            Publish Your Thoughts 
        </div>
        <div className="flex justify-center pt-10">
            <div className="max-w-screen-lg w-5/12">
                <input onChange={(e) => {
                    setTitle(e.target.value);
                }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   placeholder="Title" />
            </div>
        </div> 
        <TextEditor onChange={(e) => {
            setDescription(e.target.value);
        }} />
        <div className="flex justify-center mt-10">
            <button onClick={async() => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title,
                    content : description
                },{
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem("token")}`
                    }
                });
                navigate(`/blog/${response.data.id}`)
            }} type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
        </div>
    </div> 
};

function TextEditor({onChange} : {onChange : (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="flex justify-center pt-10 mr-20">
        
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea onChange={onChange} className="block p-2.5 w-6/12 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark : dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

    </div>
}