import Login from "./Login";
import Register from "./Register";
import ForgetPassword from "./ForgotPassword";
import Remember from "./RememberingComponent";
import Verified from "./Verified";
import ProfileComponent from "./ProfileComponent";

export default [
  {path: '/login', name: 'Login', component: Login},
  {path: '/register', name: 'Register', component: Register},
  {path: '/forget-password', name: 'ForgetPassword', component: ForgetPassword},
  {path: '/remember', name: 'remember', component: Remember},
  {path: '/verify', name: 'Verified', component: Verified},
  {path: '/profile', name: 'ProfileComponent', component: ProfileComponent},
]
