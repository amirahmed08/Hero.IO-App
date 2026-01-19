import React, { useEffect, useState } from 'react'

const SubBanner = () => {
  const [counts, setCounts] = useState({ downloads: 0, reviews: 0, apps: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    const banner = document.querySelector('.sub-banner')
    if (banner) observer.observe(banner)

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const targets = { downloads: 29600000, reviews: 906000, apps: 132 }
    const duration = 2500
    const steps = 60

    const startTime = Date.now()
    
    const updateCounts = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      setCounts({
        downloads: Math.floor(progress * targets.downloads),
        reviews: Math.floor(progress * targets.reviews),
        apps: Math.floor(progress * targets.apps)
      })

      if (progress < 1) {
        requestAnimationFrame(updateCounts)
      }
    }
    updateCounts()
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  return (
    <div className='sub-banner flex flex-col justify-center items-center bg-gradient-to-r from-purple-700 via-purple-600 to-purple-400 py-24 px-4'>
      <h1 className='text-5xl md:text-7xl text-center font-bold text-white mb-20 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl leading-tight'>
        Trusted by Millions,   
        <span className='bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent'>Built for You</span>
      </h1>
      
      <div className='flex flex-col lg:flex-row justify-between items-center gap-8 max-w-[1200px] mx-auto w-full px-4'>
        <div className='text-center transform transition-all duration-500 hover:scale-105'>
          <span className='text-white/90 text-lg md:text-xl font-medium block mb-2 tracking-wide'>Total Downloads</span>
          <h2 className='text-5xl md:text-7xl font-black text-white mb-3 drop-shadow-xl'>
            {formatNumber(counts.downloads)}
          </h2>
          <p className='text-emerald-300 font-semibold text-sm md:text-base bg-emerald-500/20 px-3 py-1 rounded-full inline-block animate-pulse'>
            +21% vs last month
          </p>
        </div>
        
        <div className='text-center transform transition-all duration-500 hover:scale-105'>
          <span className='text-white/90 text-lg md:text-xl font-medium block mb-2 tracking-wide'>Total Reviews</span>
          <h2 className='text-5xl md:text-7xl font-black text-white mb-3 drop-shadow-xl'>
            {formatNumber(counts.reviews)}
          </h2>
          <p className='text-emerald-300 font-semibold text-sm md:text-base bg-emerald-500/20 px-3 py-1 rounded-full inline-block animate-pulse'>
            +46% vs last month
          </p>
        </div>
        
        <div className='text-center transform transition-all duration-500 hover:scale-105'>
          <span className='text-white/90 text-lg md:text-xl font-medium block mb-2 tracking-wide'>Active Apps</span>
          <h2 className='text-5xl md:text-7xl font-black text-white mb-3 drop-shadow-xl'>
            {counts.apps}+
          </h2>
          <p className='text-sky-300 font-semibold text-sm md:text-base bg-sky-500/20 px-3 py-1 rounded-full inline-block animate-pulse'>
            31 more launching soon
          </p>
        </div>
      </div>
      
      <div className='mt-16 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse' />
    </div>
  )
}

export default SubBanner
