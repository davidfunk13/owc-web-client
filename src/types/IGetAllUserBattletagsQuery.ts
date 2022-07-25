import { skipToken } from "@reduxjs/toolkit/dist/query";

interface IGetAllUserBatteltagsQuery {
    userId?: string | typeof skipToken
    page?: number
}

export default IGetAllUserBatteltagsQuery;