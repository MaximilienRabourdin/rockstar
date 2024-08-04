import Layout from '../components/Layout';

export default function Menu() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-md">
              <img src="/example-dish.jpg" alt="Dish" className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-4 text-lg font-semibold">Dish Name</h3>
              <p className="mt-2 text-gray-600">Description of the dish.</p>
              <p className="mt-2 font-bold">$12.99</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
