---
title: "12 Must-Have CLI Tools That Deserve a Spot in Your Terminal"
description: "CLI Tools you need to try because they are not only useful but eye candy aswell."
pubDate: "Apr 18 2025"
heroImage: "/cli.png"
---

# 12 Must-Have CLI Tools That Deserve a Spot in Your Terminal

Let’s be real, once you get comfortable in the terminal, it starts feeling like home. GUI apps are fine, but the command line? That’s where the magic happens. Over the years, I’ve collected a handful of CLI tools that I keep coming back to—some practical, some powerful, and a couple that just make the terminal _feel_ better.

Here are 12 CLI tools that, in my opinion, deserve a permanent spot in your workflow.

---

### 1. [**BAT**](https://github.com/sharkdp/bat) – A Better `cat`

Why `cat` when you can `bat`? Syntax highlighting, line numbers, and Git integration make `bat` an instant upgrade.  
_Honestly, I haven’t used plain `cat` in months. This just looks too good._

---

### 2. [**FZF**](https://github.com/junegunn/fzf) – Fuzzy Finder That Works With _Anything_

`fzf` is one of those tools that feels almost magical once you get the hang of it. It’s a fuzzy finder, meaning, you can type part of what you're looking for and it’ll match it on the fly. What makes it powerful? You can plug it into literally anything that outputs text.

- 🔁 **Search through previous commands (like in Ghostty):**

  ```bash
  history | fzf
  ```

  Instant scrollable history, ready to paste and run.

- 📁 **Jump to a directory fast:**
  ```bash
  find . -type d | fzf
  ```
  Combine it with `cd $(...)` and you’re zooming through folders like a pro.

_fzf can help you find the part you actually care about._

---

### 3. [**NCDU**](https://dev.yorhel.nl/ncdu) – Clean Up Without the Headache

Storage full and no clue why? ncdu makes it stupid easy to see where your space is going. Navigate, delete, repeat—it’s like a tidy-up wizard for your terminal.
This one’s saved my butt more than once, especially when my Linux system suddenly fills up and I’m staring at mysterious folders like bin, share, and var wondering what’s eating all my space.

---

### 4. [**DUF**](https://github.com/muesli/duf) – Disk Usage, But Make It Pretty

Forget `df -h`. `duf` gives you a clean, color-coded snapshot of all your disks and mount points.  
_I usually reach for it when something feels off with storage, but honestly, I sometimes open it just because it looks good._

---

### 5. [**CAVA**](https://github.com/karlstav/cava) – Visualize the Vibes

Is it essential? Maybe not. Is it awesome? 100%. `cava` turns your terminal into a pulsing audio visualizer.  
_Perfect for late-night coding sessions with lo-fi beats playing in the background._

---

### 6. [**GOTOP**](https://github.com/xxxserxxx/gotop) & [**HTOP**](https://htop.dev/) – System Stats with Style

`htop` is a must—interactive, colorful, and intuitive. But `gotop` takes it further with gorgeous graph-based visuals.  
_I’ll admit it, I use `htop` daily, but `gotop` is what I show off when someone’s watching over my shoulder._

---

### 7. [**TREE**](https://github.com/Old-Man-Programmer/tree) – Structure at a Glance

Want to actually _see_ what your directory looks like? `tree` displays it all in a nested format.  
_Super handy when diving into someone else’s project or cleaning up chaos._

---

### 8. [**ALIAS**](https://opensource.com/article/19/7/bash-aliases) – Your Terminal, Your Rules

Not a tool per se, but a good alias game is next-level productivity.  
`alias please='sudo'` might not be practical… but it feels right.  
_Pro tip: throw your favorites in `.bashrc` or `.zshrc` and never look back._

---

### 9. [**REDSHIFT**](http://jonls.dk/redshift/) – Eyes First, Code Second

Late-night screen glow got you squinting? `redshift` adjusts your display temperature to be easier on the eyes.  
_It’s one of those tools you forget is running—until you disable it and instantly regret it._

---

### 10. [**FIND**](https://man7.org/linux/man-pages/man1/find.1.html) – Seek and Ye Shall Find

Need to track down that one rogue file? `find` is incredibly powerful (and surprisingly satisfying once you nail the syntax).

```bash
find . -name "*.sh" -type f
```

_Pair it with `xargs` and you’re basically a command-line wizard._

---

### 11. [**NMTUI**](https://linux.die.net/man/1/nmtui) – Network Setup, No Mouse Required

`nmtui` gives you a full-screen, text-based interface for managing network connections.  
_Super useful on headless machines or minimal installs when you just need Wi-Fi working fast._

---

### 12. [**YAZI**](https://github.com/sxyazi/yazi) – A TUI File Manager That Feels Right

Fast, intuitive, and a solid replacement for `ranger`. `yazi` is a modern terminal file manager that’s smooth to navigate.  
_This one’s become a daily driver for me—especially on machines without a GUI._

---

## Final Thoughts

These tools aren't just helpful—they make the command line a better place to work and play. Whether you're managing systems, coding, or just poking around, having the right set of CLI tools can save time, reduce friction, and even make you look cooler (okay, maybe just a little).

Untill next time, Adios.
