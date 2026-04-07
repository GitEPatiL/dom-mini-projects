
<div align="center">

<br/>

```
██████╗  ██████╗ ███╗   ███╗    ███╗   ███╗██╗███╗   ██╗██╗
██╔══██╗██╔═══██╗████╗ ████║    ████╗ ████║██║████╗  ██║██║
██║  ██║██║   ██║██╔████╔██║    ██╔████╔██║██║██╔██╗ ██║██║
██║  ██║██║   ██║██║╚██╔╝██║    ██║╚██╔╝██║██║██║╚██╗██║██║
██████╔╝╚██████╔╝██║ ╚═╝ ██║    ██║ ╚═╝ ██║██║██║ ╚████║██║
╚═════╝  ╚═════╝ ╚═╝     ╚═╝    ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝
                                                              
        P  R  O  J  E  C  T  S
```

<br/>

[![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![No Frameworks](https://img.shields.io/badge/Frameworks-None-critical?style=flat-square)](#)
[![Projects](https://img.shields.io/badge/5_Projects-Completed-22c55e?style=flat-square)](#)
[![GitHub](https://img.shields.io/badge/GitEPatiL-000?style=flat-square&logo=github)](https://github.com/GitEPatiL)

<br/>

> **5 handcrafted mini-projects** demonstrating the full power of vanilla DOM manipulation —  
> no frameworks, no dependencies, just HTML · CSS · JavaScript.

<br/>

</div>

---

## `$ ls -la projects/`

```sh
drwxr-xr-x  color switcher/         # 🎨  Dynamic background color changer
drwxr-xr-x  Animated Cursor/        # 🖱️  Custom interactive mouse tracker  
drwxr-xr-x  List and Search/        # 🔍  Live real-time search & filter
drwxr-xr-x  Simple Calculator/      # 🔢  Full arithmetic calculator
drwxr-xr-x  Simple Todo List/       # ✅  CRUD task management app
-rw-r--r--  README.md
```

---

## ◈ Projects

<br/>

### `01` &nbsp; 🎨 Color Switcher

```
Type: DOM Styling  |  Difficulty: ★☆☆☆☆  |  File: color switcher/index.html
```

A page that dynamically changes its background color — either via themed buttons or a custom hex/name input. Built with Bootstrap 5 for layout, with pure JS powering the logic.

**What it does**
- Random color generator with a single click
- Manual hex code / color name input with live apply
- Displays the current active color value in real time

**DOM skills covered**
```js
document.getElementById()    // grab elements
style.backgroundColor        // mutate CSS via JS
Math.random()                // generate random hex values
```

<br/>

---

### `02` &nbsp; 🖱️ Animated Cursor

```
Type: Mouse Events  |  Difficulty: ★★☆☆☆  |  File: Animated Cursor/index.html
```

Hijacks the default browser cursor and replaces it with a custom animated element that smoothly follows your mouse across the screen using live coordinate tracking.

**What it does**
- Tracks mouse position across the entire viewport
- Renders a custom styled element as the cursor replacement
- Uses CSS transitions for a smooth trailing effect

**DOM skills covered**
```js
document.addEventListener('mousemove', e => {})   // real-time tracking
element.style.left / style.top                    // absolute positioning
CSS transition                                    // smooth movement
```

<br/>

---

### `03` &nbsp; 🔍 List & Search

```
Type: Live Filtering  |  Difficulty: ★★☆☆☆  |  File: List and Search/index.html
```

A user directory that dynamically filters and displays entries as you type. No button click required — the list responds instantly to every keystroke.

**What it does**
- Loads a list of users with name and email data
- Filters entries in real time matching name or email
- Shows / hides items without any page reload

**DOM skills covered**
```js
input.addEventListener('input', ...)     // keypress-level reactivity
element.style.display                    // show/hide DOM nodes
Array.filter() + String.includes()       // search logic
```

<br/>

---

### `04` &nbsp; 🔢 Simple Calculator

```
Type: Logic & State  |  Difficulty: ★★★☆☆  |  File: Simple Calculator/index.html
```

A fully functional arithmetic calculator built from scratch. Handles sequential operations, operator chaining, and display state — all in vanilla JS.

**What it does**
- Supports `+`, `−`, `×`, `÷` operations
- Handles decimal numbers and chained calculations
- Clear / reset with proper state management

**DOM skills covered**
```js
event delegation (click)         // single handler for all buttons
eval() / manual arithmetic        // compute expressions
innerHTML manipulation            // update display live
```

<br/>

---

### `05` &nbsp; ✅ Simple Todo List

```
Type: Full CRUD  |  Difficulty: ★★★☆☆  |  File: Simple Todo List/index.html
```

The definitive DOM exercise — a complete task manager where you can add new todos, toggle their completion state, and permanently delete them. All state lives in the DOM.

**What it does**
- Add tasks via input + button (or Enter key)
- Check off tasks to mark them complete (strikethrough)
- Delete individual tasks permanently from the list

**DOM skills covered**
```js
document.createElement()         // dynamically build new list items
element.appendChild()            // inject elements into DOM
classList.toggle('done')         // toggle completion style
element.remove()                 // delete from DOM
```

---

## ◈ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Structure** | `HTML5` | Semantic markup & layout scaffolding |
| **Styling** | `CSS3` | Animations, transitions & visual design |
| **Logic** | `Vanilla JavaScript` | Events, DOM manipulation, state management |
| **UI Library** | `Bootstrap 5` *(Color Switcher only)* | Responsive utility classes |

> ⚡ Zero npm packages. Zero build steps. Zero config. Open the file, it just works.

---

## ◈ DOM Skills Map

The skills practiced across all 5 projects — visualized as a learning progression:

```
SELECTION ──────────────────────────────────────────────────────► MASTERY
    │                                                                 │
  Level 1          Level 2          Level 3          Level 4         │
  ─────────        ─────────        ─────────        ─────────       │
  querySelector    addEventListener  createElement    State mgmt      │
  getElementById   mousemove         appendChild      Event chains    │
  innerHTML        input events      classList        DOM CRUD        │
  style.prop       click events      remove()         Live updates    │
    │                                                                 │
  Color            Animated          List &            Todo List       │
  Switcher         Cursor            Search            Calculator      │
```

---

## ◈ Getting Started

```bash
# Clone the repo
git clone https://github.com/GitEPatiL/dom-mini-projects.git
cd dom-mini-projects

# Pick a project and open it — that's literally it
cd "Simple Todo List" && start index.html        # Windows
cd "Simple Todo List" && open index.html         # macOS/Linux
```

No `npm install`. No `.env` file. No server required.  
Any modern browser will run these instantly. 🚀

---

## ◈ Quick Reference

| # | Project | Difficulty | Core Concept | Open |
|:---:|---|:---:|---|---|
| 01 | 🎨 Color Switcher | `Easy` | CSS via JS, Random values | `color switcher/index.html` |
| 02 | 🖱️ Animated Cursor | `Easy+` | Mouse tracking, Positioning | `Animated Cursor/index.html` |
| 03 | 🔍 List & Search | `Medium` | Live filtering, Array methods | `List and Search/index.html` |
| 04 | 🔢 Simple Calculator | `Medium` | Logic, State, Display updates | `Simple Calculator/index.html` |
| 05 | ✅ Simple Todo List | `Medium` | Full CRUD DOM operations | `Simple Todo List/index.html` |

---

## ◈ Contributing

Found a bug? Have a better solution? Improvements are welcome.

```bash
# Workflow
git checkout -b fix/your-fix-name
git commit -m "fix: describe what you changed"
git push origin fix/your-fix-name
# → Open a Pull Request
```

---

<div align="center">

<br/>

```
"The browser is your canvas. The DOM is your API. Go build."
```

<br/>

Made with `</> ` and zero dependencies &nbsp;·&nbsp; [@GitEPatiL](https://github.com/GitEPatiL)

<br/>

</div>