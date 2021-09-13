import { css, keyframes } from 'react-emotion'

export const container = css`
    .errorBackground {
        background-image: url('data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIKICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwOS42cHgiIGhlaWdodD0iMzIzLjNweCIgdmlld0JveD0iMCAwIDQwOS42IDMyMy4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDkuNiAzMjMuMzsiCiAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAuc3Qwe2ZpbGw6I0E2QTZBNjt9Cjwvc3R5bGU+CjxkZWZzPgo8L2RlZnM+CjxnPgogICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwOS42LDRjMCwxMDUuMSwwLDIxMC4xLDAsMzE1LjJjLTIuNiwzLjQtNi4xLDQtMTAuMiw0Yy0xMjkuNy0wLjEtMjU5LjQtMC4xLTM4OS4xLTAuMQogICAgICAgIGMtOC4zLDAtMTAuMi0xLjgtMTAuMi0xMEMwLDIxMi4yLDAsMTExLjEsMCwxMC4xYzAtOC4yLDEuOS0xMCwxMC4yLTEwYzEyOS43LDAsMjU5LjQsMCwzODkuMS0wLjFDNDAzLjUsMCw0MDcsMC43LDQwOS42LDR6CiAgICAgICAgIE0zNzAuNiwyNzAuMWMwLTEuNywwLTMuMSwwLTQuNGMwLTczLjcsMC0xNDcuNCwwLTIyMS4xYzAtNS40LDAtNS40LTUuNC01LjRjLTEwNi45LDAtMjEzLjgsMC0zMjAuNywwYy01LjQsMC01LjQsMC01LjQsNS41CiAgICAgICAgYzAsNzAuNCwwLDE0MC44LDAsMjExLjFjMCwxLjQtMC41LDIuOSwwLjUsNC4yYzEuNC0wLjYsMi0xLjksMi43LTIuOWMyOC44LTM4LjcsNTcuNy03Ny40LDg2LjUtMTE2YzEuMS0xLjUsMi4yLTMsMy40LTQuNQogICAgICAgIGMxLjUtMS44LDMuMi0xLjksNC44LTAuMmMxLjEsMS4yLDIuMSwyLjQsMy4xLDMuNmMyNC40LDMwLDQ4LjcsNjAsNzMsOTAuMWMyLDIuNSwzLjIsMyw1LjgsMC42YzE4LjUtMTYuNSwzNy4yLTMyLjgsNTUuOC00OS4yCiAgICAgICAgYzQuOC00LjIsNS00LjIsOS4zLDAuM2MyNy40LDI4LjQsNTQuOCw1Ni43LDgyLjMsODUuMUMzNjcuNCwyNjgsMzY4LjIsMjY5LjUsMzcwLjYsMjcwLjF6Ii8+CiAgICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzA0LjMsMTAyLjhjLTAuOSwxOC4zLTE2LjgsMzEuMS0zMy40LDI5LjhjLTE4LjEtMS4zLTMxLjUtMTYuOS0yOS45LTMzLjljMS43LTE4LjQsMTYuOS0zMC4zLDMzLjEtMjkuNQogICAgICAgIEMyOTMuMiw3MC4zLDMwNS40LDg2LjUsMzA0LjMsMTAyLjh6Ii8+CjwvZz4KPC9zdmc+');
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        background-repeat: no-repeat;
        background-size: 50px 50px;
        background-position-x: 50%;
        background-position-y: 50%;
    }

    img {
        outline: 0;
    }

    img:not([src]) {
        visibility: hidden;
    }

    a {
        text-decoration: none;
        outline: 0;
    }

    .fadeIn {
        transition: opacity ease 0.3s;
    }
`

export const lazyFade = css`
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation: fadein 2s;
`

export const fallbackImgContainer = css`
    &.fadeIn {
        transition: opacity ease 0.5s;
    }
`
