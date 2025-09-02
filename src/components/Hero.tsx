'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-12 md:pb-16">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-800/80" />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-6 w-6 text-cyan-400 mr-2" />
          <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
            10+ Years of Excellence
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Transform Your Ideas</span>
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Into Reality
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
          Full-stack development expertise meets cutting-edge AI solutions. From mobile apps to intelligent automation, 
          we build scalable, production-ready software that drives your business forward.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Start Your Project
            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            View Services
          </button>
        </div>
        
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
            <div className="text-gray-300">Years Flutter</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;