import css from 'styled-jsx/css'

export default css.global`
    .slider {
        position: absolute !important;
        top: 0;
        left: 0;
        height: 100vh !important;
    }

    .slider-slide img {
        height: 100vh;
    }

    .slider-control-centerright div,
    .slider-control-centerleft div {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACkSURBVHgBtZEBDYAgEEWPBkYgghGMYAQbSANtog2sYgMjaIPzcKAMb8rh/NsNBp+34x/AT1J+g4jNcaDUCB9EnJKW7YTipYmqgAzRu85DOLDVQqUFwIJqCAHhZc/AywSodt5Qc2wyeJd5gFZUa+Qf2Shtl0wHHeNrmSZ6yPjeMVRk8nRdV5AiB5giwGLzY840SIX3ob7nKYAbcZ4CuB+qzbN+8++4B4GIFON29gAAAABJRU5ErkJggg==);
        background-size: contain;
        background-repeat: no-repeat;
        opacity: 0.6;
        width: 20px;
        height: 20px;
        display: block;
    }

    .slider-control-centerright div {
        transform: rotate(-90deg);
    }

    .slider-control-centerleft div {
        transform: rotate(90deg);
    }

    .slider-control-bottomcenter button {
        fill: #ffffff !important;
    }

    .slider-control-bottomcenter .paging-item {
        padding: 0 5px;
    }

    @media screen and (min-width: 640px) {
        .slider-slide img {
            width: 100%;
        }
    }
`
