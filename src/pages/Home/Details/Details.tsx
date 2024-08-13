import { Box, Chip, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Loader } from '../../../components/Loader/Loader';
import { useAppSelector } from '../../../features/Redux/hooks';
import { useGetRepository } from '../../../hooks/useGetRepository';

export function Details() {
  const { details, isFetching } = useGetRepository();
  const repositoryName = useAppSelector((state) => state.search.selectedRepository.name);
  console.log(details);
  console.log('here');

  if (isFetching || !details) {
    return <Loader />;
  }
  return (
    <Box>
      <Typography>{repositoryName}</Typography>
      <Chip label={details.languages.nodes[0].name} color="primary" />
      <Typography>
        <StarIcon />
        {details.stargazerCount}
      </Typography>
      {details.languages.nodes.map((language) => (
        <Chip key={language.name} label={language.name} />
      ))}
      <Typography>{details.description}</Typography>
      <Typography>{details.licenseInfo?.name}</Typography>
    </Box>
  );
}
