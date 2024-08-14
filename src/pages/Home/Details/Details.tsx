import { useEffect } from 'react';
import { yellow } from '@mui/material/colors';
import { Box, Chip, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Loader } from '../../../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../../features/Redux/hooks';
import { useGetRepository } from '../../../hooks/useGetRepository';
import { ComponentsCaptions } from '../../../data/ComponentsCaptions';
import styles from './Details.module.sass';

import { setSelectedRepository } from '../../../features/Redux/searchSlice/searchSlice';
import { useSearchParams } from 'react-router-dom';
import { RouterParams } from '../../../features/Router/Router.enum';

//блок с деталями по репозиторию
export function Details() {
  const repositoryName = useAppSelector((state) => state.search.selectedRepository.name);
  const selectedRepository = useAppSelector((state) => state.search.selectedRepository);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const detailsParams = searchParams.get(RouterParams.DETAILS);

  //change data if navigation using address bar
  useEffect(() => {
    if (detailsParams && detailsParams !== `${selectedRepository.login}_${selectedRepository.name}`) {
      const [login, name] = detailsParams.split('_');
      dispatch(setSelectedRepository({ login, name }));
    }
  }, [detailsParams, dispatch, searchParams, selectedRepository.login, selectedRepository.name]);
  const { details, isFetching } = useGetRepository();

  if (isFetching || !details) {
    return <Loader />;
  }
  return (
    <>
      <Typography variant="h3">{repositoryName}</Typography>
      <Box className={styles.language}>
        {details.language && <Chip label={details.language} color="primary" />}
        <Box className={styles.stars}>
          <StarIcon sx={{ color: yellow[500] }} />
          {details.stargazers_count}
        </Box>
      </Box>
      <Typography>{details.description}</Typography>
      <Typography>
        {ComponentsCaptions.LICENSE} {details.license?.name}
      </Typography>
    </>
  );
}
