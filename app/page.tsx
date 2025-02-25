"use client";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  console.log("user", user);

  return <div> {JSON.stringify(user)}</div>
  
}