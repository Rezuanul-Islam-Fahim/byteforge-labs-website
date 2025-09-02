import { Brain, Bot, Workflow, MessageCircle, Zap, Settings } from 'lucide-react';

const AIServices = () => {
  const aiServices = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI/ML Solutions",
      description: "Custom machine learning models and AI-powered features that transform how your business operates.",
      features: ["Custom ML Models", "Predictive Analytics", "Data Processing", "Model Deployment"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Agents & Chatbots",
      description: "Intelligent conversational AI that provides 24/7 customer support and automates customer interactions.",
      features: ["Smart Chatbots", "NLP Processing", "Multi-platform Deployment", "Learning Algorithms"]
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "n8n Automation",
      description: "Powerful workflow automation using n8n to streamline business processes and integrate systems.",
      features: ["Workflow Design", "API Integration", "Process Automation", "Data Synchronization"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "MCP Server Development",
      description: "Model Context Protocol servers for seamless AI model integration and management.",
      features: ["Protocol Implementation", "Model Management", "Context Handling", "Scalable Architecture"]
    }
  ];

  return (
    <section id="ai-solutions" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-6 w-6 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
              AI & Automation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligent Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence and automation to revolutionize your business processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aiServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 text-sm"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="text-center">
            <MessageCircle className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Business Transformation</h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              From intelligent chatbots that handle customer inquiries to sophisticated automation workflows that streamline operations, 
              we create AI solutions that don't just follow trends—they set them. Our expertise in n8n automation, 
              custom AI agents, and MCP server development ensures your business stays ahead of the competition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServices;