import { skipToken } from "@reduxjs/toolkit/dist/query";

interface ISearchBattletagsQuery {
    battletag: string | typeof skipToken
    page?: number
}

export default ISearchBattletagsQuery;