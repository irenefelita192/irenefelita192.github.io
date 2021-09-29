import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    /*banner Section - start*/

    .banner-section {
        background-color: #f3ebe4;
        padding: 60px 19%;
        min-height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Museo', sans-serif;
        font-weight: normal;
        font-size: 36px;
        line-height: 1;
        text-align: center;
        color: ${theme.colors['vida-white']};
        background-repeat: no-repeat;
        background-position: bottom right;
    }

    .banner-section.is-download {
        font-size: 30px;
        line-height: 1.13;
    }

    .banner-desc {
        font-size: 16px;
        line-height: 1.37;
        padding-top: 12px;
    }

    a.banner-link {
        display: block;
        background: ${theme.colors['vida-white']};
        color: #015651;
        box-sizing: border-box;
        border-radius: 16px;
        padding: 17px 28px;
        margin-top: 24px;
        font-weight: 600;
        font-size: 18px;
        line-height: 1.1;
        text-align: center;
        color: #015651;
    }

    .download-link {
        display: block;
        width: auto;
        height: 62px;
        padding: 8px 0;
        text-align: center;
        border: 1px solid ${theme.colors['vida-black']};
        box-sizing: border-box;
        border-radius: 11px;
    }

    .download-link img {
        width: auto;
        height: 100%;
    }
    /*banner Section - end*/
`
