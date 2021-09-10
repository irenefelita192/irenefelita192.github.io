import { Fragment, useState, useEffect } from 'react'
import globalStyles from '../global-styles'
import styles from './styles'

let heroHeight = 400,
    screenWidth = 1440,
    screenHeight = 700,
    topDistance = 0,
    marginTop = 80,
    scrollAt = {},
    opacityEl = {},
    scrollGap = 100

export default function ParallaxMobile({ location, data }) {
    useEffect(() => {
        let firstQuestion = ''
        if (window) {
            window.addEventListener('scroll', handleScroll)
            // setTimeout(function(){ alert("Hello"); }, 3000);
            window.scrollTo(0, 0)
            heroHeight = document.getElementById('hero')?.offsetHeight ?? 0
            screenWidth = window.innerWidth
            screenHeight = window.innerHeight
            topDistance = (screenHeight - marginTop) / 5 //jarak dari middle ke 1/4 screen

            firstQuestion = data && data.length > 0 ? data[0] : null
            if (firstQuestion) {
                setTextPosition(`question-${firstQuestion.id}`)
                setPortraitPosition(`portrait-${firstQuestion.id}`)
                setBubblePosition(`bubble-${firstQuestion.id}`)
                addAnimation(firstQuestion.id)
                setOpacity(firstQuestion.id)
            }

            document.getElementById(`container`).style.height = `${
                (screenHeight / 2) * data.length + marginTop
            }px`
        }

        //nanti sort questionnya dari id terkecil, siapa tau ga urut

        scrollAt = {
            ...scrollAt,
            [firstQuestion.id]: 0,
        }

        opacityEl = {
            ...opacityEl,
            [firstQuestion.id]: 1,
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const setOpacity = (id) => {
        document.getElementById(`question-${id}`).style.opacity = 1.2
        document.getElementById(`portrait-${id}`).style.opacity = 1.2
        document.getElementById(`bubble-${id}`).style.opacity = 1.2
    }

    const setTextPosition = (id, scrollAt = 0) => {
        const height = document.querySelector(`#${id} > span`).offsetHeight,
            elPosition = (screenHeight - marginTop - height) / 5 + scrollAt

        const el = document.getElementById(id)
        el.style.top = `${elPosition}px`
        el.style.bottom = 'auto'
        el.classList.add('is-show', 'animate-text')
    }

    const setPortraitPosition = (id, scrollAt = 0) => {
        const cleanHeight = screenHeight - marginTop
        const imgHeight = (cleanHeight * 55) / 100
        const el = document.getElementById(id)
        const imgTop = cleanHeight - imgHeight + scrollAt
        el.style.height = `${imgHeight}px`
        const imgEl = document.querySelector(`#${id} > img`)
        if (imgEl.complete) {
            const imgWidth =
                (imgEl.naturalWidth / imgEl.naturalHeight) * imgHeight

            el.style.width = `${imgWidth}px`
            const leftPos = (screenWidth - imgWidth) / 2
            el.style.left = `${leftPos}px`
        } else {
            imgEl.onload = () => {
                const imgWidth =
                    (imgEl.naturalWidth / imgEl.naturalHeight) * imgHeight
                el.style.width = `${imgWidth}px`
                const leftPos = (screenWidth - imgWidth) / 2
                el.style.left = `${leftPos}px`
            }
        }
        el.style.top = `${imgTop}px`
        el.style.bottom = 'auto'
        el.classList.add('is-show', 'animate-portrait')
    }

    const setBubblePosition = (id, scrollAt = 0) => {
        const cleanHeight = screenHeight - marginTop
        const imgHeight = (cleanHeight * 65) / 100
        const el = document.getElementById(id)
        el.style.height = `${imgHeight}px`
        const imgTop = cleanHeight - imgHeight + 50 + scrollAt
        const imgEl = document.querySelector(`#${id} > img`)
        if (imgEl.complete) {
            const imgWidth =
                (imgEl.naturalWidth / imgEl.naturalHeight) * imgHeight

            el.style.width = `${imgWidth}px`
            const leftPos = (screenWidth - imgWidth) / 2
            el.style.left = `${leftPos}px`
        } else {
            imgEl.onload = () => {
                const imgWidth =
                    (imgEl.naturalWidth / imgEl.naturalHeight) * imgHeight
                el.style.width = `${imgWidth}px`
                const leftPos = (screenWidth - imgWidth) / 2
                el.style.left = `${leftPos}px`
            }
        }

        el.style.top = `${imgTop}px`
        el.style.bottom = 'auto'
        el.classList.add('is-show', 'animate-bubble')
    }

    const animateQuestion = (id, scrollTop, scrollAt = 0) => {
        const x = (scrollTop - scrollAt) * (0.7 / topDistance), //0.007,
            opacity = 1.2 - Math.abs(x)
        // console.log('scrollDistance', x)
        // console.log('opacity', opacity)
        document.getElementById(`question-${id}`).style.opacity = opacity
        document.getElementById(`portrait-${id}`).style.opacity = opacity
        document.getElementById(`bubble-${id}`).style.opacity = opacity

        return opacity
    }

    const resetAnimation = (id) => {
        document
            .getElementById(`question-${id}`)
            .classList.remove('animate-text')
        document
            .getElementById(`portrait-${id}`)
            .classList.remove('animate-portrait')
        document
            .getElementById(`bubble-${id}`)
            .classList.remove('animate-bubble')
    }

    const addAnimation = (id) => {
        document.getElementById(`question-${id}`).classList.add('animate-text')
        document
            .getElementById(`portrait-${id}`)
            .classList.add('animate-portrait')
        document.getElementById(`bubble-${id}`).classList.add('animate-bubble')
    }

    const handleScroll = (e) => {
        let scrollTop = window.pageYOffset

        // console.log('scrollTop', scrollTop)
        /** start **/
        data.map((q) => {
            // console.log('==q==', q.id)
            let currentScrollAt = 0
            if (typeof scrollAt[q.id] !== 'undefined')
                currentScrollAt = scrollAt[q.id]
            const opacity = animateQuestion(
                q.id,
                scrollTop,
                q.id == 1 ? 0 : currentScrollAt + scrollGap
            )
            opacityEl = {
                ...opacityEl,
                [q.id]: opacity,
            }
            let checkOpacity = true
            for (var i = 1; i <= q.id; i++) {
                checkOpacity =
                    checkOpacity &&
                    opacityEl[i] < 0.18 &&
                    typeof opacityEl[i] !== 'undefined'
            }

            if (checkOpacity && q.id < data.length) {
                let qId = 1,
                    nextId = 2

                if (!isNaN(q.id)) {
                    qId = parseInt(q.id)
                    nextId = qId + 1
                }

                if (
                    scrollAt[nextId] == 0 ||
                    typeof scrollAt[nextId] === 'undefined'
                ) {
                    scrollAt = {
                        ...scrollAt,
                        [nextId]: scrollTop,
                    }
                }

                setTextPosition(
                    `question-${nextId}`,
                    scrollAt[nextId] + scrollGap
                )
                setPortraitPosition(
                    `portrait-${nextId}`,
                    scrollAt[nextId] + scrollGap
                )
                setBubblePosition(
                    `bubble-${nextId}`,
                    scrollAt[nextId] + scrollGap
                )

                if (opacityEl[q.id] < 0) {
                    resetAnimation(q.id)
                }
            } else if (q.id == 1) {
                addAnimation(q.id)
            }

            if (opacityEl[q.id] < 0 && q.id == data.length) {
                resetAnimation(q.id)
            }
        })
    }

    return (
        <div className="content">
            <div className="question-container" id="container">
                {data &&
                    data.map((q) => (
                        <Fragment key={q.id}>
                            <div
                                className="question-text"
                                id={`question-${q.id}`}
                            >
                                <span>{q.questionText}</span>
                            </div>
                            <div id={`bubble-${q.id}`} className="bubble">
                                <img src={q.bubbleImg} />
                            </div>
                            <div id={`portrait-${q.id}`} className="portrait">
                                <img src={q.portraitImg} />
                            </div>
                        </Fragment>
                    ))}
            </div>
            <div className="bottom-section">
                <div>It's good to think - just not too much</div>
                <div>
                    Will you take a better chance to control your health
                    journey?
                </div>
            </div>
            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </div>
    )
}
