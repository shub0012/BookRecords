import React,{Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from "./components/BookList";
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';
//import AuthorDetails from './components/AuthorDetails';

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render(){
  return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Shubham's Reading List..</h1>
          <BookList />
          <AddBook />
          <AddAuthor />
          
        </div>
        <span >
          <h2 id="author-heading">Authors name</h2>
        </span>
      </ApolloProvider>
  );
 }
}

export default App;
