import BlogDetail from "@/components/homepageUI/BlogDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'FixMyPhone/Detail-page',
    description: 'Welcome to FixMyPhone',
  }

const BlogDetailPage = () => {
    return (
        <div>
            <BlogDetail/>
        </div>
    )
}

export default BlogDetailPage;