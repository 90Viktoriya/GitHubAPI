import { Box, Chip, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Loader } from '../../../components/Loader/Loader';
import { useAppSelector } from '../../../features/Redux/hooks';
import { useGetRepository } from '../../../hooks/useGetRepository';
import { yellow } from '@mui/material/colors';
import styles from './Details.module.sass';
import { ComponentsCaptions } from '../../../data/ComponentsCaptions';

export function Details() {
  const { details, isFetching } = useGetRepository();
  const repositoryName = useAppSelector((state) => state.search.selectedRepository.name);

  if (isFetching || !details) {
    return <Loader />;
  }
  return (
    <>
      <Typography variant="h3">{repositoryName}</Typography>
      <Box className={styles.language}>
        <Chip label={details.languages.nodes[0].name} color="primary" />
        <Box className={styles.stars}>
          <StarIcon sx={{ color: yellow[500] }} />
          {details.stargazerCount}
        </Box>
      </Box>
      <Box className={styles.languages}>
        {details.languages.nodes.map((language) => (
          <Chip key={language.name} label={language.name} />
        ))}
      </Box>
      <Typography>{details.description}</Typography>
      <Typography>
        {ComponentsCaptions.LICENSE} {details.licenseInfo?.name}
      </Typography>
    </>
  );
}
