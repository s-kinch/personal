const FontFaceObserver = require('fontfaceobserver')

const fonts = () => {
    const fontsToAdd = [
        {
            title: 'Inter',
            href:
                'https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500',
        },
        {
            title: 'Martel',
            href: 'https://fonts.googleapis.com/css2?family=Martel:wght@400',
        },
        {
            title: 'Questrial',
            href: 'https://fonts.googleapis.com/css2?family=Questrial:wght@400',
        },
        {
            title: 'Lora',
            href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400',
        },
    ]

    const createLinkElement = ({ href }) => {
        const link = document.createElement('link')
        link.href = href
        link.rel = 'stylesheet'
        document.head.appendChild(link)
    }

    fontsToAdd.forEach(createLinkElement)
    Promise.all(
        fontsToAdd.map(({ title }) => {
            const observer = new FontFaceObserver(title)
            return observer.load().then(() => {
                document.documentElement.classList.add(title.toLowerCase())
            })
        })
    )

    // const roboto = new FontFaceObserver('Roboto')

    // roboto.load().then(() => {
    //     document.documentElement.classList.add('roboto')
    // })
}

export default fonts
