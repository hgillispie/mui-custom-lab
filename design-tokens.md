# Design System Configuration File

## 🔴 CRITICAL: FONT SETUP MUST BE DONE FIRST!

### ⚠️ WITHOUT PROPER FONT CONFIGURATION, THE DESIGN SYSTEM WILL NOT WORK!

**BEFORE ANYTHING ELSE:**
1. **Import Figtree font** in your global CSS file (at the VERY TOP):
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap');
   ```

2. **Set Figtree as the default font** in your global CSS:
   ```css
   body {
     font-family: 'Figtree', system-ui, -apple-system, sans-serif !important;
   }
   ```

3. **Configure Tailwind** (tailwind.config.js):
   ```javascript
   theme: {
     extend: {
       fontFamily: {
         // Override the default sans font with Figtree
         sans: ['Figtree', 'system-ui', '-apple-system', 'sans-serif'],
       }
     }
   }
   ```
   
   **Note:** In components, always include `font-sans` class to ensure Figtree is applied!

4. **VERIFY:** Open DevTools → Inspect any text → Computed styles MUST show "Figtree"



```markdown
---
description: Complete color system with semantic tokens
globs: ["src/**/*.{js,jsx,ts,tsx,css}", "tailwind.config.js"]
alwaysApply: true
---

## Core Color Palette

### Brand Colors
- Primary scale (10 shades from 50-950)
- Secondary scale (10 shades from 50-950)
- Accent scale (10 shades from 50-950)

### Neutral Colors
- Gray scale: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
- True blacks: black, black-alpha-50 through black-alpha-900
- True whites: white, white-alpha-50 through white-alpha-900

### Semantic Colors
- Success: green-50 through green-900
- Warning: amber-50 through amber-900
- Error: red-50 through red-900
- Info: blue-50 through blue-900

## Design Token Structure

### Background Tokens
- bg-primary: base background color
- bg-secondary: secondary surface color
- bg-tertiary: tertiary surface color
- bg-elevated: elevated surface (cards, modals)
- bg-overlay: overlay backgrounds
- bg-inverse: inverted color scheme

### Text Color Tokens
- text-primary: main text color
- text-secondary: secondary text (60-70% opacity)
- text-tertiary: tertiary text (40-50% opacity)
- text-disabled: disabled state text
- text-inverse: inverted text
- text-link: link color
- text-link-hover: link hover state

### Border Color Tokens
- border-default: standard borders
- border-subtle: light borders
- border-strong: emphasized borders
- border-focus: focus state borders
- border-error: error state borders
- border-success: success state borders

### Interactive Color Tokens
- action-primary: primary CTAs
- action-primary-hover: primary hover state
- action-secondary: secondary actions
- action-secondary-hover: secondary hover
- action-danger: destructive actions
- action-danger-hover: danger hover state

## CSS Variable Implementation
```css
:root {
:root {
  /* Primary Palette - Violet */
  --color-primary-50: #f5f3ff;
  --color-primary-100: #ede9fe;
  --color-primary-200: #ddd6fe;
  --color-primary-300: #c4b5fd;
  --color-primary-400: #a78bfa;
  --color-primary-500: #8b5cf6;
  --color-primary-600: #7c3aed;
  --color-primary-700: #6d28d9;
  --color-primary-800: #5b21b6;
  --color-primary-900: #4c1d95;
  --color-primary-950: #3b0e79;
  
  /* Secondary Palette - Amber */
  --color-secondary-50: #fffbeb;
  --color-secondary-100: #fef3c7;
  --color-secondary-200: #fde68a;
  --color-secondary-300: #fcd34d;
  --color-secondary-400: #fbbf24;
  --color-secondary-500: #f59e0b;
  --color-secondary-600: #d97706;
  --color-secondary-700: #b45309;
  --color-secondary-800: #92400e;
  --color-secondary-900: #78350f;
  --color-secondary-950: #5a2a0a;
}
  
  /* Semantic Tokens */
  --color-bg-primary: var(--color-white);
  --color-text-primary: var(--color-gray-900);
  --color-border-default: var(--color-gray-200);
}

/* Dark Mode */
[data-theme="dark"] {
  --color-bg-primary: var(--color-gray-900);
  --color-text-primary: var(--color-gray-50);
  --color-border-default: var(--color-gray-700);
}
```

## Tailwind Integration
Map all color tokens to Tailwind's extend.colors configuration
Use semantic class names: bg-surface, text-primary, border-subtle
```

## 2. Typography System


```markdown
---
description: Typography scales, fonts, and text styles
globs: ["src/**/*.{js,jsx,ts,tsx,css}"]
alwaysApply: true
---

