// Theme Toggle Functionality
(function() {
    'use strict';

    // Theme management constants
    const THEME_KEY = 'user-theme-preference';
    const LIGHT_THEME = 'light';
    const DARK_THEME = 'dark';

    // Get user's system preference
    function getSystemPreference() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME;
    }

    // Prevent flash of wrong theme by applying theme early
    function preventThemeFlash() {
        try {
            // Use stored preference, or fall back to system preference
            const storedTheme = localStorage.getItem(THEME_KEY);
            const themeToApply = storedTheme || getSystemPreference();
            
            if (themeToApply === DARK_THEME) {
                document.documentElement.classList.add('dark-mode');
                document.body.classList.add('dark-mode');
            }
        } catch (e) {
            // Fallback to system preference if localStorage fails
            if (getSystemPreference() === DARK_THEME) {
                document.documentElement.classList.add('dark-mode');
                document.body.classList.add('dark-mode');
            }
        }
    }

    // Apply early to prevent flash
    preventThemeFlash();

    // Get stored theme preference with error handling
    function getStoredTheme() {
        try {
            return localStorage.getItem(THEME_KEY) || getSystemPreference();
        } catch (e) {
            console.warn('Theme toggle: localStorage not available, using system preference');
            return getSystemPreference();
        }
    }

    // Store theme preference with error handling
    function setStoredTheme(theme) {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (e) {
            console.warn('Theme toggle: Unable to save preference to localStorage');
        }
    }



    // Update theme color meta tags dynamically
    function updateMetaThemeColor(theme) {
        // Remove existing theme-color meta tags to avoid conflicts
        const existingMetas = document.querySelectorAll('meta[name="theme-color"]');
        existingMetas.forEach(meta => meta.remove());

        // Create new theme-color meta tag
        const metaThemeColor = document.createElement('meta');
        metaThemeColor.name = 'theme-color';
        metaThemeColor.content = theme === DARK_THEME ? '#232347' : '#ffffff';
        document.head.appendChild(metaThemeColor);
    }

    // Apply theme to document
    function applyTheme(theme) {
        // Apply to both body and documentElement for better coverage
        const elements = [document.body, document.documentElement];
        elements.forEach(element => {
            if (element) {
                if (theme === DARK_THEME) {
                    element.classList.add('dark-mode');
                } else {
                    element.classList.remove('dark-mode');
                }
            }
        });

        // Update meta theme-color
        updateMetaThemeColor(theme);

        // Update toggle button icon
        updateToggleIcon(theme);
    }

    // Update toggle button icon with better accessibility
    function updateToggleIcon(theme) {
        const toggleButton = document.querySelector('.theme-toggle');
        if (!toggleButton) return;

        // Improved SVG icons with better accessibility
        const lightIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="m12 1-1 1h2zM19 12h2M12 23l-1-1h2zM5 12H3M7.05 7.05 5.64 5.64M19.36 5.64 17.95 7.05M17.95 16.95l1.41 1.41M7.05 16.95 5.64 18.36"/></svg>`;
        const darkIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="moon-fill" fill="transparent" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        
        const icon = theme === DARK_THEME ? lightIcon : darkIcon;
        toggleButton.innerHTML = icon;

        // Update accessibility attributes
        const nextTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
        const currentThemeName = theme === DARK_THEME ? 'dark' : 'light';
        const nextThemeName = nextTheme === DARK_THEME ? 'dark' : 'light';

        toggleButton.setAttribute('aria-label', `Switch from ${currentThemeName} to ${nextThemeName} theme`);
        toggleButton.title = `Current: ${currentThemeName} theme. Click to switch to ${nextThemeName}.`;
    }

    // Simple toggle between light and dark
    function toggleTheme() {
        const currentTheme = getStoredTheme();
        const nextTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

        setStoredTheme(nextTheme);
        applyTheme(nextTheme);

        // Announce theme change for screen readers
        announceThemeChange(nextTheme);
    }

    // Announce theme changes for accessibility
    function announceThemeChange(theme) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.style.cssText = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;';
        
        const themeName = theme === DARK_THEME ? 'dark mode' : 'light mode';
        announcement.textContent = `Switched to ${themeName}`;
        document.body.appendChild(announcement);
        
        // Remove announcement after screen readers have processed it
        setTimeout(() => {
            if (announcement.parentNode) {
                announcement.parentNode.removeChild(announcement);
            }
        }, 1000);
    }

    // Create and insert theme toggle button with improved accessibility
    function createToggleButton() {
        // Don't create if button already exists
        if (document.querySelector('.theme-toggle')) {
            return document.querySelector('.theme-toggle');
        }

        const toggleButton = document.createElement('button');
        toggleButton.className = 'theme-toggle';
        toggleButton.setAttribute('type', 'button');
        toggleButton.setAttribute('aria-label', 'Toggle theme');
        
        // Add initial icon immediately
        const currentTheme = getStoredTheme();
        const lightIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="m12 1-1 1h2zM19 12h2M12 23l-1-1h2zM5 12H3M7.05 7.05 5.64 5.64M19.36 5.64 17.95 7.05M17.95 16.95l1.41 1.41M7.05 16.95 5.64 18.36"/></svg>`;
        const darkIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="moon-fill" fill="transparent" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        toggleButton.innerHTML = currentTheme === DARK_THEME ? lightIcon : darkIcon;
        
        // Add keyboard support
        toggleButton.addEventListener('click', toggleTheme);
        toggleButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTheme();
            }
        });
        
        // Insert into page - try body first, fallback to documentElement
        if (document.body) {
            document.body.appendChild(toggleButton);
        } else {
            document.documentElement.appendChild(toggleButton);
        }
        
        console.log('Theme toggle button created and added to page');
        return toggleButton;
    }

    // Initialize theme system with better error handling
    function initTheme() {
        try {
            // Apply stored theme immediately to prevent flash
            const storedTheme = getStoredTheme();
            applyTheme(storedTheme);

            // Create toggle button
            createToggleButton();

            // No need to listen for system theme changes since we removed system theme option

        } catch (e) {
            console.error('Theme toggle: Initialization failed', e);
        }
    }

    // Initialize when DOM is ready with improved timing
    function init() {
        console.log('Theme toggle: Starting initialization, document.readyState:', document.readyState);
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initTheme);
        } else {
            // DOM already loaded, initialize immediately
            initTheme();
        }
        
        // Also listen for when body is available if it's not ready yet
        if (!document.body) {
            const bodyCheck = setInterval(() => {
                if (document.body) {
                    clearInterval(bodyCheck);
                    if (!document.querySelector('.theme-toggle')) {
                        console.log('Theme toggle: Body available, creating button');
                        createToggleButton();
                    }
                }
            }, 10);
        }
    }

    // Start initialization
    init();

})(); 