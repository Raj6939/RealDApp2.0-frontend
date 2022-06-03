<template>
  <div>
    <h1>This is moderator</h1>
    <b-sidebar
      id="sidebar-right"
      :title="isPropEditing ? 'Moderator Approval' : ''"
      right
      shadow
      no-close-on-backdrop
      backdrop-variant="dark"
    >
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class="text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label"
            >Name :
          </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input
            disabled
            type="text"
            v-model="selected.name"
            id="title"
            class="form-control w-100"
            placeholder="Please enter property area"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class="text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label"
            >Email :
          </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input
            disabled
            type="text"
            v-model="selected.email"
            id="title"
            class="form-control w-100"
            placeholder="Please enter property number"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class="text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label"
            >Mobile :
          </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input
            disabled
            type="text"
            v-model="selected.mobile"
            id="title"
            class="form-control w-100"
            placeholder="Please enter property landmark"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class="text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label"
            >Adhar Number :
          </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input
            disabled
            type="text"
            v-model="selected.adharcardNo"
            id="title"
            class="form-control w-100"
            placeholder="Please enter property city"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class="text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label"
            >Approve<span style="color: red">*</span>:
          </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <b-form-checkbox
            v-model="selected.approved"
            name="check-button"
            switch
          >
          </b-form-checkbox>
        </div>
      </div>
      <button
        class="btn btn-primary mt-3 button-theme"
        type="button"
        @click="saveProperty"
      >
        Submit
      </button>
    </b-sidebar>

    <section style="margin-left: 10px">
      <div class="container-fluid">
        <div class="row" id="main">
          <div
            class="col-md-4 py-2"
            v-for="properties in allUsers"
            :key="properties._id"
          >
            <div class="card h-100">
              <div class="card-body d-flex flex-column align-items-center">
                <p class="card-title">Name: <span style="font-weight: bold">{{ properties.name }}</span></p>
                <p class="card-text" style="font-weight: bold">
                 Adhar Number: <span style="font-weight: bold">{{ properties.adharcardNo }}</span>
                </p>
                <p class="card-text" style="font-weight: bold">
                 Email: <span style="font-weight: bold">{{ properties.email }}</span>
                </p>
                <p class="card-text">Mobile: <span style="font-weight: bold">{{ properties.mobile }}</span></p>
                <div>
                  <b-badge
                    pill
                    variant="success"
                    v-if="properties.approved"
                    title="Approved by Government"
                    >Verified</b-badge
                  >
                  <b-badge
                    pill
                    variant="warning"
                    v-else
                    title="Not yet approved by Government"
                    >Pending</b-badge
                  >
                </div>
              </div>
              <div class="enquireBt" v-if="properties.approved">
                <button
                  v-on:click="addProductToCart(properties)"
                  class="btn btn-primary"
                  style="width: 200px"
                >
                  Deploy Property
                </button>
              </div>
              <div class="enquireBt" v-else>
                <button
                  class="btn btn-white"
                  style="width: 200px"
                  disabled
                ></button>
              </div>
              <div class="edit" v-if="properties.approved == false">
                <b-icon
                  icon="pencil-square"
                  font-scale="1.5"
                  v-on:click="editProp(properties)"
                  title="View profile to verify"
                ></b-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Moderator",
  data() {
    return {
      allUsers: [],
      isPropEditing: false,
      selected: {
        metamask_address: "",
        name: "",
        mobile: "",
        email: "",
        adharcardNo: "",
        approved: "",
      },
      accounts: [],
    };
  },
  async mounted() {
    await this.detail();
  },
  methods: {
    //   selectFile(){
    //     this.selected.prop_document = this.$refs.file.files[0];
    //     console.log(this.selected.prop_document);
    //   },
    async preview() {
      console.log(this.selected.prop_document);
      // const result = await axios.get(`http://localhost:3000/file/${this.selected.prop_document}`);
      // console.log(result);
      this.$swal.fire({
        position: "center",
        title: "Sweet!",
        text: this.selected.prop_document,
        imageUrl: `http://localhost:3000/file/${this.selected.prop_document}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    },
    addProductToCart(prop) {
      alert(JSON.stringify(prop));
    },
    editProp(prop) {
      this.isPropEditing = true;
      this.$root.$emit("bv::toggle::collapse", "sidebar-right");
      // this.$root.$emit("callClearFromProject");'
      this.selected = { ...prop };
    },

    async detail() {
      let result = await axios.get(`http://localhost:3000/unapproved_users`);
      console.log(result.data);
      this.allUsers = result.data;
      console.log(this.allUsers)
      console.log(this.selected);
    },
    openSlider() {
      this.isPropEditing = false;
      this.clearAll();
      //  this.$root.$emit("bv::toggle::collapse", "sidebar-right");
    },
    async saveProperty() {
      console.log(this.selected);
      const result = await axios.post(
        `http://localhost:3000/approve_user_moderator/${this.selected.metamask_address}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          obj: this.selected,
        }
      );
      {
        const res = result;
        console.log(res);
        // await this.detail();
      }
      // this.clearAll();
      this.$root.$emit("bv::toggle::collapse", "sidebar-right");
      // this.$root.$emit("callClearFromProject");
      await this.detail();
    },
    // isValidate(){
    //     if(!this.selected.propName){
    //         alert("please fill the info")
    //         return false
    //     }
    // },
    clearAll() {
      this.selected = {
        metamask_address: "",
        prop_area: "",
        prop_house_no: "",
        prop_landmark: "",
        prop_city: "",
        prop_state: "",
        prop_price: "",
        prop_surveyNumber: "",
        prop_document: "",
      }
    },
  },
};
</script>

<style>
.slight-left-margin {
  margin-left: 5px;
}
.topMargin {
  margin-top: 20px;
}
.bt {
  /* float:right; */
  /* margin-left: auto; */
  margin-top: 20px;
}

#titles {
  padding-left: 40px;
}

/* cards css below */
#main {
  display: inline-flex;
  margin-right: -1rem;
  margin-left: -1rem;
  padding: 2rem;
}
#sidebar-right {
  width: 50%;
}
@media only screen and (max-width: 600px) {
  #main {
    display: flex;
    /* flex-wrap: wrap; */
    margin-right: -1rem;
    margin-left: -1rem;
    padding: 2rem;
  }
  .edit {
    margin-top: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: right;
  }
  #sidebar-right {
    width: 70%;
  }
}
.col-md-4 {
  /* flex: 0 0 33.33%; */
  max-width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  position: relative;
}
.card {
  box-shadow: 0 1px 6px rgba(61, 65, 84, 0.15);
  min-height: 150px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  width: 100%;
}
.card:before {
  width: 0;
  transition: 0.2s;
  z-index: 0;
  content: "";
  background-color: #4c86e7;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.col-md-4:hover .card:before {
  width: 100%;
}
.col-md-4:hover .card {
  top: -2px;
  box-shadow: 0px 20px 40px 0px rgba(61, 65, 84, 0.15);
}
.edit {
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: right;
}
.intro {
  padding: 10px;
}
.sold_status {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  /* padding: 6px 40px; */
  padding: 6px;
  background-color: #646464;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4em;
  text-transform: uppercase;
  text-align: center;
}
.sold_status_availabe {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  /* padding: 6px 40px; */
  padding: 6px;
  background-color: teal;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4em;
  text-transform: uppercase;
  text-align: center;
}
.enquireBt {
  display: flex;
  /* display: inline-flex; */
  justify-content: center;
  /* padding-bottom: 10px; */
}
</style>
