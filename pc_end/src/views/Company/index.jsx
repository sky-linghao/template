import React, { Component } from "react";
import axios from "axios";
class View extends Component {
  constructor(props) {
    super(props);
      this.state = {
        list: [],
        
      }
  }
  getPdd() {
    axios.get(
      '/home/mediareports',
      {
        params: {
          page_number: 1,
          page_size:10
      }
    }
    ).then((res) => {
      console.log(res.data)
       this.setState(
         {
          list:res.data.data
        }
      )
  })
}
  componentDidMount() {
    this.getPdd();  
  }
  listFn(data) {
    return data.map((item,index) => {
      return (
        <li key={index} className="xxss">
          {item.main_title}----{item.id}----{item.source}
        </li>
      )
    })
  }
  
  render() {
    const {list } = this.state;
    console.log(list)
    return (
      <div>
        {list.length !== 0?<ul>{this.listFn(list)}</ul>:'请等待'}
      </div>
    )
  }
}
export default View;