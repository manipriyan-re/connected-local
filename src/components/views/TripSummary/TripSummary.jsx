'use client';
import { useState } from 'react';
import './tripSummary.scss';
import TripReplay from '@/components/shared/TripReplay/TripReplay';
import Image from 'next/image';

const TripSummaryComp = () => {
	const [route, setRoute] = useState([]);

	const badgeData = [
		{
			title: 'Distance covered',
			value: '1,65,635 Km',
		},
		{
			title: 'Running time',
			value: '47 min 26 sec',
		},
		{
			title: 'idling time',
			value: '47 min 26 sec',
		},
		{
			title: 'overspeed count',
			value: '6',
		},
		{
			title: 'average speed',
			value: '62 Km/h',
		},
		{
			title: 'top speed',
			value: '74 Km/h',
		},
		{
			title: 'harsh brakes',
			value: '12',
		},
		{
			title: 'harsh acceleration',
			value: '16',
		},
	];

	const tripList = [
		{
			timestamp: '12 Mar 2023, 4:51 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
		{
			timestamp: '12 Mar 2023, 4:52 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
		{
			timestamp: '12 Mar 2023, 4:53 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
		{
			timestamp: '12 Mar 2023, 4:54 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
		{
			timestamp: '12 Mar 2023, 4:55 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
		{
			timestamp: '12 Mar 2023, 4:56 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
		{
			timestamp: '12 Mar 2023, 4:57 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
		{
			timestamp: '12 Mar 2023, 4:58 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
		{
			timestamp: '12 Mar 2023, 4:59 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
		{
			timestamp: '12 Mar 2023, 4:41 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
		{
			timestamp: '12 Mar 2023, 4:42 PM',
			start: 'Oxygen by Urban Tree',
			end: 'Rawa’s Clinic, Panchi Road',
			duration: '1:12',
			distance: '0.6',
		},
	];

	const routeSample = [
		{
			lat: 12.90481,
			lng: 80.22785,
		},
		{
			lat: 12.90498,
			lng: 80.22782,
		},
		{
			lat: 12.90546,
			lng: 80.22784,
		},
		{
			lat: 12.90588,
			lng: 80.22782,
		},
		{
			lat: 12.90603,
			lng: 80.2278,
		},
		{
			lat: 12.90595,
			lng: 80.22777,
		},
		{
			lat: 12.90552,
			lng: 80.22776,
		},
		{
			lat: 12.9049,
			lng: 80.22775,
		},
		{
			lat: 12.90431,
			lng: 80.22783,
		},
		{
			lat: 12.90397,
			lng: 80.22797,
		},
		{
			lat: 12.90382,
			lng: 80.22836,
		},
		{
			lat: 12.90402,
			lng: 80.22894,
		},
		{
			lat: 12.90366,
			lng: 80.22972,
		},
		{
			lat: 12.90387,
			lng: 80.23015,
		},
		{
			lat: 12.90418,
			lng: 80.23077,
		},
		{
			lat: 12.90421,
			lng: 80.23148,
		},
		{
			lat: 12.90444,
			lng: 80.23237,
		},
		{
			lat: 12.90421,
			lng: 80.2327,
		},
		{
			lat: 12.90385,
			lng: 80.23281,
		},
		{
			lat: 12.90342,
			lng: 80.23283,
		},
		{
			lat: 12.90333,
			lng: 80.23287,
		},
		{
			lat: 12.90291,
			lng: 80.23292,
		},
		{
			lat: 12.90236,
			lng: 80.2329,
		},
		{
			lat: 12.9017,
			lng: 80.2326,
		},
		{
			lat: 12.90115,
			lng: 80.23236,
		},
		{
			lat: 12.9009,
			lng: 80.23251,
		},
		{
			lat: 12.90073,
			lng: 80.23323,
		},
		{
			lat: 12.90065,
			lng: 80.23355,
		},
		{
			lat: 12.90032,
			lng: 80.23431,
		},
		{
			lat: 12.89986,
			lng: 80.23549,
		},
		{
			lat: 12.8997,
			lng: 80.23662,
		},
		{
			lat: 12.89961,
			lng: 80.2378,
		},
		{
			lat: 12.89937,
			lng: 80.23917,
		},
		{
			lat: 12.89906,
			lng: 80.24047,
		},
		{
			lat: 12.89878,
			lng: 80.24179,
		},
		{
			lat: 12.89855,
			lng: 80.24309,
		},
		{
			lat: 12.89834,
			lng: 80.24427,
		},
		{
			lat: 12.8981,
			lng: 80.24568,
		},
		{
			lat: 12.89786,
			lng: 80.24683,
		},
		{
			lat: 12.89776,
			lng: 80.24732,
		},
		{
			lat: 12.89736,
			lng: 80.2474,
		},
		{
			lat: 12.89708,
			lng: 80.2479,
		},
		{
			lat: 12.89693,
			lng: 80.24893,
		},
		{
			lat: 12.89682,
			lng: 80.24977,
		},
		{
			lat: 12.89675,
			lng: 80.25037,
		},
		{
			lat: 12.8966,
			lng: 80.25121,
		},
		{
			lat: 12.89643,
			lng: 80.2524,
		},
		{
			lat: 12.89621,
			lng: 80.25264,
		},
		{
			lat: 12.89568,
			lng: 80.25254,
		},
		{
			lat: 12.89551,
			lng: 80.25202,
		},
		{
			lat: 12.89583,
			lng: 80.25096,
		},
		{
			lat: 12.89593,
			lng: 80.25011,
		},
		{
			lat: 12.89602,
			lng: 80.24941,
		},
		{
			lat: 12.89617,
			lng: 80.24846,
		},
		{
			lat: 12.89634,
			lng: 80.24746,
		},
		{
			lat: 12.89627,
			lng: 80.24713,
		},
		{
			lat: 12.89555,
			lng: 80.24704,
		},
		{
			lat: 12.89544,
			lng: 80.24755,
		},
		{
			lat: 12.89483,
			lng: 80.24756,
		},
		{
			lat: 12.89456,
			lng: 80.24834,
		},
		{
			lat: 12.89455,
			lng: 80.24871,
		},
		{
			lat: 12.89451,
			lng: 80.2492,
		},
		{
			lat: 12.89413,
			lng: 80.24955,
		},
		{
			lat: 12.89373,
			lng: 80.24988,
		},
		{
			lat: 12.89358,
			lng: 80.25087,
		},
		{
			lat: 12.89342,
			lng: 80.25145,
		},
		{
			lat: 12.89389,
			lng: 80.25138,
		},
		{
			lat: 12.89458,
			lng: 80.25148,
		},
		{
			lat: 12.89487,
			lng: 80.25202,
		},
		{
			lat: 12.89429,
			lng: 80.25214,
		},
		{
			lat: 12.89346,
			lng: 80.25202,
		},
		{
			lat: 12.89303,
			lng: 80.25199,
		},
		{
			lat: 12.89384,
			lng: 80.25212,
		},
		{
			lat: 12.89478,
			lng: 80.25229,
		},
		{
			lat: 12.89498,
			lng: 80.25164,
		},
		{
			lat: 12.89498,
			lng: 80.25164,
		},
		{
			lat: 12.89498,
			lng: 80.25164,
		},
		{
			lat: 12.8951,
			lng: 80.25045,
		},
		{
			lat: 12.89521,
			lng: 80.24967,
		},
		{
			lat: 12.89533,
			lng: 80.24888,
		},
		{
			lat: 12.89543,
			lng: 80.24799,
		},
		{
			lat: 12.89561,
			lng: 80.24732,
		},
		{
			lat: 12.8954,
			lng: 80.24682,
		},
		{
			lat: 12.89522,
			lng: 80.2466,
		},
		{
			lat: 12.89528,
			lng: 80.24669,
		},
		{
			lat: 12.89586,
			lng: 80.24694,
		},
		{
			lat: 12.8965,
			lng: 80.24709,
		},
		{
			lat: 12.89686,
			lng: 80.24718,
		},
		{
			lat: 12.89742,
			lng: 80.2474,
		},
		{
			lat: 12.89718,
			lng: 80.24738,
		},
		{
			lat: 12.89713,
			lng: 80.24791,
		},
		{
			lat: 12.89701,
			lng: 80.24849,
		},
		{
			lat: 12.89692,
			lng: 80.24889,
		},
		{
			lat: 12.89684,
			lng: 80.24965,
		},
		{
			lat: 12.89678,
			lng: 80.25034,
		},
		{
			lat: 12.8966,
			lng: 80.25141,
		},
		{
			lat: 12.89646,
			lng: 80.25245,
		},
		{
			lat: 12.89621,
			lng: 80.25279,
		},
		{
			lat: 12.89568,
			lng: 80.2525,
		},
		{
			lat: 12.89565,
			lng: 80.25183,
		},
		{
			lat: 12.89588,
			lng: 80.25,
		},
		{
			lat: 12.89597,
			lng: 80.24941,
		},
		{
			lat: 12.89625,
			lng: 80.24745,
		},
		{
			lat: 12.89625,
			lng: 80.24722,
		},
		{
			lat: 12.89553,
			lng: 80.24707,
		},
		{
			lat: 12.89541,
			lng: 80.24755,
		},
		{
			lat: 12.89532,
			lng: 80.24824,
		},
		{
			lat: 12.89526,
			lng: 80.24877,
		},
		{
			lat: 12.89455,
			lng: 80.24868,
		},
		{
			lat: 12.89403,
			lng: 80.24946,
		},
		{
			lat: 12.89372,
			lng: 80.24964,
		},
		{
			lat: 12.89367,
			lng: 80.25025,
		},
		{
			lat: 12.89357,
			lng: 80.25092,
		},
		{
			lat: 12.89431,
			lng: 80.2514,
		},
		{
			lat: 12.89469,
			lng: 80.25159,
		},
		{
			lat: 12.89474,
			lng: 80.25212,
		},
		{
			lat: 12.89424,
			lng: 80.25219,
		},
		{
			lat: 12.89328,
			lng: 80.25204,
		},
		{
			lat: 12.8931,
			lng: 80.25201,
		},
		{
			lat: 12.89394,
			lng: 80.25217,
		},
		{
			lat: 12.89461,
			lng: 80.25224,
		},
		{
			lat: 12.89475,
			lng: 80.25193,
		},
		{
			lat: 12.89491,
			lng: 80.25102,
		},
		{
			lat: 12.89502,
			lng: 80.25031,
		},
		{
			lat: 12.8951,
			lng: 80.24964,
		},
		{
			lat: 12.89523,
			lng: 80.249,
		},
		{
			lat: 12.89533,
			lng: 80.24832,
		},
		{
			lat: 12.89548,
			lng: 80.2475,
		},
		{
			lat: 12.8955,
			lng: 80.24714,
		},
		{
			lat: 12.89566,
			lng: 80.24701,
		},
		{
			lat: 12.89639,
			lng: 80.24715,
		},
		{
			lat: 12.89671,
			lng: 80.2472,
		},
		{
			lat: 12.89709,
			lng: 80.24722,
		},
		{
			lat: 12.89745,
			lng: 80.24729,
		},
		{
			lat: 12.89784,
			lng: 80.24653,
		},
		{
			lat: 12.89811,
			lng: 80.24515,
		},
		{
			lat: 12.8985,
			lng: 80.24294,
		},
		{
			lat: 12.89871,
			lng: 80.24173,
		},
		{
			lat: 12.89892,
			lng: 80.2404,
		},
		{
			lat: 12.89913,
			lng: 80.23922,
		},
		{
			lat: 12.89926,
			lng: 80.23847,
		},
		{
			lat: 12.89941,
			lng: 80.2376,
		},
		{
			lat: 12.89958,
			lng: 80.23658,
		},
		{
			lat: 12.89977,
			lng: 80.23553,
		},
		{
			lat: 12.90042,
			lng: 80.23364,
		},
		{
			lat: 12.90064,
			lng: 80.23297,
		},
		{
			lat: 12.90074,
			lng: 80.2326,
		},
		{
			lat: 12.9008,
			lng: 80.23229,
		},
		{
			lat: 12.90084,
			lng: 80.23174,
		},
		{
			lat: 12.90086,
			lng: 80.23122,
		},
		{
			lat: 12.9009,
			lng: 80.23063,
		},
		{
			lat: 12.90094,
			lng: 80.23029,
		},
		{
			lat: 12.90101,
			lng: 80.22992,
		},
		{
			lat: 12.90101,
			lng: 80.22992,
		},
		{
			lat: 12.90102,
			lng: 80.2295,
		},
		{
			lat: 12.90103,
			lng: 80.22908,
		},
		{
			lat: 12.90094,
			lng: 80.2288,
		},
		{
			lat: 12.90078,
			lng: 80.22814,
		},
		{
			lat: 12.90011,
			lng: 80.22797,
		},
		{
			lat: 12.89936,
			lng: 80.22794,
		},
		{
			lat: 12.8987,
			lng: 80.22791,
		},
		{
			lat: 12.8979,
			lng: 80.22786,
		},
		{
			lat: 12.89741,
			lng: 80.22781,
		},
		{
			lat: 12.89684,
			lng: 80.22773,
		},
		{
			lat: 12.89676,
			lng: 80.22767,
		},
		{
			lat: 12.89739,
			lng: 80.22763,
		},
		{
			lat: 12.89827,
			lng: 80.22773,
		},
		{
			lat: 12.89914,
			lng: 80.22777,
		},
		{
			lat: 12.89989,
			lng: 80.22779,
		},
		{
			lat: 12.90029,
			lng: 80.22784,
		},
		{
			lat: 12.90068,
			lng: 80.22789,
		},
		{
			lat: 12.90095,
			lng: 80.2277,
		},
		{
			lat: 12.901,
			lng: 80.22696,
		},
		{
			lat: 12.90105,
			lng: 80.22631,
		},
		{
			lat: 12.90104,
			lng: 80.22557,
		},
		{
			lat: 12.90098,
			lng: 80.22501,
		},
		{
			lat: 12.90097,
			lng: 80.22436,
		},
		{
			lat: 12.90102,
			lng: 80.22397,
		},
		{
			lat: 12.90108,
			lng: 80.22454,
		},
		{
			lat: 12.90106,
			lng: 80.22613,
		},
		{
			lat: 12.90105,
			lng: 80.22659,
		},
		{
			lat: 12.901,
			lng: 80.22731,
		},
		{
			lat: 12.90104,
			lng: 80.22766,
		},
		{
			lat: 12.90159,
			lng: 80.2278,
		},
		{
			lat: 12.9025,
			lng: 80.22789,
		},
		{
			lat: 12.90279,
			lng: 80.22785,
		},
		{
			lat: 12.9028,
			lng: 80.22784,
		},
		{
			lat: 12.9057,
			lng: 80.22806,
		},
		{
			lat: 12.90617,
			lng: 80.22843,
		},
		{
			lat: 12.90704,
			lng: 80.2286,
		},
		{
			lat: 12.90838,
			lng: 80.22888,
		},
		{
			lat: 12.90937,
			lng: 80.22876,
		},
		{
			lat: 12.90994,
			lng: 80.22886,
		},
		{
			lat: 12.91019,
			lng: 80.22891,
		},
		{
			lat: 12.91028,
			lng: 80.22915,
		},
		{
			lat: 12.90957,
			lng: 80.22915,
		},
		{
			lat: 12.90911,
			lng: 80.2289,
		},
		{
			lat: 12.90902,
			lng: 80.22891,
		},
		{
			lat: 12.90888,
			lng: 80.22928,
		},
		{
			lat: 12.90881,
			lng: 80.2298,
		},
		{
			lat: 12.90881,
			lng: 80.23006,
		},
		{
			lat: 12.90872,
			lng: 80.23006,
		},
		{
			lat: 12.90818,
			lng: 80.23027,
		},
		{
			lat: 12.90768,
			lng: 80.23043,
		},
		{
			lat: 12.90726,
			lng: 80.2304,
		},
		{
			lat: 12.90697,
			lng: 80.23039,
		},
		{
			lat: 12.9045,
			lng: 80.23164,
		},
		{
			lat: 12.90447,
			lng: 80.23226,
		},
		{
			lat: 12.90433,
			lng: 80.23264,
		},
		{
			lat: 12.90415,
			lng: 80.23275,
		},
		{
			lat: 12.90385,
			lng: 80.23274,
		},
		{
			lat: 12.90315,
			lng: 80.23287,
		},
		{
			lat: 12.90317,
			lng: 80.23334,
		},
		{
			lat: 12.9035,
			lng: 80.23324,
		},
		{
			lat: 12.9037,
			lng: 80.23294,
		},
		{
			lat: 12.90365,
			lng: 80.23282,
		},
		{
			lat: 12.90394,
			lng: 80.23249,
		},
		{
			lat: 12.90411,
			lng: 80.23236,
		},
		{
			lat: 12.90391,
			lng: 80.23286,
		},
		{
			lat: 12.90398,
			lng: 80.23303,
		},
		{
			lat: 12.90335,
			lng: 80.23297,
		},
		{
			lat: 12.9031,
			lng: 80.23297,
		},
		{
			lat: 12.90313,
			lng: 80.23289,
		},
		{
			lat: 12.90313,
			lng: 80.23289,
		},
		{
			lat: 12.90263,
			lng: 80.23291,
		},
		{
			lat: 12.9027,
			lng: 80.23295,
		},
		{
			lat: 12.90304,
			lng: 80.23305,
		},
		{
			lat: 12.9037,
			lng: 80.23321,
		},
		{
			lat: 12.9038,
			lng: 80.23296,
		},
		{
			lat: 12.90395,
			lng: 80.23258,
		},
		{
			lat: 12.90406,
			lng: 80.2322,
		},
		{
			lat: 12.90451,
			lng: 80.23203,
		},
		{
			lat: 12.90449,
			lng: 80.23137,
		},
		{
			lat: 12.90422,
			lng: 80.23048,
		},
		{
			lat: 12.90419,
			lng: 80.22936,
		},
		{
			lat: 12.90424,
			lng: 80.22845,
		},
		{
			lat: 12.9039,
			lng: 80.22819,
		},
		{
			lat: 12.90266,
			lng: 80.22814,
		},
		{
			lat: 12.90146,
			lng: 80.22812,
		},
		{
			lat: 12.90068,
			lng: 80.22823,
		},
		{
			lat: 12.90025,
			lng: 80.22808,
		},
		{
			lat: 12.89993,
			lng: 80.22785,
		},
		{
			lat: 12.89969,
			lng: 80.22784,
		},
		{
			lat: 12.89884,
			lng: 80.22779,
		},
		{
			lat: 12.89822,
			lng: 80.22784,
		},
		{
			lat: 12.89768,
			lng: 80.22773,
		},
		{
			lat: 12.89692,
			lng: 80.22766,
		},
		{
			lat: 12.89712,
			lng: 80.22767,
		},
		{
			lat: 12.89747,
			lng: 80.22757,
		},
		{
			lat: 12.89784,
			lng: 80.2276,
		},
		{
			lat: 12.89837,
			lng: 80.22762,
		},
		{
			lat: 12.89912,
			lng: 80.22761,
		},
		{
			lat: 12.89954,
			lng: 80.2275,
		},
		{
			lat: 12.89975,
			lng: 80.22749,
		},
		{
			lat: 12.89987,
			lng: 80.22747,
		},
		{
			lat: 12.90021,
			lng: 80.22753,
		},
		{
			lat: 12.90052,
			lng: 80.2275,
		},
		{
			lat: 12.90087,
			lng: 80.22759,
		},
		{
			lat: 12.90144,
			lng: 80.22759,
		},
		{
			lat: 12.90223,
			lng: 80.22753,
		},
		{
			lat: 12.90285,
			lng: 80.22769,
		},
		{
			lat: 12.90281,
			lng: 80.22744,
		},
	];

	const loadTrip = () => {
		setRoute(routeSample);
	};

	return (
		<>
			<div className="grid grid-cols-12">
				<div className="col-span-4 pt-2 px-3">
					<section
						style={{
							background: 'var(--background-color)',
							border: '1px solid var(--color-3)',
							borderRadius: '12px',
						}}
						className="flex items-center justify-between px-3 py-2">
						<div>
							<p className="title-15" style={{ color: 'var(--color-4)' }}>
								VIN
							</p>
							<span className="subtitle-16" style={{ color: '#0088FF' }}>
								ME3J3E5FMR2000041
							</span>
						</div>
						<div>
							<p className="title-15" style={{ color: 'var(--color-4)' }}>
								Model
							</p>
							<span className="subtitle-16">Super Meteor 650</span>
						</div>
					</section>
					<section className="mt-4">
						<h2 className="subtitle-16">Trips Found ({tripList.length})</h2>
						<ul
							className="trip-list overflow-y-auto default-scroll-5 mt-2"
							style={{ height: 'calc(100vh - 19.5rem)' }}>
							{tripList.map((trip, i) => (
								<li
									key={trip.timestamp}
									className="flex items-center justify-between cursor-pointer"
									onClick={() => loadTrip()}>
									<section className="h-8">
										<input type="radio" id={`a${i}`} name="tripname" />{' '}
										<label htmlFor={`a${i}`}></label>
									</section>
									<section
										className="pr-4"
										style={{ width: 'calc(100% - 3rem)' }}>
										<div className="flex items-center justify-between">
											<p className="timeStamp">{trip.timestamp}</p>
											<div className="flex items-center">
												<p
													className="flex items-center mr-2"
													style={{
														fontSize: '0.8rem',
														color: 'var(--color-4)',
													}}>
													<Image
														className="mr-1"
														src="/images/timer-label.svg"
														width={15}
														height={15}
														alt="duration"
													/>{' '}
													{trip.duration} Hrs
												</p>
												<p
													className="flex items-center"
													style={{
														fontSize: '0.8rem',
														color: 'var(--color-4)',
													}}>
													<Image
														className="mr-1"
														src="/images/pin-label.svg"
														width={15}
														height={15}
														alt="distance"
													/>{' '}
													{trip.distance} kms
												</p>
											</div>
										</div>
										<div className="address-div">
											<div
												className="trip-add"
												style={{
													fontSize: '0.75rem',
													color: 'var(--color-4)',
												}}>
												{trip.start}
												<div className="top-circle"></div>
											</div>
											<div
												className="trip-add"
												style={{
													fontSize: '0.75rem',
													color: 'var(--color-4)',
												}}>
												{trip.end}
												<div className="bottom-circle"></div>
											</div>
										</div>
									</section>
								</li>
							))}
						</ul>
					</section>
				</div>
				<div className="col-span-8 pt-2 pl-3">
					<div className="flex flex-wrap default-scroll-5 h-[11.7rem] overflow-y-auto">
						{badgeData.map((data) => (
							<div key={data.title} className="tripDetails px-4 py-2">
								<p className="title-14">{data.title}</p>
								<span
									className="title-15"
									style={{ color: 'var(--text-color)' }}>
									{data.value}
								</span>
							</div>
						))}
					</div>
					<div
						className="w-full relative"
						style={{ height: 'calc(100vh - 22.9rem)' }}>
						<TripReplay route={route} />
						{/* <GoogleMapComp sendMap={getMap} />
            {
                showTrip
                &&
                <div className="absolute bottom-0 replay-controls w-full h-[2.5rem]">
                  <div className="flex items-center justify-between h-full py-1 px-4">
                    {isPlay != "start" ? (
                      <div
                        className="p-2"
                        style={{
                          border: "1px solid var(--color-2)",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          style={{ height: "0.75rem", cursor: "pointer" }}
                          onClick={playTrip}
                          src="/images/play.svg"
                        />
                      </div>
                    ) : (
                      <div
                        className="p-2"
                        style={{
                          border: "1px solid var(--color-2)",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          style={{ height: "0.75rem", cursor: "pointer" }}
                          onClick={playTrip}
                          src="/images/pause.svg"
                        />
                      </div>
                    )}
                    <div className="w-full px-3 flex">
                      <input
                        type="range"
                        id="timeline"
                        className="timeline-bar w-full"
                        onChange={handleTimelineClick}
                        name="timeline"
                        min="0"
                        max="100"
                        value={timelinePosition}
                        step="5"
                      />
                      <label htmlFor="timeline"></label>
                    </div>
                    <div className="replay-speed">
                      <ul
                        ref={speedListRef}
                        id="speed-list"
                        className="absolute"
                        style={{ display: "none" }}
                      >
                        {speedList.map((x) => (
                          <li
                            key={x}
                            onClick={() => changeSpeed(x)}
                            className={`mt-2 pl-2 cursor-pointer ${speed === x ? "select-s" : ""}`}
                          >
                            {x}x
                          </li>
                        ))}
                      </ul>
                      <div
                        className="speed-box flex items-center justify-center cursor-pointer"
                        onClick={toggleList}
                      >
                        <p className="mr-2">{speed}x</p>
                        <img src="/images/replay-speed.svg" />
                      </div>
                    </div>
                  </div>
                </div>
            } */}
					</div>
				</div>
			</div>
		</>
	);
};

export default TripSummaryComp;
