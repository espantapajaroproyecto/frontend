// components/AuthLayout.tsx
"use client";

import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="w-full max-w-md bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md p-6 sm:p-8">
        
        {children}
      </div>
    </section>
  );
}
