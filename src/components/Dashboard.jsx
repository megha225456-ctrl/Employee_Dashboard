import React, { useState, useEffect } from 'react';
import EmployeeTable from './EmployeeTable';
import EmployeeCard from './EmployeeCard';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'card'
  const [searchTerm, setSearchTerm] = useState('');

  const fetchEmployees = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`Failed to fetch data: HTTP error status ${response.status}`);
      }
      const data = await response.json();
      setEmployees(data);
    } catch (err) {
      setError(err.message || 'An error occurred while loading employee data.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Filter employees based on search term
  const filteredEmployees = employees.filter((emp) => {
    const term = searchTerm.toLowerCase();
    return (
      emp.name.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term) ||
      emp.id.toString().includes(term)
    );
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Employee Dashboard
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Displaying directory records fetched live from{' '}
            <code className="bg-slate-100 text-blue-600 px-1.5 py-0.5 rounded text-xs">
              jsonplaceholder.typicode.com/users
            </code>
          </p>
        </div>

        {/* View switcher buttons */}
        <div className="inline-flex bg-slate-100 p-1 rounded-xl self-start sm:self-auto border border-slate-200 shadow-inner">
          <button
            type="button"
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'table'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Table View
          </button>
          <button
            type="button"
            onClick={() => setViewMode('card')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'card'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Card View
          </button>
        </div>
      </div>

      {/* Search Bar & Stats */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by ID, name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 text-xs"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg">
            Showing <span className="text-blue-600">{filteredEmployees.length}</span> of {employees.length} Employees
          </span>
          <button
            onClick={fetchEmployees}
            disabled={isLoading}
            title="Refresh data"
            className="p-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg shadow-sm hover:text-blue-600 transition"
          >
            <svg
              className={`w-4 h-4 ${isLoading ? 'animate-spin text-blue-600' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* State Rendering: Loading, Error, Empty, or Data */}
      {isLoading ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-sm">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent mb-4"></div>
          <h3 className="text-base font-semibold text-slate-800">Loading Employee Directory...</h3>
          <p className="text-xs text-slate-500 mt-1">Fetching records from external API</p>
        </div>
      ) : error ? (
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center text-rose-800">
          <svg className="w-10 h-10 mx-auto text-rose-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-base font-bold">Failed to Load Dashboard Data</h3>
          <p className="text-sm text-rose-600 mt-1 mb-4">{error}</p>
          <button
            onClick={fetchEmployees}
            className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-semibold hover:bg-rose-700 transition shadow-sm"
          >
            Try Again
          </button>
        </div>
      ) : filteredEmployees.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-sm">
          <svg className="w-12 h-12 mx-auto text-slate-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-base font-semibold text-slate-800">No employees found</h3>
          <p className="text-xs text-slate-500 mt-1">
            No records matched your search query "{searchTerm}".
          </p>
          <button
            onClick={() => setSearchTerm('')}
            className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition"
          >
            Clear Search Filter
          </button>
        </div>
      ) : viewMode === 'table' ? (
        <EmployeeTable employees={filteredEmployees} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEmployees.map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
