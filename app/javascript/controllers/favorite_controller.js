import { Controller } from "stimulus";
import ax from "lib/http/ax";

export default class extends Controller {
  static targets = [ "icon", "total" ];
  static values = { id: Number };

  addFavorite(e) {
    e.preventDefault();
    const url = `/api/v1/notes/${this.idValue}/favorite`;
    let total = Number(this.totalTarget.innerText)
    let data = { like: { total } }
    ax.post(url, data)
      .then((res) => {
        const icon = this.iconTarget;
        if (res.data.status === "added") {
          if (icon.classList.value === "fa-heart favorite_icon text-sm far"){
            this.totalTarget.innerText = total + 1
            icon.classList.remove("far");
            icon.classList.add("fas");
            console.log("1") 
          } else {
            this.totalTarget.innerText = total - 1
            icon.classList.remove("fas");
            icon.classList.add("far");
            console.log("2")
          }
        } else {
          if (res.data.status === "removed" && total > 0){
            if (icon.classList.value === "fa-heart favorite_icon text-sm far") {  
              this.totalTarget.innerText = total + 1
              icon.classList.remove("far");
              icon.classList.add("fas"); 
              console.log("3")
            }else {
              this.totalTarget.innerText = total - 1
              icon.classList.remove("fas");
              icon.classList.add("far")
              console.log("4")
            }
          } else {
          this.totalTarget.innerText = total + 2
          icon.classList.remove("far");
          icon.classList.add("fas");
          console.log("5")
          }
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }
}
