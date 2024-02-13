# Taobin Web Admin

## Overview

Taobin Admin is an administrative console designed to monitor overall sales, tickets, and uptime. Administrators can also manage machine information and configurations directly from this system, ensuring efficient operation and maintenance of the service infrastructure.

## Local Setup Instructions

To set up the Bin Admin project locally, follow these steps:

1. Install project dependencies by running:

```bash
npm install
```

2. Start the development server by executing:

```bash
npm run dev
```

3. Open a web browser and navigate to http://localhost:5173 or to the port specified by your local settings.

4. To generate mock data for development testing:

-   Navigate to the src/data/ directory.
-   Run the following command in your terminal:

```bash
node dataGenerator.js
```

-   This script generates mock data in CSV format, which can be uploaded to the database (currently configured for Supabase).

## Deployment Instructions

To deploy the Bin Admin application, follow these steps:

1. Build the project for production by running:

```bash
npm run build
```

## Note

-   Pre-requisite: Ensure your environment is properly configured for Node.js development, and that you have access to a Supabase project for database interactions.

-   Non-Editable Fields: Some fields in the web admin console cannot be manually edited. They will be updated by an external system to maintain data accuracy.

-   Authentication: Currently, Bin Admin lacks built-in authentication. Please use the console securely. Authentication features are in development for future releases.

-   Mock Data: Mock data is manually generated to help simulate system activity and assist in admin review.
