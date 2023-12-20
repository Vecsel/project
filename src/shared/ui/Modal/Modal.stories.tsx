import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, nihil voluptas? Ab eum molestiae natus nisi quis. Aliquid facere labore magni nesciunt non possimus provident ratione reiciendis. Accusantium autem eveniet itaque maxime neque nobis odit optio qui quidem voluptate. Cum dicta eius esse exercitationem impedit incidunt magni nemo nesciunt quae tenetur? Aspernatur est nisi nulla praesentium temporibus? Amet asperiores cumque dicta distinctio eveniet facilis inventore pariatur sed tenetur? Architecto consequuntur deleniti dolor doloribus dolorum, ducimus eligendi, error et illo incidunt ipsa iste itaque laborum nemo, officiis omnis pariatur perspiciatis placeat quaerat quis reprehenderit sequi sint suscipit unde vero! Iure, repudiandae.',
};
export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, nihil voluptas? Ab eum molestiae natus nisi quis. Aliquid facere labore magni nesciunt non possimus provident ratione reiciendis. Accusantium autem eveniet itaque maxime neque nobis odit optio qui quidem voluptate. Cum dicta eius esse exercitationem impedit incidunt magni nemo nesciunt quae tenetur? Aspernatur est nisi nulla praesentium temporibus? Amet asperiores cumque dicta distinctio eveniet facilis inventore pariatur sed tenetur? Architecto consequuntur deleniti dolor doloribus dolorum, ducimus eligendi, error et illo incidunt ipsa iste itaque laborum nemo, officiis omnis pariatur perspiciatis placeat quaerat quis reprehenderit sequi sint suscipit unde vero! Iure, repudiandae.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
