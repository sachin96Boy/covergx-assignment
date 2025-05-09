# 📝 Todo App

A full-stack Todo application built with **NestJS** for the backend and **React (Vite)** for the frontend. It uses **MySQL** as the relational database and **Prisma ORM** for seamless database access and modeling.

---

## 📦 Tech Stack

### 🔧 Backend
- [NestJS](https://nestjs.com/) – Progressive Node.js framework
- [Prisma ORM](https://www.prisma.io/) – Type-safe database client
- [MySQL](https://www.mysql.com/) – Relational database

### 🎨 Frontend
- [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/)) – Lightning-fast frontend tooling
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript

---

## 🚀 Features

- ✅ Add, update, delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Filter todos (All, Active, Completed)
- ✅ Responsive UI with real-time updates
- ✅ Full CRUD API with NestJS + Prisma
- ✅ Clean and modular code structure

---

## 📁 Project Structure

```
todo-app/
├── todoapp_backend/
│   ├── apps/
│   │   ├── todoapp/
|   ├── libs/
│   │   ├── common/
│   ├── prisma/
│   ├── .env
│   └── package.json
├── todoapp_frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── api-utils/
│   │   ├── pages/
│   │   └── main.tsx
│   ├── .env
│   ├── vite.config.ts
│   └── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sachin96Boy/covergx-assignment.git
cd covergx-assignment
```

---

### 2️⃣ Backend Setup

```bash
cd todoapp_backend
pnpm install
```

#### Create `.env` file

```env
DATABASE_URL="mysql://user:password@localhost:3306/tododb"
```

#### Initialize Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```

#### Start NestJS server

```bash
pnpm run start:dev
```

API will run at `http://localhost:3000`

---

### 3️⃣ Frontend Setup

```bash
cd ../todoapp_frontend
pnpm install
pnpm run dev
```

App will be available at `http://localhost:5173`

---

## 📬 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/todos`         | Get all todos           |
| POST   | `/todos`         | Create a new todo       |
| PATCH  | `/todos/:id`     | Update a todo           |
| DELETE | `/todos/:id`     | Delete a todo           |

---

## 🧪 Testing (Optional)

### Backend:

```bash
cd backend
npm run test
```

### Frontend:

```bash
cd frontend
# Add your preferred test tool (e.g. Vitest, Jest) and run it here
```

---

### Docker Setup (updating)

```bash
docker-compose up -d --build

```

update: I encountered some issues with the docker setup, so I am currently working on it. I've attached a local running setup for your reference.

```

## 📌 Notes

- Ensure MySQL is running and the database (`tododb`) is created before running migrations.
- You can enhance this app with features like user authentication, input validation, optimistic updates, etc.

---

## 📄 License

MIT © [sachin96boy]
