# Anne T. – Links Landing Page

Hey there! 👋 I’m Anne, and this is my personal “link in bio” site—a simple, central place to find my professional links, socials, and a little about me. Built with Hugo and the Lynx theme, it’s easy for me to update and (hopefully) easy for you to explore.

## 🚀 Live Site
[https://anneongit.github.io/lynx/](https://anneongit.github.io/lynx/)

## What’s Here
- A clean, mobile-friendly landing page
- My key links and social profiles
- Quick intro/about section
- **Smart dark/light theme toggle** that respects your system preference

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

## ✨ Theme Toggle Features
This site includes a beautiful, custom theme toggle that enhances the user experience:

### 🌓 Smart Theme Detection
- **Respects System Preference**: Automatically loads in dark or light mode based on your device settings on first visit
- **One-Click Toggle**: Simple toggle between light and dark themes that overrides system preferences
- **Remembers Choice**: Saves your preference for future visits using localStorage
- **No Flash**: Smooth loading without theme flicker
- **System Override**: Custom toggle completely overrides system dark mode to prevent conflicts

### 🎨 Interactive Design
- **Light Mode**: 
  - Clean original Lynx theme styling
  - Moon icon with purple fill preview on hover
  - Subtle shadow effects and smooth transitions
- **Dark Mode**: 
  - Custom purple gradient backgrounds
  - Glowing purple accent colors matching link buttons
  - Sun icon with neon purple glow effects

### ♿ Accessibility Features
- **Screen Reader Support**: Announces theme changes
- **Keyboard Navigation**: Full keyboard accessibility (Space/Enter)
- **Focus States**: Clear visual focus indicators
- **Proper ARIA Labels**: Descriptive labels for assistive technology

## Custom Dark Theme Enhancements
I've added several modern UI enhancements to create a cohesive dark theme experience:

### 🎨 Visual Elements
- **Background:** Radial gradient background in deep purple tones
- **Link Cards:** 
  - Glassy, frosted-glass effect with blur
  - Interactive hover animations with lift effects
  - Purple accent borders and glow on hover
- **Profile Section:**
  - Clean, bright text with subtle purple glow
  - Enhanced avatar with gentle border effects
  - Smooth hover animations on interactive elements
- **Theme Toggle:**
  - Elegant floating toggle button
  - Purple glow effects matching overall design
  - Smooth icon transitions and hover states

### 📱 Mobile Optimization
- Improved status bar appearance on iOS devices
- Proper handling of notches and Dynamic Island
- Seamless dark theme integration with system UI
- Responsive theme toggle sizing

### 🛠️ Implementation Details
These customizations are implemented in:
- `assets/css/custom.css` - Main theme customizations and toggle styling
- `static/js/theme-toggle.js` - Theme toggle functionality and logic
- `layouts/partials/extend-head.html` - Mobile viewport optimizations and script loading
- `static/site.webmanifest` - Theme color configurations

### 🔧 Technical Features
- **Error Handling**: Graceful degradation when localStorage is unavailable
- **Performance Optimized**: Prevents theme flash on page load
- **Cross-Browser Compatible**: Works with modern browsers and older versions
- **System Integration**: Dynamic theme-color meta tag updates
- **Conflict Resolution**: CSS overrides prevent system dark mode from interfering with manual toggle

## Credits
- [Lynx Hugo Theme](https://github.com/jpanther/lynx) by @jpanther
- [Hugo](https://gohugo.io/)

## License
MIT. See [LICENSE](LICENSE) for details.
