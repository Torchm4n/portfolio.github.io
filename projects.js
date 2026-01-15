document.addEventListener("DOMContentLoaded", async () => {
    const data_promise = fetch("./data.json").then(r => r.json()).then(obj => Object.values(obj));
    const length_promise = data_promise.then(d => d.length);

    const data = await data_promise;
    const length = await length_promise;

    data.forEach(item => {
        var project_div = document.createElement("div");
        project_div.classList.add("project_div");
        document.body.appendChild(project_div);

        var month_heading = document.createElement("h1");
        month_heading.textContent = item.month;
        month_heading.style.color = "rgba(0, 0, 0, 1)";
        month_heading.style.paddingTop = "1rem";

        var title_heading = document.createElement("h2");
        title_heading.textContent = item.title;
        title_heading.style.color = "rgba(0, 0, 0, 1)";

        var description = document.createElement("p");
        description.textContent = item.description;
        description.style.color = "rgba(0, 0, 0, 1)";

        if (item.link != "No link") {
            project_div.addEventListener("mousedown", e => {
                window.open(item.link, '_blank');
            });
        };

        project_div.appendChild(month_heading);
        project_div.appendChild(title_heading);
        project_div.appendChild(description);
    });
});