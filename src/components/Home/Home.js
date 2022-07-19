import { Route, Routes, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import UsersList from './components/UsersList';
import Welcome from './components/Welcome';

const Home = () => {
  return (
    <div className="home">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </div>
  );
}
 
export default Home;