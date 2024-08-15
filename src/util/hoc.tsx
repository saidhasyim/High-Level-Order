import { useEffect, useState } from "react";
import { user$ } from "./auth";

export default function hoc(Component: React.ComponentType<any>) {
  return function HOCComponent(props: any) {
    const [user, setUser] = useState<string>(null);

    useEffect(() => {
      const unsubscribe = user$.subscribe((user) => {
        setUser(user);
      });

      return () => {
        unsubscribe();
      };
    }, []);

    useEffect(() => {
      if (user === false) {
        console.log("user === false");
      }
    }, [user]);

    if (user === null) {
      return <p>verifying user</p>;
    }

    if (user) {
      return (
        <>
          <Component {...props} />
        </>
      );
    }
  };
}
