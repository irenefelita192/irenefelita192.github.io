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

export default function ProductSection() {
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
        <div className="third-wrapper">
            {products &&
                products.map((prd) => {
                    return (
                        <CSSTransition
                            in={productActive == prd.id}
                            timeout={100}
                            classNames="default-img-transition"
                        >
                            <div
                                key={prd.id}
                                className={`product-wrapper ${
                                    productActive == prd.id ? 'is-active' : ''
                                }`}
                            >
                                <div style={{ backgroundColor: prd.color }}>
                                    <h2>{prd.title}</h2>
                                    <div>{prd.description}</div>
                                    <div className="btn-navigation">
                                        <div
                                            className={`btn-prev ${
                                                productActive == 1
                                                    ? 'disabled'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                handleNavigate('prev')
                                            }
                                        >
                                            <i
                                                style={{
                                                    backgroundImage: `url(${assetPrefix}/images/home/btn-prev.svg)`,
                                                }}
                                            ></i>
                                        </div>
                                        <div
                                            className={`btn-next ${
                                                productActive == products.length
                                                    ? 'disabled'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                handleNavigate('next')
                                            }
                                        >
                                            <i
                                                style={{
                                                    backgroundImage: `url(${assetPrefix}/images/home/btn-next.svg)`,
                                                }}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={prd.image} alt="" />
                                </div>
                            </div>
                        </CSSTransition>
                    )
                })}
            <style jsx>{styles}</style>
        </div>
    )
}
