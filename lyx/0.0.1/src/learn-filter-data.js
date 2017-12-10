var classes = ["main", "left"];
d3.selectAll("div")
    .each(function (d, i) {
        d3.select(this).attr("class", classes[i]);
    });

var sections = ["基站分布", "基站迁移", "短信词云", "回到主页"];
var left = d3.select(".left"); // returns the first class left element.
for (i = 0; i < sections.length; i++) {
    left.append("p").attr("class", "section-guide").text(sections[i]);
}

var sect_elements = document.getElementsByClassName("section-guide");
// add listeners to each of the elements, on click listener
for (var i; i < sect_elements.length; i++) {
    sect_elements[i].addEventListener("click", select(sect_elements[i].innerHTML));
}

var data = [ // <-A
    { expense: 10, category: "基站分布" },
    { expense: 15, category: "基站迁移" },
    { expense: 30, category: "基站分布" },
    { expense: 50, category: "短信词云" },
    { expense: 80, category: "基站迁移" },
    { expense: 65, category: "基站分布" },
    { expense: 55, category: "基站迁移" },
    { expense: 30, category: "短信词云" },
    { expense: 20, category: "基站分布" },
    { expense: 10, category: "短信词云" },
    { expense: 8, category: "基站迁移" }
];

//two parameters instead of zero, the second one can deal with button-clicked event
/*
function render(data, category) {
    var selection = d3.select(".main").selectAll("div.h-bar")
    .data(data);

    selection.enter().append("div").attr("class", "h-bar").append("span");

    selection.exit().remove();

    selection.attr("class", "h-bar")
    .style("width", function (d) {
        return (d.expense * 5) + "px";
    })
    .select("span").text(function (d) {
        return d.category;
    });

    d3.select(".main").selectAll("div.h-bar")
    .filter(function (d, i) {
        return d.category == category; 
        // if true, then data d will be added to the return set of this method call
    })
    .classed("selected", true);
}
*/

function render(data, category) {
    d3.select(".main").selectAll("div.h-bar") // <-B
        .data(data)
        .enter()
        .append("div")
        .attr("class", "h-bar")
        .append("span");

    d3.select(".main").selectAll("div.h-bar") // <-C
        .data(data)
        .exit().remove();

    d3.select(".main").selectAll("div.h-bar") // <-D
        .data(data)
        .attr("class", "h-bar")
        .style("width", function (d) {
            return (d.expense * 5) + "px";
        }
        )
        .select("span")
        .text(function (d) {
            return d.category;
        });

    d3.select(".main").selectAll("div.h-bar")
        .filter(function (d, i) { // <-E
            return d.category == category;
        })
        .classed("selected", true);
}

render(data);

function select(category) {
    render(data, category);
}