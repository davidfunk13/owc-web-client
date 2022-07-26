import { skipToken } from "@reduxjs/toolkit/dist/query";

interface IGetAllUserBattletagsQuery {
    userId?: string | typeof skipToken
    page?: number
}

export default IGetAllUserBattletagsQuery;