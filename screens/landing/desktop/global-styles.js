import css from 'styled-jsx/css'

export default css.global`
    * {
        margin: 0;
        height: 0;
    }

    .navbar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    // .navbar-menu {
    //     display: block;
    // }

    // .navbar-burger {
    //     display: none;
    // }

    .navbar div {
        height: inherit;
    }

    .navbar-item {
        height: inherit;
    }

    a.navbar-item span {
        height: auto;
    }

    .navbar-lang .dropdown span {
        height: auto;
    }

    .navbar-lang .dropdown-item {
        height: auto;
    }

    .navbar-lang .dropdown-menu {
        top: 60px;
    }

    @media screen and (max-width: 1023px) {
        .navbar {
            height: 52px !important;
        }

        .navbar-menu.is-active {
            height: auto;
        }
    }
`
