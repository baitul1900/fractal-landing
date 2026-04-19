# Dynamic Service Pages System - Documentation

## Overview
A scalable, slug-based service pages system where each service (UI/UX, Development, etc.) shares the same component layout but displays different content based on the URL slug.

## Architecture

### URL Structure
```
/services/ui-ux          → UI/UX Design service page
/services/development    → Development service page
/services/[any-slug]     → Any enabled service
```

### Data Flow
```
URL Slug → Service Registry Check → Load JSON → ServiceLayout → Components
```

## File Structure

```
app/
├── services/
│   └── [slug]/
│       └── page.jsx              # Dynamic route handler

components/
├── layouts/
│   └── ServiceLayout.jsx         # Reusable service layout
└── service-components/           # Individual service components

data/
├── services/
│   ├── index.json               # Service registry
│   ├── ui-ux.json              # UI/UX service data
│   ├── development.json        # Development service data
│   └── [service-name].json     # Future services
└── README.md
```

## How It Works

### 1. Service Registry (`data/services/index.json`)
Defines which services are available and their metadata:

```json
{
  "ui-ux": {
    "title": "UI/UX Design Services",
    "slug": "ui-ux",
    "enabled": true,
    "metaTitle": "...",
    "metaDescription": "..."
  }
}
```

### 2. Service Data Files
Each service has its own JSON file with the same structure:
- `serviceHero` - Hero section data
- `serviceFeature` - Feature section data
- `serviceProbSection` - Problem section data
- And all other component data...

### 3. Dynamic Route (`app/services/[slug]/page.jsx`)
- Receives slug from URL params
- Validates slug against service registry
- Loads corresponding JSON data
- Passes data to ServiceLayout
- Returns 404 for invalid slugs

### 4. ServiceLayout Component
- Receives service data as props
- Imports all necessary images
- Renders all service components
- Handles conditional rendering

## Adding a New Service

### Step 1: Create Service Data
Create a new JSON file in `data/services/`:

```bash
cp data/services/ui-ux.json data/services/marketing.json
```

Then edit `marketing.json` with your service-specific content.

### Step 2: Register the Service
Add entry to `data/services/index.json`:

```json
{
  "marketing": {
    "title": "Marketing Services",
    "slug": "marketing",
    "enabled": true,
    "metaTitle": "Marketing Services | IdeatedLab",
    "metaDescription": "..."
  }
}
```

### Step 3: Done!
The service is now available at `/services/marketing`

No code changes needed! The system automatically:
- ✅ Generates the route at build time
- ✅ Loads the correct data
- ✅ Renders with the shared layout
- ✅ Handles SEO metadata

## Testing

### Test UI/UX Service
```
http://localhost:3000/services/ui-ux
```

### Test Development Service
```
http://localhost:3000/services/development
```

### Test Invalid Slug (Should show 404)
```
http://localhost:3000/services/invalid-service
```

## Features

✅ **Dynamic Routing** - Slug-based URLs  
✅ **Centralized Data** - JSON-based content management  
✅ **Reusable Layout** - One component for all services  
✅ **SEO Optimized** - Metadata generation per service  
✅ **Static Generation** - Build-time optimization  
✅ **Type Safe** - Consistent data structure  
✅ **Scalable** - Add services without code changes  
✅ **404 Handling** - Invalid slugs handled gracefully

## Component Visibility

You can control which components show on each service page by modifying the `ServiceLayout` component options:

```javascript
<ServiceLayout 
  serviceData={data} 
  options={{
    showTestimonial: true,
    showFaq: true,
    showLeadCollection: true,
    showFooter: true
  }}
/>
```

## Performance

- **Static Generation**: All service pages are pre-rendered at build time
- **Optimized Images**: Next.js Image component handles optimization
- **Code Splitting**: Each route loads only what it needs
- **Fast Navigation**: Client-side routing for instant page transitions

## Maintenance

### Updating Content
Edit the corresponding JSON file in `data/services/`

### Disabling a Service
Set `enabled: false` in `index.json`

### Adding Components
Add new component sections to the JSON structure and update `ServiceLayout.jsx`

## Migration Notes

- The old `component-test` page now uses the new system
- Original `servicePageData.json` moved to `data/services/ui-ux.json`
- All image imports centralized in `ServiceLayout.jsx`
