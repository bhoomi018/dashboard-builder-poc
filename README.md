# Scalable Dashboard Builder

A full-stack, extensible dashboard engine built with React, Node.js, TypeScript, and Docker.

This project demonstrates modular architecture, dynamic widget rendering, heterogeneous data handling, and production-aware structuring.

---

## Features

- Dynamic Widget Registry (extensible chart system)
- Drag & Drop Dashboard Layout
- Independent Widget Rendering
- Multiple Data Structures (Categorical, Temporal, Hierarchical, Relational)
- Schema Validation using Zod
- Modular Backend Architecture
- Dockerized Deployment

---

## Architecture Overview

Frontend:
- React + TypeScript
- Feature-based folder structure
- Zustand for state management
- React Grid Layout for dashboard positioning

Backend:
- Node.js + Express
- Layered architecture (Routes → Controller → Service)
- Zod schema validation
- Mock data engine supporting heterogeneous data formats

The system is designed to allow adding new widget types without modifying core layout logic.

---

## Project Structure

```
dashboard-builder-poc/
  frontend/
  backend/
  docker-compose.yml
```

---

## Run With Docker

```bash
docker-compose up --build
```

Frontend: http://localhost:3000  
Backend: http://localhost:5000  

---

## Data Handling Strategy

- Strict schema validation at backend
- Independent widget-level error isolation
- Safe data transformation layer in frontend
- Layout persistence across reloads

---

## Scalability Considerations

- Extensible widget registry
- Modular backend design
- Containerized deployment
- Isolation of concerns for future microservice migration

---

## Author

Bhoomi Chauhan  
Full Stack Engineer
