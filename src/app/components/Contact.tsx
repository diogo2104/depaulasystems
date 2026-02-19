import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Instagram, Linkedin, MessageCircle, Send, MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/depaula.systems/',
      color: 'from-pink-500 to-purple-500',
      hoverColor: 'hover:shadow-pink-500/50'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://br.linkedin.com/in/de-paula-systems-87492837a',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:shadow-blue-500/50'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/5512991475939',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:shadow-green-500/50'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'depaula.systems@gmail.com',
      href: 'mailto:depaula.systems@gmail.com'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Seg - Sex: 9h às 18h',
      href: '#'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MTUwNjkyM3ww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-5"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

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
            Entre em <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Contato</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Vamos conversar sobre como podemos ajudar seu negócio a crescer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg font-bold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Nossas Redes Sociais</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-3 p-6 bg-gradient-to-br ${social.color} rounded-xl shadow-lg ${social.hoverColor} transition-all duration-300`}
                  >
                    <social.icon className="w-8 h-8 text-white" />
                    <span className="text-white font-semibold text-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Beta Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6"
            >
              <p className="text-cyan-400 text-center">
                <span className="font-bold">BETA:</span> O site está em fase BETA. Em breve virá a versão oficial mais completa e informativa.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative mt-20 pt-8 border-t border-slate-800"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2026 De Paula Systems - Software e Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </motion.footer>
    </section>
  );
}