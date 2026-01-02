# Master Recipe Book

A personal, curated recipe reference site.

This project is intentionally simple: plain HTML, CSS, and JavaScript.
No frameworks, no build tools, no accounts, no clutter.

The goal is to store **approved recipes only**, organized and easy to use.

---

## Features

- Recipe list with categories
- Category filtering
- Prep-time filtering
- Clear filters button
- Dedicated recipe pages
- Ingredients with measurements
- Step-by-step prep instructions
- Optional recipe images
- Clean, readable layout

---

## Project Structure

master-recipe-book/
├── index.html # Recipe list + filters
├── recipe.html # Single recipe page
├── css/
│ └── style.css # Shared styles
├── js/
│ ├── recipes.js # Recipe data
│ └── app.js # Rendering + filtering logic
├── assets/
│ └── images/ # Recipe images
└── README.md

---

## How It Works

- Recipes live in `js/recipes.js`
- Only recipes marked `approved: true` are shown
- Filters are applied client-side with JavaScript
- Clicking a recipe opens a dedicated page using a URL parameter

No backend. No database. Everything runs locally in the browser.

---

## Adding a Recipe

1. Open `js/recipes.js`
2. Add a new recipe object to the `recipes` array
3. Set:
   - `id`
   - `title`
   - `category`
   - `prepTime`
   - `approved: true`
   - `ingredients`
   - `instructions`
4. (Optional) Add an image to `assets/images/` and reference it

Reload the page — the recipe will appear automatically.

---

## Categories

Current categories include:

- Breakfast
- Lunch
- Dinner
- Snacks
- Desserts

Each recipe belongs to **one category**.

---

## Images

- Images are optional
- One image per recipe
- Stored locally in `assets/images/`
- The layout works with or without images

---

## Status

This is a stable v1.
New features can be added incrementally without restructuring.

---

## License

Personal project. No license specified.
