import css from 'styled-jsx/css'
const assetPrefix = process.env.config?.assetPrefix ?? ''
export default css`
    .search-input {
        background: #fbfbfb;
        padding: 10px 40px 10px 13px;
        outline: 0;
        border: 0;
        width: 75%;
        border-radius: 0 11px 11px 0;
    }

    .search-input > i {
        position: absolute;
        top: 50%;
        right: 14px;
        transform: translate(0, -50%);
        display: block;
        width: 20px;
        height: 20px;
        background-image: url(${assetPrefix}/images/partner/search-icon.svg);
        background-size: contain;
        background-repeat: no-repeat;
    }
`
