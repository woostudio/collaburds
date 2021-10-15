import { newSpecPage } from '@stencil/core/testing';
import { Notification } from './notification';
import { mapObjectToAttrs } from '../../utils/test-utils';

const data = {
  'notification-id': 'unique-id',
  heading: 'Your offer has been activated!',
  text: 'Shop now. Offer ends in 12 days',
  'notification-type': 'success',
  'is-dismissable': true,
  'is-dismissed': false,
  cta: 'Shop now',
  position: 'bottom',
  'bottom-position': '20px',
  'top-position': '20px',
  'heading-icon': 'check-circle',
  animated: 'fade',
  'count-down-utc': '2020-02-22T00:00:00.000Z',
};

const dataAttrs = mapObjectToAttrs(data);

it('should build', () => {
  expect(new Notification()).toBeTruthy();
});

it('should render a notification component', async () => {
  const page = await newSpecPage({
    components: [Notification],
    html: `<cds-notification></cds-notification>`,
  });

  expect(page.root.tagName).toBe('CDS-NOTIFICATION');
});

it('should render a notification component with provided props', async () => {
  const page = await newSpecPage({
    components: [Notification],
    html: `
      <cds-notification ${dataAttrs}></cds-notification>
    `,
  });

  // expect(page.root).toEqualHtml(`
  //   <cds-notification ${dataAttrs}></cds-notification>
  // `)

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
  expect(page.root.querySelector('.notification-heading')).toEqualText(data.heading);
  expect(page.root.querySelector('p')).toEqualText(data.text);
  expect(page.root.querySelector('.button')).not.toBeUndefined();
  // expect(page.root.querySelector('.button')).toEqualText(data.cta);
  expect(page.root.querySelector('.delete')).not.toBeUndefined();
  expect(page.root.querySelector('.notification')).toHaveClass(`is-${data.position}`);
  expect(page.root.querySelector('.notification')).toHaveClass(`is-${data['notification-type']}`);
  expect(page.root.querySelector('.notification')).toHaveClass('animated');
  expect(page.root.querySelector('.notification')).not.toHaveClass('is-hidden');
  expect(page.root.querySelector('cds-countdown')).not.toBeUndefined();
  // expect(page.root.querySelector('cds-countdown')).toEqualAttribute('date-utc-to', data['date-utc-to'])
});

it('should emit notification dismissed event', () => {
  const notification = new Notification();
  const spy = jest.spyOn(notification.notificationDismissed, 'emit');
  expect(notification.dismissed).toBeFalsy();
  notification.handleDismissNotificationClick();
  expect(spy).toHaveBeenCalled();
  expect(notification.dismissed).toBe(true);
});

it('should emit call to action clicked event', () => {
  const notification = new Notification();
  const spy = jest.spyOn(notification.ctaClicked, 'emit');
  notification.handleCtaClick();
  expect(spy).toHaveBeenCalled();
});
