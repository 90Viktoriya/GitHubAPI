import { Typography } from '@mui/material';
import { ComponentsCaptions } from '../../../data/ComponentsCaptions';
import { useGetCharactersByNameQuery } from '../../../services/githubApi';

export function Result() {
  const data = useGetCharactersByNameQuery('sa', undefined);
  console.log(data);
  return <Typography variant="h1">{ComponentsCaptions.SEARCH_RESULT}</Typography>;
}
