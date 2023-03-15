import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout/DashboardLayout";
import FinancialDashBoard from "./FinancialDashBoard";
import TransactionDetails from "./TransactionDetails/TransactionDetails";

const Financials = () => {
  const [step, setStep] = useState("transactionDetails");
  return (
    <>
      <DashboardLayout>
        {step === "dashboard" ? (
          <FinancialDashBoard
            handleStep={() => {
              setStep("transactionDetails");
            }}
          />
        ) : step === "transactionDetails" ? (
          <TransactionDetails
            handleBack={() => {
              setStep("dashboard");
            }}
          />
        ) : null}
      </DashboardLayout>
    </>
  );
};

export default Financials;
