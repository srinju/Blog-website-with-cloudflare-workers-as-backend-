import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"


export const FullBlog = ({ BLOG } : { BLOG: Blog }) => {
    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 pt-12 w-full max-w-screen-xl  ">
                    <div className="col-span-8 pl-10 pt-5 ">
                        <div className="text-5xl font-extrabold">
                            {BLOG.title}
                        </div>
                        <div className="text-slate-400 pt-2">
                            Posted on 17th September 2024
                        </div>
                        <div className="text-slate-800 pt-2">
                            {BLOG.content}
                        </div>
                    </div>
                    <div className="col-span-4 p-5 h-screen ">
                        <div className="text-slate-700 text-lg pb-2">
                            Author
                        </div>
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar name={BLOG.author.name} size="small" />
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {BLOG.author.name}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Software Developer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}