## Overview

Inspired by that shitty watercolor guy on reddit, I'm doing a repo a day for a while (ideally, 100 days).

### Purpose

This repo just cycles through words and prints them to the screen.

As always, I started out more ambitious w/this one, then gave up.

Areas for improvement:

It would be nice if the background color changed too - but I was tired of messing w state.

Actually my initial goal was to have a letterbox image but it eventually devolved into this. For one day, good enough!

### About

It's a React app, quickly hacked together.

The basic idea is it scrolls through a list of words and prints them, once every second.

It does this using hooks and basic standard React stuff.

That's it, really. Clone and enjoy.

### FAQ

Q: What's with all the CSS in the styled-components? It's just black text on a red background.

A: Originally, it was supposed to be letterboxed, but the effect didn't work (google aspect ratio). So most of the CSS isn't really doing anything.

Q: What's going on with the state, there? I see you are checking it and setting it to zero in the return function.

A: This is where I spent most of my time, debugging. For whatever reason setInterval didn't see it when I tried to reset to zero there; it thought the step was always 0 on every interval change. So I got tired of messing with it and just set it in the return section.
