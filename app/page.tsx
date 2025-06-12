export default function Home() {
  return (
    <div className="p-6 space-y-6 font-sans">
      <h1 className="text-3xl font-bold text-sky-800">SynergySky Config Portal (Figmoc)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">System Overview</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Microsoft Graph: <strong className="text-green-600">Connected</strong></li>
            <li>Webex API: <strong className="text-red-600">Not Connected</strong></li>
            <li>Rooms Configured: 4 / 10</li>
          </ul>
        </div>

        <div className="border rounded-xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Setup Wizard</h2>
          <button className="bg-sky-600 text-white px-4 py-2 rounded mr-2">Connect Microsoft 365</button>
          <button className="bg-sky-600 text-white px-4 py-2 rounded mr-2">Connect Webex</button>
          <button className="bg-sky-600 text-white px-4 py-2 rounded">Discover Rooms</button>
        </div>

        <div className="border rounded-xl p-4 shadow col-span-2">
          <h2 className="text-xl font-semibold mb-2">Configure Features</h2>
          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-100 border px-4 py-2 rounded">Configure OBTP</button>
            <button className="bg-gray-100 border px-4 py-2 rounded">Configure Connect GO</button>
            <button className="bg-gray-100 border px-4 py-2 rounded">Configure Lobby Auto Admit</button>
            <button className="bg-gray-100 border px-4 py-2 rounded">Configure Join by ID</button>
          </div>
        </div>
      </div>
    </div>
  );
}