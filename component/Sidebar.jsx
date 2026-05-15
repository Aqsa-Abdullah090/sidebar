"use client";

import React, { useState } from "react";
import {
  Home,
  Activity,
  FolderKanban,
  BarChart3,
  CreditCard,
  Settings,
  ChevronDown,
  ChevronRight,
  Flame,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [openTask, setOpenTask] = useState(true);
  const [openSubTask, setOpenSubTask] = useState(true);

  // Sidebar State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/background.mp4" type="video/mp4" />
</video>


      {/* Outside Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          }
        }}
        className={`absolute top-0 left-0 z-50 h-full bg-[#02182d] opacity-70 backdrop-blur-3xl- text-white shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer ${
          isOpen ? "w-[260px]" : "w-[70px]"
        }`}
      >
        <div>
          {/* Top */}
          <div
            className={`flex items-center py-6 ${
              isOpen
                ? "justify-between px-5"
                : "justify-center"
            }`}
          >
            {/* Logo */}
            <div className="w-12 h-12 rounded-full bg-[#0d2742] flex items-center justify-center shadow-lg">
              <Flame size={22} />
            </div>

            {/* Close Button */}
            {isOpen && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="hover:bg-[#0d2742] p-2 rounded-lg transition"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Menu */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="px-3 space-y-2"
          >
            {/* Home */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all duration-300">
              <Home size={18} />

              {isOpen && (
                <span className="text-sm font-medium">
                  Home
                </span>
              )}
            </button>

            {/* Activity */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#0d2742] transition-all duration-300">
              <Activity size={18} />

              {isOpen && (
                <span className="text-sm font-medium">
                  Activity
                </span>
              )}
            </button>

            {/* Tasks */}
            <div>
              <button
                onClick={() => setOpenTask(!openTask)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#0d2742] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <FolderKanban size={18} />

                  {isOpen && (
                    <span className="text-sm font-medium">
                      Tasks
                    </span>
                  )}
                </div>

                {isOpen &&
                  (openTask ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  ))}
              </button>

              {/* Dropdown */}
              {isOpen && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openTask
                      ? "max-h-96 mt-2"
                      : "max-h-0"
                  }`}
                >
                  <div className="ml-5 border-l border-[#123456] pl-3 space-y-2">
                    <button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#0d2742] transition">
                      Task 1
                    </button>

                    <button className="w-full text-left px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition">
                      Task 2
                    </button>

                    {/* Subtasks */}
                    <div>
                      <button
                        onClick={() =>
                          setOpenSubTask(!openSubTask)
                        }
                        className="w-full flex items-center justify-between px-4 py-2 rounded-md hover:bg-[#0d2742] transition"
                      >
                        <span>Subtasks</span>

                        {openSubTask ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openSubTask
                            ? "max-h-40 mt-2"
                            : "max-h-0"
                        }`}
                      >
                        <div className="ml-5 border-l border-[#123456] pl-3 space-y-2">
                          <button className="block px-4 py-2 rounded-md hover:bg-[#0d2742] transition">
                            Subtask 1
                          </button>

                          <button className="block px-4 py-2 rounded-md hover:bg-[#0d2742] transition">
                            Subtask 2
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Progress */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#0d2742] transition-all duration-300">
              <BarChart3 size={18} />

              {isOpen && (
                <span className="text-sm font-medium">
                  Progress
                </span>
              )}
            </button>

            {/* Payment */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#0d2742] transition-all duration-300">
              <CreditCard size={18} />

              {isOpen && (
                <span className="text-sm font-medium">
                  Payment
                </span>
              )}
            </button>

            {/* Settings */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#0d2742] transition-all duration-300">
              <Settings size={18} />

              {isOpen && (
                <span className="text-sm font-medium">
                  Settings
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="p-5 flex justify-center">
          <button className="w-12 h-10 rounded-xl bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition">
            ☀️
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Popup Sidebar
          </h1>

          <p className="text-lg text-gray-200">
            Click sidebar to open and outside to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;