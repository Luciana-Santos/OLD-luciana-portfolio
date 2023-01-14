import { ThemeProvider } from 'styled-components';
import About from './components/About/About';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import { GlobalStyles } from './GlobalStyles';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <About />
      <Projects />
    </ThemeProvider>
  );
};
export default App;
