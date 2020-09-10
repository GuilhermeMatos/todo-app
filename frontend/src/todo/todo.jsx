import React, { Component } from "react";
import axios from "axios";

import PageHeader from "./../template/pageHeader";
import TodoForm from "./../todo/todoForm";
import TodoList from "./../todo/todoList";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      list: [],
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChageDescription = this.handleChageDescription.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    let list = [];

    axios.get(`${URL}?sort=-createdAt`).then((resp) => {
      console.log(resp.data)
      list = resp.data;
    });

    console.log(list);
    this.setState({ description: "", list: list });
  }

  handleChageDescription(e) {
    this.setState({ description: e.target.value });
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then((resp) => this.refresh());
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleChange={this.handleChageDescription}
          handleAdd={this.handleAdd}
        />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}
