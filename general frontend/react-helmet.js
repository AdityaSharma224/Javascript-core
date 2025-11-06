What is React Helmet

React Helmet is a library used to manage changes to the <head> 
section of your HTML document in a React single-page application (SPA).
It allows you to dynamically set:

Page <title>
<meta> tags (description, keywords, og tags)
<link> (canonical, favicon)
<html> and <body> attributes

This makes your React components SEO-friendly — especially 
for server-side rendering (SSR) setups like Next.js or React Helmet with ReactDOMServer.

🔹 Why It’s Important
In SPAs, React controls the DOM after initial load, 
meaning the HTML <head> can’t be updated via normal static markup.
Search engines rely heavily on metadata for:

SEO ranking
Social media previews
Content indexing
React Helmet lets each route/component define its own meta info dynamically.