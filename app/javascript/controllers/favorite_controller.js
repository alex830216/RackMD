import { Controller } from "stimulus";
import ax from "lib/http/ax";

export default class extends Controller {
  static targets = [ "icon", "counter" ];
  static values = { id: Number };

  toggleFavorite(e) {
    e.preventDefault();
    this.addFavorite(this.idValue);
  };

  addFavorite(id) {
    const url = `/api/v1/notes/${id}/favorite`;
    let counter = Number(this.counterTarget.innerText)
    ax.post(url)
      .then((res) => {
        const icon = this.iconTarget;
        if (res.data.status === "added") {
          this.counterTarget.innerText = counter + 1
          icon.classList.remove("far");
          icon.classList.add("fas"); 
        } else {
          this.counterTarget.innerText = counter -1
          icon.classList.remove("fas");
          icon.classList.add("far");
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }
}
