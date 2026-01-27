import WalletBox from "../components/WalletBox";

export default function Dashboard({ token }) {
  const balance = 0; // backend endpoint later

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Dashboard</h2>
      <WalletBox balance={balance} />
    </div>
  );
}