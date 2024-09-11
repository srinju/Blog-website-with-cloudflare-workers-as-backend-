import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import {sign} from 'hono/jwt';


export const userrouter = new Hono<{
    Bindings : {
        DATABASE_URL :string,
        JWT_SECRET : string
    }
}>();

userrouter.post('/signup' ,async (c) => {
    
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasources : {
            db : {
                url : c.env.DATABASE_URL
            }
        }
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.create({
            data : {
                email : body.email,
                password : body.password,
                name : body.name
            }
        });
    
        const token = await sign({
            id : user.id
        },c.env.JWT_SECRET);
    
        return c.json({
            jwt : token
        });
    } catch(e) {
        console.log(e);
        c.status(411);
        return c.json({
            message : "invalid!!"
        });
    }
});

userrouter.post('/signin' , async (c) => {
    //see if the user exists 
    //if the user exists then sign in 

    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasources : {
            db : {
                url : c.env.DATABASE_URL
            }
        }
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.findUnique({
            where : {
                email : body.email,
                password : body.password
            }
        });

        if(!user) {
            c.status(403);
            return c.json({
                message : "incorrect credentials!!"
            });
        }

        const jwt = await sign({
            id : user.id
        } , c.env.JWT_SECRET);

        return c.json({
            token : jwt
        });

    } catch(e) {
        console.log(e);
        c.status(411);
        return c.json({
            message : "Invalid SHit!!"
        });
    }
})