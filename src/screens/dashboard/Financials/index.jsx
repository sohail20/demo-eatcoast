import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout/DashboardLayout";
import FinancialDashBoard from "./FinancialDashBoard";
import TransactionDetails from "./TransactionDetails/TransactionDetails";

const Financials = () => {
  const [step, setStep] = useState("dashboard");
  return (
    <>
      <DashboardLayout>
        {step === "dashboard" ? (
          <FinancialDashBoard />
        ) : step === "transactionDetails" ? (
          <TransactionDetails />
        ) : null}
      </DashboardLayout>
    </>
  );
};

export default Financials;
