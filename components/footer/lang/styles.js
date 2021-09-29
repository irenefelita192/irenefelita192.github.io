import css from 'styled-jsx/css'
import theme from 'components/global-styles/theme'

export default css`
    /* language start*/
    .dropdown-lang {
        cursor: pointer;
        background: ${theme.colors['vida-white']};
        border: 1px solid ${theme.colors['vida-brokenwhite']};
        box-sizing: border-box;
        border-radius: 6px;
        padding: 4px 16px 4px 4px;
        font-weight: 600;
        font-size: 13px;
        line-height: 1.54;
        margin-right: 36px;
    }

    .dropdown-lang .dropdown:before {
        border: 2px solid #000000;
        border-radius: 1px;
        border-right: 0;
        border-top: 0;
        content: ' ';
        display: block;
        height: 6px;
        width: 6px;
        margin-top: -3px;
        pointer-events: none;
        position: absolute;
        top: 50%;
        right: -15px;
        transform: rotate(-45deg);
        transform-origin: center;
    }

    .navbar .dropdown-lang i {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPZSURBVHgB7VjLUeNAEB0bit8FEQHixueAiAA5gjUR2ESAM0BEsOsIMBFgIsBkIC5AFQdEBGsuQEEV7GvRbbfGo49hixNdJY80n+43PT09b2zMjxRLzXxCfN/3lpaWmu/v79u1Ws1D6XPTEE+C5wJ18c3NTWKmlKkAbWxsNFEcAERYpT9ADdD35OrqqmcqSiVA6+vrYb1eP8ar72gewvAJSg/PLgC4+iRvb2/78NjAlEi9rMPW1tZvgDkXMDRracM7Gdq5vr7u4Gnju0F1anifS590bG5uHpbZywVEcYIlOoeBjgCB8QYtgQLU0HFC72jfU2ouMWZNgYyg85R0Tw0IQXusYuUIHmiwy2WWPVfQIl5i6s+fB8/Pz0OMXZM66GwuLi6emmkAsWubAgZGIq5vG146zPwoT+nc3NwffvUWFhYCBhopUCGFQiVAFMAoIhsMyy/6wRKcFW3pOI6HMDpg4x2p16AoFNhWMSDeTWnAWmBIQm7rmxLhnUeAdnU96RSwYktLZtvzkkinGEqHo45IgCgCV5tLdH+9M7nNN+Ndu4cYG01w1urYQgf5DPCdZ6+ozQUuLGg+MOP0MPYQ1pNyxR1/9vDcWwMpfgJaSr31SyQdg4d23pnV5jEY8/j4uJIkSerxWTULWY4h1nnf1ozl3GblZ47YcgrGeDyJeyxL5GhvETA6F82HE8ZBLW6lQ9GlnGOCysLYsUT6LufojNmmOCOzy1a5vHQNVid6YqpLwoZ9VyNy2T23L08A+qQHviSwlVCpJlt+uH63jACJ+4DWM98nYuvB2IDUUm27Rop7jZsT5Una16IkWqfYSiYAmY9cobd/RiQzT+nBCQ9YOsXWQOpGiTEIAu/l5eUvd+w6grsoyeUJ5Rk/Zwzt6ja9EGeSwzqT/0EJiJCF5huFzjniWvKdOcuAtKsSZIKjJLEGh/wal6UHXtrA1V+3CSsQmTghQTHvKJHZyEmQ6mlJSdl+2U1CMQc6ilasNjozyUbCbHIkdcfM0nOMPOUg5QPu0zLlImTuwgJDOn1tqxAQ8+Yuf0YalCJdYRFRJ+ZgmAJrMse6Iv48cl2LnJkaLu4Iq9Og5ufnqS6NBZzQHZMjiL1DBpPAaM8Bpp/HGPIZ2EcaoBgQsk93sAaMtQ3fPF5fX3dub28z7EDzKroc0jhM7lBtlsHT09Oe8J/KgEQws8iMrz7p7GyQkkMYTOZSqdki5Te6VBbZq3yVhuLjvGsyngFlcvKeK5PT0lEAV7lKT/VnA4C1Z2ZmWlWTJ5P7ribx/xWQAubzmUeeWxUuxZ54ICYIntzPi5Mf+Yr8A5v6IP5WnNBKAAAAAElFTkSuQmCC);
        background-size: contain;
        width: 18px;
        height: 18px;
        display: block;
        margin-left: 5px;
    }

    .dropdown-lang .dropdown {
        margin-right: 20px;
        align-items: center;
    }

    .dropdown-lang .dropdown-menu {
        min-width: 155px;
        bottom: 0;
        top: auto;
        padding: 0;
    }

    .dropdown-lang .dropdown-content {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.16);
        padding: 0;
        border-radius: 9px;
    }

    .dropdown-lang a.dropdown-item {
        display: flex;
        align-items: center;
        padding: 14px 21px;
    }

    .dropdown-lang a.dropdown-item:last-child {
        box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.2);
    }

    .dropdown-lang a.dropdown-item:hover {
        background-color: transparent;
        color: ${theme.colors['vida-green']};
    }

    .dropdown-lang a.dropdown-item:hover span {
        color: ${theme.colors['vida-green']};
    }

    .dropdown-lang a.dropdown-item span {
        padding-left: 6px;
        font-size: 14px;
        line-height: 1.2;
        color: ${theme.colors['vida-gray']};
        text-transform: uppercase;
    }

    .dropdown-lang a.dropdown-item.is-active {
        background-color: transparent;
        color: #000000;
    }

    .dropdown-lang a.dropdown-item.is-active .checkmark {
        display: block;
        margin-left: auto;
    }

    .dropdown-lang-mobile > span {
        padding: 0 10px 0 0;
    }

    .dropdown-lang-mobile > span:after {
        content: '|';
        padding: 0 0 0 10px;
        color: ${theme.colors.black};
        font-size: 18px;
    }

    .dropdown-lang-mobile .is-active {
        color: #b9a05e;
    }

    .dropdown-lang-mobile > span:last-child:after {
        content: '';
    }

    .selected-lang {
        padding-left: 6px;
    }
    /* language end*/

    @media screen and (max-width: 1024px) {
        /* language start*/
        .dropdown-lang.is-mobile {
            margin: 0 24px;
            padding: 14px;
            width: 100%;
            color: ${theme.colors['vida-gray']};
        }

        .dropdown-lang.is-mobile .dropdown {
            width: 100%;
        }

        .dropdown-lang.is-mobile .dropdown:before {
            right: 0;
            height: 8px;
            width: 8px;
        }
        .dropdown-lang.is-mobile .dropdown-menu {
            width: 100%;
            top: -8px;
        }

        .dropdown-lang.is-mobile .selected-lang {
            font-size: 18px;
            line-height: 1.2;
            color: ${theme.colors['vida-gray']};
        }
    }

    @media screen and (max-width: 320px) {
        .dropdown-lang.is-mobile {
            font-size: 15px;
        }
    }
`
