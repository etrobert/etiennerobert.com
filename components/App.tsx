import { Routes, Route } from 'react-router';
import SplitSlider from './SplitSlider';
import DanceGallery from './DanceGallery';

const App = () => (
  <Routes>
    <Route path="/" element={<SplitSlider />} />
    <Route path="/dance" element={<DanceGallery />} />
  </Routes>
);

export default App;
