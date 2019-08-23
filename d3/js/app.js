var bars = d3.select("#chart")
                .selectAll("div")
                .data([20,16,18,22,16]);
bars.enter()
    .append("div")
    .text(function(d){return d;})
    .style("height", function(d){ return d*20+"px";});

function generateData() {
    var nums = [];
    var size = Math.floor(Math.random()*20);
    for (var i = 0; i < size; i++) {
        nums.push(Math.floor(Math.random()*20));
    }
    buildChart(nums);
}
function buildChart(data) {
    var bars = d3.select("#chart")
                .selectAll("div")
                .data(data);
    bars.transition()
        .duration(1000)
        .text(function(d){return d;})
        .style("height", function(d){return d*20 +"px";})
        .style("background-color", "white");
    bars.enter().append("div")
        .transition()
        .duration(1000)
        .text(function (d) { return d; })
        .style("height", function (d) { return d * 20 + "px" })
        .style("background-color", "lightblue");
    bars.exit().remove();
}