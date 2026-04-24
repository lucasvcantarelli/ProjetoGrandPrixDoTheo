---
name: High-Octane Celebration
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1b1c'
  surface-container: '#1f1f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#e7bdb2'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#303031'
  outline: '#ad887e'
  outline-variant: '#5d4038'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#601400'
  primary-container: '#ff5625'
  on-primary-container: '#541100'
  inverse-primary: '#b12d00'
  secondary: '#b3c5ff'
  on-secondary: '#0d2c6e'
  secondary-container: '#2a4386'
  on-secondary-container: '#9bb3fd'
  tertiary: '#c6c6c6'
  on-tertiary: '#2f3131'
  tertiary-container: '#909191'
  on-tertiary-container: '#282a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b3c5ff'
  on-secondary-fixed: '#00174a'
  on-secondary-fixed-variant: '#2a4386'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-lg:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.5'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 8px
  gutter: 24px
  margin: 32px
  stripe-width: 4px
---

## Brand & Style

The design system is engineered to capture the adrenaline and velocity of a professional racetrack, tailored for a high-energy birthday celebration. The visual language is **High-Contrast / Bold**, utilizing aggressive angles and mechanical textures to evoke a sense of motion even in static layouts.

The personality is competitive, playful, and loud. It draws inspiration from automotive livery design, featuring "go-faster" stripes, scorching flame motifs, and heavy tire-tread textures. The UI should feel like a performance dashboard—precise, durable, and ready to race.

## Colors

This design system utilizes a high-octane palette designed to pop against dark asphalt backgrounds.

- **Racing Orange (Primary):** A vibrant, saturated orange used for primary actions, flame accents, and key highlights.
- **Deep Blue (Secondary):** A rich, midnight navy that provides a professional racing team aesthetic; used for structural depth.
- **Chrome Silver (Tertiary):** A metallic gradient-inspired silver used for borders, "metal" plates, and reflective highlights.
- **Asphalt Black (Neutral):** A deep, textured charcoal that serves as the primary canvas, ensuring the brighter colors vibrate with energy.

## Typography

Typography in this design system is built for speed. **Lexend** is utilized for its athletic, wide stance and high readability; all headlines must be set in **Heavy (900) weights with a forced 15-degree italic slant** to simulate forward motion.

**Space Grotesk** provides a technical, futuristic contrast for body copy and labels, maintaining the mechanical "engineering" feel of the theme. Large headers should utilize tight letter spacing to create a compact, impact-heavy visual block.

## Layout & Spacing

The layout follows a **Fixed Grid** model reminiscent of a race program or technical manual. It uses a rigorous 8px rhythm to ensure all elements feel structural and engineered. 

Visual breaks are created using **racing stripes** (double lines) that run horizontally or diagonally across sections. Content blocks should be angled—using CSS transforms (skewY: -2deg)—to break the traditional horizontal plane and add to the "unstable" energy of a high-speed turn.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Hard Shadows**. Instead of soft ambient shadows, this design system uses "Drop Shadows" with 100% opacity, offset by 4px or 8px in Racing Orange or Chrome Silver to create a "sticker" or "decal" effect.

Surfaces use brushed metal textures and subtle diagonal carbon fiber patterns to create tactile depth. Borders are thick (2px - 4px) and often utilize a silver-to-white gradient to simulate a chrome finish.

## Shapes

The shape language is primarily **Sharp (0)**. Hard angles represent the precision of automotive parts. Where rounding is necessary for ergonomics, it should be limited to "chamfered" corners (clipped at 45 degrees) rather than radii.

Container backgrounds should frequently feature "clipped" corners or "speed-cut" edges where one corner is aggressively slanted to suggest an aerodynamic profile.

## Components

- **Buttons:** Rectangular with zero radius. Primary buttons are Racing Orange with a "Tire Track" pattern overlay at 10% opacity. They use a hard-offset Chrome shadow that shifts position on hover to simulate a "click-down" mechanical movement.
- **Cards:** Heavy Asphalt Black backgrounds with a 4px Deep Blue top-border. Bottom-right corners feature a "Speed Stripe" accent.
- **Inputs:** Dark grey backgrounds with a bottom-only 2px border in Racing Orange. When focused, the border glows with a "heat" effect.
- **Chips:** Styled as "Racing Numbers" or "Sponsor Decals." Use secondary colors (Blue/Silver) with bold, slanted white text.
- **Progress Bars:** Designed to look like Tachometers or Speedometers, filling from Racing Orange to a flashing Red at 100%.
- **Dividers:** Use a "Checkered Flag" pattern (alternating Black and White squares) or a thick "Tire Tread" vector line.