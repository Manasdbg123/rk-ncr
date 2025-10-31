import React, { useState } from 'react';

export default function RKPrintWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsLoggedIn(true);
    setUserEmail(formData.email);
    setShowLogin(false);
    setFormData({ email: '', password: '', name: '', phone: '' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  const products = [
    { name: 'Visiting Card', category: 'cards', icon: '💼', popular: true, image: '/visit.webp' },
    { name: 'Letter Head', category: 'stationery', icon: '📄', popular: true, image: '/letterhead.webp' },
    { name: 'ID-Card', category: 'cards', icon: '🪪', popular: true, image: '/idcard.jpg' },
    { name: 'Lanyard', category: 'accessories', icon: '🏷️', popular: false, image: '/lanyard.jpg' },
    { name: 'Folder', category: 'stationery', icon: '📁', popular: false, image: '/folder.jpg' },
    { name: 'Brochure', category: 'marketing', icon: '📰', popular: true, image: '/brochureprint.jpg' },
    { name: 'Catalogue', category: 'marketing', icon: '📚', popular: false, image: '/catalogue.webp' },
    { name: 'Booklet', category: 'marketing', icon: '📖', popular: false, image: '/booklet.avif' },
    { name: 'Flyers', category: 'marketing', icon: '📃', popular: true, image: '/flyer.jpeg' },
    { name: 'Leaflet', category: 'marketing', icon: '🍃', popular: false, image: '/leaflet.webp' },
    { name: 'Flex Banner', category: 'signage', icon: '🪧', popular: true, image: '/flexbannerprint.jpg' },
    { name: 'Vinyl', category: 'signage', icon: '🎨', popular: false, image: '/vinylprint.jpeg' },
    { name: 'Sunboard', category: 'signage', icon: '📋', popular: false, image: '/sunboard.webp' },
    { name: 'Standee', category: 'signage', icon: '🚩', popular: true, image: '/standee.webp' },
    { name: 'Carry Bag', category: 'packaging', icon: '🛍️', popular: true, image: '/bagprint.jpeg' },
    { name: 'Packaging Boxes', category: 'packaging', icon: '📦', popular: true, image: '/printingboximage.jpg' },
    { name: 'Pen', category: 'accessories', icon: '🖊️', popular: false, image: '/penprint.jpg' },
    { name: 'Diary', category: 'stationery', icon: '📔', popular: false, image: '/diaryprint.jpg' },
    { name: 'Trophy', category: 'accessories', icon: '🏆', popular: false, image: '/trophy.avif' },
    { name: 'Medal', category: 'accessories', icon: '🥇', popular: false, image: '/medal.jpg' },
    { name: 'T-Shirt', category: 'apparel', icon: '👕', popular: true, image: '/tshirt.jpeg' },
    { name: 'Mug', category: 'gifts', icon: '☕', popular: true, image: '/cups.jpeg' },
    { name: 'Bottle', category: 'gifts', icon: '🍾', popular: false, image: '/bottleprint.jpg' },
    { name: 'Bag', category: 'accessories', icon: '🎒', popular: false, image: '/bag.jpg' },
    { name: 'Keychain', category: 'accessories', icon: '🔑', popular: true, image: '/keychain.jpg' },
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏪' },
    { id: 'cards', name: 'Cards & IDs', icon: '💼' },
    { id: 'stationery', name: 'Stationery', icon: '📄' },
    { id: 'marketing', name: 'Marketing Materials', icon: '📰' },
    { id: 'signage', name: 'Signage & Display', icon: '🪧' },
    { id: 'packaging', name: 'Packaging', icon: '📦' },
    { id: 'apparel', name: 'Apparel', icon: '👕' },
    { id: 'gifts', name: 'Gift Items', icon: '🎁' },
    { id: 'accessories', name: 'Accessories', icon: '🏷️' },
  ];

  const services = [
    { title: 'Digital Printing', desc: 'High-quality digital printing for small to medium runs', icon: '🖨️' },
    { title: 'Offset Printing', desc: 'Cost-effective bulk printing with superior quality', icon: '📑' },
    { title: 'Screen Printing', desc: 'Perfect for textiles, bags, and promotional items', icon: '🎨' },
  ];

  const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl relative">
            <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold">✕</button>
            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold"><span className="text-orange-600">RK</span><span className="text-gray-800"> PRiNT NCR</span></h2>
                <p className="text-sm text-gray-600 mt-2">{isLogin ? 'Welcome back!' : 'Create your account'}</p>
              </div>
              <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
                <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 rounded-md font-semibold transition-colors ${isLogin ? 'bg-orange-600 text-white' : 'text-gray-600'}`}>Login</button>
                <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 rounded-md font-semibold transition-colors ${!isLogin ? 'bg-orange-600 text-white' : 'text-gray-600'}`}>Sign Up</button>
              </div>
              <div className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="John Doe" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="you@example.com" />
                </div>
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="+91 XXXXX XXXXX" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="••••••••" />
                </div>
                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center"><input type="checkbox" className="mr-2" /><span className="text-gray-600">Remember me</span></label>
                    <button className="text-orange-600 hover:text-orange-700 font-medium">Forgot password?</button>
                  </div>
                )}
                <button onClick={handleSubmit} className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">{isLogin ? 'Login' : 'Create Account'}</button>
              </div>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
                <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or continue with</span></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><span className="text-xl">G</span><span className="text-sm font-medium">Google</span></button>
                <button className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><span className="text-xl">📱</span><span className="text-sm font-medium">Phone</span></button>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <button className="md:hidden mr-4 text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? '✕' : '☰'}</button>
              <div>
                <h1 className="text-3xl font-bold"><span className="text-orange-600">RK</span><span className="text-gray-800"> PRiNT NCR</span></h1>
                <p className="text-xs text-gray-600 font-medium">DIGITAL | OFFSET | SCREEN PRINTING</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 font-medium">Products</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">{userEmail.charAt(0).toUpperCase()}</div>
                    <span className="text-sm font-medium text-gray-700">{userEmail.split('@')[0]}</span>
                  </div>
                  <button onClick={handleLogout} className="text-gray-600 hover:text-orange-600 font-medium">Logout</button>
                </div>
              ) : (
                <>
                  <button onClick={() => setShowLogin(true)} className="text-orange-600 hover:text-orange-700 font-semibold">Login</button>
                  <a href="#contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">Get Quote</a>
                </>
              )}
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white pb-4">
              <div className="px-4 py-4 space-y-3">
                <a href="#home" className="block text-gray-700 hover:text-orange-600 font-medium">Home</a>
                <a href="#products" className="block text-gray-700 hover:text-orange-600 font-medium">Products</a>
                <a href="#services" className="block text-gray-700 hover:text-orange-600 font-medium">Services</a>
                <a href="#contact" className="block text-gray-700 hover:text-orange-600 font-medium">Contact</a>
                {isLoggedIn ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 py-2">
                      <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">{userEmail.charAt(0).toUpperCase()}</div>
                      <span className="text-sm font-medium text-gray-700">{userEmail}</span>
                    </div>
                    <button onClick={handleLogout} className="block w-full text-left text-gray-600 hover:text-orange-600 font-medium">Logout</button>
                  </div>
                ) : (
                  <>
                    <button onClick={() => setShowLogin(true)} className="block w-full text-left text-orange-600 hover:text-orange-700 font-semibold">Login</button>
                    <a href="#contact" className="block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-center">Get Quote</a>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Professional Printing Services in NCR</h2>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">Digital, Offset & Screen Printing for all your business needs. Quality printing solutions delivered on time.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg text-center">Browse Products</a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors text-center">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Printing Services</h3>
            <p className="text-lg text-gray-600">Three specialized printing methods for all your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl hover:shadow-xl transition-shadow border-2 border-orange-200">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h3>
            <p className="text-lg text-gray-600">Complete printing solutions for businesses and individuals</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-6 py-3 rounded-full font-semibold transition-colors ${activeCategory === cat.id ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'}`}>
                <span className="mr-2">{cat.icon}</span>{cat.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer border-2 border-gray-200 hover:border-orange-500 relative">
                {product.popular && <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">Popular</span>}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <div className="text-5xl group-hover:scale-110 transition-transform">{product.icon}</div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 text-center">{product.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose RK Print NCR?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4"><span className="text-3xl">⚡</span></div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Quick turnaround time for all orders</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4"><span className="text-3xl">✨</span></div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-gray-600">High-quality printing with attention to detail</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4"><span className="text-3xl">💰</span></div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Best Prices</h4>
              <p className="text-gray-600">Competitive pricing without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4"><span className="text-3xl">🤝</span></div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-gray-600">Dedicated team to help with your requirements</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Contact us today for a free quote on your printing needs</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white bg-opacity-20 px-6 py-4 rounded-lg backdrop-blur-sm">
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <p className="text-sm text-orange-100">Call Us</p>
                  <p className="font-semibold">+91 9616148530</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white bg-opacity-20 px-6 py-4 rounded-lg backdrop-blur-sm">
                <span className="text-2xl">📧</span>
                <div className="text-left">
                  <p className="text-sm text-orange-100">Email Us</p>
                  <p className="font-semibold">ravi@rkprint.co</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white bg-opacity-20 px-6 py-4 rounded-lg backdrop-blur-sm">
                <span className="text-2xl">📍</span>
                <div className="text-left">
                  <p className="text-sm text-orange-100">Location</p>
                  <p className="font-semibold">C-391, Ground Floor, Sector-10, Gautam Buddh Nagar Noida - 201301, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h5 className="text-2xl font-bold mb-4"><span className="text-orange-500">RK</span><span className="text-white"> PRiNT NCR</span></h5>
              <p className="text-sm text-gray-400 mb-2">DIGITAL | OFFSET | SCREEN PRINTING</p>
              <p className="text-sm text-gray-400">Your trusted partner for all printing solutions in NCR. Quality, speed, and affordability in every print.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-orange-500">Home</a></li>
                <li><a href="#products" className="hover:text-orange-500">Products</a></li>
                <li><a href="#services" className="hover:text-orange-500">Services</a></li>
                <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-orange-500">Digital Printing</li>
                <li className="hover:text-orange-500">Offset Printing</li>
                <li className="hover:text-orange-500">Screen Printing</li>
                <li className="hover:text-orange-500">Custom Solutions</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 RK Print NCR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}