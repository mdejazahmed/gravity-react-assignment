
import {TodoItem} from './TodoItem';

export const TodoList = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">✨</div>
          <p className="text-white/60 text-lg">No tasks found. Add one above!</p>
        </div>
      );
    }
  
    return (
      <div className="space-y-3">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  };