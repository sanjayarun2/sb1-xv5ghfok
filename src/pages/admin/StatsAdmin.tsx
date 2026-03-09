import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit, Trash2 } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function StatsAdmin() {
  const [stats, setStats] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStat, setCurrentStat] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const { data } = await supabase
      .from('project_stats')
      .select('*')
      .order('created_at', { ascending: true });
    if (data) setStats(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const statData = {
      stat_name: formData.get('stat_name'),
      value: parseInt(formData.get('value')),
      icon_name: formData.get('icon_name'),
      description: formData.get('description')
    };

    if (isEditing && currentStat) {
      await supabase
        .from('project_stats')
        .update(statData)
        .eq('id', currentStat.id);
    } else {
      await supabase
        .from('project_stats')
        .insert([statData]);
    }

    fetchStats();
    setIsEditing(false);
    setCurrentStat(null);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Project Stats Management</h2>
        <button
          onClick={() => {
            setCurrentStat(null);
            setIsEditing(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Stat
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <input
            name="stat_name"
            defaultValue={currentStat?.stat_name}
            placeholder="Stat Name (e.g., Total Projects)"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="value"
            type="number"
            defaultValue={currentStat?.value}
            placeholder="Value (e.g., 100)"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="icon_name"
            defaultValue={currentStat?.icon_name}
            placeholder="Icon Name (e.g., Package)"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="description"
            defaultValue={currentStat?.description}
            placeholder="Description"
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setCurrentStat(null);
              }}
              className="px-4 py-2 text-gray-600 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {currentStat ? 'Update' : 'Add'} Stat
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {stats.map((stat) => {
          const IconComponent = (Icons as any)[stat.icon_name] || Icons.Activity;
          return (
            <div
              key={stat.id}
              className="flex items-center justify-between p-4 border rounded"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{stat.stat_name}</h3>
                  <p className="text-sm text-gray-600">{stat.value}+ {stat.description}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setCurrentStat(stat);
                    setIsEditing(true);
                  }}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                >
                  <Edit className="h-5 w-5" />
                </button>
                <button
                  onClick={async () => {
                    if (confirm('Are you sure you want to delete this stat?')) {
                      await supabase
                        .from('project_stats')
                        .delete()
                        .eq('id', stat.id);
                      fetchStats();
                    }
                  }}
                  className="p-2 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}