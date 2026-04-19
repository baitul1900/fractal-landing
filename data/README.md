# Service Page Data Management

## Overview
This directory contains centralized data for all service page components. The data is stored in JSON format and imported into the component-test page for easy management and updates.

## File Structure

```
data/
├── servicePageData.json  # Centralized data for all service components
└── README.md            # This file
```

## Data Flow

```
servicePageData.json → component-test/page.jsx → Individual Components
```

### How It Works

1. **JSON File** (`servicePageData.json`): Contains all text content, configurations, and data for service components
2. **Component Test Page** (`app/component-test/page.jsx`): Imports the JSON data and image assets, then passes them as props to components
3. **Individual Components**: Receive data via props and render accordingly

## Components Included

The JSON file contains data for the following components:

- ✅ ServiceHero
- ✅ ServiceFeature
- ✅ ServiceProbSection
- ✅ ServiceWeOffer
- ✅ ServiceOurExpertise
- ✅ ServiceProcess
- ✅ OfferSection
- ✅ ServiceStruggle
- ✅ ServiceTeam
- ✅ ServiceDemand
- ✅ ServicePlan
- ✅ SupportCollaboration
- ✅ WhyPartnerWithUs

## Usage Example

### Updating Content

To update any component's content, simply edit the `servicePageData.json` file:

```json
{
  "serviceHero": {
    "badgeText": "Your new badge text here",
    "headerText": {
      "fullText": "Your new header",
      "highlight": "new header"
    }
    // ... other properties
  }
}
```

### Image Handling

Images are imported separately in the component-test page and merged with JSON data:

```javascript
// Import images
import iconOne from "../../public/images/service-ux/fluent.webp";

// Merge with JSON data
<ServiceHero 
  featureOne={{ ...servicePageData.serviceHero.featureOne, icon: iconOne }}
/>
```

## Benefits

1. **Single Source of Truth**: All content in one JSON file
2. **Easy Updates**: Change content without touching component code
3. **Type Safety**: JSON structure matches component prop types
4. **Maintainability**: Clear separation of data and presentation
5. **Reusability**: Same data structure can be used for multiple pages

## Future Improvements

- Add TypeScript types for the JSON structure
- Create a CMS integration for non-technical content updates
- Add validation schema for the JSON data
- Create multiple JSON files for different service pages
