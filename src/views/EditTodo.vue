<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            >
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Edit Data</h4>
                </div>
                <div class="card-body">
                  <form @submit.prevent="updateDataTodo">
                    <div class="mb-3">
                      <argon-input
                        v-model="input.title"
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                        size="lg"
                      />
                    </div>
                    <div class="mb-3">
                      <argon-input
                        v-model="input.description"
                        type="description"
                        placeholder="description"
                        name="description"
                        size="lg"
                      />
                    </div>
                    <div class="mb-3">
                      <argon-input
                        v-model="input.category"
                        type="category"
                        placeholder="category"
                        name="category"
                        size="lg"
                      />
                    </div>
                    <div>
                      <argon-switch
                        checked="{{input.completed}}"
                        type="category"
                        labelClass=""
                        placeholder="category"
                        name="Completed"
                        id="completed-input"
                        size="lg"
                        >Completed
                      </argon-switch>
                    </div>
                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                        type="submit"
                        >Edit Data</argon-button
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<!-- <script>
import TodoDataService from "../service/TodoDataService";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "edit-todo",
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  // data() {
  //   return {
  //     tutorials: [],
  //   };
  // },
  methods: {
    retrieveTutorials() {
      TodoDataService.getAll()
        .then((response) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    // this.retrieveTutorials();
  },
};
</script> -->

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import TodoDataService from "../service/TodoDataService";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "editTodo",
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  data: () => ({
    input: {
      title: "",
      description: "",
      category: "",
      completed: "",
    },
  }),
  methods: {
    getDataTodo() {
      TodoDataService.get(this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.input.title = response.data.title;
          this.input.description = response.data.description;
          this.input.category = response.data.category[0]?.name;
          this.input.completed = response.data.completed;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateDataTodo() {
      TodoDataService.update(this.$route.params.id, {
        ...this.input,
      })
        .then((response) => {
          console.log(this.input);
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getDataTodo();
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
