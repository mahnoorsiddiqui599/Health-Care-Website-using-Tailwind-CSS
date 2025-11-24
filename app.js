

 
  const toggleBtn = document.getElementById("menu-btn"); // HTML me button ka ID
  const menu = document.getElementById("menu"); // HTML me nav ka ID

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden"); // Toggle hidden class

    // Optional: Animate fade in (Tailwind arbitrary animation)
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("animate-[fadeIn_0.3s_ease-out]");
    } else {
      menu.classList.remove("animate-[fadeIn_0.3s_ease-out]");
    }

    // Accessibility
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !isExpanded);
  });