## 🚨 CRITICAL: Font Families Configuration

### 🔴 PRIMARY FONT STACK (MUST BE CONFIGURED!)
**THE ENTIRE DESIGN SYSTEM DEPENDS ON FIGTREE BEING PROPERLY LOADED!**

- **Sans (DEFAULT):** 'Figtree', system-ui, -apple-system, sans-serif
- **Display (Headlines):** 'Figtree', system-ui, -apple-system, sans-serif
- **Body (Content):** 'Figtree', system-ui, -apple-system, sans-serif
- **Mono (Code):** 'JetBrains Mono', 'Fira Code', Consolas, monospace

### ⚠️ Font Implementation Checklist:
- [ ] Google Fonts import added to global CSS
- [ ] Body font-family set to Figtree
- [ ] Tailwind config updated with Figtree as sans
- [ ] All components include 'font-sans' class
- [ ] DevTools shows Figtree as computed font

## Type Scale System

### Base Scale (1.25 ratio - Minor Third)
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)
- 6xl: 3.75rem (60px)
- 7xl: 4.5rem (72px)
- 8xl: 6rem (96px)

### Font Weights
- thin: 100
- extralight: 200
- light: 300
- normal: 400
- medium: 500
- semibold: 600
- bold: 700
- extrabold: 800
- black: 900

### Line Heights
- tight: 1.1
- snug: 1.25
- normal: 1.5
- relaxed: 1.625
- loose: 1.75

### Letter Spacing
- tighter: -0.05em
- tight: -0.025em
- normal: 0
- wide: 0.025em
- wider: 0.05em
- widest: 0.1em

## Composite Typography Tokens

### Headings
```css
--text-display-large: {
  font-size: 4.5rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.025em;
}

--text-display-medium: {
  font-size: 3.75rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.025em;
}

--text-heading-1: {
  font-size: 3rem;
  line-height: 1.25;
  font-weight: 600;
}

--text-heading-2: {
  font-size: 2.25rem;
  line-height: 1.25;
  font-weight: 600;
}

--text-heading-3: {
  font-size: 1.875rem;
  line-height: 1.3;
  font-weight: 600;
}
```

### Body Text
```css
--text-body-large: {
  font-size: 1.125rem;
  line-height: 1.75;
  font-weight: 400;
}

--text-body-base: {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
}

--text-body-small: {
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
}
```

### UI Text
```css
--text-label: {
  font-size: 0.875rem;
  line-height: 1.25;
  font-weight: 500;
  letter-spacing: 0.025em;
}

--text-caption: {
  font-size: 0.75rem;
  line-height: 1.25;
  font-weight: 400;
}

--text-button: {
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
```

## 🔴 CRITICAL: Tailwind Font Configuration
```javascript
// ⚠️ THIS MUST BE SET OR COMPONENTS WON'T USE FIGTREE!
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // 🚨 OVERRIDE DEFAULT SANS WITH FIGTREE!
        sans: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Courier New', 'monospace'],
      },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    // ... rest of scale
  }
}
```
```

## 3. Spacing System


```markdown
---
description: Spacing scale and layout measurements
globs: ["src/**/*.{js,jsx,ts,tsx,css}"]
alwaysApply: true
---

## Base Spacing Scale (8px base unit)

