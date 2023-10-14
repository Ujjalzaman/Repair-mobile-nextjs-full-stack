import { Table } from "antd";

interface IProps {
    dataSource: any;
    columns: any[];
    loading?: boolean;
    pageSize?: number;
    totalPages?: number;
    showSizeChanger?: boolean;
    onPaginationChange?: (page: number, pageSize: number) => void;
    onTableChange?: (pagination: any, filter: any, sorter: any) => void;
    showPagination?: boolean;
}
const UMTable = ({
    dataSource,
    columns,
    loading,
    pageSize,
    totalPages,
    showPagination = true,
    onPaginationChange,
    onTableChange,
    showSizeChanger
}: IProps) => {
    const paginationConfig = showPagination ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
        showPagination: true
    } : false;
    return (
        <Table
            loading={loading}
            dataSource={dataSource}
            columns={columns}
            onChange={onTableChange}
            pagination={paginationConfig}
        />

    )
}
export default UMTable;