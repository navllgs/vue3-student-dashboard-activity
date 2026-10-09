<template>
  <section>
    <div class="page-heading">
      <div>
        <p class="eyebrow">Student Directory</p>
        <h2>Manage Students</h2>
        <p>Add, edit, and remove students. Changes sync in real time.</p>
      </div>
    </div>

    <p v-if="error" class="notice error-notice" role="alert">{{ error }}</p>
    <p v-if="loading" class="notice">Loading students...</p>

    <form class="student-form" @submit.prevent="saveStudent">
      <h3>{{ editingId ? "Edit Student" : "Add Student" }}</h3>

      <label>
        Name
        <input v-model.trim="form.name" type="text" required />
      </label>

      <label>
        Course
        <input v-model.trim="form.course" type="text" required />
      </label>

      <label>
        Year
        <input v-model.number="form.year" type="number" min="1" required />
      </label>

      <label>
        Email
        <input v-model.trim="form.email" type="email" required />
      </label>

      <div class="form-checkboxes">
        <label>
          <input v-model="form.favorite" type="checkbox" />
          Favorite
        </label>
        <label>
          <input v-model="form.present" type="checkbox" />
          Present today
        </label>
      </div>

      <div class="form-actions">
        <button class="button" type="submit" :disabled="saving">
          {{
            saving ? "Saving..." : editingId ? "Save Changes" : "Add Student"
          }}
        </button>
        <button
          v-if="editingId"
          class="button secondary"
          type="button"
          :disabled="saving"
          @click="cancelEdit"
        >
          Cancel
        </button>
      </div>
    </form>

    <div class="student-list">
      <article
        v-for="student in students"
        :key="student.id"
        class="student-card"
      >
        <div>
          <h3>{{ student.name }}</h3>
          <p>{{ student.course }}</p>
          <small>Year {{ student.year }} · {{ student.email }}</small>
        </div>
        <div class="student-actions">
          <button
            class="favorite-button"
            type="button"
            @click="startEdit(student)"
          >
            Edit
          </button>
          <button
            class="button danger"
            type="button"
            :disabled="deletingId === student.id"
            @click="removeStudent(student)"
          >
            {{ deletingId === student.id ? "Deleting..." : "Delete" }}
          </button>
        </div>
      </article>
    </div>

    <div v-if="!loading && students.length === 0" class="empty-state">
      <h3>No students yet</h3>
      <p>Add a student using the form above.</p>
    </div>
  </section>
</template>

<script>
import {
  createData,
  deleteData,
  getData,
  updateData,
} from "../firebase/firebase-helper.js";

const STUDENTS_PATH = "students";

function emptyForm() {
  return {
    name: "",
    course: "",
    year: 1,
    email: "",
    favorite: false,
    present: false,
  };
}

export default {
  name: "ManageStudentsView",

  data() {
    return {
      students: [],
      form: emptyForm(),
      editingId: null,
      deletingId: null,
      loading: true,
      saving: false,
      error: "",
    };
  },

  mounted() {
    this.loadStudents();
  },

  methods: {
    async loadStudents() {
      this.loading = true;
      this.error = "";

      try {
        this.students = await getData(STUDENTS_PATH);
      } catch (error) {
        this.error = error.message || "Unable to load students.";
      } finally {
        this.loading = false;
      }
    },

    startEdit(student) {
      this.editingId = student.id;
      this.form = {
        name: student.name,
        course: student.course,
        year: student.year,
        email: student.email,
        favorite: Boolean(student.favorite),
        present: Boolean(student.present),
      };
      this.error = "";
    },

    cancelEdit() {
      this.editingId = null;
      this.form = emptyForm();
      this.error = "";
    },

    async saveStudent() {
      this.saving = true;
      this.error = "";

      try {
        const student = { ...this.form };

        if (this.editingId) {
          await updateData(STUDENTS_PATH, this.editingId, student);
        } else {
          await createData(STUDENTS_PATH, student);
        }

        this.cancelEdit();
        await this.loadStudents();
      } catch (error) {
        this.error = error.message || "Unable to save the student.";
      } finally {
        this.saving = false;
      }
    },

    async removeStudent(student) {
      if (!window.confirm(`Delete ${student.name}?`)) {
        return;
      }

      this.deletingId = student.id;
      this.error = "";

      try {
        await deleteData(STUDENTS_PATH, student.id);

        if (this.editingId === student.id) {
          this.cancelEdit();
        }

        await this.loadStudents();
      } catch (error) {
        this.error = error.message || "Unable to delete the student.";
      } finally {
        this.deletingId = null;
      }
    },
  },
};
</script>
