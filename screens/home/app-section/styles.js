import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    /* Fourth Section - start */
    .fourth-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 800px;
        line-height: 1;
    }
    .fourth-wrapper > div:last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    /* Fourth Section - end */
`
