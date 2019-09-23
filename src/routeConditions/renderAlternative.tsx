import React from "react";

export const renderAlternative = <A extends object>(
  Alternative: React.ComponentType<A>
) => <P extends object>(Component: React.ComponentType<P>) => {
  const RenderAlternative = ({ renderAlternative, ...otherProps }: any) => {
    return renderAlternative ? (
      <Alternative {...(otherProps as A)} />
    ) : (
      <Component {...(otherProps as P)} />
    );
  };

  return RenderAlternative;
};

// import React from "react";
// import { connect } from "react-redux";

// import { IStore } from "../redux/reducers";
// import { IsLoggedInType } from "../redux/reducers/isLoggedIn";

// export const renderAlternative = <A extends object>(
//   Alternative: React.ComponentType<A>
// ) => <P extends object>(Component: React.ComponentType<P>) => {
//   const RenderAlternativeIfNotLoggedIn = ({
//     isLoggedIn,
//     ...otherProps
//   }: any) => {
//     return isLoggedIn ? (
//       <Component {...(otherProps as P)} />
//     ) : (
//       <Alternative {...(otherProps as A)} />
//     );
//   };

//   const mapStateToProps = (state: IStore): { isLoggedIn: IsLoggedInType } => ({
//     isLoggedIn: state.isLoggedIn
//   });

//   return connect(mapStateToProps)(RenderAlternativeIfNotLoggedIn);
// };

// import React from "react";
// import { connect } from "react-redux";

// import { Home } from "../components/layouts/Home/Home";

// import { IStore } from "../redux/reducers";
// import { IsLoggedInType } from "../redux/reducers/isLoggedIn";

// export const renderHomeIfNotLoggedIn = <P extends object>(
//   Component: React.ComponentType<P>
// ) => {
//   const RenderHomeIfNotLoggedIn = ({ isLoggedIn, ...otherProps }: any) => {
//     return isLoggedIn ? <Component {...(otherProps as P)} /> : <Home />;
//   };

//   const mapStateToProps = (state: IStore): { isLoggedIn: IsLoggedInType } => ({
//     isLoggedIn: state.isLoggedIn
//   });

//   return connect(mapStateToProps)(RenderHomeIfNotLoggedIn);
// };
