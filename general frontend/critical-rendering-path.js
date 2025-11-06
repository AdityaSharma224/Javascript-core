// What Is the Critical Rendering Path (CRP)

// The Critical Rendering Path is the sequence of steps the browser 
// takes to convert HTML, CSS, and JavaScript into pixels on the 
// screen — i.e., to render the first meaningful paint.

// In simple terms, it’s everything required to display content as quickly as possible.

// | Technique                           | What It Does                                              | Example                                           |
// | ----------------------------------- | --------------------------------------------------------- | ------------------------------------------------- |
// | **Minimize critical resources**     | Only load what’s needed for the first viewport            | Split JS/CSS by route                             |
// | **Defer or async JS**               | Prevent JS from blocking DOM parsing                      | `<script src="app.js" defer></script>`            |
// | **Inline critical CSS**             | Place above-the-fold styles inline to reduce round-trips  | `<style>header{display:flex;}</style>`            |
// | **Lazy load below-the-fold assets** | Defer non-visible images/scripts                          | `<img loading="lazy" ...>`                        |
// | **Preload important assets**        | Tell browser to fetch key resources early                 | `<link rel="preload" href="hero.jpg" as="image">` |
// | **Compress and cache**              | GZIP/Brotli compression + long-term cache headers         | via server/CDN                                    |
// | **Reduce CSS complexity**           | Avoid heavy selectors or large frameworks for small pages | Trim unused CSS via PurgeCSS                      |
// | **Use HTTP/2**                      | Multiplexing reduces request blocking                     | Automatically with modern CDNs                    |
