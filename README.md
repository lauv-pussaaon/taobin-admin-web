# Taobin Web Admin

## Overview

Taobin Admin is an administrative console designed to monitor overall sales, tickets, and uptime. Administrators can also manage machine information and configurations directly from this system, ensuring efficient operation and maintenance of the service infrastructure.

![Dashboard](https://private-user-images.githubusercontent.com/1755945/304534669-dbd4730a-5de8-42c9-90e1-e5fdd7ea7f6d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc4NTUyNDAsIm5iZiI6MTcwNzg1NDk0MCwicGF0aCI6Ii8xNzU1OTQ1LzMwNDUzNDY2OS1kYmQ0NzMwYS01ZGU4LTQyYzktOTBlMS1lNWZkZDdlYTdmNmQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDIxMyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDAyMTNUMjAwOTAwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZWE4MTAxM2U1MjdiZDQ2MWE4MTE3YzQ5MjAxMzk5MjhmZWNmN2FmZjZlMDQ4NzEzMmMyNjcxMjBjZDUxMjAxZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.FwPcfOhnRjLQd4hjQ1UMu83wUzOilbxwxTqCC307ewo)
![Machines](https://private-user-images.githubusercontent.com/1755945/304534690-a190accd-8f02-497e-bad4-6cbf6a25bf07.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc4NTUyNDAsIm5iZiI6MTcwNzg1NDk0MCwicGF0aCI6Ii8xNzU1OTQ1LzMwNDUzNDY5MC1hMTkwYWNjZC04ZjAyLTQ5N2UtYmFkNC02Y2JmNmEyNWJmMDcucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDIxMyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDAyMTNUMjAwOTAwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZjNhYjJhMzlmNzQyZDRkMjM5NDA4MzU3YTFjMzBkOGNhOWJhNmJkNTgzMmMyY2EzM2MyYTQ2NzQxM2Q4ZTk5MSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.0MvfbZqxoLN8ZghdgBn4QXT81Ne0aydArF7lJ37PTB4)
![Machine Configuration](https://private-user-images.githubusercontent.com/1755945/304534905-ce25b2ef-baa9-4cb7-84d8-4e2ee94251a0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc4NTUyNDAsIm5iZiI6MTcwNzg1NDk0MCwicGF0aCI6Ii8xNzU1OTQ1LzMwNDUzNDkwNS1jZTI1YjJlZi1iYWE5LTRjYjctODRkOC00ZTJlZTk0MjUxYTAucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDIxMyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDAyMTNUMjAwOTAwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZTc5Y2NiMmFkM2QwOThlNTA3OWU3ODk0NjE0ZDkzYzUyMzU1YTZkOWUxNDNkYzE4ZDAzZWVjNGFhNzUxYTI1MyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.ebKIQhIH-VctxC9GG2npkbR1ZJPUHpQhtb2nQx5Wi44)

## Live demo

[Link to demo](https://taobin-admin-lauv-test.netlify.app)

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
