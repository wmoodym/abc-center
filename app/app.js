const App={
  data:()=>({state:{user:{username:'demo'},customers:[],sales:[],settings:{businessName:'My Business',plan:'free'}}}),
  mounted(){const s=localStorage.getItem('abc_state');if(s){try{this.state=JSON.parse(s)}catch(e){}}document.title=`ABC Center — ${this.state.settings.businessName||'App'}`},
  methods:{logout(){localStorage.removeItem('abc_state');location.href='../index.html'}},
  template:`<div class='p-6 max-w-5xl mx-auto'>
    <div class='flex items-center justify-between mb-4'>
      <h1 class='text-2xl font-bold'>Welcome, {{state.user?.username||'User'}}</h1>
      <button class='px-3 py-2 rounded-xl border' @click='logout'>Logout</button>
    </div>
    <p class='opacity-80 mb-6'>Plan: <strong>{{state.settings.plan||'free'}}</strong>. Go to <a class='underline' href='../billing.html'>Billing</a> to manage subscription.</p>
    <div class='grid md:grid-cols-3 gap-4'>
      <div class='rounded-xl border bg-white p-4'><h2 class='font-semibold'>Customers</h2><p class='text-sm opacity-80'>Add & search clients.</p></div>
      <div class='rounded-xl border bg-white p-4'><h2 class='font-semibold'>Sales & Invoices</h2><p class='text-sm opacity-80'>Record sales; print/email invoices.</p></div>
      <div class='rounded-xl border bg-white p-4'><h2 class='font-semibold'>Reports</h2><p class='text-sm opacity-80'>See monthly totals.</p></div>
    </div>
  </div>`
};
Vue.createApp(App).mount('#app');