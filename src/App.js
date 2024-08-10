import './App.css';
import Appoitment from './appoitment/Appoitment';
import Classes from './classes/Classes';
import Factilities from './faciltities/Factilities';
import Footer from './footer/Footer';
import Header from './header/Header';
import LearnMore from './LearnMore/LearnMore';
import Navbar from './navbar/Navbar';
import Popular from './popular/Popular';
import Teacher from './teacher/Teacher';

function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Factilities/>
   <LearnMore/>
   <Teacher/>
   <Classes/>
   <Appoitment/>
   <Popular/>
   <Footer/>
   </>
  );
}

export default App;
