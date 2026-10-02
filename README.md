# Vue 3 Student Dashboard Activity

A simple classroom activity for students who already know:

- Vue 3
- Views
- Components
- Vue Router

The project uses the **Vue 3 Options API**.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Project Structure

```text
src/
├── components/
│   ├── DashboardCard.vue
│   ├── StudentCard.vue
│   └── StudentInfo.vue
├── data/
│   └── students.js
├── views/
│   ├── AboutView.vue
│   ├── DashboardView.vue
│   ├── StudentDetailView.vue
│   └── StudentsView.vue
├── App.vue
├── main.js
└── style.css
```

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

---

# Student Activity

## Part 1 — Explore

Run the project and identify:

- Which files are views?
- Which files are components?
- Where are the routes configured?
- Where is the student data stored?
- How does `StudentCard` receive student information?

Do not change the code yet.

## Part 2 — Student List

Modify the Students page to display all students.

Requirements:

- Use `v-for`.
- Provide a unique `:key`.
- Display the student's name, course, and year.
- Use `StudentCard` instead of writing the card markup directly in the view.

## Part 3 — Student Details

Click **View Profile**.

The application should navigate to:

```text
/students/1
/students/2
/students/3
```

The details page should display the correct student based on the route parameter.

Example:

```text
/students/2

Maria Santos
Information Technology
Year 1
maria@example.com
```

## Part 4 — Favorite Student

The Favorite button should toggle between:

```text
☆ Favorite
```

and:

```text
★ Favorite
```

Practice:

- `@click`
- methods
- object properties
- conditional rendering

## Part 5 — Choose 1 Challenge

### Challenge A — Search

Add a search input:

```text
Search students...
```

Typing `Maria` should only show Maria.

### Challenge B — Course Filter

Add a dropdown:

```text
All Courses
Computer Engineering
Computer Science
Information Technology
```

Only students from the selected course should be displayed.

### Challenge C — Favorite Filter

Add:

```text
All
Favorites
```

When Favorites is selected, display only favorite students.

### Challenge D — Attendance

Add a button to toggle:

```text
Present
Absent
```

Update the dashboard count automatically.

---

# Suggested Grading

| Criteria | Points |
|---|---:|
| Routing works | 20 |
| Views are properly organized | 15 |
| Reusable components | 20 |
| Props / component communication | 15 |
| List rendering | 10 |
| Route parameter / details page | 10 |
| Challenge feature | 10 |
| **Total** | **100** |

## Instructor Note

The starter project intentionally includes the basic implementation so you can use it in two ways:

### Option 1 — Guided Activity

Let students inspect the existing project and modify it.

### Option 2 — Assessment

Remove or comment out selected sections and ask students to implement them.

A good assessment progression is:

1. Create the routes.
2. Create the views.
3. Create `StudentCard`.
4. Pass the student using props.
5. Implement the details route.
6. Add one challenge.

Avoid introducing APIs or a backend for this exercise. The goal is to reinforce Vue fundamentals first.
