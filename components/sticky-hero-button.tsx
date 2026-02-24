'use client'

import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function StickyHeroButton() {
    const [isVisible, setIsVisible] = React.useState(false)

    // Show button when page is scrolled down
    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTextReveal = () => {
        const textRevealElement = document.querySelector('[data-text-reveal]')
        if (textRevealElement) {
            textRevealElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <button
            onClick={scrollToTextReveal}
            className={`fixed bottom-8 right-8 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 ${
                isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            aria-label="Scroll to text reveal section"
        >
            <ArrowUp size={20} />
        </button>
    )
}
