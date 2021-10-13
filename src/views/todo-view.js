import { LitElement, html } from 'lit-element';

const VisibilityFilters = {
  show_all: "All",
  show_active: "Active",
  show_completed: "Completed",
};
class TodoView extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
      filter: { type: String },
      task: { type: String },
    };
  }
  constructor() {
    super();
    this.todos = [];
    this.filter = VisibilityFilters.show_all;
    this.task = '';
  }
  render() {
    return html`
      <div class="input-layout">
        <input
          type="text"
          placeholder="Task"
          value="${this.task}"
          @change="${this.updateTask}"
          @keyup="${this.shortcutListen}"
        />
        <button @click="${this.addTodo}">Add Task</button>
      </div>
      <div class="todo-list">
          ${this.todos.map(todo => html`
          <div class="todo-item">
              <input type="checkbox" ?checked = "${todo.complete}"
              @change ="${ event => this.updateTodoStatus(todo, event.target.checked)}">
              ${todo.task}
          </div>

          `)}

      </div>
    `;
  }

  addTodo() {
    if (this.task) {
      this.todos = [
        ...this.todos,
        {
          task: this.task,
          complete: false,
        }];
      this.task = '';
      console.log(this.todos)
    }
  }

  shortcutListen(e) {
    if (e.key === "Enter") {
      this.addTodo();
    }
  }

  updateTask(e) {
    this.task = e.target.value;
  }
}
customElements.define('todo-view', TodoView);
