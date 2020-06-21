import React from "react";
import Users from "../../components/Users";

const authIndexPage = (props) => (
  <div>
    <h1>The auth index Page {props.appName} </h1>
    <Users name="Karan" age={25} />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App Auth" });
    }, 1000);
  });
  return promise;
};
export default authIndexPage;
