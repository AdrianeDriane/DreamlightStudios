import { Route, Routes } from 'react-router-dom';
import VisitorTemplate from './components/templates/VisitorTemplate';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <VisitorTemplate>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </VisitorTemplate>
  );
}

export default App;
