// import { useState, useEffect } from 'react'
// import HeroHeader from '../../components/hero-header'

// import styles from './styles'

// const questionsDummy = [
//     {
//         id: 'q1',
//         question: '../../images/parallax/question1.png',
//         questionWidth: 600,
//         bubble: '../../images/parallax/bubble1.png',
//     },
//     {
//         id: 'q2',
//         question: '../../images/parallax/question2.png',
//         questionWidth: 400,
//         bubble: '../../images/parallax/bubble2.png',
//         initialPositition: 'translate3d(-400px, 100px, 0px)',
//     },
//     {
//         id: 'q3',
//         question: '../../images/parallax/question3.png',
//         questionWidth: 600,
//         bubble: '../../images/parallax/bubble3.png',
//     },
//     {
//         id: 'q4',
//         question: '../../images/parallax/question4.png',
//         questionWidth: 600,
//         bubble: '../../images/parallax/bubble4.png',
//     },
// ]

// let heroHeight = 400,
//     screenWidth = 1440,
//     questionLeaveId = '',
//     scrollDistance = 0,
//     distanceToTwo = 450

// export default function WhatIf({ location }) {
//     const [isMobile, setIsMobile] = useState(false)
//     // const [questionLeave, setQuestionLeave] = useState(null)

//     useEffect(() => {
//         if (window) {
//             window.addEventListener('scroll', handleScroll)
//         }

//         if (document) {
//             heroHeight = document.getElementById('hero').offsetHeight
//             screenWidth = screen.width

//             // let div1 = document.querySelector('#q1')
//             // let div2 = document.querySelector('#q2')

//             // // Create an observer for each one
//             // createIntersectionObserver(div1, intersectionCallback, options)

//             // // This uses the same callback, but no options
//             // createIntersectionObserver(div2, intersectionCallback, options)
//         }

//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     /**
//      * Create an intersection observer
//      * @param  {Node}     elem     The element to observe
//      * @param  {Function} callback The callback function to run
//      * @param  {Object}   options  The options, if any
//      */
//     const createIntersectionObserver = (elem, callback, options) => {
//         let observer = new IntersectionObserver(callback, options || {})
//         observer.observe(elem)
//         return observer
//     }

//     /**
//      * intersectionCallback the entry and if it's in the viewport
//      * @param  {Array} entries The intersecting elements
//      */
//     const intersectionCallback = (entries) => {
//         let [entry] = entries
//         // console.log('entries', entries)
//         // console.log('target', entry.target)
//         // console.log('id', entry.target.id)
//         // console.log('inter', entry.isIntersecting)
//         // console.log('intersectionRatio', entry.intersectionRatio)
//         if (!entry.isIntersecting) {
//             console.log('K ESINI GA SIH')
//             questionLeaveId = entry.target.id
//         }
//     }

//     // Setup our observer options
//     let options = {
//         root: null,
//         rootMargin: '-100px',
//         threshold: [0.7],
//     }

//     // The elements to observe

//     const animateQuestionOne = (scrollTop) => {
//         const middle = (screenWidth - 600) / 2,
//             middleB = (screenWidth - 500) / 2,
//             scrollLeftQ = middle + scrollTop * 0.2,
//             scrollLeftB = middleB + scrollTop * 0.4,
//             leftPosQ = scrollLeftQ <= middle ? middle : scrollLeftQ,
//             leftPosB = scrollLeftB <= middleB ? middleB : scrollLeftB
//         // console.log('middle', middle)
//         // console.log('scrollLeftQ', scrollLeftQ)
//         // console.log('leftPos', leftPosQ)
//         document.getElementById(
//             'q1'
//         ).style.transform = `translate3d(${leftPosQ}px, 0px, 0)`
//         document.getElementById(
//             'bubble1'
//         ).style.transform = `translate3d(${leftPosB}px, 0px, 0)`
//     }