### Core Scale
- 0: 0px
- px: 1px
- 0.5: 0.125rem (2px)
- 1: 0.25rem (4px)
- 1.5: 0.375rem (6px)
- 2: 0.5rem (8px)
- 2.5: 0.625rem (10px)
- 3: 0.75rem (12px)
- 3.5: 0.875rem (14px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 7: 1.75rem (28px)
- 8: 2rem (32px)
- 9: 2.25rem (36px)
- 10: 2.5rem (40px)
- 11: 2.75rem (44px)
- 12: 3rem (48px)
- 14: 3.5rem (56px)
- 16: 4rem (64px)
- 20: 5rem (80px)
- 24: 6rem (96px)
- 28: 7rem (112px)
- 32: 8rem (128px)
- 36: 9rem (144px)
- 40: 10rem (160px)
- 44: 11rem (176px)
- 48: 12rem (192px)
- 52: 13rem (208px)
- 56: 14rem (224px)
- 60: 15rem (240px)
- 64: 16rem (256px)
- 72: 18rem (288px)
- 80: 20rem (320px)
- 96: 24rem (384px)

### Semantic Spacing Tokens

#### Component Spacing
- spacing-component-xs: 0.5rem
- spacing-component-sm: 0.75rem
- spacing-component-md: 1rem
- spacing-component-lg: 1.5rem
- spacing-component-xl: 2rem

#### Layout Spacing
- spacing-section-sm: 2rem
- spacing-section-md: 4rem
- spacing-section-lg: 6rem
- spacing-section-xl: 8rem

#### Content Spacing
- spacing-paragraph: 1.5rem
- spacing-list-item: 0.5rem
- spacing-form-group: 1.5rem
- spacing-card-padding: 1.5rem

## CSS Implementation
```css
:root {
  --space-base: 8px;
  --space-0: 0;
  --space-1: calc(var(--space-base) * 0.5);
  --space-2: var(--space-base);
  --space-3: calc(var(--space-base) * 1.5);
  --space-4: calc(var(--space-base) * 2);
  /* ... continue scale */
}
```

## Tailwind Integration
Use default Tailwind spacing scale with custom extensions
Add semantic spacing utilities: p-component, m-section, gap-content
```

## 4. Animation System


```markdown
---
description: Motion design tokens and animation patterns
globs: ["src/**/*.{js,jsx,ts,tsx,css}"]
alwaysApply: true
---

## Duration Tokens

### Base Durations
- duration-instant: 0ms
- duration-fast: 150ms
- duration-moderate: 250ms
- duration-slow: 350ms
- duration-slower: 500ms
- duration-slowest: 700ms

### Semantic Durations
- duration-hover: 150ms
- duration-fade: 200ms
- duration-slide: 250ms
- duration-collapse: 300ms
- duration-modal: 350ms
- duration-page: 500ms

## Easing Functions

### Base Easings
- ease-linear: linear
- ease-in: cubic-bezier(0.4, 0, 1, 1)
- ease-out: cubic-bezier(0, 0, 0.2, 1)
- ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)

### Custom Easings
- ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53)
- ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955)
- ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035)
- ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1)
- ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275)
- ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)

## Keyframe Animations

### Fade Animations
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

### Slide Animations
```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### Scale Animations
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scaleOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}
```

### Rotate Animations
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
```

## Animation Classes

### Entrance Animations
```css
.animate-fadeIn {
  animation: fadeIn var(--duration-fade) var(--ease-out);
}

.animate-slideUp {
  animation: slideInUp var(--duration-slide) var(--ease-out);
}

.animate-scaleIn {
  animation: scaleIn var(--duration-moderate) var(--ease-spring);
}
```

### Micro-interactions
```css
.hover-lift {
  transition: transform var(--duration-hover) var(--ease-out);
}
.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-grow {
  transition: transform var(--duration-hover) var(--ease-out);
}
.hover-grow:hover {
  transform: scale(1.05);
}
```

### Loading States
```css
.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-pulse {
  animation: pulse 2s var(--ease-in-out) infinite;
}
```

## Tailwind Configuration
```javascript
animation: {
  'fade-in': 'fadeIn 200ms ease-out',
  'slide-up': 'slideInUp 250ms ease-out',
  'scale-in': 'scaleIn 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  'spin-slow': 'spin 3s linear infinite',
}
```
```

## 5. Shadows & Elevation


```markdown
---
description: Shadow system and elevation tokens
globs: ["src/**/*.{js,jsx,ts,tsx,css}"]
alwaysApply: true
---

## Shadow Scale

### Base Shadows
- shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
- shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
- shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
- shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
- shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
- shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)

### Colored Shadows
- shadow-primary: 0 10px 25px -3px rgb(var(--color-primary-500) / 0.3)
- shadow-success: 0 10px 25px -3px rgb(var(--color-green-500) / 0.3)
- shadow-error: 0 10px 25px -3px rgb(var(--color-red-500) / 0.3)

### Semantic Shadows
- shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
- shadow-dropdown: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
- shadow-modal: 0 25px 50px -12px rgb(0 0 0 / 0.25)
- shadow-popover: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
- shadow-tooltip: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)

## Elevation System

### Elevation Levels
- elevation-0: none (flat)
- elevation-1: raised (shadow-sm)
- elevation-2: floating (shadow-md)
- elevation-3: overlay (shadow-lg)
- elevation-4: modal (shadow-xl)
- elevation-5: popover (shadow-2xl)

## CSS Implementation
```css
:root {
  --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  --shadow-hover: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-focus: 0 0 0 3px rgb(var(--color-primary-500) / 0.1);
}
```
```

