import React from "react";
import Link from "next/link";
import Router from "next/router";

const indexPage = () => (
  <div>
    <h1>The Main Page</h1>
    goto{" "}
    <Link href="/auth">
      <a>Auth</a>
    </Link>
    <button onClick={() => Router.push("/auth")}>Auth</button>
  </div>
);

export default indexPage;
