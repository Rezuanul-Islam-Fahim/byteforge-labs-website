import { Code, Smartphone, Cloud, Globe } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Frontend",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5/CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile",
      technologies: ["Flutter", "Dart", "iOS Development", "Android Development", "React Native", "Expo"],
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Backend",
      technologies: ["Node.js", "Express.js", "Laravel", "PHP", "Firebase Functions", "REST APIs"],
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Database & Cloud",
      technologies: ["MongoDB", "PostgreSQL", "Firebase", "Firestore", "SQLite", "Hive"],
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks that power our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${category.color} text-white p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning, Always Evolving</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We stay at the forefront of technology, constantly updating our skills and adopting new tools to deliver 
              the best possible solutions for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;