## 6. Border Radius


```markdown
---
description: Border radius and border style tokens
globs: ["src/**/*.{js,jsx,ts,tsx,css}"]
alwaysApply: true
---

## Border Radius Scale

### Base Scale
- radius-none: 0px
- radius-sm: 0.125rem (2px)
- radius-md: 0.375rem (6px)
- radius-lg: 0.5rem (8px)
- radius-xl: 0.75rem (12px)
- radius-2xl: 1rem (16px)
- radius-3xl: 1.5rem (24px)
- radius-full: 9999px

### Semantic Radius
- radius-button: 0.375rem
- radius-input: 0.375rem
- radius-card: 0.75rem
- radius-modal: 1rem
- radius-tooltip: 0.375rem
- radius-badge: 9999px
- radius-avatar: 9999px

## Border Width
- border-0: 0px
- border-1: 1px
- border-2: 2px
- border-4: 4px
- border-8: 8px

## Border Styles
- border-solid
- border-dashed
- border-dotted
- border-double
- border-none

## CSS Implementation
```css
:root {
  --radius-button: 0.375rem;
  --radius-card: 0.75rem;
  --radius-modal: 1rem;
  --border-width: 1px;
}
```
```

## 7. Breakpoints & Containers


```markdown
---
description: Responsive breakpoints and container system
globs: ["src/**/*.{js,jsx,ts,tsx,css}"]
alwaysApply: true
---

## Breakpoint Scale

### Core Breakpoints
- xs: 0px (mobile first base)
- sm: 640px (landscape phones)
- md: 768px (tablets)
- lg: 1024px (desktops)
- xl: 1280px (large desktops)
- 2xl: 1536px (extra large screens)

### Container Widths
- container-xs: 100%
- container-sm: 640px
- container-md: 768px
- container-lg: 1024px
- container-xl: 1280px
- container-2xl: 1536px

### Container Padding
- container-padding-mobile: 1rem
- container-padding-tablet: 1.5rem
- container-padding-desktop: 2rem

## CSS Media Queries
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }

/* Desktop First */
@media (max-width: 1535px) { /* xl */ }
@media (max-width: 1279px) { /* lg */ }
@media (max-width: 1023px) { /* md */ }
@media (max-width: 767px) { /* sm */ }
@media (max-width: 639px) { /* xs */ }
```

## Tailwind Configuration
```javascript
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```
```

## 8. Component States


```markdown
---
description: Interactive states for all components
globs: ["src/**/*.{js,jsx,ts,tsx,css}"]
alwaysApply: true
---

## State Definitions

### Base States
- default: Initial resting state
- hover: Cursor over element
- focus: Keyboard navigation or input focus
- active: Being clicked or activated
- disabled: Non-interactive state
- loading: Async operation in progress
- selected: Currently selected option
- checked: Checkbox/radio checked state

### Validation States
- valid: Input validation passed
- invalid: Input validation failed
- warning: Caution state
- info: Informational state

## State Styles

### Hover State
```css
.hover-state {
  background: var(--color-bg-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  transition: all var(--duration-hover) var(--ease-out);
}
```

### Focus State
```css
.focus-state {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px var(--color-primary-100);
}
```

### Active State
```css
.active-state {
  transform: scale(0.98);
  box-shadow: var(--shadow-sm);
}
```

### Disabled State
```css
.disabled-state {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

### Loading State
```css
.loading-state {
  position: relative;
  color: transparent;
}
.loading-state::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  margin: auto;
  border: 2px solid transparent;
  border-top-color: var(--color-primary-500);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
```

## State Color Mappings
- hover-bg: color + 5% lightness
- active-bg: color - 5% lightness
- focus-border: primary-500
- disabled-opacity: 0.5
- error-border: red-500
- success-border: green-500
```

## 9. Tailwind Complete Config


