import PlanCard from "../components/PlanCard";

const plans = [
  { name: "Starter", amount: 25, weekly: 5, weeks: 6 },
  { name: "Bronze", amount: 50, weekly: 10, weeks: 6 },
  { name: "Silver", amount: 100, weekly: 20, weeks: 6 },
  { name: "Gold", amount: 250, weekly: 50, weeks: 6 },
  { name: "Platinum", amount: 500, weekly: 110, weeks: 6 },
  { name: "Diamond", amount: 1000, weekly: 250, weeks: 6 },
];

export default function Plans({ token }) {
  const invest = async (plan) => {
    await fetch("https://moneta-ict.onrender.com/api/invest", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": token 
      },
      body: JSON.stringify({
        amount: plan.amount,
        weekly_roi: plan.weekly,
        weeks: plan.weeks,
      }),
    });
    alert("Investment started");
  };

  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {plans.map(p => (
        <PlanCard key={p.name} plan={p} onInvest={invest} />
      ))}
    </div>
  );
}