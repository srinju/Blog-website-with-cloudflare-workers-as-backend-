import { useParams } from "react-router-dom";
import { useBLog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { AppBar } from "../components/AppBar";
import { Skeleton } from "../components/Skeleton";

export const Blog = () => {
    const {id} = useParams();
    const {blog,loading} = useBLog({
        id : String(id)
    });

    if(loading || !blog){
        return <div>
            <AppBar />
            <div>
                <Skeleton />
            </div>
        </div>
    }

    return (
        <div>
            <FullBlog BLOG={blog}/>
        </div>
    )
}