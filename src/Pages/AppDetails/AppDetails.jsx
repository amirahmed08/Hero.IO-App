import React, { useState, useEffect } from 'react'
import starImg from '../../assets/icon-ratings.png'
import downloadImg from '../../assets/icon-downloads.png'
import likeImg from '../../assets/icon-review.png'
import { useLoaderData, useParams } from 'react-router'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { addInstalledApp } from '../../Utility/Utility'

const RatingsGraph = ({ ratings }) => {
    const total = ratings.reduce((sum, r) => sum + r.count, 0);

    const formattedRatings = ratings.map(r => ({
        ...r,
        percent: ((r.count / total) * 100).toFixed(1)
    }));

    return (
        <div className="w-full h-[320px] bg-slate-50 p-6 rounded-2xl shadow-inner">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Ratings Breakdown</h3>

           <ResponsiveContainer width="100%" height={260}>  
                <BarChart
                    layout="vertical"
                    data={formattedRatings}
                    margin={{ top: 10, right: 30, left: 40, bottom: 5 }}
                >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="count" barSize={18} fill='#FF8811'  radius={[10, 10, 10, 10]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

const AppDetails = () => {
    const [isInstalled, setIsInstalled]=useState(false)
    const { id } = useParams();
    useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("AppDetails")) || [];
  setIsInstalled(stored.includes(parseInt(id)));
}, [id]);

    const data = useLoaderData();
    const singleAppData = data?.find(app => app.id === parseInt(id));

    const {
        title,
        image,
        companyName,
        size,
        description,
        reviews,
        ratingAvg,
        downloads,
        ratings = []
    } = singleAppData || {};

    if (!singleAppData) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
                Loading...
            </div>
        );
    }
   const handleInstalledApp = (appId) => {
  addInstalledApp(parseInt(appId));

  const stored = JSON.parse(localStorage.getItem("AppsDetails")) || [];
  setIsInstalled(stored.includes(parseInt(appId)));
};

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 lg:p-12 border border-white/50 space-y-8">

                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-2xl blur-xl animate-pulse"></div>
                            <img
                                className="relative z-10 h-64 w-64 lg:h-72 lg:w-72 object-cover rounded-2xl shadow-2xl ring-4 ring-white/50 hover:scale-105 transition-all duration-500"
                                src={image}
                                alt={title}
                            />
                        </div>

                        <div className="flex-1 space-y-6">
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent leading-tight">
                                    {title}
                                </h1>
                                <p className="text-xl text-slate-500 font-semibold mt-2">
                                    {companyName}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200">

                                <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-white/80 hover:bg-indigo-50/50 transition-all duration-300 group hover:scale-105">
                                    <img className="h-12 w-12 mb-2 group-hover:scale-110 transition-transform"
                                        src={downloadImg}
                                        alt="Downloads" />
                                    <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">Downloads</p>
                                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                                        {downloads.toLocaleString()}
                                    </h2>
                                </div>

                                <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-white/80 hover:bg-yellow-50/50 transition-all duration-300 group hover:scale-105">
                                    <img className="h-12 w-12 mb-2 group-hover:scale-110 transition-transform"
                                        src={starImg}
                                        alt="Rating" />
                                    <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">Avg Rating</p>
                                    <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                                        {ratingAvg}
                                    </h2>
                                </div>

                                <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-white/80 hover:bg-emerald-50/50 transition-all duration-300 group hover:scale-105">
                                    <img className="h-12 w-12 mb-2 group-hover:scale-110 transition-transform"
                                        src={likeImg}
                                        alt="Reviews" />
                                    <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">Reviews</p>
                                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                                        {reviews.toLocaleString()}
                                    </h2>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button onClick={()=>handleInstalledApp(id)} className="group relative bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-bold px-10 py-5 rounded-2xl text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                    <span className="relative z-10 flex items-center gap-3">
                                        {isInstalled?"Uninstall":`Install Now (${size} MB)`}
                                        <span className="bg-white/20 w-2 h-2 rounded-full group-hover:w-8 group-hover:h-8 transition-all duration-500"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* App Description */}
                    <div className="pt-8 border-t border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">About {title}</h3>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    </div>

                    {/* Ratings Distribution Graph - DYNAMIC */}
                    <div className="pt-8 border-t border-slate-200">
                        <RatingsGraph ratings={ratings} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AppDetails;
