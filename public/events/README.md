# Event Photos Folder

## How to Add Event Photos

1. **Save your event photos in this folder** (`public/events/`)

2. **Name your photos clearly**, for example:
   - `blood-donation-2024.jpg`
   - `tree-plantation-2024.jpg`
   - `youth-summit-2024.jpg`

3. **Update the Events page** (`src/pages/Events.jsx`) to use your photos:
   - Find the event you want to update in the `events` array
   - Change the `image` property to: `/events/your-photo-name.jpg`

## Example:

If you save a photo as `blood-donation-camp.jpg` in this folder, update the event like this:

```javascript
{
  id: 1,
  title: "Mega Blood Donation Camp 2024",
  date: "March 15, 2024",
  participants: "150+ Donors",
  image: "/events/blood-donation-camp.jpg",  // ← Change this line
  icon: Heart
}
```

## Supported Image Formats:
- JPG/JPEG
- PNG
- WebP
- SVG

## Recommended Image Size:
- Width: 800-1200px
- Height: 600-800px
- File size: Under 500KB for faster loading

## Current Events:
1. Mega Blood Donation Camp 2024
2. Community Unity Drive
3. Green Pune Initiative 2024
4. Youth Leadership Summit
5. Skill Development Workshop
6. Children's Joy Festival

---

**Note:** After adding photos, just tell me which photo file name you saved and which event number (1-6) it's for, and I'll update the code for you!
