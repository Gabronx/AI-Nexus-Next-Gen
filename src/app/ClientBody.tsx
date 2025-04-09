"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <body className="bg-background min-h-screen antialiased">
        <div className="hidden">{children}</div>
      </body>
    );
  }

  return (
    <body className="bg-background min-h-screen antialiased">
      {children}
    </body>
  );
}
