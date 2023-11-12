import { Skeleton } from 'antd';
const BlogSkeleton = () => {
    return (
        <div className="card shadow text-center border-0 rounded-bottom">
            <div className="flex-column p-0 border-0 d-flex justify-content-center align-items-center" style={{ height: '11rem', overflow: 'hidden' }}>
                <Skeleton.Image active={true} />
            </div>
            <div className="card-body p-0">
                <div className="p-2">
                    <Skeleton paragraph={{ rows: 4 }} />
                    <hr className="my-1 p-0" />
                </div>
                <div className="px-2">
                </div>
                <div className="mt-1 mb-3 text-start">
                    <Skeleton.Button active={true} size={'small'} shape={'square'} block={true} className="w-25 ms-2" />
                </div>
            </div>
        </div>
    )
}

export default BlogSkeleton