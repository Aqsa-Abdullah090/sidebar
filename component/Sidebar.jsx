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
} from "lucide-react";

const Sidebar = () => {
  const [openTask, setOpenTask] = useState(true);
  const [openSubTask, setOpenSubTask] = useState(true);

  return (
    <div className="flex h-screen bg-[#ececec]">
      {/* Sidebar */}
      <div className="w-[230px] bg-[#02182d] text-white flex flex-col justify-between shadow-2xl">
        <div>
          {/* Logo */}
          <div className="flex items-center justify-center py-8">
            <div className="w-12 h-12 rounded-full bg-[#0d2742] flex items-center justify-center shadow-lg">
              <Flame size={22} />
            </div>
          </div>

          {/* Menu */}
          <div className="px-4 space-y-2">
            {/* Home */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#0d2742] transition-all duration-300">
              <Home size={18} />
              <span className="text-sm font-medium">Home</span>
            </button>

            {/* Activity */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#0d2742] transition-all duration-300">
              <Activity size={18} />
              <span className="text-sm font-medium">Activity</span>
            </button>

            {/* Tasks */}
            <div>
              <button
                onClick={() => setOpenTask(!openTask)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#0d2742] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <FolderKanban size={18} />
                  <span className="text-sm font-medium">Tasks</span>
                </div>

                {openTask ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {/* Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openTask ? "max-h-96 mt-2" : "max-h-0"
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
                      onClick={() => setOpenSubTask(!openSubTask)}
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
                        openSubTask ? "max-h-40 mt-2" : "max-h-0"
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
            </div>

            {/* Progress */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#0d2742] transition-all duration-300">
              <BarChart3 size={18} />
              <span className="text-sm font-medium">Progress</span>
            </button>

            {/* Payment */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#0d2742] transition-all duration-300">
              <CreditCard size={18} />
              <span className="text-sm font-medium">Payment</span>
            </button>

            {/* Setting */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#0d2742] transition-all duration-300">
              <Settings size={18} />
              <span className="text-sm font-medium">Setting</span>
            </button>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="p-5">
          <button className="w-14 h-10 rounded-xl bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition">
            ☀️
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <div className="bg-white rounded-2xl h-full shadow-md"></div>
      </div>
    </div>
  );
};

export default Sidebar;