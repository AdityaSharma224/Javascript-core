// | Type               | Syntax                                | What It Targets                         | Example                              | Typical Use                                   |
// | ------------------ | ------------------------------------- | --------------------------------------- | ------------------------------------ | --------------------------------------------- |
// | **Pseudo-Class**   | `:hover`, `:focus`, `:nth-child()`    | A **state** of an existing element      | `button:hover { background: blue; }` | Styling based on interaction or position      |
// | **Pseudo-Element** | `::before`, `::after`, `::first-line` | A **virtual element** inside an element | `button::before { content: "→"; }`   | Add content or decoration without HTML markup |

// :hover = “when this element is in a certain state”
// ::before = “create a new piece of styled content before this element”