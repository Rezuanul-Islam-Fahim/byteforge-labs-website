import { Smartphone, Globe, Server, Database, ShoppingCart, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Cross-platform Flutter apps for Android & iOS with pixel-perfect UI/UX design and modern material design patterns.",
      features: ["Flutter & Dart", "iOS & Android", "State Management", "Firebase Integration", "Play Store & App Store Ready"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Applications",
      description: "Modern React.js and Next.js web applications with responsive design and optimized performance.",
      features: ["React.js & Next.js", "Tailwind CSS", "TypeScript", "SEO Optimized", "Mobile-First Design"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      description: "Robust Node.js APIs with Express, Firebase Functions, and scalable cloud infrastructure.",
      features: ["Node.js & Express", "REST APIs", "Firebase Functions", "Cloud Functions", "Scalable Architecture"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Solutions",
      description: "Efficient database design with MongoDB, PostgreSQL, Firestore, and real-time data synchronization.",
      features: ["MongoDB & Mongoose", "PostgreSQL", "Firestore", "Real-time Sync", "Data Optimization"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-Commerce Platforms",
      description: "Complete e-commerce solutions with payment integration, inventory management, and admin dashboards.",
      features: ["Stripe & PayPal", "Admin Panels", "Inventory Management", "Order Processing", "Analytics"]
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Real-time Applications",
      description: "Chat applications, live tracking, notifications, and collaborative platforms with real-time features.",
      features: ["Real-time Chat", "Live Tracking", "Push Notifications", "WebSocket", "Collaborative Tools"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development services that cover every aspect of your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;