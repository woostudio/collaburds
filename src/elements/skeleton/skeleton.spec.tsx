import { newSpecPage } from '@stencil/core/testing';
import { Skeleton } from './skeleton';
import { mapObjectToAttrs } from '../../utils/test-utils';

const data = {
  count: 3,
  duration: 1.2,
  width: '100px',
  height: '20px',
  circle: false,
  squared: false,
  color: '',
  highlightColor: '',
};

const dataAttrs = mapObjectToAttrs(data);

it('should build', () => {
  expect(new Skeleton()).toBeTruthy();
});

it('should render a skeleton component', async () => {
  const page = await newSpecPage({
    components: [Skeleton],
    html: `<cds-skeleton></cds-skeleton>`,
  });

  expect(page.root.tagName).toBe('CDS-SKELETON');
});

it('should render a skeleton component with provided props', async () => {
  const page = await newSpecPage({
    components: [Skeleton],
    html: `
      <cds-skeleton
        ${dataAttrs}
      ></cds-skeleton>
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
  expect(page.root.querySelectorAll('.skeleton').length).toEqual(data['count']);
  const firstSkeleton: HTMLElement = page.root.querySelector('.skeleton');
  expect(firstSkeleton.style.getPropertyValue('height')).toEqual(data['height']);
  expect(firstSkeleton.style.getPropertyValue('height')).toEqual(data['height']);
  expect(firstSkeleton.style.getPropertyValue('width')).toEqual(data['width']);
  expect(firstSkeleton.style.getPropertyValue('animation')).toEqual(
    `skeleton ${data['duration']}s ease-in-out infinite`
  );
});

it('should render a circle skeleton component', async () => {
  const page = await newSpecPage({
    components: [Skeleton],
    html: `
      <cds-skeleton
        ${dataAttrs}
      ></cds-skeleton>
    `,
  });

  page.root.setAttribute('height', '100%');
  page.root.setAttribute('circle', '');
  await page.waitForChanges();

  const firstSkeleton: HTMLElement = page.root.querySelector('.skeleton');
  expect(firstSkeleton.style.getPropertyValue('border-radius')).toEqual('50%');
  expect(firstSkeleton.style.getPropertyValue('vertical-align')).toEqual('inherit');
});

it('should render a squared skeleton component', async () => {
  const page = await newSpecPage({
    components: [Skeleton],
    html: `
      <cds-skeleton
        ${dataAttrs}
      ></cds-skeleton>
    `,
  });

  page.root.setAttribute('height', '100%');
  page.root.setAttribute('squared', '');
  await page.waitForChanges();

  const firstSkeleton: HTMLElement = page.root.querySelector('.skeleton');
  expect(firstSkeleton.style.getPropertyValue('border-radius')).toEqual('0');
});
