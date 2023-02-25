import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const userData = ref("");
  const isLogin = ref(false);

  async function fetchUser() {
    const { data } = await useFetch(
      "https://powerhuman-backend.test/api/user",
      {
        // mode: "no-cors",
        method: "GET",
        headers: {
          Authorization:
            localStorage.getItem("token_type") +
            " " +
            localStorage.getItem("access_token"),
        },
      }
    );
    // console.log(data.value == "");
    console.log(data);

    if (data.value !== null) {
      console.log("hola");
      userData.value = data.value.result;
      isLogin.value = true;
    } else {
      console.log("halo");
      userData.value = "";
      isLogin.value = false;
    }
  }

  return { userData, isLogin, fetchUser };
});

// export const useUserStore = defineStore({
//   id: "user",
//   state: () => ({
//     user: false,
//   }),
//   getters: {
//     isLoggedIn: (state) => state.user !== false,
//     getUser: (state) => state.user,
//   },
//   actions: {
//     async fetchUser() {
//       try {
//         const { data } = await useFetch(
//           "https://powerhuman-backend.test/api/user",
//           {
//             method: "GET",
//             headers: {
//               Authorization:
//                 localStorage.getItem("token_type") +
//                 " " +
//                 localStorage.getItem("access_token"),
//             },
//           }
//         );
//         this.user = data.value.result;
//       } catch (error) {
//         this.user = false;
//       }
//     },
//   },
// });
