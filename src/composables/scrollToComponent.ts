/**
 * Scrolls the page to a specified component.
 *
 * @param {any} section - The ID of the component to scroll to.
 * @return {void} No return value.
 */
export function scrollToComponent(section: any, navbarHeight: number = 100) {
  const sectionWithoutHash = section.startsWith('#') ? section.slice(1) : section
  const element = document.getElementById(sectionWithoutHash)

  if (element) {
    const offset = element.offsetTop - navbarHeight
    window.scrollTo({ top: offset, behavior: 'smooth' })
  }
  else {
    console.error(`Failed to find element with ID ${section}`)
  }
}
