import React from 'react';
import { Clock, Target, Package, Users } from 'lucide-react';

export default function ProjectStats() {
  const [stats, setStats] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchStats = async () => {
      const { data } = await supabase
        .from('project_stats')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <section id="stats" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Global Saree <span className="text-blue-600">Box</span> Impact in Numbers
          </h2>
          <p className="mt-4 text-xl text-gray-600">
          Delivering excellence at a competitive saree boxes wholesale price to clients worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900">15+</div>
            <div className="mt-2 text-gray-600">Industry Experience</div>
          </div>

          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900">40+</div>
            <div className="mt-2 text-gray-600">Successful Deliveries</div>
          </div>

          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-4">
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900">15+</div>
            <div className="mt-2 text-gray-600">Box Varieties</div>
          </div>

          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900">100+</div>
            <div className="mt-2 text-gray-600">Satisfied Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}