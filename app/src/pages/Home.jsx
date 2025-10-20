import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Home.css'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)
  const [employeeCount, setEmployeeCount] = useState(0)
  const [departmentCount, setDepartmentCount] = useState(0)
  const [projectCount, setProjectCount] = useState(0)

  const stats = [
    { icon: 'bi-people-fill', count: 150, label: 'Total Employees', color: 'text-primary' },
    { icon: 'bi-building', count: 8, label: 'Departments', color: 'text-success' },
    { icon: 'bi-briefcase-fill', count: 25, label: 'Active Projects', color: 'text-warning' },
    { icon: 'bi-graph-up', count: 95, label: 'Efficiency %', color: 'text-info' }
  ]

  const features = [
    {
      icon: 'bi-person-plus-fill',
      title: 'Add Employees',
      description: 'Easily add new employees to your organization with comprehensive details and documentation.',
      color: 'border-primary'
    },
    {
      icon: 'bi-search',
      title: 'Search & Filter',
      description: 'Quickly find employees using advanced search filters and sorting options.',
      color: 'border-success'
    },
    {
      icon: 'bi-bar-chart-fill',
      title: 'Analytics Dashboard',
      description: 'Get insights into your workforce with detailed analytics and performance metrics.',
      color: 'border-warning'
    },
    {
      icon: 'bi-shield-check',
      title: 'Secure & Reliable',
      description: 'Your employee data is protected with enterprise-grade security and reliability.',
      color: 'border-info'
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Animate counters
    const animateCounter = (target, setter) => {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(current))
        }
      }, 30)
    }

    setTimeout(() => {
      animateCounter(150, setEmployeeCount)
      animateCounter(8, setDepartmentCount)
      animateCounter(25, setProjectCount)
    }, 1000)

    // Cycle through stats
    const statInterval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length)
    }, 3000)

    return () => clearInterval(statInterval)
  }, [stats.length])

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="display-4 fw-bold text-gradient slide-in-left">
                  Welcome to <br />
                  <span className="text-primary">Employee Management</span> System
                </h1>
                <p className="lead text-light-emphasis slide-in-left delay-1">
                  Streamline your workforce management with our comprehensive, user-friendly platform. 
                  Manage employees, track performance, and boost productivity with ease.
                </p>
                <div className="hero-buttons slide-in-left delay-2">
                  <Link to="/employees" className="btn btn-primary btn-lg me-3 pulse-animation">
                    <i className="bi bi-people me-2"></i>
                    View Employees
                  </Link>
                  <button className="btn btn-outline-light btn-lg hover-glow">
                    <i className="bi bi-play-circle me-2"></i>
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image slide-in-right">
                <div className="floating-card">
                  <div className="card bg-dark border-primary">
                    <div className="card-body text-center">
                      <i className={`bi ${stats[currentStat].icon} ${stats[currentStat].color} display-1 rotate-animation`}></i>
                      <h3 className="mt-3 counter-animation">
                        {currentStat === 0 ? employeeCount : 
                         currentStat === 1 ? departmentCount : 
                         currentStat === 2 ? projectCount : '95'}
                        {currentStat === 3 ? '%' : ''}
                      </h3>
                      <p className="text-muted">{stats[currentStat].label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="stat-card card bg-dark border-secondary h-100 hover-lift">
                  <div className="card-body text-center">
                    <i className={`bi ${stat.icon} ${stat.color} display-4 bounce-in`}></i>
                    <h3 className="mt-3 fw-bold">
                      {index === 0 ? employeeCount : 
                       index === 1 ? departmentCount : 
                       index === 2 ? projectCount : '95'}
                      {index === 3 ? '%' : ''}
                    </h3>
                    <p className="text-muted">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="display-5 fw-bold text-light">
              Powerful Features for <span className="text-primary">Modern HR</span>
            </h2>
            <p className="lead text-light-emphasis">
              Discover what makes our Employee Management System the perfect choice for your organization
            </p>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className={`feature-card card bg-dark ${feature.color} h-100 hover-tilt`}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="feature-icon me-4">
                        <i className={`bi ${feature.icon} display-5 text-primary`}></i>
                      </div>
                      <div>
                        <h4 className="fw-bold text-light">{feature.title}</h4>
                        <p className="text-light-emphasis">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="cta-content card bg-gradient-primary border-0 p-5 hover-glow">
                <h2 className="display-6 fw-bold text-white mb-3">
                  Ready to Transform Your HR Management?
                </h2>
                <p className="lead text-white-75 mb-4">
                  Join thousands of companies already using our Employee Management System to streamline their workforce operations.
                </p>
                <div>
                  <Link to="/employees" className="btn btn-light btn-lg me-3 hover-lift">
                    <i className="bi bi-rocket-takeoff me-2"></i>
                    Get Started Now
                  </Link>
                  <button className="btn btn-outline-light btn-lg hover-lift">
                    <i className="bi bi-telephone me-2"></i>
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home