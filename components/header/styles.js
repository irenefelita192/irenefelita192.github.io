import css from 'styled-jsx/css'
import theme from '../global-styles/theme'

export default css`
    .navbar {
        font-family: 'Bree Serif', serif;
        font-size: 14px;
        line-height: 1.43;
        background-color: #ffffff;
        color: ${theme.colors.black};
        height: ${theme.header.height};
        padding: 0 150px;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        min-height: 0;
    }

    .navbar.scroll-down {
        transform: translate(0, -82px);
        transition: transform 0.3s ease-in-out;
    }

    .navbar.scroll-up {
        transform: translate(0, 0);
        transition: transform 0.3s ease-in-out;
    }

    .navbar-item {
        color: ${theme.colors.black};
        padding: 0;
        margin: 0 30px;
        text-transform: uppercase;
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
    a.navbar-item:active {
        background-color: transparent;
    }

    a.navbar-item:hover:after {
        content: '';
        position: absolute;
        top: 65%;
        display: block;
        width: 100%;
        height: 1px;
        background: #ffffff;
    }

    .navbar .navbar-item.is-active {
        color: #ffffff;
    }

    .navbar a.navbar-item:hover:after {
        content: '';
        position: absolute;
        top: 65%;
        display: block;
        width: 100%;
        height: 1px;
        background: ${theme.colors.black};
    }

    .navbar a.navbar-item.is-active:hover:after,
    .navbar .navbar-brand a.navbar-item:hover:after {
        display: none;
    }

    a.navbar-item.is-active:before {
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
    }

    .navbar-brand a.navbar-item img {
        height: 44px;
        max-height: none;
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

    /* submenu start*/

    .submenu-wrapper {
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: white;
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
        width: 200px;
        margin-right: 20px;
        border: 1px solid ${theme.colors.gray};
        background-color: ${theme.colors['vida-brokenwhite']};
        border-radius: 16px;
        color: #000000;
        text-transform: none;
    }

    .submenu-item:last-child {
        margin-right: 0;
    }

    .submenu-icon {
        height: 40px;
        width: auto;
        text-align: right;
    }

    .submenu-icon img {
        height: 100%;
        width: auto;
    }

    .submenu-title {
        font-size: 14px;
    }

    .submenu-desc {
        font-family: 'Inter', serif;
        font-size: 12px;
        line-height: 1.2;
        font-weight: 400;
    }

    .navbar-item.has-dropdown:hover .submenu-wrapper {
        height: 200px;
        transition: height 0.3s ease-out;
    }

    .navbar-item.has-dropdown:hover .submenu-inner {
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
        border-color: #000000;
        border-radius: 1px;
        border-width: 2px;
    }

    .navbar-link {
        color: ${theme.colors.black};
    }
    /* submenu end*/

    /* language start*/
    .navbar-lang {
        cursor: pointer;
    }

    .navbar .navbar-lang i {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPZSURBVHgB7VjLUeNAEB0bit8FEQHixueAiAA5gjUR2ESAM0BEsOsIMBFgIsBkIC5AFQdEBGsuQEEV7GvRbbfGo49hixNdJY80n+43PT09b2zMjxRLzXxCfN/3lpaWmu/v79u1Ws1D6XPTEE+C5wJ18c3NTWKmlKkAbWxsNFEcAERYpT9ADdD35OrqqmcqSiVA6+vrYb1eP8ar72gewvAJSg/PLgC4+iRvb2/78NjAlEi9rMPW1tZvgDkXMDRracM7Gdq5vr7u4Gnju0F1anifS590bG5uHpbZywVEcYIlOoeBjgCB8QYtgQLU0HFC72jfU2ouMWZNgYyg85R0Tw0IQXusYuUIHmiwy2WWPVfQIl5i6s+fB8/Pz0OMXZM66GwuLi6emmkAsWubAgZGIq5vG146zPwoT+nc3NwffvUWFhYCBhopUCGFQiVAFMAoIhsMyy/6wRKcFW3pOI6HMDpg4x2p16AoFNhWMSDeTWnAWmBIQm7rmxLhnUeAdnU96RSwYktLZtvzkkinGEqHo45IgCgCV5tLdH+9M7nNN+Ndu4cYG01w1urYQgf5DPCdZ6+ozQUuLGg+MOP0MPYQ1pNyxR1/9vDcWwMpfgJaSr31SyQdg4d23pnV5jEY8/j4uJIkSerxWTULWY4h1nnf1ozl3GblZ47YcgrGeDyJeyxL5GhvETA6F82HE8ZBLW6lQ9GlnGOCysLYsUT6LufojNmmOCOzy1a5vHQNVid6YqpLwoZ9VyNy2T23L08A+qQHviSwlVCpJlt+uH63jACJ+4DWM98nYuvB2IDUUm27Rop7jZsT5Una16IkWqfYSiYAmY9cobd/RiQzT+nBCQ9YOsXWQOpGiTEIAu/l5eUvd+w6grsoyeUJ5Rk/Zwzt6ja9EGeSwzqT/0EJiJCF5huFzjniWvKdOcuAtKsSZIKjJLEGh/wal6UHXtrA1V+3CSsQmTghQTHvKJHZyEmQ6mlJSdl+2U1CMQc6ilasNjozyUbCbHIkdcfM0nOMPOUg5QPu0zLlImTuwgJDOn1tqxAQ8+Yuf0YalCJdYRFRJ+ZgmAJrMse6Iv48cl2LnJkaLu4Iq9Og5ufnqS6NBZzQHZMjiL1DBpPAaM8Bpp/HGPIZ2EcaoBgQsk93sAaMtQ3fPF5fX3dub28z7EDzKroc0jhM7lBtlsHT09Oe8J/KgEQws8iMrz7p7GyQkkMYTOZSqdki5Te6VBbZq3yVhuLjvGsyngFlcvKeK5PT0lEAV7lKT/VnA4C1Z2ZmWlWTJ5P7ribx/xWQAubzmUeeWxUuxZ54ICYIntzPi5Mf+Yr8A5v6IP5WnNBKAAAAAElFTkSuQmCC);
        background-size: contain;
        width: 18px;
        height: 18px;
        display: block;
        margin-left: 5px;
    }

    .navbar-lang .dropdown {
        align-items: center;
    }

    .navbar-lang .dropdown-menu {
        min-width: 132px;
    }

    .navbar-lang .dropdown-content {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.16);
    }

    .navbar-lang a.dropdown-item.is-active {
        background-color: ${theme.colors.lightGold};
    }

    .navbar-lang-mobile > span {
        padding: 0 10px 0 0;
    }

    .navbar-lang-mobile > span:after {
        content: '|';
        padding: 0 0 0 10px;
        color: ${theme.colors.black};
        font-size: 18px;
    }

    .navbar-lang-mobile .is-active {
        color: #b9a05e;
    }

    .navbar-lang-mobile > span:last-child:after {
        content: '';
    }

    /* language end*/

    @media screen and (max-width: 1024px) {
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
    }

    @media screen and (max-width: 768px) {
        .navbar {
            padding: 0;
        }

        .navbar-brand,
        .navbar-tabs {
            min-height: ${theme.header.height};
        }

        .navbar-item {
            margin: 0;
            margin-left: 24px;
        }

        .navbar-brand a.navbar-item img {
            height: 36px;
        }
    }
`
