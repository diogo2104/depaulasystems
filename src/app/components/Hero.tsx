import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Code, Cpu, Rocket } from 'lucide-react';
import { useRef } from 'react';
import logoRound from '../../assets/820bbc24dd7bb09f6fe2bbeff087aa01abf0b8a9.png';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MTUyMjkwNXww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center">
                <img 
                  src={logoRound} 
                  alt="De Paula Systems Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Desenvolvimento de</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Software e Tecnologia
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Soluções inovadoras em software, aplicativos móveis e automação para impulsionar seu negócio
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12"
          >
            {[
              { icon: Code, title: 'Desenvolvimento', desc: 'Web & Mobile' },
              { icon: Cpu, title: 'IA & Machine Learning', desc: 'Soluções Inteligentes' },
              { icon: Rocket, title: 'Automação', desc: 'Otimização de Processos' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] cursor-pointer"
              >
                <item.icon className="w-10 h-10 text-cyan-400 mb-3 mx-auto" />
                <h3 className="text-white font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => scrollToSection('services')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Conheça Nossos Serviços
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}