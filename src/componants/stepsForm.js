import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MealCategory from "./step1";
import SelectRestaurant from "./step2";
import SelectDishes from "./step3";
import Review from "./step4";
import restaurantsData from "./data/dishes";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Step1", "Step2", "Step3", "review"];
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { dishes } = restaurantsData;
  const [mealcategory, setmealcategory] = React.useState([]);
  const [restaurant, setRestaurants] = React.useState([]);
  const [dish, setDish] = React.useState([]);
  const steps = getSteps();
  console.log("mealcategory:", mealcategory);
  const res = dishes.filter(function (activeCompanydata) {
    return activeCompanydata.availableMeals.includes(mealcategory.value);
  });
  console.log(res);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <MealCategory
            dishes={dishes}
            setmealcategory={setmealcategory}
            mealcategory={mealcategory}
            setRestaurants={setRestaurants}
          />
        );
      case 1:
        return <SelectRestaurant />;
      case 2:
        return <SelectDishes />;
      case 3:
        return <Review />;
      default:
        return "Unknown step";
    }
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {/* {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : ( */}
        <div>
          <Typography className={classes.instructions}>
            {getStepContent(activeStep)}
          </Typography>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleNext}
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}
