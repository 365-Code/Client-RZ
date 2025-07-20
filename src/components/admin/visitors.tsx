"use client";
import { useEffect, useState } from "react";

const Visitors = () => {
  const [active, setActive] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  const fetchVisitorStats = async () => {
    const res = await fetch("/api/visitors");
    const data = await res.json();
    setActive(data.activeVisitors);
    setTotal(data.totalVisitors);
  };

  useEffect(() => {
    fetchVisitorStats();

    const interval = setInterval(fetchVisitorStats, 5000); // Refresh every 5s
    fetch("/api/visitors", { method: "POST" }); // Notify server we're active

    return () => {
      clearInterval(interval);
      fetch("/api/visitors", { method: "DELETE" }); // Cleanup when user leaves
    };
  }, []);

  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Visitor Stats</h1>
      <p className="text-lg">🌐 Active Visitors: {active ?? "Loading..."}</p>
      <p className="text-lg">📊 Total Visitors: {total ?? "Loading..."}</p>
    </section>
  );
};

export default Visitors;
