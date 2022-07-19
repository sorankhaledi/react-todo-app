import { Route, Routes, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import TodoList from './components/TodoList';
import UsersList from './components/UsersList';
import Welcome from './components/Welcome';
import NotFound from '../NotFound';

const Home = () => {
  return (
    <Container className="home">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
 
export default Home;