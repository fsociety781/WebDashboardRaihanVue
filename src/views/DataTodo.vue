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
                    <h4 class="font-weight-bolder">Create New Data</h4>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="submitData">
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
                                <div class="text-center">
                        <argon-button
                          class="mt-4"
                          variant="gradient"
                          color="success"
                          fullWidth
                          size="lg"
                          type="submit"
                          >Submit Data</argon-button
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
  
  <script>
  import { mapActions } from "pinia";
  import { d$todo } from "@/store/todo";
  import ArgonInput from "@/components/ArgonInput.vue";
  import ArgonSwitch from "@/components/ArgonSwitch.vue";
  import ArgonButton from "@/components/ArgonButton.vue";
  const body = document.getElementsByTagName("body")[0];
  
  export default {
    name: "datatodo",
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
      },
    }),
    methods: {
    ...mapActions(d$todo, ["a$add"]),
    async submitData() {
      try {
        await this.a$add({ ...this.input });
        this.$router.push({ name: "Dashboard" });
      } 
      catch (error) {
        console.log(error);
      }
     }
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
  