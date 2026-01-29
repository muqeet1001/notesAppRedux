import React from 'react'
import dot from "../assests/image.png"
import { useState } from 'react';

function Notes() {
    const now = new Date();
    const [notes, setnotes] = useState([
        {
            id: 1,
            color: "orange-300",
            title: "Hello",
            preview: "hello world this is my first ",
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
            title: "DSA",
            preview: "data structue and algo is very imporatnat to cract software roles",
            date: now.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
            time: now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        }

    ]);
    const [selectedId, setSelectedId] = useState(null);
    const [openMenuId, setopenMenuId] = useState(null);

    return (
        <div className="flex-1 p-6 overflow-hidden">

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
                            className={`h-80  bg-${item.color}  rounded-3xl snap-start p-5 flex flex-col ${selectedId === item.id ? "border-3 " : ""}`}
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
                            <div className=" flex items-center justify-between text-xs text-gray-700">
                                <div className="time w- flex items-center justify-between gap-2">
                                    <span>{item.date}</span>
                                    <span>{item.time}</span>
                                </div>
                                <div className={`select w-10 ${selectedId === item.id ? "" : "hidden"}`} onClick={() => setopenMenuId(openMenuId === item.id ? null : item.id)}  >
                                    <img src={dot} alt="" />
                                    <div className="bg-white w-30">
                                        <h1>edit</h1>
                                    </div>
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