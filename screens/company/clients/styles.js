import theme from '../../../components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 155px;
        padding: 57px ${theme.offset.container};
    }

    .content-title {
        margin: 0 0 70px;
        font-weight: 300;
        font-size: 42px;
        line-height: 1.19;
        color: ${theme.colors.black};
    }

    .content-description {
        width: 87%;
    }

    .content-description p {
        margin-bottom: 20px;
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 70px;
        margin-top: 70px;
    }

    .logo-image-wrapper {
        position: relative;
    }

    .logo-image-wrapper img {
        opacity: 1;
        transition: 0.3s opacity ease-in-out;
    }

    .logo-image-wrapper img.img-hover {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: 0.3s opacity ease-in-out;
    }

    .logo-image-wrapper img:hover.img-hover {
        opacity: 1;
        transition: 0.3s opacity ease-in-out;
    }
`
