import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { getCashFlowStatement } from '../../api';
import { CompanyCashFlow } from '../../company';
import Table from '../Table/Table';

interface Props {

}

const configs = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
      label: "Investing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedForInvestingActivites,
    },
    {
      label: "Financing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedProvidedByFinancingActivities,
    },
    {
      label: "Cash At End of Period",
      render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
      label: "Issuance Of Stock",
      render: (company: CompanyCashFlow) => company.commonStockIssued,
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) => company.freeCashFlow,
    },
  ];

const CashFlow = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [cashFlowStatement, setCashFlowStatement] = useState<CompanyCashFlow[]>();
  useEffect(() => {
    const getCashFlow = async () => {
      const value = await getCashFlowStatement(ticker);
      setCashFlowStatement(value?.data);
    }
    getCashFlow();
  }, []);
  return (
    <div>
      {cashFlowStatement ? (<div> <Table config={configs} data={cashFlowStatement}/> </div>) : (<div>Loading...</div>)}
    </div>
  )
}

export default CashFlow