import { useEffect, useState, useRef } from 'react'

export default function IntersectionObserver({
    onVisible,
    onInvisible,
    children,
    className,
    offset,
    id,
}) {
    //   static propTypes = {
    //     root: PropTypes.string.isRequired, // list container
    //     onVisible: PropTypes.func, // callback to call when loading is visible
    //   }

    //   static defaultProps = {
    //     onVisible: () => {},
    //   }

    const containerEl = useRef(null)
    let observer = null
    //   constructor(prop) {
    //     super(prop)
    //     this.lastRef = React.createRef()
    //   }
    useEffect(() => {
        if (!containerEl.current) return
        observer = new IntersectionObserver(interSectionCallback, {
            threshold: [0, 1],
            rootMargin: offset,
        })
        observer.observe(containerEl.current)

        return () => (observer = null)
    }, [])

    //   componentDidMount() {
    //     if (!containerEl.current) return
    //     observer = new IntersectionObserver(this.interSectionCallback, {
    //       threshold: [0, 1],
    //     })
    //     observer.observe(containerEl.current)
    //   }

    const interSectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                if (onVisible) {
                    onVisible(id)
                }
            } else {
                if (onInvisible) {
                    onInvisible(id)
                }
            }
        })
    }

    return (
        <div ref={containerEl} className={className || ''}>
            {children}
        </div>
    )
}
