import './CSS/TodoItems.css';
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';
import not_tick from './Assets/not_tick.png';

export const TodoItems = ({ no, display, text, setTodos }) => {
    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no !== no);
        localStorage.setItem("todos", JSON.stringify(data));
        setTodos(data);
    };

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                data[i].display = data[i].display === "" ? "line-through" : "";
                break;
            }
        }
        localStorage.setItem("todos", JSON.stringify(data));
        setTodos(data);
    };

    return (
        <div className='todoitems'>
            <div className={`todoitems-container ${display}`} onClick={() => toggle(no)}>
                {display === "" ? <img src={not_tick} alt="not ticked" /> : <img src={tick} alt="ticked" />}
                <div className={`todoitems-text ${display}`}>{text}</div>
            </div>
            <img className='todoitems-cross-icon' onClick={() => deleteTodo(no)} src={cross} alt="remove" />
        </div>
    );
};

export default TodoItems;