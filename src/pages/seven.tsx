import React from 'react';
import HyperGrid from '@src/components/atoms/HyperGrid';
import Typography from '@src/components/atoms/Typography';
import PageNav from '@src/components/molecules/PageNav';

const PageSeven = () => {
  return (
    <HyperGrid container justify="center" className="py-10">
      <HyperGrid item xs={8}>
        <Typography variant="h3" className="text-primary-main mb-4">
          Overall thoughts
        </Typography>

        <ul className="list-disc list-inside ml-8 my-4">
          <li className="my-2">Good developer experience</li>
          <li className="my-2">
            Can implement styling without lots of boilerplate
          </li>
          <li className="my-2">
            Know what styles are being applied without having to look elsewhere
          </li>
          <li className="my-2">
            Increare in perforamce due to less scripts being created
          </li>
        </ul>

        <Typography variant="bodyXL" className="mb-4">
          There may some trepidation over moving to Tailwind due to our reliance
          on Material UI and the amount of work involved, however I don&apos;t
          think its too large a task. It&apos;s exponential in some sense; the
          more components you create in tailwind, the more you have available to
          use across the rest of the site.
        </Typography>

        <PageNav prevLink="/six" className="mt-8" />
      </HyperGrid>
    </HyperGrid>
  );
};

export default PageSeven;
