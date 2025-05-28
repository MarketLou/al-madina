# Al Madina - Middle Eastern Restaurant & Market

A modern Nuxt.js application for Al Madina, a Middle Eastern restaurant and market, integrated with Medusa e-commerce backend for online ordering.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Medusa Integration

This project integrates with Medusa, a headless commerce engine, to provide e-commerce functionality.

### Features

- Product listing from Medusa backend
- Shopping cart functionality
- Checkout process
- Order management

### Configuration

The Medusa client is configured in `plugins/medusa.ts`. By default, it connects to a local Medusa server at `http://localhost:9000`. For production, set the `MEDUSA_BACKEND_URL` environment variable to your Medusa server URL.

### Development Workflow

You can start both the frontend and backend servers simultaneously using the root project's concurrently setup:

1. From the project root directory:
   ```bash
   npm run start:all
   ```

This will start both the Medusa backend (on port 9000) and the Nuxt frontend (on port 3000) in parallel.

Alternatively, you can start each server individually:

1. Start the Medusa backend server in the `/backend-medusa` directory:
   ```bash
   npm run dev
   ```

2. Start the Nuxt development server in the `/Al Madina` directory:
   ```bash
   npm run dev
   ```

3. Access the application at `http://localhost:3000`

The backend admin panel is available at `http://localhost:9000/app`

### Cart and Checkout Flow

The cart state is managed using Pinia in `stores/cart.ts`. The flow is:

1. Products are displayed on the menu page
2. Users can add items to cart
3. Cart page shows all items with quantity controls
4. Checkout creates an order in Medusa

### Deployment Considerations

When deploying to production:

1. Set `MEDUSA_BACKEND_URL` to your production Medusa server URL
2. Ensure CORS is properly configured in your Medusa server to allow requests from your Nuxt application domain

### Troubleshooting

If you encounter issues with the Medusa integration, check the following:

1. **Console Logs**: The application includes detailed logging for all Medusa API interactions. Check the browser console for error messages and API response structures.

2. **API Response Structure**: The integration is designed to handle the Medusa API response structure, which typically returns data in the format `{ cart: {...} }` or `{ products: [...] }`. If responses don't match this structure, errors will be logged.

3. **CORS Issues**: If you see CORS errors in the console, ensure your Medusa backend has the correct CORS configuration in the `.env` file:
   ```
   STORE_CORS=http://localhost:3000,http://localhost:3001
   ```

4. **Authentication**: Some Medusa endpoints may require authentication. Check if you need to include authentication headers in your requests.

5. **Network Requests**: Use the browser's network tab to inspect the actual API requests and responses between the Nuxt frontend and Medusa backend.

<!-- Last updated: May 28, 2025 10:21 AM -->
