import { Component } from "react";


export class ToDoList extends Component {
    
    state = {
        input:"",
        toDoList: []
    }

    onChangeEvent(event) {
        this.setState({input: event})
    }

    addItem(input) {
        if(input === '') {
            alert ("Введите значение")
        }
        else {
        let list = this.state.toDoList;
        list.push(input);
        this.setState({toDoList: list, input: ""})
    }}

    crossed(event) {
        const li = event.target;
        li.classList.toggle('crosseds')
    }

    deleteItem() {
        let list = this.state.toDoList;
        list = [];
        this.setState({toDoList: list})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                <input type="text" 
                placeholder=""
                onChange={(event)=> {this.onChangeEvent(event.target.value)}}
                value={this.state.input}/>
                </div>
                <div className="container">
                    <button className="ent" onClick={()=> this.addItem(this.state.input)}>Добавить</button>
                </div>
                <div className="container">
                    <ul>
                        {this.state.toDoList.map((item, index) => (
                            <li onClick={this.crossed} key={index}>📌{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="container">
                    <button className="del" onClick={() => this.deleteItem()}>Удалить</button>
                </div>
                </form>
            </div>
        )
    }
}

