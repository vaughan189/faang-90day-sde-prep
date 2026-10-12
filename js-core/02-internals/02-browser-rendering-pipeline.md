## Deep Dive: Browser Rendering Pipeline & Layout Thrashing
- HTML parsing -> DOM -> CSSOM -> Render Tree -> Layout (Reflow) -> Paint -> Composite
- Triggers of forced synchronous layouts (e.g. offsetTop, getBoundingClientRect)
- Optimizations via DocumentFragment, CSS will-change, and transform/opacity compositing
