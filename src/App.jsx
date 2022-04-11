import './App.css';
import ContextProvider from './component/context/Mycontext';
// import Navbar from './components/Navbar/Navbar.jsx';
// import LeftPanel from './components/LeftPanel/LeftPanel';
// import MainBody from './components/MainBody/MainBody';
import Navbar from './component/Navbar/Navbar'
import LeftPanel from './component/LeftPanel/LeftPanel'
import MainBody from './component/MainBody/MainBody.jsx'
// import Main from './component/main_container/main.jsx';
// import MainBody from './component/MainBody/MainBody.jsx'
function App() {
  return (
    <>
      <ContextProvider>
      <Navbar />
      <main>
        <LeftPanel/>
        <MainBody/>
      </main>
      </ContextProvider>
    </>
  );
}

export default App;
