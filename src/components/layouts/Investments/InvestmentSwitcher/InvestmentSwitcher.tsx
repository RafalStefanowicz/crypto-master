import React, { useState } from "react";

import { Info } from "../../../Info/Info";
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
  userNameParams?: string;
}

export const InvestmentSwitcher = ({
  investments,
  userNameParams
}: InvestmentSwitcherProps) => {
  const [showCurrent, setShowCurrent] = useState(true);

  const handleSetShow = (showCurrent: boolean) => () => {
    setShowCurrent(showCurrent);
  };

  const renderInvestments = () => {
    // render current investments
    if (showCurrent) {
      return (
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
      );
    }

    // render info if no completed investments
    if (!("completed" in investments)) {
      return <Info infoText={`No completed investments so far`} />;
    }

    // render completed investments
    return (
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
    );
  };

  return (
    <div id="investments">
      {userNameParams ? <Info infoText={userNameParams} /> : null}
      <SwitchButtons
        leftActive={showCurrent}
        changeActive={handleSetShow}
        leftText="Current"
        rightText="Completed"
      />
      {renderInvestments()}
    </div>
  );
};
