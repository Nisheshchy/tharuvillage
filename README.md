# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## Project Overview

Tharu Village is a modern web application built with React and Vite, showcasing the cultural heritage and attractions of the Tharu community. It provides an engaging, responsive experience with smooth navigation and dynamic content.

## Tech Stack

- **React** – UI library for building components
- **Vite** – Fast development server and bundler
- **React Router** – Client‑side routing
- **ESLint** – Linting and code quality
- **PostCSS** – CSS processing
- **JavaScript (ES2023)** – Modern language features

## Features

- Interactive travel guide pages
- Detailed information about Tharu culture, cuisine, and landmarks
- Responsive design with modern UI aesthetics
- Client‑side routing using React Router
- Accessible components and SEO‑friendly markup

## Getting Started

```bash
npm install
npm run dev
```

Open your browser at `http://localhost:5173` to view the site.

## Project Structure

- `src/` – Main source directory
  - `pages/` – Page components (Home, About, Travel, Food, NotFound)
  - `components/` – Reusable UI components (Footer, Navbar, Card, etc.)
  - `assets/` – Images, icons, and static assets
- `public/` – Public assets served as‑is
- `dist/` – Build output after `npm run build`

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. Follow the existing code style and run ESLint before committing.

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tharu-village.git
cd tharu-village

# Install dependencies
npm install
```

## Usage

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser to explore the site.

## Screenshots

*(Add screenshots of the application here. Use markdown image syntax, e.g., `![Home Page](screenshots/home.png)`) *

## Contact

For questions or suggestions, please open an issue or contact the maintainer at [email@example.com](mailto:email@example.com).

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
