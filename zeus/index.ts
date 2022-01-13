/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

export type ValueTypes = {
    ["Query"]: AliasType<{
users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the nuber of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users"]],
users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the nuber of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users_aggregate"]],
users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["users"]],
capsules?: [{	find?:ValueTypes["CapsulesFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Capsule"]],
capsulesPast?: [{	find?:ValueTypes["CapsulesFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Capsule"]],
capsulesUpcoming?: [{	find?:ValueTypes["CapsulesFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Capsule"]],
capsule?: [{	id:string},ValueTypes["Capsule"]],
	company?:ValueTypes["Info"],
cores?: [{	find?:ValueTypes["CoresFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Core"]],
coresPast?: [{	find?:ValueTypes["CoresFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Core"]],
coresUpcoming?: [{	find?:ValueTypes["CoresFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Core"]],
core?: [{	id:string},ValueTypes["Core"]],
dragons?: [{	limit?:number | null,	offset?:number | null},ValueTypes["Dragon"]],
dragon?: [{	id:string},ValueTypes["Dragon"]],
histories?: [{	find?:ValueTypes["HistoryFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["History"]],
historiesResult?: [{	find?:ValueTypes["HistoryFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["HistoriesResult"]],
history?: [{	id:string},ValueTypes["History"]],
landpads?: [{	limit?:number | null,	offset?:number | null},ValueTypes["Landpad"]],
landpad?: [{	id:string},ValueTypes["Landpad"]],
launches?: [{	find?:ValueTypes["LaunchFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Launch"]],
launchesPast?: [{	find?:ValueTypes["LaunchFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Launch"]],
launchesPastResult?: [{	find?:ValueTypes["LaunchFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["LaunchesPastResult"]],
launchesUpcoming?: [{	find?:ValueTypes["LaunchFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Launch"]],
launch?: [{	id:string},ValueTypes["Launch"]],
launchLatest?: [{	offset?:number | null},ValueTypes["Launch"]],
launchNext?: [{	offset?:number | null},ValueTypes["Launch"]],
launchpads?: [{	limit?:number | null,	offset?:number | null},ValueTypes["Launchpad"]],
launchpad?: [{	id:string},ValueTypes["Launchpad"]],
missions?: [{	find?:ValueTypes["MissionsFind"] | null,	limit?:number | null,	offset?:number | null},ValueTypes["Mission"]],
missionsResult?: [{	find?:ValueTypes["MissionsFind"] | null,	limit?:number | null,	offset?:number | null},ValueTypes["MissionResult"]],
mission?: [{	id:string},ValueTypes["Mission"]],
payloads?: [{	find?:ValueTypes["PayloadsFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Payload"]],
payload?: [{	id:string},ValueTypes["Payload"]],
	roadster?:ValueTypes["Roadster"],
rockets?: [{	limit?:number | null,	offset?:number | null},ValueTypes["Rocket"]],
rocketsResult?: [{	limit?:number | null,	offset?:number | null},ValueTypes["RocketsResult"]],
rocket?: [{	id:string},ValueTypes["Rocket"]],
ships?: [{	find?:ValueTypes["ShipsFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["Ship"]],
shipsResult?: [{	find?:ValueTypes["ShipsFind"] | null,	limit?:number | null,	offset?:number | null,	order?:string | null,	sort?:string | null},ValueTypes["ShipsResult"]],
ship?: [{	id:string},ValueTypes["Ship"]],
		__typename?: boolean
}>;
	/** select columns of table "users" */
["users_select_column"]:users_select_column;
	/** ordering options when selecting data from "users" */
["users_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null,
	rocket?:ValueTypes["order_by"] | null,
	timestamp?:ValueTypes["order_by"] | null,
	twitter?:ValueTypes["order_by"] | null
};
	/** column ordering options */
["order_by"]:order_by;
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: {
	_and?:(ValueTypes["users_bool_exp"] | undefined | null)[],
	_not?:ValueTypes["users_bool_exp"] | null,
	_or?:(ValueTypes["users_bool_exp"] | undefined | null)[],
	id?:ValueTypes["uuid_comparison_exp"] | null,
	name?:ValueTypes["String_comparison_exp"] | null,
	rocket?:ValueTypes["String_comparison_exp"] | null,
	timestamp?:ValueTypes["timestamptz_comparison_exp"] | null,
	twitter?:ValueTypes["String_comparison_exp"] | null
};
	/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: {
	_eq?:ValueTypes["uuid"] | null,
	_gt?:ValueTypes["uuid"] | null,
	_gte?:ValueTypes["uuid"] | null,
	_in?:ValueTypes["uuid"][],
	_is_null?:boolean | null,
	_lt?:ValueTypes["uuid"] | null,
	_lte?:ValueTypes["uuid"] | null,
	_neq?:ValueTypes["uuid"] | null,
	_nin?:ValueTypes["uuid"][]
};
	["uuid"]:unknown;
	/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?:string | null,
	_gt?:string | null,
	_gte?:string | null,
	_ilike?:string | null,
	_in?:string[],
	_is_null?:boolean | null,
	_like?:string | null,
	_lt?:string | null,
	_lte?:string | null,
	_neq?:string | null,
	_nilike?:string | null,
	_nin?:string[],
	_nlike?:string | null,
	_nsimilar?:string | null,
	_similar?:string | null
};
	/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: {
	_eq?:ValueTypes["timestamptz"] | null,
	_gt?:ValueTypes["timestamptz"] | null,
	_gte?:ValueTypes["timestamptz"] | null,
	_in?:ValueTypes["timestamptz"][],
	_is_null?:boolean | null,
	_lt?:ValueTypes["timestamptz"] | null,
	_lte?:ValueTypes["timestamptz"] | null,
	_neq?:ValueTypes["timestamptz"] | null,
	_nin?:ValueTypes["timestamptz"][]
};
	["timestamptz"]:unknown;
	/** columns and relationships of "users" */
["users"]: AliasType<{
	id?:boolean,
	name?:boolean,
	rocket?:boolean,
	timestamp?:boolean,
	twitter?:boolean,
		__typename?: boolean
}>;
	/** aggregated selection of "users" */
["users_aggregate"]: AliasType<{
	aggregate?:ValueTypes["users_aggregate_fields"],
	nodes?:ValueTypes["users"],
		__typename?: boolean
}>;
	/** aggregate fields of "users" */
["users_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["users_select_column"][],	distinct?:boolean | null},boolean],
	max?:ValueTypes["users_max_fields"],
	min?:ValueTypes["users_min_fields"],
		__typename?: boolean
}>;
	/** aggregate max on columns */
["users_max_fields"]: AliasType<{
	name?:boolean,
	rocket?:boolean,
	timestamp?:boolean,
	twitter?:boolean,
		__typename?: boolean
}>;
	/** aggregate min on columns */
["users_min_fields"]: AliasType<{
	name?:boolean,
	rocket?:boolean,
	timestamp?:boolean,
	twitter?:boolean,
		__typename?: boolean
}>;
	["CapsulesFind"]: {
	id?:string | null,
	landings?:number | null,
	mission?:string | null,
	original_launch?:ValueTypes["Date"] | null,
	reuse_count?:number | null,
	status?:string | null,
	type?:string | null
};
	["Date"]:unknown;
	["Capsule"]: AliasType<{
	id?:boolean,
	landings?:boolean,
	missions?:ValueTypes["CapsuleMission"],
	original_launch?:boolean,
	reuse_count?:boolean,
	status?:boolean,
	type?:boolean,
	dragon?:ValueTypes["Dragon"],
		__typename?: boolean
}>;
	["CapsuleMission"]: AliasType<{
	flight?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["Dragon"]: AliasType<{
	active?:boolean,
	crew_capacity?:boolean,
	description?:boolean,
	diameter?:ValueTypes["Distance"],
	dry_mass_kg?:boolean,
	dry_mass_lb?:boolean,
	first_flight?:boolean,
	heat_shield?:ValueTypes["DragonHeatShield"],
	height_w_trunk?:ValueTypes["Distance"],
	id?:boolean,
	launch_payload_mass?:ValueTypes["Mass"],
	launch_payload_vol?:ValueTypes["Volume"],
	name?:boolean,
	orbit_duration_yr?:boolean,
	pressurized_capsule?:ValueTypes["DragonPressurizedCapsule"],
	return_payload_mass?:ValueTypes["Mass"],
	return_payload_vol?:ValueTypes["Volume"],
	sidewall_angle_deg?:boolean,
	thrusters?:ValueTypes["DragonThrust"],
	trunk?:ValueTypes["DragonTrunk"],
	type?:boolean,
	wikipedia?:boolean,
		__typename?: boolean
}>;
	["Distance"]: AliasType<{
	feet?:boolean,
	meters?:boolean,
		__typename?: boolean
}>;
	["DragonHeatShield"]: AliasType<{
	dev_partner?:boolean,
	material?:boolean,
	size_meters?:boolean,
	temp_degrees?:boolean,
		__typename?: boolean
}>;
	["Mass"]: AliasType<{
	kg?:boolean,
	lb?:boolean,
		__typename?: boolean
}>;
	["Volume"]: AliasType<{
	cubic_feet?:boolean,
	cubic_meters?:boolean,
		__typename?: boolean
}>;
	["DragonPressurizedCapsule"]: AliasType<{
	payload_volume?:ValueTypes["Volume"],
		__typename?: boolean
}>;
	["DragonThrust"]: AliasType<{
	amount?:boolean,
	fuel_1?:boolean,
	fuel_2?:boolean,
	pods?:boolean,
	thrust?:ValueTypes["Force"],
	type?:boolean,
		__typename?: boolean
}>;
	["Force"]: AliasType<{
	kN?:boolean,
	lbf?:boolean,
		__typename?: boolean
}>;
	["DragonTrunk"]: AliasType<{
	cargo?:ValueTypes["DragonTrunkCargo"],
	trunk_volume?:ValueTypes["Volume"],
		__typename?: boolean
}>;
	["DragonTrunkCargo"]: AliasType<{
	solar_array?:boolean,
	unpressurized_cargo?:boolean,
		__typename?: boolean
}>;
	["Info"]: AliasType<{
	ceo?:boolean,
	coo?:boolean,
	cto_propulsion?:boolean,
	cto?:boolean,
	employees?:boolean,
	founded?:boolean,
	founder?:boolean,
	headquarters?:ValueTypes["Address"],
	launch_sites?:boolean,
	links?:ValueTypes["InfoLinks"],
	name?:boolean,
	summary?:boolean,
	test_sites?:boolean,
	valuation?:boolean,
	vehicles?:boolean,
		__typename?: boolean
}>;
	["Address"]: AliasType<{
	address?:boolean,
	city?:boolean,
	state?:boolean,
		__typename?: boolean
}>;
	["InfoLinks"]: AliasType<{
	elon_twitter?:boolean,
	flickr?:boolean,
	twitter?:boolean,
	website?:boolean,
		__typename?: boolean
}>;
	["CoresFind"]: {
	asds_attempts?:number | null,
	asds_landings?:number | null,
	block?:number | null,
	id?:string | null,
	missions?:string | null,
	original_launch?:ValueTypes["Date"] | null,
	reuse_count?:number | null,
	rtls_attempts?:number | null,
	rtls_landings?:number | null,
	status?:string | null,
	water_landing?:boolean | null
};
	["Core"]: AliasType<{
	asds_attempts?:boolean,
	asds_landings?:boolean,
	block?:boolean,
	id?:boolean,
	missions?:ValueTypes["CapsuleMission"],
	original_launch?:boolean,
	reuse_count?:boolean,
	rtls_attempts?:boolean,
	rtls_landings?:boolean,
	status?:boolean,
	water_landing?:boolean,
		__typename?: boolean
}>;
	["HistoryFind"]: {
	end?:ValueTypes["Date"] | null,
	flight_number?:number | null,
	id?:string | null,
	start?:ValueTypes["Date"] | null
};
	["History"]: AliasType<{
	details?:boolean,
	event_date_unix?:boolean,
	event_date_utc?:boolean,
	id?:boolean,
	links?:ValueTypes["Link"],
	title?:boolean,
	flight?:ValueTypes["Launch"],
		__typename?: boolean
}>;
	["Link"]: AliasType<{
	article?:boolean,
	reddit?:boolean,
	wikipedia?:boolean,
		__typename?: boolean
}>;
	["Launch"]: AliasType<{
	details?:boolean,
	id?:boolean,
	is_tentative?:boolean,
	launch_date_local?:boolean,
	launch_date_unix?:boolean,
	launch_date_utc?:boolean,
	launch_site?:ValueTypes["LaunchSite"],
	launch_success?:boolean,
	launch_year?:boolean,
	links?:ValueTypes["LaunchLinks"],
	mission_id?:boolean,
	mission_name?:boolean,
	rocket?:ValueTypes["LaunchRocket"],
	static_fire_date_unix?:boolean,
	static_fire_date_utc?:boolean,
	telemetry?:ValueTypes["LaunchTelemetry"],
	tentative_max_precision?:boolean,
	upcoming?:boolean,
	ships?:ValueTypes["Ship"],
		__typename?: boolean
}>;
	["LaunchSite"]: AliasType<{
	site_id?:boolean,
	site_name_long?:boolean,
	site_name?:boolean,
		__typename?: boolean
}>;
	["LaunchLinks"]: AliasType<{
	article_link?:boolean,
	flickr_images?:boolean,
	mission_patch_small?:boolean,
	mission_patch?:boolean,
	presskit?:boolean,
	reddit_campaign?:boolean,
	reddit_launch?:boolean,
	reddit_media?:boolean,
	reddit_recovery?:boolean,
	video_link?:boolean,
	wikipedia?:boolean,
		__typename?: boolean
}>;
	["LaunchRocket"]: AliasType<{
	fairings?:ValueTypes["LaunchRocketFairings"],
	first_stage?:ValueTypes["LaunchRocketFirstStage"],
	rocket_name?:boolean,
	rocket_type?:boolean,
	rocket?:ValueTypes["Rocket"],
	second_stage?:ValueTypes["LaunchRocketSecondStage"],
		__typename?: boolean
}>;
	["LaunchRocketFairings"]: AliasType<{
	recovered?:boolean,
	recovery_attempt?:boolean,
	reused?:boolean,
	ship?:boolean,
		__typename?: boolean
}>;
	["LaunchRocketFirstStage"]: AliasType<{
	cores?:ValueTypes["LaunchRocketFirstStageCore"],
		__typename?: boolean
}>;
	["LaunchRocketFirstStageCore"]: AliasType<{
	block?:boolean,
	core?:ValueTypes["Core"],
	flight?:boolean,
	gridfins?:boolean,
	land_success?:boolean,
	landing_intent?:boolean,
	landing_type?:boolean,
	landing_vehicle?:boolean,
	legs?:boolean,
	reused?:boolean,
		__typename?: boolean
}>;
	["Rocket"]: AliasType<{
	active?:boolean,
	boosters?:boolean,
	company?:boolean,
	cost_per_launch?:boolean,
	country?:boolean,
	description?:boolean,
	diameter?:ValueTypes["Distance"],
	engines?:ValueTypes["RocketEngines"],
	first_flight?:boolean,
	first_stage?:ValueTypes["RocketFirstStage"],
	height?:ValueTypes["Distance"],
	id?:boolean,
	landing_legs?:ValueTypes["RocketLandingLegs"],
	mass?:ValueTypes["Mass"],
	name?:boolean,
	payload_weights?:ValueTypes["RocketPayloadWeight"],
	second_stage?:ValueTypes["RocketSecondStage"],
	stages?:boolean,
	success_rate_pct?:boolean,
	type?:boolean,
	wikipedia?:boolean,
		__typename?: boolean
}>;
	["RocketEngines"]: AliasType<{
	number?:boolean,
	type?:boolean,
	version?:boolean,
	layout?:boolean,
	engine_loss_max?:boolean,
	propellant_1?:boolean,
	propellant_2?:boolean,
	thrust_sea_level?:ValueTypes["Force"],
	thrust_vacuum?:ValueTypes["Force"],
	thrust_to_weight?:boolean,
		__typename?: boolean
}>;
	["RocketFirstStage"]: AliasType<{
	burn_time_sec?:boolean,
	engines?:boolean,
	fuel_amount_tons?:boolean,
	reusable?:boolean,
	thrust_sea_level?:ValueTypes["Force"],
	thrust_vacuum?:ValueTypes["Force"],
		__typename?: boolean
}>;
	["RocketLandingLegs"]: AliasType<{
	number?:boolean,
	material?:boolean,
		__typename?: boolean
}>;
	["RocketPayloadWeight"]: AliasType<{
	id?:boolean,
	kg?:boolean,
	lb?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["RocketSecondStage"]: AliasType<{
	burn_time_sec?:boolean,
	engines?:boolean,
	fuel_amount_tons?:boolean,
	payloads?:ValueTypes["RocketSecondStagePayloads"],
	thrust?:ValueTypes["Force"],
		__typename?: boolean
}>;
	["RocketSecondStagePayloads"]: AliasType<{
	option_1?:boolean,
	composite_fairing?:ValueTypes["RocketSecondStagePayloadCompositeFairing"],
		__typename?: boolean
}>;
	["RocketSecondStagePayloadCompositeFairing"]: AliasType<{
	height?:ValueTypes["Distance"],
	diameter?:ValueTypes["Distance"],
		__typename?: boolean
}>;
	["LaunchRocketSecondStage"]: AliasType<{
	block?:boolean,
	payloads?:ValueTypes["Payload"],
		__typename?: boolean
}>;
	["Payload"]: AliasType<{
	customers?:boolean,
	id?:boolean,
	manufacturer?:boolean,
	nationality?:boolean,
	norad_id?:boolean,
	orbit_params?:ValueTypes["PayloadOrbitParams"],
	orbit?:boolean,
	payload_mass_kg?:boolean,
	payload_mass_lbs?:boolean,
	payload_type?:boolean,
	reused?:boolean,
		__typename?: boolean
}>;
	["PayloadOrbitParams"]: AliasType<{
	apoapsis_km?:boolean,
	arg_of_pericenter?:boolean,
	eccentricity?:boolean,
	epoch?:boolean,
	inclination_deg?:boolean,
	lifespan_years?:boolean,
	longitude?:boolean,
	mean_anomaly?:boolean,
	mean_motion?:boolean,
	periapsis_km?:boolean,
	period_min?:boolean,
	raan?:boolean,
	reference_system?:boolean,
	regime?:boolean,
	semi_major_axis_km?:boolean,
		__typename?: boolean
}>;
	["LaunchTelemetry"]: AliasType<{
	flight_club?:boolean,
		__typename?: boolean
}>;
	["Ship"]: AliasType<{
	abs?:boolean,
	active?:boolean,
	attempted_landings?:boolean,
	class?:boolean,
	course_deg?:boolean,
	home_port?:boolean,
	id?:boolean,
	image?:boolean,
	imo?:boolean,
	missions?:ValueTypes["ShipMission"],
	mmsi?:boolean,
	model?:boolean,
	name?:boolean,
	position?:ValueTypes["ShipLocation"],
	roles?:boolean,
	speed_kn?:boolean,
	status?:boolean,
	successful_landings?:boolean,
	type?:boolean,
	url?:boolean,
	weight_kg?:boolean,
	weight_lbs?:boolean,
	year_built?:boolean,
		__typename?: boolean
}>;
	["ShipMission"]: AliasType<{
	flight?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["ShipLocation"]: AliasType<{
	latitude?:boolean,
	longitude?:boolean,
		__typename?: boolean
}>;
	["HistoriesResult"]: AliasType<{
	result?:ValueTypes["Result"],
	data?:ValueTypes["History"],
		__typename?: boolean
}>;
	["Result"]: AliasType<{
	totalCount?:boolean,
		__typename?: boolean
}>;
	["Landpad"]: AliasType<{
	attempted_landings?:boolean,
	details?:boolean,
	full_name?:boolean,
	id?:boolean,
	landing_type?:boolean,
	location?:ValueTypes["Location"],
	status?:boolean,
	successful_landings?:boolean,
	wikipedia?:boolean,
		__typename?: boolean
}>;
	["Location"]: AliasType<{
	latitude?:boolean,
	longitude?:boolean,
	name?:boolean,
	region?:boolean,
		__typename?: boolean
}>;
	["LaunchFind"]: {
	apoapsis_km?:number | null,
	block?:number | null,
	cap_serial?:string | null,
	capsule_reuse?:string | null,
	core_flight?:number | null,
	core_reuse?:string | null,
	core_serial?:string | null,
	customer?:string | null,
	eccentricity?:number | null,
	end?:ValueTypes["Date"] | null,
	epoch?:ValueTypes["Date"] | null,
	fairings_recovered?:string | null,
	fairings_recovery_attempt?:string | null,
	fairings_reuse?:string | null,
	fairings_reused?:string | null,
	fairings_ship?:string | null,
	gridfins?:string | null,
	id?:string | null,
	inclination_deg?:number | null,
	land_success?:string | null,
	landing_intent?:string | null,
	landing_type?:string | null,
	landing_vehicle?:string | null,
	launch_date_local?:ValueTypes["Date"] | null,
	launch_date_utc?:ValueTypes["Date"] | null,
	launch_success?:string | null,
	launch_year?:string | null,
	legs?:string | null,
	lifespan_years?:number | null,
	longitude?:number | null,
	manufacturer?:string | null,
	mean_motion?:number | null,
	mission_id?:string | null,
	mission_name?:string | null,
	nationality?:string | null,
	norad_id?:number | null,
	orbit?:string | null,
	payload_id?:string | null,
	payload_type?:string | null,
	periapsis_km?:number | null,
	period_min?:number | null,
	raan?:number | null,
	reference_system?:string | null,
	regime?:string | null,
	reused?:string | null,
	rocket_id?:string | null,
	rocket_name?:string | null,
	rocket_type?:string | null,
	second_stage_block?:string | null,
	semi_major_axis_km?:number | null,
	ship?:string | null,
	side_core1_reuse?:string | null,
	side_core2_reuse?:string | null,
	site_id?:string | null,
	site_name_long?:string | null,
	site_name?:string | null,
	start?:ValueTypes["Date"] | null,
	tbd?:string | null,
	tentative_max_precision?:string | null,
	tentative?:string | null
};
	["LaunchesPastResult"]: AliasType<{
	result?:ValueTypes["Result"],
	data?:ValueTypes["Launch"],
		__typename?: boolean
}>;
	["Launchpad"]: AliasType<{
	attempted_launches?:boolean,
	details?:boolean,
	id?:boolean,
	location?:ValueTypes["Location"],
	name?:boolean,
	status?:boolean,
	successful_launches?:boolean,
	vehicles_launched?:ValueTypes["Rocket"],
	wikipedia?:boolean,
		__typename?: boolean
}>;
	["MissionsFind"]: {
	id?:string | null,
	manufacturer?:string | null,
	name?:string | null,
	payload_id?:string | null
};
	["Mission"]: AliasType<{
	description?:boolean,
	id?:boolean,
	manufacturers?:boolean,
	name?:boolean,
	twitter?:boolean,
	website?:boolean,
	wikipedia?:boolean,
	payloads?:ValueTypes["Payload"],
		__typename?: boolean
}>;
	["MissionResult"]: AliasType<{
	result?:ValueTypes["Result"],
	data?:ValueTypes["Mission"],
		__typename?: boolean
}>;
	["PayloadsFind"]: {
	apoapsis_km?:number | null,
	customer?:string | null,
	eccentricity?:number | null,
	epoch?:ValueTypes["Date"] | null,
	inclination_deg?:number | null,
	lifespan_years?:number | null,
	longitude?:number | null,
	manufacturer?:string | null,
	mean_motion?:number | null,
	nationality?:string | null,
	norad_id?:number | null,
	orbit?:string | null,
	payload_id?:string | null,
	payload_type?:string | null,
	periapsis_km?:number | null,
	period_min?:number | null,
	raan?:number | null,
	reference_system?:string | null,
	regime?:string | null,
	reused?:boolean | null,
	semi_major_axis_km?:number | null
};
	["Roadster"]: AliasType<{
	apoapsis_au?:boolean,
	details?:boolean,
	earth_distance_km?:boolean,
	earth_distance_mi?:boolean,
	eccentricity?:boolean,
	epoch_jd?:boolean,
	inclination?:boolean,
	launch_date_unix?:boolean,
	launch_date_utc?:boolean,
	launch_mass_kg?:boolean,
	launch_mass_lbs?:boolean,
	longitude?:boolean,
	mars_distance_km?:boolean,
	mars_distance_mi?:boolean,
	name?:boolean,
	norad_id?:boolean,
	orbit_type?:boolean,
	periapsis_arg?:boolean,
	periapsis_au?:boolean,
	period_days?:boolean,
	semi_major_axis_au?:boolean,
	speed_kph?:boolean,
	speed_mph?:boolean,
	wikipedia?:boolean,
		__typename?: boolean
}>;
	["RocketsResult"]: AliasType<{
	result?:ValueTypes["Result"],
	data?:ValueTypes["Rocket"],
		__typename?: boolean
}>;
	["ShipsFind"]: {
	id?:string | null,
	name?:string | null,
	model?:string | null,
	type?:string | null,
	role?:string | null,
	active?:boolean | null,
	imo?:number | null,
	mmsi?:number | null,
	abs?:number | null,
	class?:number | null,
	weight_lbs?:number | null,
	weight_kg?:number | null,
	year_built?:number | null,
	home_port?:string | null,
	status?:string | null,
	speed_kn?:number | null,
	course_deg?:number | null,
	latitude?:number | null,
	longitude?:number | null,
	successful_landings?:number | null,
	attempted_landings?:number | null,
	mission?:string | null
};
	["ShipsResult"]: AliasType<{
	result?:ValueTypes["Result"],
	data?:ValueTypes["Ship"],
		__typename?: boolean
}>;
	["Mutation"]: AliasType<{
delete_users?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["users_bool_exp"]},ValueTypes["users_mutation_response"]],
insert_users?: [{	/** the rows to be inserted */
	objects:ValueTypes["users_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["users_on_conflict"] | null},ValueTypes["users_mutation_response"]],
update_users?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["users_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["users_bool_exp"]},ValueTypes["users_mutation_response"]],
		__typename?: boolean
}>;
	/** response of any mutation on the table "users" */
["users_mutation_response"]: AliasType<{
	/** number of affected rows by the mutation */
	affected_rows?:boolean,
	/** data of the affected rows by the mutation */
	returning?:ValueTypes["users"],
		__typename?: boolean
}>;
	/** input type for inserting data into table "users" */
["users_insert_input"]: {
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	rocket?:string | null,
	timestamp?:ValueTypes["timestamptz"] | null,
	twitter?:string | null
};
	/** on conflict condition type for table "users" */
["users_on_conflict"]: {
	constraint:ValueTypes["users_constraint"],
	update_columns:ValueTypes["users_update_column"][]
};
	/** unique or primary key constraints on table "users" */
["users_constraint"]:users_constraint;
	/** update columns of table "users" */
["users_update_column"]:users_update_column;
	/** input type for updating data in table "users" */
["users_set_input"]: {
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	rocket?:string | null,
	timestamp?:ValueTypes["timestamptz"] | null,
	twitter?:string | null
};
	["Subscription"]: AliasType<{
users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the nuber of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users"]],
users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the nuber of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users_aggregate"]],
users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["users"]],
		__typename?: boolean
}>;
	/** conflict action */
["conflict_action"]:conflict_action;
	/** order by aggregate values of table "users" */
["users_aggregate_order_by"]: {
	count?:ValueTypes["order_by"] | null,
	max?:ValueTypes["users_max_order_by"] | null,
	min?:ValueTypes["users_min_order_by"] | null
};
	/** order by max() on columns of table "users" */
["users_max_order_by"]: {
	name?:ValueTypes["order_by"] | null,
	rocket?:ValueTypes["order_by"] | null,
	timestamp?:ValueTypes["order_by"] | null,
	twitter?:ValueTypes["order_by"] | null
};
	/** order by min() on columns of table "users" */
["users_min_order_by"]: {
	name?:ValueTypes["order_by"] | null,
	rocket?:ValueTypes["order_by"] | null,
	timestamp?:ValueTypes["order_by"] | null,
	twitter?:ValueTypes["order_by"] | null
};
	/** input type for inserting array relation for remote table "users" */
["users_arr_rel_insert_input"]: {
	data:ValueTypes["users_insert_input"][],
	on_conflict?:ValueTypes["users_on_conflict"] | null
};
	/** input type for inserting object relation for remote table "users" */
["users_obj_rel_insert_input"]: {
	data:ValueTypes["users_insert_input"],
	on_conflict?:ValueTypes["users_on_conflict"] | null
};
	["ObjectID"]:unknown;
	["CoreMission"]: AliasType<{
	name?:boolean,
	flight?:boolean,
		__typename?: boolean
}>
  }

export type ModelTypes = {
    ["Query"]: {
		/** fetch data from the table: "users" */
	users:ModelTypes["users"][],
	/** fetch aggregated fields from the table: "users" */
	users_aggregate:ModelTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?:ModelTypes["users"],
	capsules?:(ModelTypes["Capsule"] | undefined)[],
	capsulesPast?:(ModelTypes["Capsule"] | undefined)[],
	capsulesUpcoming?:(ModelTypes["Capsule"] | undefined)[],
	capsule?:ModelTypes["Capsule"],
	company?:ModelTypes["Info"],
	cores?:(ModelTypes["Core"] | undefined)[],
	coresPast?:(ModelTypes["Core"] | undefined)[],
	coresUpcoming?:(ModelTypes["Core"] | undefined)[],
	core?:ModelTypes["Core"],
	dragons?:(ModelTypes["Dragon"] | undefined)[],
	dragon?:ModelTypes["Dragon"],
	histories?:(ModelTypes["History"] | undefined)[],
	historiesResult?:ModelTypes["HistoriesResult"],
	history?:ModelTypes["History"],
	landpads?:(ModelTypes["Landpad"] | undefined)[],
	landpad?:ModelTypes["Landpad"],
	launches?:(ModelTypes["Launch"] | undefined)[],
	launchesPast?:(ModelTypes["Launch"] | undefined)[],
	launchesPastResult?:ModelTypes["LaunchesPastResult"],
	launchesUpcoming?:(ModelTypes["Launch"] | undefined)[],
	launch?:ModelTypes["Launch"],
	launchLatest?:ModelTypes["Launch"],
	launchNext?:ModelTypes["Launch"],
	launchpads?:(ModelTypes["Launchpad"] | undefined)[],
	launchpad?:ModelTypes["Launchpad"],
	missions?:(ModelTypes["Mission"] | undefined)[],
	missionsResult?:ModelTypes["MissionResult"],
	mission?:ModelTypes["Mission"],
	payloads?:(ModelTypes["Payload"] | undefined)[],
	payload?:ModelTypes["Payload"],
	roadster?:ModelTypes["Roadster"],
	rockets?:(ModelTypes["Rocket"] | undefined)[],
	rocketsResult?:ModelTypes["RocketsResult"],
	rocket?:ModelTypes["Rocket"],
	ships?:(ModelTypes["Ship"] | undefined)[],
	shipsResult?:ModelTypes["ShipsResult"],
	ship?:ModelTypes["Ship"]
};
	/** select columns of table "users" */
["users_select_column"]: GraphQLTypes["users_select_column"];
	/** ordering options when selecting data from "users" */
["users_order_by"]: GraphQLTypes["users_order_by"];
	/** column ordering options */
["order_by"]: GraphQLTypes["order_by"];
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: GraphQLTypes["users_bool_exp"];
	/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: GraphQLTypes["uuid_comparison_exp"];
	["uuid"]:any;
	/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
["String_comparison_exp"]: GraphQLTypes["String_comparison_exp"];
	/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: GraphQLTypes["timestamptz_comparison_exp"];
	["timestamptz"]:any;
	/** columns and relationships of "users" */
["users"]: {
		id:ModelTypes["uuid"],
	name?:string,
	rocket?:string,
	timestamp:ModelTypes["timestamptz"],
	twitter?:string
};
	/** aggregated selection of "users" */
["users_aggregate"]: {
		aggregate?:ModelTypes["users_aggregate_fields"],
	nodes:ModelTypes["users"][]
};
	/** aggregate fields of "users" */
["users_aggregate_fields"]: {
		count?:number,
	max?:ModelTypes["users_max_fields"],
	min?:ModelTypes["users_min_fields"]
};
	/** aggregate max on columns */
["users_max_fields"]: {
		name?:string,
	rocket?:string,
	timestamp?:ModelTypes["timestamptz"],
	twitter?:string
};
	/** aggregate min on columns */
["users_min_fields"]: {
		name?:string,
	rocket?:string,
	timestamp?:ModelTypes["timestamptz"],
	twitter?:string
};
	["CapsulesFind"]: GraphQLTypes["CapsulesFind"];
	["Date"]:any;
	["Capsule"]: {
		id?:string,
	landings?:number,
	missions?:(ModelTypes["CapsuleMission"] | undefined)[],
	original_launch?:ModelTypes["Date"],
	reuse_count?:number,
	status?:string,
	type?:string,
	dragon?:ModelTypes["Dragon"]
};
	["CapsuleMission"]: {
		flight?:number,
	name?:string
};
	["Dragon"]: {
		active?:boolean,
	crew_capacity?:number,
	description?:string,
	diameter?:ModelTypes["Distance"],
	dry_mass_kg?:number,
	dry_mass_lb?:number,
	first_flight?:string,
	heat_shield?:ModelTypes["DragonHeatShield"],
	height_w_trunk?:ModelTypes["Distance"],
	id?:string,
	launch_payload_mass?:ModelTypes["Mass"],
	launch_payload_vol?:ModelTypes["Volume"],
	name?:string,
	orbit_duration_yr?:number,
	pressurized_capsule?:ModelTypes["DragonPressurizedCapsule"],
	return_payload_mass?:ModelTypes["Mass"],
	return_payload_vol?:ModelTypes["Volume"],
	sidewall_angle_deg?:number,
	thrusters?:(ModelTypes["DragonThrust"] | undefined)[],
	trunk?:ModelTypes["DragonTrunk"],
	type?:string,
	wikipedia?:string
};
	["Distance"]: {
		feet?:number,
	meters?:number
};
	["DragonHeatShield"]: {
		dev_partner?:string,
	material?:string,
	size_meters?:number,
	temp_degrees?:number
};
	["Mass"]: {
		kg?:number,
	lb?:number
};
	["Volume"]: {
		cubic_feet?:number,
	cubic_meters?:number
};
	["DragonPressurizedCapsule"]: {
		payload_volume?:ModelTypes["Volume"]
};
	["DragonThrust"]: {
		amount?:number,
	fuel_1?:string,
	fuel_2?:string,
	pods?:number,
	thrust?:ModelTypes["Force"],
	type?:string
};
	["Force"]: {
		kN?:number,
	lbf?:number
};
	["DragonTrunk"]: {
		cargo?:ModelTypes["DragonTrunkCargo"],
	trunk_volume?:ModelTypes["Volume"]
};
	["DragonTrunkCargo"]: {
		solar_array?:number,
	unpressurized_cargo?:boolean
};
	["Info"]: {
		ceo?:string,
	coo?:string,
	cto_propulsion?:string,
	cto?:string,
	employees?:number,
	founded?:number,
	founder?:string,
	headquarters?:ModelTypes["Address"],
	launch_sites?:number,
	links?:ModelTypes["InfoLinks"],
	name?:string,
	summary?:string,
	test_sites?:number,
	valuation?:number,
	vehicles?:number
};
	["Address"]: {
		address?:string,
	city?:string,
	state?:string
};
	["InfoLinks"]: {
		elon_twitter?:string,
	flickr?:string,
	twitter?:string,
	website?:string
};
	["CoresFind"]: GraphQLTypes["CoresFind"];
	["Core"]: {
		asds_attempts?:number,
	asds_landings?:number,
	block?:number,
	id?:string,
	missions?:(ModelTypes["CapsuleMission"] | undefined)[],
	original_launch?:ModelTypes["Date"],
	reuse_count?:number,
	rtls_attempts?:number,
	rtls_landings?:number,
	status?:string,
	water_landing?:boolean
};
	["HistoryFind"]: GraphQLTypes["HistoryFind"];
	["History"]: {
		details?:string,
	event_date_unix?:ModelTypes["Date"],
	event_date_utc?:ModelTypes["Date"],
	id?:string,
	links?:ModelTypes["Link"],
	title?:string,
	flight?:ModelTypes["Launch"]
};
	["Link"]: {
		article?:string,
	reddit?:string,
	wikipedia?:string
};
	["Launch"]: {
		details?:string,
	id?:string,
	is_tentative?:boolean,
	launch_date_local?:ModelTypes["Date"],
	launch_date_unix?:ModelTypes["Date"],
	launch_date_utc?:ModelTypes["Date"],
	launch_site?:ModelTypes["LaunchSite"],
	launch_success?:boolean,
	launch_year?:string,
	links?:ModelTypes["LaunchLinks"],
	mission_id?:(string | undefined)[],
	mission_name?:string,
	rocket?:ModelTypes["LaunchRocket"],
	static_fire_date_unix?:ModelTypes["Date"],
	static_fire_date_utc?:ModelTypes["Date"],
	telemetry?:ModelTypes["LaunchTelemetry"],
	tentative_max_precision?:string,
	upcoming?:boolean,
	ships?:(ModelTypes["Ship"] | undefined)[]
};
	["LaunchSite"]: {
		site_id?:string,
	site_name_long?:string,
	site_name?:string
};
	["LaunchLinks"]: {
		article_link?:string,
	flickr_images?:(string | undefined)[],
	mission_patch_small?:string,
	mission_patch?:string,
	presskit?:string,
	reddit_campaign?:string,
	reddit_launch?:string,
	reddit_media?:string,
	reddit_recovery?:string,
	video_link?:string,
	wikipedia?:string
};
	["LaunchRocket"]: {
		fairings?:ModelTypes["LaunchRocketFairings"],
	first_stage?:ModelTypes["LaunchRocketFirstStage"],
	rocket_name?:string,
	rocket_type?:string,
	rocket?:ModelTypes["Rocket"],
	second_stage?:ModelTypes["LaunchRocketSecondStage"]
};
	["LaunchRocketFairings"]: {
		recovered?:boolean,
	recovery_attempt?:boolean,
	reused?:boolean,
	ship?:string
};
	["LaunchRocketFirstStage"]: {
		cores?:(ModelTypes["LaunchRocketFirstStageCore"] | undefined)[]
};
	["LaunchRocketFirstStageCore"]: {
		block?:number,
	core?:ModelTypes["Core"],
	flight?:number,
	gridfins?:boolean,
	land_success?:boolean,
	landing_intent?:boolean,
	landing_type?:string,
	landing_vehicle?:string,
	legs?:boolean,
	reused?:boolean
};
	["Rocket"]: {
		active?:boolean,
	boosters?:number,
	company?:string,
	cost_per_launch?:number,
	country?:string,
	description?:string,
	diameter?:ModelTypes["Distance"],
	engines?:ModelTypes["RocketEngines"],
	first_flight?:ModelTypes["Date"],
	first_stage?:ModelTypes["RocketFirstStage"],
	height?:ModelTypes["Distance"],
	id?:string,
	landing_legs?:ModelTypes["RocketLandingLegs"],
	mass?:ModelTypes["Mass"],
	name?:string,
	payload_weights?:(ModelTypes["RocketPayloadWeight"] | undefined)[],
	second_stage?:ModelTypes["RocketSecondStage"],
	stages?:number,
	success_rate_pct?:number,
	type?:string,
	wikipedia?:string
};
	["RocketEngines"]: {
		number?:number,
	type?:string,
	version?:string,
	layout?:string,
	engine_loss_max?:string,
	propellant_1?:string,
	propellant_2?:string,
	thrust_sea_level?:ModelTypes["Force"],
	thrust_vacuum?:ModelTypes["Force"],
	thrust_to_weight?:number
};
	["RocketFirstStage"]: {
		burn_time_sec?:number,
	engines?:number,
	fuel_amount_tons?:number,
	reusable?:boolean,
	thrust_sea_level?:ModelTypes["Force"],
	thrust_vacuum?:ModelTypes["Force"]
};
	["RocketLandingLegs"]: {
		number?:number,
	material?:string
};
	["RocketPayloadWeight"]: {
		id?:string,
	kg?:number,
	lb?:number,
	name?:string
};
	["RocketSecondStage"]: {
		burn_time_sec?:number,
	engines?:number,
	fuel_amount_tons?:number,
	payloads?:ModelTypes["RocketSecondStagePayloads"],
	thrust?:ModelTypes["Force"]
};
	["RocketSecondStagePayloads"]: {
		option_1?:string,
	composite_fairing?:ModelTypes["RocketSecondStagePayloadCompositeFairing"]
};
	["RocketSecondStagePayloadCompositeFairing"]: {
		height?:ModelTypes["Distance"],
	diameter?:ModelTypes["Distance"]
};
	["LaunchRocketSecondStage"]: {
		block?:number,
	payloads?:(ModelTypes["Payload"] | undefined)[]
};
	["Payload"]: {
		customers?:(string | undefined)[],
	id?:string,
	manufacturer?:string,
	nationality?:string,
	norad_id?:(number | undefined)[],
	orbit_params?:ModelTypes["PayloadOrbitParams"],
	orbit?:string,
	payload_mass_kg?:number,
	payload_mass_lbs?:number,
	payload_type?:string,
	reused?:boolean
};
	["PayloadOrbitParams"]: {
		apoapsis_km?:number,
	arg_of_pericenter?:number,
	eccentricity?:number,
	epoch?:ModelTypes["Date"],
	inclination_deg?:number,
	lifespan_years?:number,
	longitude?:number,
	mean_anomaly?:number,
	mean_motion?:number,
	periapsis_km?:number,
	period_min?:number,
	raan?:number,
	reference_system?:string,
	regime?:string,
	semi_major_axis_km?:number
};
	["LaunchTelemetry"]: {
		flight_club?:string
};
	["Ship"]: {
		abs?:number,
	active?:boolean,
	attempted_landings?:number,
	class?:number,
	course_deg?:number,
	home_port?:string,
	id?:string,
	image?:string,
	imo?:number,
	missions?:(ModelTypes["ShipMission"] | undefined)[],
	mmsi?:number,
	model?:string,
	name?:string,
	position?:ModelTypes["ShipLocation"],
	roles?:(string | undefined)[],
	speed_kn?:number,
	status?:string,
	successful_landings?:number,
	type?:string,
	url?:string,
	weight_kg?:number,
	weight_lbs?:number,
	year_built?:number
};
	["ShipMission"]: {
		flight?:string,
	name?:string
};
	["ShipLocation"]: {
		latitude?:number,
	longitude?:number
};
	["HistoriesResult"]: {
		result?:ModelTypes["Result"],
	data?:(ModelTypes["History"] | undefined)[]
};
	["Result"]: {
		totalCount?:number
};
	["Landpad"]: {
		attempted_landings?:string,
	details?:string,
	full_name?:string,
	id?:string,
	landing_type?:string,
	location?:ModelTypes["Location"],
	status?:string,
	successful_landings?:string,
	wikipedia?:string
};
	["Location"]: {
		latitude?:number,
	longitude?:number,
	name?:string,
	region?:string
};
	["LaunchFind"]: GraphQLTypes["LaunchFind"];
	["LaunchesPastResult"]: {
		result?:ModelTypes["Result"],
	data?:(ModelTypes["Launch"] | undefined)[]
};
	["Launchpad"]: {
		attempted_launches?:number,
	details?:string,
	id?:string,
	location?:ModelTypes["Location"],
	name?:string,
	status?:string,
	successful_launches?:number,
	vehicles_launched?:(ModelTypes["Rocket"] | undefined)[],
	wikipedia?:string
};
	["MissionsFind"]: GraphQLTypes["MissionsFind"];
	["Mission"]: {
		description?:string,
	id?:string,
	manufacturers?:(string | undefined)[],
	name?:string,
	twitter?:string,
	website?:string,
	wikipedia?:string,
	payloads?:(ModelTypes["Payload"] | undefined)[]
};
	["MissionResult"]: {
		result?:ModelTypes["Result"],
	data?:(ModelTypes["Mission"] | undefined)[]
};
	["PayloadsFind"]: GraphQLTypes["PayloadsFind"];
	["Roadster"]: {
		apoapsis_au?:number,
	details?:string,
	earth_distance_km?:number,
	earth_distance_mi?:number,
	eccentricity?:number,
	epoch_jd?:number,
	inclination?:number,
	launch_date_unix?:ModelTypes["Date"],
	launch_date_utc?:ModelTypes["Date"],
	launch_mass_kg?:number,
	launch_mass_lbs?:number,
	longitude?:number,
	mars_distance_km?:number,
	mars_distance_mi?:number,
	name?:string,
	norad_id?:number,
	orbit_type?:number,
	periapsis_arg?:number,
	periapsis_au?:number,
	period_days?:number,
	semi_major_axis_au?:number,
	speed_kph?:number,
	speed_mph?:number,
	wikipedia?:string
};
	["RocketsResult"]: {
		result?:ModelTypes["Result"],
	data?:(ModelTypes["Rocket"] | undefined)[]
};
	["ShipsFind"]: GraphQLTypes["ShipsFind"];
	["ShipsResult"]: {
		result?:ModelTypes["Result"],
	data?:(ModelTypes["Ship"] | undefined)[]
};
	["Mutation"]: {
		/** delete data from the table: "users" */
	delete_users?:ModelTypes["users_mutation_response"],
	/** insert data into the table: "users" */
	insert_users?:ModelTypes["users_mutation_response"],
	/** update data of the table: "users" */
	update_users?:ModelTypes["users_mutation_response"]
};
	/** response of any mutation on the table "users" */
["users_mutation_response"]: {
		/** number of affected rows by the mutation */
	affected_rows:number,
	/** data of the affected rows by the mutation */
	returning:ModelTypes["users"][]
};
	/** input type for inserting data into table "users" */
["users_insert_input"]: GraphQLTypes["users_insert_input"];
	/** on conflict condition type for table "users" */
["users_on_conflict"]: GraphQLTypes["users_on_conflict"];
	/** unique or primary key constraints on table "users" */
["users_constraint"]: GraphQLTypes["users_constraint"];
	/** update columns of table "users" */
["users_update_column"]: GraphQLTypes["users_update_column"];
	/** input type for updating data in table "users" */
["users_set_input"]: GraphQLTypes["users_set_input"];
	["Subscription"]: {
		/** fetch data from the table: "users" */
	users:ModelTypes["users"][],
	/** fetch aggregated fields from the table: "users" */
	users_aggregate:ModelTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?:ModelTypes["users"]
};
	/** conflict action */
["conflict_action"]: GraphQLTypes["conflict_action"];
	/** order by aggregate values of table "users" */
["users_aggregate_order_by"]: GraphQLTypes["users_aggregate_order_by"];
	/** order by max() on columns of table "users" */
["users_max_order_by"]: GraphQLTypes["users_max_order_by"];
	/** order by min() on columns of table "users" */
["users_min_order_by"]: GraphQLTypes["users_min_order_by"];
	/** input type for inserting array relation for remote table "users" */
["users_arr_rel_insert_input"]: GraphQLTypes["users_arr_rel_insert_input"];
	/** input type for inserting object relation for remote table "users" */
["users_obj_rel_insert_input"]: GraphQLTypes["users_obj_rel_insert_input"];
	["ObjectID"]:any;
	["CoreMission"]: {
		name?:string,
	flight?:number
}
    }

export type GraphQLTypes = {
    ["Query"]: {
	__typename: "Query",
	/** fetch data from the table: "users" */
	users: Array<GraphQLTypes["users"]>,
	/** fetch aggregated fields from the table: "users" */
	users_aggregate: GraphQLTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?: GraphQLTypes["users"],
	capsules?: Array<GraphQLTypes["Capsule"] | undefined>,
	capsulesPast?: Array<GraphQLTypes["Capsule"] | undefined>,
	capsulesUpcoming?: Array<GraphQLTypes["Capsule"] | undefined>,
	capsule?: GraphQLTypes["Capsule"],
	company?: GraphQLTypes["Info"],
	cores?: Array<GraphQLTypes["Core"] | undefined>,
	coresPast?: Array<GraphQLTypes["Core"] | undefined>,
	coresUpcoming?: Array<GraphQLTypes["Core"] | undefined>,
	core?: GraphQLTypes["Core"],
	dragons?: Array<GraphQLTypes["Dragon"] | undefined>,
	dragon?: GraphQLTypes["Dragon"],
	histories?: Array<GraphQLTypes["History"] | undefined>,
	historiesResult?: GraphQLTypes["HistoriesResult"],
	history?: GraphQLTypes["History"],
	landpads?: Array<GraphQLTypes["Landpad"] | undefined>,
	landpad?: GraphQLTypes["Landpad"],
	launches?: Array<GraphQLTypes["Launch"] | undefined>,
	launchesPast?: Array<GraphQLTypes["Launch"] | undefined>,
	launchesPastResult?: GraphQLTypes["LaunchesPastResult"],
	launchesUpcoming?: Array<GraphQLTypes["Launch"] | undefined>,
	launch?: GraphQLTypes["Launch"],
	launchLatest?: GraphQLTypes["Launch"],
	launchNext?: GraphQLTypes["Launch"],
	launchpads?: Array<GraphQLTypes["Launchpad"] | undefined>,
	launchpad?: GraphQLTypes["Launchpad"],
	missions?: Array<GraphQLTypes["Mission"] | undefined>,
	missionsResult?: GraphQLTypes["MissionResult"],
	mission?: GraphQLTypes["Mission"],
	payloads?: Array<GraphQLTypes["Payload"] | undefined>,
	payload?: GraphQLTypes["Payload"],
	roadster?: GraphQLTypes["Roadster"],
	rockets?: Array<GraphQLTypes["Rocket"] | undefined>,
	rocketsResult?: GraphQLTypes["RocketsResult"],
	rocket?: GraphQLTypes["Rocket"],
	ships?: Array<GraphQLTypes["Ship"] | undefined>,
	shipsResult?: GraphQLTypes["ShipsResult"],
	ship?: GraphQLTypes["Ship"]
};
	/** select columns of table "users" */
["users_select_column"]: users_select_column;
	/** ordering options when selecting data from "users" */
["users_order_by"]: {
		id?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"],
	rocket?: GraphQLTypes["order_by"],
	timestamp?: GraphQLTypes["order_by"],
	twitter?: GraphQLTypes["order_by"]
};
	/** column ordering options */
["order_by"]: order_by;
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: {
		_and?: Array<GraphQLTypes["users_bool_exp"] | undefined>,
	_not?: GraphQLTypes["users_bool_exp"],
	_or?: Array<GraphQLTypes["users_bool_exp"] | undefined>,
	id?: GraphQLTypes["uuid_comparison_exp"],
	name?: GraphQLTypes["String_comparison_exp"],
	rocket?: GraphQLTypes["String_comparison_exp"],
	timestamp?: GraphQLTypes["timestamptz_comparison_exp"],
	twitter?: GraphQLTypes["String_comparison_exp"]
};
	/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: {
		_eq?: GraphQLTypes["uuid"],
	_gt?: GraphQLTypes["uuid"],
	_gte?: GraphQLTypes["uuid"],
	_in?: Array<GraphQLTypes["uuid"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["uuid"],
	_lte?: GraphQLTypes["uuid"],
	_neq?: GraphQLTypes["uuid"],
	_nin?: Array<GraphQLTypes["uuid"]>
};
	["uuid"]:any;
	/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
		_eq?: string,
	_gt?: string,
	_gte?: string,
	_ilike?: string,
	_in?: Array<string>,
	_is_null?: boolean,
	_like?: string,
	_lt?: string,
	_lte?: string,
	_neq?: string,
	_nilike?: string,
	_nin?: Array<string>,
	_nlike?: string,
	_nsimilar?: string,
	_similar?: string
};
	/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
["timestamptz_comparison_exp"]: {
		_eq?: GraphQLTypes["timestamptz"],
	_gt?: GraphQLTypes["timestamptz"],
	_gte?: GraphQLTypes["timestamptz"],
	_in?: Array<GraphQLTypes["timestamptz"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["timestamptz"],
	_lte?: GraphQLTypes["timestamptz"],
	_neq?: GraphQLTypes["timestamptz"],
	_nin?: Array<GraphQLTypes["timestamptz"]>
};
	["timestamptz"]:any;
	/** columns and relationships of "users" */
["users"]: {
	__typename: "users",
	id: GraphQLTypes["uuid"],
	name?: string,
	rocket?: string,
	timestamp: GraphQLTypes["timestamptz"],
	twitter?: string
};
	/** aggregated selection of "users" */
["users_aggregate"]: {
	__typename: "users_aggregate",
	aggregate?: GraphQLTypes["users_aggregate_fields"],
	nodes: Array<GraphQLTypes["users"]>
};
	/** aggregate fields of "users" */
["users_aggregate_fields"]: {
	__typename: "users_aggregate_fields",
	count?: number,
	max?: GraphQLTypes["users_max_fields"],
	min?: GraphQLTypes["users_min_fields"]
};
	/** aggregate max on columns */
["users_max_fields"]: {
	__typename: "users_max_fields",
	name?: string,
	rocket?: string,
	timestamp?: GraphQLTypes["timestamptz"],
	twitter?: string
};
	/** aggregate min on columns */
["users_min_fields"]: {
	__typename: "users_min_fields",
	name?: string,
	rocket?: string,
	timestamp?: GraphQLTypes["timestamptz"],
	twitter?: string
};
	["CapsulesFind"]: {
		id?: string,
	landings?: number,
	mission?: string,
	original_launch?: GraphQLTypes["Date"],
	reuse_count?: number,
	status?: string,
	type?: string
};
	["Date"]:any;
	["Capsule"]: {
	__typename: "Capsule",
	id?: string,
	landings?: number,
	missions?: Array<GraphQLTypes["CapsuleMission"] | undefined>,
	original_launch?: GraphQLTypes["Date"],
	reuse_count?: number,
	status?: string,
	type?: string,
	dragon?: GraphQLTypes["Dragon"]
};
	["CapsuleMission"]: {
	__typename: "CapsuleMission",
	flight?: number,
	name?: string
};
	["Dragon"]: {
	__typename: "Dragon",
	active?: boolean,
	crew_capacity?: number,
	description?: string,
	diameter?: GraphQLTypes["Distance"],
	dry_mass_kg?: number,
	dry_mass_lb?: number,
	first_flight?: string,
	heat_shield?: GraphQLTypes["DragonHeatShield"],
	height_w_trunk?: GraphQLTypes["Distance"],
	id?: string,
	launch_payload_mass?: GraphQLTypes["Mass"],
	launch_payload_vol?: GraphQLTypes["Volume"],
	name?: string,
	orbit_duration_yr?: number,
	pressurized_capsule?: GraphQLTypes["DragonPressurizedCapsule"],
	return_payload_mass?: GraphQLTypes["Mass"],
	return_payload_vol?: GraphQLTypes["Volume"],
	sidewall_angle_deg?: number,
	thrusters?: Array<GraphQLTypes["DragonThrust"] | undefined>,
	trunk?: GraphQLTypes["DragonTrunk"],
	type?: string,
	wikipedia?: string
};
	["Distance"]: {
	__typename: "Distance",
	feet?: number,
	meters?: number
};
	["DragonHeatShield"]: {
	__typename: "DragonHeatShield",
	dev_partner?: string,
	material?: string,
	size_meters?: number,
	temp_degrees?: number
};
	["Mass"]: {
	__typename: "Mass",
	kg?: number,
	lb?: number
};
	["Volume"]: {
	__typename: "Volume",
	cubic_feet?: number,
	cubic_meters?: number
};
	["DragonPressurizedCapsule"]: {
	__typename: "DragonPressurizedCapsule",
	payload_volume?: GraphQLTypes["Volume"]
};
	["DragonThrust"]: {
	__typename: "DragonThrust",
	amount?: number,
	fuel_1?: string,
	fuel_2?: string,
	pods?: number,
	thrust?: GraphQLTypes["Force"],
	type?: string
};
	["Force"]: {
	__typename: "Force",
	kN?: number,
	lbf?: number
};
	["DragonTrunk"]: {
	__typename: "DragonTrunk",
	cargo?: GraphQLTypes["DragonTrunkCargo"],
	trunk_volume?: GraphQLTypes["Volume"]
};
	["DragonTrunkCargo"]: {
	__typename: "DragonTrunkCargo",
	solar_array?: number,
	unpressurized_cargo?: boolean
};
	["Info"]: {
	__typename: "Info",
	ceo?: string,
	coo?: string,
	cto_propulsion?: string,
	cto?: string,
	employees?: number,
	founded?: number,
	founder?: string,
	headquarters?: GraphQLTypes["Address"],
	launch_sites?: number,
	links?: GraphQLTypes["InfoLinks"],
	name?: string,
	summary?: string,
	test_sites?: number,
	valuation?: number,
	vehicles?: number
};
	["Address"]: {
	__typename: "Address",
	address?: string,
	city?: string,
	state?: string
};
	["InfoLinks"]: {
	__typename: "InfoLinks",
	elon_twitter?: string,
	flickr?: string,
	twitter?: string,
	website?: string
};
	["CoresFind"]: {
		asds_attempts?: number,
	asds_landings?: number,
	block?: number,
	id?: string,
	missions?: string,
	original_launch?: GraphQLTypes["Date"],
	reuse_count?: number,
	rtls_attempts?: number,
	rtls_landings?: number,
	status?: string,
	water_landing?: boolean
};
	["Core"]: {
	__typename: "Core",
	asds_attempts?: number,
	asds_landings?: number,
	block?: number,
	id?: string,
	missions?: Array<GraphQLTypes["CapsuleMission"] | undefined>,
	original_launch?: GraphQLTypes["Date"],
	reuse_count?: number,
	rtls_attempts?: number,
	rtls_landings?: number,
	status?: string,
	water_landing?: boolean
};
	["HistoryFind"]: {
		end?: GraphQLTypes["Date"],
	flight_number?: number,
	id?: string,
	start?: GraphQLTypes["Date"]
};
	["History"]: {
	__typename: "History",
	details?: string,
	event_date_unix?: GraphQLTypes["Date"],
	event_date_utc?: GraphQLTypes["Date"],
	id?: string,
	links?: GraphQLTypes["Link"],
	title?: string,
	flight?: GraphQLTypes["Launch"]
};
	["Link"]: {
	__typename: "Link",
	article?: string,
	reddit?: string,
	wikipedia?: string
};
	["Launch"]: {
	__typename: "Launch",
	details?: string,
	id?: string,
	is_tentative?: boolean,
	launch_date_local?: GraphQLTypes["Date"],
	launch_date_unix?: GraphQLTypes["Date"],
	launch_date_utc?: GraphQLTypes["Date"],
	launch_site?: GraphQLTypes["LaunchSite"],
	launch_success?: boolean,
	launch_year?: string,
	links?: GraphQLTypes["LaunchLinks"],
	mission_id?: Array<string | undefined>,
	mission_name?: string,
	rocket?: GraphQLTypes["LaunchRocket"],
	static_fire_date_unix?: GraphQLTypes["Date"],
	static_fire_date_utc?: GraphQLTypes["Date"],
	telemetry?: GraphQLTypes["LaunchTelemetry"],
	tentative_max_precision?: string,
	upcoming?: boolean,
	ships?: Array<GraphQLTypes["Ship"] | undefined>
};
	["LaunchSite"]: {
	__typename: "LaunchSite",
	site_id?: string,
	site_name_long?: string,
	site_name?: string
};
	["LaunchLinks"]: {
	__typename: "LaunchLinks",
	article_link?: string,
	flickr_images?: Array<string | undefined>,
	mission_patch_small?: string,
	mission_patch?: string,
	presskit?: string,
	reddit_campaign?: string,
	reddit_launch?: string,
	reddit_media?: string,
	reddit_recovery?: string,
	video_link?: string,
	wikipedia?: string
};
	["LaunchRocket"]: {
	__typename: "LaunchRocket",
	fairings?: GraphQLTypes["LaunchRocketFairings"],
	first_stage?: GraphQLTypes["LaunchRocketFirstStage"],
	rocket_name?: string,
	rocket_type?: string,
	rocket?: GraphQLTypes["Rocket"],
	second_stage?: GraphQLTypes["LaunchRocketSecondStage"]
};
	["LaunchRocketFairings"]: {
	__typename: "LaunchRocketFairings",
	recovered?: boolean,
	recovery_attempt?: boolean,
	reused?: boolean,
	ship?: string
};
	["LaunchRocketFirstStage"]: {
	__typename: "LaunchRocketFirstStage",
	cores?: Array<GraphQLTypes["LaunchRocketFirstStageCore"] | undefined>
};
	["LaunchRocketFirstStageCore"]: {
	__typename: "LaunchRocketFirstStageCore",
	block?: number,
	core?: GraphQLTypes["Core"],
	flight?: number,
	gridfins?: boolean,
	land_success?: boolean,
	landing_intent?: boolean,
	landing_type?: string,
	landing_vehicle?: string,
	legs?: boolean,
	reused?: boolean
};
	["Rocket"]: {
	__typename: "Rocket",
	active?: boolean,
	boosters?: number,
	company?: string,
	cost_per_launch?: number,
	country?: string,
	description?: string,
	diameter?: GraphQLTypes["Distance"],
	engines?: GraphQLTypes["RocketEngines"],
	first_flight?: GraphQLTypes["Date"],
	first_stage?: GraphQLTypes["RocketFirstStage"],
	height?: GraphQLTypes["Distance"],
	id?: string,
	landing_legs?: GraphQLTypes["RocketLandingLegs"],
	mass?: GraphQLTypes["Mass"],
	name?: string,
	payload_weights?: Array<GraphQLTypes["RocketPayloadWeight"] | undefined>,
	second_stage?: GraphQLTypes["RocketSecondStage"],
	stages?: number,
	success_rate_pct?: number,
	type?: string,
	wikipedia?: string
};
	["RocketEngines"]: {
	__typename: "RocketEngines",
	number?: number,
	type?: string,
	version?: string,
	layout?: string,
	engine_loss_max?: string,
	propellant_1?: string,
	propellant_2?: string,
	thrust_sea_level?: GraphQLTypes["Force"],
	thrust_vacuum?: GraphQLTypes["Force"],
	thrust_to_weight?: number
};
	["RocketFirstStage"]: {
	__typename: "RocketFirstStage",
	burn_time_sec?: number,
	engines?: number,
	fuel_amount_tons?: number,
	reusable?: boolean,
	thrust_sea_level?: GraphQLTypes["Force"],
	thrust_vacuum?: GraphQLTypes["Force"]
};
	["RocketLandingLegs"]: {
	__typename: "RocketLandingLegs",
	number?: number,
	material?: string
};
	["RocketPayloadWeight"]: {
	__typename: "RocketPayloadWeight",
	id?: string,
	kg?: number,
	lb?: number,
	name?: string
};
	["RocketSecondStage"]: {
	__typename: "RocketSecondStage",
	burn_time_sec?: number,
	engines?: number,
	fuel_amount_tons?: number,
	payloads?: GraphQLTypes["RocketSecondStagePayloads"],
	thrust?: GraphQLTypes["Force"]
};
	["RocketSecondStagePayloads"]: {
	__typename: "RocketSecondStagePayloads",
	option_1?: string,
	composite_fairing?: GraphQLTypes["RocketSecondStagePayloadCompositeFairing"]
};
	["RocketSecondStagePayloadCompositeFairing"]: {
	__typename: "RocketSecondStagePayloadCompositeFairing",
	height?: GraphQLTypes["Distance"],
	diameter?: GraphQLTypes["Distance"]
};
	["LaunchRocketSecondStage"]: {
	__typename: "LaunchRocketSecondStage",
	block?: number,
	payloads?: Array<GraphQLTypes["Payload"] | undefined>
};
	["Payload"]: {
	__typename: "Payload",
	customers?: Array<string | undefined>,
	id?: string,
	manufacturer?: string,
	nationality?: string,
	norad_id?: Array<number | undefined>,
	orbit_params?: GraphQLTypes["PayloadOrbitParams"],
	orbit?: string,
	payload_mass_kg?: number,
	payload_mass_lbs?: number,
	payload_type?: string,
	reused?: boolean
};
	["PayloadOrbitParams"]: {
	__typename: "PayloadOrbitParams",
	apoapsis_km?: number,
	arg_of_pericenter?: number,
	eccentricity?: number,
	epoch?: GraphQLTypes["Date"],
	inclination_deg?: number,
	lifespan_years?: number,
	longitude?: number,
	mean_anomaly?: number,
	mean_motion?: number,
	periapsis_km?: number,
	period_min?: number,
	raan?: number,
	reference_system?: string,
	regime?: string,
	semi_major_axis_km?: number
};
	["LaunchTelemetry"]: {
	__typename: "LaunchTelemetry",
	flight_club?: string
};
	["Ship"]: {
	__typename: "Ship",
	abs?: number,
	active?: boolean,
	attempted_landings?: number,
	class?: number,
	course_deg?: number,
	home_port?: string,
	id?: string,
	image?: string,
	imo?: number,
	missions?: Array<GraphQLTypes["ShipMission"] | undefined>,
	mmsi?: number,
	model?: string,
	name?: string,
	position?: GraphQLTypes["ShipLocation"],
	roles?: Array<string | undefined>,
	speed_kn?: number,
	status?: string,
	successful_landings?: number,
	type?: string,
	url?: string,
	weight_kg?: number,
	weight_lbs?: number,
	year_built?: number
};
	["ShipMission"]: {
	__typename: "ShipMission",
	flight?: string,
	name?: string
};
	["ShipLocation"]: {
	__typename: "ShipLocation",
	latitude?: number,
	longitude?: number
};
	["HistoriesResult"]: {
	__typename: "HistoriesResult",
	result?: GraphQLTypes["Result"],
	data?: Array<GraphQLTypes["History"] | undefined>
};
	["Result"]: {
	__typename: "Result",
	totalCount?: number
};
	["Landpad"]: {
	__typename: "Landpad",
	attempted_landings?: string,
	details?: string,
	full_name?: string,
	id?: string,
	landing_type?: string,
	location?: GraphQLTypes["Location"],
	status?: string,
	successful_landings?: string,
	wikipedia?: string
};
	["Location"]: {
	__typename: "Location",
	latitude?: number,
	longitude?: number,
	name?: string,
	region?: string
};
	["LaunchFind"]: {
		apoapsis_km?: number,
	block?: number,
	cap_serial?: string,
	capsule_reuse?: string,
	core_flight?: number,
	core_reuse?: string,
	core_serial?: string,
	customer?: string,
	eccentricity?: number,
	end?: GraphQLTypes["Date"],
	epoch?: GraphQLTypes["Date"],
	fairings_recovered?: string,
	fairings_recovery_attempt?: string,
	fairings_reuse?: string,
	fairings_reused?: string,
	fairings_ship?: string,
	gridfins?: string,
	id?: string,
	inclination_deg?: number,
	land_success?: string,
	landing_intent?: string,
	landing_type?: string,
	landing_vehicle?: string,
	launch_date_local?: GraphQLTypes["Date"],
	launch_date_utc?: GraphQLTypes["Date"],
	launch_success?: string,
	launch_year?: string,
	legs?: string,
	lifespan_years?: number,
	longitude?: number,
	manufacturer?: string,
	mean_motion?: number,
	mission_id?: string,
	mission_name?: string,
	nationality?: string,
	norad_id?: number,
	orbit?: string,
	payload_id?: string,
	payload_type?: string,
	periapsis_km?: number,
	period_min?: number,
	raan?: number,
	reference_system?: string,
	regime?: string,
	reused?: string,
	rocket_id?: string,
	rocket_name?: string,
	rocket_type?: string,
	second_stage_block?: string,
	semi_major_axis_km?: number,
	ship?: string,
	side_core1_reuse?: string,
	side_core2_reuse?: string,
	site_id?: string,
	site_name_long?: string,
	site_name?: string,
	start?: GraphQLTypes["Date"],
	tbd?: string,
	tentative_max_precision?: string,
	tentative?: string
};
	["LaunchesPastResult"]: {
	__typename: "LaunchesPastResult",
	result?: GraphQLTypes["Result"],
	data?: Array<GraphQLTypes["Launch"] | undefined>
};
	["Launchpad"]: {
	__typename: "Launchpad",
	attempted_launches?: number,
	details?: string,
	id?: string,
	location?: GraphQLTypes["Location"],
	name?: string,
	status?: string,
	successful_launches?: number,
	vehicles_launched?: Array<GraphQLTypes["Rocket"] | undefined>,
	wikipedia?: string
};
	["MissionsFind"]: {
		id?: string,
	manufacturer?: string,
	name?: string,
	payload_id?: string
};
	["Mission"]: {
	__typename: "Mission",
	description?: string,
	id?: string,
	manufacturers?: Array<string | undefined>,
	name?: string,
	twitter?: string,
	website?: string,
	wikipedia?: string,
	payloads?: Array<GraphQLTypes["Payload"] | undefined>
};
	["MissionResult"]: {
	__typename: "MissionResult",
	result?: GraphQLTypes["Result"],
	data?: Array<GraphQLTypes["Mission"] | undefined>
};
	["PayloadsFind"]: {
		apoapsis_km?: number,
	customer?: string,
	eccentricity?: number,
	epoch?: GraphQLTypes["Date"],
	inclination_deg?: number,
	lifespan_years?: number,
	longitude?: number,
	manufacturer?: string,
	mean_motion?: number,
	nationality?: string,
	norad_id?: number,
	orbit?: string,
	payload_id?: string,
	payload_type?: string,
	periapsis_km?: number,
	period_min?: number,
	raan?: number,
	reference_system?: string,
	regime?: string,
	reused?: boolean,
	semi_major_axis_km?: number
};
	["Roadster"]: {
	__typename: "Roadster",
	apoapsis_au?: number,
	details?: string,
	earth_distance_km?: number,
	earth_distance_mi?: number,
	eccentricity?: number,
	epoch_jd?: number,
	inclination?: number,
	launch_date_unix?: GraphQLTypes["Date"],
	launch_date_utc?: GraphQLTypes["Date"],
	launch_mass_kg?: number,
	launch_mass_lbs?: number,
	longitude?: number,
	mars_distance_km?: number,
	mars_distance_mi?: number,
	name?: string,
	norad_id?: number,
	orbit_type?: number,
	periapsis_arg?: number,
	periapsis_au?: number,
	period_days?: number,
	semi_major_axis_au?: number,
	speed_kph?: number,
	speed_mph?: number,
	wikipedia?: string
};
	["RocketsResult"]: {
	__typename: "RocketsResult",
	result?: GraphQLTypes["Result"],
	data?: Array<GraphQLTypes["Rocket"] | undefined>
};
	["ShipsFind"]: {
		id?: string,
	name?: string,
	model?: string,
	type?: string,
	role?: string,
	active?: boolean,
	imo?: number,
	mmsi?: number,
	abs?: number,
	class?: number,
	weight_lbs?: number,
	weight_kg?: number,
	year_built?: number,
	home_port?: string,
	status?: string,
	speed_kn?: number,
	course_deg?: number,
	latitude?: number,
	longitude?: number,
	successful_landings?: number,
	attempted_landings?: number,
	mission?: string
};
	["ShipsResult"]: {
	__typename: "ShipsResult",
	result?: GraphQLTypes["Result"],
	data?: Array<GraphQLTypes["Ship"] | undefined>
};
	["Mutation"]: {
	__typename: "Mutation",
	/** delete data from the table: "users" */
	delete_users?: GraphQLTypes["users_mutation_response"],
	/** insert data into the table: "users" */
	insert_users?: GraphQLTypes["users_mutation_response"],
	/** update data of the table: "users" */
	update_users?: GraphQLTypes["users_mutation_response"]
};
	/** response of any mutation on the table "users" */
["users_mutation_response"]: {
	__typename: "users_mutation_response",
	/** number of affected rows by the mutation */
	affected_rows: number,
	/** data of the affected rows by the mutation */
	returning: Array<GraphQLTypes["users"]>
};
	/** input type for inserting data into table "users" */
["users_insert_input"]: {
		id?: GraphQLTypes["uuid"],
	name?: string,
	rocket?: string,
	timestamp?: GraphQLTypes["timestamptz"],
	twitter?: string
};
	/** on conflict condition type for table "users" */
["users_on_conflict"]: {
		constraint: GraphQLTypes["users_constraint"],
	update_columns: Array<GraphQLTypes["users_update_column"]>
};
	/** unique or primary key constraints on table "users" */
["users_constraint"]: users_constraint;
	/** update columns of table "users" */
["users_update_column"]: users_update_column;
	/** input type for updating data in table "users" */
["users_set_input"]: {
		id?: GraphQLTypes["uuid"],
	name?: string,
	rocket?: string,
	timestamp?: GraphQLTypes["timestamptz"],
	twitter?: string
};
	["Subscription"]: {
	__typename: "Subscription",
	/** fetch data from the table: "users" */
	users: Array<GraphQLTypes["users"]>,
	/** fetch aggregated fields from the table: "users" */
	users_aggregate: GraphQLTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?: GraphQLTypes["users"]
};
	/** conflict action */
["conflict_action"]: conflict_action;
	/** order by aggregate values of table "users" */
["users_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["users_max_order_by"],
	min?: GraphQLTypes["users_min_order_by"]
};
	/** order by max() on columns of table "users" */
["users_max_order_by"]: {
		name?: GraphQLTypes["order_by"],
	rocket?: GraphQLTypes["order_by"],
	timestamp?: GraphQLTypes["order_by"],
	twitter?: GraphQLTypes["order_by"]
};
	/** order by min() on columns of table "users" */
["users_min_order_by"]: {
		name?: GraphQLTypes["order_by"],
	rocket?: GraphQLTypes["order_by"],
	timestamp?: GraphQLTypes["order_by"],
	twitter?: GraphQLTypes["order_by"]
};
	/** input type for inserting array relation for remote table "users" */
["users_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["users_insert_input"]>,
	on_conflict?: GraphQLTypes["users_on_conflict"]
};
	/** input type for inserting object relation for remote table "users" */
["users_obj_rel_insert_input"]: {
		data: GraphQLTypes["users_insert_input"],
	on_conflict?: GraphQLTypes["users_on_conflict"]
};
	["ObjectID"]:any;
	["CoreMission"]: {
	__typename: "CoreMission",
	name?: string,
	flight?: number
}
    }
/** select columns of table "users" */
export const enum users_select_column {
	id = "id",
	name = "name",
	rocket = "rocket",
	timestamp = "timestamp",
	twitter = "twitter"
}
/** column ordering options */
export const enum order_by {
	asc = "asc",
	asc_nulls_first = "asc_nulls_first",
	asc_nulls_last = "asc_nulls_last",
	desc = "desc",
	desc_nulls_first = "desc_nulls_first",
	desc_nulls_last = "desc_nulls_last"
}
/** unique or primary key constraints on table "users" */
export const enum users_constraint {
	users_pkey = "users_pkey"
}
/** update columns of table "users" */
export const enum users_update_column {
	id = "id",
	name = "name",
	rocket = "rocket",
	timestamp = "timestamp",
	twitter = "twitter"
}
/** conflict action */
export const enum conflict_action {
	ignore = "ignore",
	update = "update"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: boolean;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type SubscriptionToGraphQL<Z, T> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  X,
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };



const allOperations = {
    "query": "Query",
    "mutation": "Mutation",
    "subscription": "Subscription"
}

export type GenericOperation<O> = O extends 'query'
  ? "Query"
  : O extends 'mutation'
  ? "Mutation"
  : "Subscription"

export const Thunder = (fn: FetchFunction) => <
  O extends 'query' | 'mutation' | 'subscription',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));  
  
export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends 'query' | 'mutation' | 'subscription',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(
  o: Z | ValueTypes[R],
  ops?: OperationOptions
)=>
  fullSubscriptionConstruct(fn)(operation, allOperations[operation])(
    o as any,
    ops,
  ) as SubscriptionToGraphQL<Z, GraphQLTypes[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends 'query' | 'mutation' | 'subscription',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ValueTypes[R],
  operationName?: string,
) => queryConstruct(operation, allOperations[operation], operationName)(o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();
  

export const Gql = Chain('https://api.spacex.land/graphql/')