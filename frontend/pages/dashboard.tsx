import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/analytics/dashboard`)
        setStats(response.data)
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      } finally {
        setLoading(false)
      }
    }

    if (session) {
      fetchStats()
    }
  }, [session])

  if (status === 'loading' || loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{session?.user?.email}</span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        {stats && (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border">
              <div className="text-gray-600 text-sm font-medium">Total Orders</div>
              <div className="text-3xl font-bold text-gray-900 mt-2">{stats.totalOrders}</div>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <div className="text-gray-600 text-sm font-medium">Revenue</div>
              <div className="text-3xl font-bold text-gray-900 mt-2">${stats.totalRevenue.toFixed(2)}</div>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <div className="text-gray-600 text-sm font-medium">Customers</div>
              <div className="text-3xl font-bold text-gray-900 mt-2">{stats.totalCustomers}</div>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <div className="text-gray-600 text-sm font-medium">Products</div>
              <div className="text-3xl font-bold text-gray-900 mt-2">{stats.totalProducts}</div>
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/products" className="bg-white rounded-lg p-8 border hover:border-peach-300 hover:shadow-lg transition">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">Products</h3>
            <p className="text-gray-600">Manage your product catalog</p>
          </a>
          <a href="/orders" className="bg-white rounded-lg p-8 border hover:border-peach-300 hover:shadow-lg transition">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">Orders</h3>
            <p className="text-gray-600">View and manage orders</p>
          </a>
          <a href="/suppliers" className="bg-white rounded-lg p-8 border hover:border-peach-300 hover:shadow-lg transition">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Suppliers</h3>
            <p className="text-gray-600">Connect supplier accounts</p>
          </a>
        </div>
      </main>
    </div>
  )
}
