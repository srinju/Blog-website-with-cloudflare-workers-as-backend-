import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"


export const AppBar = () => {
    const navigate = useNavigate();
    return <div className="border-b flex justify-between bg-slate-100 px-10 py-2">
        <div className="flex">
            <Link to={'/blogs'}>
                <div className="pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                        <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 20 11 C 15.054545 11 11 15.054545 11 20 L 11 25 L 11 30 C 11 34.945455 15.054545 39 20 39 L 30 39 C 34.945455 39 39 34.945455 39 30 L 39 24 C 39 22.35503 37.64497 21 36 21 L 35 21 C 34.43497 21 34 20.56503 34 20 C 34 15.054545 29.945455 11 25 11 L 20 11 z M 20 13 L 25 13 C 28.854545 13 32 16.145455 32 20 C 32 21.64497 33.35503 23 35 23 L 36 23 C 36.56503 23 37 23.43497 37 24 L 37 30 C 37 33.854545 33.854545 37 30 37 L 20 37 C 16.145455 37 13 33.854545 13 30 L 13 25 L 13 20 C 13 16.145455 16.145455 13 20 13 z M 20 17 C 18.354545 17 17 18.354545 17 20 C 17 21.645455 18.354545 23 20 23 L 25 23 C 26.645455 23 28 21.645455 28 20 C 28 18.354545 26.645455 17 25 17 L 20 17 z M 20 19 L 25 19 C 25.554545 19 26 19.445455 26 20 C 26 20.554545 25.554545 21 25 21 L 20 21 C 19.445455 21 19 20.554545 19 20 C 19 19.445455 19.445455 19 20 19 z M 20 27 C 18.354545 27 17 28.354545 17 30 C 17 31.645455 18.354545 33 20 33 L 30 33 C 31.645455 33 33 31.645455 33 30 C 33 28.354545 31.645455 27 30 27 L 20 27 z M 20 29 L 30 29 C 30.554545 29 31 29.445455 31 30 C 31 30.554545 30.554545 31 30 31 L 20 31 C 19.445455 31 19 30.554545 19 30 C 19 29.445455 19.445455 29 20 29 z"></path>
                    </svg>
                </div>
            </Link>
            
            <div className="mt-4 ml-3">
                <button onClick={() => {
                    localStorage.clear();
                    navigate('/signin');
                }}>LogOut</button>
            </div>
        </div>
        <div className="flex">
            <Link to={'/publish'}>
                <div className="mt-2 mr-2">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
                </div>
            </Link>
            <div className="mt-3">
                <Avatar name="Srinjoy" size="small"/>
            </div>
        </div>
    </div>
}