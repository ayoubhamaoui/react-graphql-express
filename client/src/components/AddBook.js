import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getAuthorsQuery} from '../queries/queries';

class addBook extends Component {
    dispalyAuthors(){
        var data = this.props.data;
        if(data.loading){
            return (<option disabled>Loading Authors</option>);
        }else{
            return data.authors.map(author =>{
                return(<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }
    render() {
      return (
        <form id="add-book">
          
          <div id="field" >
            <label>Book name:</label>
            <input type="text"/>
          </div>

          <div id="field" >
            <label>Genre:</label>
            <input type="text"/>
          </div>

          <div id="field" >
            <label>Author:</label>
            <select>
                <option>Select author</option>
                {this.dispalyAuthors()}
            </select>
          </div>

          <button>+</button>

        </form>
      );
    }
  }

  export default graphql(getAuthorsQuery)(addBook);
