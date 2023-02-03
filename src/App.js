import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TeacherPdf from './pages/TeacherPdf';
import KlassMain from './pages/KlassMain';
import KlassPdf from './pages/KlassPdf';
import TeacherThankMain from './pages/TeacherThankMain';
import TeacherPlusKlass from './pages/TeacherPlusKlass';
import KlassPdfPreview from './components/klassPdfPreview'


function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/spasibo-klass" exact component={KlassMain} />
            <Route path="/spasibo-uchitel" exact component={TeacherThankMain} />
            <Route path="/teacher-pdf" exact component={TeacherPdf} />
            <Route path="/klass-pdf" exact component={KlassPdf}/>
            <Route path="/together" exact component={TeacherPlusKlass}/>
            <Route path="/klass-pdf-preview" exact component={KlassPdfPreview}/>

          </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
