import Navbar from "../components/layout/Navbar";
import Career from "../sections/Career/Career";

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <Career />
      </main>
    </>
  );
}
