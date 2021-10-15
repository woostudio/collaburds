import { newSpecPage } from '@stencil/core/testing';
import { Toast } from './toast';
import { mapObjectToAttrs } from '../../utils/test-utils';

const data = {
  position: 'br',
  'animate-in': 'fadeIn',
  'animate-out': 'fadeOut',
  duration: 5000,
  pauseOnHover: false,
};

const dataAttrs = mapObjectToAttrs(data);

const notificationData = {
  heading: 'Test',
  text: 'Test body',
  'is-dismissable': true,
};

it('should build', () => {
  expect(new Toast()).toBeTruthy();
});

it('should render a toast component', async () => {
  const page = await newSpecPage({
    components: [Toast],
    html: `<cds-toast></cds-toast>`,
  });

  expect(page.root.tagName).toBe('CDS-TOAST');
});

it('should render a toast component with provided props', async () => {
  const page = await newSpecPage({
    components: [Toast],
    html: `
      <cds-toast ${dataAttrs}></cds-toast>
    `,
  });

  Object.entries(data).forEach(([key, val]) => {
    if (typeof val === 'boolean' && val) {
      expect(page.root).toHaveAttribute(key);
    } else if (typeof val === 'boolean' && !val) {
      // Do nothing with false boolean props
    } else {
      expect(page.root).toEqualAttribute(key, val);
    }
  });

  // Check attributes applied
  expect(page.root.querySelector('.cds-toast-container')).toHaveClass(data.position);
});

it('should render a toast item on emit of "addToast" event', async () => {
  const page = await newSpecPage({
    components: [Toast],
    html: `
      <cds-toast ${dataAttrs}></cds-toast>
    `,
  });

  const toastEvent = new CustomEvent('addToast', {
    detail: notificationData,
  });

  page.win.dispatchEvent(toastEvent);
  await page.waitForChanges();

  expect(page.root.querySelector('cds-notification')).not.toBeNull();
  expect(page.root.querySelector('cds-notification')).toEqualAttributes(notificationData);
});
