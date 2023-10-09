import { App } from "vue";
import {
    Button,
    Checkbox, Collapse, CollapsePanel,
    Drawer, Input,
    InputNumber,
    Progress,
    Radio,
    RadioButton,
    RadioGroup, Select,
    Space, Table,
    Textarea, Tooltip,Option
} from "tdesign-vue-next";

export default (app:App) => {
    app
    .use(Button)
    .use(Drawer)
    .use(Radio)
    .use(Space)
    .use(RadioGroup)
    .use(RadioButton)
    .use(Textarea)
    .use(InputNumber)
    .use(Progress)
    .use(Checkbox)
    .use(Tooltip)
    .use(Collapse)
    .use(CollapsePanel)
    .use(Input)
    .use(Table)
    .use(Select)
    .use(Option)
}
