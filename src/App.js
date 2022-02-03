import React from "react";
import "./style.css";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      newtask:'',
      tasks:[
           {
             title:"Buy new phone",
             status:"pending"
           },
           {
            title:"DTH recharge",
            status:"success"
          },
          {
            title:"Join Gym",
            status:"pending"
          },
          {
            title:"Join online classes",
            status:"success"
          },
          {
            title:"Book movie tickets",
            status:"pending"
          },
      ],     
    }
  }
  handleinput=(e)=>{
     this.setState({newtask:e.target.value})
  }
  addTask = ()=>{
    this.setState({tasks:[...this.state.tasks,{title:this.state.newtask,status:'pending'}]})
  }
  deleteTask=(index)=>{
    var temp = [...this.state.tasks];
    temp.splice(index,1);
    this.setState({tasks:[...temp]});
    
  }
  updateSuccess=(index)=>{
   var temp = [...this.state.tasks];
   temp[index].status = 'success';
   this.setState({tasks:[...temp]});
  }
  updatePending=(index)=>{
    var temp = [...this.state.tasks];
    temp[index].status = 'pending';
    this.setState({tasks:[...temp]});
   }

   handlebtn=(e)=>{
   e.target.value==='All'?
      this.setState({tasks:this.state.tasks}):
      this.setState({tasks:this.state.tasks.filter(task => (task.status === e.target.value))});
     }
  render(){
    return(
      <div>
        <h1>To-Do List (objects):</h1>
        <input type ="text" onKeyUp={this.handleinput}/>
        &nbsp;
        <button onClick={this.addTask}>Add Task</button>
        <hr/>
    
        <input type="radio" id="All" name="status" value='All' onChange={this.handlebtn}/>
        <label for="All">All</label>
        <input type="radio" id="success" name="status" value='success' onChange={this.handlebtn}/>
        <label for="sucess">Sucess</label>
        <input type="radio" id="Pending" name="status" value='pending' onChange={this.handlebtn}/>
        <label for="Pending">Pending</label>

        <hr/>
        {
          this.state.tasks.map((x,i)=>{
             return (<div> <li className ={x.status==='success'?'success':'pending'}> {x.title}
             &nbsp;&nbsp;&nbsp;&nbsp;
               <button className={x.status==='success'?'undo':'done'} onClick={()=>{
                 this.updateSuccess(i);
               }}>Done</button>
               &nbsp;

               <button  className={x.status==='pending'?'undo':'done'} onClick={()=>{
                 this.updatePending(i);
               }}>Undo</button>
               &nbsp;

               <button onClick={()=>{
                 this.deleteTask(i);
               }}>Delete</button>
               <hr/>
              </li>
              </div>);
          }
          )
        }
      </div>
    );
  }
}
export default App;
