import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import { Backdrop } from './components/UI/Modal/Modal';
import { GlobalStyles } from './GlobalStyles';
import { ModalProjectContext } from './store/ModalContext';
import theme from './theme/theme';

const App: React.FC = () => {
  const { isModalOpen } = useContext(ModalProjectContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <About />
      <Projects />
      {isModalOpen.show && isModalOpen.project && <Backdrop />}
      <Contact />
    </ThemeProvider>
  );
};
export default App;
