import React from 'react';
import Button from "../src/components/basics/forms/Button";

const Template = (args) => <Button {...args} />;

export default {
	title: 'Forms/Inputs/Buttons',
	component: Button,
};

export const Flexible = Template.bind({});

Flexible.args = {
	type: 'submit',
	label: 'Fill user credentials',
	uppercase: true,
	flexible: true
};

export const FullWidth = Template.bind({});

FullWidth.args = {
	type: 'submit',
	label: 'Fill user credentials',
	uppercase: true,
	flexible: false
};
