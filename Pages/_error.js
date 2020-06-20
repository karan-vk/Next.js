import React from "react";
import Link from "next/link";

const _error = () => {
  return (
    <div>
      <h1>Oops, Something Went wrong</h1>
      <p>
        Try <Link href="/">Going back</Link>
      </p>
    </div>
  );
};

export default _error;
