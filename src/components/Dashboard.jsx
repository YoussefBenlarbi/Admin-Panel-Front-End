import React from 'react';
import BuyerProfileChart from './BuyerProfileChart';
import DashboardStatsGrid from './DashboardStatsGrid';
import RecentOrders from './RecentOrders';
import PopularProducts from './PopularProducts';
import TransactionsChart from './TransactionsChart';
function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionsChart />
                <BuyerProfileChart/>
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders/>
				<PopularProducts/>
			</div>
		</div>
	);
}

export default Dashboard;
