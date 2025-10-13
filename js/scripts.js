// Initialise Lucide icons
lucide.createIcons();

// Chart JSON specs
const specs = {
  map: "FIT3179-DATA-VIS-2/js/map_chart.json",
  timeline: "FIT3179-DATA-VIS-2/js/surface_timeline.json",
  attendance: "FIT3179-DATA-VIS-2/js/attendance.json",
  prizemoney: "FIT3179-DATA-VIS-2/js/prize_money.json",
  bubble: "FIT3179-DATA-VIS-2/js/bubble_chart.json",
  matchtime: "FIT3179-DATA-VIS-2/js/matchtime_combined.json",
  genderwinners: "FIT3179-DATA-VIS-2/js/gender_dist_and_winners.json"
};

// Embed each Vega-Lite chart
for (const [id, file] of Object.entries(specs)) {
  vegaEmbed(`#${id}`, file, { actions: false }).catch(console.error);
}
