import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 py-16 px-4 selection:bg-indigo-500 selection:text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Redux Toolkit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent mb-3">
            Manage Your Tasks
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            A state management showcase using Redux Toolkit, React-Redux, and Tailwind CSS.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <AddTodo />
          <Todo />
        </div>
      </div>
    </div>
  )
}

export default App

