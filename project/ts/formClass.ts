import { getApplicableDataAsync } from "./getApplicableDataAsync";
import { SearchField } from "./types";

export default class ISEIForm {
  exp: HTMLInputElement;
  form: HTMLElement | null;
  list: HTMLElement | null;
  loading: HTMLElement | null;
  name: HTMLInputElement;
  radioButtonValue: string | undefined;
  zip: HTMLInputElement;
  constructor() {
    this.exp = document.getElementById("exp-input") as HTMLInputElement;
    this.form = document.getElementById("form");
    this.list = document.getElementById("list");
    this.loading = document.getElementById("loading");
    this.name = document.getElementById("name-input") as HTMLInputElement;
    this.radioButtonValue = (
      document.querySelector("input[name=special]:checked") as HTMLInputElement
    )?.value;
    this.zip = document.getElementById("zip-input") as HTMLInputElement;
  }

  setLoading(state: boolean): void {
    if (this.loading) this.loading.style.display = state ? "inline" : "none";
  }

  addListItem(value: string | undefined, fallback: string = "Unavailable") {
    const node = document.createElement("li");
    const textnode = document.createTextNode(value || fallback);
    node.appendChild(textnode);
    this?.list?.appendChild(node);
  }

  async updateListing(params: SearchField) {
    try {
      this.setLoading(true);
      const results: SearchField[] = await getApplicableDataAsync(params);

      // For displaying the loading when awaiting
      // await new Promise((resolve) => setTimeout(resolve, 150));

      // Remove children
      if (this.list) this.list.innerHTML = "";

      results.map((coachData: SearchField) => {
        this.addListItem(coachData.name, "Unavailable Name");
      });

      if (this?.list?.innerHTML === "") {
        this.addListItem("No listings match your search");
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.setLoading(false);
    }
  }

  __init__() {
    this.form?.addEventListener("keyup", (/** event: KeyboardEvent */) => {
      const params: SearchField = {
        name: this.name?.value,
        yearsOfExperience: parseInt(this.exp?.value),
        zip: this.zip?.value,
        specialization: [this.radioButtonValue],
      };

      this.updateListing(params);
    });

    this.form?.addEventListener("submit", (/** event: SubmitEvent */) => {
      const params: SearchField = {
        name: this.name?.value,
        yearsOfExperience: parseInt(this.exp?.value),
        zip: this.zip?.value,
        specialization: [this.radioButtonValue],
      };

      this.updateListing(params);
    });

    document
      .querySelectorAll("input[name='special']")
      .forEach((input: Element) => {
        input.addEventListener("change", (/** event: ChangeEvent */) => {
          const value: HTMLInputElement | null = document.querySelector(
            "input[name=special]:checked"
          );
          this.radioButtonValue = value?.value;

          const params: SearchField = {
            name: this.name?.value,
            yearsOfExperience: parseInt(this.exp?.value),
            zip: this.zip?.value,
            specialization: [this.radioButtonValue],
          };

          this.updateListing(params);
        });
      });
  }
}
