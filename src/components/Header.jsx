import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 shadow-md">
    <h1 className="text-2xl font-bold text-blue-600">Ilkhom.dev</h1>
    <nav className="space-x-4 text-gray-700">
      <a href="#about" className="hover:text-blue-500">About</a>
      <a href="#skills" className="hover:text-blue-500">Skills</a>
      <a href="#projects" className="hover:text-blue-500">Projects</a>
      <a href="#contact" className="hover:text-blue-500">Contact</a>
    </nav>
  </header>
  )
}

export default Header