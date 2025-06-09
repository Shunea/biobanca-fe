import { Button } from "@/components/Elements/Button";
import StatelessStepper from "@/features/formulare/components/StatelessStepper";
import {
  Box,
  Breadcrumbs,
  Divider,
  Link,
  Stack,
  SxProps,
  Theme,
} from "@mui/material";
import { MouseEvent } from "react";
import { LinkBehaviour } from "@/styles/theme";

interface FormContainerProps extends React.PropsWithChildren<{}> {
  boxSx?: SxProps<Theme>;
  isSubmitting?: boolean;
  mode?: "edit" | "create";
  page: number;
  submitForm?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const FormContainer: React.FC<FormContainerProps> = ({
  boxSx,
  isSubmitting,
  mode,
  page,
  submitForm,
  children,
}) => {
  return (
    <Stack sx={{ pt: 4, pb: 6 }}>
      <Breadcrumbs
        sx={{ color: "#a3a3a3", fontSize: "24px", fontWeight: 400, mb: 2 }}
      >
        <Link
          component={LinkBehaviour}
          underline="none"
          color="text.primary"
          href="/formulare"
          sx={{
            marginLeft: "65px",
            "&:hover": {
              color: "#343d70",
            },
          }}
        >
          Formulare
        </Link>
        <Link
          component={LinkBehaviour}
          underline="none"
          color="#076AC9"
          href="/formulare/clasificatoare"
          sx={{
            fontWeight: 600,
            "&:hover": {
              color: "#343d70",
            },
          }}
        >
          Formularul de colectare a probelor
        </Link>
      </Breadcrumbs>

      <Divider variant="middle" sx={{ mx: "65px", mb: 5 }} />

      <Box
        sx={{
          background: "#F7F7F7",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          mx: "65px",
        }}
      >
        <StatelessStepper
          first={page === 1}
          pacient
          activeStep={page - 1}
          path={
            submitForm
              ? "/formulare/pacient/previzualizare/"
              : mode === "edit"
              ? "/formulare/pacient/editeaza/"
              : "/formulare/pacient/"
          }
        />
        <Box sx={{ height: "100%", px: 12, pt: 4, pb: 6, ...boxSx }}>
          {children}
        </Box>
      </Box>

      {submitForm ? (
        <Button
          variant={["primary", "end"]}
          disabled={isSubmitting}
          onClick={submitForm}
        >
          {page === 5 ? "Trimite formularul" : `Treci la pagina ${page + 1}`}
        </Button>
      ) : (
        <Button
          form="pacient"
          type="submit"
          disabled={isSubmitting}
          variant={["primary", "end"]}
        >
          {page === 5 ? "Salveaza formularul" : `Treci la pagina ${page + 1}`}
        </Button>
      )}

      <Divider variant="middle" sx={{ mx: "65px", mb: 6 }} />
    </Stack>
  );
};

export default FormContainer;
