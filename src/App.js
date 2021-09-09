import './App.css';
import Header from './components/header';
import Layout from './components/layout';
import Footer from './components/footer';
import bg1 from './assets/bg3.jpg';
import bg2 from './assets/bg1.jpg';

function App() {
  return (
    <>
      <Header
        title='This is title'
        descr='This is Description!' />
      <Layout urlBg={bg1} />
      <Layout colorBg='red' />
      <Layout urlBg={bg2} />
      <Footer />
    </>
  );
}

export default App;
