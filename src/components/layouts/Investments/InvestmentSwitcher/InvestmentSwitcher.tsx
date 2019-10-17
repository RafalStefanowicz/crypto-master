import React, { useState } from "react";
import { connect } from "react-redux";

import { Info } from "../../../Info/Info";
import { InvestmentsI } from "../../../../types/InvestmentsInterfaces";
import { Investments } from "../Investments";
import { InvestmentList } from "../InvestmentList/InvestmentList";
import { SwitchButtons, SwitchActiveType } from "./SwitchButtons/SwitchButtons";
import {
  CurrentInvestmentItem,
  CurrentInvestmentItemProps
} from "../InvestmentList/CurrentInvestmentItem/CurrentInvestmentItem";
import {
  CompletedInvestmentItem,
  CompletedInvestmentItemProps
} from "../InvestmentList/CompletedInvestmentItem/CompletedInvestmentItem";
import { CryptosI } from "../../../../redux/reducers/cryptos";
import { IStore } from "../../../../redux/reducers";
import {
  InvestmentHeader,
  InvestmentHeaderTypes
} from "../InvestmentList/InvestmentHeader/InvestmentHeader";
import { StyledSwitchButtonsWrapper } from "../InvestmentList/investmentListStyles";

interface InvestmentSwitcherProps {
  investments: InvestmentsI;
  userNameParams?: string;
  cryptos: CryptosI;
}

const _InvestmentSwitcher = ({
  investments,
  userNameParams,
  cryptos
}: InvestmentSwitcherProps) => {
  const [showCurrent, setShowCurrent] = useState(true);

  const handleSetShow = (showCurrent: boolean) => () => {
    setShowCurrent(showCurrent);
  };

  if (cryptos === null) return null;

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
                <CurrentInvestmentItem {...props} cryptos={cryptos} />
              )}
              renderCryptoHeader={() => (
                <InvestmentHeader type={InvestmentHeaderTypes.current} />
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
            renderCryptoHeader={() => (
              <InvestmentHeader type={InvestmentHeaderTypes.completed} />
            )}
          />
        )}
      />
    );
  };

  return (
    <div id="investments">
      {userNameParams ? <Info infoText={userNameParams} /> : null}
      <StyledSwitchButtonsWrapper>
        <SwitchButtons
          active={showCurrent ? SwitchActiveType.left : SwitchActiveType.right}
          leftClick={handleSetShow(true)}
          rightClick={handleSetShow(false)}
          leftText="Current"
          rightText="Completed"
        />
      </StyledSwitchButtonsWrapper>
      {renderInvestments()}
    </div>
  );
};

const mapStateToProps = ({ cryptos }: IStore) => ({ cryptos });

export const InvestmentSwitcher = connect(mapStateToProps)(_InvestmentSwitcher);
