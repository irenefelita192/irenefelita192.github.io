import css from 'styled-jsx/css'
import theme from '../global-styles/theme'

export default css`
    .navbar {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 15px;
        line-height: 1.2;
        background-color: transparent;
        color: #ffffff;
        height: ${theme.header.height};
    }

    .navbar.bg-white {
        background-color: #ffffff;
        color: ${theme.colors.black};
    }

    .navbar-item {
        color: #ffffff;
        padding: 0;
        margin: 0 30px;
    }

    .navbar.bg-white .navbar-item {
        color: ${theme.colors.black};
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
        color: #ffffff;
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

    .navbar.bg-white .navbar-item.is-active {
        color: #ffffff;
    }

    .navbar.bg-white a.navbar-item:hover:after {
        content: '';
        position: absolute;
        top: 65%;
        display: block;
        width: 100%;
        height: 1px;
        background: ${theme.colors.black};
    }

    .navbar a.navbar-item.is-active:hover:after,
    .navbar.bg-white a.navbar-item.is-active:hover:after,
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
        height: 24px;
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

    .navbar.bg-white .navbar-menu.is-active .navbar-item.is-active {
        color: ${theme.colors.black};
    }

    .navbar-menu.is-active .navbar-item.has-dropdown {
        margin: 10px 30px 10px 50px;
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

    .navbar-lang {
        cursor: pointer;
    }

    .navbar .navbar-lang i {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ+SURBVHgB7VjdcdswDIZyfY86QdkJ7BG4Qd0Jqg06grVB0gmcTmB3ArUbuBNInUDpBAwYAScYImlKUe7ykO+ORx3x9wmEQcoA70ijgAVwzpU47XBscPhnQ6JHHB2OPzjORVF08JpAIjscjcuH161gbaBTi6ONBO1x3ON4SOj4dQtrAB3dBd5aBjJC1yhSR2W7h6VA41IFbyhTlVgzAbutkNcRkiXMhXq7Wqyz80PCtiadnoOLteeXg5lk9hEyyewIvVLo2QBRjzvIJGNDZEjGWTtl+GlCuoqUveZHbkkbkPUkqzL8cDb7BNlJjEI7wYlr4wxDo2P4WthGZCFI/d9KZmBspl+xgYYz7uY1vbXQBDPkhiLlFD7g+Kf4fqE37nD8hDywjc/oLyXzGfxOzx8xS486Ozti3Ic8u7Gg7yETbujgHqeIfFKTN0JuaT5H/HMzu1Y7Eqx7G5FzrG2I0Cea/0aMDc0d5KNTthpcFrchQksy8FJ0NBteuIE3BkmI0zf/4FsOjvWfFyQh3qpNxLij2UA+jLLV2Gi5JDSpeAUmPCeDkwwoTDq5bIzemHvQD5gWd6rJxfANhiyFbPyvuqLnz8H7t3sDR8cHxclnxtJzB9O9Z9ncwzV1UKePITdeP5qAbK3rB8dor/nRF7S9kh1jZAN+gpc5d3kbtZADNx6KF6TceAB7lAl7I/SqCJka5sBdFvie1kqxbXXC9qC3RJE5wlxQcPnl0dKbyzvxNmB3kR03lEAj1hq35DNIBJAEnt9Ok1RkWhVcIvsudY1U6lParx/c8IXbJ3QsrA3agsblw+vu5sRY+neMgaGxWRiOAK6JDoZzyzfC0+Se/I4V8AQPih/B7FFcsgAAAABJRU5ErkJggg==);
        background-size: contain;
        width: 18px;
        height: 18px;
        display: block;
        margin-left: 5px;
    }

    .navbar.bg-white .navbar-lang i {
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

    @media screen and (max-width: 768px) {
        .navbar {
            height: 52px;
        }

        .navbar-item {
            margin: 0 16px;
        }

        .navbar-brand a.navbar-item img {
            height: 16px;
        }

        .navbar-burger {
            color: #ffffff;
            background-color: transparent;
        }

        .navbar-burger span {
            height: 2px;
        }
    }
`
