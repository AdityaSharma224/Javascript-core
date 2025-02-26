const tooltip = document.querySelector("#tooltip");

document.addEventListener("mouseover", function (event) {
    let link = event.target.closest(".link");
    if (!link) return;

    tooltip.textContent = link.dataset.tooltip;
    tooltip.style.display = "block";

    positionTooltip(tooltip, link);
});

document.addEventListener("mouseout", function (event) {
    if (!event.target.closest(".link")) return;
    tooltip.style.display = "none";
});

function positionTooltip(tooltip, link) {
    let rect = link.getBoundingClientRect();
    let tooltipRect = tooltip.getBoundingClientRect();

    let topSpace = rect.top;
    let bottomSpace = window.innerHeight - rect.bottom;
    let leftSpace = rect.left;
    let rightSpace = window.innerWidth - rect.right;

    if (topSpace > tooltipRect.height) {
        tooltip.style.top = rect.top - tooltipRect.height - 5 + "px";
        tooltip.style.left = rect.left + "px";
        tooltip.dataset.position = "top";
    } else if (bottomSpace > tooltipRect.height) {
        tooltip.style.top = rect.bottom + 5 + "px";
        tooltip.style.left = rect.left + "px";
        tooltip.dataset.position = "bottom";
    } else if (leftSpace > tooltipRect.width) {
        tooltip.style.left = rect.left - tooltipRect.width - 5 + "px";
        tooltip.style.top = rect.top + "px";
        tooltip.dataset.position = "left";
    } else {
        tooltip.style.left = rect.right + 5 + "px";
        tooltip.style.top = rect.top + "px";
        tooltip.dataset.position = "right";
    }
}
