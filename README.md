# 🛠️ Fullstack Assignment – DSA + MongoDB Aggregation + React ToDo App

This project demonstrates my skills across **JavaScript DSA**, **MongoDB Aggregations**, and **React-based UI development**, all within a single, intuitive interface.

---

## 📁 Project Structure
```
/src
├── components
│ ├── assets
│ ├── components
│ |     ├── AddTodo.jsx # Input Field for New Tasks
│ |     ├── Filters.jsx # Task Filtering UI
│ |     ├── Navbar.jsx # Navbar
│ |     ├── TodoApp.jsx # Main To-Do App
│ |     └── TodoItem.jsx # Single Task Display
│ ├── utils
│      ├── mongo-db-query.js # MongoDB Aggregation function
│      └── TwoSumVisualizer.js # DSA two sum function
├── App.jsx # Main Page Switcher
├── index.css # Global styles
├── main.jsx # Entry point
├── index.html # HTML file
├── vite-env.d.ts # TypeScript declarations
├── vite.config.js # Vite configuration
├── package.json # Project dependencies
├── README.md # Project documentation

```
---

## 🚀 Features

### 1. ✅ **DSA – Two Sum Problem**
- Input an array and a target number
- Get indices of two numbers that sum up to the target
- Validations and error handling for edge cases
- Time complexity: **O(n)** using a Hash Map

### 2. 📝 **React To-Do App**
- Add, mark complete/incomplete, and delete tasks
- Filters: All, Completed, Pending
- Persist tasks in `localStorage`
- UI sound effects on task addition and completion
- Clean, responsive, and user-friendly interface

### 3. 📊 **MongoDB Aggregation Visualizer**
- Input JSON for sales data
- Aggregates total revenue and average price by store/month
- Use MongoDB Aggregation `$unwind`, `$group`, `$project`
- Clean UI with split-screen: Input (left) & Result Table (right)
- URL for check output: https://mongoplayground.net/p/8K1C_iKHiKD

---

## 🧪 How to Use

### 1. Clone & Install
```bash
git clone https://github.com/mdejazahmed/gravity-react-assignment.git
cd gravity-react-assignment
npm install
npm run dev
