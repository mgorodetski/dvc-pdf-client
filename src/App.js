import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
import TeacherPdf from './pages/TeacherPdf';
import GramotaMain from './pages/GramotaMain';
import KlassPdf from './pages/KlassPdf';
import TeacherThankMain from './pages/TeacherThankMain';



function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={TeacherThankMain} />
            <Route path="/spasibo-klass" exact component={GramotaMain} />
            {/* <Route path="/spasibo-uchitel" exact component={TeacherThankMain} /> */}
            <Route path="/teacher-pdf" exact component={TeacherPdf} />
            <Route path="/klass-pdf" exact component={KlassPdf}/>
          </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
