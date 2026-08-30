import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-cyan-glow/10 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {year} Rishitha Chilaka. All rights reserved.</p>
        <p>Built with React · Vite · Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer
