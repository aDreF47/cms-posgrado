# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a MERN-based Content Management System (CMS) for UNMSM's Postgraduate Faculty of Education. The project is currently frontend-only with a mock API implementation, designed to allow seamless transition to a real backend later.

**Key Design Philosophy**: The system uses an API abstraction layer that switches between mock and real implementations via environment variables, allowing development and testing without backend dependencies.

## Commands

### Development
```bash
cd frontend
npm run dev          # Start development server with Vite
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Environment Configuration
The project uses environment variables to control API behavior:
- `VITE_USE_MOCK_API=true` - Use mock API (current default)
- `VITE_USE_MOCK_API=false` - Use real backend API
- `VITE_API_URL` - Backend API URL when using real API
- `VITE_STUDENT_CODE` - Student access code for mock authentication

## Architecture Overview

### API Abstraction Layer
**Location**: `frontend/src/services/`

The core architectural pattern is the API abstraction:
- `api.js` - Main entry point that decides which implementation to use
- `mockApi.js` - Complete mock implementation with simulated network delays
- `realApi.js` - Real backend implementation (skeleton, for future use)

This pattern allows switching between mock and real APIs by changing a single environment variable.

### State Management
**Authentication**: Context-based with `AuthContext.jsx` using useReducer
- Supports student authentication via access codes
- Session persistence in localStorage
- Role-based permissions system ready for admin functionality

**Content**: Context pattern in `ContentContext.jsx` for content management

### Component Structure
```
components/
├── auth/           # Authentication guards (ProtectedRoute, PublicRoute)
├── layout/         # Layout components (Header, Footer, Layout wrapper)
├── student/        # Student-specific components (Hero, ProgramCarousel)
├── admin/          # Admin components (ready for future admin features)
├── content/        # Content management components
├── modals/         # Modal components
└── ui/             # UI utilities (ToasterProvider)
```

### Routing
Uses React Router v7 with:
- Protected routes requiring authentication
- Public routes (redirects authenticated users)
- Nested layout system
- Default redirects to login

### Data Layer
**Mock Database**: `frontend/src/data/mockData.js`
- Complete mock database with users, content, sessions
- Simulates backend data structure
- Easily replaceable when real backend is integrated

## Technology Stack

### Frontend
- **React 19.1.0** with modern hooks patterns
- **Vite 7.0.4** for build tooling and dev server
- **React Router DOM 7.7.0** for routing
- **TailwindCSS 4.1.11** for styling (with Vite plugin)
- **React Hook Form 7.60.0** for form management
- **React Hot Toast 2.5.2** for notifications
- **React Icons 5.5.0** for icon components
- **Axios 1.10.0** for HTTP requests (in real API)

### Development Tools
- **ESLint 9.30.1** with React-specific rules
- **TypeScript definitions** for React
- **Autoprefixer & PostCSS** for CSS processing

### Deployment
- **Vercel** configured with SPA redirects in `vercel.json`

## Key Files and Patterns

### Authentication Flow
1. `StudentLoginPage.jsx` - Login form with access code input
2. `AuthContext.jsx` - Manages authentication state and API calls
3. `ProtectedRoute.jsx` / `PublicRoute.jsx` - Route guards
4. Mock authentication uses predefined access code: "POSGRADO2025"

### Content Management
- Flexible block-based content system
- Content sections: inicio, tramites, tarifarios
- Support for text, images, lists, tables
- Ready for WYSIWYG editing (components exist but need integration)

### Styling Approach
- TailwindCSS with utility-first approach
- Responsive design patterns throughout
- Custom CSS in `styles/` for complex components
- Consistent color scheme based on university branding

## Development Workflow

### Adding New Features
1. Determine if it's student-facing or admin-facing
2. Add to appropriate component directory
3. Update routing in `App.jsx` if needed
4. Add to mock API if backend interaction needed
5. Use existing patterns for state management and styling

### API Integration
When ready to connect real backend:
1. Implement endpoints in `realApi.js`
2. Change `VITE_USE_MOCK_API=false` in `.env`
3. Set `VITE_API_URL` to backend URL
4. No frontend code changes needed due to abstraction layer

### Authentication System
- Student login: Access code only (no user accounts needed)
- Admin system ready but commented out
- Session management with automatic verification on app load
- Logout with proper cleanup

## Important Notes

- The project is currently frontend-only with sophisticated mocking
- All backend functionality is simulated with realistic delays and error handling
- The API abstraction layer ensures zero refactoring when backend is added
- Component architecture follows atomic design principles
- All forms use React Hook Form for consistent validation and handling
- Error handling and loading states are implemented throughout
- The system is designed for institutional use with university branding and workflows