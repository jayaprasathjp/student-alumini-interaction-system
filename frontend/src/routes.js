import Dashboard from "layouts/dashboard";
import Students from "layouts/students";
import StudentInteraction from "layouts/student_interaction";
import Alumnis from "layouts/alumnis";
import Program from "layouts/program";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import ProgramAlumni from "layouts/program_alumni";
import AlumniAlumni from "layouts/alumni_alumni";
import StudentAlumniInteraction from "layouts/student_alumni_interaction";
import ProfileAlumni from "layouts/profile_alumni";

// @mui icons
import Icon from "@mui/material/Icon";

const id = "alumni";
let routes;

switch (id) {
  case "staff": {
    routes = [
      {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        icon: <Icon fontSize="small">dashboard</Icon>,
        route: "/dashboard",
        component: <Dashboard />,
      },
      {
        type: "collapse",
        name: "Student Interaction",
        key: "students-interaction",
        icon: <Icon fontSize="small">add_reaction_icon</Icon>,
        route: "/students-interaction",
        component: <StudentInteraction />,
      },
      {
        type: "collapse",
        name: "Student",
        key: "students",
        icon: <Icon fontSize="small">group_icon</Icon>,
        route: "/students",
        component: <Students />,
      },
      {
        type: "collapse",
        name: "Alumni",
        key: "alumnis",
        icon: <Icon fontSize="small">hail</Icon>,
        route: "/alumnis",
        component: <Alumnis />,
      },
      {
        type: "collapse",
        name: "Program",
        key: "program",
        icon: <Icon fontSize="small">receipt_long</Icon>,
        route: "/program",
        component: <Program />,
      },
      {
        type: "collapse",
        name: "Profile",
        key: "profile",
        icon: <Icon fontSize="small">person</Icon>,
        route: "/profile",
        component: <Profile />,
      },
      {
        type: "collapse",
        name: "Sign In",
        key: "sign-in",
        icon: <Icon fontSize="small">login</Icon>,
        route: "/authentication/sign-in",
        component: <SignIn />,
      },
      {
        type: "collapse",
        name: "Sign Up",
        key: "sign-up",
        icon: <Icon fontSize="small">assignment</Icon>,
        route: "/authentication/sign-up",
        component: <SignUp />,
      },
    ];
    break;
  }
  case "alumni": {
    routes = [
      {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        icon: <Icon fontSize="small">dashboard</Icon>,
        route: "/dashboard",
        component: <Dashboard />,
      },
      {
        type: "collapse",
        name: "Student Interaction",
        key: "students-interaction",
        icon: <Icon fontSize="small">add_reaction_icon</Icon>,
        route: "/students-interaction",
        component: <StudentAlumniInteraction />,
      },
      {
        type: "collapse",
        name: "Alumni",
        key: "alumnis",
        icon: <Icon fontSize="small">hail</Icon>,
        route: "/alumnis",
        component: <AlumniAlumni />,
      },
      {
        type: "collapse",
        name: "Program",
        key: "program",
        icon: <Icon fontSize="small">receipt_long</Icon>,
        route: "/program",
        component: <ProgramAlumni />,
      },
      {
        type: "collapse",
        name: "Profile",
        key: "profile",
        icon: <Icon fontSize="small">person</Icon>,
        route: "/profile",
        component: <ProfileAlumni />,
      },
      {
        type: "collapse",
        name: "Sign Out",
        key: "sign_out",
        icon: <Icon fontSize="small">login</Icon>,
        route: "/authentication/sign-in",
        component: <SignIn />,
      },
    ];
    break;
  }
  default: {
    routes = [];
  }
}
export default routes;
