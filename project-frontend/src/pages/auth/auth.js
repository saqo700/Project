import Login from "./Login";
import Register from "./Register";
import ForgetPassword from "./ForgotPassword";
import Remember from "./RememberingComponent";

export default [
  {path: '/login', name: 'Login', component: Login},
  {path: '/register', name: 'Register', component: Register},
  {path: '/forget-password', name: 'ForgetPassword', component: ForgetPassword},
  {path: '/remember', name: 'remember', component: Remember},
]
