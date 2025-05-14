const itineraries = [
  {
    id: 1,
    title: "Weekend in Paris",
    location: "France",
    duration: "3 Days",
    cost: "$800",
    type: "Cultural",
    image: "https://source.unsplash.com/400x300/?paris",
  },
  {
    id: 2,
    title: "Beach Escape in Bali",
    location: "Indonesia",
    duration: "5 Days",
    cost: "$1200",
    type: "Relaxing",
    image: "https://source.unsplash.com/400x300/?paris"
,
  },
  {
    id: 3,
    title: "Hiking the Rockies",
    location: "Canada",
    duration: "7 Days",
    cost: "$1500",
    type: "Adventure",
    image: "https://source.unsplash.com/400x300/?paris",
  },
  {
    id: 4,
    title: "Tokyo City Lights",
    location: "Japan",
    duration: "4 Days",
    cost: "$1000",
    type: "Urban",
    image: "https://source.unsplash.com/400x300/?paris"
,
  },
];

function ItineraryList() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Itineraries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {itineraries.map((item) => (
          <div
            key={item.id}
            className="flex bg-white shadow rounded overflow-hidden h-40"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-1/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-between w-2/3">
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.location}</p>
              </div>
              <div className="text-sm text-gray-500">
                <p>Duration: {item.duration}</p>
                <p>Cost: {item.cost}</p>
                <p>Type: {item.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ItineraryList;
