# Vue 3 Student Dashboard

A Vue 3 student dashboard with a Firebase Realtime Database-backed student directory. The project uses the **Vue 3 Options API**.

## Getting Started

```bash
npm install
```

Create a Firebase project, register a web app, and enable **Realtime Database**. Copy `.env.example` to `.env` and fill in the values from your Firebase web app configuration and Realtime Database URL.

```powershell
Copy-Item .env.example .env
```

Then start the app:

```bash
npm run dev
```

Then open the local URL shown by Vite.

The app reads and writes student records under the `students` path. Use **Manage** in the navigation to create, edit, and delete students. Dashboard counts, student cards, and student details load from the database when each page opens.

Firebase web configuration values are included in the client bundle and are not database access controls. Configure Realtime Database rules for your app; do not deploy a database with public read/write rules. For a real deployment, add Firebase Authentication and restrict database access to authorized users.

## Project Structure

```text
src/
├── components/
│   ├── DashboardCard.vue
│   ├── StudentCard.vue
│   └── StudentInfo.vue
├── firebase/
│   ├── firebase-helper.js
│   └── firebase.js
├── routes/
│   └── index.js
├── views/
│   ├── AboutView.vue
│   ├── DashboardView.vue
│   ├── ManageStudentsView.vue
│   ├── StudentDetailView.vue
│   └── StudentsView.vue
├── App.vue
├── main.js
└── style.css
```

`firebase/firebase.js` initializes Firebase from the `.env` values. `firebase/firebase-helper.js` provides generic `getData(path)`, `createData(path, data)`, `updateData(path, id, changes)`, and `deleteData(path, id)` functions for Realtime Database collections.

## Learning Objectives

By the end of the activity, students should be able to:

1. Create and organize Vue views.
2. Create reusable components.
3. Configure Vue Router routes.
4. Use route parameters.
5. Pass data through props.
6. Handle click events.
7. Render lists with `v-for`.
8. Conditionally render with `v-if`.
9. Use computed properties.
10. Decide when a section of a view should become a component.
11. Perform CRUD operations with Firebase Realtime Database.

---

The Realtime Database stores students as a map keyed by Firebase-generated IDs. Each student has `name`, `course`, `year`, `email`, `favorite`, and `present` fields.
