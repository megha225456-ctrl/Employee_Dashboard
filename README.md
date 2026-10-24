# 🏢 Employee Dashboard - React Application

A modern, responsive **Employee Dashboard** application built with **React**, **React Router**, and **Tailwind CSS**. This project was developed according to the frontend assignment specifications.

---

## 📋 Features & Requirements Checklist

| Requirement | Status | Implementation Details |
| :--- | :---: | :--- |
| **React Library** |  Done | Built with React 18 & Vite |
| **Navbar with Home & Employee Form links** |  Done | Sticky responsive Navbar with active link styling & mobile menu |
| **Home / Employee Dashboard (Same page)** |  Done | Displays user records with stats, search & view toggle |
| **Data accessed from external API** |  Done | Fetched dynamically from `https://jsonplaceholder.typicode.com/users` |
| **Tabular / Card View with id, name, email** |  Done | Supports both **Table View** and **Card View** (user toggleable) |
| **Employee Form** |  Done | Fields: `Name`, `Designation`, `Location`, and `Salary` with validation |
| **Appropriate Routes for Navigation** |  Done | `react-router-dom` with routes for `/` (Dashboard) and `/employee-form` |
| **CSS Library** |  Done | Styled with **Tailwind CSS** |
| **No frontend POST** |  Done | Local validation & confirmation without POSTing |

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM (v6)
- **Styling:** Tailwind CSS
- **API Source:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

---

## 📁 Project Structure

```text
employee-dashboard/
├── index.html               # Main HTML entry with Tailwind CSS
├── standalone_preview.html   # Instant zero-install browser preview
├── package.json             # Project dependencies and npm scripts
├── vite.config.js           # Vite configuration
├── README.md                # Project documentation & submission guide
├── .gitignore               # Ignored files for Git
└── src/
    ├── main.jsx             # React entry with BrowserRouter
    ├── App.jsx              # Main App layout with Navbar and Route definitions
    ├── index.css            # Base stylesheet
    └── components/
        ├── Navbar.jsx       # Header navigation with active route highlights
        ├── Dashboard.jsx    # Home / Employee Dashboard with API fetching
        ├── EmployeeTable.jsx# Tabular view of id, name, and email
        ├── EmployeeCard.jsx # Card view of id, name, and email
        └── EmployeeForm.jsx # Registration form (Name, Designation, Location, Salary)
```

---

## 🚀 Getting Started

### Option 1: Instant Browser Preview (Zero Installation)
Simply double-click or open **`standalone_preview.html`** in any web browser (Chrome, Edge, Firefox, Brave). It runs immediately without needing Node.js or terminal commands!

### Option 2: Running with Node.js & Vite

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd employee-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` in your browser.

---

## 📤 How to Upload to GitHub (Step-by-Step for Submission)

### Method A: Uploading via GitHub Website (Simplest)
1. Go to [GitHub.com](https://github.com) and log in.
2. Click the **`+`** icon in the top-right corner and select **New repository**.
3. Name your repository (e.g., `employee-dashboard`), keep it **Public**, and click **Create repository**.
4. On the new repository page, click the link: **"uploading an existing file"**.
5. Drag and drop all files and folders from the `employee-dashboard` folder (excluding `node_modules`).
6. Click **Commit changes**.
7. Copy the repository URL (e.g., `https://github.com/your-username/employee-dashboard`) to submit!

### Method B: Using Git Command Line
```bash
# Initialize git inside the employee-dashboard folder
git init

# Add all files
git add .

# Commit changes
git commit -m "feat: complete employee dashboard assignment"

# Set branch to main
git branch -M main

# Link to your remote GitHub repository
git remote add origin https://github.com/<your-username>/employee-dashboard.git

# Push your code
git push -u origin main
```

---

## 📄 License
This project is created for educational assignment purposes.
