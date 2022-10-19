import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import TeacherPdf from './components/TeacherPdf';
import GramotaMain from './components/GramotaMain';
import PdfGramota from './components/PdfGramota';
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
            <Route path="/klass-pdf" exact component={PdfGramota}/>
          
          </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
