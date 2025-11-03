// src/lib/scroll.ts

/**
 * Smooth scroll to a section by ID
 * @param sectionId - The ID of the section to scroll to (without #)
 * @param offset - Optional offset from top (default: 80px for navbar)
 */
export const scrollToSection = (sectionId: string, offset: number = 80) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
        });
    }
};

/**
 * Scroll to top of page
 */
export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
