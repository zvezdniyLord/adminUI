import React, { useState } from 'react'
import { Search, Bell, User, Settings, BarChart2, Folder, Users } from 'lucide-react'
import Dashboard from './components/Dashboard'
import UserManagement from './components/UserManagement'
import './AppleAdminPanel.css'

function App() {
  const [searchText, setSearchText] = useState('')
  const [activePage, setActivePage] = useState('dashboard')

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-8">
          <a href="#" className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => setActivePage('dashboard')}>
            <BarChart2 size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className={`nav-item ${activePage === 'users' ? 'active' : ''}`} onClick={() => setActivePage('users')}>
            <Users size={20} />
            <span>Users</span>
          </a>
          <a href="#" className="nav-item">
            <Folder size={20} />
            <span>Projects</span>
          </a>
          <a href="#" className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="relative">
              <input
                type="text"
                className="apple-input pl-10"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex items-center space-x-4">
              <button className="icon-button">
                <Bell size={20} />
              </button>
              <button className="icon-button">
                <User size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="p-8">
          {activePage === 'dashboard' && <Dashboard />}
          {activePage === 'users' && <UserManagement />}
        </div>
      </main>
    </div>
  )
}

export default App