'use client';
import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const FundPerformanceChart = () => {
    const [activeYear, setActiveYear] = useState('All');

    // Fund performance data from the image
    const fundData = [
        { date: '02/01/2021', fundValue: 1, monthlyReturn: 0.00 },
        { date: '03/01/2021', fundValue: 1.5, monthlyReturn: 50.35 },
        { date: '04/01/2021', fundValue: 1.8, monthlyReturn: 19.72 },
        { date: '03/31/2022', fundValue: 1.75, monthlyReturn: 2.60 },
        { date: '04/29/2022', fundValue: 1.76, monthlyReturn: -6.20 },
        { date: '05/05/2022', fundValue: 2.29, monthlyReturn: 30.91 },
        { date: '06/20/2022', fundValue: 1.87, monthlyReturn: -8.75 },
        { date: '08/01/2022', fundValue: 1.86, monthlyReturn: -0.44 },
        { date: '09/12/2022', fundValue: 1.87, monthlyReturn: 2.92 },
        { date: '10/28/2022', fundValue: 1.81, monthlyReturn: 3.11 },
        { date: '11/25/2022', fundValue: 1.71, monthlyReturn: -5.19 },
        { date: '12/12/2022', fundValue: 1.71, monthlyReturn: -0.22 },
        { date: '01/03/2023', fundValue: 1.72, monthlyReturn: 0.46 },
        { date: '01/29/2023', fundValue: 1.86, monthlyReturn: 8.32 },
        { date: '02/17/2023', fundValue: 1.89, monthlyReturn: 1.82 },
        { date: '03/13/2023', fundValue: 2.62, monthlyReturn: 38.63 },
        { date: '04/30/2023', fundValue: 2.11, monthlyReturn: -17.34 },
        { date: '05/17/2023', fundValue: 2.06, monthlyReturn: -2.26 },
        { date: '06/01/2023', fundValue: 2.03, monthlyReturn: -1.15 },
        { date: '07/01/2023', fundValue: 2.16, monthlyReturn: 6.20 },
        { date: '08/01/2023', fundValue: 2.33, monthlyReturn: 7.83 },
        { date: '09/01/2023', fundValue: 1.82, monthlyReturn: -21.67 },
        { date: '10/01/2023', fundValue: 1.8, monthlyReturn: -1.14 },
        { date: '11/01/2023', fundValue: 2.04, monthlyReturn: 13.06 },
        { date: '12/01/2023', fundValue: 2.7, monthlyReturn: 32.35 },
        { date: '01/01/2024', fundValue: 2.97, monthlyReturn: 10.17 },
        { date: '02/01/2024', fundValue: 2.79, monthlyReturn: -6.04 },
        { date: '03/01/2024', fundValue: 3.29, monthlyReturn: 17.62 },
        { date: '04/01/2024', fundValue: 3.64, monthlyReturn: 10.79 },
        { date: '05/01/2024', fundValue: 3.64, monthlyReturn: 0.05 },
        { date: '06/01/2024', fundValue: 3.7, monthlyReturn: 1.65 },
        { date: '07/01/2024', fundValue: 3.41, monthlyReturn: -8.01 },
        { date: '08/01/2024', fundValue: 2.85, monthlyReturn: -16.40 },
        { date: '09/01/2024', fundValue: 2.63, monthlyReturn: -7.73 },
        { date: '10/01/2024', fundValue: 2.74, monthlyReturn: 4.41 },
        { date: '11/01/2024', fundValue: 2.57, monthlyReturn: -6.36 },
        { date: '12/01/2024', fundValue: 2.82, monthlyReturn: 9.79 },
        { date: '01/01/2025', fundValue: 2.68, monthlyReturn: -5.01 },
        { date: '02/01/2025', fundValue: 2.7, monthlyReturn: 0.60 },
        { date: '03/01/2025', fundValue: 2.31, monthlyReturn: -14.34 },
        { date: '04/01/2025', fundValue: 2.31, monthlyReturn: -0.15 }
    ];

    // Calculate performance metrics
    const performanceMetrics = useMemo(() => {
        // Parse dates properly for comparison
        const parsedData = fundData.map(item => ({
            ...item,
            parsedDate: new Date(item.date)
        })).sort((a, b) => a.parsedDate - b.parsedDate);

        // Get most recent entry
        const latest = parsedData[parsedData.length - 1];
        const latestDate = latest.parsedDate;

        // Past month performance (most recent entry compared to ~30 days ago)
        const oneMonthAgoDate = new Date(latestDate);
        oneMonthAgoDate.setDate(oneMonthAgoDate.getDate() - 30);
        const oneMonthAgoIndex = findClosestDateIndex(parsedData, oneMonthAgoDate);
        const pastMonthPerformance = calculatePerformance(
            parsedData[oneMonthAgoIndex].fundValue,
            latest.fundValue
        );

        // Past 90 days performance
        const ninetyDaysAgoDate = new Date(latestDate);
        ninetyDaysAgoDate.setDate(ninetyDaysAgoDate.getDate() - 90);
        const ninetyDaysAgoIndex = findClosestDateIndex(parsedData, ninetyDaysAgoDate);
        const pastNinetyDaysPerformance = calculatePerformance(
            parsedData[ninetyDaysAgoIndex].fundValue,
            latest.fundValue
        );

        // Past 180 days performance
        const oneEightyDaysAgoDate = new Date(latestDate);
        oneEightyDaysAgoDate.setDate(oneEightyDaysAgoDate.getDate() - 180);
        const oneEightyDaysAgoIndex = findClosestDateIndex(parsedData, oneEightyDaysAgoDate);
        const pastOneEightyDaysPerformance = calculatePerformance(
            parsedData[oneEightyDaysAgoIndex].fundValue,
            latest.fundValue
        );

        // Calculate yearly performances
        const yearlyPerformances = {};
        const years = ['2021', '2022', '2023', '2024', '2025'];

        years.forEach(year => {
            const yearData = parsedData.filter(item => item.parsedDate.getFullYear() === parseInt(year));
            if (yearData.length > 0) {
                const firstValue = yearData[0].fundValue;
                const lastValue = yearData[yearData.length - 1].fundValue;
                yearlyPerformances[year] = calculatePerformance(firstValue, lastValue);
            } else {
                yearlyPerformances[year] = null;
            }
        });

        return {
            pastMonth: pastMonthPerformance,
            pastNinetyDays: pastNinetyDaysPerformance,
            pastOneEightyDays: pastOneEightyDaysPerformance,
            yearly: yearlyPerformances
        };
    }, [fundData]);

    // Helper function to find closest date index
    function findClosestDateIndex(data, targetDate) {
        let closestIndex = 0;
        let minDiff = Infinity;

        data.forEach((item, index) => {
            const diff = Math.abs(item.parsedDate - targetDate);
            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = index;
            }
        });

        return closestIndex;
    }

    // Helper function to calculate percentage performance
    function calculatePerformance(startValue, endValue) {
        return ((endValue - startValue) / startValue * 100).toFixed(2);
    }

    // Group by year for filtering
    const years = ['All', '2021', '2022', '2023', '2024', '2025'];
    const dataByYear = {
        '2021': fundData.filter(item => item.date.includes('2021')),
        '2022': fundData.filter(item => item.date.includes('2022')),
        '2023': fundData.filter(item => item.date.includes('2023')),
        '2024': fundData.filter(item => item.date.includes('2024')),
        '2025': fundData.filter(item => item.date.includes('2025')),
        'All': fundData
    };

    // Format month names
    const getMonthName = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleString('default', { month: 'short' });
    };

    // Generate trend line data based on start and end points
    const startValue = fundData[0].fundValue;
    const endValue = fundData[fundData.length - 1].fundValue;
    const trendLineData = fundData.map((item, index) => {
        return {
            ...item,
            trend: startValue + (endValue - startValue) * (index / (fundData.length - 1))
        };
    });

    // Custom tooltip component
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-300 rounded shadow-md">
                    <p className="font-bold">{payload[0].payload.date}</p>
                    <p className="text-blue-600">Fund Value: {payload[0].value}x</p>
                    <p className={`${payload[0].payload.monthlyReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        Monthly Return: {payload[0].payload.monthlyReturn}%
                    </p>
                </div>
            );
        }
        return null;
    };

    // Display active data based on selected year
    const activeData = dataByYear[activeYear];

    return (
        <div className="bg-gradient-to-b from-[#271EA4] via-[#4D3BB7] to-[#7463CB] p-6 text-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4 ml-4">Fund Performance</h1>

            {/* Performance Summary Section */}
            <div className="flex justify-center mb-6 px-2">
                <div className=" rounded-lg p-3 shadow-inner w-full max-w-lg">
                    <h2 className="text-sm font-semibold opacity-80 text-center">YEARLY PERFORMANCE</h2>
                    <div className="grid grid-cols-5 gap-3 mt-2">
                        {Object.entries(performanceMetrics.yearly).map(([year, perf]) => (
                            perf !== null && (
                                <div key={year} className="text-center">
                                    <div className="text-sm font-bold">{year}</div>
                                    <div className={`text-lg font-bold ${parseFloat(perf) >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                                        {parseFloat(perf) >= 0 ? '+' : ''}{perf}%
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="h-72 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={activeYear === 'All' ? trendLineData : dataByYear[activeYear]} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                        <XAxis
                            dataKey="date"
                            tick={{ fill: 'white', fontSize: 12 }}
                            interval={activeYear === 'All' ? 8 : 1}
                            axisLine={{ stroke: 'white' }}
                            tickFormatter={(tick) => {
                                const date = new Date(tick);
                                if (activeYear === 'All') {
                                    return date.getFullYear();
                                }
                                return getMonthName(tick);
                            }}
                            label={{ value: 'Year', position: 'insideBottomRight', offset: -10, fill: 'white' }}
                        />
                        <YAxis
                            domain={[0, 4]}
                            ticks={[0, 1, 2, 3, 4]}
                            tick={{ fill: 'white' }}
                            axisLine={{ stroke: 'white' }}
                            label={{ value: 'Growth Multiple (×)', angle: -90, position: 'insideLeft', fill: 'white', dx: -10 }}
                        />
                        <Tooltip content={<CustomTooltip />} />

                        {/* Reference line at 1.0 (starting value) */}
                        <ReferenceLine y={1} stroke="rgba(255,255,255,0.5)" strokeDasharray="3 3" />

                        <Line
                            type="monotone"
                            dataKey="fundValue"
                            stroke="white"
                            strokeWidth={3}
                            dot={activeYear !== 'All' ? { fill: 'white', stroke: 'blue', strokeWidth: 2, r: 3 } : false}
                            activeDot={{ r: 8, fill: 'white', stroke: 'blue' }}
                            name="Fund Value"
                        />
                        {activeYear === 'All' && (
                            <Line
                                type="monotone"
                                dataKey="trend"
                                stroke="rgba(255,255,255,0.5)"
                                strokeWidth={1}
                                dot={false}
                                activeDot={false}
                                name="Trend Line"
                            />
                        )}
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Year filter tabs */}
            <div className="flex justify-center mb-4 gap-2">
                {years.map(year => (
                    <button
                        key={year}
                        className={`px-4 py-1 rounded ${activeYear === year ? 'bg-white text-blue-700 font-bold' : 'bg-blue-600 text-white'}`}
                        onClick={() => setActiveYear(year)}
                    >
                        {year}
                    </button>
                ))}
            </div>

            {/* Compact monthly data */}
            <div className="mt-6 p-3 rounded-lg shadow-inner overflow-x-auto">
                <h2 className="text-lg font-bold mb-2">Monthly Performance Data</h2>
                <div className="flex flex-wrap gap-1">
                    {activeData.map((item, index) => (
                        <div key={index} className="flex-shrink-0 bg-blue-800 rounded p-2 w-20">
                            <div className="text-xs font-medium">{getMonthName(item.date)} {item.date.split('/')[2]}</div>
                            <div className={`text-sm font-bold ${item.monthlyReturn >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                                {item.monthlyReturn > 0 ? '+' : ''}{item.monthlyReturn}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-sm mt-4 text-center text-white">
                <p>Current value: <span className="font-bold">{fundData[fundData.length - 1].fundValue}x</span> initial investment</p>
                <p className="opacity-70 mt-1">Fund performance from February 2021 to February 2025</p>
            </div>
        </div>
    );
};

export default FundPerformanceChart;
