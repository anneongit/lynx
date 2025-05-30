# Anne T. – Links Landing Page

Hey there! 👋 I’m Anne, and this is my personal “link in bio” site—a simple, central place to find my professional links, socials, and a little about me. Built with Hugo and the Lynx theme, it’s easy for me to update and (hopefully) easy for you to explore.

## 🚀 Live Site
[https://anneongit.github.io/lynx/](https://anneongit.github.io/lynx/)

## What’s Here
- A clean, mobile-friendly landing page
- My key links and social profiles
- Quick intro/about section

## Quick Start (for me or the curious)
1. **Clone this repo:**
   ```sh
   git clone https://github.com/anneongit/lynx.git
   cd lynx
   ```
2. **Install [Hugo](https://gohugo.io/getting-started/installing/)** (if you don’t have it):
   ```sh
   brew install hugo
   # or see Hugo docs for your OS
   ```
3. **Run locally:**
   ```sh
   hugo server -D
   # Visit http://localhost:1313
   ```
4. **Deploy:**
   - Push to your GitHub repo (for GitHub Pages)
   - Or use any static hosting provider

## Customizing
- **Links, avatar, and bio:**
  - Edit `config.toml` under `[params.author]` and `[params]`.
  - Add/remove links in the `links` array.
  - Place your avatar image in `assets/` and update the filename if needed.
- **Theme settings:**
  - See [Lynx theme docs](https://github.com/jpanther/lynx#readme) for advanced options.

## Custom Dark Theme Enhancements
I've added several modern UI enhancements to the dark theme:

### 🎨 Visual Elements
- **Background:** Radial gradient background in deep purple tones
- **Link Cards:** 
  - Glassy, frosted-glass effect with blur
  - Interactive hover animations
  - Purple accent borders on hover
- **Profile Section:**
  - Clean, bright text with subtle purple glow
  - Enhanced avatar with gentle border effects
  - Hover animations on interactive elements

### 📱 Mobile Optimization
- Improved status bar appearance on iOS devices
- Proper handling of notches and Dynamic Island
- Seamless dark theme integration with system UI

### 🛠️ Implementation Details
These customizations are implemented in:
- `assets/css/custom.css` - Main theme customizations
- `layouts/partials/extend-head.html` - Mobile viewport optimizations
- `static/site.webmanifest` - Theme color configurations

## Credits
- [Lynx Hugo Theme](https://github.com/jpanther/lynx) by @jpanther
- [Hugo](https://gohugo.io/)

## License
MIT. See [LICENSE](LICENSE) for details.
