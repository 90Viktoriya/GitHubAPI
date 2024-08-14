import { useNavigate } from 'react-router-dom';
import { Box, Button, Input } from '@mui/material';
import { useCallback, useState } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { setCurrentPage, setSearchValue } from '../Redux/searchSlice/searchSlice';
import { useAppDispatch } from '../Redux/hooks';
import { RouterParams, RouterPath } from '../Router/Router.enum';
import { initialState } from '../Redux/searchSlice/searchSlice.constants';
import styles from './Search.module.sass';

//блок поиска
export function Search() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event?.target.value);
  };

  const handleOnClick = useCallback(() => {
    if (!inputValue) {
      return;
    }
    dispatch(setSearchValue(inputValue));
    dispatch(setCurrentPage(initialState.currentPage));
    navigate(
      `/${RouterPath.SEARCH}/?${RouterParams.QUERY}=${inputValue}&${RouterParams.PAGE}=${initialState.currentPage}`
    );
  }, [dispatch, inputValue, navigate]);

  return (
    <Box className={styles.search}>
      <Input
        className={styles.input}
        type="text"
        placeholder={ComponentsCaptions.SEARCH_REQUEST}
        value={inputValue}
        onChange={handleChange}
      />
      <Button className={styles.button} onClick={handleOnClick} variant="contained">
        {ComponentsCaptions.SEARCH}
      </Button>
    </Box>
  );
}
