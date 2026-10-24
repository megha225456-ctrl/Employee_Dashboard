import React from 'react';

const EmployeeTable = ({ employees }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/80 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
            <th scope="col" className="px-6 py-4">ID</th>
            <th scope="col" className="px-6 py-4">Employee Name</th>
            <th scope="col" className="px-6 py-4">Email Address</th>
            <th scope="col" className="px-6 py-4 text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {employees.map((emp) => (
            <tr
              key={emp.id}
              className="hover:bg-blue-50/40 transition-colors duration-150"
            >
              {/* ID Badge */}
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  #{emp.id}
                </span>
              </td>

              {/* Name with Avatar */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-xs shadow-sm">
                    {emp.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{emp.name}</div>
                    {emp.company?.name && (
                      <div className="text-xs text-slate-500">{emp.company.name}</div>
                    )}
                  </div>
                </div>
              </td>

              {/* Email */}
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href={`mailto:${emp.email}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline gap-1.5"
                >
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {emp.email}
                </a>
              </td>

              {/* Status Indicator */}
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                  Active
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
