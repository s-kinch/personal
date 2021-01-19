import NextHead from 'next/head'

const Head = ({ children, title }) => {
    const grid = `
    +---+---+---+---+---+
    |¹  |²  |³  |⁴  |⁵  | 
    +---+---+---+---+---+
    |⁶  |   |   |   |   |
    +---+---+---+---+---+
    |⁷  |   |   |   |   |
    +---+---+---+---+---+
    |⁸  |   |   |   |   |
    +---+---+---+---+---+
    |⁹  |   |   |   |   |
    +---+---+---+---+---+
    `

    const clues = {
        ['🤪']: {
            ACROSS: '1. Ancient Peruvians',
            DOWN: '1. Glazer of "Broad City"',
        },
        ['😘']: {
            ACROSS: '6. "Melodrama" musician',
            DOWN: '2. Quartet + quintet',
        },
        ['🥱']: {
            ACROSS: '7. Battery end',
            DOWN: '3. Boasts',
        },
        ['🥺']: {
            ACROSS: '8. ___weds',
            DOWN: '4. Discombobulated',
        },
        ['🥳']: {
            ACROSS: '9. Deployed, as a sailor',
            DOWN: '5. Bye now!',
        },
    }
    console.log(grid)
    console.table(clues)

    // window.PLAY = `\nACROSS\n2. garbage\n\nDOWN\n3. trash\n`

    return (
        <React.Fragment>
            <NextHead>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />

                <title>{title}</title>

                {children}
            </NextHead>
        </React.Fragment>
    )
}

export default Head
