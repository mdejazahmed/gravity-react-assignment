import { Check, Trash2 } from "lucide-react";

export const TodoItem = ({ todo, onToggle, onDelete }) => {
    const completeSound = () => {
        const audio = new Audio('/complete.mp3');
        audio.play();
      };
    const deleteSound = () => {
        const audio = new Audio('/delete.mp3');
        audio.play();
      };
  return (
    <div
      className={`group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] hover:shadow-xl ${
        todo.completed ? "opacity-75" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => {completeSound(); onToggle(todo.id)}}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              todo.completed
                ? "bg-gradient-to-r from-green-400 to-emerald-500 border-green-400"
                : "border-white/40 hover:border-purple-400"
            }`}
          >
            {todo.completed && <Check size={14} className="text-white" />}
          </button>
          <span
            className={`text-lg transition-all duration-300 ${
              todo.completed ? "text-white/60 line-through" : "text-white"
            }`}
          >
            {todo.text}
          </span>
        </div>
        <button
          onClick={() => {deleteSound(); onDelete(todo.id)}}
          className="opacity-0 group-hover:opacity-100 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white p-2 rounded-xl transition-all duration-300 hover:scale-110"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};
