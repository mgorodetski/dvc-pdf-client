import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import TeacherPdf from './components/TeacherPdf';
import GramotaMain from './components/GramotaMain';
import KlassPdf from './components/KlassPdf';
import TeacherThankMain from './components/TeacherThankMain';



function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/spasibo-klass" exact component={GramotaMain} />
            <Route path="/spasibo-uchitel" exact component={TeacherThankMain} />
            <Route path="/teacher-pdf" exact component={TeacherPdf} />
            <Route path="/klass-pdf" exact component={KlassPdf}/>
          
          </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
