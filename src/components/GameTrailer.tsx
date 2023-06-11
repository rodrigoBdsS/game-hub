import React from "react";
import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (error) throw error;

  if (isLoading) return <Spinner />;

  const firstTrailer = trailers?.results[0];

  return firstTrailer ? (
    <video
      src={trailers?.results[0].data[480]}
      poster={firstTrailer.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
