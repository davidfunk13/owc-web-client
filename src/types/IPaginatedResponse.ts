interface IPaginatedResponse<T> {
    data: T[]
    page: number
    pages: number
}

export default IPaginatedResponse;