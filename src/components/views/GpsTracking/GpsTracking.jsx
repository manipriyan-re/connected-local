'use client';
import { useRef, useState } from 'react';
import { useGoogleMaps } from '@/utilities/GoogleMapsProvider';
import CustomDatePicker from '@/components/shared/Datepicker/Datepicker';
import GoogleMapComp from '@/components/shared/MapComponent/GoogleMapComp';
import '../TripSummary/tripSummary.scss';
import TripReplay from '@/components/shared/TripReplay/TripReplay';
import Image from 'next/image';

const Gpstracking = () => {
	const { google } = useGoogleMaps();
	const mapRef = useRef(null);
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);
	const [route, setRoute] = useState([]);
	const [isLiveTrack, setIsLiveTrack] = useState(true);
	let currentLocation = null;
	const routeSample = [
		{
			lat: 12.90348,
			lng: 80.22805,
		},
		{
			lat: 12.90448,
			lng: 80.22813,
		},
		{
			lat: 12.90533,
			lng: 80.22814,
		},
		{
			lat: 12.90591,
			lng: 80.22814,
		},
		{
			lat: 12.90607,
			lng: 80.22805,
		},
		{
			lat: 12.90634,
			lng: 80.22805,
		},
		{
			lat: 12.90607,
			lng: 80.22811,
		},
		{
			lat: 12.9056,
			lng: 80.22812,
		},
		{
			lat: 12.90541,
			lng: 80.22814,
		},
		{
			lat: 12.90528,
			lng: 80.22803,
		},
		{
			lat: 12.90507,
			lng: 80.22796,
		},
		{
			lat: 12.90473,
			lng: 80.22791,
		},
		{
			lat: 12.90434,
			lng: 80.22812,
		},
		{
			lat: 12.90426,
			lng: 80.22863,
		},
		{
			lat: 12.90423,
			lng: 80.2297,
		},
		{
			lat: 12.90421,
			lng: 80.23028,
		},
		{
			lat: 12.90435,
			lng: 80.23144,
		},
		{
			lat: 12.9045,
			lng: 80.23193,
		},
		{
			lat: 12.90424,
			lng: 80.23201,
		},
		{
			lat: 12.90402,
			lng: 80.23211,
		},
		{
			lat: 12.90399,
			lng: 80.23257,
		},
		{
			lat: 12.90389,
			lng: 80.23275,
		},
		{
			lat: 12.90322,
			lng: 80.2328,
		},
		{
			lat: 12.90429,
			lng: 80.23304,
		},
		{
			lat: 12.90481,
			lng: 80.23274,
		},
		{
			lat: 12.90461,
			lng: 80.23201,
		},
		{
			lat: 12.90458,
			lng: 80.23152,
		},
		{
			lat: 12.90539,
			lng: 80.23155,
		},
		{
			lat: 12.90604,
			lng: 80.23167,
		},
		{
			lat: 12.90619,
			lng: 80.23092,
		},
		{
			lat: 12.90645,
			lng: 80.23078,
		},
		{
			lat: 12.90689,
			lng: 80.23042,
		},
		{
			lat: 12.90727,
			lng: 80.23038,
		},
		{
			lat: 12.90788,
			lng: 80.23059,
		},
		{
			lat: 12.90835,
			lng: 80.23058,
		},
		{
			lat: 12.90857,
			lng: 80.23006,
		},
		{
			lat: 12.90874,
			lng: 80.22924,
		},
		{
			lat: 12.90879,
			lng: 80.22882,
		},
		{
			lat: 12.9086,
			lng: 80.22871,
		},
		{
			lat: 12.90848,
			lng: 80.22872,
		},
		{
			lat: 12.90793,
			lng: 80.22864,
		},
		{
			lat: 12.90743,
			lng: 80.22854,
		},
		{
			lat: 12.90686,
			lng: 80.2284,
		},
		{
			lat: 12.90653,
			lng: 80.22832,
		},
		{
			lat: 12.9066,
			lng: 80.22827,
		},
		{
			lat: 12.90767,
			lng: 80.22841,
		},
		{
			lat: 12.90905,
			lng: 80.22858,
		},
		{
			lat: 12.91034,
			lng: 80.22876,
		},
		{
			lat: 12.91062,
			lng: 80.22888,
		},
		{
			lat: 12.91129,
			lng: 80.22898,
		},
		{
			lat: 12.91243,
			lng: 80.22915,
		},
		{
			lat: 12.91397,
			lng: 80.22933,
		},
		{
			lat: 12.91506,
			lng: 80.22945,
		},
		{
			lat: 12.91599,
			lng: 80.22952,
		},
		{
			lat: 12.91637,
			lng: 80.22967,
		},
		{
			lat: 12.91716,
			lng: 80.22973,
		},
		{
			lat: 12.91811,
			lng: 80.22985,
		},
		{
			lat: 12.91909,
			lng: 80.23006,
		},
		{
			lat: 12.9205,
			lng: 80.23024,
		},
		{
			lat: 12.92211,
			lng: 80.23041,
		},
		{
			lat: 12.92339,
			lng: 80.23063,
		},
		{
			lat: 12.9246,
			lng: 80.23076,
		},
		{
			lat: 12.92522,
			lng: 80.23081,
		},
		{
			lat: 12.9261,
			lng: 80.23093,
		},
		{
			lat: 12.92692,
			lng: 80.23103,
		},
		{
			lat: 12.92771,
			lng: 80.23114,
		},
		{
			lat: 12.92851,
			lng: 80.23125,
		},
		{
			lat: 12.92889,
			lng: 80.23136,
		},
		{
			lat: 12.92927,
			lng: 80.23146,
		},
		{
			lat: 12.92987,
			lng: 80.23155,
		},
		{
			lat: 12.93086,
			lng: 80.23185,
		},
		{
			lat: 12.93173,
			lng: 80.23206,
		},
		{
			lat: 12.9324,
			lng: 80.23231,
		},
		{
			lat: 12.93338,
			lng: 80.23264,
		},
		{
			lat: 12.93438,
			lng: 80.2331,
		},
		{
			lat: 12.93529,
			lng: 80.23352,
		},
		{
			lat: 12.93577,
			lng: 80.23378,
		},
		{
			lat: 12.93663,
			lng: 80.23422,
		},
		{
			lat: 12.93815,
			lng: 80.23492,
		},
		{
			lat: 12.93919,
			lng: 80.23546,
		},
		{
			lat: 12.93964,
			lng: 80.23555,
		},
		{
			lat: 12.9402,
			lng: 80.23575,
		},
		{
			lat: 12.9407,
			lng: 80.23594,
		},
		{
			lat: 12.94149,
			lng: 80.23614,
		},
		{
			lat: 12.94208,
			lng: 80.23629,
		},
		{
			lat: 12.94265,
			lng: 80.23649,
		},
		{
			lat: 12.94336,
			lng: 80.237,
		},
		{
			lat: 12.94367,
			lng: 80.23736,
		},
		{
			lat: 12.94396,
			lng: 80.23772,
		},
		{
			lat: 12.94452,
			lng: 80.23836,
		},
		{
			lat: 12.94515,
			lng: 80.23896,
		},
		{
			lat: 12.94613,
			lng: 80.23951,
		},
		{
			lat: 12.94696,
			lng: 80.23991,
		},
		{
			lat: 12.94786,
			lng: 80.24029,
		},
		{
			lat: 12.9487,
			lng: 80.24053,
		},
		{
			lat: 12.949,
			lng: 80.23989,
		},
		{
			lat: 12.94921,
			lng: 80.2391,
		},
		{
			lat: 12.94938,
			lng: 80.23911,
		},
		{
			lat: 12.94912,
			lng: 80.24024,
		},
		{
			lat: 12.94905,
			lng: 80.24072,
		},
		{
			lat: 12.94916,
			lng: 80.24077,
		},
		{
			lat: 12.94939,
			lng: 80.24077,
		},
		{
			lat: 12.94974,
			lng: 80.2409,
		},
		{
			lat: 12.95004,
			lng: 80.241,
		},
		{
			lat: 12.95045,
			lng: 80.24116,
		},
		{
			lat: 12.95109,
			lng: 80.24141,
		},
		{
			lat: 12.95185,
			lng: 80.24169,
		},
		{
			lat: 12.95285,
			lng: 80.24201,
		},
		{
			lat: 12.95374,
			lng: 80.24239,
		},
		{
			lat: 12.9544,
			lng: 80.24267,
		},
		{
			lat: 12.95514,
			lng: 80.24292,
		},
		{
			lat: 12.95619,
			lng: 80.24338,
		},
		{
			lat: 12.95734,
			lng: 80.24388,
		},
		{
			lat: 12.95831,
			lng: 80.24433,
		},
		{
			lat: 12.95929,
			lng: 80.2447,
		},
		{
			lat: 12.95993,
			lng: 80.24497,
		},
		{
			lat: 12.96042,
			lng: 80.24519,
		},
		{
			lat: 12.96054,
			lng: 80.24523,
		},
		{
			lat: 12.9607,
			lng: 80.24527,
		},
		{
			lat: 12.96086,
			lng: 80.24541,
		},
		{
			lat: 12.96154,
			lng: 80.24565,
		},
		{
			lat: 12.96263,
			lng: 80.2462,
		},
		{
			lat: 12.96389,
			lng: 80.24668,
		},
		{
			lat: 12.96535,
			lng: 80.2473,
		},
		{
			lat: 12.96669,
			lng: 80.24792,
		},
		{
			lat: 12.9679,
			lng: 80.24846,
		},
		{
			lat: 12.96897,
			lng: 80.24874,
		},
		{
			lat: 12.9704,
			lng: 80.2493,
		},
		{
			lat: 12.97182,
			lng: 80.24986,
		},
		{
			lat: 12.97278,
			lng: 80.25006,
		},
		{
			lat: 12.9735,
			lng: 80.25027,
		},
		{
			lat: 12.97382,
			lng: 80.25039,
		},
		{
			lat: 12.97472,
			lng: 80.25063,
		},
		{
			lat: 12.97527,
			lng: 80.25084,
		},
		{
			lat: 12.97646,
			lng: 80.25115,
		},
		{
			lat: 12.97713,
			lng: 80.25131,
		},
		{
			lat: 12.97725,
			lng: 80.25133,
		},
		{
			lat: 12.97727,
			lng: 80.25137,
		},
		{
			lat: 12.97751,
			lng: 80.25152,
		},
		{
			lat: 12.97769,
			lng: 80.25166,
		},
		{
			lat: 12.97788,
			lng: 80.25188,
		},
		{
			lat: 12.97813,
			lng: 80.25214,
		},
		{
			lat: 12.97853,
			lng: 80.2524,
		},
		{
			lat: 12.97871,
			lng: 80.25243,
		},
		{
			lat: 12.979,
			lng: 80.25248,
		},
		{
			lat: 12.97935,
			lng: 80.25259,
		},
		{
			lat: 12.97979,
			lng: 80.25262,
		},
		{
			lat: 12.98051,
			lng: 80.25275,
		},
		{
			lat: 12.98159,
			lng: 80.25279,
		},
		{
			lat: 12.9826,
			lng: 80.25275,
		},
		{
			lat: 12.98354,
			lng: 80.25252,
		},
		{
			lat: 12.9844,
			lng: 80.25225,
		},
		{
			lat: 12.98462,
			lng: 80.25218,
		},
		{
			lat: 12.98427,
			lng: 80.25233,
		},
		{
			lat: 12.98287,
			lng: 80.25272,
		},
		{
			lat: 12.98231,
			lng: 80.25279,
		},
		{
			lat: 12.98193,
			lng: 80.25279,
		},
		{
			lat: 12.98189,
			lng: 80.25367,
		},
		{
			lat: 12.9823,
			lng: 80.25453,
		},
		{
			lat: 12.98283,
			lng: 80.25476,
		},
		{
			lat: 12.98362,
			lng: 80.25498,
		},
		{
			lat: 12.98463,
			lng: 80.25522,
		},
		{
			lat: 12.98545,
			lng: 80.2554,
		},
		{
			lat: 12.98597,
			lng: 80.25553,
		},
		{
			lat: 12.98648,
			lng: 80.25557,
		},
		{
			lat: 12.98732,
			lng: 80.25572,
		},
		{
			lat: 12.98752,
			lng: 80.25584,
		},
		{
			lat: 12.98782,
			lng: 80.25587,
		},
		{
			lat: 12.98848,
			lng: 80.25592,
		},
		{
			lat: 12.98934,
			lng: 80.256,
		},
		{
			lat: 12.99029,
			lng: 80.25597,
		},
		{
			lat: 12.99056,
			lng: 80.25607,
		},
		{
			lat: 12.99017,
			lng: 80.25602,
		},
		{
			lat: 12.98975,
			lng: 80.256,
		},
		{
			lat: 12.98934,
			lng: 80.25603,
		},
		{
			lat: 12.98875,
			lng: 80.25598,
		},
		{
			lat: 12.9888,
			lng: 80.25594,
		},
		{
			lat: 12.98897,
			lng: 80.2559,
		},
		{
			lat: 12.98916,
			lng: 80.25594,
		},
		{
			lat: 12.98947,
			lng: 80.25595,
		},
		{
			lat: 12.99008,
			lng: 80.256,
		},
		{
			lat: 12.9907,
			lng: 80.25598,
		},
		{
			lat: 12.99114,
			lng: 80.25604,
		},
		{
			lat: 12.99188,
			lng: 80.25609,
		},
		{
			lat: 12.99252,
			lng: 80.25608,
		},
		{
			lat: 12.99294,
			lng: 80.25606,
		},
		{
			lat: 12.99326,
			lng: 80.25603,
		},
		{
			lat: 12.99361,
			lng: 80.25598,
		},
		{
			lat: 12.99382,
			lng: 80.25593,
		},
		{
			lat: 12.99408,
			lng: 80.25594,
		},
		{
			lat: 12.99465,
			lng: 80.25598,
		},
		{
			lat: 12.99557,
			lng: 80.25591,
		},
		{
			lat: 12.99639,
			lng: 80.25586,
		},
		{
			lat: 12.99707,
			lng: 80.2559,
		},
		{
			lat: 12.99738,
			lng: 80.25592,
		},
		{
			lat: 12.99789,
			lng: 80.25596,
		},
		{
			lat: 12.9984,
			lng: 80.25599,
		},
		{
			lat: 12.99867,
			lng: 80.25603,
		},
		{
			lat: 12.99905,
			lng: 80.25609,
		},
		{
			lat: 12.99957,
			lng: 80.2562,
		},
		{
			lat: 12.99993,
			lng: 80.25626,
		},
		{
			lat: 12.99993,
			lng: 80.25626,
		},
		{
			lat: 13.00177,
			lng: 80.25661,
		},
		{
			lat: 13.00275,
			lng: 80.25678,
		},
		{
			lat: 13.00353,
			lng: 80.25693,
		},
		{
			lat: 13.00449,
			lng: 80.25712,
		},
		{
			lat: 13.00551,
			lng: 80.25729,
		},
		{
			lat: 13.00637,
			lng: 80.25747,
		},
		{
			lat: 13.00662,
			lng: 80.25757,
		},
		{
			lat: 13.00723,
			lng: 80.25839,
		},
		{
			lat: 13.00773,
			lng: 80.25897,
		},
		{
			lat: 13.00842,
			lng: 80.25903,
		},
		{
			lat: 13.00961,
			lng: 80.25911,
		},
		{
			lat: 13.01107,
			lng: 80.25911,
		},
		{
			lat: 13.01269,
			lng: 80.25916,
		},
		{
			lat: 13.01458,
			lng: 80.25926,
		},
		{
			lat: 13.01586,
			lng: 80.25949,
		},
		{
			lat: 13.01674,
			lng: 80.26002,
		},
		{
			lat: 13.01743,
			lng: 80.26045,
		},
		{
			lat: 13.01802,
			lng: 80.2609,
		},
		{
			lat: 13.0185,
			lng: 80.26123,
		},
		{
			lat: 13.01928,
			lng: 80.26184,
		},
		{
			lat: 13.01994,
			lng: 80.26251,
		},
		{
			lat: 13.02033,
			lng: 80.26281,
		},
		{
			lat: 13.01994,
			lng: 80.26301,
		},
		{
			lat: 13.01922,
			lng: 80.26298,
		},
		{
			lat: 13.01896,
			lng: 80.26336,
		},
		{
			lat: 13.01898,
			lng: 80.26472,
		},
		{
			lat: 13.01872,
			lng: 80.2656,
		},
		{
			lat: 13.01868,
			lng: 80.26673,
		},
		{
			lat: 13.01904,
			lng: 80.26756,
		},
		{
			lat: 13.02002,
			lng: 80.26872,
		},
		{
			lat: 13.02043,
			lng: 80.26931,
		},
		{
			lat: 13.02064,
			lng: 80.26951,
		},
		{
			lat: 13.02073,
			lng: 80.2697,
		},
		{
			lat: 13.0213,
			lng: 80.27036,
		},
		{
			lat: 13.02204,
			lng: 80.27133,
		},
		{
			lat: 13.02276,
			lng: 80.27223,
		},
		{
			lat: 13.02291,
			lng: 80.27252,
		},
		{
			lat: 13.0233,
			lng: 80.27303,
		},
		{
			lat: 13.02372,
			lng: 80.27353,
		},
		{
			lat: 13.02415,
			lng: 80.27415,
		},
		{
			lat: 13.02443,
			lng: 80.27443,
		},
		{
			lat: 13.02474,
			lng: 80.27466,
		},
		{
			lat: 13.02551,
			lng: 80.275,
		},
		{
			lat: 13.02581,
			lng: 80.27515,
		},
		{
			lat: 13.02619,
			lng: 80.27532,
		},
		{
			lat: 13.02661,
			lng: 80.27554,
		},
		{
			lat: 13.02707,
			lng: 80.27571,
		},
		{
			lat: 13.02738,
			lng: 80.27587,
		},
		{
			lat: 13.02774,
			lng: 80.27606,
		},
		{
			lat: 13.02822,
			lng: 80.27631,
		},
		{
			lat: 13.02845,
			lng: 80.27636,
		},
		{
			lat: 13.02886,
			lng: 80.27649,
		},
		{
			lat: 13.02917,
			lng: 80.27665,
		},
		{
			lat: 13.02946,
			lng: 80.27674,
		},
		{
			lat: 13.02992,
			lng: 80.27687,
		},
		{
			lat: 13.03093,
			lng: 80.2773,
		},
		{
			lat: 13.03175,
			lng: 80.27756,
		},
		{
			lat: 13.0325,
			lng: 80.27747,
		},
		{
			lat: 13.0331,
			lng: 80.27749,
		},
		{
			lat: 13.03355,
			lng: 80.2774,
		},
		{
			lat: 13.03403,
			lng: 80.2775,
		},
		{
			lat: 13.03533,
			lng: 80.27775,
		},
		{
			lat: 13.03641,
			lng: 80.27796,
		},
		{
			lat: 13.03714,
			lng: 80.27824,
		},
		{
			lat: 13.0379,
			lng: 80.27839,
		},
		{
			lat: 13.03916,
			lng: 80.2788,
		},
		{
			lat: 13.04039,
			lng: 80.27918,
		},
		{
			lat: 13.04158,
			lng: 80.27942,
		},
		{
			lat: 13.04268,
			lng: 80.2796,
		},
		{
			lat: 13.04269,
			lng: 80.27959,
		},
		{
			lat: 13.04304,
			lng: 80.27963,
		},
		{
			lat: 13.04359,
			lng: 80.27976,
		},
		{
			lat: 13.04434,
			lng: 80.2799,
		},
		{
			lat: 13.04551,
			lng: 80.2801,
		},
		{
			lat: 13.0466,
			lng: 80.28021,
		},
		{
			lat: 13.04757,
			lng: 80.28036,
		},
		{
			lat: 13.04912,
			lng: 80.28059,
		},
		{
			lat: 13.05038,
			lng: 80.28074,
		},
		{
			lat: 13.05153,
			lng: 80.28095,
		},
		{
			lat: 13.05274,
			lng: 80.28115,
		},
		{
			lat: 13.05415,
			lng: 80.28133,
		},
		{
			lat: 13.05511,
			lng: 80.28158,
		},
		{
			lat: 13.05598,
			lng: 80.28173,
		},
		{
			lat: 13.05722,
			lng: 80.28199,
		},
		{
			lat: 13.05791,
			lng: 80.28212,
		},
		{
			lat: 13.05889,
			lng: 80.28235,
		},
		{
			lat: 13.06036,
			lng: 80.28261,
		},
		{
			lat: 13.06203,
			lng: 80.28296,
		},
		{
			lat: 13.06338,
			lng: 80.28325,
		},
		{
			lat: 13.06399,
			lng: 80.28346,
		},
		{
			lat: 13.06564,
			lng: 80.2838,
		},
		{
			lat: 13.06763,
			lng: 80.2842,
		},
		{
			lat: 13.06923,
			lng: 80.28452,
		},
		{
			lat: 13.07091,
			lng: 80.28496,
		},
		{
			lat: 13.0726,
			lng: 80.28535,
		},
		{
			lat: 13.07404,
			lng: 80.2857,
		},
		{
			lat: 13.07559,
			lng: 80.28687,
		},
		{
			lat: 13.07762,
			lng: 80.28739,
		},
		{
			lat: 13.07909,
			lng: 80.28786,
		},
		{
			lat: 13.08047,
			lng: 80.28821,
		},
		{
			lat: 13.0821,
			lng: 80.28875,
		},
		{
			lat: 13.08321,
			lng: 80.28916,
		},
		{
			lat: 13.08422,
			lng: 80.28915,
		},
		{
			lat: 13.08553,
			lng: 80.28907,
		},
		{
			lat: 13.08653,
			lng: 80.28941,
		},
		{
			lat: 13.08781,
			lng: 80.28994,
		},
		{
			lat: 13.0887,
			lng: 80.29015,
		},
		{
			lat: 13.08869,
			lng: 80.28889,
		},
		{
			lat: 13.08863,
			lng: 80.28827,
		},
		{
			lat: 13.08857,
			lng: 80.28745,
		},
		{
			lat: 13.08856,
			lng: 80.28665,
		},
		{
			lat: 13.0885,
			lng: 80.28597,
		},
		{
			lat: 13.08842,
			lng: 80.28496,
		},
		{
			lat: 13.08839,
			lng: 80.28393,
		},
		{
			lat: 13.08834,
			lng: 80.28382,
		},
		{
			lat: 13.08834,
			lng: 80.28341,
		},
		{
			lat: 13.08833,
			lng: 80.28287,
		},
		{
			lat: 13.08828,
			lng: 80.28234,
		},
		{
			lat: 13.08809,
			lng: 80.28159,
		},
		{
			lat: 13.0883,
			lng: 80.28151,
		},
		{
			lat: 13.08862,
			lng: 80.28143,
		},
		{
			lat: 13.08889,
			lng: 80.28131,
		},
		{
			lat: 13.08916,
			lng: 80.28136,
		},
		{
			lat: 13.0893,
			lng: 80.28137,
		},
		{
			lat: 13.08962,
			lng: 80.28139,
		},
		{
			lat: 13.08992,
			lng: 80.28149,
		},
		{
			lat: 13.09001,
			lng: 80.28121,
		},
		{
			lat: 13.09001,
			lng: 80.28121,
		},
		{
			lat: 13.09014,
			lng: 80.28084,
		},
		{
			lat: 13.09013,
			lng: 80.28028,
		},
		{
			lat: 13.09027,
			lng: 80.28021,
		},
		{
			lat: 13.09025,
			lng: 80.28002,
		},
		{
			lat: 13.09028,
			lng: 80.27989,
		},
		{
			lat: 13.09049,
			lng: 80.27998,
		},
		{
			lat: 13.08958,
			lng: 80.27979,
		},
		{
			lat: 13.08943,
			lng: 80.27977,
		},
		{
			lat: 13.08928,
			lng: 80.27945,
		},
		{
			lat: 13.08934,
			lng: 80.27931,
		},
		{
			lat: 13.08941,
			lng: 80.27917,
		},
		{
			lat: 13.08951,
			lng: 80.27884,
		},
		{
			lat: 13.08963,
			lng: 80.27865,
		},
		{
			lat: 13.08971,
			lng: 80.27853,
		},
		{
			lat: 13.08979,
			lng: 80.2784,
		},
		{
			lat: 13.08982,
			lng: 80.27823,
		},
		{
			lat: 13.09008,
			lng: 80.27779,
		},
		{
			lat: 13.09042,
			lng: 80.27722,
		},
		{
			lat: 13.09073,
			lng: 80.27684,
		},
		{
			lat: 13.09082,
			lng: 80.27652,
		},
		{
			lat: 13.09106,
			lng: 80.27627,
		},
		{
			lat: 13.09122,
			lng: 80.2759,
		},
		{
			lat: 13.09138,
			lng: 80.27539,
		},
		{
			lat: 13.09182,
			lng: 80.2752,
		},
		{
			lat: 13.09221,
			lng: 80.27522,
		},
		{
			lat: 13.0925,
			lng: 80.27523,
		},
		{
			lat: 13.09284,
			lng: 80.27521,
		},
		{
			lat: 13.0932,
			lng: 80.27526,
		},
		{
			lat: 13.09343,
			lng: 80.27518,
		},
		{
			lat: 13.09366,
			lng: 80.27519,
		},
		{
			lat: 13.09385,
			lng: 80.27521,
		},
		{
			lat: 13.0941,
			lng: 80.27521,
		},
		{
			lat: 13.0946,
			lng: 80.2752,
		},
		{
			lat: 13.09522,
			lng: 80.27521,
		},
		{
			lat: 13.09609,
			lng: 80.27519,
		},
		{
			lat: 13.09699,
			lng: 80.27521,
		},
		{
			lat: 13.09738,
			lng: 80.2752,
		},
		{
			lat: 13.09796,
			lng: 80.27522,
		},
		{
			lat: 13.09899,
			lng: 80.27519,
		},
		{
			lat: 13.09951,
			lng: 80.27515,
		},
		{
			lat: 13.10031,
			lng: 80.27501,
		},
		{
			lat: 13.10157,
			lng: 80.27453,
		},
		{
			lat: 13.10207,
			lng: 80.2743,
		},
		{
			lat: 13.10284,
			lng: 80.2739,
		},
		{
			lat: 13.10366,
			lng: 80.2736,
		},
		{
			lat: 13.1039,
			lng: 80.27336,
		},
		{
			lat: 13.10377,
			lng: 80.27267,
		},
		{
			lat: 13.10409,
			lng: 80.27211,
		},
		{
			lat: 13.1044,
			lng: 80.27155,
		},
		{
			lat: 13.1047,
			lng: 80.27119,
		},
		{
			lat: 13.10521,
			lng: 80.27098,
		},
		{
			lat: 13.10593,
			lng: 80.27046,
		},
		{
			lat: 13.1069,
			lng: 80.26951,
		},
		{
			lat: 13.10821,
			lng: 80.26817,
		},
		{
			lat: 13.10933,
			lng: 80.267,
		},
		{
			lat: 13.11022,
			lng: 80.26621,
		},
		{
			lat: 13.11137,
			lng: 80.26533,
		},
		{
			lat: 13.1128,
			lng: 80.26416,
		},
		{
			lat: 13.11385,
			lng: 80.26353,
		},
		{
			lat: 13.11418,
			lng: 80.26318,
		},
		{
			lat: 13.11423,
			lng: 80.26275,
		},
		{
			lat: 13.11421,
			lng: 80.26219,
		},
		{
			lat: 13.11426,
			lng: 80.2615,
		},
		{
			lat: 13.11478,
			lng: 80.26152,
		},
		{
			lat: 13.11541,
			lng: 80.26171,
		},
		{
			lat: 13.11617,
			lng: 80.26194,
		},
		{
			lat: 13.11707,
			lng: 80.26202,
		},
		{
			lat: 13.118,
			lng: 80.2615,
		},
		{
			lat: 13.11822,
			lng: 80.26031,
		},
		{
			lat: 13.1183,
			lng: 80.25965,
		},
		{
			lat: 13.11843,
			lng: 80.2591,
		},
		{
			lat: 13.11873,
			lng: 80.25778,
		},
		{
			lat: 13.11914,
			lng: 80.25631,
		},
		{
			lat: 13.11982,
			lng: 80.25522,
		},
		{
			lat: 13.1206,
			lng: 80.25433,
		},
		{
			lat: 13.12119,
			lng: 80.25366,
		},
		{
			lat: 13.1215,
			lng: 80.25305,
		},
		{
			lat: 13.12172,
			lng: 80.25253,
		},
		{
			lat: 13.122,
			lng: 80.25141,
		},
		{
			lat: 13.12222,
			lng: 80.25088,
		},
		{
			lat: 13.12259,
			lng: 80.24991,
		},
		{
			lat: 13.12322,
			lng: 80.24867,
		},
		{
			lat: 13.12347,
			lng: 80.24838,
		},
		{
			lat: 13.12393,
			lng: 80.24792,
		},
		{
			lat: 13.12459,
			lng: 80.24708,
		},
		{
			lat: 13.12529,
			lng: 80.24639,
		},
		{
			lat: 13.1262,
			lng: 80.24528,
		},
		{
			lat: 13.12707,
			lng: 80.24411,
		},
		{
			lat: 13.12806,
			lng: 80.24273,
		},
		{
			lat: 13.12923,
			lng: 80.24111,
		},
		{
			lat: 13.13046,
			lng: 80.23937,
		},
		{
			lat: 13.13143,
			lng: 80.23804,
		},
		{
			lat: 13.13197,
			lng: 80.23728,
		},
		{
			lat: 13.13295,
			lng: 80.23589,
		},
		{
			lat: 13.13402,
			lng: 80.23438,
		},
		{
			lat: 13.1349,
			lng: 80.23324,
		},
		{
			lat: 13.13608,
			lng: 80.2317,
		},
		{
			lat: 13.13676,
			lng: 80.23068,
		},
		{
			lat: 13.13717,
			lng: 80.23018,
		},
		{
			lat: 13.13804,
			lng: 80.22897,
		},
		{
			lat: 13.13903,
			lng: 80.22766,
		},
		{
			lat: 13.13974,
			lng: 80.22668,
		},
		{
			lat: 13.14066,
			lng: 80.22544,
		},
		{
			lat: 13.14163,
			lng: 80.2241,
		},
		{
			lat: 13.14215,
			lng: 80.22342,
		},
		{
			lat: 13.14291,
			lng: 80.22234,
		},
		{
			lat: 13.14374,
			lng: 80.22124,
		},
		{
			lat: 13.14393,
			lng: 80.22045,
		},
		{
			lat: 13.14401,
			lng: 80.21996,
		},
		{
			lat: 13.1444,
			lng: 80.21967,
		},
		{
			lat: 13.14462,
			lng: 80.21958,
		},
		{
			lat: 13.1454,
			lng: 80.21883,
		},
		{
			lat: 13.14604,
			lng: 80.21789,
		},
		{
			lat: 13.14685,
			lng: 80.21677,
		},
		{
			lat: 13.14786,
			lng: 80.21544,
		},
		{
			lat: 13.14886,
			lng: 80.21407,
		},
		{
			lat: 13.14979,
			lng: 80.21286,
		},
		{
			lat: 13.15035,
			lng: 80.21206,
		},
		{
			lat: 13.15063,
			lng: 80.21167,
		},
		{
			lat: 13.15131,
			lng: 80.2108,
		},
		{
			lat: 13.15209,
			lng: 80.20978,
		},
		{
			lat: 13.15287,
			lng: 80.20878,
		},
		{
			lat: 13.15338,
			lng: 80.20809,
		},
		{
			lat: 13.15426,
			lng: 80.20694,
		},
		{
			lat: 13.15519,
			lng: 80.20582,
		},
		{
			lat: 13.15559,
			lng: 80.2054,
		},
		{
			lat: 13.15598,
			lng: 80.20511,
		},
		{
			lat: 13.15674,
			lng: 80.20459,
		},
		{
			lat: 13.15753,
			lng: 80.20411,
		},
		{
			lat: 13.15797,
			lng: 80.20388,
		},
		{
			lat: 13.15852,
			lng: 80.20369,
		},
		{
			lat: 13.15953,
			lng: 80.20337,
		},
		{
			lat: 13.16108,
			lng: 80.20311,
		},
		{
			lat: 13.16269,
			lng: 80.20279,
		},
		{
			lat: 13.16358,
			lng: 80.20254,
		},
		{
			lat: 13.16388,
			lng: 80.20244,
		},
		{
			lat: 13.16473,
			lng: 80.20224,
		},
		{
			lat: 13.16631,
			lng: 80.20167,
		},
		{
			lat: 13.16801,
			lng: 80.20074,
		},
		{
			lat: 13.16969,
			lng: 80.19976,
		},
		{
			lat: 13.17022,
			lng: 80.19944,
		},
		{
			lat: 13.17064,
			lng: 80.19921,
		},
		{
			lat: 13.17115,
			lng: 80.1989,
		},
		{
			lat: 13.17222,
			lng: 80.19838,
		},
		{
			lat: 13.17345,
			lng: 80.19765,
		},
		{
			lat: 13.1745,
			lng: 80.19708,
		},
		{
			lat: 13.17588,
			lng: 80.19633,
		},
		{
			lat: 13.1774,
			lng: 80.19548,
		},
		{
			lat: 13.17881,
			lng: 80.19466,
		},
		{
			lat: 13.18019,
			lng: 80.19388,
		},
		{
			lat: 13.18188,
			lng: 80.19293,
		},
		{
			lat: 13.18338,
			lng: 80.19226,
		},
		{
			lat: 13.18411,
			lng: 80.19203,
		},
		{
			lat: 13.18422,
			lng: 80.19173,
		},
		{
			lat: 13.18454,
			lng: 80.19154,
		},
		{
			lat: 13.18495,
			lng: 80.19128,
		},
		{
			lat: 13.18543,
			lng: 80.19094,
		},
		{
			lat: 13.1861,
			lng: 80.1902,
		},
		{
			lat: 13.18713,
			lng: 80.18968,
		},
		{
			lat: 13.18791,
			lng: 80.18907,
		},
		{
			lat: 13.18832,
			lng: 80.18862,
		},
		{
			lat: 13.1887,
			lng: 80.18818,
		},
		{
			lat: 13.18951,
			lng: 80.18748,
		},
		{
			lat: 13.1905,
			lng: 80.18651,
		},
		{
			lat: 13.19127,
			lng: 80.18575,
		},
		{
			lat: 13.192,
			lng: 80.18515,
		},
		{
			lat: 13.19251,
			lng: 80.1847,
		},
		{
			lat: 13.19304,
			lng: 80.18424,
		},
		{
			lat: 13.19348,
			lng: 80.18387,
		},
		{
			lat: 13.1942,
			lng: 80.18331,
		},
		{
			lat: 13.19498,
			lng: 80.18255,
		},
		{
			lat: 13.19593,
			lng: 80.18172,
		},
		{
			lat: 13.19629,
			lng: 80.18105,
		},
		{
			lat: 13.19601,
			lng: 80.18024,
		},
		{
			lat: 13.1956,
			lng: 80.17888,
		},
		{
			lat: 13.19515,
			lng: 80.17745,
		},
		{
			lat: 13.19469,
			lng: 80.17607,
		},
		{
			lat: 13.19425,
			lng: 80.17496,
		},
		{
			lat: 13.19365,
			lng: 80.17368,
		},
		{
			lat: 13.19415,
			lng: 80.17216,
		},
		{
			lat: 13.1945,
			lng: 80.17089,
		},
		{
			lat: 13.1949,
			lng: 80.16932,
		},
		{
			lat: 13.19504,
			lng: 80.16814,
		},
		{
			lat: 13.19533,
			lng: 80.16684,
		},
		{
			lat: 13.19564,
			lng: 80.16534,
		},
		{
			lat: 13.19593,
			lng: 80.16395,
		},
		{
			lat: 13.19615,
			lng: 80.16306,
		},
		{
			lat: 13.19643,
			lng: 80.16171,
		},
		{
			lat: 13.19656,
			lng: 80.16101,
		},
		{
			lat: 13.19667,
			lng: 80.1605,
		},
		{
			lat: 13.19698,
			lng: 80.15911,
		},
		{
			lat: 13.19725,
			lng: 80.15786,
		},
		{
			lat: 13.19737,
			lng: 80.15665,
		},
		{
			lat: 13.19624,
			lng: 80.15569,
		},
		{
			lat: 13.19489,
			lng: 80.15471,
		},
		{
			lat: 13.19374,
			lng: 80.1538,
		},
		{
			lat: 13.19278,
			lng: 80.15308,
		},
		{
			lat: 13.19111,
			lng: 80.152,
		},
		{
			lat: 13.18908,
			lng: 80.1509,
		},
		{
			lat: 13.18828,
			lng: 80.15047,
		},
		{
			lat: 13.18743,
			lng: 80.15,
		},
		{
			lat: 13.18569,
			lng: 80.14916,
		},
		{
			lat: 13.18398,
			lng: 80.14829,
		},
		{
			lat: 13.18187,
			lng: 80.14717,
		},
		{
			lat: 13.17996,
			lng: 80.14545,
		},
		{
			lat: 13.17869,
			lng: 80.14335,
		},
		{
			lat: 13.17802,
			lng: 80.1414,
		},
		{
			lat: 13.17779,
			lng: 80.13895,
		},
		{
			lat: 13.17819,
			lng: 80.13634,
		},
		{
			lat: 13.17867,
			lng: 80.13365,
		},
		{
			lat: 13.17918,
			lng: 80.1309,
		},
		{
			lat: 13.17974,
			lng: 80.12811,
		},
		{
			lat: 13.18031,
			lng: 80.12535,
		},
		{
			lat: 13.18072,
			lng: 80.12263,
		},
		{
			lat: 13.18109,
			lng: 80.11989,
		},
		{
			lat: 13.18133,
			lng: 80.11753,
		},
		{
			lat: 13.18116,
			lng: 80.11501,
		},
		{
			lat: 13.18082,
			lng: 80.11265,
		},
		{
			lat: 13.18061,
			lng: 80.11107,
		},
		{
			lat: 13.18025,
			lng: 80.10883,
		},
		{
			lat: 13.17993,
			lng: 80.10633,
		},
		{
			lat: 13.17946,
			lng: 80.1038,
		},
		{
			lat: 13.17909,
			lng: 80.10154,
		},
		{
			lat: 13.17883,
			lng: 80.09896,
		},
		{
			lat: 13.17846,
			lng: 80.09632,
		},
		{
			lat: 13.17805,
			lng: 80.09368,
		},
		{
			lat: 13.17769,
			lng: 80.09111,
		},
		{
			lat: 13.17728,
			lng: 80.08846,
		},
		{
			lat: 13.17688,
			lng: 80.0857,
		},
		{
			lat: 13.1766,
			lng: 80.08296,
		},
		{
			lat: 13.17624,
			lng: 80.08027,
		},
		{
			lat: 13.17587,
			lng: 80.07747,
		},
		{
			lat: 13.17516,
			lng: 80.07483,
		},
		{
			lat: 13.17395,
			lng: 80.07248,
		},
		{
			lat: 13.17223,
			lng: 80.07052,
		},
		{
			lat: 13.17021,
			lng: 80.06898,
		},
		{
			lat: 13.16799,
			lng: 80.06767,
		},
		{
			lat: 13.16574,
			lng: 80.06638,
		},
		{
			lat: 13.16349,
			lng: 80.06509,
		},
		{
			lat: 13.16138,
			lng: 80.06379,
		},
		{
			lat: 13.15944,
			lng: 80.06218,
		},
		{
			lat: 13.1577,
			lng: 80.06069,
		},
		{
			lat: 13.15583,
			lng: 80.05912,
		},
		{
			lat: 13.15393,
			lng: 80.05756,
		},
		{
			lat: 13.15206,
			lng: 80.05592,
		},
		{
			lat: 13.15006,
			lng: 80.05447,
		},
		{
			lat: 13.14765,
			lng: 80.05392,
		},
		{
			lat: 13.14517,
			lng: 80.05375,
		},
		{
			lat: 13.14271,
			lng: 80.05356,
		},
		{
			lat: 13.14132,
			lng: 80.05347,
		},
		{
			lat: 13.1404,
			lng: 80.05346,
		},
		{
			lat: 13.13875,
			lng: 80.05336,
		},
		{
			lat: 13.13704,
			lng: 80.05322,
		},
		{
			lat: 13.13508,
			lng: 80.05314,
		},
		{
			lat: 13.13371,
			lng: 80.05306,
		},
		{
			lat: 13.13253,
			lng: 80.05305,
		},
		{
			lat: 13.13097,
			lng: 80.05312,
		},
		{
			lat: 13.12969,
			lng: 80.05296,
		},
		{
			lat: 13.12849,
			lng: 80.0529,
		},
		{
			lat: 13.12687,
			lng: 80.05284,
		},
		{
			lat: 13.12508,
			lng: 80.05275,
		},
		{
			lat: 13.12428,
			lng: 80.05286,
		},
		{
			lat: 13.12372,
			lng: 80.05402,
		},
		{
			lat: 13.12354,
			lng: 80.05539,
		},
		{
			lat: 13.12337,
			lng: 80.05686,
		},
		{
			lat: 13.1231,
			lng: 80.05868,
		},
		{
			lat: 13.12277,
			lng: 80.0603,
		},
		{
			lat: 13.1225,
			lng: 80.06123,
		},
		{
			lat: 13.12203,
			lng: 80.06275,
		},
		{
			lat: 13.12146,
			lng: 80.06407,
		},
		{
			lat: 13.12102,
			lng: 80.06498,
		},
		{
			lat: 13.12062,
			lng: 80.0663,
		},
		{
			lat: 13.12021,
			lng: 80.06765,
		},
		{
			lat: 13.11976,
			lng: 80.06936,
		},
		{
			lat: 13.11944,
			lng: 80.07071,
		},
		{
			lat: 13.11927,
			lng: 80.07219,
		},
		{
			lat: 13.1192,
			lng: 80.07351,
		},
		{
			lat: 13.11922,
			lng: 80.07424,
		},
		{
			lat: 13.1192,
			lng: 80.07481,
		},
		{
			lat: 13.11956,
			lng: 80.07486,
		},
		{
			lat: 13.11967,
			lng: 80.07574,
		},
		{
			lat: 13.11971,
			lng: 80.07654,
		},
		{
			lat: 13.11972,
			lng: 80.07753,
		},
		{
			lat: 13.1197,
			lng: 80.07813,
		},
		{
			lat: 13.11939,
			lng: 80.07819,
		},
		{
			lat: 13.11938,
			lng: 80.07896,
		},
		{
			lat: 13.11924,
			lng: 80.0801,
		},
		{
			lat: 13.11897,
			lng: 80.08135,
		},
		{
			lat: 13.11887,
			lng: 80.08208,
		},
		{
			lat: 13.11888,
			lng: 80.08146,
		},
		{
			lat: 13.11914,
			lng: 80.08025,
		},
		{
			lat: 13.11926,
			lng: 80.07766,
		},
		{
			lat: 13.11918,
			lng: 80.07634,
		},
		{
			lat: 13.11912,
			lng: 80.07498,
		},
		{
			lat: 13.11922,
			lng: 80.07482,
		},
		{
			lat: 13.11964,
			lng: 80.07485,
		},
	];

	//Get map from child
	const getMap = (map) => {
		mapRef.current = map;
		plotCurrentLocation();
	};

	const plotCurrentLocation = async () => {
		const gMap = mapRef.current;
		const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

		const startFlag = document.createElement('img');
		startFlag.src = '/images/re-pin.svg';

		currentLocation = new AdvancedMarkerElement({
			position: { lat: 12.90348, lng: 80.22805 },
			map: gMap,
			content: startFlag,
		});

		gMap.setCenter({ lat: 12.90348, lng: 80.22805 });
	};

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

	const searchTrips = (e) => {
		e.stopPropagation();
	};

	const handleDate = (type, date) => {
		if (type === 'from') {
			setFromDate(date);
		}
		if (type === 'to') {
			setToDate(date);
		}
	};

	const loadTrip = () => {
		if (currentLocation) {
			currentLocation.setMap(null);
		}
		setIsLiveTrack(false);
		setRoute(routeSample);
	};

	const backtoLiveTrack = () => {
		setRoute([]);
		setIsLiveTrack(true);
	};

	return (
		<section className="gps_tracking_container">
			<div className="gps_tracking_map_container">
				<div
					className="w-full relative"
					style={{ height: 'calc(100vh - 22.9rem)' }}>
					{isLiveTrack ? (
						<GoogleMapComp sendMap={getMap} />
					) : (
						<TripReplay route={route} goBack={backtoLiveTrack} />
					)}

					{/* <GoogleMapComp sendMap={getMap}/>
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
				<div className="mt-8">
					<h2 style={{ fontSize: '12px', marginBottom: '-7px' }}>
						TRAVEL REPLAY
					</h2>
					<span className="sub-header">
						You can view last the filtered trips below to replay the travel trip
					</span>
					<section className="mt-6">
						<form
							onSubmit={searchTrips}
							className="flex items-end justify-between">
							<section className="w-[43%]">
								<label htmlFor="fromDate" className="filter_label">
									From
								</label>
								<div className="trip-date-box">
									<CustomDatePicker
										sendDate={handleDate}
										selectedDate={fromDate}
										type="from"
									/>
								</div>
							</section>
							<section className="w-[43%]">
								<label htmlFor="toDate" className="filter_label">
									To
								</label>
								<div className="trip-date-box">
									<CustomDatePicker
										sendDate={handleDate}
										selectedDate={toDate}
										type="to"
									/>
								</div>
							</section>
							<button
								className="w-[14%] apply_button"
								type="submit"
								onClick={searchTrips}>
								Search Trips
							</button>
						</form>
					</section>
					<section className="mt-4">
						<h2 className="subtitle-16">Trips Found ({tripList.length})</h2>
						<ul
							className="trip-list overflow-y-auto default-scroll-5 mt-2"
							style={{ height: 'calc(100vh - 19.5rem)' }}>
							{tripList.map((trip, i) => (
								<li
									key={`${trip.timestamp}`}
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
			</div>
		</section>
	);
};

export default Gpstracking;
