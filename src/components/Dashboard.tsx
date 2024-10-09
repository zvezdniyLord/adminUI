import React from 'react'
import { BarChart2, Users, DollarSign } from 'lucide-react'

const Dashboard: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stat cards */}
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-600">Total Users</h3>
            <Users size={24} className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">1,234</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-600">Active Projects</h3>
            <BarChart2 size={24} className="text-green-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">56</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-600">Revenue</h3>
            <DollarSign size={24} className="text-yellow-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">$89,400</p>
        </div>
      </div>

      {/* Recent activity */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap">Created a new project</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-15</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                <td className="px-6 py-4 whitespace-nowrap">Updated user profile</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-14</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Mike Johnson</td>
                <td className="px-6 py-4 whitespace-nowrap">Completed a task</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Dashboard