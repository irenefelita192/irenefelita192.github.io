import css from 'styled-jsx/css'
import theme from 'components/global-styles/theme'
const assetPrefix = process.env.config?.assetPrefix ?? ''

export default css`
    .navbar {
        font-family: 'Bree Serif', serif;
        font-size: 16px;
        line-height: 1.18;
        background-color: #ffffff;
        color: ${theme.colors.black};
        height: ${theme.header.height};
        padding: 0 10%;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        min-height: 0;
        transition: all 0.2s ease-in;
    }

    .navbar.is-trans {
        background-color: transparent;
        color: ${theme.colors['vida-white']};
    }

    .navbar.is-trans:before {
        content: '';
        width: 76%;
        position: absolute;
        border-bottom: 1px solid rgba(252, 252, 252, 0.35);
        bottom: 0;
        left: 12%;
    }

    .navbar-item {
        color: ${theme.colors.black};
        padding: 0;
        margin: 0 30px;
        text-transform: capitalize;
        transition: color 0.2s ease-in-out;
    }

    .navbar-menu {
        justify-content: center;
    }
    .navbar-start {
        margin-right: 0;
        justify-content: center;
    }

    .navbar-brand {
        position: absolute;
        left: 12%;
        top: 50%;
        transform: translate(-12%, -50%);
    }

    .navbar.is-trans .navbar-item {
        color: ${theme.colors['vida-white']};
    }

    a.navbar-item i.caret-down {
        //background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFYSURBVHgBtVK9ToNQFAZu0himO0DiyEICTDxC3TrW0a3d3OwbtD6Bj1Dd3KxP0HbSzU5AmBhNIAQnDCHgd0xvcwdoNcYvufcczs93zj0HRfknqELxPG9CMgiCe+UPsG3bZ4wVqkS6JL1t21VZltMkSQrllwDPHGJBukZX0zQHp6qqY13X3xzHsZQfwrIsDtKlICUwurIs25mmSd0P93ZOBTjn2zzP34+RUgODweBFyqVX75j4SNN0YxjGBwhHghyzuiYbCr/2kA4Rs4Z6LpE+YJRXTA4kAnT+DOcIBTjZqBBsVHgrx7que6Np2iPUM8l8G4bhrCiKT7XveSBc41hSJ99LJR07uIOYSCkF9nQZRdFGGDqJCb7v86qqaCFjyZwQCbmlggnOBUgTOb+XWADbXkDMu3z7ec66fk2mnEDHUgUO8+zKO9mxADr30eETLbWu62kcx6tj8V+5U5U9TwyGJAAAAABJRU5ErkJggg==);
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACkSURBVHgBtZEBDYAgEEWPBkYgghGMYAQbSANtog2MYgQjaIPzcKAMb8rh/NsNBp+34x/AT1J+g4jNcaDUCB9EnJKW7YTipYmqgAzRu85DOLDVQqUFwIJqCAHhZc/AywSodt5Qc2wyeJd5gFZUa+Qf2Shtl0wHHeNrmSZ6yPjeMVRk8nRdV5AiB5giwGLzY840SIX3ob7nKYAbcZ4CuB+qzbN+8++0Z4GG6TFufQAAAABJRU5ErkJggg==);
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        right: -20px;
        top: 45%;
        display: block;
        width: 10px;
        height: 10px;
    }

    a.navbar-item span {
        z-index: 2;
    }

    a.navbar-item:hover,
    a.navbar-item:focus,
    a.navbar-item:active,
    .navbar-item.has-dropdown:hover .navbar-link {
        background-color: transparent;
        color: ${theme.colors['vida-green']};
    }

    .navbar-item.has-dropdown:hover .navbar-link:after {
        border-color: ${theme.colors['vida-green']};
    }

    /* a.navbar-item:hover:after {
        content: '';
        position: absolute;
        top: 65%;
        display: block;
        width: 100%;
        height: 1px;
        background: #ffffff;
    } */

    .navbar .navbar-item.is-active {
        color: ${theme.colors['vida-green']};
    }

    .navbar.is-trans .navbar-item.is-active {
        color: ${theme.colors['vida-white']};
    }

    .navbar .navbar-item.is-active span:after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        left: 0;
        background-color: ${theme.colors['vida-green']};
        z-index: 1;
        border-radius: 16px;
    }

    .navbar.is-trans .navbar-item.is-active span:after {
        background-color: ${theme.colors['vida-white']};
    }

    .navbar-item.is-active span:after {
        background-color: ${theme.colors['vida-white']};
    }
    /* .navbar a.navbar-item:hover:after {
        content: '';
        position: absolute;
        top: 65%;
        display: block;
        width: 100%;
        height: 1px;
        background: ${theme.colors.black};
    } */

    /* .navbar a.navbar-item.is-active:hover:after,
    .navbar .navbar-brand a.navbar-item:hover:after {
        display: none;
    } */

    /* a.navbar-item.is-active:before {
        content: '';
        position: absolute;
        left: -29px;
        display: block;
        background-color: ${theme.header.activeBgColor};
        color: #ffffff;
        height: 36px;
        width: 100%;
        padding: 0 28px;
        box-sizing: content-box;
        border-radius: 60px;
        z-index: 1;
    } */

    .navbar-item.has-dropdown .navbar-link {
        padding-left: 0;
        padding-right: 18px;
    }

    .navbar-brand a.navbar-item img {
        height: 44px;
        max-height: none;
    }

    .navbar.is-trans img,
    img.is-white {
        display: none;
    }

    .navbar.is-trans img.is-white {
        display: block;
    }

    .navbar-brand a.navbar-item:hover:after {
        display: none;
    }

    .navbar-menu.is-active .navbar-item {
        color: ${theme.colors.black};
        background-color: transparent;
        margin: 15px 30px;
    }

    .navbar-menu.is-active .navbar-lang {
        display: flex;
        align-items: center;
    }

    .navbar-menu.is-active .navbar-item.navbar-lang i {
        display: inline-block;
    }

    .navbar-menu.is-active .navbar-dropdown .navbar-item:hover:after,
    .navbar-menu.is-active a.navbar-item.is-active:before,
    .navbar-menu.is-active a.navbar-item:hover:after {
        display: none;
    }

    .navbar .navbar-menu.is-active .navbar-item.is-active {
        color: ${theme.colors.black};
    }

    .navbar-menu.is-active .navbar-item.has-dropdown {
        /* margin: 10px 30px 10px 50px; */
    }

    .navbar-menu.is-active .navbar-item.has-dropdown .navbar-link {
        margin: 0;
        padding: 0;
        color: ${theme.colors.black};
    }

    .navbar.is-trans .navbar-menu.is-active .navbar-item.is-active,
    .navbar.is-trans
        .navbar-menu.is-active
        .navbar-item.has-dropdown
        .navbar-link {
        color: ${theme.colors['vida-white']};
    }

    .navbar-link.is-active,
    .navbar-link:focus,
    .navbar-link:focus-within,
    .navbar-link:hover,
    .navbar-item.is-active,
    .navbar-item:focus,
    .navbar-item:focus-within,
    .navbar-item:hover {
        background-color: transparent;
        color: inherit;
    }

    .navbar .navbar-lang:hover:after {
        display: none;
    }

    .navbar-menu.is-active .navbar-link:not(.is-arrowless)::after {
        border-color: ${theme.colors.black};
        border-width: 2px;
    }

    .navbar-menu.is-active .navbar-item.has-dropdown .navbar-dropdown {
        margin: 0;
        padding: 0;
    }

    .navbar-item.has-dropdown.is-active .navbar-link {
        background-color: transparent;
        color: ${theme.colors['vida-green']};
    }

    /* download section start */

    .app-section {
        position: absolute;
        right: 12%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .app-section a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 96px;
        height: 36px;
        padding: 8px 16px;
        color: ${theme.colors['vida-gray']};
        border: 1px solid ${theme.colors['vida-gray']};
        box-sizing: border-box;
        border-radius: 19px;
        font-size: 12px;
        line-height: 1.67;
    }

    .app-section a:first-child {
        margin-right: 16px;
    }

    .app-section a:first-child i {
        background-image: url(${assetPrefix}/images/logo/apple-gray.svg);
    }

    .app-section a:last-child i {
        background-image: url(${assetPrefix}/images/logo/android-gray.svg);
    }

    .app-section a > i {
        display: block;
        width: 13px;
        height: 13px;
        background-size: contain;
        background-repeat: no-repeat;
        padding-right: 16px;
    }

    .navbar.is-trans .app-section a {
        color: ${theme.colors['vida-white']};
        border: 1px solid ${theme.colors['vida-white']};
    }

    .navbar.is-trans .app-section a:first-child i {
        background-image: url(${assetPrefix}/images/logo/apple.svg);
    }

    .navbar.is-trans .app-section a:last-child i {
        background-image: url(${assetPrefix}/images/logo/android.svg);
    }

    /* download section end */

    /* submenu start*/

    .submenu-wrapper {
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: rgba(244, 241, 238, 0.7);
        height: 0;

        /* height: 180px; */
        align-items: center;
        justify-content: center;
        display: flex;
        transition: height 0.3s ease-in;
    }

    .submenu-inner {
        opacity: 0;
        margin: 0;
        padding: 0;
        display: flex;
        transition: opacity 0.25s ease-in;
        pointer-events: none;
    }

    .submenu-item {
        width: 224px;
        height: 129px;
        margin-right: 20px;
        border: 1px solid #cfcfcf;
        background-color: ${theme.colors['vida-white']};
        border-radius: 18px;
        color: ${theme.colors['vida-black']};
        padding: 24px 16px;
        text-transform: none;
    }

    .submenu-item:last-child {
        margin-right: 0;
    }

    .submenu-item:hover {
        padding: 22px 14px;
        border: 3px solid ${theme.colors['vida-green-fresh']};
    }

    .submenu-header {
        display: flex;
    }

    .submenu-item:hover .submenu-header {
        animation: fadein 0.3s ease-in;
        color: ${theme.colors['vida-green']};
    }

    .submenu-icon {
        height: 28px;
        width: auto;
        margin-right: 8px;
    }

    .submenu-icon img {
        height: 100%;
        width: auto;
        max-height: initial;
    }

    .submenu-item:hover img,
    .submenu-icon img.hover-icon {
        display: none;
    }

    .submenu-item:hover img.hover-icon {
        display: block;
    }

    @keyframes fadein {
        from {
            opacity: 0.8;
        }
        to {
            opacity: 1;
        }
    }

    .submenu-title {
        font-size: 18px;
        line-height: 1.33;
    }

    .submenu-desc {
        font-family: 'Inter', serif;
        font-size: 12px;
        line-height: 1.33;
        font-weight: 400;
        margin-top: 8px;
    }

    .navbar-item.has-dropdown.submenu-open .submenu-wrapper {
        height: 200px;
        transition: height 0.3s ease-out;
    }

    .navbar-item.has-dropdown.submenu-open .submenu-inner {
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.4s ease-in;
    }

    .navbar-item.has-dropdown,
    .navbar-start,
    .navbar-menu {
        position: unset;
    }

    .navbar-link:not(.is-arrowless)::after {
        border-color: inherit;
        border-radius: 1px;
        border-width: 2px;
        right: 0;
        height: 7px;
        width: 7px;
        margin-top: -0.275em;
    }

    .navbar-item.has-dropdown.is-active .navbar-link:not(.is-arrowless)::after {
        border-color: ${theme.colors['vida-green']};
    }

    .navbar.is-trans .navbar-link:not(.is-arrowless)::after,
    .navbar.is-trans
        .navbar-item.has-dropdown.is-active
        .navbar-link:not(.is-arrowless)::after {
        border-color: inherit;
    }

    .navbar-link {
        color: inherit;
    }

    .navbar.is-trans .navbar-item.has-dropdown:hover .navbar-link {
        color: ${theme.colors['vida-white']};
    }
    /* submenu end*/

    .download {
        margin: 28px 40px;
    }

    .copyright {
        font-weight: 300;
        font-size: 14px;
        line-height: 1.43;
        color: ${theme.colors['vida-black']};
        opacity: 0.8;
        padding: 12px;
        text-align: center;
        box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 1280px) {
        .navbar {
            padding: 0 7%;
        }

        .navbar.is-trans:before {
            width: 82%;
            left: 9%;
        }

        .navbar-brand {
            left: 9%;
        }

        .app-section {
            right: 9%;
        }
    }

    @media screen and (max-width: 1180px) {
        .navbar-item {
            margin: 0 20px;
        }
    }

    @media screen and (max-width: 1023px) {
        .app-section {
            display: none;
        }

        .navbar {
            padding: 0;
        }

        .navbar-menu.is-active {
            position: relative;
            top: -1px;
        }

        .navbar-burger {
            color: ${theme.colors.black};
            background-color: transparent;
            height: ${theme.header.height};
            margin-right: 12px;
        }

        .navbar-burger span {
            height: 2px;
            width: 24px;
        }

        .navbar-burger span:nth-child(1) {
            top: calc(50% - 7px);
        }

        .navbar-burger span:nth-child(2) {
            top: calc(50% - 1px);
        }

        .navbar-burger span:nth-child(3) {
            top: calc(50% + 5px);
        }

        .navbar-burger.is-active span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
        }

        .navbar-link:not(.is-arrowless)::after {
            display: none;
        }

        .navbar-menu.is-active {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: none;
            padding: 0;
        }

        .navbar-menu .navbar-item {
            transform: translateX(-50%);
            opacity: 0;
        }

        .navbar-menu.is-active .navbar-item {
            margin: 0 24px;
            padding: 14px;
            border-radius: 24px;
            transition: background-color 0.3s ease-in-out;
            background-color: transparent;
            font-size: 18px;
        }

        .animation-slide-right {
            animation: 0.2s slide-right 0.1s forwards;
        }

        @keyframes slide-right {
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .navbar-menu.is-active .navbar-item.has-dropdown.submenu-open {
            background-color: #f3ebe4;
            border-radius: 24px;
        }

        .submenu-content {
            display: block;
            color: #000000;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 17px;
            line-height: 1.53;
            font-family: 'Inter', sans-serif;
            padding: 18px 18px 0;
            text-transform: none;
        }

        .navbar-menu.is-active .navbar-item.is-active span {
            position: relative;
            color: ${theme.colors['vida-green']};
        }

        .navbar-menu.is-active .navbar-item.is-active span:after {
            display: block;
            width: 100%;
        }

        .navbar-menu.is-active :global(.accordion-label:after) {
            border: 2px solid #000000;
            border-radius: 1px;
            border-right: 0;
            border-top: 0;
            content: ' ';
            display: block;
            height: 8px;
            width: 8px;
            pointer-events: none;
            transform: rotate(-45deg);
            transform-origin: center;
            margin-right: 2px;
            margin-top: -2px;
        }

        .navbar-menu.is-active
            .navbar-item
            :global(.accordion-label.is-open:after) {
            transform: rotate(135deg);
        }

        .navbar-menu.is-active
            .navbar-item.is-active
            :global(.accordion-label:after) {
            color: ${theme.colors['vida-green']};
        }

        .navbar-menu.is-active .navbar-item.is-active span:after {
            bottom: -7px;
            height: 4px;
        }

        .navbar-item.has-dropdown.is-active :global(.accordion-content) {
            margin-top: 10px;
        }

        .navbar-brand .brand-active {
            opacity: 0;
        }

        /*static image start */
        .static-blob-top {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            pointer-events: none;
        }

        .static-blob-bottom {
            position: absolute;
            bottom: -6px;
            right: 0;
            z-index: 10;
            pointer-events: none;
        }
        /*static image end */
    }

    @media screen and (max-width: 320px) {
        .navbar-menu.is-active .navbar-item {
            font-size: 15px;
        }

        .download {
            margin: 15px 40px;
        }

        .download :global(.download-link) {
            height: 56px;
        }
    }
`
