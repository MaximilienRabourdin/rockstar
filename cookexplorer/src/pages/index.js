import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-primary">Welcome to Cookexplorer</h2>
            <button className="ml-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-600">Get Started</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
