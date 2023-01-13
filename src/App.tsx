import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};
export default App;
