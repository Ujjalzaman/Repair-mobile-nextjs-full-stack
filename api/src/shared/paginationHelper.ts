type IOption = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: any
}

type IOptionResult = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: any;
    skip?: number;
}

const calculatePagination = (option: IOption): IOptionResult => {
    const page = Number(option.page || 1);
    const limit = Number(option.limit || 10);
    const skip = (page - 1) * limit;

    const sortBy = option.sortBy || 'createdAt';
    const sortOrder = option.sortOrder || 'desc';
    return {
        page, limit, skip, sortBy, sortOrder
    }
}
export default calculatePagination;