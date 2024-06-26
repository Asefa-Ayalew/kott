"use client";
import { useGetAppQuery } from "./store/app.query";

export default function Home() {
  const { data, isLoading } = useGetAppQuery({
    url: "login",
    method: "GET",
    provideTags: "orders",
  });
  console.log(data);
  return (
    <div>welcome</div>
  );
}
