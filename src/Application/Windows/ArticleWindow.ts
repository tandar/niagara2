import { DesktopComponent } from "../../Components/LayoutComponents/DesktopComponents/Desktop/DesktopComponent";
import { DateInput } from "../../Components/LayoutComponents/FormComponents/FormFields/DateInput";
import { DateTimeInput } from "../../Components/LayoutComponents/FormComponents/FormFields/DateTimeInput";
import { IntegerInput } from "../../Components/LayoutComponents/FormComponents/FormFields/IntegerInput";
import { RelatedIdNameInput } from "../../Components/LayoutComponents/FormComponents/FormFields/RelatedIdNameInput";
import { TextInput } from "../../Components/LayoutComponents/FormComponents/FormFields/TextInput";
import { WindowModuleLister } from "../../Components/LayoutComponents/WindowsComponents/WindowModuleLister";

export class ArticleWindow extends WindowModuleLister {
  constructor(desktop: DesktopComponent) {
    super(desktop, "Article");
    this.setWindowMode(1);
    this.renderContent();
  }

  renderContent() {
    // const windowContent = this.getWindowContent();
    // const form = new WindowForm(windowContent);
    // const i1 = new TextInput(form, { label: 'Name' });
  }

  addFormFields() {
    for (let i = 1; i < 3; i++) {
      let newField = new TextInput({ label: "Text" + i });
      this.formFields.set("a" + i, newField);
      this.form.addChild(newField);

      newField = new IntegerInput({ label: "Number" + i });
      this.formFields.set("b" + i, newField);
      this.form.addChild(newField);

      newField = new DateInput({ label: "Date" + i });
      this.formFields.set("c" + i, newField);
      this.form.addChild(newField);

      newField = new DateTimeInput({ label: "DateTime" + i });
      this.formFields.set("d" + i, newField);
      this.form.addChild(newField);

      newField = new RelatedIdNameInput({ label: "Related" + i });
      this.formFields.set("e" + i, newField);
      this.form.addChild(newField);

      if (i % 3 == 0) {
        newField.setBlocks(8, 1);
      }
      if (i % 4 == 0) {
        newField.setBlocks(12, 4);
      }
    }
  }
  dataGridSettings() {
    return {
      columns: [{ dataField: "", type: "", width: "", label: "" }],
    };
  }
}
