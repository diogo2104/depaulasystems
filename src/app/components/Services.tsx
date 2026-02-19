import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Monitor, Smartphone, Globe, Cog, Brain, Code2 } from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Monitor,
      title: 'Software Desktop',
      description: 'Aplicações robustas e eficientes para Windows, macOS e Linux',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Aplicativo Móveis',
      description: 'Apps nativos e híbridos para iOS e Android',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Aplicações Web',
      description: 'Soluções web modernas, responsivas e escaláveis',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cog,
      title: 'Software de Automação e Scripting',
      description: 'Automatize processos e otimize fluxos de trabalho',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Brain,
      title: 'Sistemas de Inteligência Artificial',
      description: 'IA e Machine Learning para decisões inteligentes',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Code2,
      title: 'Soluções Personalizadas',
      description: 'Desenvolvimento sob medida para suas necessidades',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section 
      id="services" 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760842543713-108c3cadbba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc3MTUyMjkwNXww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-5"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Nossas <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Especialidades</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Trabalhamos com desenvolvimento e manutenção de sistemas com a finalidade de trazer soluções para seu negócio
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Character Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-500/30"
            >
              <Code2 className="w-32 h-32 text-cyan-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}