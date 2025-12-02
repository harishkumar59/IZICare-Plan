# Image Placement Guide

Please add your images to the following locations:

## Image Files Location
Place all your images in the `src/assets/images/` directory (you'll need to create this folder).

## Images Needed:
<!--  -->
### 1. Hero Section (Header)
**Location in code:** `src/App.jsx` - Lines with `camera-placeholder` class

- **Hero Camera Image 1** (camera-1): 
  - Place at: `src/assets/images/hero-camera-1.jpg` (or .png)
  - Replace the placeholder div with: `<img src="/src/assets/images/hero-camera-1.jpg" alt="Action Camera" className="camera-1" />`

- **Hero Camera Image 2** (camera-2):
  - Place at: `src/assets/images/hero-camera-2.jpg` (or .png)
  - Replace the placeholder div with: `<img src="/src/assets/images/hero-camera-2.jpg" alt="Action Camera" className="camera-2" />`

### 2. Protection Section Images
**Location in code:** `src/App.jsx` - `protection-image-placeholder` divs (4 images needed)

- **Image 1 - Broken Camera Lens:**
  - Place at: `src/assets/images/protection-physical-damage.jpg`
  - Replace placeholder with: `<img src="/src/assets/images/protection-physical-damage.jpg" alt="Physical Damage" />`

- **Image 2 - Spilled Drink Damage:**
  - Place at: `src/assets/images/protection-liquid-damage.jpg`
  - Replace placeholder with: `<img src="/src/assets/images/protection-liquid-damage.jpg" alt="Liquid Damage" />`

- **Image 3 - Impact Damage Camera:**
  - Place at: `src/assets/images/protection-impact-damage.jpg`
  - Replace placeholder with: `<img src="/src/assets/images/protection-impact-damage.jpg" alt="Impact Damage" />`

- **Image 4 - Smartwatch Damage:**
  - Place at: `src/assets/images/protection-wearable-damage.jpg`
  - Replace placeholder with: `<img src="/src/assets/images/protection-wearable-damage.jpg" alt="Wearable Damage" />`

### 3. CTA Section Image
**Location in code:** `src/App.jsx` - `cta-image-placeholder` div

- **Large Action Camera Image:**
  - Place at: `src/assets/images/cta-camera.jpg`
  - Replace placeholder with: `<img src="/src/assets/images/cta-camera.jpg" alt="Action Camera Close-up" />`

---

## Quick Steps:
1. Create folder: `src/assets/images/`
2. Add all your images to that folder
3. Replace the placeholder divs in `src/App.jsx` with `<img>` tags using the paths above
4. The images will automatically be styled by the existing CSS

## Note:
If you're using Vite, you can also import images directly:
```jsx
import heroCamera1 from './assets/images/hero-camera-1.jpg'
// Then use: <img src={heroCamera1} alt="..." />
```

