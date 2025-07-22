import React, { useState, useEffect } from 'react';
import { Check, Circle } from 'lucide-react';
import {AddTodo} from './AddTodo';
import {FilterComponent} from './Filters';
import {TodoList} from './TodoList';

export const TodoApp = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [filter, setFilter] = useState('all');
  
  
    useEffect(() => {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      };
      setTodos(prev => [newTodo, ...prev]);
    };
  
    const toggleTodo = (id) => {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    const deleteTodo = (id) => {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    };
  
    const getFilteredTodos = () => {
      switch (filter) {
        case 'completed':
          return todos.filter(todo => todo.completed);
        case 'pending':
          return todos.filter(todo => !todo.completed);
        default:
          return todos;
      }
    };
  
    const filteredTodos = getFilteredTodos();
    const completedCount = todos.filter(todo => todo.completed).length;
    const pendingCount = todos.length - completedCount;
  
    return (
      <div className="min-h-screen min-w-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="max-w-2xl mx-auto py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              ✨ Todo Magic ✨
            </h1>
            <p className="text-white/70 text-lg">
              Organize your life with style
            </p>
            <div className="flex justify-center gap-8 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">
                  {pendingCount}
                </div>
                <div className="text-white/60 text-sm font-medium flex items-center gap-1">
                  <Circle size={12} className="text-orange-400" />
                  Pending
                </div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {completedCount}
                </div>
                <div className="text-white/60 text-sm font-medium flex items-center gap-1">
                  <Check size={12} className="text-green-400" />
                  Completed
                </div>
              </div>
            </div>
          </div>
  
          {/* Add Todo Form */}
          <AddTodo onAdd={addTodo} />
  
          {/* Filter Buttons */}
          <FilterComponent filter={filter} onFilterChange={setFilter} />
  
          {/* Todo List */}
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
  
          {/* Footer */}
          <div className="text-center mt-12 text-white/50">
            <p>✨ Built with React & Tailwind CSS ✨</p>
          </div>
        </div>
      </div>
    );
  };
  