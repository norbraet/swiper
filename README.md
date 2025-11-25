# Swipe Interaction Demo

A small HTML/CSS/JavaScript experiment showcasing swipeable horizontal containers with scroll-snap behavior.  
This project serves as a lightweight example of basic UI interactions without any frameworks.

## ✨ Features

- Horizontal swipeable containers using native scrolling
- Scroll-snap alignment for smooth positioning
- JavaScript logic to automatically center or align elements
- Simple fade-in effect (`.ready` class) to avoid layout jumps on load
- Minimal, responsive layout with CSS nesting and custom properties

## 🧩 Project Structure

```
.
├── index.html
├── styles.css
└── script.js
```

- **index.html** — contains three demo swipe components.
- **styles.css** — handles layout, scroll snapping, theming, and the fade-in for “hold” items.
- **script.js** — sets the initial scroll position and logs horizontal scroll delta for one of the swipe elements.

## 🚀 Usage

No build steps or dependencies are required.

1. Clone or download the repository.
2. Open `index.html` in your browser.

Everything runs locally with standard HTML, CSS, and JavaScript.

## 📚 Notes

- The `.hold` elements start hidden and become visible once JavaScript finishes positioning them.
- The layout uses CSS nesting and container queries (`cqw`) for more modern styling behavior.
- This is a small showcase/demo and not a production-ready component.

## 📄 License

This project is licensed under the MIT License.
