import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Sistema de Gestão Empresarial',
      category: 'Software Desktop',
      description: 'Plataforma completa para gestão de recursos empresariais com módulos integrados',
      image: 'https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MTUyMjkwNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'App de Delivery',
      category: 'Aplicativo Móvel',
      description: 'Aplicativo multiplataforma para pedidos e entregas em tempo real',
      image: 'https://images.unsplash.com/photo-1760842543713-108c3cadbba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc3MTUyMjkwNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Portal E-commerce',
      category: 'Aplicação Web',
      description: 'Loja virtual moderna com checkout otimizado e painel administrativo',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTUwNjkyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Sistema de IA para Análise de Dados',
      category: 'Machine Learning',
      description: 'Plataforma de análise preditiva usando algoritmos de IA avançados',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTUwNjkyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Automação de Marketing',
      category: 'Automação',
      description: 'Script inteligente para automação de campanhas e análise de métricas',
      image: 'https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MTUyMjkwNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Dashboard Analytics',
      category: 'Aplicação Web',
      description: 'Painel interativo para visualização de dados em tempo real',
      image: 'https://images.unsplash.com/photo-1760842543713-108c3cadbba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc3MTUyMjkwNXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section 
      id="portfolio" 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '64px' } : {}}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mb-4"
          ></motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Nosso <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Portfólio</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Confira alguns dos projetos que desenvolvemos com excelência e inovação
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-900" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Github className="w-5 h-5 text-slate-900" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: hoveredIndex === index ? '100%' : '-100%' }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Ver Mais Projetos
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}