import React from 'react'
import dot from "../assests/dot.png"
import edit from "../assests/edit.png"
import del from "../assests/delete.png"
import copy from "../assests/copy.png"
import { useState } from 'react';

function Notes() {
    const now = new Date();
    const [notes, setnotes] = useState([
        {
            id: 1,
            color: "orange-300",
            title: "Hi",
            preview: "Short note",
            date: now.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
            time: now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        },
        {
            id: 2,
            color: "pink-300",
            title: "Data Structures and Algorithms - Complete Guide",
            preview: "Data structures and algorithms are fundamental concepts in computer science. This comprehensive guide covers arrays, linked lists, trees, graphs, sorting algorithms, searching algorithms, dynamic programming, and much more. Learning these topics is essential for cracking technical interviews and building efficient software systems. Understanding time and space complexity is crucial for writing optimized code.",
            date: now.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
            time: now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        },
        {
            id: 3,
            color: "blue-300",
            title: "React Hooks",
            preview: "useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef - React hooks allow you to use state and other React features in functional components. They provide a way to manage component state, side effects, and other React features without writing class components. Understanding hooks is essential for modern React development and writing clean, reusable code.",
            date: now.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
            time: now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        },
        {
            id: 4,
            color: "purple-300",
            title: "T",
            preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a very long text to test how the preview section handles overflow and scrolling functionality in the notes application.",
            date: now.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
            time: now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        },

    ]);
    const [selectedId, setSelectedId] = useState(null);
    const [openMenuId, setopenMenuId] = useState(null);

    return (
        <div className="  flex-1 p-6 overflow-hidden">

            <h1 className="text-4xl text-gray-700 mb-6">Notes</h1>

            {/* NOTES GRID */}
            <div
                className="
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                gap-7
                h-full
                overflow-y-auto
                hide-scrollbar
                scroll-smooth
                snap-y snap-mandatory
                pb-40
              "
            >
                {notes.map((item) => {
                    return (
                        <div onClick={() => setSelectedId(item.id)}
                            key={item.id}
                            className={`h-80  bg-${item.color}  rounded-3xl snap-start p-5 flex flex-col ${selectedId === item.id ? " border-2 border-gray-700 " : ""}`}
                        >
                            {/* TITLE */}
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                                {item.title}
                            </h2>

                            {/* SCROLLABLE PREVIEW */}
                            <div className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar mb-3">
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    {item.preview}
                                </p>
                            </div>

                            {/* DATE & TIME (FIXED BOTTOM) */}
                            <div className="h-10 flex items-center justify-between text-xs text-gray-700">
                                <div className="time w- flex items-center justify-between gap-2">
                                    <span>{item.date}</span>
                                    <span>{item.time}</span>
                                </div>
                                <div className='relative'>
                                    {/* dot button */}
                                    <div className={`w-10 h-10 flex items-center justify-center ${selectedId === item.id ? "" : "hidden"}`}
                                        onClick={() => setopenMenuId(openMenuId === item.id ? null : item.id)}>
                                        <img src={dot} alt="" />
                                    </div>
                                    {openMenuId === item.id && (
                                        <div className="absolute right-12 top-0 w-40 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                                            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100">
                                                <img className='w-4 h-4' src={edit} alt="edit" />
                                                <span className="text-sm font-medium text-gray-700">Edit</span>
                                            </button>

                                            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors border-b border-gray-100">
                                                <img className='w-4 h-4' src={del} alt="delete" />
                                                <span className="text-sm font-medium text-gray-700">Delete</span>
                                            </button>

                                            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors">
                                                <img className='w-4 h-4' src={copy} alt="copy" />
                                                <span className="text-sm font-medium text-gray-700">Copy</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Notes