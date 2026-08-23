import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodos, updateTodos } from "../features/todo/todoSlice";

export default function Todo() {
  // Read todos from store (state.todos.todo)
  const todos = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();

  // Local state for handling inline editing
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    dispatch(updateTodos({ id, text: editText.trim() }));
    setEditingId(null);
    setEditText("");
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter") {
      saveEdit(id);
    } else if (e.key === "Escape") {
      setEditingId(null);
      setEditText("");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      {todos.length === 0 ? (
        <div className="text-center py-12 bg-slate-900/30 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-slate-500 mx-auto mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.375c.9 0 1.625-.725 1.625-1.625V13.5c0-.9-.725-1.625-1.625-1.625H9M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9Z"
            />
          </svg>
          <h3 className="text-slate-300 font-semibold text-lg mb-1">No tasks today!</h3>
          <p className="text-slate-500 text-sm">Add some tasks using the form above to get started.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-slate-900/40 backdrop-blur-md border border-slate-800 hover:border-slate-700/80 p-4 rounded-xl shadow-lg transition-all duration-300 group"
            >
              {editingId === todo.id ? (
                // EDITING STATE
                <div className="flex-1 flex items-center gap-3">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, todo.id)}
                    className="w-full bg-slate-950 text-slate-100 px-3 py-1.5 rounded-lg border border-indigo-500 focus:outline-none text-sm md:text-base"
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="p-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all cursor-pointer"
                    title="Save Change"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-lg border border-slate-700 transition-all cursor-pointer"
                    title="Cancel"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                // DEFAULT STATE
                <>
                  <span className="text-slate-200 text-sm md:text-base font-medium break-all pr-4">
                    {todo.text}
                  </span>
                  <div className="flex items-center gap-2 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => startEditing(todo.id, todo.text)}
                      className="p-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all cursor-pointer"
                      title="Edit Task"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 20.013a4.5 4.5 0 0 1-1.89 1.127l-3.136 1.042a.75.75 0 0 1-.928-.928l1.042-3.137a4.5 4.5 0 0 1 1.127-1.89L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => dispatch(removeTodos(todo.id))}
                      className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg border border-rose-500/20 hover:border-rose-500/40 transition-all cursor-pointer"
                      title="Delete Task"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
