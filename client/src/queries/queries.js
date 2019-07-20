import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

const addBookMutation = gql`
  mutation($name:String!, $genre:String!, $authorId:ID!){
      addBook(name: $name,genre: $genre,authorid: $authorId){
          name
          id
      }
  }
`

const getBookQuery = gql`
  query($id: ID){
      book(id: $id){
          id
          name
          genre
          author{
              id
              name
              age
              books{
                  name
                  id
              }
          }
      }
  }
`

const addAuthorMutation = gql`
  mutation($name:String!, $age:Int!){
      addAuthor(name: $name,age: $age){
          name
          age
          id
      }
  }
`

export {getAuthorsQuery,getBooksQuery,addBookMutation,getBookQuery,addAuthorMutation};