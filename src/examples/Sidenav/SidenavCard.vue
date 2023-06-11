<template>
  <div
    v-show="this.$store.state.layout !== 'landing'"
    class="card card-plain shadow-none"
    id="sidenavCard"
  >
    <form @submit.prevent="logout">
      <button type="submit" class="btn btn-danger btn-sm w-100">
        <i class="fa fa-user me-sm-2"></i>
        <span class="d-sm-inline d-none">Sign Out</span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { d$auth } from "@/store/auth";
import { logout } from "@/service/auth";

export default {
  name: "sidenav-card",
  methods: {
    ...mapActions(d$auth, ["a$setUser"]),
    async logout() {
      try {
        // await this.a$logout();
        await logout();
        await this.a$setUser();
        this.$router.push({ name: "Signin" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

