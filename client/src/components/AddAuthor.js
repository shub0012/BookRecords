import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addAuthorMutation, getAuthorsQuery } from '../queries/queries';



class AddAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: Number,
        }
        this.displayAuthors.bind(this);
    }

    displayAuthors() {
        var data = this.props.getAuthorsQuery;
        // console.log(this.props);
        if (data.loading) {
            return (<div disabled>Loading Authors</div>)
        } else {
            return data.authors.map(author => {
                return (<div key={author.id} value={author.id}>{author.name}</div>);
            })
        }
    }
    
    
    submitForm(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.addAuthorMutation({
            variables: {
                name: this.state.name,
                age: Number(this.state.age),
                
            },
            
            refetchQueries: [{ query: getAuthorsQuery }]
        });
        
    

    }
    render() {
        console.log(this.props);
        return (
            
            <form id="add-author"  onSubmit={this.submitForm.bind(this)}>
                <div className="field1">
                    <label>Author's name:</label>
                    <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                </div>

                <div className="field1">
                    <label>Age:</label>
                    <input type="text" onChange={(e) => this.setState({ age: e.target.value })} />
                </div>
                
                <div id="author-details">
                    {this.displayAuthors()}
                </div>

                <button>+</button>
                
            </form>
            
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addAuthorMutation, { name: "addAuthorMutation" })
)(AddAuthor);