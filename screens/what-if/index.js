import { useState, useEffect } from 'react'
import HeroHeader from '../../components/hero-header'
import styles from './styles'

const questionsDummy = [
    {
        id: '1',
        questionText: '"What if my health condition changes?"',
        questionTextOne: '"What if my health',
        questionTextTwo: 'condition changes?"',
        bubbleImg: '../../images/parallax/bubble1.png',
        bubbleId: 'bubble1',
        portraitImg: '../../images/parallax/portrait-01.png',
        portraitId: 'portrait1',
    },
    {
        id: '2',
        questionText: `"It's common to get lung cancer. What if i already get one?"`,
        questionTextOne: `"It's common to get lung cancer.`,
        questionTextTwo: 'What if i already get one?"',
        bubbleImg: '../../images/parallax/bubble2.png',
        bubbleId: 'bubble2',
        portraitImg: '../../images/parallax/portrait-02.png',
        portraitId: 'portrait2',
    },
    {
        id: '3',
        questionText:
            '"I lost my sight at 30. What if the same thing happen to you?"',
        questionTextOne: `"I lost my sight at 30. What if the`,
        questionTextTwo: 'same thing happen to you?"',
        bubbleImg: '../../images/parallax/bubble3.png',
        bubbleId: 'bubble3',
        portraitImg: '../../images/parallax/portrait-03.png',
        portraitId: 'portrait3',
    },
    {
        id: '4',
        questionText: '"I wish I had insurance"',
        questionTextOne: `"I lost my sight at 30. What if the`,
        questionTextTwo: 'same thing happen to you?"',
        bubbleImg: '../../images/parallax/bubble1.png',
        bubbleId: 'bubble4',
        portraitImg: '../../images/parallax/portrait-01.png',
        portraitId: 'portrait4',
    },
]

let heroHeight = 400,
    screenWidth = 1440,
    screenHeight = 700,
    questionLeaveId = '',
    scrollDistance = 0,
    distanceToTwo = 450,
    topDistance = 0,
    marginTop = 80,
    scrollAt = {},
    opacityEl = {},
    scrollGap = 100

export default function WhatIf({ location }) {
    const [isMobile, setIsMobile] = useState(false)
    // const [questionLeave, setQuestionLeave] = useState(null)

    // useUnload((e) => {
    //     window.scrollTo(0, 0)
    // })

    useEffect(() => {
        if (window) {
        }

        let firstQuestion = ''
        if (window) {
            window.addEventListener('scroll', handleScroll)
            // setTimeout(function(){ alert("Hello"); }, 3000);
            window.scrollTo(0, 0)
            heroHeight = document.getElementById('hero')?.offsetHeight ?? 0
            screenWidth = window.innerWidth
            screenHeight = window.innerHeight
            topDistance = (screenHeight - marginTop) / 4 //jarak dari middle ke 1/4 screen

            firstQuestion =
                questionsDummy && questionsDummy.length > 0
                    ? questionsDummy[0]
                    : null
            if (firstQuestion) {
                setTextPosition(`question-${firstQuestion.id}`)
                setPortraitPosition(`portrait-${firstQuestion.id}`)
                setBubblePosition(`bubble-${firstQuestion.id}`)
                addAnimation(firstQuestion.id)
                setOpacity(firstQuestion.id)
            }
            //posisi question ambil dari tengah2 (screen height /2 ), dikurangin height question
            // document.getElementById('q1').style.transform = `translate()`
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
            elPosition = (screenHeight - marginTop - height) / 2 + scrollAt
        document.getElementById(id).style.top = `${elPosition}px`
        document.getElementById(id).style.bottom = 'auto'
        document.getElementById(id).classList.add('is-show', 'animate-text')
    }

    const setPortraitPosition = (id, scrollAt = 0) => {
        const cleanHeight = screenHeight - marginTop
        const imgHeight = (cleanHeight * 87) / 100
        document.getElementById(id).style.height = `${imgHeight}px`
        const imgTop = cleanHeight - imgHeight + 50 + scrollAt
        document.getElementById(id).style.top = `${imgTop}px`
        document.getElementById(id).style.bottom = 'auto'
        document.getElementById(id).classList.add('is-show', 'animate-portrait')
    }

    const setBubblePosition = (id, scrollAt = 0) => {
        const cleanHeight = screenHeight - marginTop
        const imgHeight = (cleanHeight * 88) / 100
        document.getElementById(id).style.height = `${imgHeight}px`

        const imgTop = (cleanHeight * 11) / 100 + scrollAt
        document.getElementById(id).style.top = `${imgTop}px`
        document.getElementById(id).style.bottom = 'auto'
        document.getElementById(id).classList.add('is-show', 'animate-bubble')
    }
    const animateQuestion = (id, scrollTop, scrollAt = 0) => {
        const x = (scrollTop - scrollAt) * (0.85 / topDistance), //0.007,
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
        questionsDummy.map((q) => {
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

            if (checkOpacity && q.id < questionsDummy.length) {
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

            if (opacityEl[q.id] < 0 && q.id == questionsDummy.length) {
                resetAnimation(q.id)
            }
        })
    }

    return (
        <div className="content">
            <div className="question-container">
                {questionsDummy.map((q) => (
                    <>
                        <div className="question-text" id={`question-${q.id}`}>
                            <span>{q.questionText}</span>
                        </div>
                        <img
                            src={q.bubbleImg}
                            id={`bubble-${q.id}`}
                            className="bubble"
                        />
                        <img
                            src={q.portraitImg}
                            id={`portrait-${q.id}`}
                            className="portrait"
                        />
                    </>
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
        </div>
    )
}
