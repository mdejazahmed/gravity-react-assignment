import React, { useState } from "react";
import { findTwoSum } from "../utils/findTwoSum";
export const TwoSumVisualizer=()=> {
  const [input, setInput] = useState("2,7,11,15");
  const [target, setTarget] = useState("9");
  const [indices, setIndices] = useState([]);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const nums = input.split(",").map((v) => parseInt(v.trim()));
      const tgt = parseInt(target.trim());
     const indices = findTwoSum(nums, tgt);
     if (indices.length === 2) {
      setIndices(indices);
      setError("");
      return;
    }

      setError("❌ No valid pair found!");
      setIndices([]);
    } catch (err) {
      setError("⚠️ Invalid input format.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 max-w-xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🧮 Two Sum Visualizer
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Array (comma-separated):
            </label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="text-black mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target:
            </label>
            <input
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="text-black mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white py-2 px-4 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            🎯 Find Indices
          </button>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mt-2">
              {error}
            </div>
          )}

          {indices.length === 2 && (
            <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded-md mt-2">
              ✅ Found indices: <strong>{indices[0]}, {indices[1]}</strong>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {input.split(",").map((val, i) => {
            const isHighlighted = indices.includes(i);
            return (
              <div
                key={i}
                className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md text-lg font-semibold ${
                  isHighlighted
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {val.trim()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
  