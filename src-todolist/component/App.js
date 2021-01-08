import React from 'react';
import Footer from './Footer';
import AddTodo from '../redux/containers/AddTodo';
import VisibleTodoList from '../redux/containers/VisibleTodoList';
import MFooter from './MFooter';

const App = () => (<div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <MFooter />
</div>)

export default App