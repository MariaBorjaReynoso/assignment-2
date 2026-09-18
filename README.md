# Tabby Tech Events

## Project Description

A two page website for Tabby Tech students to find campus events.
The home page shows upcoming events in a card grid. The event page
shows full details about the Fall Concert.

## Layout Decisions

**Flexbox** is used in 4 places:
- Header navigation — links in a centered row, wrap on small screens.
- Hero section — welcome text next to the mascot image, stacks on
  small screens.
- Related events — cards wrap when space is tight.
- Footer navigation — links in a centered row.

**CSS Grid** is used in 2 places:
- Event cards on the home page — responsive grid. The first card
  spans 2 columns, so cards have two different widths.
- Main content and sidebar on the event page — 2-column layout
  (`2fr 1fr`), with the sidebar below the main content on small
  screens.

## Responsive Design

Two breakpoints:
- **800px (tablet):** Event page becomes 1 column. First event card
  stops spanning 2 columns.
- **500px (phone):** Hero stacks, nav becomes vertical, related
  cards stack.

I tested the pages using the Open with Live Server extension in VS Code, 
which let me check image sizes, both media queries, and
how the layout changes. I also used Google Chrome DevTools
(Ctrl+Shift+I) to test different screen sizes.
## Semantic HTML

- `<header>` — site title, tagline, and main nav at the top.
- `<nav>` — wraps navigation links (header and footer).
- `<main>` — main content of each page. One per page.
- `<article>` — each event card.
- `<aside>` — the event page sidebar.
- `<figure>` / `<figcaption>` — images with captions.
- `<time>` — dates and times.

## Sources

- **Images:** Found via Google Images and used for educational
  purposes only in this class assignment. Original sources and
  licenses could not always be determined.
  - `catDay.jpg` — From a CBS8 news article:
    https://www.cbs8.com/article/news/nation-world/cat-honorary-degree-vermont-state-university-castleton-campus/507-0073a7d1-908f-4e22-96ba-a0963cc50b23
  - `tabbyConcert.jpg` — Google Images searched for "cats in orchestra"
  - `careerFair.jpg` — Google Images searched for "UNCG career fair"
  - `service.gif` — Google Images searched for "UNCG service"
  - `gameNight.jpg` — Google Images searched for "UNCG game"
  - `tabbyUni.jpg` — Google Images searched for "tabby cat mascot"
