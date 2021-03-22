import Home from "./pages/home";
import Team from "./pages/team";
import Profile from "./pages/profile/";
import Contact from "./pages/contact";
import FAQ from "./pages/FAQ";
import Course from "./pages/courses";
import Project from "./pages/project";
import Register from "./pages/register";
import Error from "./pages/error";
import Email from "./pages/email";
import MainLayout from "./layout/MainLayout";
const routers = [
  
  {
    path: "/",
    component: MainLayout,
    exact: true,
    router: [
      {
        path: "/contact",
        component: Contact,
      },
      {
        path: "/profile",
        component: Profile,
      },
      {
        path: "/faq",
        component: FAQ,
      },
      {
        path: "/course",
        component: Course,
      },
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/project",
        component: Project,
      },
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/",
        component: Home,
      },
    ],
  },
  {
    component: Error,
  },
  {
    path: "/email",
    component: Email,
  },
];
export default routers;
