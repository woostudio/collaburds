import { newSpecPage } from '@stencil/core/testing';
import { Video } from './video';

it('Should render direct video properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Video],
    html: `
    <cds-video
        video-url="direct-link"
        ratio="16by9"
        embedded="false"
        controls="true">
      </cds-video>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-video controls="true" embedded="false" ratio="16by9" video-url="direct-link">
  <figure class="image is-16by9">
    <div>
      <video class="has-ratio" controls="">
        <source src="direct-link" type="video/mp4">
      </video>
      <div class="video-control" hidden="">
        <div class="video-play-icon">
          <cds-icon color="white" icon="play" size="medium"></cds-icon>
        </div>
      </div>
    </div>
  </figure>
</cds-video>
  `);
});

it('Should render embedded video properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Video],
    html: `
      <cds-video
        video-url="embedded-link"
        ratio="16by9"
        embedded="true"
        controls="">
      </cds-video>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-video controls="" embedded="true" ratio="16by9" video-url="embedded-link">
      <figure class="image is-16by9">
        <iframe allowfullscreen="" class="has-ratio" frameborder="0" height="360" src="embedded-link" width="640"></iframe>
      </figure>
    </cds-video>
  `);
});
