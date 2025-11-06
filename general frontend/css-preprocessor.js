// What is a CSS Preprocessor

// A CSS preprocessor (like SASS or LESS) extends the basic CSS syntax 
// with programming-like features, which are then compiled into standard CSS before deployment.
// It makes large-scale styling more modular, maintainable, and DRY (Don’t Repeat Yourself).

| Feature                  | Description                                        | Example                                                                               | Benefit                                |
| ------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------- |
| **Variables**            | Store reusable values (colors, fonts, breakpoints) | `$primary-color: #007bff;`                                                            | Centralized control over design tokens |
| **Nesting**              | Write hierarchical CSS matching HTML structure     | `nav { ul { li { a { color: $primary-color; }}}}`                                     | Cleaner, logical structure             |
| **Mixins**               | Reusable style blocks with parameters              | `@mixin flex-center { display: flex; justify-content: center; align-items: center; }` | Avoid repetition                       |
| **Inheritance (Extend)** | Share common styles between selectors              | `.btn { ... } .btn-primary { @extend .btn; background: $primary; }`                   | Promotes code reuse                    |
| **Functions & Math**     | Do color manipulation, calculations                | `width: (100% / 3);`                                                                  | Smarter, dynamic styling               |
