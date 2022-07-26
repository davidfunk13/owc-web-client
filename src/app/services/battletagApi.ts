import IBattletag from "../../types/IBattletag";
import IGetAllUserBatteltagsQuery from "../../types/IGetAllUserBattletagsQuery";
import IPaginatedResponse from "../../types/IPaginatedResponse";
import ISearchBattletagQuery from "../../types/ISearchBattletagsQuery";
import { api } from "./api";

export const battletagApi = api.injectEndpoints({

    endpoints: (build) => ({
        searchBattletags: build.query<IPaginatedResponse<IBattletag>, ISearchBattletagQuery>({
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
        getAllBattletags: build.query<IPaginatedResponse<IBattletag>, IGetAllUserBatteltagsQuery>({
            query: ({ userId, page }) => ({ url: `battletag/all/${page}`, params: { id: userId } }),
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
                const { id, ...body } = data;
                return {
                    url: "battletag",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [{ type: "Battletags", id: "LIST" }]
        }),
        deleteBattletag: build.mutation<void, number>({
            query(id) {
                return {
                    url: `battletag/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: [{ type: "Battletags", id: "LIST" }]
        }),
    }),
});

export const { useSearchBattletagsQuery, useGetAllBattletagsQuery, useSaveBattletagMutation, useDeleteBattletagMutation } = battletagApi;

export const { endpoints: { searchBattletags, saveBattletag, getAllBattletags, deleteBattletag } } = battletagApi;