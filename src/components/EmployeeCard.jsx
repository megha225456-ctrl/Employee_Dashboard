import React from 'react';

const EmployeeCard = ({ employee }) => {
  const { id, name, email } = employee;

  // Generate initials for avatar
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
            {initials}
          </div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            ID: #{id}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 mb-1">
          {name}
        </h3>

        <div className="flex items-center text-slate-500 text-sm mb-4">
          <svg className="w-4 h-4 mr-1.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a
            href={`mailto:${email}`}
            className="text-blue-600 hover:text-blue-800 hover:underline truncate"
            title={email}
          >
            {email}
          </a>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Active Member
        </span>
        <span className="text-slate-400">Verified</span>
      </div>
    </div>
  );
};

export default EmployeeCard;
