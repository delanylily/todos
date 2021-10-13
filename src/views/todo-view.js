
import { LitElement, html } from 'lit-element'

const VisibilityFilters = {
    show_all: 'All',
    show_active: 'Active',
    show_completed: 'Completed'
};
class TodoView extends LitElement {

    static get properties (){
        return {
            todos: {type: Array},
            filter: {type: String},
            task: {type: String}
        }
    }
    constructor(){
        super();
        this.todos = [];
        this.filter = VisibilityFilters.show_all;
        this.task = '';
    }
    render(){
        return html `
        <div class = "input-layout"></div>
        <input placeholder="Task" value="${this.task}" @change = "${this.updateTask}"> </>
        <button @click="${this.addTodo}">CLick Me</button>
    `
    }

    updateTask(event){
        this.task = event.target.value;
    }

    addTodo(){
        if(this.task){
            this.todos = [...this.todos, {
                task: this.task,
                complete: false
            }];
        }
    }
}
    customElements.define('todo-view', TodoView);
