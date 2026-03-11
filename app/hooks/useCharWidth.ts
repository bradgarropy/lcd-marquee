import {useEffect, useState} from "react"

const useCharWidth = () => {
    const [charWidth, setCharWidth] = useState(27) // Default fallback

    useEffect(() => {
        const measure = () => {
            const measureSpan = document.createElement("span")

            measureSpan.className = "font-lcd text-4xl absolute invisible"
            measureSpan.textContent = "M"

            document.body.appendChild(measureSpan)

            const width = measureSpan.getBoundingClientRect().width

            document.body.removeChild(measureSpan)

            if (width > 0) {
                setCharWidth(width)
            }
        }

        document.fonts.ready.then(measure)
    }, [])

    return charWidth
}

export {useCharWidth}