//     const animateQuestionTwo = (scrollTop) => {
//         console.log('masuk', scrollTop, distanceToTwo)
//         // translate3d(-400px, 200px, 0px)
//         const leftPosQStart = -300,
//             leftPosQEnd = -400,
//             // middleB = 0,
//             scrollLeftQ =
//                 scrollTop > distanceToTwo
//                     ? leftPosQStart + scrollTop * 0.5
//                     : leftPosQEnd,
//             topPosQ = 100,
//             scrollTopQ =
//                 scrollTop > distanceToTwo ? topPosQ - scrollTop * 0.1 : topPosQ
//         // scrollLeftB = middleB + scrollTop * 0.03
//         // console.log('middle', middle)
//         // console.log('scrollLeftQ', scrollLeftQ)
//         console.log('scrollTopQ', scrollTopQ)
//         document.getElementById(
//             'q2'
//         ).style.transform = `translate3d(${scrollLeftQ}px, ${scrollTopQ}px, 0)`
//         // document.getElementById(
//         //     'bubble2'
//         // ).style.transform = `translate3d(${scrollLeftB}px, 0px, 10px)`
//     }
//     const handleScroll = (e) => {
//         let scrollTop = window.pageYOffset
//         scrollDistance = scrollTop
//         animateQuestionOne(scrollTop)

//         animateQuestionTwo(scrollTop)

//         // translate3d(200px, 400px, 10px)
//         // console.log('scrollTop', scrollTop)
//     }

//     return (
//         <div>
//             <HeroHeader />
//             <div className="content">
//                 {questionsDummy.map((q, index) => (
//                     <div id={`q${index + 1}-container`} className="q-container">
//                         <img
//                             src={q.question}
//                             id={`q${index + 1}`}
//                             style={{
//                                 width: `${q.questionWidth}px`,
//                                 transform: `${q.initialPositition || null}`,
//                             }}
//                             className="q-img"
//                         />
//                         <img src={q.bubble} id={`bubble${index + 1}`} />
//                     </div>
//                 ))}
//             </div>
//             <div>Footer</div>
//             <style jsx>{styles}</style>
//         </div>
//     )
// }

import { useState, useEffect } from 'react'
import HeroHeader from '../../components/hero-header'

import styles from './styles'

