import React from "react";
import { useEffect, useState } from "react";
import {user$} from "../../util/auth"
import hoc from "../../util/hoc";

export default hoc(function ProtectedLayout({
    children,
  }: {
    children: React.ReactNode;
  }) 
  
{
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = user$.subscribe((user) => {
      setUser(user);
    });

    // Clean up subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <title>Astro</title>
      </head>
      <body>
        {user}
        {children}
        <p>
          <a href="/protected1">Protected 1</a>
        </p>
        <p>
          <a href="/protected2">Protected 2</a>
        </p>
      </body>
    </html>
  );
});
