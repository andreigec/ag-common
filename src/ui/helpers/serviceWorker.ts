import { asyncForEach } from '../../common/helpers/async';

export async function uninstallServiceWorkers() {
  if (typeof navigator === 'undefined') {
    return;
  }

  await navigator.serviceWorker
    .getRegistrations()
    .then(async (registrations) =>
      asyncForEach([...registrations], (r) => r.unregister()),
    );
}
