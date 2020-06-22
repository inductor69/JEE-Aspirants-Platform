import React from 'react'
import { FaMedium, FaGithub, FaFacebook, FaLinkedin, FaGitlab } from 'react-icons/fa'


const Footer = () => (
  <footer className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
      
      
    </div>
    <div className="bg-gray-200">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">&copy; 2020 <a href="lol.netlify.app" title="Developer">XYZ Ltd.</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a href="https://www.linkedin.com/in/" className="ml-3 text-gray-500">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/" className="ml-3 text-gray-500">
            <FaFacebook />
          </a>
          <a href="https://github.com/" className="ml-3 text-gray-500">
            <FaGithub />
          </a>
          <a href="https://gitlab.com/" className="ml-3 text-gray-500">
            <FaGitlab />
          </a>
          <a href="https://medium.com/" className="ml-3 text-gray-500">
            <FaMedium />
          </a>
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
