import DashboardCalendar from "@/components/DashboardCalendar";
import DashboardCards from "@/components/DashboardCards";
import DashboardMenu from "@/components/DashboardMenu";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[1303px] py-10">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-5xl font-bold">Dashboard</h1>
          <div className="flex gap-x-2">
            <div className="border rounded-lg py-1 px-2">
              <DashboardCalendar />
            </div>
            <button disabled className="border rounded-lg px-2 py-1 cursor-not-allowed">Download</button>
          </div>
        </div>

        <div className="w-full py-3">
          <DashboardMenu />
        </div>

        <div className="w-full py-3">
          <DashboardCards />
        </div>

      </div>
    </div>
  );
}
