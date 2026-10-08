# AVANI Assets & Configuration Guide

To customize the website with your official assets and exact business contact:

### 1. Store Images & Logo
Place your images in this `public/assets/` folder:
- `avani-logo.png` or `avani-logo.svg` -> AVANI brand logo
- `store-exterior.jpg` -> Physical showroom outside view
- `store-interior.jpg` -> Showroom floors & aisles
- `staff-team.jpg` -> Staff / management team photo
- `sarees.jpg`, `western.jpg`, `ethnic.jpg`, `dresses.jpg`, `maternity.jpg`, `materials.jpg` -> Category collections

Then update the centralized paths in `src/data/images.ts`.

### 2. Address & Phone Number
Edit `src/data/storeInfo.ts`:
- Replace `[Complete address will be provided]` with the final street address.
- Replace `[Phone number will be provided]` with the real telephone number.
- Replace `tel:+91XXXXXXXXXX` with the real callable number (e.g. `tel:+919876543210`).