const questionsDummy = [
    {
        id: 'q1',
        questionText: '"What if my health condition changes?"',
        questionTextOne: '"What if my health',
        questionTextTwo: 'condition changes?"',
        bubble: '../../images/parallax/bubble1.png',
        bubbleId: 'bubble1',
        portrait: '../../images/parallax/portrait-01.png',
        portraitId: 'portrait1',
    },
    {
        id: 'q2',
        questionText: `"It's common to get lung cancer. What if i already get one?"`,
        questionTextOne: `"It's common to get lung cancer.`,
        questionTextTwo: 'What if i already get one?"',
        bubble: '../../images/parallax/bubble2.png',
        bubbleId: 'bubble2',
        portrait: '../../images/parallax/portrait-02.png',
        portraitId: 'portrait2',
    },
    {
        id: 'q3',
        questionText:
            '"I lost my sight at 30. What if the same thing happen to you?"',
        questionTextOne: `"I lost my sight at 30. What if the`,
        questionTextTwo: 'same thing happen to you?"',
        bubble: '../../images/parallax/bubble3.png',
        bubbleId: 'bubble3',
        portrait: '../../images/parallax/portrait-03.png',
        portraitId: 'portrait3',
    },
    {
        id: 'q4',
        questionText: '"I wish I had insurance"',
        questionTextOne: `"I lost my sight at 30. What if the`,
        questionTextTwo: 'same thing happen to you?"',
        bubble: '../../images/parallax/bubble1.png',
        bubbleId: 'bubble4',
        portrait: '../../images/parallax/portrait-01.png',
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
    scrollGap = 100

export default function WhatIf({ location }) {
    const [isMobile, setIsMobile] = useState(false)
    // const [questionLeave, setQuestionLeave] = useState(null)

    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', handleScroll)
        }

        let firstQuestion = ''
        if (window) {
            heroHeight = document.getElementById('hero')?.offsetHeight ?? 0
            screenWidth = window.innerWidth
            screenHeight = window.innerHeight
            topDistance = (screenHeight - marginTop) / 4 //jarak dari middle ke 1/4 screen

            firstQuestion =
                questionsDummy && questionsDummy.length > 0
                    ? questionsDummy[0]
                    : null
            if (firstQuestion) {
                setElementPosition(firstQuestion.id)
                setElementPortraitPosition(firstQuestion.portraitId)
                document
                    .getElementById(firstQuestion.portraitId)
                    .classList.add('animate-portrait')

                document
                    .getElementById(firstQuestion.id)
                    .classList.add('animate-text')

                setElementBubblePosition(firstQuestion.bubbleId)
                document
                    .getElementById(firstQuestion.bubbleId)
                    .classList.add('animate-bubble')
            }
            //posisi question ambil dari tengah2 (screen height /2 ), dikurangin height question
            // document.getElementById('q1').style.transform = `translate()`
        }

        scrollAt = {
            ...scrollAt,
            [firstQuestion]: 0,
        }
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const setElementPosition = (id, scrollAt = 0) => {
        const height = document.querySelector(`#${id} > span`).offsetHeight,
            elPosition = (screenHeight - marginTop - height) / 2 + scrollAt
        document.getElementById(id).style.top = `${elPosition}px`

        return elPosition
    }

    const setElementPortraitPosition = (id, scrollAt = 0) => {
        const cleanHeight = screenHeight - marginTop
        const imgHeight = (cleanHeight * 70) / 100
        document.getElementById(id).style.height = `${imgHeight}px`
        const imgTop = cleanHeight - imgHeight + scrollAt
        document.getElementById(id).style.top = `${imgTop}px`
    }

    const setElementBubblePosition = (id, scrollAt = 0) => {
        const cleanHeight = screenHeight - marginTop
        const imgHeight = (cleanHeight * 88) / 100
        document.getElementById(id).style.height = `${imgHeight}px`

        const imgTop = (cleanHeight * 11) / 100 + scrollAt
        document.getElementById(id).style.top = `${imgTop}px`
    }

    const animateQuestionOne = (scrollTop) => {
        // console.log('topDistance', topDistance, ' res', 0.84 / topDistance)
        const x = scrollTop * (0.85 / topDistance), //0.007,
            opacity = 1.2 - Math.abs(x)
        // console.log('opacity', opacity)
        document.getElementById('q1').style.opacity = opacity
        document.getElementById('portrait1').style.opacity = opacity
        document.getElementById('bubble1').style.opacity = opacity

        return opacity
    }

    const animateQuestionTwo = (scrollTop, scrollAt) => {
        const x = (scrollTop - scrollAt) * (0.85 / topDistance), //0.007,
            opacity = 1.2 - Math.abs(x)
        // const x = (scrollTop - topDistance * 2) * (0.80 / topDistance), //0.007,
        // console.log('scrollDistance masuk', scrollDistance)
        console.log('opacity two', opacity)
        document.getElementById('q2').style.opacity = opacity
        document.getElementById('portrait2').style.opacity = opacity
        document.getElementById('bubble2').style.opacity = opacity

        return opacity
    }

    const animateQuestionThree = (scrollTop, scrollAt) => {
        const x = (scrollTop - scrollAt) * (0.85 / topDistance), //0.007,
            opacity = 1.2 - Math.abs(x)
        console.log('scrollDistance', x)
        // console.log('opacity', opacity)
        console.log('opacity three', opacity)
        document.getElementById('q3').style.opacity = opacity
        document.getElementById('portrait3').style.opacity = opacity
        document.getElementById('bubble3').style.opacity = opacity

        return opacity
    }

    const animateQuestionFour = (scrollTop, scrollAt) => {
        const x = (scrollTop - scrollAt) * (0.85 / topDistance), //0.007,
            opacity = 1.2 - Math.abs(x)
        // console.log('scrollDistance', x)
        // console.log('opacity', opacity)
        document.getElementById('q4').style.opacity = opacity
        document.getElementById('portrait4').style.opacity = opacity
        document.getElementById('bubble4').style.opacity = opacity

        return opacity
    }
    const animateQuestion = (id, scrollTop, scrollAt = 0) => {
        const x = scrollTop * (0.85 / topDistance),
            opacity = 1.2 - Math.abs(x)
        document.getElementById('q1').style.opacity = opacity
        document.getElementById('portrait1').style.opacity = opacity
        document.getElementById('bubble1').style.opacity = opacity

        return opacity
    }

    let q2ScrollAt = 0,
        q3ScrollAt = 0,
        q4ScrollAt = 0,
        q2ScrollGap = 0,
        q3ScrollGap = 0,
        q4ScrollGap = 0

    const showElement = (id) => {
        if (
            scrollAt &&
            (scrollAt[id] == 0 || typeof scrollAt[id] == 'undefined')
        ) {
            scrollAt = {
                ...scrollAt,
                [id]: scrollTop,
            }
        }
        const gap = scrollAt[id] + 100
        setElementPosition(id, gap)

        document.getElementById(id).style.bottom = 'auto'
        document.getElementById(id).classList.add('question-show')
    }

    const handleScroll = (e) => {
        let scrollTop = window.pageYOffset

        console.log('scrollTop', scrollTop)
        const opacityOne = animateQuestionOne(scrollTop)
        let opacityTwo, opacityThree, opacityFour

        questionsDummy.map((q) => {})
        if (opacityOne < 0.18) {
            // showElement()
            if (q2ScrollAt == 0) q2ScrollAt = scrollTop
            q2ScrollGap = q2ScrollAt + 100
            setElementPosition('q2', q2ScrollGap)
            setElementPortraitPosition('portrait2', q2ScrollGap)
            document.getElementById('portrait2').style.bottom = 'auto'
            document.getElementById('portrait2').classList.add('question-show')
            document.getElementById('q2').style.bottom = 'auto'
            document
                .getElementById('q2')
                .classList.add('question-show', 'animate-text')
            document
                .getElementById('portrait2')
                .classList.add('animate-portrait')

            setElementBubblePosition('bubble2', q2ScrollGap)
            document.getElementById('bubble2').style.bottom = 'auto'
            document
                .getElementById('bubble2')
                .classList.add('question-show', 'animate-bubble')
        }

        opacityTwo = animateQuestionTwo(scrollTop, q2ScrollGap)

        if (opacityOne < 0.18 && opacityTwo < 0.18) {
            if (q3ScrollAt == 0) q3ScrollAt = scrollTop
            q3ScrollGap = q3ScrollAt + 100
            setElementPosition('q3', q3ScrollGap)
            setElementPortraitPosition('portrait3', q3ScrollGap)

            document.getElementById('portrait3').style.bottom = 'auto'
            document.getElementById('portrait3').classList.add('question-show')
            document.getElementById('q3').style.bottom = 'auto'
            document
                .getElementById('q3')
                .classList.add('question-show', 'animate-text')
            document
                .getElementById('portrait3')
                .classList.add('animate-portrait')

            setElementBubblePosition('bubble3', q3ScrollGap)
            document.getElementById('bubble3').style.bottom = 'auto'
            document
                .getElementById('bubble3')
                .classList.add('question-show', 'animate-bubble')
        }

        opacityThree = animateQuestionThree(scrollTop, q3ScrollGap)

        if (opacityOne < 0.18 && opacityTwo < 0.18 && opacityThree < 0.18) {
            if (q4ScrollAt == 0) q4ScrollAt = scrollTop
            q4ScrollGap = q4ScrollAt + 100
            setElementPosition('q4', q4ScrollGap)
            setElementPortraitPosition('portrait4', q4ScrollGap)

            document.getElementById('portrait4').style.bottom = 'auto'
            document.getElementById('portrait4').classList.add('question-show')
            document.getElementById('q4').style.bottom = 'auto'
            document
                .getElementById('q4')
                .classList.add('question-show', 'animate-text')
            document
                .getElementById('portrait4')
                .classList.add('animate-portrait')

            setElementBubblePosition('bubble4', q4ScrollGap)
            document.getElementById('bubble4').style.bottom = 'auto'
            document
                .getElementById('bubble4')
                .classList.add('question-show', 'animate-text')
        }
        opacityFour = animateQuestionFour(scrollTop, q4ScrollGap)
    }

    return (
        <div className="content">
            <div className="question-container">
                {questionsDummy.map((q, index) => (
                    <>
                        {/* <img
                            src={q.question}
                            id={`q${index + 1}`}
                            style={{
                                width: `${q.questionWidth}px`,
                                transform: `${q.initialPositition || null}`,
                            }}
                            className="q-img"
                        /> */}
                        <div className="question-text" id={q.id}>
                            <span>{q.questionText}</span>
                            {/* <div>{q.questionTextOne}</div>
                            <div> {q.questionTextTwo}</div> */}
                        </div>
                        <img
                            src={q.bubble}
                            id={q.bubbleId}
                            className="bubble"
                        />
                        <img
                            src={q.portrait}
                            id={q.portraitId}
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
