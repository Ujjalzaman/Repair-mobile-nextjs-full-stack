import { Breadcrumb } from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

const FBreadCrumb = ({
    items,
}: {
    items: {
        label: string;
        link: string;
    }[];
}) => {
    const breadCrumbItems = [
        {
            title: (
                <Link href="/">
                    <HomeOutlined />
                </Link>
            ),
        },
        ...items?.map((item) => {
            return {
                title: item.link ? (
                    <Link href={item.link} key={item.link + 100}>{item.label}</Link>
                ) : (
                    <span key={item.link + 120}>{item.label}</span>
                ),
            };
        }),
    ];

    return <Breadcrumb items={breadCrumbItems}></Breadcrumb>;
};

export default FBreadCrumb;