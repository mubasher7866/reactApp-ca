import './App.css';
import Students from './components/Students';
import StudentEdit from './components/StudentEdit';
import StudentView from './components/StudentView';
import StudentAdd from './components/StudentAdd';
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Students />} />
        <Route path='/editStudent' element={<StudentEdit />} />
        <Route path='/viewStudent' element={<StudentView />} />
        <Route path='/addStudent' element={<StudentAdd />} />
      </Routes>
    </div>
  );
}

export default App;
