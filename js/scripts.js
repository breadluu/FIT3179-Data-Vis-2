lucide.createIcons();

const specs = {
  map: "js/map_chart.json",
  timeline: "js/surface_timeline.json",
  attendance: "js/attendance.json",
  prizemoney: "js/prize_money.json",
  bubble: "js/bubble_chart.json",
  matchtime: "js/matchtime_combined.json",
  genderwinners: "js/gender_dist_and_winners.json"
};

for (const [id, file] of Object.entries(specs)) {
  vegaEmbed(`#${id}`, file, { actions: false }).catch(console.error);
}
