import {MDCSelect} from '@material/select';

const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});

import {MDCDrawer} from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));