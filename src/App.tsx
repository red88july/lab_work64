import Toolbar from './components/Toolbar/Toolbar.tsx';
import HomePage from './containers/HomePage/HomePage.tsx';
import AddPage from './containers/AddPage/AddPage.tsx';
import AboutPage from './containers/AboutPage/AboutPage.tsx';
import ContactsPage from './containers/ContactsPage/ContactsPage.tsx';
import PageNoFoundPicture from '../src/images/404PageNotFound.jpg';
import Post from './components/Post/Post';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
     <header>
       <Toolbar />
     </header>
      <main>
        <Routes>
          <Route path="/" element={
            <HomePage />
          }/>
          <Route path="/posts" element={
            <HomePage />
          }/>
          <Route path="/posts/:postId" element={
           <Post />
          }/>
          <Route path="/add" element={
            <AddPage />
          }/>
          <Route path="/about" element={
            <AboutPage />
          }/>
          <Route path="/contacts" element={
            <ContactsPage />
          }/>
          <Route path="*" element={
            <div className="container-fluid pic-container text-center mt-5">
              <img
                className="pic-notfound w-50 h-50"
                src={PageNoFoundPicture}
                alt="Page Not Found" />
            </div>
          }/>
        </Routes>
      </main>
    </>
  );
}

export default App;