import './App.css';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import TodoEdit from './components/TodoEdit.js';
import TodoDelete from './components/TodoDelete.js';
import Fail from './components/Fail.js';
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Switch>
          <Route path="/add">
            <TodoForm />
          </Route>
          <Route path={["/edit/:id"]}>
            <TodoEdit />
          </Route>
          <Route path={["/delete/:id"]}>
            <TodoDelete />
          </Route>
          <Route path="/failure">
            <Fail />
          </Route>
          <Route path="/">
            <TodoList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
