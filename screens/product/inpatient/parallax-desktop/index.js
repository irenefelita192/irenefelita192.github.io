import { Fragment, useEffect, useState } from 'react'
import globalStyles from '../global-styles'
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
    questionAnimate = {},
    questionPos = {},
    prevScroll = 0,
    isScrollDown = true,
    scrollQ = 0,
    maxY = -80,
    minY = 0
const assetPrefix = process.env.config?.assetPrefix ?? ''

export default function ParallaxDesktop({ data }) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // let firstQuestion = ''
        if (window) {
            window.addEventListener('scroll', handleScroll)
            screenHeight = window.innerHeight
        }

        //     setTimeout(function () {
        //         window.scrollTo(0, 0)
        //         setIsLoaded(true)
        //     }, 200)

        //     heroHeight = document.getElementById('hero')?.offsetHeight ?? 0
        //     screenWidth = window.innerWidth
        //     screenHeight = window.innerHeight
        //     topDistance = (screenHeight - marginTop) / 4 //jarak dari middle ke 1/4 screen
        //     parentTop = document.getElementById('container').offsetTop
        //     viewTop =
        //         document.getElementById('container').offsetTop +
        //         screenHeight / 2

        //     if (data) {
        //         firstQuestion = data && data.length > 0 ? data[0] : null
        //         if (firstQuestion) {
        //             setTextPosition(`question-${firstQuestion.id}`)
        //             setPortraitPosition(`portrait-${firstQuestion.id}`)
        //             setBubblePosition(`bubble-${firstQuestion.id}`)
        //             addAnimation(firstQuestion.id)
        //             setOpacity(firstQuestion.id)
        //         }

        //         document.getElementById(`container`).style.height = `${
        //             (screenHeight / 2) * data.length + marginTop
        //         }px`
        //     }
        // }

        // scrollAt = {
        //     ...scrollAt,
        //     [firstQuestion.id]: 0,
        // }

        // opacityEl = {
        //     ...opacityEl,
        //     [firstQuestion.id]: 1,
        // }

        let observerOptions = {
            rootMargin: '0px',
            threshold: [0.35, 0.85],
        }

        var observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        )

        let target = '.question-group'
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
                entry.intersectionRatio >= 0.3 &&
                isScrollDown &&
                entry.isIntersecting
            ) {
                //do something
                addAnimation(entry.target.id)

                questionPos = {
                    ...questionPos,
                    [entry.target.id]: 0,
                }
            }
        })
    }

    const handleScroll = (e) => {
        let scrollTop = window.pageYOffset,
            containerStart = document.getElementById('container').offsetTop,
            currentScroll = scrollTop + screenHeight,
            scrollQ = currentScroll - containerStart //scroll start from outer question container

        if (prevScroll < scrollTop) {
            isScrollDown = true
        } else {
            isScrollDown = false
        }

        const groupPos = document.getElementById('question-group-1').offsetTop,
            groupHeight =
                document.getElementById('question-group-1').offsetHeight,
            groupVisiblePos = groupPos + groupHeight / 2

        const groupPos2 = document.getElementById('question-group-2').offsetTop,
            groupHeight2 =
                document.getElementById('question-group-2').offsetHeight,
            groupVisiblePos2 = groupPos2 + groupHeight2 / 2

        const groupPos3 = document.getElementById('question-group-3').offsetTop,
            groupHeight3 =
                document.getElementById('question-group-3').offsetHeight,
            groupVisiblePos3 = groupPos3 + groupHeight3 / 2

        //start animation when question group visibility on viewport meet this condiiton
        if (scrollQ >= groupVisiblePos) {
            questionPos['question-group-1'] = scrollQ - groupVisiblePos

            let qPosY = questionPos['question-group-1'] * 0.15,
                pPosY = questionPos['question-group-1'] * 0.1,
                pPosX = questionPos['question-group-1'] * 0.05

            document.getElementById(
                'question-1'
            ).style.transform = `translate3d(0,-${qPosY}px,0)`

            document.getElementById(
                'portrait-1'
            ).style.transform = `translate3d(${pPosX}px,-${pPosY}px,0`
        }

        if (scrollQ >= groupVisiblePos2) {
            questionPos['question-group-2'] = scrollQ - groupVisiblePos2
            let qPosY = questionPos['question-group-2'] * 0.15,
                pPosY = questionPos['question-group-2'] * 0.1,
                pPosX = questionPos['question-group-2'] * 0.05

            document.getElementById(
                'question-2'
            ).style.transform = `translate3d(0,-${qPosY}px,0)`

            document.getElementById(
                'portrait-2'
            ).style.transform = `translate3d(-${pPosX}px,-${pPosY}px,0`
            //kalau sebelah kanan position X axis nya minus
        }

        if (scrollQ >= groupVisiblePos3) {
            questionPos['question-group-3'] = scrollQ - groupVisiblePos3
            let qPosY = questionPos['question-group-3'] * 0.15,
                pPosY = questionPos['question-group-3'] * 0.1,
                pPosX = questionPos['question-group-3'] * 0.05

            document.getElementById(
                'question-3'
            ).style.transform = `translate3d(0,-${qPosY}px,0)`

            document.getElementById(
                'portrait-3'
            ).style.transform = `translate3d(${pPosX}px,-${pPosY}px,0`
        }

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
                className={`question-container ${isLoaded ? 'is-loaded' : ''}`}
                id="container"
            >
                {data &&
                    data.map((q, index) => (
                        <div
                            className={`question-group ${
                                (index + 1) % 2 == 0 ? 'item-even' : 'item-odd'
                            }`}
                            id={`question-group-${q.id}`}
                            key={q.id}
                        >
                            {/*
                            <div id={`bubble-${q.id}`} className="bubble">
                                <img
                                    src={`${assetDomain}${
                                        q.bubbleImg?.url ?? ''
                                    }`}
                                />
                            </div> */}
                            <div
                                className={`question-bubble question-bubble-${q.id}`}
                                id={`question-${q.id}`}
                            >
                                <img
                                    src={`${assetPrefix}/images/inpatient/question.png`}
                                />
                            </div>
                            <div
                                id={`portrait-${q.id}`}
                                className={`portrait portrait-${q.id}`}
                            >
                                <img
                                    src={`${assetPrefix}/images/inpatient/qp-${q.id}.png`}
                                />
                            </div>
                        </div>
                    ))}
            </div>
            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </div>
    )
}
