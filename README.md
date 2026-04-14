<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=DOM%20Mini%20Projects&fontSize=52&fontColor=ffffff&fontAlignY=35&desc=5%20Handcrafted%20Vanilla%20JS%20Projects&descAlignY=58&descSize=18" width="100%"/>

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](#)

<br/>

[![Projects](https://img.shields.io/badge/✦%205%20Projects-Completed-22c55e?style=flat-square&labelColor=0d1117)](#-projects)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-blueviolet?style=flat-square&labelColor=0d1117)](#)
[![Open Source](https://img.shields.io/badge/Open%20Source-♥-ff69b4?style=flat-square&labelColor=0d1117)](#)
[![GitHub](https://img.shields.io/badge/GitEPatiL-Follow-white?style=flat-square&logo=github&labelColor=0d1117)](https://github.com/GitEPatiL)

<br/>

> 🧠 **5 handcrafted mini-projects** demonstrating the full power of vanilla DOM manipulation —
> no frameworks, no dependencies, just **HTML · CSS · JavaScript**.

<br/>

</div>

---

## 📁 Project Structure

```bash
dom-mini-projects/
├── 🎨  color switcher/          # Dynamic background color changer
├── 🖱️  Animated Cursor/         # Custom interactive mouse tracker
├── 🔍  List and Search/         # Live real-time search & filter
├── 🔢  Simple Calculator/       # Full arithmetic calculator
├── ✅  Simple Todo List/         # CRUD task management app
└── 📄  README.md
```

---

## 🚀 Projects

<br/>

### `01` &nbsp; 🎨 Color Switcher

<table>
<tr>
<td><b>Type</b></td><td>DOM Styling</td>
<td><b>Difficulty</b></td><td>⭐☆☆☆☆ Easy</td>
<td><b>File</b></td><td><code>color switcher/index.html</code></td>
</tr>
</table>

A page that dynamically changes its background color — either via themed buttons or a custom hex/name input. Built with Bootstrap 5 for layout, with pure JS powering all the logic.

**✦ Features**
- 🎲 Random color generator with a single click
- ✏️ Manual hex code / color name input with live apply
- 📟 Displays the current active color value in real time

**✦ DOM Concepts**
```js
document.getElementById()   // grab elements
element.style.backgroundColor = color   // mutate CSS via JS
Math.random()               // generate random hex values
```

<br/>

---

### `02` &nbsp; 🖱️ Animated Cursor

<table>
<tr>
<td><b>Type</b></td><td>Mouse Events</td>
<td><b>Difficulty</b></td><td>⭐⭐☆☆☆ Easy+</td>
<td><b>File</b></td><td><code>Animated Cursor/index.html</code></td>
</tr>
</table>

Hijacks the default browser cursor and replaces it with a custom animated element that smoothly follows your mouse across the screen using live coordinate tracking.

**✦ Features**
- 📍 Tracks mouse position across the entire viewport
- 🎯 Renders a custom styled element as the cursor replacement
- 🌊 Uses CSS transitions for a smooth trailing effect

**✦ DOM Concepts**
```js
document.addEventListener('mousemove', e => {})  // real-time tracking
element.style.left / style.top                   // absolute positioning
CSS transition                                   // smooth movement
```

<br/>

---

### `03` &nbsp; 🔍 List & Search

<table>
<tr>
<td><b>Type</b></td><td>Live Filtering</td>
<td><b>Difficulty</b></td><td>⭐⭐☆☆☆ Medium</td>
<td><b>File</b></td><td><code>List and Search/index.html</code></td>
</tr>
</table>

A user directory that dynamically filters and displays entries as you type. No button click required — the list responds instantly to every keystroke.

**✦ Features**
- 📋 Loads a list of users with name and email data
- ⚡ Filters entries in real time matching name or email
- 👻 Shows / hides items without any page reload

**✦ DOM Concepts**
```js
input.addEventListener('input', ...)     // keypress-level reactivity
element.style.display                    // show/hide DOM nodes
Array.filter() + String.includes()       // search logic
```

<br/>

---

### `04` &nbsp; 🔢 Simple Calculator

<table>
<tr>
<td><b>Type</b></td><td>Logic & State</td>
<td><b>Difficulty</b></td><td>⭐⭐⭐☆☆ Medium</td>
<td><b>File</b></td><td><code>Simple Calculator/index.html</code></td>
</tr>
</table>

A fully functional arithmetic calculator built from scratch. Handles sequential operations, operator chaining, and display state — all in vanilla JS.

**✦ Features**
- ➕ Supports `+`, `−`, `×`, `÷` operations
- 🔣 Handles decimal numbers and chained calculations
- 🔄 Clear / reset with proper state management

**✦ DOM Concepts**
```js
event delegation (click)         // single handler for all buttons
eval() / manual arithmetic        // compute expressions
innerHTML manipulation            // update display live
```

<br/>

---

### `05` &nbsp; ✅ Simple Todo List

<table>
<tr>
<td><b>Type</b></td><td>Full CRUD</td>
<td><b>Difficulty</b></td><td>⭐⭐⭐☆☆ Medium</td>
<td><b>File</b></td><td><code>Simple Todo List/index.html</code></td>
</tr>
</table>

The definitive DOM exercise — a complete task manager where you can add new todos, toggle their completion state, and permanently delete them. All state lives in the DOM.

**✦ Features**
- ➕ Add tasks via input + button (or Enter key)
- ☑️ Check off tasks to mark them complete (strikethrough)
- 🗑️ Delete individual tasks permanently from the list

**✦ DOM Concepts**
```js
document.createElement()         // dynamically build new list items
element.appendChild()            // inject elements into DOM
classList.toggle('done')         // toggle completion style
element.remove()                 // delete from DOM
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|:---:|:---:|---|
| 🏗️ **Structure** | `HTML5` | Semantic markup & layout scaffolding |
| 🎨 **Styling** | `CSS3` | Animations, transitions & visual design |
| ⚙️ **Logic** | `Vanilla JavaScript` | Events, DOM manipulation, state management |
| 📦 **UI Library** | `Bootstrap 5` *(Color Switcher only)* | Responsive utility classes |

> ⚡ **Zero** npm packages · **Zero** build steps · **Zero** config · Open the file, it just works.

---

## 🗺️ DOM Skills Map

Learning progression visualized across all 5 projects:

```
         ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
         │ Level 1  │    │ Level 2  │    │ Level 3  │    │ Level 4  │
         │ SELECT   │───►│ EVENTS   │───►│ CREATE   │───►│  STATE   │
         ├──────────┤    ├──────────┤    ├──────────┤    ├──────────┤
         │querySelector │addEventListener│createElement  │State mgmt │
         │getElementById│ mousemove │    │ appendChild │  │Event chain│
         │ innerHTML │   │input events   │ classList │   │ DOM CRUD │
         │ style.prop│   │click events   │  remove() │   │Live update│
         └──────────┘    └──────────┘    └──────────┘    └──────────┘
              🎨              🖱️              🔍🔢             ✅
          Color Sw.       Anim. Cursor   List & Calc      Todo List
```

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/GitEPatiL/dom-mini-projects.git
cd dom-mini-projects

# 2. Open any project directly in your browser
#    Windows
start "Simple Todo List/index.html"

#    macOS / Linux
open "Simple Todo List/index.html"
```

> 💡 No `npm install`. No `.env`. No server. Any modern browser runs these instantly.

---

## 📊 Quick Reference

| # | Project | Difficulty | Core Concept | Path |
|:---:|:---|:---:|---|:---|
| `01` | 🎨 Color Switcher | `Easy` | CSS via JS, Random values | `color switcher/index.html` |
| `02` | 🖱️ Animated Cursor | `Easy+` | Mouse tracking, Positioning | `Animated Cursor/index.html` |
| `03` | 🔍 List & Search | `Medium` | Live filtering, Array methods | `List and Search/index.html` |
| `04` | 🔢 Simple Calculator | `Medium` | Logic, State, Display updates | `Simple Calculator/index.html` |
| `05` | ✅ Simple Todo List | `Medium` | Full CRUD DOM operations | `Simple Todo List/index.html` |

---

## 🤝 Contributing

Found a bug or have a better approach? Contributions are always welcome!

```bash
# Fork → Branch → Commit → Push → PR
git checkout -b feat/your-feature-name
git commit -m "feat: describe your change"
git push origin feat/your-feature-name
# → Open a Pull Request 🎉
```

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer" width="100%"/>

<br/>

*"The browser is your canvas. The DOM is your API. Go build."*

<br/>

Made with `</>` and zero dependencies &nbsp;·&nbsp; [@GitEPatiL](https://github.com/GitEPatiL)

<br/>

</div>