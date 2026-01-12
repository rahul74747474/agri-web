import React, { useState, useEffect } from "react";
import {
  Mic,
  Sprout,
  CloudSun,
  Info,
  Phone,
  ChevronDown,
  User,
  Heart,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Leaf,
  Wheat,
  Volume2,
  Languages,
  Star,
  CheckCircle,
  Users,
} from "lucide-react";
import { StepCard } from "@/components/StepCard";
import { CreativeCard } from "@/components/CreativeCard";
import { UseCaseCard } from "@/components/UseCaseCard";
import { LanguageBadge } from "@/components/LanguageBadge";
import { StatCard } from "@/components/StatCard";
import { ProblemItem } from "@/components/ProblemItem";
import { SectionHeader } from "@/components/SectionHeader";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ContactForm } from "@/components/ContactForm";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBF7] font-sans text-gray-800 selection:bg-green-200 overflow-x-hidden">
      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gentle-wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Modern Floating Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 flex justify-center">
        <nav
          className={`transition-all duration-300 ease-in-out w-full max-w-5xl rounded-full px-6 py-3 flex items-center justify-between ${
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
              : "bg-white/40 backdrop-blur-sm py-4 border border-white/40"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="bg-green-700 text-white p-2 rounded-full shadow-md">
              <Sprout size={20} />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-green-900 transition-colors">
              Kisaan Sathi
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Features", "Vision", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 px-2 sm:px-3 py-1.5 rounded-full transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="hidden md:flex bg-green-700 hover:bg-green-800 text-white px-4 sm:px-5 py-2 rounded-full font-medium transition-all shadow-md items-center gap-1 sm:gap-2 transform hover:scale-105 active:scale-95 text-xs sm:text-sm">
            <Phone size={16} />
            Contact Us
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-green-800 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden animate-fade-in-up">
          <div className="flex flex-col gap-6 text-center text-xl font-medium text-gray-800">
            {["Home", "Features", "Vision", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-green-700 text-white py-3 rounded-full mt-4 flex items-center justify-center gap-2">
              <Phone size={20} /> Get in Touch
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header
        id="home"
        className="relative bg-gradient-to-b from-green-800 to-green-900 text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center"
      >
        {/* Background Decorative Elements - Properly layered with z-index */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Floating SVG Background Elements */}
          <div className="absolute top-20 left-10 text-white/10 animate-float">
            <CloudSun size={120} />
          </div>

          <div className="absolute bottom-40 right-10 text-white/5 animate-float">
            <Sprout size={180} />
          </div>

          {/* Gradient Blob */}
          <div
            className="absolute top-1/2 left-1/2 
                          -translate-x-1/2 -translate-y-1/2 
                          w-[800px] h-[800px] 
                          bg-green-500/10 rounded-full blur-3xl animate-pulse"
          ></div>

          {/* Abstract Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-green-700/40 px-4 py-2 rounded-full border border-green-500/30 backdrop-blur-md hover:bg-green-700/60 transition-colors cursor-default">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-50 font-medium text-sm tracking-wide">
                  AI-Powered Digital Assistant
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Kisaan Sathi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  Your Digital Farming Companion
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Every farming challenge, solved in your own language.{" "}
                <strong className="text-white font-semibold">
                  A talking digital avatar
                </strong>{" "}
                that supports you like a trusted friend.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <PrimaryButton
                  variant="primary"
                  size="lg"
                  icon={<Mic size={24} />}
                  className="text-white"
                >
                  Ask by Voice
                </PrimaryButton>
                <button className="group bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium backdrop-blur-sm transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Info size={24} />
                  <span>How It Works</span>
                  <ArrowRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  />
                </button>
              </div>

              {/* Stats/Trust Badges */}
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 opacity-80 text-xs sm:text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <span className="font-medium">10,000+ Farmers</span>
                </div>
                <div className="h-3 sm:h-4 w-px bg-green-500/50 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">4.9/5</span>
                  <span>User Rating</span>
                </div>
              </div>
            </div>

            {/* Creative Phone Mockup */}
            <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
              <div className="relative w-72 md:w-80 aspect-[9/18] bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden ring-8 ring-green-900/30 transform hover:rotate-0 transition-all duration-700 ease-out animate-float z-20">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none z-30"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-24 bg-black rounded-b-2xl z-40"></div>

                <div className="h-full bg-[#FFFBF7] flex flex-col relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage:
                        "radial-gradient(#166534 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>

                  <div className="flex-1 flex flex-col px-5 pt-14 pb-6 relative z-10 overflow-y-auto hide-scrollbar">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-tr from-green-100 to-green-50 p-1 shadow-lg ring-4 ring-white relative group cursor-pointer">
                      <div className="w-full h-full rounded-full bg-green-100 overflow-hidden relative flex items-center justify-center">
                        <User size={56} className="text-green-800 mt-2" />
                      </div>
                      <div className="absolute -bottom-1 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-3 animate-fade-in-up delay-100">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-green-100 max-w-[85%]">
                          <p className="text-xs text-green-800 font-bold mb-1">
                            Kisaan Sathi
                          </p>
                          <p className="text-gray-700 text-sm leading-snug">
                            Hello! The weather looks clear today. How can I help
                            you?
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 flex-row-reverse animate-fade-in-up delay-200">
                        <div className="bg-green-600 p-3 rounded-2xl rounded-tr-none shadow-md shadow-green-200 max-w-[85%]">
                          <p className="text-white text-sm leading-snug">
                            Which fertilizer is best for wheat?
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 animate-fade-in-up delay-300">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-green-100 max-w-[85%]">
                          <div className="flex gap-1 mb-2 items-center">
                            <div className="w-1 h-3 bg-green-500 animate-pulse"></div>
                            <div className="w-1 h-5 bg-green-600 animate-pulse delay-75"></div>
                            <div className="w-1 h-3 bg-green-500 animate-pulse delay-150"></div>
                            <span className="text-xs text-green-600 font-medium ml-1">
                              Speaking now...
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">
                            For wheat, use a balanced combination of urea and
                            DAP for optimal growth…
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-20">
                    <button className="w-full py-3 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-xl shadow-lg shadow-green-200 active:scale-95 transition-transform flex items-center justify-center gap-2">
                      <Mic size={20} />{" "}
                      <span className="text-sm font-semibold">
                        Tap to Speak
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L1440 120L1440 60C1440 60 1120 0 720 0C320 0 0 60 0 60L0 120Z"
              fill="#FFF7ED"
            />
          </svg>
        </div>
      </header>

      {/* SECTION 1: How It Works */}
      <section className="py-24 px-4 md:px-6 bg-[#FFFBF7]">
        <div className="container mx-auto">
          <SectionHeader
            badge="Simple Process"
            title="How It Works"
            centered={true}
          />

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-green-100 -z-10 -translate-y-1/2 transform scale-x-75"></div>

            <StepCard
              number="1"
              icon={<Mic size={32} />}
              title="You Speak"
              desc="Ask your question directly in your own language by voice or text."
              gradient="from-blue-400 to-blue-600"
            />
            <StepCard
              number="2"
              icon={<User size={32} />}
              title="The Avatar Understands"
              desc="Our AI avatar understands your request and analyzes it intelligently."
              gradient="from-green-500 to-emerald-700"
            />
            <StepCard
              number="3"
              icon={<Volume2 size={32} />}
              title="You Get an Answer"
              desc="Receive accurate guidance instantly in both voice and text."
              gradient="from-amber-400 to-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 px-4 md:px-6 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float -z-10"></div>

        <div className="container mx-auto relative z-10">
          <SectionHeader
            badge="Features"
            title="What Can Kisaan Sathi Do for You?"
            centered={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CreativeCard
              icon={<Mic size={32} />}
              title="Voice-Based Questions"
              desc="Just speak and ask. No typing required."
              gradient="from-blue-400 to-blue-600"
              delay="0"
            />
            <CreativeCard
              icon={<User size={32} />}
              title="Smart Avatar"
              desc="A friendly assistant that responds in your own language."
              gradient="from-green-500 to-emerald-700"
              delay="100"
            />
            <CreativeCard
              icon={<CloudSun size={32} />}
              title="Weather Alerts"
              desc="Accurate updates on rain, sunshine, and changing conditions."
              gradient="from-amber-400 to-orange-500"
              delay="200"
            />
            <CreativeCard
              icon={<Wheat size={32} />}
              title="Market Prices"
              desc="Know the right value of your crops from the comfort of your home."
              gradient="from-purple-500 to-indigo-600"
              delay="300"
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-green-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-5/12 text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white p-2 shadow-2xl relative z-10">
                  <div className="w-full h-full rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
                    <User size={100} className="text-green-800" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 border-2 border-green-200 rounded-full animate-pulse -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 border border-green-100 rounded-full -z-10"></div>
              </div>
              <h3 className="text-3xl font-bold text-green-900 mb-4">
                Built for Every Farmer
              </h3>
              <p className="text-lg text-gray-600">
                Whether you are a smallholder or a large-scale farmer, Kisaan
                Sathi supports you in every type of farming and every challenge.
              </p>
            </div>

            <div className="w-full lg:w-7/12 grid gap-6">
              <UseCaseCard
                query="When should seeds be sown based on current weather?"
                category="Weather Guidance"
              />
              <UseCaseCard
                query="My wheat leaves are turning yellow. What should I do?"
                category="Crop Health"
              />
              <UseCaseCard
                query="What is today's soybean price in the Indore market?"
                category="Market Updates"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 px-4 md:px-6 bg-[#FFFBF7] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 -z-10"
          style={{
            backgroundImage: "linear-gradient(#166534 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-50 to-transparent transform skew-x-12 translate-x-32 hidden lg:block pointer-events-none -z-10"></div>

            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2 space-y-8 z-10">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    Why Kisaan Sathi?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Technology has advanced rapidly, yet for many farmers, using
                    apps is still complicated and inaccessible.
                  </p>
                </div>

                <div className="space-y-4">
                  <ProblemItem text="English and technical jargon" />
                  <ProblemItem text="Difficulty in reading and writing" />
                  <ProblemItem text="Complex and confusing app interfaces" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative z-10">
                <div className="relative bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute top-0 right-0 p-6 opacity-20 -z-10">
                    <Sprout size={120} />
                  </div>

                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="bg-green-500/20 p-2 rounded-lg backdrop-blur-sm">
                      <Heart className="text-green-300 fill-current" />
                    </div>
                    Our Solution
                  </h3>

                  <p className="text-green-50 text-lg mb-8 leading-relaxed">
                    We've built a companion that doesn't feel like an app —
                    <strong> it feels human.</strong>
                    <br />
                    <br />
                    Simply speak, listen, and understand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-emerald-100 border-y border-green-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-6 text-green-700">
            <Languages size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">
            No language barriers. No learning curve.
          </h2>
          <p className="text-green-800 mb-8 max-w-2xl mx-auto">
            Kisaan Sathi is available in your native language.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <LanguageBadge code="HI" label="Hindi" />
            <LanguageBadge code="MR" label="Marathi" />
            <LanguageBadge code="PA" label="Punjabi" />
            <LanguageBadge code="TA" label="Tamil" />
            <div className="flex items-center gap-2 text-green-700 font-medium px-4">
              <span>+ Many more languages</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-4 container mx-auto">
        <SectionHeader
          badge="Why Choose Us"
          title="Trusted by Thousands"
          centered={true}
        />
        <div className="grid md:grid-cols-4 gap-6">
          <StatCard
            icon={<Users size={28} />}
            value="10,000+"
            label="Farmers Connected"
          />
          <StatCard
            icon={<MessageCircle size={28} />}
            value="Daily"
            label="Voice Queries"
          />
          <StatCard
            icon={<Wheat size={28} />}
            value="15+"
            label="Crop Categories"
          />
          <StatCard
            icon={<Star size={28} />}
            value="4.9/5"
            label="User Rating"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 md:px-6 bg-gradient-to-b from-green-50 to-emerald-50 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40 animate-float -z-10"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40 animate-float-delayed -z-10"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <SectionHeader
            badge="Get In Touch"
            title="Let's Connect"
            subtitle="Have questions or want to partner with us? We'd love to hear from you."
            centered={true}
          />

          <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
            {/* Left Column - Trust Indicators */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-green-900">
                  Why Reach Out?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you have questions about our platform, want to explore
                  partnerships, or simply wish to share your feedback, we're
                  here to help.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Phone size={24} />,
                    title: "24/7 Support",
                    desc: "We respond within 24 hours",
                  },
                  {
                    icon: <Users size={24} />,
                    title: "Dedicated Team",
                    desc: "Expert support specialists",
                  },
                  {
                    icon: <CheckCircle size={24} />,
                    title: "Solutions",
                    desc: "Custom solutions for your needs",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 text-green-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center bg-[#FFFBF7]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
            Technology that doesn't feel like an app, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              but feels like a friend.
            </span>
          </h2>
          <div className="flex justify-center pt-4">
            <PrimaryButton
              variant="primary"
              size="lg"
              icon={<Mic size={28} />}
              iconPosition="left"
            >
              Try It Now by Voice
            </PrimaryButton>
          </div>
        </div>
      </section>

{/* Vision Section */}
      <section
        id="vision"
        className="relative py-32 bg-[#1a4731] text-white overflow-hidden flex items-center justify-center text-center"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-09d9b117b2b8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a4731] via-transparent to-[#1a4731]"></div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-block p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-4 animate-float">
              <Leaf className="text-green-400" size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              “Every farmer deserves a <br />
              <span className="text-amber-400">Digital Companion</span>.”
            </h2>
            <p className="text-xl text-green-100/80 font-light max-w-2xl mx-auto">
              One that understands their language, their challenges, and delivers the right guidance at the right time.
            </p>
            <button className="mt-8 bg-white text-green-900 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Join Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-green-100/60 py-16 relative">
        <div className="absolute top-0 left-0 right-0 overflow-hidden -mt-10 md:-mt-16 leading-none">
          <svg
            className="relative block w-full h-[60px] md:h-[100px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-green-950"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-green-800 p-2 rounded-lg">
                <Sprout size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Kisaan Sathi
              </span>
            </div>

            <div className="flex gap-8 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <div className="text-right">
              <p className="text-sm">
                Built for{' '}
                <span className="text-amber-400 font-bold">Indian Farmers</span>{' '}
                🇮🇳
              </p>
              <p className="text-xs mt-1 text-green-100/30">
                © 2024 Kisaan Sathi. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
