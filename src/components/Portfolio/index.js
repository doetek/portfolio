
// import React, { useEffect, useState } from 'react'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import Axios from 'axios' // Import axios
// import './index.scss'

// Axios.defaults.baseURL =
//   process.env.REACT_APP_SERVER_DOMAIN || 'http://localhost:5000'

// const Portfolio = () => {
//   const [letterClass, setLetterClass] = useState('text-animate')
//   const [portfolio, setPortfolio] = useState([])

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 3000)

//     return () => {
//       clearTimeout(timer)
//     }
//   }, [letterClass])

//   useEffect(() => {
//     getPortfolio()
//   }, [])

//   const getPortfolio = async () => {
//     try {
//       const response = await Axios.get('/api/portfolios') // Using axios here
//       if (response.status === 200) {
//         const data = response.data
//         // console.log(data);
//         setPortfolio(data)
//       } else {
//         console.error('Failed to fetch portfolio items')
//       }
//     } catch (error) {
//       console.error('Error fetching portfolio items:', error)
//     }
//   }

//   const renderPortfolio = (portfolio) => {
//     return (
//       <div className="images-container">
//         {portfolio.map((port, idx) => {
//           return (
//             <div className="image-box" key={idx}>
//               <img
//                 src={port.image}
//                 className="portfolio-image"
//                 alt="portfolio"
//               />
//               <div className="content">
//                 <p className="title">{port.name}</p>
//                 <h4 className="description">{port.description}</h4>
//                 <button className="btn" onClick={() => window.open(port.url)}>
//                   View
//                 </button>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }

//   return (
//     <>
//       <div className="container portfolio-page">
//         <h1 className="page-title">
//           <AnimatedLetters
//             letterClass={letterClass}
//             strArray={'Portfolio'.split('')}
//             idx={15}
//           />
//         </h1>
//         <div>{renderPortfolio(portfolio)}</div>
//       </div>
//       <Loader type="pacman" />
//     </>
//   )
// }

// export default Portfolio

import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Axios from 'axios' // Import axios
import './index.scss'

Axios.defaults.baseURL =
  process.env.REACT_APP_SERVER_DOMAIN || 'http://localhost:5000'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [letterClass])

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    try {
      const response = await Axios.get('/api/portfolios') // Using axios here
      if (response.status === 200) {
        const data = response.data
        // console.log(data);
        setPortfolio(data)
      } else {
        console.error('Failed to fetch portfolio items')
      }
    } catch (error) {
      console.error('Error fetching portfolio items:', error)
    }
  }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container" >
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}  onClick={() => window.open(port.url)}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <h2 className="title">{port.name}</h2> {/* Changed p to h2 for better SEO */}
                {/* <p className="description">{port.description}</p> Changed h4 to p for semantic correctness */}
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio

