import { Target, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About ByteForge Labs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re passionate software engineers dedicated to building performant, scalable, and maintainable applications 
            that transform businesses and enhance user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission-Driven Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  We follow clean architecture principles and modern design patterns to deliver solutions that scale with your business growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-100 p-3 rounded-lg">
                <Zap className="h-6 w-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every line of code is optimized for performance, ensuring your applications run smoothly across all platforms and devices.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;re detail-obsessed and committed to delivering pixel-perfect, production-ready applications that exceed expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Our Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>10+ years of software development excellence</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Full-stack expertise: MERN, Laravel, PHP, TypeScript</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>6+ years of production Flutter & Firebase experience</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Clean Architecture, SOLID principles, MVVM, MVC</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>AI/ML automation and intelligent solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;