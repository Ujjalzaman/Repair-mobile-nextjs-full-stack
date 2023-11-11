import BlogDetail from "@/components/homepageUI/BlogDetail";
import { Metadata } from "next";

const metadata: Metadata = {
    title: 'FixMyPhone/Detail-page',
    description: 'Welcome to FixMyPhone',
  }

const BlogDetailPage = ({ params }: { params: any }) => {
    const {id} = params;
    return (
        <div>
            <BlogDetail id={id}/>
        </div>
    )
}

export default BlogDetailPage;