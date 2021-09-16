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
    viewTop = 0

const assetPrefix = process.env.config?.assetPrefix ?? ''

export default function ParallaxDesktop({ data }) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // let firstQuestion = ''
        // if (window) {
        //     window.addEventListener('scroll', handleScroll)

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
            threshold: [0.5, 0.75],
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
            // window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            console.log('entry.intersectionRatio', entry.intersectionRatio)
            if (entry.isIntersecting) {
                //do something
                onVisible(entry.target.id)
                console.log('MASUK OBS', entry)
                console.log('entry.isIntersecting', entry.isIntersecting)
            } else {
                onInvisible(entry.target.id)
            }
        })
    }

    const onInvisible = (id) => {
        const el = document.getElementById(id)
        el.classList.add('animate-fadeout')
        el.classList.remove('animate-fadein')
        console.log('INvisible', id)
    }

    const onVisible = (id) => {
        const el = document.getElementById(id)
        el.classList.add('animate-fadein')
        el.classList.remove('animate-fadeout')
        console.log('visible', id)
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
                            {/* <div
                                className="question-text"
                                id={`question-${q.id}`}
                            >
                                <span>{q.questionText}</span>
                            </div>
                            <div id={`bubble-${q.id}`} className="bubble">
                                <img
                                    src={`${assetDomain}${
                                        q.bubbleImg?.url ?? ''
                                    }`}
                                />
                            </div> */}
                            <div id={`portrait-${q.id}`} className="portrait">
                                <img
                                    src={`${assetPrefix}/images/inpatient/qp-1.png`}
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
