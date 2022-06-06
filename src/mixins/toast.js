export default {
  methods: {
    // createToast(message, title, variant) {
    //   this.$bvToast.toast(message, {
    //     title,
    //     variant,
    //     solid: true,
    //     autoHideDelay: 3000,
    //   });
    // }


   toast(msg,variant){ 
        this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: false,
      }).fire({
        icon: variant,
        title: msg
      })
  },
  fetched(msg,variant){ 
    this.$swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
  }).fire({
    icon: variant,
    title: msg
  })
}
}
};