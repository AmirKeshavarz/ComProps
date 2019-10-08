import React, { Component } from 'react'


/* 

Example :Make A Component With ClassComponent

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------
Diffrence Between Simple And Class Component

const SimpleComponent =()=>{
  return(
    <div>Examplw</div>
  )
}


class ClassComponenet extends component{
  render(){
    return(
      <div>Example<div>
    )
  }
} 
*/
const TableHeader = ()=>{
  const row1 = (
  <tr>
    <td>Name</td>
    <td>Job</td>
  </tr>)
  return <thead>{row1}</thead>
}
  
  
    
  



const TableBody = props=>{
  const row = props.characterData.map((row,index)=>{
    return(<tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
    </tr>

    )
  
})
return <tbody>{row}</tbody>
}


class Table extends Component {
  render(){
    const {characterData}=this.props
    return(
      <table>
     <TableHeader/>
        <TableBody characterData={characterData}/>
      </table>
    )
  }
  
}


export default Table;