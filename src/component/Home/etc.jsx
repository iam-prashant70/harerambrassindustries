// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const App: React.FC = () => {
  // Mock data for the website
  const navItems = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'About', link: '#about' },
    { id: 3, name: 'Products', link: '#products' },
    { id: 4, name: 'Testimonials', link: '#testimonials' },
    { id: 5, name: 'Contact', link: '#contact' }
  ];

  const heroSlides = [
    {
      id: 1,
      imageUrl: 'https://public.readdy.ai/ai/img_res/2165d949c553bf22728e4643cfb6ba12.jpg',
      title: 'Advanced Manufacturing Solutions',
      subtitle: 'Innovative technology for the future of industry'
    },
    {
      id: 2,
      imageUrl: 'https://public.readdy.ai/ai/img_res/5328fcc69124790e280b64249f9f29fb.jpg',
      title: 'Engineering Excellence',
      subtitle: 'Expert solutions for complex industrial challenges'
    },
    {
      id: 3,
      imageUrl: 'https://public.readdy.ai/ai/img_res/69ab47e865a1d5b510a357037ab56db5.jpg',
      title: 'Sustainable Manufacturing',
      subtitle: 'Environmentally responsible industrial solutions'
    }
  ];

  const aboutCompany = {
    title: 'About IndusTech Solutions',
    description: 'Founded in 2005, IndusTech Solutions has been at the forefront of industrial innovation for over 20 years. We specialize in providing cutting-edge manufacturing solutions that help businesses optimize their operations, reduce costs, and improve efficiency. Our team of expert engineers and technicians work closely with clients to develop customized solutions that meet their specific needs and challenges.',
    mission: 'To revolutionize industrial processes through innovative technology and sustainable practices.',
    vision: 'To be the global leader in advanced industrial solutions, driving the future of manufacturing.',
    image: 'https://public.readdy.ai/ai/img_res/cffa1ca2a33642cf6bb10235c9cb9768.jpg',
    years: 20,
    projects: 500,
    clients: 250
  };

  const products = [
    {
      id: 1,
      name: 'Automated Assembly System',
      description: 'High-precision assembly solution with advanced robotics for maximum efficiency.',
      image: 'https://public.readdy.ai/ai/img_res/e0cbd8606ba5215a4cb1adb5c8ad7f6a.jpg'
    },
    {
      id: 2,
      name: 'Smart Monitoring Platform',
      description: 'Real-time monitoring system with AI analytics for predictive maintenance.',
      image: 'https://public.readdy.ai/ai/img_res/783d89a5c84b8d512ca6ab626ada860d.jpg'
    },
    {
      id: 3,
      name: 'Industrial IoT Gateway',
      description: 'Secure connectivity solution for industrial equipment with cloud integration.',
      image: 'https://public.readdy.ai/ai/img_res/8d9954a904db21b9e7f3c3e685faa89c.jpg'
    },
    {
      id: 4,
      name: 'Energy Optimization System',
      description: 'Comprehensive solution for reducing energy consumption in manufacturing facilities.',
      image: 'https://public.readdy.ai/ai/img_res/5c7c85b1cb7bc35f9f757a42a5ec81cf.jpg'
    },
    {
      id: 5,
      name: 'Safety Compliance Platform',
      description: 'Automated safety monitoring and compliance management for industrial environments.',
      image: 'https://public.readdy.ai/ai/img_res/ec8245d3ee3de64be5303bdc925cf551.jpg'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Anderson',
      position: 'Operations Director, Global Manufacturing Inc.',
      company: 'Global Manufacturing',
      image: 'https://public.readdy.ai/ai/img_res/5b11a86508479c24d48b28e133d23803.jpg',
      rating: 5,
      text: 'IndusTech\'s automated assembly system has transformed our production line. We\'ve seen a 40% increase in efficiency and a significant reduction in errors. Their team provided exceptional support throughout the implementation process.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Chief Technology Officer, Precision Industries',
      company: 'Precision Industries',
      image: 'https://public.readdy.ai/ai/img_res/9024328b81d80440e2132ae95fbdc66e.jpg',
      rating: 5,
      text: 'The Smart Monitoring Platform has given us unprecedented visibility into our operations. The predictive maintenance features alone have saved us thousands in potential downtime. Highly recommended for any serious manufacturing operation.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Plant Manager, EcoTech Manufacturing',
      company: 'EcoTech Manufacturing',
      image: 'https://public.readdy.ai/ai/img_res/83c023790d63b99aeddf2c3b3084c5ee.jpg',
      rating: 4,
      text: 'We implemented IndusTech\'s Energy Optimization System last year and have already reduced our energy costs by 30%. The ROI has been impressive, and the system integrates seamlessly with our existing infrastructure.'
    }
  ];

  const features = [
    {
      id: 1,
      icon: 'fa-solid fa-cogs',
      title: 'Advanced Engineering',
      description: 'Cutting-edge design and engineering solutions tailored to your specific industrial needs.'
    },
    {
      id: 2,
      icon: 'fa-solid fa-chart-line',
      title: 'Performance Optimization',
      description: 'Data-driven approaches to maximize efficiency and productivity in your operations.'
    },
    {
      id: 3,
      icon: 'fa-solid fa-shield-alt',
      title: 'Safety Compliance',
      description: 'Comprehensive safety solutions that meet and exceed industry standards and regulations.'
    },
    {
      id: 4,
      icon: 'fa-solid fa-leaf',
      title: 'Sustainability',
      description: 'Eco-friendly technologies and practices that reduce environmental impact and costs.'
    }
  ];

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State for active hero slide
  const [activeSlide, setActiveSlide] = useState(0);
  
  // State for active testimonial
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Refs for charts
  const chartRef = useRef<HTMLDivElement>(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Auto slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Auto slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Initialize chart
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      
      const option = {
        animation: false,
        title: {
          text: 'Company Growth',
          left: 'center',
          textStyle: {
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Projects', 'Clients'],
          bottom: 0
        },
        xAxis: {
          type: 'category',
          data: ['2020', '2021', '2022', '2023', '2024', '2025']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Projects',
            type: 'line',
            data: [120, 180, 250, 320, 400, 500],
            lineStyle: {
              color: '#0056b3'
            }
          },
          {
            name: 'Clients',
            type: 'line',
            data: [50, 80, 120, 160, 200, 250],
            lineStyle: {
              color: '#28a745'
            }
          }
        ]
      };
      
      myChart.setOption(option);
      
      // Resize chart on window resize
      const handleResize = () => {
        myChart.resize();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section with Image Slider */}
      <section id="home" className="pt-16 relative h-screen max-h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <img 
              src={slide.imageUrl} 
              alt={slide.title} 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-4">
                <div className="max-w-xl">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                  <p className="text-xl text-white mb-6">{slide.subtitle}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium cursor-pointer !rounded-button whitespace-nowrap">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer !rounded-button whitespace-nowrap ${index === activeSlide ? 'bg-blue-600' : 'bg-white bg-opacity-50'}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">About Our Company</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src={aboutCompany.image} 
                alt="About IndusTech Solutions" 
                className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
              />
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{aboutCompany.title}</h3>
              <p className="text-gray-600 mb-6">{aboutCompany.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Mission</h4>
                <p className="text-gray-600">{aboutCompany.mission}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Vision</h4>
                <p className="text-gray-600">{aboutCompany.vision}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">{aboutCompany.years}+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">{aboutCompany.projects}+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">{aboutCompany.clients}+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium cursor-pointer !rounded-button whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Product Slider Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover our range of innovative industrial solutions designed to optimize your operations and drive efficiency.
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-x-auto pb-8 hide-scrollbar">
              <div className="flex space-x-6 min-w-max">
                {products.map(product => (
                  <div 
                    key={product.id} 
                    className="w-72 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <button className="mt-auto bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 px-4 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We deliver exceptional value through our commitment to excellence, innovation, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(feature => (
              <div 
                key={feature.id} 
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`transition-opacity duration-1000 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover object-top mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <i 
                            key={i} 
                            className={`fa-solid fa-star ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'} mr-1`}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
            
            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 mx-1 rounded-full cursor-pointer !rounded-button whitespace-nowrap ${index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Have questions or need more information? Get in touch with our team today.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                    placeholder="Product Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fa-solid fa-location-dot text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">123 Industrial Parkway, Tech City, CA 94043, United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fa-solid fa-phone text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+1 (800) 123-4567</p>
                      <p className="text-gray-600">+1 (800) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fa-solid fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@industech.com</p>
                      <p className="text-gray-600">support@industech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fa-solid fa-clock text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Working Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors cursor-pointer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors cursor-pointer">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors cursor-pointer">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors cursor-pointer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                {/* Google Map would go here - placeholder for now */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <i className="fa-solid fa-map-location-dot text-gray-500 text-4xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">IndusTech</h3>
              <p className="text-gray-400 mb-6">
                Leading provider of advanced industrial solutions, committed to innovation and excellence since 2005.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Products</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Industrial Automation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Process Optimization</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Energy Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Safety Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Maintenance Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="mb-4">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800 border-none"
                  />
                  <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </form>
              <div className="flex items-center space-x-3">
                <i className="fa-brands fa-cc-visa text-2xl"></i>
                <i className="fa-brands fa-cc-mastercard text-2xl"></i>
                <i className="fa-brands fa-cc-paypal text-2xl"></i>
                <i className="fa-brands fa-cc-amex text-2xl"></i>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                &copy; 2025 IndusTech Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <a 
          href="#home" 
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </footer>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default App;

