import { Controller } from "stimulus";
import ax from "lib/http/ax";

export default class extends Controller {
  static targets = [ "icon" ];
  static values = { id: Number };

  toggleFavorite(e) {
    e.preventDefault();
    this.addFavorite(this.idValue);
  };

  addFavorite(id) {
    const url = `/api/v1/notes/${id}/favorite`;
    ax.post(url)
      .then((res) => {
        const icon = this.iconTarget;
        if (res.data.status === "added") {
          icon.classList.remove("far");
          icon.classList.add("fas"); 
        } else {
          icon.classList.remove("fas");
          icon.classList.add("far");
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }
}
