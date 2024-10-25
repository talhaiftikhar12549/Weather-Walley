<template>
  <div className="md:w-[50%] w-[100%] flex items-center justify-center text-center">

    <div className="w-[70%]"><p className="text-4xl font-black text-[#98C3ED]  pb-4">Report Bug</p>

      <form className=" mx-auto p-4 border rounded-lg shadow-lg px-12 py-12" @submit.prevent="handleSubmit">
        <div className="mb-4">

          <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
              v-model="formData.name"
          />
        </div>
        <div className="mb-4">

          <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              v-model="formData.email"

              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
          />
        </div>
        <div className="mb-4">

          <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              v-model="formData.phone"

              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
          />
        </div>
        <div className="mb-4">
              <textarea v-model="formData.message" id="Report Bug" placeholder="Report Bug" required rows="4"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>


        </div>
        <button type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 drop-shadow-lg active:bg-[#98c3ed]">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name:'ContactUsForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      bugReport: [],
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form Data:', this.formData);
      this.bugReport.unshift({...this.formData});
      console.log(this.bugReport);
      localStorage.setItem('Bugs Report', JSON.stringify(this.bugReport));
      this.formData.name = "";
      this.formData.email = "";
      this.formData.phone = "";
      this.formData.message = "";
    }}
}
</script>