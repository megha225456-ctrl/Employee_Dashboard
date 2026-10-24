import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          {/* Dashboard / Home Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Employee Form Route */}
          <Route path="/employee-form" element={<EmployeeForm />} />

          {/* Catch-all route redirecting to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Modern Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-medium text-slate-700">
            Employee Dashboard React Assignment
          </p>
          <p className="mt-1 text-slate-400">
            Data sourced from JSONPlaceholder API &bull; Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
