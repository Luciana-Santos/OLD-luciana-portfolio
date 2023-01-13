import { ThemeProvider } from 'styled-components';
import About from './components/About/About';
import Header from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <About />
    </ThemeProvider>
  );
};
export default App;
