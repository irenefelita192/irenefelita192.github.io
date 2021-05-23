import css from 'styled-jsx/css'

export default css.global`
    .children-wrapper .wrapper {
        font-family: Inter, sans-serif;
        min-height: 48vh;
    }

    @media screen and (max-width: 640px) {
        .children-wrapper .wrapper {
            min-height: 60vh;
        }
    }
`
