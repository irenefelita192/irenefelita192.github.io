import theme from '../global-styles/theme'
export default function PageWrapper({ children }) {
    return (
        <>
            <div className="wrapper">{children}</div>
            <style jsx>{`
                .wrapper {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    grid-gap: 155px;
                    padding: 57px ${theme.offset.container}
                        ${theme.offset.container};
                }

                @media screen and (max-width: 1024px) {
                    .wrapper {
                        grid-gap: 72px;
                        padding: 57px 72px 100px 72px;
                    }
                }

                @media screen and (max-width: 640px) {
                    .wrapper {
                        display: block;
                        padding: 42px;
                    }
                }
            `}</style>
        </>
    )
}
