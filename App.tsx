import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Download, ChevronRight, Terminal, Shield, Code2, Database, User, Mail, Linkedin, ExternalLink, Github, Moon, Sun } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS, SKILLS, SOCIAL_LINKS, PROJECTS } from './constants';
import { Section } from './components/Section';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme toggle
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLink = ({ href, children }: { href: string; children?: React.ReactNode }) => (
    <a
      href={href}
      className="text-slate-600 dark:text-slate-300 hover:text-accent font-medium transition-colors duration-200"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-300 font-sans transition-colors duration-300">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm shadow-slate-200 dark:shadow-slate-900/50 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Alok<span className="text-accent">.dev</span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#certifications">Certifications</NavLink>
              
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-5 py-2.5 bg-accent text-white rounded-full font-medium hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-accent/20"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={toggleMenu} className="text-slate-900 dark:text-slate-200 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-xl p-4 flex flex-col space-y-4 transition-colors duration-300">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-2 border border-accent/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-300">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-accent dark:from-white dark:to-accent">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 transition-colors duration-300">
              {PERSONAL_INFO.role} based in {PERSONAL_INFO.location}. <br/>
              Passionate about <span className="text-slate-900 dark:text-slate-100 font-semibold">Ethical Hacking</span> & <span className="text-slate-900 dark:text-slate-100 font-semibold">Space Tech</span>.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-accent hover:text-accent text-slate-600 dark:text-slate-300 transition-all duration-300 shadow-sm group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                <span className="font-medium">{link.platform}</span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center justify-center lg:justify-start text-slate-500 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            {PERSONAL_INFO.location}
          </div>
        </div>
        
        <div className="flex-1 relative w-full max-w-md lg:max-w-full">
           {/* Abstract Decorative Blobs - Updated mix-blend for dark mode visibility */}
          <div className="absolute top-0 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 right-20 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          
          <div className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 transform rotate-3 hover:rotate-0 transition-all duration-500">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="font-mono text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p><span className="text-accent">const</span> developer = {'{'}</p>
              <p className="pl-4">name: <span className="text-green-600 dark:text-green-400">"{PERSONAL_INFO.name}"</span>,</p>
              <p className="pl-4">role: <span className="text-green-600 dark:text-green-400">"{PERSONAL_INFO.role}"</span>,</p>
              <p className="pl-4">interests: [</p>
              <p className="pl-8"><span className="text-green-600 dark:text-green-400">"Cybersecurity"</span>,</p>
              <p className="pl-8"><span className="text-green-600 dark:text-green-400">"Web Dev"</span>,</p>
              <p className="pl-8"><span className="text-green-600 dark:text-green-400">"C++"</span></p>
              <p className="pl-4">]</p>
              <p>{'};'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" className="bg-white dark:bg-slate-900">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>{PERSONAL_INFO.summary}</p>
            <div className="bg-slate-50 dark:bg-slate-800 border-l-4 border-accent p-6 rounded-r-lg transition-colors duration-300">
               <h3 className="font-display font-bold text-slate-900 dark:text-white text-xl mb-2">Career Objective</h3>
               <p className="italic text-slate-600 dark:text-slate-400">{PERSONAL_INFO.objective}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors border border-slate-200 dark:border-slate-700/50">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Ethical Hacking</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Working on making digital systems more secure and reliable.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors border border-slate-200 dark:border-slate-700/50">
              <Code2 className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Coding</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Improving abilities in C++ and Python for better software solutions.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors border border-slate-200 dark:border-slate-700/50">
              <Terminal className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Development</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Passionate about building responsive and functional web applications.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors border border-slate-200 dark:border-slate-700/50">
              <Database className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Space Tech</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Keen interest in Space Technology and Geotechnology.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills & Interests">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((group, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-accent/30 transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium text-sm border border-slate-200 dark:border-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects" className="bg-white dark:bg-slate-900">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700/50 hover:border-accent/50 transition-all duration-300 group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="View Source">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-accent hover:text-blue-600 transition-colors" aria-label="View Live Demo">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md border border-slate-300 dark:border-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon on the line */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-slate-200 dark:bg-slate-800 group-hover:bg-accent transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                <User className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-white transition-colors" />
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <span className="font-bold text-slate-900 dark:text-white text-lg">{edu.institution}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent mt-1 sm:mt-0">{edu.period}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">{edu.degree}</p>
                {edu.description && <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{edu.description}</p>}
              </div>
              
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" title="Certifications" className="bg-white dark:bg-slate-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="group relative bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700/50 overflow-hidden hover:border-accent/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full -mr-4 -mt-4 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative z-10 flex items-start justify-between">
                 <div className="p-3 bg-white dark:bg-slate-700/50 rounded-lg text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                    <AwardIcon className="w-6 h-6" />
                 </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-accent transition-colors">{cert.name}</h3>
              <p className="text-sm text-slate-500">{cert.issuer}</p>
              
              <div className="mt-6 flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                View Credential <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 py-16 mt-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Let's Connect</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md">
                I'm currently open to internships and junior developer roles. Feel free to reach out if you'd like to collaborate on a project!
              </p>
              <div className="flex space-x-4">
                 {SOCIAL_LINKS.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-accent hover:text-white transition-colors duration-300 border border-slate-200 dark:border-slate-700"
                    aria-label={link.platform}
                  >
                    {link.icon}
                  </a>
                 ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
              <div className="space-y-4">
                 <div className="flex items-start space-x-4">
                    <div className="p-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-900 dark:text-white hover:text-accent transition-colors font-medium text-lg break-all">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                 </div>
                 
                 <div className="flex items-start space-x-4">
                    <div className="p-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                      <Linkedin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">LinkedIn</p>
                      <a href={SOCIAL_LINKS[1].url} target="_blank" rel="noreferrer" className="text-slate-900 dark:text-white hover:text-accent transition-colors font-medium text-lg">
                        webdevloperalokgautam
                      </a>
                    </div>
                 </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700/50 text-center md:text-left">
                 <p className="text-slate-500 text-sm">
                   © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Icon Component
const AwardIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export default App;