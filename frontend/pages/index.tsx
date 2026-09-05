import Head from 'next/head'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Dropship Platform - Your Ecommerce Solution</title>
        <meta name="description" content="Connect suppliers, manage inventory, and run your dropshipping store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-white via-peach-50 to-peach-100">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-peach-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-peach-600">🍑 Dropship</div>
            <div className="flex gap-4">
              {session ? (
                <>
                  <Link href="/dashboard" className="px-6 py-2 rounded-lg bg-peach-600 text-white hover:bg-peach-700 transition">
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <button onClick={() => signIn()} className="px-6 py-2 rounded-lg text-peach-600 hover:bg-peach-100 transition">
                    Sign In
                  </button>
                  <Link href="/register" className="px-6 py-2 rounded-lg bg-peach-600 text-white hover:bg-peach-700 transition">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.section
          className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-peach-600 to-peach-400 mb-6">
              Build Your Dropshipping Empire
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Connect to suppliers, manage inventory, and process orders—all in one beautiful, intuitive platform.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex gap-4 justify-center mb-20">
            <Link href="/register" className="px-8 py-4 rounded-lg bg-peach-600 text-white font-semibold hover:bg-peach-700 transition flex items-center gap-2">
              Start Free <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 rounded-lg border-2 border-peach-600 text-peach-600 font-semibold hover:bg-peach-50 transition">
              Watch Demo
            </button>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={item} className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: '📦', title: 'Supplier Integration', desc: 'Connect to AliExpress, Printful, and more' },
              { icon: '📊', title: 'Analytics Dashboard', desc: 'Track sales, revenue, and customer insights' },
              { icon: '⚡', title: 'Auto Fulfillment', desc: 'Automatically process and ship orders' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-peach-100 hover:border-peach-300 transition group hover:shadow-lg">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </>
  )
}
