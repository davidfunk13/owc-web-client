import IBattletag from "../../types/IBattletag";
import IPaginatedResponse from "../../types/IPaginatedResponse";
import ISearchBattletagQuery from "../../types/ISearchBattletagsQuery";
import { api } from "./api";

type BattletagSearchResponse = IPaginatedResponse<IBattletag>

export const battletagApi = api.injectEndpoints({
    
    endpoints: (build) => ({
        searchBattletags: build.query<BattletagSearchResponse, ISearchBattletagQuery>({
            query: ({ battletag, page }) => ({ url: `scrape/battletags/${String(battletag)}/${page}` }),
            providesTags: (result) => {
                if (result && result.data) {
                    return [
                        ...result.data.map(({ id }) => ({ type: "Battletags", id } as const)),
                        { type: "Battletags", id: "SCRAPE LIST" },
                    ];
                }

                return [{ type: "Battletags", id: "SCRAPE LIST" }];
            },
            
        }),
        getAllBattletags: build.query<BattletagSearchResponse, string | undefined>({
            query: (userId) => ({ url: "battletag/all", params: { id: userId } }),
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
        saveBattletag: build.mutation<void, IBattletag>({
            query(data) {
                console.log({ data });
                const { id, ...body } = data;
                return {
                    url: "battletag",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [{ type: "Battletags", id: "LIST" }]
        }),
    }),
});

export const { useSearchBattletagsQuery, useGetAllBattletagsQuery, useSaveBattletagMutation } = battletagApi;

export const { endpoints: { searchBattletags, saveBattletag, getAllBattletags } } = battletagApi;