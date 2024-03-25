// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { Icon } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
// Images
import team2 from "assets/images/team-2.jpg";
import DataTable from "examples/Tables/DataTable";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Data() {
  const [studentStaffInteractionData, setStudentStaffInteractionData] =
    useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/student-staff-interaction-data`
        );
        const result = await response.json();
        setStudentStaffInteractionData(result);
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    };
    fetchData();
  }, []);
  const handleUpdate = async (uid, status, date, time) => {
    // console.log(studentStaffInteractionData);

    let Index;
    const updatedArray = studentStaffInteractionData.map((item) => {
      if (uid === item.uid) {
        // Index=index
        return {
          ...item,
          ["status"]: status,
        };
      }
      return item;
    });
    console.log(updatedArray);

    try {
      const response = await fetch(
        `http://localhost:5001/student-staff-interaction-update/${uid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedArray[0]),
        }
      );
    } catch (error) {
      console.error("Error while sending data:", error);
    }

    setStudentStaffInteractionData(updatedArray);
  };

  const Name = ({ image, name, regno }) => (
    <MDBox display="flex" alignItems="left" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{regno}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Aoi = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {title}
      </MDTypography>
    </MDBox>
  );
  const Schedule = ({ Date, time, status }) => {
    switch (status) {
      case "pending":
        return (
          <MDTypography variant="caption" color="warning">
            Please schedule...
          </MDTypography>
        );
      case "accept":
        return (
          <MDBox lineHeight={1} textAlign="left">
            <MDTypography
              display="block"
              variant="caption"
              color="success"
              fontWeight="medium"
            >
              {Date}
            </MDTypography>
            <MDTypography color="success" variant="caption">
              {time}
            </MDTypography>
          </MDBox>
        );
      case "reject":
        return (
          <MDTypography variant="caption" color="error">
            You rejected
          </MDTypography>
        );
    }
  };
  const Action = ({ status, uid, date, time }) => {
    switch (status) {
      case "pending":
        return (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <MDButton
              color="success"
              onClick={() => {
                handleUpdate(uid, "accept");
              }}
              size="small"
            >
              <Icon fontSize="large">event_available_icon</Icon>
            </MDButton>
            <MDButton
              onClick={() => {
                handleUpdate(uid, "reject", date, time);
              }}
              color="error"
              size="small"
            >
              <Icon fontSize="large">cancel_icon</Icon>
            </MDButton>
          </MDTypography>
        );
      case "accept":
        return (
          <MDTypography fontWeight="medium" variant="caption" color="success">
            ACCEPTED
          </MDTypography>
        );
      case "reject":
        return (
          <MDTypography fontWeight="medium" variant="caption" color="error">
            REJECTED
          </MDTypography>
        );
    }
  };

  const alumni = {
    columns: [
      { Header: "S.no", accessor: "uid", align: "center" },
      { Header: "Name", accessor: "name", width: "20%", align: "left" },
      { Header: "Domain", accessor: "wd", align: "left" },
      { Header: "Department", accessor: "department", align: "center" },
      { Header: "Passed out", accessor: "passout", align: "center" },
      { Header: "Schedule", accessor: "schedule", align: "left" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: studentStaffInteractionData.map((data) => ({
      uid: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {data.uid}
        </MDTypography>
      ),
      name: <Name image={team2} name={data.name} regno={data.regno} />,
      wd: <Aoi title={data.domain} />,
      department: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {data.department}
        </MDTypography>
      ),
      passout: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {data.pass_year}
        </MDTypography>
      ),
      schedule: (
        <Schedule Date={data.date} time={data.time} status={data.status} />
      ),
      action: (
        <Action
          status={data.status}
          uid={data.uid}
          date={data.date}
          time={data.time}
        />
      ),
    })),
  };
  const { columns, rows } = alumni;
  return (
    <>
      <DataTable
        table={{ columns, rows }}
        isSorted={true}
        entriesPerPage={true}
        showTotalEntries={true}
      />
      <ToastContainer style={{ fontSize: "15px", width: "300px" }} />
    </>
  );
}
