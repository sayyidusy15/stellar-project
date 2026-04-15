"use client";

import React, { useState, useEffect } from 'react';
import { Plus, Check, Square, Trash2, Terminal, Wallet } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTasks([
      { id: 0, title: "DEPLOY_CONTRACT", description: "Deploy to testnet", completed: false },
      { id: 1, title: "READ_DOCS", description: "Internal documentation", completed: true },
    ]);
  }, []);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: title.toUpperCase(),
      description,
      completed: false,
    };

    setIsLoading(true);
    setTimeout(() => {
      setTasks([newTask, ...tasks]);
      setTitle('');
      setDescription('');
      setIsLoading(false);
    }, 300);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 border-x border-zinc-800 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-start border-b border-zinc-800 pb-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-5 h-5 text-zinc-500" />
            <span className="text-xs tracking-widest text-zinc-500 uppercase">System v1.0.4</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter">STELLAR_TODO</h1>
          <p className="text-zinc-500 mt-1 uppercase text-xs">Soroban Network Interface</p>
        </div>

        <button 
          onClick={() => setIsWalletConnected(!isWalletConnected)}
          className={cn(
            "px-4 py-2 border text-xs font-mono tracking-widest uppercase transition-colors",
            isWalletConnected 
              ? "bg-zinc-800 border-zinc-700 text-zinc-400"
              : "bg-white text-black border-white hover:bg-zinc-200"
          )}
        >
          {isWalletConnected ? "CONNECTED: GB...3HkL" : "CONNECT WALLET"}
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Input Section */}
        <div className="md:col-span-4 space-y-8">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 py-1 border-b border-zinc-800">New_Entry</h2>
            <form onSubmit={addTask} className="space-y-4">
              <div>
                <input 
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="TASK TITLE"
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 outline-none focus:border-zinc-500 text-sm font-mono"
                />
              </div>
              <div>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="DESCRIPTION"
                  rows={2}
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 outline-none focus:border-zinc-500 text-sm font-mono resize-none"
                />
              </div>
              <button 
                disabled={isLoading || !title}
                className="w-full bg-zinc-100 hover:bg-white text-black font-bold py-3 text-xs tracking-widest uppercase disabled:opacity-30 transition-all"
              >
                {isLoading ? "EXECUTING..." : "ADD TASK"}
              </button>
            </form>
          </section>

          <section className="p-4 border border-zinc-800 bg-zinc-900/50">
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 animate-pulse" /> Network_Status
            </h3>
            <p className="text-[10px] text-zinc-600 font-mono leading-tight">
              STORAGE_TYPE: PERSISTENT<br />
              NETWORK: TESTNET_V1<br />
              RENT_MODEL: ACTIVE
            </p>
          </section>
        </div>

        {/* List Section */}
        <div className="md:col-span-8">
          <div className="flex justify-between items-center mb-6 pb-2 border-b border-zinc-800">
            <h2 className="text-sm font-bold uppercase tracking-widest">Active_Queue</h2>
            <span className="text-[10px] text-zinc-500 font-mono">
              TOTAL: {tasks.length}
            </span>
          </div>

          <div className="space-y-[1px] bg-zinc-800 border border-zinc-800">
            {tasks.length === 0 ? (
              <div className="bg-black py-20 text-center border border-dashed border-zinc-800">
                <p className="text-zinc-600 text-xs uppercase tracking-widest font-mono">Empty</p>
              </div>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className={cn(
                    "flex items-center gap-4 p-4 transition-colors",
                    task.completed ? "bg-zinc-900/50" : "bg-black"
                  )}
                >
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="shrink-0 border border-zinc-700 p-0.5"
                  >
                    {task.completed ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Square className="w-4 h-4 text-zinc-900" />
                    )}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className={cn(
                      "font-bold text-sm tracking-tight truncate uppercase",
                      task.completed ? "text-zinc-700 decoration-zinc-700" : "text-zinc-200"
                    )}>
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className={cn(
                        "text-[10px] font-mono mt-0.5 truncate",
                        task.completed ? "text-zinc-800" : "text-zinc-500"
                      )}>
                        {task.description}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "text-[9px] font-mono px-2 py-0.5 border uppercase",
                      task.completed ? "border-green-900/30 text-green-900/50" : "border-zinc-800 text-zinc-600"
                    )}>
                      {task.completed ? "DONE" : "PENDING"}
                    </span>
                    <button 
                      onClick={() => deleteTask(task.id)}
                      className="text-zinc-700 hover:text-red-900 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <footer className="mt-8 pt-4 border-t border-zinc-900">
            <p className="text-[9px] text-zinc-700 font-mono uppercase tracking-[0.2em] text-center">
              // End_Of_Line //
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
