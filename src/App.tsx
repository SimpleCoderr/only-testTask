import dataSlider from './API';
import './App.scss';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <Slider name="исторические даты" data={dataSlider}/>
    </div>
  );
}

export default App;
