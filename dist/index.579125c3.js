document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll(".collapse__title").forEach((el)=>{
        el.addEventListener("click", ()=>{
            const content = el.nextElementSibling;
            console.log(content);
            if (content.style.maxHeight) document.querySelectorAll(".collapse__content").forEach((el)=>el.style.maxHeight = null);
            else {
                document.querySelectorAll(".collapse__content").forEach((el)=>el.style.maxHeight = null);
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

//# sourceMappingURL=index.579125c3.js.map
