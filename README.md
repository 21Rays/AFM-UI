# AFM UI

A web interface for Apple Foundation Models, built with Bun, React, and Tailwind CSS 4.

> **Status: development in progress**

## Current status

- Responsive layout with a chat area and a side panel.
- Side panel with **Settings** and **Query** tabs.
- Port and address settings are saved in the browser's `localStorage` when you click **save**. Subsequent saves overwrite the previous values.
- The query area and chat submission UI are present; integration with Apple Foundation Models is not connected yet.

Settings are stored locally in the browser and are specific to the current site origin. They are not sent to a server or shared across devices.

## Requirements

- [Bun](https://bun.sh/) 1.4.3 or later for local development.
- [Docker](https://www.docker.com/) with Docker Compose to run the container.

## Local development

Install dependencies:

```bash
bun install
```

Start the development server with hot reload and Tailwind's watch process:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run the TypeScript type check:

```bash
bun run typecheck
```

Create an optimized production build in `dist/`:

```bash
bun run build
```

Start the Bun server in production mode:

```bash
bun start
```

## Docker container

Build the image and start the service:

```bash
docker compose up --build
```

The app is available at [http://localhost:3000](http://localhost:3000). To run the container in the background:

```bash
docker compose up --build -d
```

View the logs:

```bash
docker compose logs -f
```

Stop and remove the container:

```bash
docker compose down
```

The container uses Bun 1.4.3, installs dependencies from the lockfile, and starts the server in production mode.

## Tailwind CSS

Tailwind directives and custom styles are defined in `src/index.css`. Add utility classes directly to JSX markup. The compiled stylesheet is generated at `src/tailwind.generated.css`; do not edit it manually.

## Stack

- [Bun](https://bun.sh/) for the runtime, server, bundling, and dependency management.
- [React](https://react.dev/) for the UI.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
