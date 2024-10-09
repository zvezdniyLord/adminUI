import React, { useState } from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface User {
  id: number
  name: string
  email: string
  role: string
}

const initialUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
]

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddUser = (newUser: Omit<User, 'id'>) => {
    const id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
    setUsers([...users, { ...newUser, id }])
    setIsModalOpen(false)
  }

  const handleUpdateUser = (updatedUser: User) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user))
    setEditingUser(null)
    setIsModalOpen(false)
  }

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">User Management</h2>
        <button
          className="apple-button flex items-center"
          onClick={() => {
            setEditingUser(null)
            setIsModalOpen(true)
          }}
        >
          <Plus size={20} className="mr-2" />
          Add User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-blue-600 hover:text-blue-900 mr-3"
                    onClick={() => {
                      setEditingUser(user)
                      setIsModalOpen(true)
                    }}
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <UserModal
          user={editingUser}
          onSave={editingUser ? handleUpdateUser : handleAddUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

interface UserModalProps {
  user: User | null
  onSave: (user: User | Omit<User, 'id'>) => void
  onClose: () => void
}

const UserModal: React.FC<UserModalProps> = ({ user, onSave, onClose }) => {
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [role, setRole] = useState(user?.role || 'User')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(user ? { ...user, name, email, role } : { name, email, role })
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">{user ? 'Edit User' : 'Add User'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="apple-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="apple-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              id="role"
              className="apple-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button type="button" className="apple-button-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="apple-button">
              {user ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserManagement