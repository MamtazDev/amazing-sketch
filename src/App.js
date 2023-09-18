import './App.css';
import { Header } from './components/header/Header';
import { UploadImage } from './components/uploadimage/UploadImage';


function App() {
  return (
    <div className='bg_color'>
      <Header />
      <UploadImage />
    </div>
  );
}

export default App;
