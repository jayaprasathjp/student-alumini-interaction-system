// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import ProgramEditModal from "layouts/program/components/ProgramEditModal";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProgramList(props) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [editModal, setEditModal] = useState(false);
  const onChangeEditModal = () => {
    setEditModal(false);
  };
  const handleState = () => {
    props.handleState();
  };
  return (
    <>
      <MDBox
        component="li"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        bgColor={darkMode ? "transparent" : "grey-100"}
        borderRadius="lg"
        p={3}
        mt={2}
      >
        <MDBox width="100%" display="flex" flexDirection="column">
          <MDBox
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            mb={2}
          >
            <MDTypography
              variant="h6"
              fontSize="17px"
              fontWeight="bold"
              textTransform="capitalize"
              color="info"
            >
              {props.title}
            </MDTypography>

            <MDBox
              display="flex"
              alignItems="center"
              mt={{ xs: 2, sm: 0 }}
              ml={{ xs: -1.5, sm: 0 }}
            >
              <MDBox mr={1}>
                <MDButton
                  onClick={() => {
                    props.handleDeleteProgram(props.uid);
                  }}
                  variant="text"
                  color="error"
                >
                  <Icon>delete</Icon>&nbsp;delete
                </MDButton>
              </MDBox>
              <MDButton
                onClick={() => {
                  setEditModal(true);
                }}
                variant="text"
                color={darkMode ? "white" : "dark"}
              >
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
            </MDBox>
          </MDBox>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" fontSize="14px" color="text">
              Alumni Name:&nbsp;&nbsp;&nbsp;
              <MDTypography
                variant="caption"
                fontWeight="medium"
                textTransform="capitalize"
                fontSize="14px"
              >
                {props.alumni_name}
              </MDTypography>
            </MDTypography>
          </MDBox>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" fontSize="14px" color="text">
              Venue :&nbsp;&nbsp;&nbsp;
              <MDTypography
                variant="caption"
                fontSize="14px"
                fontWeight="medium"
              >
                {props.venue}
              </MDTypography>
            </MDTypography>
          </MDBox>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" fontSize="14px" color="text">
              Date :&nbsp;&nbsp;&nbsp;
              <MDTypography
                variant="caption"
                fontSize="14px"
                fontWeight="medium"
              >
                {props.date}
              </MDTypography>
            </MDTypography>
          </MDBox>
          <MDTypography variant="caption" fontSize="14px" color="text">
            time :&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontSize="14px" fontWeight="medium">
              {props.time}
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>
      {editModal && (
        <ProgramEditModal
          {...props}
          handleState={handleState}
          handleEditModal={onChangeEditModal}
        />
      )}
    </>
  );
}

export default ProgramList;
