import { Box, Typography } from '@mui/material';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { Search } from './Search/Search';
import { Outlet, useLocation } from 'react-router-dom';
import { RouterPath } from '../../features/Router/Router.enum';

export function Home() {
  const location = useLocation();
  const showResult = location.pathname.match(RouterPath.SEARCH);
  return (
    <Box>
      <Search />
      {showResult ? <Outlet /> : <Typography variant="h1">{ComponentsCaptions.HOME}</Typography>}
    </Box>
  );
}
