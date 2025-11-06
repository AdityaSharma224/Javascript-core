// What Are Sprite Images

// A CSS Sprite combines multiple small images (icons, buttons, logos, etc.) 
// into one single image file.
// Then, you use CSS background positioning to show only 
// the required portion of that image in each element.

| Benefit                | Explanation                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| **Performance**        | Reduces multiple HTTP requests → one combined request (especially valuable before HTTP/2) |
| **Caching**            | One image → easier to cache                                                               |
| **Consistency**        | All icons maintain same size, format, and alignment                                       |
| **Improved Rendering** | Reduces flicker caused by multiple image loads                                            |

<i class="icon icon-home"></i>
<i class="icon icon-search"></i>
<i class="icon icon-user"></i>
<i class="icon icon-settings"></i>

// How It Improves Performance

// Before sprites:
// → 4 image requests (home.png, search.png, user.png, settings.png)

// With sprite:
// → 1 image request (icons.png)
// → 3 fewer HTTP calls → faster load time and better caching efficiency.
