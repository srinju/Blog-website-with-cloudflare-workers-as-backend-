import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@srinju/medium-common";

export const blogrouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables : {
        userId : string
    }
}>();

//auth middleware so the blog routes are protected >>

blogrouter.use('/*' , async (c,next) => {
    //get the header
    //verify the token
    // if the token is correct give access to the route 
    //if not then return with status errror
    //also the middleware extracts the userid and extracts it down to the next route

    const authheader = c.req.header("authorization") || "";
    const token = authheader.split(" ")[1];

    try {
        const user = await verify(token,c.env.JWT_SECRET);
        if(user) {
            // @ts-ignore
            c.set("userId" , user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                message : "You are not logged in!!"
            });
        }
    } catch(e) {
        c.status(403);
        return c.json({
            message : "you are not logged in!!"
        });
    }
});

blogrouter.post('/' ,async (c) => {
    //post blogs
    //take userId
    //input title , desc , post

    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message : "incorrect inputs!!"
        });
    }
    
    const prisma = new PrismaClient({
        datasources : {
            db : {
                url : c.env.DATABASE_URL
            }
        }
    }).$extends(withAccelerate());

    //zod validation (left)

    const authorId = c.get("userId");
    const blog = await prisma.post.create({
        data : {
            title : body.title,
            content : body.content,
            authorId : String(authorId)
        }
    });

    return c.json({
        id : blog.id
    });
    
});

blogrouter.put('/' , async (c) => {
    //update the blog of that particular signed in user

    const body = await c.req.json();
    const authorId = c.get("userId");
    const {success} = updateBlogInput.safeParse(body);

    if(!success) {
        c.status(411);
        return c.json({
            message : "incorrect inputs!!"
        });
    }

    const prisma = new PrismaClient({
        datasources : {
            db : {
                url : c.env.DATABASE_URL
            }
        }
    }).$extends(withAccelerate());

    const updateblog = await prisma.post.update({
        where : {
            id : body.id
        },
        data : {
            title : body.title,
            content : body.content
        }
    });

    return c.json({
        id : updateblog.id
    });
})

blogrouter.get('/bulk' , async (c) => {
    //get the blogs of all the users or all the blogs present in our database

    //include pagination so that all the blogs doesent get loaded only the first 10 and there will be a show more button which will show the next blogs that are there in the feed 

    const prisma = new PrismaClient({
        datasources : {
            db : {
                url : c.env.DATABASE_URL
            }
        }
    }).$extends(withAccelerate());

    const blogs = await prisma.post.findMany({
        select : {
            content : true,
            title : true,
            id : true,
            author : {
                select : {
                    name : true
                }
            }
        }
    }); //find all the blogs

    return c.json({
        blogs,

    });
});

blogrouter.get('/:id' , async (c) => {
    //get a particular blog 

    const blogId = c.req.param("id");
    const body =  c.req.json();

    const prisma = new PrismaClient({
        datasources : {
            db : {
                url : c.env.DATABASE_URL
            }
        }
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.post.findFirst({
            where : {
                id : String(blogId)
            },
            select : {
                id : true,
                title : true,
                content : true,
                author : {
                    select : {
                        name :true
                    }
                }
            }
        });

        console.log("blog data fetched" , blog);

        if(!blog){
            throw new Error("Blog not found");
        }
    
        return c.json({
            blog
        });
    } catch(e:any) {
        console.error("error while fetching blogs!!" , e.message,e.stack);
        c.status(500);
        return c.json({
            message : "error while getting blogs of the user!!",
            error : e.message
        });
    }

});