import React,{Component} from 'react';
  
/*
{Component}  <=> const Component=React.Component;
*/

/*class SearchBar extends Component{
    render(){
        return <input onChange={this.onInputChange} />;
    }
    onInputChange(event){
        console.log(event.target.value);
    }
}*/

class SearchBar extends Component{
    constructor(props){
        super(props);
        
        this.state={ term :''};
    }
    render(){
        return(
            <div className="search-bar">
                 <input value={this.state.term} 
                  onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
  }
  onInputChange(term){
     this.setState({term});
      this.props.onSearchTermChange(term);

  }

}

export default SearchBar;