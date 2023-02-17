import Layout from 'components/layout'
import { useState, useEffect } from 'react'
import Switch from 'react-switch'

export default function Home() {
    const [showRain, setShowRain] = useState(false)
    const [showCloud, setShowCloud] = useState(false)
    const [showSun, setShowSun] = useState(false)

    function changeColor(cname, color, resetColor) {
        const hairEls = document.getElementsByClassName(cname)
        for (var i = 0; i < hairEls.length; i++) {
            hairEls[i].style.fill = color || resetColor
        }
    }

    function handleChangeCloud(checked) {
        // this.setState({ checked });
        setShowCloud(checked)
    }

    function handleChangeRain(checked) {
        // this.setState({ checked });
        setShowRain(checked)
    }

    function handleChangeSun(checked) {
        // this.setState({ checked });
        setShowSun(checked)
    }

    return (
        <Layout>
            <div className="wrapper">
                <div className={`${showSun ? 'show' : 'hide'} sun`}>
                    <img src="/images/sun.png" />
                </div>
                <div className={showRain ? 'show' : 'hide'}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                            marginLeft: '0',
                            background: 'rgba(255, 255, 255, 0)',
                            display: 'block',
                            zIndex: '10',
                            position: 'absolute',
                            top: 0,
                        }}
                        width="600"
                        height="500"
                        preserveAspectRatio="xMidYMid"
                        viewBox="0 0 600 322"
                    >
                        <defs>
                            <pattern
                                id="pid-0.506827507265025"
                                x="0"
                                y="0"
                                width="163.84"
                                height="163.84"
                                patternUnits="userSpaceOnUse"
                            >
                                <g transform="scale(0.64)">
                                    <g>
                                        <line
                                            x1="173.7548275403515"
                                            x2="146.12796566823064"
                                            y1="215.74576686493995"
                                            y2="243.3726287370608"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="173.7548275403515"
                                            x2="146.12796566823064"
                                            y1="-296.2542331350601"
                                            y2="-268.62737126293916"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="429.75482754035147"
                                            x2="402.1279656682307"
                                            y1="-296.2542331350601"
                                            y2="-268.62737126293916"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="685.7548275403515"
                                            x2="658.1279656682307"
                                            y1="-296.2542331350601"
                                            y2="-268.62737126293916"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="173.7548275403515"
                                            x2="146.12796566823064"
                                            y1="-40.25423313506005"
                                            y2="-12.627371262939192"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="429.75482754035147"
                                            x2="402.1279656682307"
                                            y1="-40.25423313506005"
                                            y2="-12.627371262939192"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="685.7548275403515"
                                            x2="658.1279656682307"
                                            y1="-40.25423313506005"
                                            y2="-12.627371262939192"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="173.7548275403515"
                                            x2="146.12796566823064"
                                            y1="215.74576686493995"
                                            y2="243.3726287370608"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="429.75482754035147"
                                            x2="402.1279656682307"
                                            y1="215.74576686493995"
                                            y2="243.3726287370608"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="685.7548275403515"
                                            x2="658.1279656682307"
                                            y1="215.74576686493995"
                                            y2="243.3726287370608"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="49.56981564317956"
                                            x2="35.486162437692805"
                                            y1="228.24872758225322"
                                            y2="242.33238078774"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="49.56981564317956"
                                            x2="35.486162437692805"
                                            y1="-283.7512724177468"
                                            y2="-269.66761921226"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="305.56981564317954"
                                            x2="291.4861624376928"
                                            y1="-283.7512724177468"
                                            y2="-269.66761921226"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="561.5698156431796"
                                            x2="547.4861624376928"
                                            y1="-283.7512724177468"
                                            y2="-269.66761921226"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="49.56981564317956"
                                            x2="35.486162437692805"
                                            y1="-27.751272417746776"
                                            y2="-13.667619212260007"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="305.56981564317954"
                                            x2="291.4861624376928"
                                            y1="-27.751272417746776"
                                            y2="-13.667619212260007"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="561.5698156431796"
                                            x2="547.4861624376928"
                                            y1="-27.751272417746776"
                                            y2="-13.667619212260007"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="49.56981564317956"
                                            x2="35.486162437692805"
                                            y1="228.24872758225322"
                                            y2="242.33238078774"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="305.56981564317954"
                                            x2="291.4861624376928"
                                            y1="228.24872758225322"
                                            y2="242.33238078774"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="561.5698156431796"
                                            x2="547.4861624376928"
                                            y1="228.24872758225322"
                                            y2="242.33238078774"
                                            strokeWidth="2"
                                            stroke="#01cbe1"
                                            strokeLinecap="round"
                                        ></line>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0 0;-256 256"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="5s"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <line
                                            x1="44.423029496184924"
                                            x2="14.002319559193962"
                                            y1="194.40317084516255"
                                            y2="224.82388078215354"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="44.423029496184924"
                                            x2="14.002319559193962"
                                            y1="-317.59682915483745"
                                            y2="-287.17611921784646"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="300.42302949618494"
                                            x2="270.00231955919395"
                                            y1="-317.59682915483745"
                                            y2="-287.17611921784646"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="556.4230294961849"
                                            x2="526.002319559194"
                                            y1="-317.59682915483745"
                                            y2="-287.17611921784646"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="44.423029496184924"
                                            x2="14.002319559193962"
                                            y1="-61.59682915483745"
                                            y2="-31.176119217846463"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="300.42302949618494"
                                            x2="270.00231955919395"
                                            y1="-61.59682915483745"
                                            y2="-31.176119217846463"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="556.4230294961849"
                                            x2="526.002319559194"
                                            y1="-61.59682915483745"
                                            y2="-31.176119217846463"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="44.423029496184924"
                                            x2="14.002319559193962"
                                            y1="194.40317084516255"
                                            y2="224.82388078215354"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="300.42302949618494"
                                            x2="270.00231955919395"
                                            y1="194.40317084516255"
                                            y2="224.82388078215354"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="556.4230294961849"
                                            x2="526.002319559194"
                                            y1="194.40317084516255"
                                            y2="224.82388078215354"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="38.820170542307075"
                                            x2="25.85499066770617"
                                            y1="169.59570347014218"
                                            y2="182.56088334474308"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="38.820170542307075"
                                            x2="25.85499066770617"
                                            y1="-342.4042965298578"
                                            y2="-329.43911665525695"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="294.8201705423071"
                                            x2="281.85499066770615"
                                            y1="-342.4042965298578"
                                            y2="-329.43911665525695"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="550.8201705423071"
                                            x2="537.8549906677061"
                                            y1="-342.4042965298578"
                                            y2="-329.43911665525695"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="38.820170542307075"
                                            x2="25.85499066770617"
                                            y1="-86.40429652985782"
                                            y2="-73.43911665525692"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="294.8201705423071"
                                            x2="281.85499066770615"
                                            y1="-86.40429652985782"
                                            y2="-73.43911665525692"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="550.8201705423071"
                                            x2="537.8549906677061"
                                            y1="-86.40429652985782"
                                            y2="-73.43911665525692"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="38.820170542307075"
                                            x2="25.85499066770617"
                                            y1="169.59570347014218"
                                            y2="182.56088334474308"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="294.8201705423071"
                                            x2="281.85499066770615"
                                            y1="169.59570347014218"
                                            y2="182.56088334474308"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="550.8201705423071"
                                            x2="537.8549906677061"
                                            y1="169.59570347014218"
                                            y2="182.56088334474308"
                                            strokeWidth="2"
                                            stroke="#38e0f5"
                                            strokeLinecap="round"
                                        ></line>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0 0;-256 256"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="2.5s"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <line
                                            x1="235.44804563177578"
                                            x2="204.56821320297675"
                                            y1="193.48573830300958"
                                            y2="224.36557073180862"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="235.44804563177578"
                                            x2="204.56821320297675"
                                            y1="-318.5142616969904"
                                            y2="-287.6344292681914"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="491.4480456317758"
                                            x2="460.5682132029767"
                                            y1="-318.5142616969904"
                                            y2="-287.6344292681914"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="747.4480456317758"
                                            x2="716.5682132029767"
                                            y1="-318.5142616969904"
                                            y2="-287.6344292681914"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="235.44804563177578"
                                            x2="204.56821320297675"
                                            y1="-62.51426169699042"
                                            y2="-31.634429268191383"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="491.4480456317758"
                                            x2="460.5682132029767"
                                            y1="-62.51426169699042"
                                            y2="-31.634429268191383"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="747.4480456317758"
                                            x2="716.5682132029767"
                                            y1="-62.51426169699042"
                                            y2="-31.634429268191383"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="235.44804563177578"
                                            x2="204.56821320297675"
                                            y1="193.48573830300958"
                                            y2="224.36557073180862"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="491.4480456317758"
                                            x2="460.5682132029767"
                                            y1="193.48573830300958"
                                            y2="224.36557073180862"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="747.4480456317758"
                                            x2="716.5682132029767"
                                            y1="193.48573830300958"
                                            y2="224.36557073180862"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="54.89867589304974"
                                            x2="23.807526735721762"
                                            y1="122.92367841563386"
                                            y2="154.01482757296185"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="54.89867589304974"
                                            x2="23.807526735721762"
                                            y1="-389.07632158436616"
                                            y2="-357.98517242703815"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="310.89867589304976"
                                            x2="279.80752673572175"
                                            y1="-389.07632158436616"
                                            y2="-357.98517242703815"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="566.8986758930497"
                                            x2="535.8075267357218"
                                            y1="-389.07632158436616"
                                            y2="-357.98517242703815"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="54.89867589304974"
                                            x2="23.807526735721762"
                                            y1="-133.07632158436616"
                                            y2="-101.98517242703815"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="310.89867589304976"
                                            x2="279.80752673572175"
                                            y1="-133.07632158436616"
                                            y2="-101.98517242703815"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="566.8986758930497"
                                            x2="535.8075267357218"
                                            y1="-133.07632158436616"
                                            y2="-101.98517242703815"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="54.89867589304974"
                                            x2="23.807526735721762"
                                            y1="122.92367841563386"
                                            y2="154.01482757296185"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="310.89867589304976"
                                            x2="279.80752673572175"
                                            y1="122.92367841563386"
                                            y2="154.01482757296185"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <line
                                            x1="566.8986758930497"
                                            x2="535.8075267357218"
                                            y1="122.92367841563386"
                                            y2="154.01482757296185"
                                            strokeWidth="2"
                                            stroke="#a9f0f9"
                                            strokeLinecap="round"
                                        ></line>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0 0;-256 256"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="1.6666666666666665s"
                                        ></animateTransform>
                                    </g>
                                </g>
                            </pattern>
                        </defs>
                        <rect
                            x="0"
                            y="0"
                            width="1084"
                            height="322"
                            fill="url(#pid-0.506827507265025)"
                        ></rect>
                    </svg>
                </div>
                <div className={showCloud ? 'show' : 'hide'}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                            margin: 'auto',
                            background: 'rgba(255, 255, 255, 0)',
                            display: 'block',
                            zIndex: '1',
                            position: 'absolute',
                            left: '-165px',
                            top: '17px',
                        }}
                        width="800"
                        height="250"
                        preserveAspectRatio="xMidYMid"
                        viewBox="0 0 800 322"
                    >
                        <defs>
                            <pattern
                                id="pid-0.5326029251661022"
                                x="0"
                                y="0"
                                width="591.36"
                                height="591.36"
                                patternUnits="userSpaceOnUse"
                            >
                                <g transform="scale(2.31)">
                                    <g>
                                        <path
                                            d="M94.6,56.2c-1-4.2-3.7-7.6-7.2-9.5c1.6-1.7,2.7-4.1,2.7-6.7c0-5.4-4.4-9.7-9.7-9.7c-3.2,0-6.1,1.6-7.8,4 c-2.5-4.5-7.3-7.6-12.8-7.6c-3.4,0-6.4,1.1-8.9,3.1c-2.4-4.7-7.3-7.9-13-7.9c-5.6,0-10.5,3.2-12.9,7.8c-1.3-0.3-2.7-0.6-4.1-0.6 C12.1,29.1,5,36.1,5,44.9c0,6,3.4,11.3,8.3,13.9c-0.2,1.3-0.2,2.6,0.1,3.9c1.2,5.3,6.5,8.6,11.8,7.4c0.3-0.1,0.6-0.1,0.8-0.2 c2.9,6,9.6,9.5,16.4,8c5.5-1.3,9.6-5.5,10.9-10.6c2.8,1.3,6.1,1.7,9.4,1c1.8-0.4,3.4-1.1,4.8-2.1c3,5.7,9.6,9,16.2,7.5 C91.5,71.9,96.4,64,94.6,56.2z"
                                            fill="#55bedb"
                                            transform="translate(104.02770025611784, 191.04490272174644) scale(0.4066666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="50s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M94.6,56.2c-1-4.2-3.7-7.6-7.2-9.5c1.6-1.7,2.7-4.1,2.7-6.7c0-5.4-4.4-9.7-9.7-9.7c-3.2,0-6.1,1.6-7.8,4 c-2.5-4.5-7.3-7.6-12.8-7.6c-3.4,0-6.4,1.1-8.9,3.1c-2.4-4.7-7.3-7.9-13-7.9c-5.6,0-10.5,3.2-12.9,7.8c-1.3-0.3-2.7-0.6-4.1-0.6 C12.1,29.1,5,36.1,5,44.9c0,6,3.4,11.3,8.3,13.9c-0.2,1.3-0.2,2.6,0.1,3.9c1.2,5.3,6.5,8.6,11.8,7.4c0.3-0.1,0.6-0.1,0.8-0.2 c2.9,6,9.6,9.5,16.4,8c5.5-1.3,9.6-5.5,10.9-10.6c2.8,1.3,6.1,1.7,9.4,1c1.8-0.4,3.4-1.1,4.8-2.1c3,5.7,9.6,9,16.2,7.5 C91.5,71.9,96.4,64,94.6,56.2z"
                                            fill="#55bedb"
                                            transform="translate(-151.97229974388216, 191.04490272174644) scale(0.4066666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="50s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M85.3,55.6c0.3-1.1,0.5-2.2,0.6-3.4c0.5-8.5-6-15.7-14.5-16.2c-2.1-0.1-4.2,0.2-6,0.9c-1.5-8.9-9-16-18.4-16.5 C36.1,19.7,26.8,28,26.2,38.9c-0.1,1.1,0,2.3,0.1,3.3c-6.3,0.1-11.6,5-11.9,11.4c0,0.8,0,1.5,0.1,2.2c-0.3,0-0.5-0.1-0.8-0.1 C9.2,55.6,5.3,59,5,63.6s3.2,8.4,7.8,8.7c0.8,0,1.5,0,2.2-0.2c2.5,2.9,8,5.1,14.6,5.5c3.7,0.2,7.2-0.2,10-1.1 c1.7,1.8,4.3,3.1,7.3,3.2c4,0.2,7.5-1.6,9.3-4.3c2.1,1,4.6,1.7,7.4,1.9c4.5,0.3,8.6-1,11.1-3c2,1.7,4.6,2.8,7.6,3 C89,77.6,94.6,73,95,67C95.3,61.5,91.1,56.7,85.3,55.6z"
                                            fill="#55bedb"
                                            transform="translate(-272.286095532239, 163.70443571068114) scale(0.4066666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="50s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M85.3,55.6c0.3-1.1,0.5-2.2,0.6-3.4c0.5-8.5-6-15.7-14.5-16.2c-2.1-0.1-4.2,0.2-6,0.9c-1.5-8.9-9-16-18.4-16.5 C36.1,19.7,26.8,28,26.2,38.9c-0.1,1.1,0,2.3,0.1,3.3c-6.3,0.1-11.6,5-11.9,11.4c0,0.8,0,1.5,0.1,2.2c-0.3,0-0.5-0.1-0.8-0.1 C9.2,55.6,5.3,59,5,63.6s3.2,8.4,7.8,8.7c0.8,0,1.5,0,2.2-0.2c2.5,2.9,8,5.1,14.6,5.5c3.7,0.2,7.2-0.2,10-1.1 c1.7,1.8,4.3,3.1,7.3,3.2c4,0.2,7.5-1.6,9.3-4.3c2.1,1,4.6,1.7,7.4,1.9c4.5,0.3,8.6-1,11.1-3c2,1.7,4.6,2.8,7.6,3 C89,77.6,94.6,73,95,67C95.3,61.5,91.1,56.7,85.3,55.6z"
                                            fill="#55bedb"
                                            transform="translate(239.71390446776098, 163.70443571068114) scale(0.4066666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="50s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M85.3,55.6c0.3-1.1,0.5-2.2,0.6-3.4c0.5-8.5-6-15.7-14.5-16.2c-2.1-0.1-4.2,0.2-6,0.9c-1.5-8.9-9-16-18.4-16.5 C36.1,19.7,26.8,28,26.2,38.9c-0.1,1.1,0,2.3,0.1,3.3c-6.3,0.1-11.6,5-11.9,11.4c0,0.8,0,1.5,0.1,2.2c-0.3,0-0.5-0.1-0.8-0.1 C9.2,55.6,5.3,59,5,63.6s3.2,8.4,7.8,8.7c0.8,0,1.5,0,2.2-0.2c2.5,2.9,8,5.1,14.6,5.5c3.7,0.2,7.2-0.2,10-1.1 c1.7,1.8,4.3,3.1,7.3,3.2c4,0.2,7.5-1.6,9.3-4.3c2.1,1,4.6,1.7,7.4,1.9c4.5,0.3,8.6-1,11.1-3c2,1.7,4.6,2.8,7.6,3 C89,77.6,94.6,73,95,67C95.3,61.5,91.1,56.7,85.3,55.6z"
                                            fill="#55bedb"
                                            transform="translate(-16.286095532239017, 163.70443571068114) scale(0.4066666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="50s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#55bedb"
                                            transform="translate(172.62337882683727, 59.9471193373646) scale(0.4066666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="50s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#55bedb"
                                            transform="translate(-83.37662117316273, 59.9471193373646) scale(0.4066666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="50s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.1c0-7.9-5.6-14.5-13.1-15.9C82,45.4,82,44.7,82,44c0-12.3-10-22.3-22.3-22.3c-9.5,0-17.7,6-20.8,14.4 c-1.2-0.3-2.4-0.5-3.7-0.5c-7.6,0-13.8,5.9-14.3,13.3c-0.9-0.2-1.9-0.3-2.8-0.3c-7.2,0-13,5.8-13,13c0,4.8,2.6,9,6.5,11.2 c0,0.1,0,0.1,0,0.2c0,4.7,3.8,8.5,8.5,8.5c2.7,0,5.1-1.3,6.7-3.2c0.1,0,0.2,0,0.3,0h10.4c2.4,2,5.4,3.2,8.7,3.2s6.4-1.2,8.7-3.2h0.2 c3.3,3.8,8.2,6.2,13.6,6.2c5.6,0,10.7-2.6,14-6.6C89.6,76.2,95,69.8,95,62.1z"
                                            fill="#55bedb"
                                            transform="translate(42.28990902361585, 96.65553106348875) scale(0.4066666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="50s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.1c0-7.9-5.6-14.5-13.1-15.9C82,45.4,82,44.7,82,44c0-12.3-10-22.3-22.3-22.3c-9.5,0-17.7,6-20.8,14.4 c-1.2-0.3-2.4-0.5-3.7-0.5c-7.6,0-13.8,5.9-14.3,13.3c-0.9-0.2-1.9-0.3-2.8-0.3c-7.2,0-13,5.8-13,13c0,4.8,2.6,9,6.5,11.2 c0,0.1,0,0.1,0,0.2c0,4.7,3.8,8.5,8.5,8.5c2.7,0,5.1-1.3,6.7-3.2c0.1,0,0.2,0,0.3,0h10.4c2.4,2,5.4,3.2,8.7,3.2s6.4-1.2,8.7-3.2h0.2 c3.3,3.8,8.2,6.2,13.6,6.2c5.6,0,10.7-2.6,14-6.6C89.6,76.2,95,69.8,95,62.1z"
                                            fill="#55bedb"
                                            transform="translate(-213.71009097638415, 96.65553106348875) scale(0.4066666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="50s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M94.6,56.2c-1-4.2-3.7-7.6-7.2-9.5c1.6-1.7,2.7-4.1,2.7-6.7c0-5.4-4.4-9.7-9.7-9.7c-3.2,0-6.1,1.6-7.8,4 c-2.5-4.5-7.3-7.6-12.8-7.6c-3.4,0-6.4,1.1-8.9,3.1c-2.4-4.7-7.3-7.9-13-7.9c-5.6,0-10.5,3.2-12.9,7.8c-1.3-0.3-2.7-0.6-4.1-0.6 C12.1,29.1,5,36.1,5,44.9c0,6,3.4,11.3,8.3,13.9c-0.2,1.3-0.2,2.6,0.1,3.9c1.2,5.3,6.5,8.6,11.8,7.4c0.3-0.1,0.6-0.1,0.8-0.2 c2.9,6,9.6,9.5,16.4,8c5.5-1.3,9.6-5.5,10.9-10.6c2.8,1.3,6.1,1.7,9.4,1c1.8-0.4,3.4-1.1,4.8-2.1c3,5.7,9.6,9,16.2,7.5 C91.5,71.9,96.4,64,94.6,56.2z"
                                            fill="#90ddf0"
                                            transform="translate(206.31156976614506, 61.05980156690117) scale(0.5083333333333333) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="25s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M94.6,56.2c-1-4.2-3.7-7.6-7.2-9.5c1.6-1.7,2.7-4.1,2.7-6.7c0-5.4-4.4-9.7-9.7-9.7c-3.2,0-6.1,1.6-7.8,4 c-2.5-4.5-7.3-7.6-12.8-7.6c-3.4,0-6.4,1.1-8.9,3.1c-2.4-4.7-7.3-7.9-13-7.9c-5.6,0-10.5,3.2-12.9,7.8c-1.3-0.3-2.7-0.6-4.1-0.6 C12.1,29.1,5,36.1,5,44.9c0,6,3.4,11.3,8.3,13.9c-0.2,1.3-0.2,2.6,0.1,3.9c1.2,5.3,6.5,8.6,11.8,7.4c0.3-0.1,0.6-0.1,0.8-0.2 c2.9,6,9.6,9.5,16.4,8c5.5-1.3,9.6-5.5,10.9-10.6c2.8,1.3,6.1,1.7,9.4,1c1.8-0.4,3.4-1.1,4.8-2.1c3,5.7,9.6,9,16.2,7.5 C91.5,71.9,96.4,64,94.6,56.2z"
                                            fill="#90ddf0"
                                            transform="translate(-49.688430233854945, 61.05980156690117) scale(0.5083333333333333) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="25s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M85.3,55.6c0.3-1.1,0.5-2.2,0.6-3.4c0.5-8.5-6-15.7-14.5-16.2c-2.1-0.1-4.2,0.2-6,0.9c-1.5-8.9-9-16-18.4-16.5 C36.1,19.7,26.8,28,26.2,38.9c-0.1,1.1,0,2.3,0.1,3.3c-6.3,0.1-11.6,5-11.9,11.4c0,0.8,0,1.5,0.1,2.2c-0.3,0-0.5-0.1-0.8-0.1 C9.2,55.6,5.3,59,5,63.6s3.2,8.4,7.8,8.7c0.8,0,1.5,0,2.2-0.2c2.5,2.9,8,5.1,14.6,5.5c3.7,0.2,7.2-0.2,10-1.1 c1.7,1.8,4.3,3.1,7.3,3.2c4,0.2,7.5-1.6,9.3-4.3c2.1,1,4.6,1.7,7.4,1.9c4.5,0.3,8.6-1,11.1-3c2,1.7,4.6,2.8,7.6,3 C89,77.6,94.6,73,95,67C95.3,61.5,91.1,56.7,85.3,55.6z"
                                            fill="#90ddf0"
                                            transform="translate(205.97446426447272, 121.79057422100232) scale(0.5083333333333333) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="25s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M85.3,55.6c0.3-1.1,0.5-2.2,0.6-3.4c0.5-8.5-6-15.7-14.5-16.2c-2.1-0.1-4.2,0.2-6,0.9c-1.5-8.9-9-16-18.4-16.5 C36.1,19.7,26.8,28,26.2,38.9c-0.1,1.1,0,2.3,0.1,3.3c-6.3,0.1-11.6,5-11.9,11.4c0,0.8,0,1.5,0.1,2.2c-0.3,0-0.5-0.1-0.8-0.1 C9.2,55.6,5.3,59,5,63.6s3.2,8.4,7.8,8.7c0.8,0,1.5,0,2.2-0.2c2.5,2.9,8,5.1,14.6,5.5c3.7,0.2,7.2-0.2,10-1.1 c1.7,1.8,4.3,3.1,7.3,3.2c4,0.2,7.5-1.6,9.3-4.3c2.1,1,4.6,1.7,7.4,1.9c4.5,0.3,8.6-1,11.1-3c2,1.7,4.6,2.8,7.6,3 C89,77.6,94.6,73,95,67C95.3,61.5,91.1,56.7,85.3,55.6z"
                                            fill="#90ddf0"
                                            transform="translate(-50.025535735527285, 121.79057422100232) scale(0.5083333333333333) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="25s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#90ddf0"
                                            transform="translate(212.60926445234446, 143.57989916471894) scale(0.5083333333333333) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="25s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#90ddf0"
                                            transform="translate(-43.39073554765554, 143.57989916471894) scale(0.5083333333333333) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="25s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.1c0-7.9-5.6-14.5-13.1-15.9C82,45.4,82,44.7,82,44c0-12.3-10-22.3-22.3-22.3c-9.5,0-17.7,6-20.8,14.4 c-1.2-0.3-2.4-0.5-3.7-0.5c-7.6,0-13.8,5.9-14.3,13.3c-0.9-0.2-1.9-0.3-2.8-0.3c-7.2,0-13,5.8-13,13c0,4.8,2.6,9,6.5,11.2 c0,0.1,0,0.1,0,0.2c0,4.7,3.8,8.5,8.5,8.5c2.7,0,5.1-1.3,6.7-3.2c0.1,0,0.2,0,0.3,0h10.4c2.4,2,5.4,3.2,8.7,3.2s6.4-1.2,8.7-3.2h0.2 c3.3,3.8,8.2,6.2,13.6,6.2c5.6,0,10.7-2.6,14-6.6C89.6,76.2,95,69.8,95,62.1z"
                                            fill="#90ddf0"
                                            transform="translate(195.6422301138665, 121.33814113152619) scale(0.5083333333333333) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="25s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.1c0-7.9-5.6-14.5-13.1-15.9C82,45.4,82,44.7,82,44c0-12.3-10-22.3-22.3-22.3c-9.5,0-17.7,6-20.8,14.4 c-1.2-0.3-2.4-0.5-3.7-0.5c-7.6,0-13.8,5.9-14.3,13.3c-0.9-0.2-1.9-0.3-2.8-0.3c-7.2,0-13,5.8-13,13c0,4.8,2.6,9,6.5,11.2 c0,0.1,0,0.1,0,0.2c0,4.7,3.8,8.5,8.5,8.5c2.7,0,5.1-1.3,6.7-3.2c0.1,0,0.2,0,0.3,0h10.4c2.4,2,5.4,3.2,8.7,3.2s6.4-1.2,8.7-3.2h0.2 c3.3,3.8,8.2,6.2,13.6,6.2c5.6,0,10.7-2.6,14-6.6C89.6,76.2,95,69.8,95,62.1z"
                                            fill="#90ddf0"
                                            transform="translate(-60.3577698861335, 121.33814113152619) scale(0.5083333333333333) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="25s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M94.6,56.2c-1-4.2-3.7-7.6-7.2-9.5c1.6-1.7,2.7-4.1,2.7-6.7c0-5.4-4.4-9.7-9.7-9.7c-3.2,0-6.1,1.6-7.8,4 c-2.5-4.5-7.3-7.6-12.8-7.6c-3.4,0-6.4,1.1-8.9,3.1c-2.4-4.7-7.3-7.9-13-7.9c-5.6,0-10.5,3.2-12.9,7.8c-1.3-0.3-2.7-0.6-4.1-0.6 C12.1,29.1,5,36.1,5,44.9c0,6,3.4,11.3,8.3,13.9c-0.2,1.3-0.2,2.6,0.1,3.9c1.2,5.3,6.5,8.6,11.8,7.4c0.3-0.1,0.6-0.1,0.8-0.2 c2.9,6,9.6,9.5,16.4,8c5.5-1.3,9.6-5.5,10.9-10.6c2.8,1.3,6.1,1.7,9.4,1c1.8-0.4,3.4-1.1,4.8-2.1c3,5.7,9.6,9,16.2,7.5 C91.5,71.9,96.4,64,94.6,56.2z"
                                            fill="#afecf6"
                                            transform="translate(162.06973563297294, 14.049769079127998) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M94.6,56.2c-1-4.2-3.7-7.6-7.2-9.5c1.6-1.7,2.7-4.1,2.7-6.7c0-5.4-4.4-9.7-9.7-9.7c-3.2,0-6.1,1.6-7.8,4 c-2.5-4.5-7.3-7.6-12.8-7.6c-3.4,0-6.4,1.1-8.9,3.1c-2.4-4.7-7.3-7.9-13-7.9c-5.6,0-10.5,3.2-12.9,7.8c-1.3-0.3-2.7-0.6-4.1-0.6 C12.1,29.1,5,36.1,5,44.9c0,6,3.4,11.3,8.3,13.9c-0.2,1.3-0.2,2.6,0.1,3.9c1.2,5.3,6.5,8.6,11.8,7.4c0.3-0.1,0.6-0.1,0.8-0.2 c2.9,6,9.6,9.5,16.4,8c5.5-1.3,9.6-5.5,10.9-10.6c2.8,1.3,6.1,1.7,9.4,1c1.8-0.4,3.4-1.1,4.8-2.1c3,5.7,9.6,9,16.2,7.5 C91.5,71.9,96.4,64,94.6,56.2z"
                                            fill="#afecf6"
                                            transform="translate(162.06973563297294, 270.049769079128) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M94.6,56.2c-1-4.2-3.7-7.6-7.2-9.5c1.6-1.7,2.7-4.1,2.7-6.7c0-5.4-4.4-9.7-9.7-9.7c-3.2,0-6.1,1.6-7.8,4 c-2.5-4.5-7.3-7.6-12.8-7.6c-3.4,0-6.4,1.1-8.9,3.1c-2.4-4.7-7.3-7.9-13-7.9c-5.6,0-10.5,3.2-12.9,7.8c-1.3-0.3-2.7-0.6-4.1-0.6 C12.1,29.1,5,36.1,5,44.9c0,6,3.4,11.3,8.3,13.9c-0.2,1.3-0.2,2.6,0.1,3.9c1.2,5.3,6.5,8.6,11.8,7.4c0.3-0.1,0.6-0.1,0.8-0.2 c2.9,6,9.6,9.5,16.4,8c5.5-1.3,9.6-5.5,10.9-10.6c2.8,1.3,6.1,1.7,9.4,1c1.8-0.4,3.4-1.1,4.8-2.1c3,5.7,9.6,9,16.2,7.5 C91.5,71.9,96.4,64,94.6,56.2z"
                                            fill="#afecf6"
                                            transform="translate(-93.93026436702706, 14.049769079127998) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M94.6,56.2c-1-4.2-3.7-7.6-7.2-9.5c1.6-1.7,2.7-4.1,2.7-6.7c0-5.4-4.4-9.7-9.7-9.7c-3.2,0-6.1,1.6-7.8,4 c-2.5-4.5-7.3-7.6-12.8-7.6c-3.4,0-6.4,1.1-8.9,3.1c-2.4-4.7-7.3-7.9-13-7.9c-5.6,0-10.5,3.2-12.9,7.8c-1.3-0.3-2.7-0.6-4.1-0.6 C12.1,29.1,5,36.1,5,44.9c0,6,3.4,11.3,8.3,13.9c-0.2,1.3-0.2,2.6,0.1,3.9c1.2,5.3,6.5,8.6,11.8,7.4c0.3-0.1,0.6-0.1,0.8-0.2 c2.9,6,9.6,9.5,16.4,8c5.5-1.3,9.6-5.5,10.9-10.6c2.8,1.3,6.1,1.7,9.4,1c1.8-0.4,3.4-1.1,4.8-2.1c3,5.7,9.6,9,16.2,7.5 C91.5,71.9,96.4,64,94.6,56.2z"
                                            fill="#afecf6"
                                            transform="translate(-93.93026436702706, 270.049769079128) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M85.3,55.6c0.3-1.1,0.5-2.2,0.6-3.4c0.5-8.5-6-15.7-14.5-16.2c-2.1-0.1-4.2,0.2-6,0.9c-1.5-8.9-9-16-18.4-16.5 C36.1,19.7,26.8,28,26.2,38.9c-0.1,1.1,0,2.3,0.1,3.3c-6.3,0.1-11.6,5-11.9,11.4c0,0.8,0,1.5,0.1,2.2c-0.3,0-0.5-0.1-0.8-0.1 C9.2,55.6,5.3,59,5,63.6s3.2,8.4,7.8,8.7c0.8,0,1.5,0,2.2-0.2c2.5,2.9,8,5.1,14.6,5.5c3.7,0.2,7.2-0.2,10-1.1 c1.7,1.8,4.3,3.1,7.3,3.2c4,0.2,7.5-1.6,9.3-4.3c2.1,1,4.6,1.7,7.4,1.9c4.5,0.3,8.6-1,11.1-3c2,1.7,4.6,2.8,7.6,3 C89,77.6,94.6,73,95,67C95.3,61.5,91.1,56.7,85.3,55.6z"
                                            fill="#afecf6"
                                            transform="translate(79.23693503513334, 187.3685906447373) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M85.3,55.6c0.3-1.1,0.5-2.2,0.6-3.4c0.5-8.5-6-15.7-14.5-16.2c-2.1-0.1-4.2,0.2-6,0.9c-1.5-8.9-9-16-18.4-16.5 C36.1,19.7,26.8,28,26.2,38.9c-0.1,1.1,0,2.3,0.1,3.3c-6.3,0.1-11.6,5-11.9,11.4c0,0.8,0,1.5,0.1,2.2c-0.3,0-0.5-0.1-0.8-0.1 C9.2,55.6,5.3,59,5,63.6s3.2,8.4,7.8,8.7c0.8,0,1.5,0,2.2-0.2c2.5,2.9,8,5.1,14.6,5.5c3.7,0.2,7.2-0.2,10-1.1 c1.7,1.8,4.3,3.1,7.3,3.2c4,0.2,7.5-1.6,9.3-4.3c2.1,1,4.6,1.7,7.4,1.9c4.5,0.3,8.6-1,11.1-3c2,1.7,4.6,2.8,7.6,3 C89,77.6,94.6,73,95,67C95.3,61.5,91.1,56.7,85.3,55.6z"
                                            fill="#afecf6"
                                            transform="translate(-176.76306496486666, 187.3685906447373) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#afecf6"
                                            transform="translate(93.1833697913525, 45.65215442616699) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#afecf6"
                                            transform="translate(93.1833697913525, 301.652154426167) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#afecf6"
                                            transform="translate(-162.8166302086475, 45.65215442616699) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#afecf6"
                                            transform="translate(-162.8166302086475, 301.652154426167) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.1c0-7.9-5.6-14.5-13.1-15.9C82,45.4,82,44.7,82,44c0-12.3-10-22.3-22.3-22.3c-9.5,0-17.7,6-20.8,14.4 c-1.2-0.3-2.4-0.5-3.7-0.5c-7.6,0-13.8,5.9-14.3,13.3c-0.9-0.2-1.9-0.3-2.8-0.3c-7.2,0-13,5.8-13,13c0,4.8,2.6,9,6.5,11.2 c0,0.1,0,0.1,0,0.2c0,4.7,3.8,8.5,8.5,8.5c2.7,0,5.1-1.3,6.7-3.2c0.1,0,0.2,0,0.3,0h10.4c2.4,2,5.4,3.2,8.7,3.2s6.4-1.2,8.7-3.2h0.2 c3.3,3.8,8.2,6.2,13.6,6.2c5.6,0,10.7-2.6,14-6.6C89.6,76.2,95,69.8,95,62.1z"
                                            fill="#afecf6"
                                            transform="translate(-267.5435327306013, 207.57528951811105) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.1c0-7.9-5.6-14.5-13.1-15.9C82,45.4,82,44.7,82,44c0-12.3-10-22.3-22.3-22.3c-9.5,0-17.7,6-20.8,14.4 c-1.2-0.3-2.4-0.5-3.7-0.5c-7.6,0-13.8,5.9-14.3,13.3c-0.9-0.2-1.9-0.3-2.8-0.3c-7.2,0-13,5.8-13,13c0,4.8,2.6,9,6.5,11.2 c0,0.1,0,0.1,0,0.2c0,4.7,3.8,8.5,8.5,8.5c2.7,0,5.1-1.3,6.7-3.2c0.1,0,0.2,0,0.3,0h10.4c2.4,2,5.4,3.2,8.7,3.2s6.4-1.2,8.7-3.2h0.2 c3.3,3.8,8.2,6.2,13.6,6.2c5.6,0,10.7-2.6,14-6.6C89.6,76.2,95,69.8,95,62.1z"
                                            fill="#afecf6"
                                            transform="translate(244.45646726939867, 207.57528951811105) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.1c0-7.9-5.6-14.5-13.1-15.9C82,45.4,82,44.7,82,44c0-12.3-10-22.3-22.3-22.3c-9.5,0-17.7,6-20.8,14.4 c-1.2-0.3-2.4-0.5-3.7-0.5c-7.6,0-13.8,5.9-14.3,13.3c-0.9-0.2-1.9-0.3-2.8-0.3c-7.2,0-13,5.8-13,13c0,4.8,2.6,9,6.5,11.2 c0,0.1,0,0.1,0,0.2c0,4.7,3.8,8.5,8.5,8.5c2.7,0,5.1-1.3,6.7-3.2c0.1,0,0.2,0,0.3,0h10.4c2.4,2,5.4,3.2,8.7,3.2s6.4-1.2,8.7-3.2h0.2 c3.3,3.8,8.2,6.2,13.6,6.2c5.6,0,10.7-2.6,14-6.6C89.6,76.2,95,69.8,95,62.1z"
                                            fill="#afecf6"
                                            transform="translate(-11.543532730601328, 207.57528951811105) scale(0.61) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="16.666666666666668s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M94.6,56.2c-1-4.2-3.7-7.6-7.2-9.5c1.6-1.7,2.7-4.1,2.7-6.7c0-5.4-4.4-9.7-9.7-9.7c-3.2,0-6.1,1.6-7.8,4 c-2.5-4.5-7.3-7.6-12.8-7.6c-3.4,0-6.4,1.1-8.9,3.1c-2.4-4.7-7.3-7.9-13-7.9c-5.6,0-10.5,3.2-12.9,7.8c-1.3-0.3-2.7-0.6-4.1-0.6 C12.1,29.1,5,36.1,5,44.9c0,6,3.4,11.3,8.3,13.9c-0.2,1.3-0.2,2.6,0.1,3.9c1.2,5.3,6.5,8.6,11.8,7.4c0.3-0.1,0.6-0.1,0.8-0.2 c2.9,6,9.6,9.5,16.4,8c5.5-1.3,9.6-5.5,10.9-10.6c2.8,1.3,6.1,1.7,9.4,1c1.8-0.4,3.4-1.1,4.8-2.1c3,5.7,9.6,9,16.2,7.5 C91.5,71.9,96.4,64,94.6,56.2z"
                                            fill="#ffffff"
                                            transform="translate(114.76639665835398, 164.3383513696976) scale(0.7116666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="12.5s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M94.6,56.2c-1-4.2-3.7-7.6-7.2-9.5c1.6-1.7,2.7-4.1,2.7-6.7c0-5.4-4.4-9.7-9.7-9.7c-3.2,0-6.1,1.6-7.8,4 c-2.5-4.5-7.3-7.6-12.8-7.6c-3.4,0-6.4,1.1-8.9,3.1c-2.4-4.7-7.3-7.9-13-7.9c-5.6,0-10.5,3.2-12.9,7.8c-1.3-0.3-2.7-0.6-4.1-0.6 C12.1,29.1,5,36.1,5,44.9c0,6,3.4,11.3,8.3,13.9c-0.2,1.3-0.2,2.6,0.1,3.9c1.2,5.3,6.5,8.6,11.8,7.4c0.3-0.1,0.6-0.1,0.8-0.2 c2.9,6,9.6,9.5,16.4,8c5.5-1.3,9.6-5.5,10.9-10.6c2.8,1.3,6.1,1.7,9.4,1c1.8-0.4,3.4-1.1,4.8-2.1c3,5.7,9.6,9,16.2,7.5 C91.5,71.9,96.4,64,94.6,56.2z"
                                            fill="#ffffff"
                                            transform="translate(-141.23360334164602, 164.3383513696976) scale(0.7116666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="12.5s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M85.3,55.6c0.3-1.1,0.5-2.2,0.6-3.4c0.5-8.5-6-15.7-14.5-16.2c-2.1-0.1-4.2,0.2-6,0.9c-1.5-8.9-9-16-18.4-16.5 C36.1,19.7,26.8,28,26.2,38.9c-0.1,1.1,0,2.3,0.1,3.3c-6.3,0.1-11.6,5-11.9,11.4c0,0.8,0,1.5,0.1,2.2c-0.3,0-0.5-0.1-0.8-0.1 C9.2,55.6,5.3,59,5,63.6s3.2,8.4,7.8,8.7c0.8,0,1.5,0,2.2-0.2c2.5,2.9,8,5.1,14.6,5.5c3.7,0.2,7.2-0.2,10-1.1 c1.7,1.8,4.3,3.1,7.3,3.2c4,0.2,7.5-1.6,9.3-4.3c2.1,1,4.6,1.7,7.4,1.9c4.5,0.3,8.6-1,11.1-3c2,1.7,4.6,2.8,7.6,3 C89,77.6,94.6,73,95,67C95.3,61.5,91.1,56.7,85.3,55.6z"
                                            fill="#ffffff"
                                            transform="translate(-266.3764301476085, 67.20450055473799) scale(0.7116666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="12.5s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M85.3,55.6c0.3-1.1,0.5-2.2,0.6-3.4c0.5-8.5-6-15.7-14.5-16.2c-2.1-0.1-4.2,0.2-6,0.9c-1.5-8.9-9-16-18.4-16.5 C36.1,19.7,26.8,28,26.2,38.9c-0.1,1.1,0,2.3,0.1,3.3c-6.3,0.1-11.6,5-11.9,11.4c0,0.8,0,1.5,0.1,2.2c-0.3,0-0.5-0.1-0.8-0.1 C9.2,55.6,5.3,59,5,63.6s3.2,8.4,7.8,8.7c0.8,0,1.5,0,2.2-0.2c2.5,2.9,8,5.1,14.6,5.5c3.7,0.2,7.2-0.2,10-1.1 c1.7,1.8,4.3,3.1,7.3,3.2c4,0.2,7.5-1.6,9.3-4.3c2.1,1,4.6,1.7,7.4,1.9c4.5,0.3,8.6-1,11.1-3c2,1.7,4.6,2.8,7.6,3 C89,77.6,94.6,73,95,67C95.3,61.5,91.1,56.7,85.3,55.6z"
                                            fill="#ffffff"
                                            transform="translate(245.62356985239148, 67.20450055473799) scale(0.7116666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="12.5s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M85.3,55.6c0.3-1.1,0.5-2.2,0.6-3.4c0.5-8.5-6-15.7-14.5-16.2c-2.1-0.1-4.2,0.2-6,0.9c-1.5-8.9-9-16-18.4-16.5 C36.1,19.7,26.8,28,26.2,38.9c-0.1,1.1,0,2.3,0.1,3.3c-6.3,0.1-11.6,5-11.9,11.4c0,0.8,0,1.5,0.1,2.2c-0.3,0-0.5-0.1-0.8-0.1 C9.2,55.6,5.3,59,5,63.6s3.2,8.4,7.8,8.7c0.8,0,1.5,0,2.2-0.2c2.5,2.9,8,5.1,14.6,5.5c3.7,0.2,7.2-0.2,10-1.1 c1.7,1.8,4.3,3.1,7.3,3.2c4,0.2,7.5-1.6,9.3-4.3c2.1,1,4.6,1.7,7.4,1.9c4.5,0.3,8.6-1,11.1-3c2,1.7,4.6,2.8,7.6,3 C89,77.6,94.6,73,95,67C95.3,61.5,91.1,56.7,85.3,55.6z"
                                            fill="#ffffff"
                                            transform="translate(-10.376430147608517, 67.20450055473799) scale(0.7116666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="12.5s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#ffffff"
                                            transform="translate(-288.98811606659376, 190.17844034484114) scale(0.7116666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="12.5s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#ffffff"
                                            transform="translate(223.01188393340624, 190.17844034484114) scale(0.7116666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="12.5s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                    <g>
                                        <path
                                            d="M95,62.4c-0.5-5.9-5.7-10.3-11.9-10.5c0-0.6,0-1.2,0-1.8c-0.7-7.6-7.9-13.1-16.1-12.4c-0.9,0.1-1.9,0.3-2.7,0.5 c0-0.1,0-0.2,0-0.2c-1-10.9-10.7-19-21.6-18c-9.8,0.9-17.3,8.8-18,18.3C12.8,39.5,4.1,49.2,5.1,60C6.1,71,16.5,79,28.4,77.9 c3.4-0.3,6.4-1.3,9.2-2.8c5,3.7,12.4,5.7,20.5,4.9c6.9-0.6,13.1-3.2,17.3-6.8c2.3,1.4,5.2,2.2,8.2,1.9C90.4,74.4,95.5,68.8,95,62.4z"
                                            fill="#ffffff"
                                            transform="translate(-32.98811606659376, 190.17844034484114) scale(0.7116666666666667) translate(-36, -24)"
                                        ></path>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            keyTimes="0;1"
                                            repeatCount="indefinite"
                                            dur="12.5s"
                                            values="0;256"
                                        ></animateTransform>
                                    </g>
                                </g>
                            </pattern>
                        </defs>
                        <rect
                            x="0"
                            y="0"
                            width="1084"
                            height="322"
                            fill="url(#pid-0.5326029251661022)"
                        ></rect>
                    </svg>
                </div>

                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        data-name="Layer 1"
                        width="600"
                        height="1097"
                        viewBox="0 0 1097.1 1097"
                    >
                        <defs>
                            <linearGradient
                                id="e4ea693e-ea82-4def-9867-aa54d168612a-2577"
                                x1="564.84"
                                y1="845.93"
                                x2="564.84"
                                y2="176.85"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop
                                    offset="0"
                                    stopColor="gray"
                                    stopOpacity="0.25"
                                />
                                <stop
                                    offset="0.54"
                                    stopColor="gray"
                                    stopOpacity="0.12"
                                />
                                <stop
                                    offset="1"
                                    stopColor="gray"
                                    stopOpacity="0.1"
                                />
                            </linearGradient>
                        </defs>
                        <title>back to school</title>
                        <ellipse
                            cx="570.71"
                            cy="801.97"
                            rx="348.83"
                            ry="18.88"
                            fill="#ff63b5"
                            opacity="0.1"
                        />
                        <path
                            d="M819.75,767.52l-3,4.4-18.55,27.6-15.75,4.75-11.75-11.5.57-7.59,2.93-39.41S701.5,703,695,695s-31.5-15.25-31.5-15.25S625.25,662,611,631s23.75-35.75,23.75-35.75L777.5,731.77Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c7"
                        />
                        <path
                            d="M837.25,783.52,792,825.77s-26,5-49.25,1.5c-14.86-2.24-12-10.39-8.09-16l.07-.1a16.44,16.44,0,0,1,9.64-6.34c19.24-4.64,25.88-18.57,25.88-18.57l14,12L808.5,770l17.93,8.42Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#575988"
                        />
                        <line
                            x1="729.8"
                            y1="778.69"
                            x2="774.98"
                            y2="739.36"
                            fill="#fff"
                        />
                        <path
                            d="M826.43,778.44l-10.65-5,1-1.52,3-4.4L777.5,731.77,634.75,595.27S596.75,600,611,631s52.5,48.75,52.5,48.75S688.5,687,695,695s79.25,50.75,79.25,50.75l-2.93,39.41-.14,1.88-.93-.79s-6.64,13.93-25.88,18.57a16.44,16.44,0,0,0-9.64,6.34l-.07.1c-4,5.6-6.77,13.75,8.09,16,23.25,3.5,49.25-1.5,49.25-1.5l45.25-42.25Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M63.3,469.55C80.66,543.75,117.41,607.89,175.48,639c120.71,64.62,392.92,31.29,596.07-7a465.16,465.16,0,0,0,264.54-151.23Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                            opacity="0.1"
                        />
                        <path
                            d="M1128.65,120.29H1017.18a9.64,9.64,0,0,1,0-19.27h19.27a9.63,9.63,0,0,1,0-19.26h-13.76a9.64,9.64,0,0,1,0-19.27h58.18c-12.91-6-28-10.27-45.39-12.51-158.64-20.37-215.28-6.9-235.26,7-24.65,17.1-52.15,29.68-81.54,35.74-97.88,20.19-280.93,44.48-446.84-7.78-82.46-26-143.74,17.92-180.48,91.28H1148c-1.38-21.32-5.51-41-13.09-58.24A9.61,9.61,0,0,1,1128.65,120.29Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                            opacity="0.1"
                        />
                        <path
                            d="M53.84,314.67a491.17,491.17,0,0,0,4.32,129.46l978.68,35.79a459.56,459.56,0,0,0,68-103.7ZM440.92,407H421.65a9.64,9.64,0,1,1,0,19.27H310.18a9.64,9.64,0,0,1,0-19.27h19.27a9.63,9.63,0,1,1,0-19.26H315.69a9.64,9.64,0,0,1,0-19.27H427.16a9.64,9.64,0,0,1,0,19.27h13.76a9.63,9.63,0,0,1,0,19.26Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                            opacity="0.1"
                        />
                        <path
                            d="M1148.05,176.86l-1068.48,26C66.57,236.27,58,274,54,313.19H1129.33a457.06,457.06,0,0,0,15.53-70.33C1148.06,219.85,1149.34,197.59,1148.05,176.86ZM270.92,262H251.65a9.64,9.64,0,1,1,0,19.27H140.18a9.64,9.64,0,0,1,0-19.27h19.27a9.63,9.63,0,0,1,0-19.26H145.69a9.64,9.64,0,0,1,0-19.27H257.16a9.64,9.64,0,0,1,0,19.27h13.76a9.63,9.63,0,0,1,0,19.26Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                            opacity="0.1"
                        />
                        <g opacity="0.1">
                            <path
                                d="M848.76,533.19s28.2-69.5,80.86-95.28a113.59,113.59,0,0,0,51.57-50.08,191.17,191.17,0,0,0,12.93-32.47"
                                transform="translate(-51.45 -39.57)"
                                fill="none"
                                stroke="#535461"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            />
                            <path
                                d="M1027.21,338.92c-5.49,6.9-33.9,17-33.9,17s3.42-29.95,8.91-36.85a16,16,0,1,1,25,19.88Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M1017.46,393.57c-8.36,2.81-37.68-4.18-37.68-4.18s19.15-23.28,27.51-26.09a16,16,0,1,1,10.17,30.27Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M964.6,458.18c-8.63-1.8-30.42-22.63-30.42-22.63s28.29-10.43,36.92-8.64a16,16,0,0,1-6.5,31.27Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M913.6,498.05c-8.81-.3-33.81-17.16-33.81-17.16s26.12-15.06,34.93-14.75a16,16,0,1,1-1.12,31.91Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M952.48,369.86c1.12,8.75,20.22,32.07,20.22,32.07s12.58-27.4,11.45-36.14a16,16,0,0,0-31.67,4.07Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M893.42,417.25c3.69,8,28.9,24.55,28.9,24.55s3.79-29.9.1-37.91a16,16,0,0,0-29,13.36Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M842.34,471.19c2.29,8.52,24.33,29.08,24.33,29.08s8.8-28.83,6.52-37.35a16,16,0,0,0-30.85,8.27Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M1027.21,338.92c-5.49,6.9-33.9,17-33.9,17s3.42-29.95,8.91-36.85a16,16,0,1,1,25,19.88Z"
                                transform="translate(-51.45 -39.57)"
                                opacity="0.25"
                            />
                            <path
                                d="M1017.46,393.57c-8.36,2.81-37.68-4.18-37.68-4.18s19.15-23.28,27.51-26.09a16,16,0,1,1,10.17,30.27Z"
                                transform="translate(-51.45 -39.57)"
                                opacity="0.25"
                            />
                            <path
                                d="M964.6,458.18c-8.63-1.8-30.42-22.63-30.42-22.63s28.29-10.43,36.92-8.64a16,16,0,0,1-6.5,31.27Z"
                                transform="translate(-51.45 -39.57)"
                                opacity="0.25"
                            />
                            <path
                                d="M913.6,498.05c-8.81-.3-33.81-17.16-33.81-17.16s26.12-15.06,34.93-14.75a16,16,0,1,1-1.12,31.91Z"
                                transform="translate(-51.45 -39.57)"
                                opacity="0.25"
                            />
                            <path
                                d="M952.48,369.86c1.12,8.75,20.22,32.07,20.22,32.07s12.58-27.4,11.45-36.14a16,16,0,0,0-31.67,4.07Z"
                                transform="translate(-51.45 -39.57)"
                                opacity="0.25"
                            />
                            <path
                                d="M893.42,417.25c3.69,8,28.9,24.55,28.9,24.55s3.79-29.9.1-37.91a16,16,0,0,0-29,13.36Z"
                                transform="translate(-51.45 -39.57)"
                                opacity="0.25"
                            />
                            <path
                                d="M842.34,471.19c2.29,8.52,24.33,29.08,24.33,29.08s8.8-28.83,6.52-37.35a16,16,0,0,0-30.85,8.27Z"
                                transform="translate(-51.45 -39.57)"
                                opacity="0.25"
                            />
                        </g>
                        <g opacity="0.1">
                            <path
                                d="M803.86,422s3.56-74.92,44.69-116.71a113.64,113.64,0,0,0,32.05-64.34A191.29,191.29,0,0,0,882,206"
                                transform="translate(-51.45 -39.57)"
                                fill="none"
                                stroke="#535461"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            />
                            <path
                                d="M907.79,179.5c-2.89,8.34-26.35,27.26-26.35,27.26s-6.7-29.39-3.82-37.72a16,16,0,0,1,30.17,10.46Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M916.72,234.3c-7,5.42-36.94,8.56-36.94,8.56s10.35-28.32,17.3-33.74a16,16,0,0,1,19.64,25.18Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M888.28,312.78c-8.74,1.17-36.21-11.26-36.21-11.26s23.23-19.22,32-20.39a16,16,0,0,1,4.24,31.65Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M853.38,367.31c-8.41,2.64-37.58-5-37.58-5s19.64-22.86,28.06-25.49a16,16,0,1,1,9.52,30.47Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M847.55,233.48c4,7.88,29.72,23.55,29.72,23.55s2.77-30-1.19-37.89a16,16,0,0,0-28.53,14.34Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M807.55,297.78c6.14,6.33,35.4,13.58,35.4,13.58s-6.33-29.48-12.47-35.81a16,16,0,0,0-22.93,22.23Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                            <path
                                d="M777.25,365.6c5,7.28,32.6,19.37,32.6,19.37s-1.27-30.12-6.24-37.4a16,16,0,0,0-26.36,18Z"
                                transform="translate(-51.45 -39.57)"
                                fill="#ff63b5"
                            />
                        </g>
                        <path
                            d="M482.46,125.07s-23.83-1.43-21,15.27a4.07,4.07,0,0,0,2.12,4.29s0-1.24,2.44-.82a10.65,10.65,0,0,0,2.59.13,5.41,5.41,0,0,0,3.17-1.31h0s6.7-2.77,9.3-13.72c0,0,1.93-2.39,1.85-3l-4,1.72s1.37,2.9.29,5.31c0,0-.13-5.21-.9-5.09-.16,0-2.09,1-2.09,1s2.37,5.06.58,8.73c0,0,.68-6.23-1.32-8.36l-2.83,1.65s2.76,5.22.89,9.48c0,0,.48-6.53-1.48-9.08l-2.57,2s2.6,5.15,1,8.68c0,0-.2-7.61-1.57-8.18a15.66,15.66,0,0,0-2.58,2.79s1.77,3.74.67,5.71c0,0-.67-5.07-1.23-5.09,0,0-2.24,3.36-2.47,5.66a12.22,12.22,0,0,1,1.93-6,6.77,6.77,0,0,0-3.43,1.77s.35-2.37,4-2.58c0,0,1.85-2.55,2.34-2.7,0,0-3.61-.31-5.79.67,0,0,1.92-2.24,6.45-1.23l2.54-2.06s-4.75-.65-6.77.06c0,0,2.32-2,7.45-.53l2.76-1.65a24.75,24.75,0,0,0-6.47-.56s2.55-1.37,7.28.11l2-.88s-3-.58-3.84-.68-.91-.33-.91-.33a10.28,10.28,0,0,1,5.57.62S482.54,125.34,482.46,125.07Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                            opacity="0.1"
                        />
                        <path
                            d="M419.88,206.34s-8.14,22.45,8.67,24.5a4.08,4.08,0,0,0,4.72-.82s-1.18-.39-.09-2.57A10.7,10.7,0,0,0,434,225a5.41,5.41,0,0,0-.35-3.41h0s-.75-7.21-10.51-12.81c0,0-1.75-2.53-2.36-2.63l.51,4.34s3.17-.49,5.18,1.23c0,0-5-1.35-5.14-.58,0,.16.37,2.29.37,2.29s5.52-.83,8.54,1.92c0,0-5.78-2.41-8.39-1.11l.78,3.19s5.79-1.17,9.34,1.84c0,0-6.13-2.32-9.13-1.16l1.19,3s5.67-1,8.61,1.49c0,0-7.35-2-8.29-.81a15.43,15.43,0,0,0,1.95,3.27s4.08-.64,5.66,1c0,0-5.05-.79-5.23-.26,0,0,2.58,3.1,4.72,4a12.17,12.17,0,0,1-5.18-3.54A6.74,6.74,0,0,0,427,230s-2.17-1-1.34-4.54c0,0-1.92-2.5-1.93-3,0,0-1.31,3.38-1,5.75,0,0-1.6-2.48.66-6.54l-1.26-3s-2,4.37-1.86,6.5c0,0-1.24-2.78,1.6-7.29l-.8-3.11a25.18,25.18,0,0,0-2.37,6s-.59-2.84,2.18-6.94l-.29-2.15s-1.4,2.68-1.74,3.49-.58.78-.58.78a10.35,10.35,0,0,1,2.18-5.17S420.16,206.35,419.88,206.34Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                            opacity="0.1"
                        />
                        <path
                            d="M577.92,187.43s-8.15,22.44,8.67,24.49a4.07,4.07,0,0,0,4.71-.81s-1.17-.39-.09-2.58a10.77,10.77,0,0,0,.86-2.45,5.31,5.31,0,0,0-.36-3.4h0s-.75-7.21-10.51-12.82c0,0-1.74-2.53-2.35-2.63l.5,4.35s3.18-.5,5.18,1.22c0,0-5-1.35-5.13-.57,0,.15.37,2.29.37,2.29s5.52-.84,8.53,1.92c0,0-5.77-2.42-8.39-1.11l.78,3.18s5.79-1.17,9.35,1.84c0,0-6.13-2.32-9.13-1.15l1.19,3s5.67-1,8.61,1.49c0,0-7.35-2-8.29-.82a15.74,15.74,0,0,0,1.94,3.27s4.09-.64,5.67,1c0,0-5.06-.79-5.23-.27,0,0,2.58,3.1,4.72,4a12.24,12.24,0,0,1-5.19-3.55,6.72,6.72,0,0,0,.73,3.79s-2.18-1-1.35-4.55c0,0-1.91-2.49-1.92-3,0,0-1.32,3.37-1,5.75,0,0-1.6-2.49.67-6.54l-1.27-3s-2,4.37-1.85,6.51c0,0-1.24-2.79,1.6-7.3l-.8-3.11a24.93,24.93,0,0,0-2.37,6s-.6-2.83,2.17-6.94l-.29-2.14s-1.4,2.68-1.73,3.48-.58.79-.58.79a10.24,10.24,0,0,1,2.18-5.17S578.19,187.43,577.92,187.43Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                            opacity="0.1"
                        />
                        <path
                            d="M319.69,159.31s-8.15,22.45,8.67,24.49a4.05,4.05,0,0,0,4.71-.81s-1.17-.39-.09-2.57a11.27,11.27,0,0,0,.86-2.45,5.41,5.41,0,0,0-.36-3.41h0s-.75-7.21-10.51-12.82c0,0-1.74-2.52-2.35-2.62l.5,4.34s3.17-.49,5.18,1.23c0,0-5-1.36-5.13-.58,0,.16.37,2.29.37,2.29s5.52-.83,8.53,1.92c0,0-5.78-2.42-8.39-1.11l.78,3.19s5.79-1.17,9.34,1.84c0,0-6.12-2.32-9.12-1.16l1.19,3s5.67-1,8.61,1.49c0,0-7.36-2-8.29-.82a15.76,15.76,0,0,0,1.94,3.28s4.09-.65,5.66,1c0,0-5.05-.79-5.23-.26,0,0,2.59,3.09,4.73,4a12.14,12.14,0,0,1-5.19-3.55,6.72,6.72,0,0,0,.73,3.79s-2.18-1-1.35-4.54c0,0-1.92-2.5-1.92-3,0,0-1.32,3.38-1,5.75,0,0-1.6-2.48.66-6.54l-1.26-3s-2,4.38-1.86,6.51c0,0-1.24-2.78,1.6-7.29l-.79-3.12a24.93,24.93,0,0,0-2.37,6s-.6-2.83,2.17-6.94l-.29-2.14s-1.4,2.68-1.73,3.49-.58.78-.58.78a10.28,10.28,0,0,1,2.17-5.17S320,159.32,319.69,159.31Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                            opacity="0.1"
                        />
                        <path
                            d="M570.05,311.59s6.29,23,21.21,15a4.07,4.07,0,0,0,3.38-3.38s-1.18.35-1.56-2.06a10.79,10.79,0,0,0-.71-2.49,5.43,5.43,0,0,0-2.25-2.58h0s-4.77-5.45-16-4.41c0,0-2.88-1.06-3.44-.79l2.92,3.26s2.3-2.23,4.93-2c0,0-4.89,1.79-4.52,2.48.07.14,1.62,1.66,1.62,1.66s4-3.86,8.08-3.35c0,0-6.11,1.36-7.5,3.93l2.48,2.16s4.06-4.3,8.69-3.89c0,0-6.34,1.64-8.12,4.32l2.72,1.79s4-4.11,7.89-3.75c0,0-7.13,2.64-7.24,4.11a15.77,15.77,0,0,0,3.48,1.56s3-2.88,5.18-2.47c0,0-4.58,2.26-4.42,2.8,0,0,3.89,1,6.15.52a12.15,12.15,0,0,1-6.28.09,6.74,6.74,0,0,0,2.77,2.68s-2.36.43-3.72-2.94c0,0-3-.93-3.31-1.35,0,0,.87,3.51,2.5,5.27,0,0-2.74-1.1-3.23-5.72L579,320.33s.9,4.71,2.23,6.39c0,0-2.62-1.56-2.9-6.88l-2.45-2.08a25.25,25.25,0,0,0,1.55,6.3s-2.12-2-2.22-6.93l-1.48-1.58s.4,3,.6,3.85,0,1,0,1a10.29,10.29,0,0,1-1.21-5.48S570.28,311.43,570.05,311.59Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                            opacity="0.1"
                        />
                        <path
                            d="M866.94,441.33a54.73,54.73,0,0,0,7.19,6.92l19.48,16.6c3.47,2.95,7,6,11.4,7.39a17.84,17.84,0,0,0,15.56-2.39l-.33-.11.33-.22c-3.29-1.06-6.66-2.16-9.37-4.29a10.53,10.53,0,0,1-4.12-7v0c0-.14,0-.27,0-.41a7.32,7.32,0,0,1,.11-1.13,24.79,24.79,0,0,0,11.73-4.13l-.34-.12.34-.21c-10.38-3.33-17.57-13.07-20.83-23.38s-3.27-21.29-3.62-32.08-1.15-21.88-5.81-31.64c-1.75-3.66-4-7.14-4.85-11.1a17.26,17.26,0,0,1-.33-3.57c.07-3.85,1.19-7.72,2.22-11.48a239.26,239.26,0,0,0,5.48-25.51,59.86,59.86,0,0,0,.89-9.25,23.77,23.77,0,0,0-1.43-8.89c-4.58-11.9-20.5-17.51-22.93-30a26.26,26.26,0,0,1-.36-5.09c0-.94,0-1.87,0-2.8s0-2-.08-2.92c-.69-8.79-6.13-16.42-11.38-23.55-6.32-8.58-13-17.5-22.71-22.07-7.54-3.57-17.62-4.75-26.61-3.95A69.23,69.23,0,0,0,793.39,196c-6.87-3.82-14-7.58-21.61-8.42-9.65-1.06-19.19,2.64-28.87,3.26-13.16.85-26.08-4-39.24-5s-28.31,3.43-34.19,16.68A31.81,31.81,0,0,0,667,212.65h0c-.06.67-.1,1.33-.13,2v.07a62.93,62.93,0,0,0,.23,8.11l0,.31c0,.54.1,1.08.16,1.62,0,.16,0,.31.05.47,0,.5.11,1,.17,1.5l.06.47c.08.63.17,1.26.25,1.89a20.13,20.13,0,0,0,.83,3.82,7.18,7.18,0,0,0,1.06,2c1.43,1.82,3.58,2.36,5.8,2.7l1.75.25c-.18.36-.37.72-.54,1.09a62.17,62.17,0,0,0-6,26.77c0,31.46,23.29,57.54,53.72,62.28l1.83,2.28c11.22,14.06,25.3,32.83,32,46.34-7.74,9.61-16.8,26.65-19.38,55.23l-3.83,8.94C727,452.34,724.93,469,727,484.5c-2.26,8.38-4.84,18.91-6.63,27.62-13.31-2.95-58.74-10.25-69.48-17.34l-31.5-14.84s-41-28.64-63.06-19.08c-8.43-10.36-21.15-21.21-26.63-25.31-9.4-7.05-32.78-34.59-32.78-34.59l-36.63-48.62c-.1-5.63-.7-10.44-2.24-12.51-4.32-5.78-27.19-18.61-31.76-15.84s-8.39-6-8.39-6l-.35-.19c-.86-.5-3.3-1.88-6.69-3.7a88.88,88.88,0,0,1,.3-12.17c.07-.68.16-1.36.26-2a55.75,55.75,0,0,0,52.16-42.54c.16-.63.27-1.28.4-1.92a9.83,9.83,0,0,0,9.23-2.68c3.2-3.44,3.34-8.73,2.32-13.29s-3-8.93-3.5-13.59c-.63-6.35,1.61-13-.45-19-1.73-5.12-6.29-8.84-11.15-11.27s-10.18-3.85-15.15-6.06c-4.74-2.1-9.15-4.92-14.07-6.58-6.38-2.15-13.24-2.23-20-2.07-4.24-1.71-8.56-3.34-13.1-3.85-5-.57-10.5.4-14.31,3.73-3,2.66-5.44,6.93-9.51,7.07-2,.07-3.8-.92-5.58-1.77-5.05-2.42-11.44-3.79-16-.58-3.66,2.56-5,7.27-5.63,11.66s-.74,9-2.86,12.93c-1.31,2.42-3.3,4.39-4.95,6.59a28.32,28.32,0,0,0-5.53,19.46l0,.2c-.24-1-.47-1.93-.64-2.91,0,.74,0,1.47.1,2.21a56.91,56.91,0,0,0,2.23,10.11l4.14,14.5c2.1,7.36,4.25,14.83,8.25,21.38a35.21,35.21,0,0,0,5.61,7.05A25.91,25.91,0,0,0,366,296a16.11,16.11,0,0,0,5.14.31c0,.21-.05.41-.09.62-.37-.07-.75-.15-1.1-.2a10.68,10.68,0,0,0-4.91.13c-7.9,2.81-10.3,11.36-11,14.72-.16.86-.21,1.38-.21,1.38s.13.5.28,1.35l-.07.29c-.16.85-.21,1.38-.21,1.38s.13.5.28,1.37l-2.06.05L317.6,321.9c-7.87-.54-15.36-.67-19.37.29a8,8,0,0,0-1,.29c-5,1.73-27.91,17.54-48.47,32.09,0-.4,0-.79-.06-1.17l-5.85,4.16c0,.39,0,.8,0,1.21-1.46,1-2.91,2.06-4.31,3.07-6.29,4.5-12,8.56-16.25,11.67-5.18,3.72-8.39,6.07-8.39,6.07s-1.9.62-3.16,3.55c-1.62,3.75-2.18,11.29,3.67,26.13,10.42,26.41,12.7,44.27,12.7,44.27a31.82,31.82,0,0,0-8.25,2c-3.61,1.44-7.38,3.88-8.95,8a13.77,13.77,0,0,0-.07,8.9c4.82,17.1,84.61,114.2,84.61,114.2l1,.09a70.1,70.1,0,0,0,12.3,0c3.73-.39,7.22-1.28,8.82-3.16,0,0,17.69,22.71,43.67,7.24-.18,20.6-.7,35.71,2.57,43.32,5.09,11.82,5.09,38.73,5.09,38.73l4.84.17c-.26,1-.55,2-.86,3-2.23,7.37-5.52,16.28-9,18.41-5.86,3.6-3.08,65.48-2.84,70.82v0c0,.21,0,.32,0,.32l-.34,25,0,2a24.22,24.22,0,0,1-1.95-3.08s-9.42,9-9.59,28,.17,19.64.17,19.64,38-1.47,45.13,1.15S460.22,836,460.22,836s2.21-5.74-4.15-10.15c10.14-.73,21.2-2.67,27.68-7.37C498,808.19,455,800.17,452,798.54s-17.86-14.74-24-19.65a12.48,12.48,0,0,0-6.34-2.36l.77-22.41c9.15-10.31,19.06-67.16,19.06-67.16,3.24-2.7,4.65-9.27,5.23-13.28a6.09,6.09,0,0,0,4.17-5.59v0c10.47.35,23.64.27,26.17-2.24,4.32-4.28,3.81-18.87,3.81-18.87l-6.1-154.44-.4-.59a77,77,0,0,0,.06-21.32c13.7,3.91,24.36,6.57,24.36,6.57s20.62,3.8,35.09,7a23.65,23.65,0,0,0-5.24,8.8c-13,37,60.73,35.47,60.73,35.47l34.81,16.1,81.94,26.78c-26.33-7.77-56.41-16.91-76.88-23.18a53.77,53.77,0,0,0-6.14-1.49c-18.78-3.4-38.29,3.44-50.25,18.53-.14.19-.27.36-.42.54a22,22,0,0,0-.52,26.11c3.13,4.43,7.32,10.32,12.23,17.17-10.39,3.14-27.58,11.89-17.13,34.39,14.48,31.19,53.35,49,53.35,49s25.41,7.3,32,15.35c1.85,2.26,9,7.27,18.35,13.31,6,6.35,10.7,10.5,13.49,11.42,11.14,3.67,32.83,21.28,48.09,34.49L730,798.55l-.15,1.9-.94-.8s-6.75,14-26.31,18.69a16.75,16.75,0,0,0-9.79,6.38l-.07.09-.58.84-.44-.33c-4,5.63-5.86,13.83,9.24,16.09,23.63,3.52,50-1.51,50-1.51l23.56-21.78a23.14,23.14,0,0,0,9,4.67c17.61,4,67.07,23.14,67.07,23.14,0-5.37,43.71-74.45,43.71-74.45,59-111.68-5.16-195.14-12.25-203.83l-.63-.76-.55-9.28-.12-2.13s31.84-14.08,19.64-20.78-19-38.91-30.49-52.32c-9-10.46-8.48-34.74-9.43-55.43a33.31,33.31,0,0,0,6.47,14c.07.09.15.16.22.25l-.85-.74C866.52,440.78,866.72,441.06,866.94,441.33Zm-392.33-8.58c4.1,4.41,11.26,10.05,16,13.63-5.68-2.77-10.1-5.11-13.51-7C476.3,437.16,475.46,434.94,474.61,432.75ZM353.32,328.1a16.53,16.53,0,0,1-5.15,7.51l-2-8.63C348.79,327.4,351.23,327.79,353.32,328.1ZM753,565.21c.79-1.7,1.61-3.37,2.44-5a18.75,18.75,0,0,0,8.89-6.18,126.93,126.93,0,0,1,3.86,18.46c0,.29,0,.45,0,.45a28.16,28.16,0,0,1-1.13,7.43c-.92,2.92-2.6,5.67-5.65,6-1.27.13-7.52-1.38-16.87-3.93-2.71-.74-5.69-1.57-8.87-2.47C740.66,579.64,747.6,576.83,753,565.21Zm78.25-211c-1.87-3-5.77-4.92-10.54-6.05-.87-.58-2.22-1.5-3.94-2.75-8.4-6.15-25.17-20-32.86-37.69a42.35,42.35,0,0,0,6.26-2.29,45.27,45.27,0,0,0,8.84-5.35c.92-.72,1.82-1.47,2.68-2.25a46.68,46.68,0,0,0,6-6.55c.71-1,1.4-1.95,2-3a46.09,46.09,0,0,0,2.66-4.78,59.58,59.58,0,0,0,4.19-12c.39-1.66.73-3.35,1-5.05s.53-3.41.72-5.13a144.82,144.82,0,0,0,.71-18.27c0-.29,0-.59,0-.88,0-.11,0-.22,0-.32h0a89.38,89.38,0,0,0-2-18.39c.45.17.9.34,1.33.54a13.46,13.46,0,0,1,2.06,1.25c-.16-.23-.34-.46-.51-.69,2.9,1.88,5.06,4.81,7,7.73a110.37,110.37,0,0,1,11.84,94.39c-1.46,4.29-3.21,8.56-3.6,13.07-1.41,16.11,14,28.4,19.73,43.54,2.87,7.59,3.32,16,3.7,24.32C854.2,386.54,838.41,365.8,831.28,354.25Z"
                            transform="translate(-51.45 -39.57)"
                            fill="url(#e4ea693e-ea82-4def-9867-aa54d168612a-2577)"
                        />
                        <path
                            d="M449,672.77s-.75,12.5-5.5,16.5c0,0-9.75,56.5-18.75,66.75l-1.5,5.75-37.5-4.25,7.5-50,7-46Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c8"
                        />
                        <path
                            d="M449,672.77s-.75,12.5-5.5,16.5c0,0-9.75,56.5-18.75,66.75l-1.5,5.75-37.5-4.25,7.5-50,7-46Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.03"
                        />
                        <polygon
                            points="357.14 717.15 373.3 716.44 372.44 741.88 360.07 750.17 337.79 745.29 345.92 711.29 357.14 717.15"
                            fill="#ff748f"
                        />
                        <polygon
                            points="357.14 717.15 373.3 716.44 372.44 741.88 360.07 750.17 337.79 745.29 345.92 711.29 357.14 717.15"
                            opacity="0.03"
                        />
                        <path
                            className="shoe"
                            d="M411.52,779.5s12.69-3.74,18.71,1.14,20.66,17.89,23.59,19.52S499,809.76,485.05,820s-49.77,7.32-49.77,7.32-23.43-6.84-24.08-7.16-15-7.32-15.45-7.81,4.06-33,4.06-33Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#5d618c"
                        />
                        <path
                            d="M411.52,779.5s12.69-3.74,18.71,1.14,20.66,17.89,23.59,19.52S499,809.76,485.05,820s-49.77,7.32-49.77,7.32-23.43-6.84-24.08-7.16-15-7.32-15.45-7.81,4.06-33,4.06-33Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.03"
                        />
                        <path
                            className="bag"
                            d="M374.75,441.52,374,488l-1.7,99.15-1,.87c-29.75,25.75-50.75-1.5-50.75-1.5-1.58,1.87-5,2.76-8.68,3.14a67.84,67.84,0,0,1-12.1,0l-1-.09S220.25,493,215.5,476a13.86,13.86,0,0,1,.07-8.84c1.55-4.06,5.26-6.48,8.81-7.91a31.08,31.08,0,0,1,8.12-2s-2.25-17.75-12.5-44c-5.76-14.75-5.2-22.24-3.61-26,1.24-2.91,3.11-3.53,3.11-3.53s3.16-2.33,8.25-6c4.23-3.09,9.8-7.13,16-11.6L249.5,362c21.21-15.22,46.77-33.14,52-35a7.64,7.64,0,0,1,1-.29c10.73-2.59,46.74,2.79,46.74,2.79Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#63a2ff"
                        />
                        <path
                            d="M374.75,441.52,374,488c-35.57-10.49-68.64-80-73-85.48-3.73-4.76.1-57.77,1.51-75.79,10.73-2.59,46.74,2.79,46.74,2.79Z"
                            transform="translate(-51.45 -39.57)"
                            fill="none"
                        />
                        <path
                            d="M374.75,441.52,374,488c-35.57-10.49-68.64-80-73-85.48-3.73-4.76.1-57.77,1.51-75.79,10.73-2.59,46.74,2.79,46.74,2.79Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M783,351s-27.75,14.25-31.25,70.25c0,0-4.5,28.5-7,33.5s-14.5,52.25-13,58c0,0-2.5,5.75-11.75,3.25s-59.25-10.25-70.5-17.75l-31-14.75s-60.5-42.75-73.25-6S605,512.77,605,512.77l34.25,16L743,563s13.75,6.25,23-13.75a234.68,234.68,0,0,1,21-36s21-59,20.75-69,22.5-33.75,22.5-33.75,4.5-63-32.5-61.75Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c7"
                        />
                        <path
                            d="M783,351s-27.75,14.25-31.25,70.25c0,0-4.5,28.5-7,33.5s-14.5,52.25-13,58c0,0-2.5,5.75-11.75,3.25s-59.25-10.25-70.5-17.75l-31-14.75s-60.5-42.75-73.25-6S605,512.77,605,512.77l34.25,16L743,563s13.75,6.25,23-13.75a234.68,234.68,0,0,1,21-36s21-59,20.75-69,22.5-33.75,22.5-33.75,4.5-63-32.5-61.75Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.03"
                        />
                        <path
                            d="M489.5,399.64C491,401.39,498,405,498,405s23,27.37,32.25,34.37,39.5,33.75,33.38,43.88-13,7.87-13,7.87l-54.13-37.5s-19-13.62-22.87-20.12S465,413.39,465,413.39Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c8"
                        />
                        <path
                            d="M489.5,399.64C491,401.39,498,405,498,405s23,27.37,32.25,34.37,39.5,33.75,33.38,43.88-13,7.87-13,7.87l-54.13-37.5s-19-13.62-22.87-20.12S465,413.39,465,413.39Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.03"
                        />
                        <polygon
                            points="407.68 313.32 446.55 365.44 411.55 379.07 397.05 335.44 407.68 313.32"
                            fill="#dce6f2"
                        />
                        <polygon
                            points="407.68 313.32 446.55 365.44 411.55 379.07 397.05 335.44 407.68 313.32"
                            opacity="0.03"
                        />
                        <path
                            d="M469.25,485.77l7,10.25,6,153.5s.5,14.5-3.75,18.75-39,1.5-39,1.5,1.25-156.5,1.75-159.5S469.25,485.77,469.25,485.77Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#575988"
                        />
                        <path
                            d="M469.25,485.77l7,10.25,6,153.5s.5,14.5-3.75,18.75-39,1.5-39,1.5,1.25-156.5,1.75-159.5S469.25,485.77,469.25,485.77Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M422.44,679.81a126.86,126.86,0,0,1-8,16.24s-6.5,37.09-9.27,40.51c-2,2.5-2.92,21.16-3.25,30.89-.12,3.52-.17,5.87-.17,5.87l-38.22,18.22-.17-24.08s0-.11,0-.32v0c-.24-5.31-3-66.81,2.79-70.39,3.4-2.11,6.64-11,8.83-18.29,1.67-5.63,2.72-10.34,2.72-10.34s42.46-2.76,46,1.79C425,671.53,424.1,675.47,422.44,679.81Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c8"
                        />
                        <path
                            d="M422.44,679.81c-17.22-.36-38.8-1.09-47.52-1.4,1.67-5.63,2.72-10.34,2.72-10.34s42.46-2.76,46,1.79C425,671.53,424.1,675.47,422.44,679.81Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M372.25,452.27s-11.75,62.5-9.5,102.75S361,625,366,636.77s5,38.5,5,38.5,68,2.5,75,1.5,6.75-6.25,6.75-6.25S448,629,452.5,616s3.75-52.75,3.75-52.75l19-64s5.75-28.75-6.25-40.5S372.25,452.27,372.25,452.27Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#575988"
                        />
                        <path
                            d="M775.75,782.52l-3,4.4-18.55,27.6-15.75,4.75-11.75-11.5.57-7.59,2.93-39.41S657.5,718,651,710s-31.5-15.25-31.5-15.25S581.25,677,567,646s23.75-35.75,23.75-35.75L733.5,746.77Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c7"
                        />
                        <polygon
                            points="721.35 747.34 702.8 774.94 687.05 779.69 675.3 768.19 675.87 760.6 688.8 771.69 713.05 743.44 721.35 747.34"
                            opacity="0.1"
                        />
                        <path
                            className="shoe"
                            d="M793.25,798.52,748,840.77s-26,5-49.25,1.5c-14.86-2.24-12-10.39-8.09-16l.07-.1a16.44,16.44,0,0,1,9.64-6.34c19.24-4.64,25.88-18.57,25.88-18.57l14,12L764.5,785l17.93,8.42Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#575988"
                        />
                        <path
                            d="M793.25,799,748,841.27s-26,5-49.25,1.5c-14.86-2.24-13-10.39-9.09-16a31,31,0,0,0,15.59,6.49c12.75,1.25,32,0,32,0l45.18-39.33Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#fff"
                        />
                        <path
                            d="M419.67,292.6c-3.68,1.84-5.37,7.52-6.05,14-1.15,11.06.71,24.38.71,24.38s-50-13.67-44.66-16.34c3.07-1.53,4.7-12.67,5.53-21.84.62-6.78.8-12.49.8-12.49S429.67,287.6,419.67,292.6Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c8"
                        />
                        <path
                            d="M817.67,353.27S757,410.6,759,393.94c.28-2.32-.52-5.53-2.1-9.32-5.61-13.52-21.12-34.51-33.25-49.86-8.9-11.26-16-19.49-16-19.49S783,251.94,777,287.94a43.19,43.19,0,0,0,3.29,24.18c7.51,17.68,24.15,31.59,32.46,37.73C815.75,352.06,817.67,353.27,817.67,353.27Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c7"
                        />
                        <path
                            d="M768.67,298.93c-1.09,1.35-5.13,6.09-6.33,7.34-11.4,11.87-12.92,29-30.67,29a62.34,62.34,0,0,1-8-.51c-8.9-11.26-16-19.49-16-19.49S783,251.94,777,287.94C775.58,296.48,765.5,291.45,768.67,298.93Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M794.33,270.6a62.67,62.67,0,1,1-62.66-62.66A62.42,62.42,0,0,1,794.33,270.6Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c7"
                        />
                        <path
                            d="M817.67,353.27S757,410.6,759,393.94c.28-2.32-.52-5.53-2.1-9.32l8.77-20.68a59.33,59.33,0,0,1,38.81-14.7,56.46,56.46,0,0,1,7.77.53l.5.08C815.75,352.06,817.67,353.27,817.67,353.27Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            className="dress"
                            d="M889,773.27s-43,68.66-43,74c0,0-48.67-19-66-23s-33.67-40.33-33.67-40.33-46-43.34-64-49.34C667.06,729.51,593.68,626,571.82,594.77a22,22,0,0,1,.52-25.95l.41-.53a51.09,51.09,0,0,1,49.44-18.42,51.62,51.62,0,0,1,6,1.48c31.48,9.73,86,26.45,113.5,34,9.2,2.53,15.35,4,16.6,3.91,3-.31,4.65-3,5.56-5.95a28.28,28.28,0,0,0,1.11-7.38s0-.16,0-.45A126.85,126.85,0,0,0,761,556.68c-3.21-11-8.77-23.91-18-30.08-7.66-5.11-13.75-16.38-16.94-29.48-4.29-17.69-3.3-38.74,6.27-52.52l9.25-21.82,15.47-36.5,8.62-20.34a59.33,59.33,0,0,1,38.81-14.7,56.46,56.46,0,0,1,7.77.53c6.63.92,12.36,2.91,14.75,6.83,7.33,12,24,34,27.33,56s-.66,58,10.67,71.34,18,45.33,30,52-19.33,20.66-19.33,20.66l.12,2.11.54,9.23s.22.25.62.75C883.93,579.33,947,662.28,889,773.27Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff6584"
                        />
                        <path
                            d="M877,570.69c-13.14,2.75-41.88,8.74-54.7,11.37l-2.25.46c-.75.15-1.59.29-2.5.42-12.88,1.77-40.82.9-53.61.38a28.28,28.28,0,0,0,1.11-7.38s0-.16,0-.45c9.73-.63,32.79-2.47,52.55-6.53,1.61-.33,3.2-.68,4.75-1,2.24-.52,4.42-1.07,6.5-1.65,17.72-5,36.43-5.66,47-5.56l.54,9.23S876.55,570.19,877,570.69Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#575988"
                        />
                        <path
                            d="M822.25,567.92v14.14l-2.25.46c-.75.15-1.59.29-2.5.42V569C819.11,568.63,820.7,568.28,822.25,567.92Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff6584"
                        />
                        <path
                            d="M834.5,595s-26.75,61.25-43,67.25-56.75,27.25-56.75,27.25,23.25,20.5,47.5-2S841.5,605,834.5,595Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M863.75,586.77s2.5,23.25-1,27.5S863.75,586.77,863.75,586.77Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M878.25,602s13.5,141.5-53.5,142.25C824.75,744.27,887.5,682,878.25,602Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M895.25,636s19.25,74.25-6,82.75C889.25,718.77,902.5,680.27,895.25,636Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M775.5,617c-1.25,0-52,8.75-41,15.75S775.5,617,775.5,617Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M810.5,516.77S852,553.52,844,557.52"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M807,528.52s24,29.5,21.25,31.25"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M858.25,524s11,13.75,9.25,16.75"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M869.25,516.77S885,529,881.5,533.77"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M781.75,367.77s51.25,4,49,45.25-40.5,51.75-40.5,51.75L740.5,450.52S762.75,370.52,781.75,367.77Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c7"
                        />
                        <path
                            d="M628.23,551.35c31.48,9.73,86,26.45,113.5,34A14.54,14.54,0,0,1,730,586L626.25,551.77l-4.06-1.9A51.62,51.62,0,0,1,628.23,551.35Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M803.8,449.39c-4.87,6.5-9.16,13.5-9,17.88.08,3.15-2,11.18-4.78,20.69a345.87,345.87,0,0,1-29,68.72c-3.21-11-8.77-23.91-18-30.08-7.66-5.11-13.75-16.38-16.94-29.48,2.43-9.48,4.74-17.45,5.69-19.35,2.5-5,7-33.5,7-33.5a149.76,149.76,0,0,1,2.83-21.49c3.63-17.33,9.8-29,15.47-36.5,6.84-9.12,13-12.26,13-12.26l14.75-2.25c17-.57,25.2,12.36,29.15,26.53C818.81,415.91,814.76,434.75,803.8,449.39Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M767,370s-27.75,14.25-31.25,70.25c0,0-4.5,28.5-7,33.5s-14.5,52.25-13,58c0,0-2.5,5.75-11.75,3.25s-59.25-10.25-70.5-17.75l-31-14.75s-60.5-42.75-73.25-6S589,531.77,589,531.77l34.25,16L727,582s13.75,6.25,23-13.75c2.31-5,4.78-9.75,7.19-14.07A347.65,347.65,0,0,0,787,484c2.83-9.51,4.86-17.54,4.78-20.69-.11-4.38,4.19-11.39,9-17.88,11-14.64,15-33.48,10.1-51.1-3.95-14.17-12.19-27.1-29.15-26.52Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c7"
                        />
                        <path
                            d="M419.67,292.6c-3.68,1.84-5.37,7.52-6.05,14-.65,0-1.3,0-1.95,0a54.7,54.7,0,0,1-36.47-13.84c.62-6.78.8-12.49.8-12.49S429.67,287.6,419.67,292.6Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M466.67,249.6a55,55,0,1,1-55-55A55.12,55.12,0,0,1,466.67,249.6Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c8"
                        />
                        <path
                            d="M485.25,465s-28.75,11.5-37.75,15.5-60.5-5.25-60.5-5.25-26.75-13.5-24.5-27S341,390.52,341,390.52s-.75-39.25,9.75-46.75,6.5-23.25,6.5-23.25.05-.52.21-1.37c.65-3.34,3-11.84,10.79-14.63a10.34,10.34,0,0,1,4.83-.13c7.47,1.13,19.74,6.69,29.89,11.82,8.4,4.25,15.35,8.2,16.94,9.12l.34.19s3.75,8.75,8.25,6,27,10,31.25,15.75,1.25,32.75.5,39.5S464.5,413.52,470,425,485.25,465,485.25,465Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M485.25,462s-28.75,11.5-37.75,15.5-60.5-5.25-60.5-5.25-26.75-13.5-24.5-27S341,387.52,341,387.52s-.75-39.25,9.75-46.75,6.5-23.25,6.5-23.25.05-.52.21-1.37c.65-3.34,3-11.84,10.79-14.63a10.34,10.34,0,0,1,4.83-.13c7.47,1.13,19.74,6.69,29.89,11.82,8.4,4.25,15.35,8.2,16.94,9.12l.34.19s3.75,8.75,8.25,6,27,10,31.25,15.75,1.25,32.75.5,39.5S464.5,410.52,470,422,485.25,462,485.25,462Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#dce6f2"
                        />
                        <path
                            d="M392.17,423.6s-24.67,40-28.67,42.17l1.5,14s35.17-7.34,37.34-17.17,1-39.5,1-39.5Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#575988"
                        />
                        <path
                            d="M392.17,423.6s-24.67,40-28.67,42.17l1.5,14s35.17-7.34,37.34-17.17,1-39.5,1-39.5Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.2"
                        />
                        <path
                            d="M426.88,372.64s4.37,16.88,11.25,22.63S426.88,372.64,426.88,372.64Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M384,417.14c.63,1.13,21.75,29.88,44,40.5s71.88,23.13,71.88,23.13,40.25,7.5,47.12,10.37,15.63-10-27.5-28.37-51.5-26.5-51.5-26.5S430.5,418,424.5,409,384,417.14,384,417.14Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffc1c8"
                        />
                        <path
                            d="M399.75,557c.75-.5,18.75-19.75,21-11.5S399.75,557,399.75,557Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M410.25,519c-.25.75-2.75,22-10,24.5"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M417.75,524.77S411.25,547.52,403,549"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M384.75,593s11,.25,12.5-6.75"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M399.75,638.52c1.5.25,25,15.25,19,18.25S399.75,638.52,399.75,638.52Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M401.88,765.14v2.31c-.12,3.52-.17,5.87-.17,5.87l-38.22,18.22-.17-24.08s0-.11,0-.32v0l0-1.63,15.3.49Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <polygon
                            points="357.58 760.58 325.7 772.78 311.39 764.32 311.54 752.74 311.87 727.88 327.17 728.37 350.43 727.56 350.43 744.97 357.58 760.58"
                            fill="#ff748f"
                        />
                        <path
                            d="M409,800.16l-31.88,12.2-14.31-8.46.15-11.58a23.17,23.17,0,0,0,17.58,9.1s11.22-14,18.05-18.06a4.17,4.17,0,0,1,3.26-.44v1.63Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            className="shoe"
                            d="M380.57,803.41s-13,.17-19.52-12.2c0,0-9.27,8.95-9.44,27.82s.17,19.52.17,19.52,37.41-1.46,44.41,1.14,65.72-2.28,65.72-2.28,3.9-10.25-13.83-13.83-32.37-22.45-32.86-23.26-9.76-19-16.59-15S380.57,803.41,380.57,803.41Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#5d618c"
                        />
                        <path
                            d="M415.05,188.84l-3.73-.51,2.33-.06Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M466.67,249.6a55.12,55.12,0,0,1-1.47,12.67,8.8,8.8,0,0,1-2.37-1c-1.07-.69-2.14-1.64-3.4-1.53a4.05,4.05,0,0,0-2,.92c-5.92,4.33-10.32,11.45-17.52,12.83a11.56,11.56,0,0,0,.28-6.54,13.53,13.53,0,0,1-11.85,3.8,5.71,5.71,0,0,0,.17-3.93,114.77,114.77,0,0,1-15.79,7.33c-.19-1-.37-1.92-.56-2.88-7.66,3.74-7.06,16.43-14.72,20.17-4.56,2.23-11,.63-14.15,4.65-.12.16-.23.32-.34.49a55,55,0,1,1,83.7-46.93Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            className="hair"
                            d="M415.05,186.83c-4.62-1.91-9.31-3.83-14.28-4.4s-10.33.4-14.08,3.71c-3,2.64-5.35,6.88-9.35,7-1.95.07-3.75-.91-5.5-1.76-5-2.4-11.25-3.76-15.76-.58-3.6,2.55-4.95,7.23-5.54,11.6s-.73,9-2.81,12.85c-1.29,2.4-3.25,4.36-4.87,6.55a28.3,28.3,0,0,0-5.44,19.34,56.14,56.14,0,0,0,2.18,10.05l4.08,14.41c2.07,7.32,4.18,14.74,8.12,21.25s10,12.11,17.4,13.79c4.46,1,9.86.18,12.36-3.65.64-1,1.05-2.07,1.75-3,3.1-4,9.59-2.41,14.15-4.64,7.66-3.74,7.06-16.43,14.72-20.17l.57,2.87a116.35,116.35,0,0,0,15.78-7.32,5.77,5.77,0,0,1-.16,3.93,13.57,13.57,0,0,0,11.84-3.8,11.56,11.56,0,0,1-.28,6.54c7.2-1.39,11.6-8.51,17.52-12.84a4.13,4.13,0,0,1,2-.91c1.27-.11,2.33.84,3.4,1.52a9.58,9.58,0,0,0,11.84-1.51c3.15-3.42,3.29-8.68,2.28-13.22s-3-8.87-3.43-13.5c-.63-6.31,1.57-12.9-.45-18.9-1.71-5.09-6.19-8.78-11-11.2s-10-3.83-14.91-6c-4.66-2.09-9-4.89-13.84-6.54-7-2.39-14.61-2.2-22-2"
                            transform="translate(-51.45 -39.57)"
                            fill="#794f6a"
                        />
                        <path
                            d="M416,373.1s8-53.83-60.5-51.17L321,326.52s32.91,5.92,40.83,6.79l.84.12C370,334.77,395.34,333.1,416,373.1Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M372.25,587.77v-.62C400.34,562.86,372.25,587.77,372.25,587.77Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M311.82,589.66a67.84,67.84,0,0,1-12.1,0L215.57,467.18c1.55-4.06,5.26-6.48,8.81-7.91Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#575988"
                        />
                        <path
                            d="M257.25,458.52l-4,4.75s-30.34-50.4-36.86-76c1.24-2.91,3.11-3.53,3.11-3.53s3.16-2.33,8.25-6C229.64,389.78,236.09,419.22,257.25,458.52Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#575988"
                        />
                        <path
                            d="M279.5,443l-8,4.5C249.66,421.94,247.8,379,248,361.89l5.76-4.14C254.54,380.22,279.5,443,279.5,443Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#575988"
                        />
                        <path
                            d="M300.5,438.52c-.25,3.25-9.5,36.25,4,41.75S300.5,438.52,300.5,438.52Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M329.5,495.27c.5,1.75,5,58.75,14.75,54.25s4.5-69.5,4.5-69.5Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M794.33,270.6A62.42,62.42,0,0,1,776.85,314a36.52,36.52,0,0,1-13.9.24,13.84,13.84,0,0,1-6.5-2.61,16.91,16.91,0,0,1-4.21-6.09c-3.65-7.85-5.52-16.92-10.64-23.64s-15.51-9.67-20.45-2.78c-2.69,3.74-3.14,9.49-6.73,12.08-4.31,3.12-10-.55-13.35-5-9.9-13-6.51-38.56-25.39-42.15l-.76-.13A62.67,62.67,0,0,1,794.33,270.6Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            className="hair"
                            d="M676.68,243.12c-3.06-.59-6.61-.51-8.66-3.15-1.21-1.56-1.56-3.72-1.85-5.77-1.23-8.86-1.9-18.37,1.63-26.4,5.79-13.17,20.69-17.57,33.64-16.59s25.66,5.81,38.61,5c9.52-.62,18.91-4.3,28.4-3.25,7.51.84,14.51,4.57,21.26,8.38,6.32,3.56,12.78,7.39,17.26,13.57,6.58,9.05,7.82,21.55,8,33.28.22,13.77-.75,28.07-6.53,40.19-8.38,17.59-27.07,28.06-44.49,24.91a13.84,13.84,0,0,1-6.5-2.61,17,17,0,0,1-4.2-6.09c-3.66-7.86-5.53-16.92-10.65-23.65s-15.51-9.66-20.45-2.77c-2.69,3.73-3.14,9.49-6.73,12.08-4.31,3.11-10-.56-13.35-5C692.17,272.24,695.56,246.7,676.68,243.12Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#945b79"
                        />
                        <path
                            className="hair"
                            d="M828.86,214.05c9.53,4.55,16.14,13.41,22.35,21.94,5.17,7.09,10.52,14.67,11.2,23.41.27,3.58-.26,7.22.42,10.74,2.39,12.43,18,18,22.56,29.84,2.12,5.58,1.45,11.79.52,17.69A238.69,238.69,0,0,1,880.52,343c-1.35,5-2.88,10.2-1.85,15.28.79,3.94,3,7.4,4.76,11,4.59,9.71,5.38,20.72,5.73,31.45s.34,21.65,3.55,31.89,10.29,19.92,20.5,23.23a24.09,24.09,0,0,1-11.54,4.1c-.61,3.35,1.3,6.76,4,8.88s6,3.22,9.22,4.27a17.4,17.4,0,0,1-15.32,2.36c-4.27-1.4-7.8-4.4-11.21-7.34l-19.17-16.49a54.12,54.12,0,0,1-7.07-6.88c-12.4-15.41-5-38.76-11.92-57.27-5.64-15.05-20.8-27.27-19.41-43.28.38-4.48,2.1-8.72,3.54-13a110.67,110.67,0,0,0-11.65-93.82c-2.19-3.4-4.73-6.82-8.38-8.57-5.55-2.65-13.48-1.51-16.63-6.8-1.67-2.79-2-7.7-2.15-10.83C805.7,208.85,819.34,209.5,828.86,214.05Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#945b79"
                        />
                        <path
                            d="M341.87,383.36C346.55,352.6,385,341.49,405.41,365c5.9,6.82,11.13,14.29,14.09,21.76,10,25.25,10.75,27.5,10.75,27.5s-61.75,12-61.25,21l-28-44.75S341.21,387.71,341.87,383.36Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M341.87,380.36C346.55,349.6,385,338.49,405.41,362c5.9,6.82,11.13,14.29,14.09,21.76,10,25.25,10.75,27.5,10.75,27.5s-61.75,12-61.25,21l-28-44.75S341.21,384.71,341.87,380.36Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#dce6f2"
                        />
                        <path
                            d="M359.25,340.89c.75,1.25,30.25,37.25,45.75,42.38S359.25,340.89,359.25,340.89Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M232.5,457.27s78,92,88,129.25"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M235.5,372.27s17,88,50,125,67,100,67,100"
                            transform="translate(-51.45 -39.57)"
                            fill="none"
                            stroke="#000"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            opacity="0.1"
                        />
                        <g opacity="0.1">
                            <path
                                d="M476.51,244.24a11.92,11.92,0,0,1-2.84,8,9.58,9.58,0,0,1-11.84,1.51c-1.07-.68-2.13-1.63-3.4-1.52a4.13,4.13,0,0,0-2,.91c-5.63,4.12-9.89,10.76-16.5,12.59a11.55,11.55,0,0,1-.52,5.25c7.2-1.39,11.6-8.51,17.52-12.84a4.13,4.13,0,0,1,2-.91c1.27-.11,2.33.84,3.4,1.52a9.58,9.58,0,0,0,11.84-1.51C477.26,253.84,477.45,248.72,476.51,244.24Z"
                                transform="translate(-51.45 -39.57)"
                            />
                            <path
                                d="M472.52,225.48c.08.82.22,1.63.38,2.44,0-5,1.19-10.2,0-15C472.92,217,472.1,221.32,472.52,225.48Z"
                                transform="translate(-51.45 -39.57)"
                            />
                            <path
                                d="M439.21,259.4a13.57,13.57,0,0,1-11.84,3.8,5.77,5.77,0,0,0,.16-3.93,116.35,116.35,0,0,1-15.78,7.32l-.57-2.87c-7.66,3.74-7.06,16.43-14.72,20.17-4.56,2.23-11,.62-14.15,4.64-.7.91-1.11,2-1.75,3-2.5,3.83-7.9,4.66-12.36,3.65-7.42-1.68-13.47-7.28-17.4-13.79s-6.05-13.93-8.12-21.25l-4.08-14.41c-.67-2.4-1.35-4.8-1.79-7.25,0,.74,0,1.47.11,2.2a56.14,56.14,0,0,0,2.18,10.05l4.08,14.41c2.07,7.32,4.18,14.74,8.12,21.25s10,12.11,17.4,13.79c4.46,1,9.86.18,12.36-3.65.64-1,1.05-2.07,1.75-3,3.1-4,9.59-2.41,14.15-4.64,7.66-3.74,7.06-16.43,14.72-20.17l.57,2.87A116.35,116.35,0,0,0,428,264.27a5.77,5.77,0,0,1-.16,3.93,13.57,13.57,0,0,0,11.38-3.38A11.55,11.55,0,0,0,439.21,259.4Z"
                                transform="translate(-51.45 -39.57)"
                            />
                        </g>
                        <path
                            d="M419.91,325.33c-5.38,3.1-17.88,10-20.41,8.82-2.7-1.25-32.16-11.56-42-15,.65-3.34,3-11.84,10.79-14.63a10.34,10.34,0,0,1,4.83-.13L403,316.21C411.37,320.46,418.32,324.41,419.91,325.33Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M419.91,322.33c-5.38,3.1-17.88,10-20.41,8.82-2.7-1.25-32.16-11.56-42-15,.65-3.34,3-11.84,10.79-14.63a10.34,10.34,0,0,1,4.83-.13L403,313.21C411.37,317.46,418.32,321.41,419.91,322.33Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#dce6f2"
                        />
                        <path
                            d="M815,247c-.29,11.27-1.82,22.54-6.51,32.39-8.38,17.59-27.07,28.06-44.49,24.91a13.84,13.84,0,0,1-6.5-2.61,17,17,0,0,1-4.2-6.09c-3.66-7.86-5.53-16.92-10.65-23.65s-15.51-9.66-20.45-2.77c-2.69,3.73-3.14,9.49-6.73,12.08-4.31,3.11-10-.56-13.35-5-9.9-13-6.51-38.57-25.39-42.15-3.06-.59-6.61-.51-8.66-3.15-1.21-1.56-1.56-3.72-1.85-5.77-.34-2.41-.63-4.87-.8-7.34a72.85,72.85,0,0,0,.8,16.34c.29,2.05.64,4.21,1.85,5.77,2.05,2.64,5.6,2.56,8.66,3.15,18.88,3.58,15.49,29.12,25.39,42.15,3.34,4.39,9,8.06,13.35,5,3.59-2.59,4-8.35,6.73-12.08,4.94-6.89,15.33-3.95,20.45,2.77s7,15.79,10.65,23.65a17,17,0,0,0,4.2,6.09,13.84,13.84,0,0,0,6.5,2.61c17.42,3.15,36.11-7.32,44.49-24.91,5.78-12.12,6.75-26.42,6.53-40.19C815,247.76,815,247.36,815,247Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <g opacity="0.1">
                            <path
                                d="M880.39,295c2.12,5.58,1.45,11.79.52,17.69A238.69,238.69,0,0,1,875.52,338c-1.35,5-2.88,10.2-1.85,15.28.79,3.94,3,7.4,4.76,11,4.59,9.71,5.38,20.72,5.73,31.45s.34,21.65,3.55,31.89a39.38,39.38,0,0,0,11.48,18.1A42.18,42.18,0,0,1,892.71,433c-3.21-10.24-3.21-21.16-3.55-31.89s-1.14-21.74-5.73-31.44c-1.72-3.63-4-7.09-4.76-11-1-5.08.5-10.29,1.85-15.29A238.51,238.51,0,0,0,885.91,318c.93-5.9,1.6-12.12-.52-17.7-1.71-4.47-5-8-8.57-11.43A23.36,23.36,0,0,1,880.39,295Z"
                                transform="translate(-51.45 -39.57)"
                            />
                            <path
                                d="M913.21,456.25a26.12,26.12,0,0,1-7.44-3.88,24.18,24.18,0,0,1-9.1,2.64c-.61,3.35,1.3,6.76,4,8.88a13.87,13.87,0,0,0,1.7,1.17,8,8,0,0,1-.67-4.71A24.3,24.3,0,0,0,913.21,456.25Z"
                                transform="translate(-51.45 -39.57)"
                            />
                            <path
                                d="M809.27,223.89c-3.81-1.82-8.74-1.86-12.48-3.41a10.24,10.24,0,0,0,.85,2c3.15,5.28,11.08,4.14,16.63,6.8a13.64,13.64,0,0,1,2,1.23A19.25,19.25,0,0,0,809.27,223.89Z"
                                transform="translate(-51.45 -39.57)"
                            />
                            <path
                                d="M906.63,470a17.37,17.37,0,0,1-12.09.57c-4.27-1.4-7.8-4.4-11.21-7.34l-19.17-16.49c-.91-.78-1.81-1.57-2.69-2.37.2.27.4.55.62.82a53.48,53.48,0,0,0,7.07,6.88l19.17,16.5c3.41,2.93,6.94,5.94,11.21,7.34a17.4,17.4,0,0,0,15.32-2.37A32.39,32.39,0,0,1,906.63,470Z"
                                transform="translate(-51.45 -39.57)"
                            />
                            <path
                                d="M846.21,231c5.17,7.09,10.52,14.67,11.2,23.41.27,3.58-.26,7.22.42,10.74,1.08,5.63,4.89,9.86,9.15,13.89a19.75,19.75,0,0,1-4.15-8.55c-.68-3.53-.15-7.17-.42-10.75-.68-8.74-6-16.32-11.2-23.4-3.76-5.17-7.68-10.45-12.29-14.83C841.49,224.55,843.88,227.79,846.21,231Z"
                                transform="translate(-51.45 -39.57)"
                            />
                        </g>
                        <path
                            d="M802.34,210.27s-6,10,11,18.33l1-2.67Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M801.34,210.27s-6,10,11,18.33l1-2.67Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff6584"
                        />
                        <path
                            d="M1038.05,776.26s5.5,7.19-2.53,18-14.65,20-12,26.77c0,0,12.12-20.15,22-20.43S1048.9,788.38,1038.05,776.26Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M1038.05,776.26a9.05,9.05,0,0,1,1.13,2.25c9.62,11.31,14.74,21.86,5.49,22.12-8.61.25-18.94,15.65-21.42,19.54.08.3.18.59.29.89,0,0,12.12-20.15,22-20.43S1048.9,788.38,1038.05,776.26Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M1048.27,785.42c0,2.53-.29,4.58-.64,4.58s-.63-2-.63-4.58.35-1.34.7-1.34S1048.27,782.89,1048.27,785.42Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffd037"
                        />
                        <path
                            d="M1051.77,788.44c-2.22,1.21-4.16,1.94-4.32,1.63s1.49-1.54,3.71-2.75,1.35-.33,1.52,0S1054,787.23,1051.77,788.44Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffd037"
                        />
                        <path
                            d="M1009,776.26s-5.5,7.19,2.53,18,14.65,20,12,26.77c0,0-12.11-20.15-22-20.43S998.19,788.38,1009,776.26Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M1009,776.26a9.05,9.05,0,0,0-1.13,2.25c-9.62,11.31-14.74,21.86-5.49,22.12,8.61.25,18.94,15.65,21.42,19.54a7.76,7.76,0,0,1-.3.89s-12.11-20.15-22-20.43S998.19,788.38,1009,776.26Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.1"
                        />
                        <path
                            d="M998.82,785.42c0,2.53.29,4.58.64,4.58s.63-2,.63-4.58-.35-1.34-.7-1.34S998.82,782.89,998.82,785.42Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffd037"
                        />
                        <path
                            d="M995.32,788.44c2.22,1.21,4.15,1.94,4.32,1.63s-1.49-1.54-3.71-2.75-1.35-.33-1.52,0S993.1,787.23,995.32,788.44Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ffd037"
                        />
                        <path
                            d="M1000.57,820.12s15.36-.48,20-3.77,23.63-7.24,24.78-2,23.08,26.29,5.74,26.43-40.29-2.7-44.91-5.51S1000.57,820.12,1000.57,820.12Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#a8a8a8"
                        />
                        <path
                            d="M1051.39,839c-17.34.14-40.29-2.7-44.91-5.51-3.52-2.15-4.92-9.84-5.39-13.38h-.52s1,12.39,5.6,15.21,27.57,5.65,44.91,5.51c5,0,6.73-1.82,6.64-4.46C1057,838,1055.11,839,1051.39,839Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.2"
                        />
                        <path
                            d="M314.09,802.49a11.68,11.68,0,0,0,3.84-5.78c.49-2.3-.49-5.06-2.68-5.9-2.46-.94-5.09.77-7.08,2.49s-4.28,3.69-6.89,3.32a10.47,10.47,0,0,0,3.24-9.81,4.12,4.12,0,0,0-.9-2c-1.36-1.46-3.84-.83-5.48.32-5.2,3.65-6.65,10.72-6.67,17.07-.53-2.29-.09-4.68-.1-7s-.66-5-2.64-6.22a8,8,0,0,0-4-1c-2.34-.09-4.94.15-6.54,1.86-2,2.12-1.47,5.69.26,8s4.35,3.81,6.76,5.42a15,15,0,0,1,4.84,4.61,4.83,4.83,0,0,1,.36.83H305A40.77,40.77,0,0,0,314.09,802.49Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M197.66,818.26s-14-47.7,2.63-82.82a75.41,75.41,0,0,0,6.1-47.27,127.26,127.26,0,0,0-6.7-22.19"
                            transform="translate(-51.45 -39.57)"
                            fill="none"
                            stroke="#535461"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        />
                        <path
                            d="M210.08,643.79c0,5.84-10.59,22.8-10.59,22.8s-10.59-17-10.59-22.8a10.59,10.59,0,0,1,21.18,0Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M227.58,676.17c-3.18,4.91-21.28,13.39-21.28,13.39s.32-20,3.5-24.89a10.59,10.59,0,0,1,17.78,11.5Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M226.81,731.52c-5.22,2.63-25.13.81-25.13.81s10.38-17.08,15.6-19.72a10.59,10.59,0,1,1,9.53,18.91Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M216.8,773.26c-4.7,3.48-24.63,5-24.63,5s7.34-18.59,12-22.07a10.59,10.59,0,1,1,12.59,17Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M184.07,690.69c4.19,4.08,23.73,8.3,23.73,8.3s-4.79-19.41-9-23.49a10.59,10.59,0,1,0-14.75,15.19Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M173,739.66c5.22,2.63,25.13.82,25.13.82s-10.37-17.09-15.6-19.72a10.58,10.58,0,1,0-9.53,18.9Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M168.74,788.74c4.7,3.47,24.63,5,24.63,5s-7.34-18.6-12-22.08a10.59,10.59,0,0,0-12.59,17Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M210.08,643.79c0,5.84-10.59,22.8-10.59,22.8s-10.59-17-10.59-22.8a10.59,10.59,0,0,1,21.18,0Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M227.58,676.17c-3.18,4.91-21.28,13.39-21.28,13.39s.32-20,3.5-24.89a10.59,10.59,0,0,1,17.78,11.5Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M226.81,731.52c-5.22,2.63-25.13.81-25.13.81s10.38-17.08,15.6-19.72a10.59,10.59,0,1,1,9.53,18.91Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M216.8,773.26c-4.7,3.48-24.63,5-24.63,5s7.34-18.59,12-22.07a10.59,10.59,0,1,1,12.59,17Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M184.07,690.69c4.19,4.08,23.73,8.3,23.73,8.3s-4.79-19.41-9-23.49a10.59,10.59,0,1,0-14.75,15.19Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M173,739.66c5.22,2.63,25.13.82,25.13.82s-10.37-17.09-15.6-19.72a10.58,10.58,0,1,0-9.53,18.9Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M168.74,788.74c4.7,3.47,24.63,5,24.63,5s-7.34-18.6-12-22.08a10.59,10.59,0,0,0-12.59,17Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#ff63b5"
                        />
                        <path
                            d="M164.45,815.26s17.11-3.4,21.67-7.93,25.1-12.46,27.38-6.8,30.8,24.92,11.41,28.32-45.63,4.53-51.34,2.26S164.45,815.26,164.45,815.26Z"
                            transform="translate(-51.45 -39.57)"
                            fill="#a8a8a8"
                        />
                        <path
                            d="M224.91,826.74c-19.4,3.4-45.63,4.53-51.34,2.27-4.34-1.73-7.36-10-8.55-13.87l-.57.12s3.42,13.59,9.12,15.85,31.94,1.14,51.34-2.26c5.59-1,7.19-3.29,6.59-6.2C231,824.55,229.07,826,224.91,826.74Z"
                            transform="translate(-51.45 -39.57)"
                            opacity="0.2"
                        />
                    </svg>
                </div>
                <div className="picker-wrapper">
                    <h1>Pick Color</h1>

                    <div className="title-container">
                        <h3>Hair</h3>
                        <img
                            src="/images/hair.png"
                            style={{ height: '60px' }}
                        />
                    </div>
                    <div className="card-wrapper">
                        <div
                            className="card brown"
                            onClick={() => changeColor('hair', '#9a3300')}
                        ></div>
                        <div
                            className="card black"
                            onClick={() => changeColor('hair', 'black')}
                        ></div>
                        <div
                            className="card yellow"
                            onClick={() => changeColor('hair', '#fff595')}
                        ></div>
                        <div
                            className="card purple"
                            onClick={() => changeColor('hair', '#945b79')}
                        ></div>
                    </div>

                    <div className="title-container">
                        <h3>Dress</h3>
                        <img
                            src="/images/dress.png"
                            style={{ height: '60px' }}
                        />
                    </div>
                    <div className="card-wrapper">
                        <div
                            className="card red"
                            onClick={() => changeColor('dress', '#ff6363')}
                        ></div>
                        <div
                            className="card blue"
                            onClick={() => changeColor('dress', '#63a2ff')}
                        ></div>
                        <div
                            className="card green"
                            onClick={() => changeColor('dress', '#6ee5aa')}
                        ></div>
                        <div
                            className="card pink"
                            onClick={() => changeColor('dress', '#fc83bd')}
                        ></div>
                    </div>

                    <div className="title-container">
                        <h3>Bag</h3>
                        <img src="/images/bag.png" style={{ height: '60px' }} />
                    </div>
                    <div className="card-wrapper">
                        <div
                            className="card red"
                            onClick={() => changeColor('bag', '#ff6363')}
                        ></div>
                        <div
                            className="card yellow"
                            onClick={() => changeColor('bag', '#fff595')}
                        ></div>
                        <div
                            className="card pink"
                            onClick={() => changeColor('bag', '#fc83bd')}
                        ></div>
                        <div
                            className="card blue"
                            onClick={() => changeColor('bag', '#63a2ff')}
                        ></div>
                    </div>

                    <div className="title-container">
                        <h3>Shoes</h3>
                        <img
                            src="/images/shoes.png"
                            style={{ height: '60px' }}
                        />
                    </div>
                    <div className="card-wrapper">
                        <div
                            className="card black"
                            onClick={() => changeColor('shoe', 'black')}
                        ></div>
                        <div
                            className="card blue"
                            onClick={() => changeColor('shoe', '#63a2ff')}
                        ></div>
                        <div
                            className="card yellow"
                            onClick={() => changeColor('shoe', '#fff595')}
                        ></div>
                        <div
                            className="card purple"
                            onClick={() => changeColor('shoe', '#945b79')}
                        ></div>
                    </div>
                </div>

                <div className="picker-wrapper">
                    <h1>Show Animation</h1>
                    <div style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>
                        <label className="switch">
                            <span style={{ marginRight: '1rem' }}>Cloud</span>
                            <Switch
                                checkedIcon={false}
                                uncheckedIcon={false}
                                onChange={handleChangeCloud}
                                checked={showCloud}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label className="switch">
                            <span style={{ marginRight: '1rem' }}>Rain</span>
                            <Switch
                                checkedIcon={false}
                                uncheckedIcon={false}
                                onChange={handleChangeRain}
                                checked={showRain}
                            />
                        </label>
                    </div>
                    <div>
                        <label className="switch">
                            <span style={{ marginRight: '1rem' }}>Sun</span>
                            <Switch
                                checkedIcon={false}
                                uncheckedIcon={false}
                                onChange={handleChangeSun}
                                checked={showSun}
                            />
                        </label>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .wrapper {
                    display: flex;
                }

                .picker-wrapper {
                    padding: 0.5rem 2rem 2rem;
                }

                .card-wrapper {
                    display: flex;
                }

                .card {
                    width: 4rem;
                    height: 4rem;
                    border-radius: 8px;
                    margin-right: 1rem;
                    cursor: pointer;
                }

                .card.red {
                    background-color: #ff6363;
                }

                .card.blue {
                    background-color: #63a2ff;
                }

                .card.black {
                    background-color: black;
                }

                .card.yellow {
                    background-color: #fff595;
                }

                .card.brown {
                    background-color: #9a3300;
                }

                .card.purple {
                    background-color: #945b79;
                }
                .card.pink {
                    background-color: #fc83bd;
                }
                .card.green {
                    background-color: #6ee5aa;
                }
                .card.lightPink {
                    background-color: #ff63b5;
                }

                .hide {
                    opacity: 0;
                    transition: opacity 1.5s;
                }

                .show {
                    opacity: 1;
                    transition: opacity 1.5s;
                }

                .switch {
                    display: flex;
                    align-items: center;
                }

                .switch > span {
                    font-weight: bold;
                    width: 70px;
                    font-size: 1.5rem;
                }

                .sun {
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    z-index: 1;
                    top: 3rem;
                    left: 3rem;
                    display: block;
                }

                .sun > img {
                    width: 100%;
                    height: 100%;
                }

                h3 {
                    margin-top: 2.5rem;
                    font-size: 1.5rem;
                }

                .title-container {
                    display: flex;
                    align-items: center;
                }

                .title-container img {
                    margin-top: 0.5rem;
                    margin-left: 12px;
                }
                //rambut
                /* transform: rotate(350deg) translate(-4px, 0px);
    transform-origin: center; */
            `}</style>
        </Layout>
    )
}
