import { Fragment, useEffect, useState } from 'react'
import('intersection-observer')
// import globalStyles from '../global-styles'
import styles from './styles'

let screenHeight = 700,
    benefitPos = {},
    prevScroll = 0,
    isScrollDown = true
const assetDomain = process.env.config?.baseEndpoint ?? ''

// const data = [
//     {
//         id: '1',
//         title: 'Vida Fights Alongside with You',
//         description:
//             'Let Vida be your buddy and accompany you along the journey. Make Vida part of your support system.',
//         image: '/images/inpatient/Vida Fights  Alongside with You@2x.png',
//     },
//     {
//         id: '2',
//         title: 'A Reliable Health Care Partner',
//         description:
//             'We believe that the right medical treatment helps increase the chance of recovery. Vida makes sure that you and your family can access the right treatment.',
//         image: '/images/inpatient/A Decent Health  Care Partner@2x.png',
//     },
// ]

export default function ParallaxDesktop({ data, isDesktop }) {
    useEffect(() => {
        // let firstbenefit = ''
        if (window) {
            if (isDesktop) window.addEventListener('scroll', handleScroll)
            // setTimeout(function () {
            //     window.scrollTo(0, 0)
            //     setIsLoaded(true)
            // }, 200)
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

        let target = isDesktop ? '.benefit-group' : '.b-group'
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

        prevScroll = scrollTop
    }

    const addAnimation = (id) => {
        const el = document.getElementById(id)
        if (isDesktop) el.classList.add('animate-fadein', 'is-visible')
        else el.classList.add('animate-fadein')
    }

    return (
        <div className="content">
            <div
                className={`benefit-container ${isDesktop ? '' : 'is-mobile'}`}
                id="container"
            >
                {data &&
                    data.map((q, index) => {
                        let imageUrl = ''
                        if (isDesktop) {
                            imageUrl = `${assetDomain}${q?.image?.url ?? ''}`
                        } else {
                            imageUrl = q.image
                                ? `${assetDomain}${q.image.formats.small.url}`
                                : ''
                        }
                        if (isDesktop) {
                            return (
                                <div
                                    className={`benefit-group ${
                                        (index + 1) % 2 == 0
                                            ? 'item-even'
                                            : 'item-odd'
                                    }`}
                                    id={`benefit-group-${q.num}`}
                                    key={q.num}
                                    // style={{ height: `${screenHeight}px` }}
                                >
                                    <div className={`benefit-text-wrapper`}>
                                        <div
                                            className={`benefit-text`}
                                            id={`benefit-${q.num}`}
                                        >
                                            <h3>{q.title}</h3>
                                            <div>{q.description}</div>
                                        </div>
                                    </div>

                                    <div
                                        id={`benefit-image-${q.num}`}
                                        className={`benefit-image benefit-image-${q.num}`}
                                    >
                                        <img src={imageUrl} />
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    className={`b-group`}
                                    id={`b-group-${q.num}`}
                                    key={q.num}
                                    // style={{ height: `${screenHeight}px` }}
                                >
                                    <div
                                        id={`b-image-mobile-${q.num}`}
                                        className={`b-image b-image-mobile-${q.num}`}
                                    >
                                        <img src={imageUrl} />
                                    </div>

                                    <div className={`b-text`} id={`b-${q.num}`}>
                                        <h3>{q.title}</h3>
                                        <div>{q.description}</div>
                                    </div>
                                </div>
                            )
                        }
                    })}
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
