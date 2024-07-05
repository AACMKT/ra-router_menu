import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { HomePage, DriftPage, TimeAttackPage, ForzaPage } from './components';

export default function App() {
  let url = import.meta.env.VITE_url
  console.log(url)
  return (
    <Router basename={ url }>
      <div>
        <Menu />
        <div className="page">
          <Routes basename={ url }>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/drift" exact element={<DriftPage/>} />
            <Route path="/timeattack" exact element={<TimeAttackPage/>} />
            <Route path="/forza" exact element={<ForzaPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}