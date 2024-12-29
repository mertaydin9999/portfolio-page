import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaDotCircle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { DiJavascript, DiMongodb, DiDotnet, DiCode } from 'react-icons/di'

import { BiLogoVisualStudio } from 'react-icons/bi'
import profileImage from './assets/profile-pic.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative z-0 bg-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full flex items-center py-5 px-6 bg-primary bg-opacity-90 backdrop-blur-sm z-20">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[22px] font-bold cursor-pointer select-none"
          >
            <span className="text-[#915EFF]">mert</span>
            <span className="text-white">aydin</span>
            <span className="text-xs text-secondary ml-1">/&gt;</span>
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <div
              className="w-[28px] h-[28px] cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <HiX className="w-[28px] h-[28px] text-white" />
              ) : (
                <HiMenuAlt4 className="w-[28px] h-[28px] text-white" />
              )}
            </div>

            <div
              className={`${
                isMenuOpen ? 'flex' : 'hidden'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex flex-col gap-4">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      scrollToSection(item)
                      setIsMenuOpen(false)
                    }}
                    className="text-secondary font-poppins font-medium cursor-pointer text-[16px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen mx-auto">
        <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-5 h-5 rounded-full bg-[#915EFF]"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-1 sm:h-80 h-40 violet-gradient"
            />
          </div>

          <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Merhaba, Ben{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-[#915EFF] inline-block"
                >
                  Mert
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2"
              >
                Frontend Developer olarak modern ve kullanıcı dostu <br className="sm:block hidden" />
                web uygulamaları geliştiriyorum
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              className="relative lg:w-[400px] w-[300px] h-[300px] lg:h-[400px] group"
            >
              {/* Background Circles */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#915EFF]/10 to-primary/10 rounded-full blur-3xl group-hover:from-[#915EFF]/20 group-hover:to-primary/20 transition-all duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-[#915EFF]/20 via-primary/20 to-[#915EFF]/20 rounded-full blur-2xl opacity-75 group-hover:opacity-100 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-full h-full cursor-pointer">
                <img
                  src={profileImage}
                  alt="Mert Aydın"
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-2xl"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent backdrop-blur-[2px]">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-white text-2xl font-semibold tracking-wider drop-shadow-lg"
                  >
                    Yardımcı olabilir miyim?
                  </motion.p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#915EFF]/10 rounded-full blur-xl group-hover:bg-[#915EFF]/20 transition-all duration-500" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-[#915EFF]/10 rounded-full blur-xl group-hover:bg-[#915EFF]/20 transition-all duration-500" />
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <div className="flex gap-4">
            <button
              onClick={() => openInNewTab('https://github.com/mertaydin9999')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"
              style={{ cursor: 'pointer' }}
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-1/2 h-1/2 text-white hover:text-[#915EFF] transition-colors duration-300" />
            </button>
            <button
              onClick={() => openInNewTab('https://www.linkedin.com/in/mert-ayd%C4%B1n-59747a1b5/')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"
              style={{ cursor: 'pointer' }}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-1/2 h-1/2 text-white hover:text-[#915EFF] transition-colors duration-300" />
            </button>
            <button
              onClick={() => openInNewTab('mailto:mertaydin.tech@gmail.com')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300"
              style={{ cursor: 'pointer' }}
              aria-label="Send Email"
            >
              <MdEmail className="w-1/2 h-1/2 text-white hover:text-[#915EFF] transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="fixed bottom-8 right-8 z-50">
          <a 
            href="#top" 
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (window.scrollY > 100) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                document.querySelector('#about').scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }}
          >
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-primary bg-opacity-80 backdrop-blur-sm hover:border-[#915EFF] transition-colors duration-300">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1 hover:bg-[#915EFF]"
              />
            </div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full min-h-screen mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Hakkımda
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-secondary text-[17px] leading-[30px] max-w-3xl"
          >
            <p className="mb-6">
              Merhaba! Ben Mert Aydın, Yalova Üniversitesi Bilgisayar Mühendisliği mezunuyum.
              Frontend geliştirme konusunda tutkulu bir yazılımcıyım ve modern web teknolojileriyle çalışmaktan keyif alıyorum.
            </p>
            
            <p className="mb-6">
              Şu anda React, Next.js, TypeScript ve modern frontend teknolojileri üzerinde çalışıyorum.
              Kullanıcı deneyimini ön planda tutan, performanslı ve estetik web uygulamaları geliştirmeye odaklanıyorum.
            </p>

            <p>
              Sürekli öğrenmeye ve kendimi geliştirmeye açığım. Yeni teknolojileri takip ediyor,
              modern web geliştirme pratiklerini projelerime uyguluyor ve açık kaynak projelere katkıda bulunmaya çalışıyorum.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="black-gradient p-4 rounded-xl"
            >
              <h3 className="text-white text-[20px] font-bold mb-2">Eğitim</h3>
              <p className="text-secondary">Yalova Üniversitesi</p>
              <p className="text-secondary">Bilgisayar Mühendisliği</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="black-gradient p-4 rounded-xl"
            >
              <h3 className="text-white text-[20px] font-bold mb-2">İlgi Alanları</h3>
              <ul className="text-secondary list-disc list-inside">
                <li>Frontend Geliştirme</li>
                <li>UI/UX Tasarım</li>
                <li>Modern Web Teknolojileri</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative w-full min-h-screen mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Yetenekler
          </h2>

          <div className="mt-20 flex flex-wrap gap-12">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-[400px] w-full"
            >
              <h3 className="text-white text-[24px] font-bold mb-8 flex items-center gap-2">
                <span className="text-[#915EFF]">&lt;</span>
                Frontend Teknolojileri
                <span className="text-[#915EFF]">/&gt;</span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">React.js</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">JavaScript</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">HTML5</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">CSS3</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">Ant Design</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">Bootstrap</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-[400px] w-full"
            >
              <h3 className="text-white text-[24px] font-bold mb-8 flex items-center gap-2">
                <span className="text-[#915EFF]">&lt;</span>
                Backend Teknolojileri
                <span className="text-[#915EFF]">/&gt;</span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">.NET</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">C#</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">SQL Server</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">MongoDB</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-[400px] w-full"
            >
              <h3 className="text-white text-[24px] font-bold mb-8 flex items-center gap-2">
                <span className="text-[#915EFF]">&lt;</span>
                Diğer Teknolojiler
                <span className="text-[#915EFF]">/&gt;</span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">Postman</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">CQRS</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[18px] font-medium">Onion Arch</span>
                  </div>
                  <div className="h-1 w-full bg-secondary/20 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full min-h-screen mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            İletişim
          </h2>

          <div className="mt-20 flex flex-wrap gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-[400px] w-full"
            >
              <h3 className="text-white text-[24px] font-bold mb-8 flex items-center gap-2">
                <span className="text-[#915EFF]">&lt;</span>
                İletişim Bilgileri
                <span className="text-[#915EFF]">/&gt;</span>
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl black-gradient flex items-center justify-center">
                    <MdEmail className="w-6 h-6 text-[#915EFF]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[18px] font-medium">Email</h4>
                    <a
                      href="mailto:mertaydin.tech@gmail.com"
                      className="text-secondary hover:text-[#915EFF] transition-colors duration-300"
                    >
                      mertaydin.tech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl black-gradient flex items-center justify-center">
                    <FaLinkedin className="w-6 h-6 text-[#915EFF]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[18px] font-medium">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/mert-ayd%C4%B1n-59747a1b5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-[#915EFF] transition-colors duration-300"
                    >
                      Mert Aydın
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl black-gradient flex items-center justify-center">
                    <FaGithub className="w-6 h-6 text-[#915EFF]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[18px] font-medium">GitHub</h4>
                    <a
                      href="https://github.com/mertaydin9999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-[#915EFF] transition-colors duration-300"
                    >
                      @mertaydin9999
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl black-gradient flex items-center justify-center">
                    <MdEmail className="w-6 h-6 text-[#915EFF]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[18px] font-medium">Konum</h4>
                    <p className="text-secondary">
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 black-gradient rounded-xl">
                  <p className="text-white text-[18px] font-medium mb-2">Durum</p>
                  <p className="text-secondary">
                    Yeni fırsatlara ve işbirliklerine açığım. Projeniz veya iş fırsatınız için benimle iletişime geçebilirsiniz.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:flex-1 w-full"
            >
              <h3 className="text-white text-[24px] font-bold mb-8 flex items-center gap-2">
                <span className="text-[#915EFF]">&lt;</span>
                Mesaj Gönder
                <span className="text-[#915EFF]">/&gt;</span>
              </h3>

              <form className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <label className="text-white text-[16px] font-medium mb-2 block">
                      İsminiz
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-tertiary text-white outline-none border border-transparent focus:border-[#915EFF] transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-white text-[16px] font-medium mb-2 block">
                      Email Adresiniz
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-tertiary text-white outline-none border border-transparent focus:border-[#915EFF] transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white text-[16px] font-medium mb-2 block">
                    Mesajınız
                  </label>
                  <textarea
                    rows="7"
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-4 py-3 rounded-lg bg-tertiary text-white outline-none border border-transparent focus:border-[#915EFF] transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#915EFF] to-blue-500 text-white font-bold text-[16px] outline-none shadow-md shadow-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Gönder
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
