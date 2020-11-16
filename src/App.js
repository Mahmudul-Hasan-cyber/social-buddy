import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container'; import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import CommentDetail from './components/CommentDetail/CommentDetail';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <Header />
        <Router>
          <Container maxWidth="sm" style={{ marginBottom: "20px" }}>
            <ul style={{ listStyle: "none", display: "inline-flex" }}>
              <li style={{ marginRight: "20px" }}> <Link to="/">Home</Link></li>
              <li style={{ marginRight: "20px" }}> <Link to="#">About Us</Link></li>
            </ul>
          </Container>
          <Switch>

            <Route exact path="/"><Home></Home>
            </Route>
            <Route path="/post/:postId" component={CommentDetail} />
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
} 

export default App;
