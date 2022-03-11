import React from 'react';
import './dashboard.styles.css'
import DailyCards  from '../../components/Cards/card.component';
import Sidenav from '../../components/SideNav/sideNav.component';

const Dashboard = () => {
	return (
		<div>
			<Sidenav />
			<div className='dashboard'>
				<div className='dashboard_wrap'>
					<h3>My 21 days Challenge</h3>
					<a href='#r'>+ Create a challenge</a>
				</div>

				<div className='dashboard_main'>
					<div className='dashboard_day'>Day 1</div>

					<div className='dashboard_progress'>
						<h2>My Daily activities </h2>
						<a href='#w'>+ Track your progress</a>
					</div>

					<div className='dashboard_row-1'>
						<div className='dashboard_card'>
							<DailyCards />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
