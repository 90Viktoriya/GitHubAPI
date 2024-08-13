import { Provider } from 'react-redux';
import { Router } from './features/Router/Router';
import { store } from './features/Redux/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from './data/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
