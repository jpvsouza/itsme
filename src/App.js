import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import Footer from './components/Footer';
import NewHeader from './components/NewHeader';

function App() {
  return (
    <div className="p-2 text-dark bg-opacity-50 testando">
      <NewHeader />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
