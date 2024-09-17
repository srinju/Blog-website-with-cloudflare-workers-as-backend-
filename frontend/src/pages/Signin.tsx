import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
        navigate("/blogs", { replace: true });
        }
    }, [navigate]);

    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signin" />
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
}