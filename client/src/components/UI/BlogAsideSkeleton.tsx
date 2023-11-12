import { Skeleton } from 'antd';
const BlogAsideSkeleton = () => {
    return (
        <div className="d-flex gap-2 align-items-center mb-2" >
            <Skeleton.Image active={true} />
            <div className="p-2">
                <div className="d-flex text-start gap-2">
                <Skeleton.Input active={true} size={'large'} />
                </div>
            </div>
        </div>
    )
}
export default BlogAsideSkeleton;