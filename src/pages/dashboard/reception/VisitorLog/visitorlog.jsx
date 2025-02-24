import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { VisitorLogListView } from './components/VisitorLogListView';

// ----------------------------------------------------------------------

const metadata = { title: `User cards | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <VisitorLogListView />
    </>
  );
}
