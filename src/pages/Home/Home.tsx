import { Outlet, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { Search } from '../../features/Search/Search';
import { RouterPath } from '../../features/Router/Router.enum';
import styles from './Home.module.sass';

//Главная страница
export function Home() {
  const location = useLocation();
  const showResult = location.pathname.match(RouterPath.SEARCH);
  return (
    <>
      <Search />
      <Box className={showResult ? styles.main : styles.header}>
        {showResult ? <Outlet /> : <Typography variant="h3">{ComponentsCaptions.HOME}</Typography>}
      </Box>
    </>
  );
}
