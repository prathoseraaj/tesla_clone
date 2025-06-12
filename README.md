# Tesla Clone

A visually rich Tesla-inspired landing page built with [Next.js 15](https://nextjs.org/),  and [Tailwind CSS 4](https://tailwindcss.com/).  
This project demonstrates modern React patterns and responsive layouts with custom horizontal card carousels, So it not a perfect clone visit the website.

"Did I use GPT for making full prject? Nope, Just vibe coded but still some guys using to making UI."

---

## Features

- Tesla-style hero carousel with navigation
- Horizontally scrollable sections for vehicle models and energy products, with hidden scrollbars
- Animated navigation dots and navigation arrows
- Responsive layouts and elegant design using Tailwind CSS
- Uses [tailwind-scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide) to hide horizontal scrollbars
- Modular, reusable component structure
- Google Fonts (Geist) and React Icons for a polished look

---

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

2. **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

3. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000) to see the app.

---

## Project Structure

```
prathoseraaj-tesla_clone/
│
├── app/
│   ├── globals.css         # Tailwind and global styles (incl. scrollbar hiding)
│   ├── layout.tsx          # Root layout with header/footer
│   ├── (root)/page.tsx     # Main landing page
│   ├── models/page.tsx     # Tesla car models section (horizontal scroll)
│   ├── details/page.tsx    # Info and stats section
│   └── products/page.tsx   # Tesla energy products (horizontal scroll)
│
├── public/                 # Static assets (e.g. logo)
├── next.config.ts          # Next.js config (incl. image domains)
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # TailwindCSS config (see below)
└── ...
```

---


### Next.js Images

- External images from `digitalassets.tesla.com` are allowed (see `next.config.ts`).

---

## Dependencies

- next ^15
- react ^19
- tailwindcss ^4
- tailwind-scrollbar-hide
- react-icons

---

## Attribution

All Tesla images are property of Tesla, Inc., used here for demo/educational purposes.

---

## License

This project is for learning and demo purposes.  
Not affiliated with or endorsed by Tesla, Inc.

---
