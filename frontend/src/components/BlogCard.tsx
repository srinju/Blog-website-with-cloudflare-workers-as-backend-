import { Link } from "react-router-dom";
import { format } from 'date-fns';

//published date logic left
interface BlogCardProps {
    id : string
    authorName : string;
    title : string;
    content : string;
    publishedDate : string;
};

const isValidDate = (date: string): boolean => {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime());
};

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
} : BlogCardProps)  => {

    const displaycontent = content.length <= 100 ? content : content.slice(0,100) + "..."; 
    const date = isValidDate(publishedDate) ? new Date(publishedDate) : new Date();
    const formattedDate = format(date, 'MMMM dd, yyyy');

    return <Link to={`/blog/${id}`}>
     <div className="border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex justify-center flex-col"><Avatar name={authorName} /></div>
            <div className="ml-2 font-extralight text-sm flex justify-center flex-col">{authorName} </div>
            <div className="ml-2 mr-2">.</div>
            <div className="font-thin text-slate-400 text-sm flex justify-center flex-col">{formattedDate}</div> 
        </div>
        <div className="text-xl font-bold pt-2">
            {title}
        </div>
        <div className="text-md font-thin pt-1">
            {displaycontent}
        </div>
        <div className="w-full text-slate-400 text-sm font-thin pt-2">
            {`${Math.ceil(content.length / 100)} min read`}
        </div>
    </div>
    </Link>
}

export function Avatar({name , size = "small"} : {name :string , size? : "small" | "big"}) {
    return <div className={`relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full cursor-pointer ${size === "small" ? "w-8 h-8" : "w-10 h-10"} dark:bg-gray-600`}>
    <span className="font-md pb-1 text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div> 
}