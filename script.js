// ================================
// 🌙 Dark Mode Toggle
// ================================
const themeToggle = document.getElementById("themeToggle")
const htmlElement = document.documentElement

const currentTheme = localStorage.getItem("theme") || "light-mode"
document.body.classList.add(currentTheme)
updateThemeIcon()

themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("dark-mode")

  if (isDarkMode) {
    document.body.classList.remove("dark-mode")
    document.body.classList.add("light-mode")
    localStorage.setItem("theme", "light-mode")
  } else {
    document.body.classList.remove("light-mode")
    document.body.classList.add("dark-mode")
    localStorage.setItem("theme", "dark-mode")
  }

  updateThemeIcon()
})

function updateThemeIcon() {
  const isDarkMode = document.body.classList.contains("dark-mode")
  themeToggle.textContent = isDarkMode ? "☀️" : "🌙"
}

// ================================
// 👀 Intersection Observer Animations
// ================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeIn 0.8s ease-out forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  observer.observe(section)
})

// ================================
// 🧭 Smooth Scroll Navigation
// ================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// ================================
// ✉️ Contact Form Handler
// ================================
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    if (!name || !email || !message) {
      alert("Please fill in all fields")
      return
    }

    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`)
    contactForm.reset()
  })
}

// ================================
// 📜 Header Scroll Effect
// ================================
let lastScrollTop = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 100) {
    header.style.boxShadow = "var(--shadow-lg)"
  } else {
    header.style.boxShadow = "var(--shadow)"
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})

// ================================
// 🎬 Page Load Animation
// ================================
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`
  })
})

// ================================
// 💼 Experience Filter (Card Style)
// ================================
const filterButtons = document.querySelectorAll(".filter-btn")
const experienceCards = document.querySelectorAll(".experience-card")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter")

    filterButtons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")

    experienceCards.forEach((card) => {
      if (filter === "all" || card.dataset.year === filter) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })
})

