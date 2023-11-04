import { Blogs } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBlog = async (user: any, payload: Blogs): Promise<Blogs> => {
    if (user) {
        payload['userId'] = user.id
    }
    const result = await prisma.blogs.create({
        data: payload
    })
    return result
}

const getAllBlogs = async (): Promise<Blogs[] | null> => {
    const result = await prisma.blogs.findMany({
        include: {
            user: true
        }
    });
    return result;
}

const getBlog = async (id: string): Promise<Blogs | null> => {
    const result = await prisma.blogs.findUnique({
        where: { id },
        include: {
            user: true
        }
    });
    return result;
}

const deleteBlog = async (id: string): Promise<Blogs | null> => {
    const result = await prisma.blogs.delete({
        where: { id }
    });
    return result;
}

const updateBlog = async (id: string, payload: Partial<Blogs>): Promise<Blogs | null> => {
    const result = await prisma.blogs.update({
        where: {
            id: id
        },
        data: payload
    })
    return result;
}

export const BlogService = {
    createBlog,
    getAllBlogs,
    getBlog,
    deleteBlog,
    updateBlog
}