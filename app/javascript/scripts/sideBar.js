
document.addEventListener("turbolinks:load", () => {
  const sidebar = document.querySelector(".sidebar")
  const handle = document.querySelector(".handle")
  const handleBtn = document.querySelector(".handle-btn")

  if (sidebar) {
    handleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open")
      BtnChange()
    })

    handle.addEventListener("mouseover", () => {
      sidebar.classList.toggle("open")
    })

    function BtnChange() {
      if (sidebar.classList.contains("open")) {
        handleBtn.classList.add("rotated")
      } else {
        handleBtn.classList.remove("rotated")
      }
    }
  }
})


