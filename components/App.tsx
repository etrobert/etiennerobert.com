import SplitSlider from './SplitSlider';
import DanceGallery from './DanceGallery';
import { useRoute } from './useRoute';

const App = () => {
  const [path, navigate] = useRoute();

  if (path === '/dance') return <DanceGallery onBack={() => navigate('/')} />;

  return <SplitSlider onOpenDance={() => navigate('/dance')} />;
};

export default App;
