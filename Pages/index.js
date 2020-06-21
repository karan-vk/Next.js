import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class indexPage extends Component {
  static async getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The Main Page {this.props.appName}</h1>
        goto
        <Link href="/auth">
          <a>Auth</a>
        </Link>
        <button onClick={() => Router.push("/auth")}>Auth</button>
      </div>
    );
  }
}

export default indexPage;
