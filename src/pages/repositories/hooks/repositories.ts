import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { repositories } from "../../../apis/requests";
import { Repository } from '../../../apis/api.d';

type RepositoriesListOptions = UseQueryOptions<Repository[], unknown>;
type RepositoriesListResult = UseQueryResult<Repository[], unknown>;

export function useRepositoriesList (options?: RepositoriesListOptions): RepositoriesListResult {
  return useQuery({
    queryKey: ["repositories-list"],
    queryFn: repositories.index,
    ...options
  })
};
