// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { Icon } from "@mui/material";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Name = ({ image, name, regno }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{regno}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Aoi = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
  const Contact = ({ phone, email }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {phone}
      </MDTypography>
      <MDTypography variant="caption">{email}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "S.no", accessor: "uid", align: "center" },
      { Header: "Name", accessor: "name", width: "20%", align: "center" },
      { Header: "Aear of Interest", accessor: "aoi", align: "left" },
      { Header: "Contact", accessor: "contact", align: "left" },
      { Header: "Alumini Interacted", accessor: "ai", align: "center" },
      { Header: "Update", accessor: "update", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        uid: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {1}
          </MDTypography>
        ),
        name: <Name image={team2} name="JAYAPRASATH K" regno="927621BCS043" />,
        aoi: <Aoi title="DEVELOPER" description="Web Developer" />,
        contact: (
          <Contact phone="9876543210" email="jayaprasathjp44@gmail.com" />
        ),
        ai: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {11}
          </MDTypography>
        ),
        update: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <MDButton color="success" size="medium">
              <Icon fontSize="large">{"hail"}</Icon>
            </MDButton>
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <MDButton color="error" size="medium">
              <Icon fontSize="large">{"delete"}</Icon>
            </MDButton>
          </MDTypography>
        ),
      },
    ],
  };
}
