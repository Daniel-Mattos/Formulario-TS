import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex flex-grow items-center justify-center px-4">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
