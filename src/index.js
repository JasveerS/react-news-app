import React from 'react';
import ReactDOM from 'react-dom';

//component
import Header from './components/header'
import NewsList from './components/news_list'

//database
import JSON from './db.json'


class App extends React.Component{
    state={
        news:JSON,
        filtered:[]
    }
    
    getKeyWord=(event)=>{
       let keyword=event.target.value;
       let filtered=this.state.news.filter((item)=>{
           return item.title.indexOf(keyword)>-1
       })
       this.setState({
           filtered
       })
    } 

render(){
  return(   
            <div>
                <Header keyword={this.getKeyWord}/>
                <NewsList news={this.state.filtered.length===0?this.state.news:this.state.filtered} />
            </div>
       
  )
    



}
}

ReactDOM.render(<App/>,document.getElementById("root") )