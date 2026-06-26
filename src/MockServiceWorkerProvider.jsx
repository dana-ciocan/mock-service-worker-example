import { useEffect, useState } from "react";

export const MockServiceWorkerProvider = ({
  children,
}) => {
  const [areMocksReady, setAreMocksReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { worker } = await import("./mocks/browser");
      await worker.start({ onUnhandledRequest: "bypass" });

      setAreMocksReady(true);
    };
    init();
  }, []);

  if (!areMocksReady) {
    return <div>Loading mocks...</div>;
  }

  return <>{children}</>;
};
