import { Fragment, useEffect, useState } from 'react'
// import globalStyles from '../global-styles'
import styles from './styles'
import Observer from 'components/intersection-observer'

let heroHeight = 400,
    screenWidth = 1440,
    screenHeight = 700,
    topDistance = 0,
    marginTop = 80,
    scrollAt = {},
    opacityEl = {},
    scrollGap = 100,
    parentTop = 0,
    viewTop = 0,
    benefitAnimate = {},
    benefitPos = {},
    prevScroll = 0,
    isScrollDown = true,
    scrollQ = 0,
    maxY = -80,
    minY = 0
const assetPrefix = process.env.config?.assetPrefix ?? ''

const data = [
    {
        id: '1',
        title: 'Vida Fights Alongside with You',
        description:
            'Let Vida be your buddy and accompany you along the journey. Make Vida part of your support system.',
        image: '/images/inpatient/Vida Fights  Alongside with You@2x.png',
    },
    {
        id: '2',
        title: 'A Reliable Health Care Partner',
        description:
            'We believe that the right medical treatment helps increase the chance of recovery. Vida makes sure that you and your family can access the right treatment.',
        image: '/images/inpatient/A Decent Health  Care Partner@2x.png',
    },
]

export default function ParallaxDesktop() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // let firstbenefit = ''
        if (window) {
            window.addEventListener('scroll', handleScroll)
            screenHeight = window.innerHeight
        }

        let observerOptions = {
            rootMargin: '0px',
            threshold: [0.2, 0.85],
        }

        var observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        )

        let target = '.benefit-group'
        document.querySelectorAll(target).forEach((i) => {
            if (i) {
                observer.observe(i)
            }
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (
                entry.intersectionRatio >= 0.15 &&
                isScrollDown &&
                entry.isIntersecting
            ) {
                //do something
                addAnimation(entry.target.id)

                benefitPos = {
                    ...benefitPos,
                    [entry.target.id]: 0,
                }
            }
        })
    }

    const handleScroll = (e) => {
        let scrollTop = window.pageYOffset,
            containerStart = document.getElementById('container').offsetTop,
            currentScroll = scrollTop + screenHeight,
            scrollQ = currentScroll - containerStart //scroll start from outer benefit container

        if (prevScroll < scrollTop) {
            isScrollDown = true
        } else {
            isScrollDown = false
        }

        const groupPos = document.getElementById('benefit-group-1').offsetTop,
            groupHeight =
                document.getElementById('benefit-group-1').offsetHeight,
            groupVisiblePos = groupPos + groupHeight / 2

        const groupPos2 = document.getElementById('benefit-group-2').offsetTop,
            groupHeight2 =
                document.getElementById('benefit-group-2').offsetHeight,
            groupVisiblePos2 = groupPos2 + groupHeight2 / 2

        //start animation when benefit group visibility on viewport meet this condiiton
        if (scrollQ >= groupVisiblePos) {
            benefitPos['benefit-group-1'] = scrollQ - groupVisiblePos

            let qPosY = benefitPos['benefit-group-1'] * 0.15,
                pPosY = benefitPos['benefit-group-1'] * 0.1,
                pPosX = benefitPos['benefit-group-1'] * 0.05

            document.getElementById(
                'benefit-1'
            ).style.transform = `translate3d(0,-${qPosY}px,0)`

            document.getElementById(
                'benefit-image-1'
            ).style.transform = `translate3d(${pPosX}px,-${pPosY}px,0`
        }

        if (scrollQ >= groupVisiblePos2) {
            benefitPos['benefit-group-2'] = scrollQ - groupVisiblePos2
            let qPosY = benefitPos['benefit-group-2'] * 0.15,
                pPosY = benefitPos['benefit-group-2'] * 0.1,
                pPosX = benefitPos['benefit-group-2'] * 0.05

            document.getElementById(
                'benefit-2'
            ).style.transform = `translate3d(0,-${qPosY}px,0)`

            document.getElementById(
                'benefit-image-2'
            ).style.transform = `translate3d(-${pPosX}px,-${pPosY}px,0`
            //kalau sebelah kanan position X axis nya minus
        }

        // if (scrollQ >= groupVisiblePos3) {
        //     benefitPos['benefit-group-3'] = scrollQ - groupVisiblePos3
        //     let qPosY = benefitPos['benefit-group-3'] * 0.15,
        //         pPosY = benefitPos['benefit-group-3'] * 0.1,
        //         pPosX = benefitPos['benefit-group-3'] * 0.05

        //     // document.getElementById(
        //     //     'benefit-3'
        //     // ).style.transform = `translate3d(0,-${qPosY}px,0)`

        //     document.getElementById(
        //         'benefit-image-3'
        //     ).style.transform = `translate3d(${pPosX}px,-${pPosY}px,0`
        // }

        prevScroll = scrollTop
    }

    // const resetAnimation = (id) => {
    //     const el = document.getElementById(id)
    //     // el.classList.add('animate-fadeout')
    //     el.classList.remove('animate-fadein')
    //     console.log('INvisible', id)
    // }

    const addAnimation = (id) => {
        const el = document.getElementById(id)
        el.classList.add('animate-fadein', 'is-visible')
        // el.classList.remove('animate-fadeout')
        // console.log('visible', id),
    }

    return (
        <div className="content">
            <div
                className={`benefit-container ${isLoaded ? 'is-loaded' : ''}`}
                id="container"
            >
                {data &&
                    data.map((q, index) => (
                        <div
                            className={`benefit-group ${
                                (index + 1) % 2 == 0 ? 'item-even' : 'item-odd'
                            }`}
                            id={`benefit-group-${q.id}`}
                            key={q.id}
                            // style={{ height: `${screenHeight}px` }}
                        >
                            <div className={`benefit-text-wrapper`}>
                                <div
                                    className={`benefit-text`}
                                    id={`benefit-${q.id}`}
                                >
                                    <h3>{q.title}</h3>
                                    <div>{q.description}</div>
                                </div>
                            </div>

                            <div
                                id={`benefit-image-${q.id}`}
                                className={`benefit-image benefit-image-${q.id}`}
                            >
                                <img src={`${assetPrefix}${q.image}`} />
                            </div>
                        </div>
                    ))}
            </div>
            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    body {
                        overscroll-behavior: none;
                        overflow-x: hidden;
                    }
                `}
            </style>
        </div>
    )
}
