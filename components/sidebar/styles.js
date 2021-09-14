import theme from 'components/global-styles/theme'
import css from 'styled-jsx/css'

export default css`
    .wrapper {
        padding: 57px ${theme.offset.container};
    }

    .menu {
        padding: 122px 0 0;
    }

    .menu-label {
        color: ${theme.colors.gold};
        font-weight: 600;
        font-size: 18px;
        line-height: 1.11;
        text-transform: uppercase;
        margin-bottom: 20px;
        letter-spacing: initial;
    }

    .menu-list a:hover {
        background-color: transparent;
    }

    .menu-list a {
        color: ${theme.colors.black};
        border-radius: 0;
        padding: 0 0 20px;
    }

    .menu-list .is-active a {
        font-weight: 600;
    }

    .menu-list .is-active a:after {
        content: '';
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABPSURBVHgB7Y5BCgAgCASXPlo/9wn2g0rwEJGJdKyFBZEZWADIozxKersRsE11JV4EVyob4Us3EqeD0Da/asHZmFSehCUUgSUcgaEAqejCHVnTZBsppXOnAAAAAElFTkSuQmCC);
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-left: 8px;
    }

    @media screen and (max-width: 640px) {
        .menu {
            display: none;
        }
    }
`
