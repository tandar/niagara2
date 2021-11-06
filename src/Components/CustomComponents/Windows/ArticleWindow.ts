import { Window } from "../components/DesktopComponents/WindowComponents/Window";

import { WindowForm } from "../components/FormComponents/WindowForm";
import { TextInput } from "../components/FormComponents/Fields/TextInput";
import { IntegerInput } from "../components/FormComponents/Fields/IntegerInput";
import { DateInput } from "../components/FormComponents/Fields/DateInput";
import { DateTimeInput } from "../components/FormComponents/Fields/DateTimeInput";
import { RelatedIdNameInput } from "../components/FormComponents/Fields/RelatedIdNameInput";

class ArticleWindow extends Window {
    constructor(parent) {
        super(parent);
        this.setWindowTitle('Article');
        
        this.renderContent();

    }

    renderContent() {
        const windowContent = this.getWindowContent();
        
        const form = new WindowForm(windowContent);
        const i1 = new TextInput(form, { label: 'Name' });

        const fields = [];

        for (let i = 1; i < 3; i++) {
            let newField = new TextInput(form, { label: 'Text' + i });
            fields.push(newField);

            newField = new IntegerInput(form, { label: 'Number' + i });
            fields.push(newField);

            newField = new DateInput(form, { label: 'Date' + i });
            fields.push(newField);

            newField = new DateTimeInput(form, { label: 'DateTime' + i });
            fields.push(newField);

            newField = new RelatedIdNameInput(form, { label: 'Related' + i });
            fields.push(newField);

            

            if (i % 3 == 0) {
                newField.setBlocks(8,1);
            }
            if (i % 4 == 0) {
                newField.setBlocks(12, 4);
            }
        }
        
    }
}

export { ArticleWindow };