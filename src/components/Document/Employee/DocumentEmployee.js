import React, { useState, useCallback } from "react";
import {
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import debounce from "lodash.debounce";
import { DocumentCard } from "./DocumentCard";
import { Data } from "./Config";
import { CustomLargeBtn } from "./CustomLargeBtn";
import { DocumentEmployeeHeader } from "./DocumentEmployeeHeader";
import { useGetCatererDocumentQuery } from "api/authenticate";
import FullPageLoader from "components/Loader/FullPageLoader";
import { generateImageURL } from "helper";

const DocumentEmployee = ({ handleBack }) => {
  const [hasChanged, setHasChanged] = useState(false);
  const { data: documents, isLoading } = useGetCatererDocumentQuery()
  const onChangeValue = useCallback(
    debounce(() => {
      setHasChanged(true);
    }, 800),
    []
  );

  console.log("documents", documents)
  return isLoading ? <FullPageLoader /> : (
    <div>
      <Box sx={{ mt: { lg: "0px", md: "0px", sm: "100px", xs: "100px" } }}>
        <Box>
          <DocumentEmployeeHeader handleBack={handleBack} />
        </Box>

        <Box
          display={"flex"}
          flexDirection="column"
          alignItems="center"
          justifyContent={"center"}
          mt="40px"
        >
          {documents && documents.data && <Box pt="24px">
            {Data.map((item) => {
              return (
                <>
                  <Box pb="16px">
                    <DocumentCard Data={
                      {
                        ...item,
                        image: generateImageURL(`caterer/${item.id === "bussinessLicence" ? "licences" : "certificates"}`, item.title === "Business License" ?
                          documents.data.bussinessLicence :
                          documents.data.certification)
                      }} />
                  </Box>
                </>
              );
            })}
          </Box>}

          <Box mt="8px">
            {hasChanged && <CustomLargeBtn label={"Save Changes"} variantType={"contained"} />}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DocumentEmployee
