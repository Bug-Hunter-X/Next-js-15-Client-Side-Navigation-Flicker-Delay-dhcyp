# Next.js 15 Client-Side Navigation Issue

This repository demonstrates a subtle bug encountered when using client-side navigation in Next.js 15 using the `next/router` module.  While navigation works correctly, there's a noticeable flicker or delay between route transitions, impacting the user experience.

## Problem

The application consists of two pages: Home and About.  Navigating between these pages using client-side routing leads to an abrupt visual change before the new page fully renders, creating a jarring user experience.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Navigate between the Home and About pages using the provided links.

Observe the brief flicker or delay during the route transition.

## Solution (Alternative approaches)

Instead of relying solely on `next/router` for client-side navigation, consider using alternative approaches that minimize or eliminate the visual disruptions:

**1. Using `next/link` for all navigation:** This approach performs initial routing on the server, resulting in a smoother transition. If client-side transitions are still necessary, explore the solutions below.

**2. Server-side rendering and data fetching (if feasible):**  Fetch all necessary data on the server-side, resulting in a faster initial load and eliminating the need for client-side delays. This improves performance and user experience greatly. 

**3. Implementing transition animations or loading indicators:** These can mask the flicker while the transition is occurring, enhancing the overall user experience. 

This repository highlights a common yet easily overlooked problem in Next.js applications, offering insights and solutions for maintaining smooth transitions during client-side navigation.