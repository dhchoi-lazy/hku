import React, { useRef, useLayoutEffect } from "react";
import bureaycracy from "./bureaucracy.json";
import * as d3 from "d3";

export default function Bureaucracy() {
  const ref = useRef();
  useLayoutEffect(() => {
    const data = bureaycracy;
    const svg = d3.select(ref.current);
    const width = 1200;
    const height = 1800;
    const radius = Math.min(width, height) / 2;
    const duration = 1000;
    svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width * 1.5, -height / 2.5, width * 3, height * 3])

      .attr("style", "width: 100%; height: auto; font: 30px inherit;");

    const tree = d3
      .tree()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);

    let root = d3.hierarchy(data);
    root = tree(root);

    // Initial collapse
    root.children.forEach(collapse);
    update();

    function collapse(node) {
      if (node.depth === 1) {
        // Checking if the node is at the first depth
        node.children?.forEach((child) => {
          if (!child.children) {
            // If the child has no further children, don't collapse
            return;
          }
          child._children = child.children;
          child._children.forEach(collapse); // Collapse children of this child
          child.children = null;
        });
      } else if (node.depth > 1) {
        // For nodes deeper than the first depth
        if (node.children) {
          node._children = node.children;
          node._children.forEach(collapse); // Further collapse their children
          node.children = null;
        }
      }
    }

    function clickNode(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update();
    }

    function update() {
      svg.selectAll("g").remove();

      root = tree(root);

      const linkGroup = svg
        .append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5);
      const nodeGroup = svg.append("g");
      const labelsGroup = svg
        .append("g")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3);

      linkGroup
        .selectAll("path")
        .data(root.links())
        .join("path")
        .attr(
          "d",
          d3
            .linkRadial()
            .angle((d) => d.x)
            .radius((d) => d.y)
        )
        .transition()
        .duration(duration)
        .attr("opacity", 1);

      const nodes = nodeGroup
        .selectAll("circle")
        .data(root.descendants())
        .join("circle")
        .attr("r", (d) => (d.data.value ? d.data.value : 20))
        .attr("fill", (d) => (d.children ? "#AFB9B8" : "#BF3415"))
        .attr(
          "transform",
          (d) => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`
        )
        .on("click", (event, d) => clickNode(d));

      nodes
        .transition()
        .duration(duration)
        .attr(
          "transform",
          (d) => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`
        );

      labelsGroup
        .selectAll("text")
        .data(root.descendants())
        .join("text")
        .style("paint-order", "fill stroke")
        // .style("fill", "#fff")
        // .style("stroke", "#000")
        .attr("dy", "0.31em")
        .attr("x", (d) => (d.x < Math.PI ? (!d.children ? 6 : -6) : 0))
        .attr("text-anchor", (d) =>
          d.x < Math.PI ? (!d.children ? "start" : "end") : "middle"
        )

        .text((d) => d.data.name)

        .attr("transform", (d, i) => {
          if (i === 0) {
            return `rotate(0) translate(${d.y},0) rotate(0)`;
          } else {
            return `rotate(${(d.x * 180) / Math.PI - 90}) translate(${
              d.y
            },0) rotate(${d.x >= Math.PI ? 180 : 0})`;
          }
        })
        .on("click", (event, d) => clickNode(d))
        .transition()
        .duration(duration)
        .attr("transform", (d, i) => {
          if (i === 0) {
            return `rotate(0) translate(${d.y},0) rotate(0)`;
          } else {
            return `rotate(${(d.x * 180) / Math.PI - 90}) translate(${
              d.y
            },0) rotate(${d.x >= Math.PI ? 180 : 0})`;
          }
        });
    }
  }, []);

  return (
    <div
      style={{
        // maxWidth: "100vh",
        // minWidth: "20vw",
        // viewBox: "0 0 1800 1800",
        margin: "0 auto",
      }}
    >
      <svg ref={ref} />
    </div>
  );
}
