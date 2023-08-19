import { Routes, Route } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import Projects from './views/projects';


const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </>
 );
};

export default App;
