import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import styled from 'styled-components';

function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  overflow-x: hidden;
`;
