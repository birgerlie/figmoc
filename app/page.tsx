const mockRooms = [
  {
    id: "room-1",
    name: "Conference Room A",
    calendar: "confrooma@acme.com",
    system: "Cisco Room Kit",
    features: { obtp: true, connectGo: false, lobbyAdmit: true, joinById: false },
    status: "configured"
  },
  {
    id: "room-2",
    name: "Boardroom",
    calendar: "boardroom@acme.com",
    system: "Cisco Room Kit",
    features: { obtp: false, connectGo: true, lobbyAdmit: false, joinById: false },
    status: "not-configured"
  },
  {
    id: "room-3",
    name: "Huddle Room 1",
    calendar: "huddle1@acme.com",
    system: "Cisco Room Kit",
    features: { obtp: true, connectGo: true, lobbyAdmit: true, joinById: true },
    status: "configured"
  }
];

export default function Home() {
  return (
    <main className="p-8 space-y-6 font-sans">
      <h1 className="text-3xl font-bold text-primary">Configure Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockRooms.map(room => (
          <div key={room.id} className="bg-white shadow rounded-xl p-4 space-y-2 border border-gray-200">
            <h2 className="text-xl font-semibold">{room.name}</h2>
            <p className="text-sm text-gray-600">Calendar: {room.calendar}</p>
            <p className="text-sm text-gray-600">Video System: {room.system}</p>
            <div className="space-x-2">
              <span className="text-sm px-2 py-1 rounded bg-green-100 text-green-800">OBTP: {room.features.obtp ? "✔️" : "❌"}</span>
              <span className="text-sm px-2 py-1 rounded bg-blue-100 text-blue-800">Connect GO: {room.features.connectGo ? "✔️" : "❌"}</span>
              <span className="text-sm px-2 py-1 rounded bg-purple-100 text-purple-800">Lobby: {room.features.lobbyAdmit ? "✔️" : "❌"}</span>
              <span className="text-sm px-2 py-1 rounded bg-yellow-100 text-yellow-800">Join by ID: {room.features.joinById ? "✔️" : "❌"}</span>
            </div>
            <button className="mt-2 px-4 py-2 bg-primary text-white rounded">Configure</button>
          </div>
        ))}
      </div>
    </main>
  );
}