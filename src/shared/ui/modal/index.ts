import Content from './components/modal.content.vue';
import Portal, { type ModalPortalProps } from './components/modal.portal.vue';
import Root, { type ModalRootEmit, type ModalRootProps } from './components/modal.root.vue';

export const Modal = {
  Root,
  Portal,
  Content,
};

export type { ModalPortalProps, ModalRootEmit, ModalRootProps };
