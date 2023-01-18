// "@fullpage/react-fullpage": "0.1.26",
// import { useState, useEffect } from 'react'
// import { useAsyncEffect } from 'use-async-effect'
// import { getAPI } from 'services/common'
// import { getCookie } from 'utils/global-util'
// import Loader from 'components/loader'

// import ReactFullpage from '@fullpage/react-fullpage'

// import Content from './content'

// const assetDomain = process.env.config?.baseEndpoint ?? '',
//     assetPrefix = process.env.config?.assetPrefix ?? ''
// export default function AboutScreen() {
//     const [aboutData, setAboutData] = useState(null)

//     const [isDesktop, setIsDesktop] = useState(true)
//     const [isWebpSupport, setIsWebpSupport] = useState(true)
//     const [heroHeight, setHeroHeight] = useState(null)

//     useAsyncEffect(async (isMounted) => {
//         let langId
//         if (window) {
//             langId = getCookie('lang')
//             setHeroHeight(window.innerHeight)
//             if (window.innerWidth < window.innerHeight) {
//                 setIsDesktop(false)
//             }
//             if (window.Modernizr.webp) {
//                 setIsWebpSupport(true)
//             } else {
//                 setIsWebpSupport(false)
//             }

//             if (history.scrollRestoration) {
//                 history.scrollRestoration = 'manual'
//             }
//         }
//         const aboutDt = await getAPI('vida-about', langId)

//         if (!isMounted()) return

//         setAboutData(aboutDt)
//     }, [])

//     // useEffect(async () => {
//     //     if (window) {
//     //         setHeroHeight(window.innerHeight)
//     //         if (window.innerWidth < window.innerHeight) {
//     //             setIsDesktop(false)
//     //         }
//     //         if (window.Modernizr.webp) {
//     //             setIsWebpSupport(true)
//     //         } else {
//     //             setIsWebpSupport(false)
//     //         }

//     //         if (history.scrollRestoration) {
//     //             history.scrollRestoration = 'manual'
//     //         }
//     //     }
//     // }, [])

//     if (!aboutData) return <Loader />
//     const onLeave = (origin, destination, direction) => {
//         let navbar = document.getElementById('navbarTop')
//         if (destination && destination.index > 0) {
//             if (navbar && navbar.classList.contains('is-trans')) {
//                 navbar.classList.remove('is-trans')
//             }
//         } else if (destination && destination.index == 0) {
//             if (navbar) {
//                 navbar.classList.add('is-trans')
//             }
//         }
//     }
//     return (
//         <>
//             {aboutData && (
//                 <ReactFullpage
//                     navigation={false}
//                     // slidesNavigation={'false'}

//                     animateAnchor={true}
//                     licenseKey={'722A8A66-15834C4B-AE7B1736-D1A2C2DE'}
//                     onLeave={onLeave}
//                     //   sectionsColor={this.state.sectionsColor}
//                     scrollOverflow={true}
//                     render={(comp) => (
//                         <ReactFullpage.Wrapper>
//                             <Content
//                                 heroHeight={heroHeight}
//                                 aboutData={aboutData}
//                                 isDesktop={isDesktop}
//                                 isWebpSupport={isWebpSupport}
//                             />
//                         </ReactFullpage.Wrapper>
//                     )}
//                 />
//             )}
//         </>
//     )
// }
