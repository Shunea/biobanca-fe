import { Step, StepButton, Stepper } from "@mui/material";
import { useRouter } from "next/navigation";
import { formSteps, pacientSteps } from "../data";

interface StatelessStepperProps {
  activeStep: number;
  first?: boolean;
  path: string;
  pacient?: boolean;
}

const StatelessStepper: React.FC<StatelessStepperProps> = ({
  activeStep,
  first,
  path,
  pacient,
}) => {
  const router = useRouter();

  return (
    <Stepper
      nonLinear
      activeStep={activeStep}
      sx={{ pt: 4, width: "90%", m: "auto" }}
    >
      {(pacient ? pacientSteps : formSteps).map((label, index) => (
        <Step
          key={`${label + index}}`}
          completed={first ? false : activeStep > index}
          sx={{
            "& .MuiStepLabel-label": {
              color: "#000000",
            },
            "& .MuiStepIcon-text": {
              fill: "#ffffff",
            },
            "& .MuiStepLabel-root .Mui-completed": {
              color: "#076AC9",
            },
            "& .MuiStepLabel-root .Mui-active": {
              color: "#076AC9",
            },
          }}
        >
          <StepButton
            color="#076AC9"
            // form="pacient"
            // type="submit"
            onClick={() => router.push(`${path}${index + 1}`)}
          >
            {label}
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
};

export default StatelessStepper;
