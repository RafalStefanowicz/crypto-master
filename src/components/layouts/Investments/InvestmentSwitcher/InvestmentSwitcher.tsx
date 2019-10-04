import React, { useState } from "react";

import { InvestmentsI } from "../../../../types/InvestmentsInterfaces";
import { Investments } from "../Investments";
import { InvestmentList } from "../InvestmentList/InvestmentList";
import { SwitchButtons } from "./SwitchButtons/SwitchButtons";
import {
  CurrentInvestmentItem,
  CurrentInvestmentItemProps
} from "../InvestmentList/CurrentInvestmentItem/CurrentInvestmentItem";
import {
  CompletedInvestmentItem,
  CompletedInvestmentItemProps
} from "../InvestmentList/CompletedInvestmentItem/CompletedInvestmentItem";

interface InvestmentSwitcherProps {
  investments: InvestmentsI;
}

export const InvestmentSwitcher = ({
  investments
}: InvestmentSwitcherProps) => {
  const [showCurrent, setShowCurrent] = useState(true);
  return (
    <div id="investments">
      <SwitchButtons
        showCurrent={showCurrent}
        setShowCurrent={setShowCurrent}
      />
      {showCurrent ? (
        <Investments
          investments={investments.current}
          renderInvestmentsList={() => (
            <InvestmentList
              investments={investments.current}
              renderInvestmentItem={(props: CurrentInvestmentItemProps) => (
                <CurrentInvestmentItem {...props} />
              )}
            />
          )}
        />
      ) : (
        <Investments
          investments={investments.completed}
          renderInvestmentsList={() => (
            <InvestmentList
              investments={investments.completed}
              renderInvestmentItem={(props: CompletedInvestmentItemProps) => (
                <CompletedInvestmentItem {...props} />
              )}
            />
          )}
        />
      )}
    </div>
  );
};
