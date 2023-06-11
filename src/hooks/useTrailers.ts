import APIClient from "../services/apiClient";
import Trailer from "../entities/Trailer";

import { useQuery } from "@tanstack/react-query";

const unseTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll
  })
}

export default unseTrailers;