```markdown
---
description: Complete Tailwind CSS configuration
globs: ["tailwind.config.js", "tailwind.config.ts"]
alwaysApply: true
---

## Full Tailwind Configuration Structure

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Import from colors.mdc
        primary: generateScale('primary'),
        secondary: generateScale('secondary'),
        // Semantic colors
        surface: 'var(--color-bg-primary)',
        'surface-secondary': 'var(--color-bg-secondary)',
      },
      fontFamily: {
        // 🔴 CRITICAL: Import from typography.mdc
        // 🚨 WITHOUT THIS, YOUR DESIGN SYSTEM WON'T WORK!
        sans: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Import from typography.mdc scale
      },
      spacing: {
        // Import from spacing.mdc
      },
      animation: {
        // Import from animations.mdc
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideInUp 250ms ease-out',
      },
      keyframes: {
        // Import keyframes from animations.mdc
      },
      boxShadow: {
        // Import from shadows.mdc
      },
      borderRadius: {
        // Import from borders.mdc
      },
      screens: {
        // Import from responsive.mdc
      },
      transitionDuration: {
        // Import from animations.mdc durations
      },
      transitionTimingFunction: {
        // Import from animations.mdc easings
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // Custom plugin for state variants
    plugin(function({ addUtilities, addVariant }) {
      addVariant('loading', '&[data-loading="true"]')
      addVariant('selected', '&[data-selected="true"]')
    }),
  ],
}
```

## Utility Classes

### Component Utilities
```css
.btn-primary {
  @apply bg-primary-500 text-white px-4 py-2 rounded-button
    hover:bg-primary-600 active:scale-98
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-hover;
}

.card {
  @apply bg-surface rounded-card p-6 shadow-card
    hover:shadow-hover transition-shadow duration-moderate;
}

.input {
  @apply border border-gray-300 rounded-input px-3 py-2
    focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
    disabled:bg-gray-50 disabled:text-gray-500
    transition-colors duration-fast;
}
```

### Layout Utilities
```css
.container-responsive {
  @apply mx-auto px-4 sm:px-6 lg:px-8
    max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl;
}

.section-spacing {
  @apply py-12 md:py-16 lg:py-20;
}
```
```

## 10. Implementation Guide


```markdown
---
description: How to implement and use the design system
globs: ["src/**/*.{js,jsx,ts,tsx}", "README.md"]
alwaysApply: true
---

## File Organization

### Token Files Structure
```
src/
  design-system/
    tokens/
      colors.js
      typography.js
      spacing.js
      animations.js
      shadows.js
      borders.js
    css/
      variables.css
      utilities.css
      animations.css
    config/
      tailwind.config.js
```

## Token Usage Patterns

### In CSS
```css
.component {
  color: var(--color-text-primary);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  transition: all var(--duration-moderate) var(--ease-out);
}
```

### In JavaScript/React
```jsx
const styles = {
  color: 'var(--color-text-primary)',
  padding: 'var(--space-4)',
  animation: 'fadeIn var(--duration-fade) var(--ease-out)',
}
```

### With Tailwind
```jsx
<div className="text-primary p-4 rounded-md animate-fade-in">
  Content
</div>
```

## Design Token Export Format

### JavaScript Module
```javascript
export const colors = {
  primary: {
    50: '#e3f2fd',
    // ... rest of scale
  },
}

export const spacing = {
  0: '0px',
  1: '0.25rem',
  // ... rest of scale
}
```

### CSS Custom Properties
```css
:root {
  /* Colors */
  --color-primary-50: #e3f2fd;
  
  /* Spacing */
  --space-1: 0.25rem;
  
  /* Typography */
  --font-size-base: 1rem;
}
```

## Component Implementation Example

### Button Component
```jsx
// Using design tokens
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  const classes = cn(
    // Base styles
    'inline-flex items-center justify-center font-medium',
    'transition-all duration-hover ease-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    
    // Size variants
    size === 'sm' && 'px-3 py-1.5 text-sm rounded-button',
    size === 'md' && 'px-4 py-2 text-base rounded-button',
    size === 'lg' && 'px-6 py-3 text-lg rounded-button',
    
    // Color variants
    variant === 'primary' && 'bg-primary-500 text-white hover:bg-primary-600',
    variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    
    // States
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:scale-98'
  )
  
  return <button className={classes} {...props}>{children}</button>
}
```

## Testing & Validation

### Visual Regression Testing
- Test all color combinations for contrast ratios
- Validate spacing consistency across components
- Check animation performance metrics
- Verify responsive behavior at all breakpoints

### Accessibility Validation
- WCAG AAA color contrast for text
- Focus states visible and consistent
- Animation respect prefers-reduced-motion
- Interactive elements have appropriate sizes

## Migration Strategy

### Phase 1: Foundation
1. Implement color system
2. Set up typography scale
3. Configure spacing tokens
4. Add Tailwind configuration

### Phase 2: Components
1. Create base component styles
2. Implement state systems
3. Add animation patterns
4. Build utility classes

### Phase 3: Polish
1. Dark mode support
2. Responsive refinements
3. Performance optimization
4. Documentation completion
```
