import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeForm = () => {
  // Form fields state
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Common designation suggestions for quick selection
  const commonDesignations = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Engineer',
    'UI/UX Designer',
    'Product Manager',
    'Data Analyst',
    'QA Engineer',
    'DevOps Specialist',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Employee name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required.';
    }

    if (!formData.salary) {
      newErrors.salary = 'Salary is required.';
    } else if (Number(formData.salary) <= 0) {
      newErrors.salary = 'Please enter a valid positive salary amount.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Capture the submission (Frontend only - no POST request as per requirements)
    setSubmittedData({ ...formData });
    setShowSuccessToast(true);

    // Reset form inputs
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: '',
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: '',
    });
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Employee Registration Form
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Fill in the details below to add a new employee record.
          </p>
        </div>
        <Link
          to="/"
          className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 hover:underline"
        >
          &larr; Back to Dashboard
        </Link>
      </div>

      {/* Note Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 text-blue-800 text-xs">
        <svg
          className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <span className="font-bold">Assignment Requirement Note:</span> Frontend input simulation
          only. As instructed in the requirement guidelines, no POST request is triggered to an external API.
        </div>
      </div>

      {/* Success Notification Alert */}
      {showSuccessToast && submittedData && (
        <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-5 shadow-sm space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Employee Details Registered Successfully!
            </div>
            <button
              onClick={() => setShowSuccessToast(false)}
              className="text-emerald-600 hover:text-emerald-800 text-sm font-semibold"
            >
              &times;
            </button>
          </div>

          <div className="bg-white rounded-lg p-3 border border-emerald-200 text-xs text-slate-700 grid grid-cols-2 gap-2">
            <div>
              <span className="text-slate-400 font-medium">Name:</span>{' '}
              <span className="font-semibold text-slate-800">{submittedData.name}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium">Designation:</span>{' '}
              <span className="font-semibold text-slate-800">{submittedData.designation}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium">Location:</span>{' '}
              <span className="font-semibold text-slate-800">{submittedData.location}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium">Salary:</span>{' '}
              <span className="font-semibold text-emerald-600">
                ${Number(submittedData.salary).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Field 1: Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Employee Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? 'border-rose-400 focus:ring-rose-200 text-rose-900'
                    : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                }`}
              />
            </div>
            {errors.name && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.name}</p>}
          </div>

          {/* Field 2: Designation */}
          <div>
            <label htmlFor="designation" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Designation / Role <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="text"
                id="designation"
                name="designation"
                list="designation-suggestions"
                value={formData.designation}
                onChange={handleChange}
                placeholder="e.g. Senior Software Engineer"
                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.designation
                    ? 'border-rose-400 focus:ring-rose-200 text-rose-900'
                    : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                }`}
              />
              <datalist id="designation-suggestions">
                {commonDesignations.map((d) => (
                  <option key={d} value={d} />
                ))}
              </datalist>
            </div>
            {errors.designation && (
              <p className="mt-1 text-xs text-rose-500 font-medium">{errors.designation}</p>
            )}
          </div>

          {/* Field 3: Location */}
          <div>
            <label htmlFor="location" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Location <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. San Francisco, CA or Remote"
                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.location
                    ? 'border-rose-400 focus:ring-rose-200 text-rose-900'
                    : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                }`}
              />
            </div>
            {errors.location && (
              <p className="mt-1 text-xs text-rose-500 font-medium">{errors.location}</p>
            )}
          </div>

          {/* Field 4: Salary */}
          <div>
            <label htmlFor="salary" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Salary (Annual USD) <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-semibold text-sm">
                $
              </div>
              <input
                type="number"
                id="salary"
                name="salary"
                min="0"
                step="1000"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g. 85000"
                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.salary
                    ? 'border-rose-400 focus:ring-rose-200 text-rose-900'
                    : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                }`}
              />
            </div>
            {errors.salary && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.salary}</p>}
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl font-semibold text-sm transition"
            >
              Reset Form
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Submit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
