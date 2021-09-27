import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './styles'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

const products = [
    {
        id: 1,
        title: 'Protect Yourself & Your Loved Ones',
        description:
            'You and those who matter deserve a better companion in every season in life. Vida is a reliable healthcare partner for today and tomorrow.',
        image: `${assetPrefix}/images/home/outpatient@2x.jpg`,
        color: '#F88449',
    },
    {
        id: 2,
        title: 'Cast Away The Stress',
        description:
            'Focus on your treatment to get better and let Vida handle the rest.',
        image: `${assetPrefix}/images/home/inpatient@2x.jpg`,
        color: '#E6C031',
    },
    {
        id: 3,
        title: 'Life Full of Smiles',
        description:
            'Your simple and beautiful smile changes the world. Maintain your dental health to bring out happiness from within.',
        image: `${assetPrefix}/images/home/dental@2x.jpg`,
        color: '#3989D7',
    },
    {
        id: 4,
        title: 'Celebrate A New Life',
        description:
            'It’s never too early for a couple prepare and plan the warmest welcome for a new generation',
        image: `${assetPrefix}/images/home/maternity@2x.jpg`,
        color: '#EA95C1',
    },
]

export default function AppSection() {
    const [productActive, setProductActive] = useState(1)

    useEffect(() => {
        return () => {}
    }, [])

    const handleNavigate = (direction) => {
        if (direction == 'prev' && productActive > 1) {
            setProductActive(productActive - 1)
        }

        if (direction == 'next' && productActive < products.length) {
            setProductActive(productActive + 1)
        }
    }

    return (
        <div className="fourth-wrapper">
            <CSSTransition
                // in={productActive == prd.id}
                timeout={100}
                classNames="default-img-transition"
            >
                <div></div>
            </CSSTransition>

            <div>
                <h2>You’re in Control Only With a Few Taps</h2>
                <div>
                    We make it happen with a mobile app that fits everyone’s
                    needs. Manage your protection single handedly. Never has it
                    been simpler and better with Vida.
                </div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}
