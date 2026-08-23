import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    dispatch(addTodos(input.trim()));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto mb-8 px-4">
      <div className="relative flex flex-col sm:flex-row gap-3 items-center bg-slate-900/50 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-xl focus-within:border-indigo-500/50 transition-all duration-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full bg-transparent px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none text-base md:text-lg transition-all"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Task
        </button>
      </div>
    </form>
  );
}
