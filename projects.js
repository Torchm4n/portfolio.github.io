document.addEventListener("DOMContentLoaded", async () => {
    const data_promise = fetch("./data.json").then(r => r.json()).then(obj => Object.values(obj));
    const length_promise = data_promise.then(d => d.length);

    const data = await data_promise;
    const length = await length_promise;

    data.forEach(item => {
        var project_div = document.createElement("div");
        project_div.classList.add("project_div");
        document.body.appendChild(project_div);

        var month = document.createElement("h1");
        month.textContent = item.month;
        month.style.color = "rgba(0, 0, 0, 1)";
        month.style.paddingTop = "1rem";

        var title = document.createElement("h2");
        title.textContent = item.title;
        title.style.color = "rgba(0, 0, 0, 1)";

        var description = document.createElement("p");
        description.textContent = item.description;
        description.style.color = "rgba(0, 0, 0, 1)";

        if (item.link != "No link") {
            project_div.addEventListener("mousedown", e => {
                window.open(item.link, '_blank');
            });
        };

        project_div.appendChild(month);
        project_div.appendChild(title);
        project_div.appendChild(description);
    });
});