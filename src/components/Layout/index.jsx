import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
