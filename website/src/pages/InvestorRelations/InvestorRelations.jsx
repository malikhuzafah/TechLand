import React from "react";
import InvestorInformation from "../../components/InvestorInformation/InvestorInformation";
// import FinancialReports from "../../components/FinancialReports/FinancialReports";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const InvestorRelations = () => {
  return (
    <div>
      <InvestorInformation />
      {/* <FinancialReports /> */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default InvestorRelations;
