import IBattletag from "../../types/IBattletag";
import IPaginatedResponse from "../../types/IPaginatedResponse";
import ISearchBattletagQuery from "../../types/ISearchBattletagsQuery";
import { api } from "./api";

type BattletagSearchResponse = IPaginatedResponse<IBattletag>

export const battletagSearchApi = api.injectEndpoints({
    endpoints: (build) => ({
        searchBattletags: build.query<BattletagSearchResponse, ISearchBattletagQuery>({
            query: ({ battletag, page }) => ({ url: `scrape/battletags/${String(battletag)}/${page}` }),
            providesTags: (result) => {
                if (result && result.data) {
                    return [
                        ...result.data.map(({ id }) => ({ type: "Battletags", id } as const)),
                        { type: "Battletags", id: "LIST" },
                    ];
                }

                return [{ type: "Battletags", id: "LIST" }];
            }
        }),
    }),
});

export const { useSearchBattletagsQuery } = battletagSearchApi;

export const { endpoints: { searchBattletags } } = battletagSearchApi;