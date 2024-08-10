import { Provider } from 'react-redux';
import './App.css';
import { Router } from './features/Router/Router';
import { store } from './features/Redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
