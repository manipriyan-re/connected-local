'use client';

import TableDelete from '@/components/shared/TableDelete/TableDelete';

const DeepLogEventHistoryContent = ({ showSideBar }) => {
	const headerData = [
		'VIN',
		'Event ID',
		'DTC ID',
		'Type of Event',
		'Security',
		'Occurrence Time',
		'Sync Status',
		'Action',
	];

	const tableData = [
		{
			vin: '12345ABC',
			eventId: 'EVT001',
			dtcId: 'DTC123',
			type: 'D0',
			security: 'High',
			occurrenceTime: '2025-01-20 10:00:00',
			syncStatus: 'Synced',
		},
		{
			vin: '67890XYZ',
			eventId: 'EVT002',
			dtcId: 'DTC456',
			type: 'D1',
			security: 'Low',
			occurrenceTime: '2025-01-19 14:30:00',
			syncStatus: 'Sync In Progress',
		},
		{
			vin: '67890XYZ',
			eventId: 'EVT002',
			dtcId: 'DTC456',
			type: 'D1',
			security: 'Low',
			occurrenceTime: '2025-01-19 14:30:00',
			syncStatus: 'Sync In Progress',
		},
		{
			vin: '67890XYZ',
			eventId: 'EVT002',
			dtcId: 'DTC456',
			type: 'D1',
			security: 'Low',
			occurrenceTime: '2025-01-19 14:30:00',
			syncStatus: 'Sync In Progress',
		},
		{
			vin: '67890XYZ',
			eventId: 'EVT002',
			dtcId: 'DTC456',
			type: 'D1',
			security: 'Low',
			occurrenceTime: '2025-01-19 14:30:00',
			syncStatus: 'Sync In Progress',
		},
		{
			vin: '67890XYZ',
			eventId: 'EVT002',
			dtcId: 'DTC456',
			type: 'D1',
			security: 'Low',
			occurrenceTime: '2025-01-19 14:30:00',
			syncStatus: 'Sync In Progress',
		},
	];

	const dynamicKeys = [
		'vin',
		'eventId',
		'dtcId',
		'type',
		'security',
		'occurrenceTime',
		'syncStatus',
	];

	return (
		<div
			className={`deep_log_event_history_content ${showSideBar ? 'shrinked' : ''}`}>
			<TableDelete
				data={{ tableData, headerData }}
				dynamicKeys={dynamicKeys}
				showDelete={false}
				showActions={'SyncUp'}
				showFilteredRecords={true}
				showTableSearch={true}
				showFilterIcon={true}
				showDownloadAction={true}
			/>
		</div>
	);
};

export default DeepLogEventHistoryContent;
